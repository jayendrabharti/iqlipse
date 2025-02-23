import EmailTemplate from '@/component/contact/EmailTemplate';
import { getClubInfo } from '@/sanity/fetching/clubInfo.fetch';
import { imageURL } from '@/sanity/utils/common.utils';
import nodemailer from 'nodemailer';

export async function POST(request) {

    
    try {
        const requestBody = await request.json();
        const clubInfo = await getClubInfo();

        const { email,name, subject, message } = requestBody;

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: clubInfo.email,
              pass: clubInfo.appPassword,
            },
          });

        const data = await transporter.sendMail({
            from: `Iqlipse ${clubInfo.email}`,
            to: clubInfo.contactEmails.map(mail=>`${mail},`),
            subject: requestBody.subject,
            html: EmailTemplate({ imagesrc:imageURL(clubInfo.logoSmall).url(),email,name, subject, message })
        }) 

        return new Response(JSON.stringify(data), { status: 200 });      
        
    } catch (error) {
        console.log(error)
        return new Response("Failed to Send Mail", { status: 500 });
    }

};

"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Send } from "lucide-react";

const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    name: Yup.string().required("Required"),
    subject: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
});

export default function ContactPage() {

    const initialValues = { 
        email: "", 
        name: "", 
        subject: "", 
        message: "" 

    }

    const handleSubmit = async(values,{resetForm}) => {
        const res = await fetch('/api/contact/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });
        if(res.status == 200){
            console.log(res)
            alert('Message was sent successfully !!');
            resetForm();
        }else{
            alert('Failed to sent Message !! Try again !');
            resetForm();
        }
    }

    return (
        <section>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-center text-logoColor">
                    Contact Our Club
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-textColor3 sm:text-xl">
                    Have questions about our events? Want to join our club? Need more
                    information about membership? Reach out to us.
                </p>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ values, isSubmitting, setValues }) =>{

                      return(
                        <Form className="space-y-8">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-textColor2"
                                >
                                    Your email
                                </label>
                                <Field
                                    type="email"
                                    name="email"
                                    className="shadow-sm bg-backgroundColor2 border border-borderColor3 text-textColor1 text-sm rounded-lg block w-full p-2.5 placeholder:text-textColor3"
                                    placeholder="Your E-mail Address"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-red text-xs"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-textColor2"
                                >
                                    Your Name & other information
                                </label>
                                <Field
                                    type="text"
                                    name="name"
                                    className="shadow-sm bg-backgroundColor2 border border-borderColor3 text-textColor1 text-sm rounded-lg block w-full p-2.5 placeholder:text-textColor3"
                                    placeholder="Enter your Name & other information"
                                />
                                <ErrorMessage
                                    name="name"
                                    component="div"
                                    className="text-red text-xs"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block mb-2 text-sm font-medium text-textColor2"
                                >
                                    Subject
                                </label>
                                <Field
                                    type="text"
                                    name="subject"
                                    className="shadow-sm bg-backgroundColor2 border border-borderColor3 text-textColor1 text-sm rounded-lg block w-full p-2.5 placeholder:text-textColor3"
                                    placeholder="How can we assist you?"
                                />
                                <ErrorMessage
                                    name="subject"
                                    component="div"
                                    className="text-red text-xs"
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="message"
                                    className="block mb-2 text-sm font-medium text-textColor2"
                                >
                                    Your message
                                </label>
                                <Field
                                    as="textarea"
                                    name="message"
                                    rows="6"
                                    className="shadow-sm bg-backgroundColor2 border border-borderColor3 text-textColor1 text-sm rounded-lg block w-full p-2.5 placeholder:text-textColor3"
                                    placeholder="Leave a message..."
                                />
                                <ErrorMessage
                                    name="message"
                                    component="div"
                                    className="text-red text-xs"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="p-3 font-bold text-center text-[#fff] rounded-lg bg-logoColor sm:w-fit hover:bg-buttonColor focus:ring-4 focus:outline-none focus:ring-borderColor3 text-md transi duration-300 group flex flex-row"
                            >
                                {isSubmitting? 'Sending message ...':'Send message'}
                                <Send className="transition-all duration-300 ml-2 group-hover:ml-5" />
                            </button>
                        </Form>
                    )}}
                </Formik>
            </div>
        </section>
    );
}
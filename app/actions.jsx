"use server";

import { getClubInfo } from "@/sanity/fetching/clubInfo.fetch"
import { getEvents } from "@/sanity/fetching/events.fetch";
import { getMembers } from "@/sanity/fetching/members.fetch";
import puppeteer from 'puppeteer';

export async function GetClubInfo() {
    try {
        const clubInfo = await getClubInfo();

        return clubInfo;
    } catch (error) {
        return error;
    }
}

export async function GetTeam() {
    try {
        const team = await getMembers();

        return team;
    } catch (error) {
        return error;
    }
}

export async function GetEvents() {
    try {
        const events = await getEvents();

        return events;
    } catch (error) {
        return error;
    }
}

export async function GetInstagramPostData(URL) {

    try {

        const browser = await puppeteer.launch();
        const page = await browser.newPage(); 
        await page.goto(`${URL}embed/captioned`);
        await page.setViewport({ width: 1080, height: 1024 });

        const data = await page.evaluate(() => {
            const username = document.querySelector('.Username')?.innerText;
            const img = document.querySelector('.EmbeddedMediaImage');
            const avatarImg = document.querySelector('.Avatar').children[0];
            const caption = document.querySelector('.Caption')?.innerHTML;
            const likes = document.querySelector('.SocialProof')?.innerText;
            const redirectURL = document.querySelector('.EmbeddedMedia')?.href;

            return {
                imageSrc: img ? img.src : null,
                avatarSrc: avatarImg ? avatarImg.src : null,
                caption: caption || null,
                likes: likes || null,
                username: username || null,
                redirectURL: redirectURL || null,
            };
        });

        await browser.close();

        return data;

    } catch (error) {
        return error;
    }

}
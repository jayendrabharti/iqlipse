"use server";

import { getClubInfo } from "@/sanity/fetching/clubInfo.fetch"
import { getEvents } from "@/sanity/fetching/events.fetch";
import { getMembers } from "@/sanity/fetching/members.fetch";

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


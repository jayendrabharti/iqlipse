import { Calendar } from "lucide-react";
import BlockFormat from "../utils/BlockFormat";

const events = {
    name: "events",
    title: "Events",
    type: "document",
    icon: Calendar,
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "name" },
            validation: rule => rule.required()
        },
        {
            name: "description",
            title: "Description",
            type: "string",
            validation: rule => rule.required()
        },
        {
            name: "type",
            title: "Type",
            type: "string",
            validation: rule => rule.required()
        },
        {
            name: "location",
            title: "Location",
            type: "string",
            validation: rule => rule.required()
        },
        {
            name: "registrationLink",
            title: "Registration Link",
            type: "url"
        },
        {
            name: "registrationStarts",
            title: "Registration Starts on",
            type: "datetime",
            validation: rule => rule.required()
        },
        {
            name: "registrationEnds",
            title: "Registration Ends on",
            type: "datetime",
            validation: rule => rule.required()
        },
        {
            name: "startTime",
            title: "Start Time",
            type: "datetime",
            validation: rule => rule.required()
        },
        {
            name: "endTime",
            title: "End Time",
            type: "datetime",
            validation: rule => rule.required()
        },
        {
            name: "page",
            title: "Event Page",
            type: "array",
            of: BlockFormat
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
            validation: rule => rule.required(),
            fields: [
                { name: "alt", title: "Alt", type: "string" }
            ]
        },
        {
            name: "faqs",
            title: "FAQs",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "question", title: "Question", type: "string" },
                        { name: "answer", title: "Answer", type: "string" }
                    ]
                }
            ]
        },
        {
            name: "updates",
            title: "Updates",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "title", title: "Title", type: "string" },
                        { name: "updateTime", title: "Update Date & Time", type: "datetime", initialValue: (new Date()).toISOString() },
                        { name: "content", title: "Content", type: "array", of: BlockFormat }
                    ]
                }
            ]
        },
        {
            name: "gallery",
            title: "Gallery",
            type: "array",
            of: [
                { type: "image" }
            ]
        },
    ]
}

export default events;
import { Bell } from "lucide-react";
import BlockFormat from "../utils/BlockFormat";

const announcements = {
    name: 'announcements',
    title: 'Announcements',
    type: 'document',
    icon: Bell,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: rule => rule.required()
        },
        {
            name: 'body',
            title: 'Body',
            type: 'array',
            of: BlockFormat,
            validation: rule => rule.required()
        },
    ],
}

export default announcements;

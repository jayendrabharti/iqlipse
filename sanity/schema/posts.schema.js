import { MessageSquareHeart } from "lucide-react";
import BlockFormat from "../utils/BlockFormat";

const posts = {
    name: 'posts',
    title: 'Posts',
    type: 'document',
    icon: MessageSquareHeart,
    fields: [
        {
            name: "caption",
            title: "Caption",
            type: "string",
            validation: rule => rule.required()
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "caption" },
            validation: rule => rule.required()
        },
        {
            name: "image",
            title: "Main Image",
            type: "image",
            validation: rule => rule.required()
        },
        {
            name: "body",
            title: "Body",
            type: "array",
            of: BlockFormat,
        },
    ]
};

export default posts;

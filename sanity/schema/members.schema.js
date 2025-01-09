import { orderRankOrdering, orderRankField } from '@sanity/orderable-document-list';

const members = {
     name: "members",
     title: "Members",
     type: "document",
     orderings: [orderRankOrdering],
     fields: [
          orderRankField({ type: "members" }),
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
               name: "category",
               title: "Category",
               type: "string",
               validation: rule => rule.required(),
               initialValue: 'student',
               options: {
                    list: [
                         { title: "Student", value: "student" },
                         { title: "Faculty / Teacher", value: "faculty" },
                    ]
               }
          },
          {
               name: "designation",
               title: "Designation / Role",
               type: "string",
               validation: rule => rule.required()
          },
          {
               name: 'email',
               title: 'E-mail Address',
               type: 'string',
               validation: rule => rule.required()
          },
          {
               name: 'socials',
               title: 'Social Media Links',
               type: 'object',
               fields: [
                    { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
                    { name: 'instagram', title: 'Instagram URL', type: 'url' },
                    { name: 'github', title: 'Github URL', type: 'url' },
                    { name: 'facebook', title: 'Facebook URL', type: 'url' },
               ]
          },
          {
               name: "image",
               title: "Image",
               type: "image",
               options: { hotspot: true },
               fields: [
                    { name: "alt", title: "Alt", type: "string" },
               ]
          },
     ],
}

export default members;
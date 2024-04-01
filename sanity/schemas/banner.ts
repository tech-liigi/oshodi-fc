import {defineField, defineType, defineArrayMember,Rule } from 'sanity'
import {  ComponentIcon } from '@sanity/icons'
import {client} from "../../sanity"

const banner = defineType({
    name:"banner",
    type:'document',
    title:"Banner",
    icon: ComponentIcon,
    fields:[
        defineField(  {
            name:"title",
            title:"Title",
            type: "string",
            readOnly:true
        }),
        defineField({
            name:"cta_item",
            title:"CTA",
            type:"object",
            fields:[
                {
                    name:"title",
                    title:"Title",
                    type: "string",
                },
                {
                    name:"link",
                    type:'url',
                    title: "Link",
                }
            ]
        }),
        defineField({
            name:"images",
            title:"Backgrounds (for slideshow)",
            type:"array",
            of:[
                defineArrayMember({
                    name:"image",
                    type: "image",
                    title: "Image"
                })
            ]
        })
       ]
})


export default  banner;
import {defineField, defineType, defineArrayMember} from 'sanity'
import {  MenuIcon} from '@sanity/icons'

const nav = defineType({
    name: 'nav',
    title: 'Navigation of the website',
    type: 'document',
    icon:MenuIcon,
    fields: [
        defineField({
           title:"Title",
           name:'title',
           type: 'string',
            readOnly:true
        }),
        defineField({
            name:'cta',
            title:"CTA",
            validation: Rule => Rule.max(2),
            type: "array",
            of: [
                defineArrayMember({
                    name:"cta_item",
                    title:"Item",
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
                })

            ]
        }),
        defineField({
            name:"pages",
            title:"Pages",
            type: "array",
            of:[
                defineArrayMember({
                    name:"page",
                    title:"Page",
                    type:"object",
                    fields:[
                        defineField({
                            title:"Title",
                            name:'title',
                            type: 'string',
                        }),
                        defineField({
                            title:"Link",
                            name:'link',
                            type: 'string',
                        }),
                        defineField({
                            name:"id",
                            type:"string",
                            title: "ID",
                            readOnly: true,
                        }),
                        defineField({
                            name:"visible",
                            type:"boolean",
                            title:"Visible in menu",
                            initialValue: true
                        }),
                        defineField({
                            name:"page_submenu",
                            title:"Submenu",
                            type:"object",
                            fields:[
                                defineField({
                                    name:"clubs",
                                    title:"Clubs",
                                    type:"array",
                                    of:[
  defineArrayMember({
      type:"reference",
      to: {type:"clubs"}
  })
                                    ],
                                }),
                                defineField({
                                    name: "links",
                                    type:"array",
                                    of:[
                                        defineArrayMember({
                                            name:"link",
                                            type:'object',
                                            title:"Link",
                                            fields:[
                                                defineField({
                                                    title:"Title",
                                                    name:'title',
                                                    type: 'string',
                                                }),
                                                defineField({
                                                    title:"URL",
                                                    name:'url',
                                                    type: 'url',
                                                })
                                            ]
                                        })
                                    ],
                                    title:"Links",
                                }),
                            ]
                        }),
                        defineField({
                            name:"page_sections",
                            title:"Sections",
                            type:"array",
                            of:[
                         defineArrayMember({
                             name:"section",
                             type:"object",
                             title:"Section",
                             fields:[
                                 defineField({
                                     name:"title",
                                     type:"string",
                                     title: "Title",
                                 }),
                                 defineField({
                                     name:"id",
                                     type:"string",
                                     title: "ID",
                                     readOnly: true,
                                 }),
                                 defineField({
                                     name:"visible",
                                     type:"boolean",
                                     title:"Visible",
                                     initialValue: true
                                 }),
                                 defineField({
                                     name:"description",
                                     type:"string",
                                     title: "Description",
                                 }),    defineField({
                                     name:"tagline",
                                     type:"string",
                                     title: "Tagline",
                                 }),
                                 defineField({
                                     name:"image",
                                     type:"image",
                                     title: "Image",
                                 }),
                                 defineField({
                                     name:"cta",
                                     type:"array",
                                     validation: Rule => Rule.max(2),
                                     title: "CTAs",
                                     of:[
                                         defineArrayMember({
                                             name:"cta_item",
                                             title:"Item",
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
                                         })
                                     ]
                                 }),
                             ]
                         })
                            ],
                        }),
                        defineField({
                            name:"page_subnav",
                            title:"Subnav",
                            type:"array",
                            of:[
                                defineArrayMember({
                                    name:"page_subnav_item",
                                    title:"Subnav Item",
                                    type:"object",
                                    fields:[
                                        defineField({
                                            name:"title",
                                            type:'string',
                                            title:"Title",
                                        }),
                                        defineField({
                                            name:'section_reference',
                                            title:"Section Reference (Enter section ID)",
                                            type:"string",
                                        }),
                                        defineField({
                                            name:"redirect_link",
                                            title:"Or Link (For Redirect)",
                                            type:"url",
                                        })
                                    ]
                                })
                            ]
                        })
                    ],
                })
            ]
        })
    ]
});

export default nav;
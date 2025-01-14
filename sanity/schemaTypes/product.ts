import { defineField, defineType } from "sanity";


export const product = defineType({
    name : "product",
    type: "document",
    title : "Product",
    fields:[
        
        defineField({
            name : "name",
            type:"string",
            title: "Product Name",
        }),
        defineField({
            name : "price",
            type:"number",
            title: "Price",
        }),
        defineField({
            name : "rate",
            type:"number",
            title: "Rate",
        }),
        defineField({
            name : "review",
            type:"number",
            title: "Review",
        }),
        defineField({
            name : "image",
            type:"image",
            title: "Image",
        }),
        defineField({
            name : "description",
            type:"string",
            title : "Description",
        }),     
    ]
})
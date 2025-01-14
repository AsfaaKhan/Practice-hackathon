import { defineQuery } from "next-sanity";


export const firstFourProducts = defineQuery(`*[_type == "product"][0..3]{
    _id,
    name,
    price,
    rate,
    review,
    description,
    "imageUrl" : image.asset->url
}`)

export const middleFourProducts = defineQuery(`*[_type == "product"][4..7]{
    _id,
    name,
    price,
    rate,
    review,
    description,
    "imageUrl" : image.asset->url
}`)

export const lastEightProducts = defineQuery(`*[_type == "product"][8..15]{
    _id,
    name,
    price,
    rate,
    review,
    description,
    "imageUrl" : image.asset->url
}`)
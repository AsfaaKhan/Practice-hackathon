import { createClient } from "next-sanity";

const client = createClient(
    {
        projectId : "fzza3aaw",
        dataset : "production",
        useCdn : false,
        apiVersion:  '2025-01-13',
        token:"sk3PVQTdyQfBEh7nlMRofmdThfRsIa2Ro4vpSxQKyYz6oTlKDUqYqzVP5mhksuHrsylWKcMIa54vUvofQY4tj9ZdRHr1DjcINLmmgR6k0QKseBCcTDAIxUyC7VpAWJN5rmklv5nBinhaQTukZvloxw4qYQ5SOfVcq23jIAYpoGsMcUTLDpBU"
    }
)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function sanityFetch({query,params = {}} : {query : string , params?:any}){
    return await client.fetch(query,params)
}

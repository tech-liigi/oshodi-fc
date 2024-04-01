import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    token: process.env.SANITY_SECRET_TOKEN, // Only if you want to update content with the client
    useCdn: false, // set to `false` to bypass the edge cache
    apiVersion: '2024-03-23', // use current date (YYYY-MM-DD) to target the latest API version
})

// ./src/sanity/lib/client.ts
import {createClient} from 'next-sanity'

const client = createClient({
    
    projectId: 'putg7l53',
    
    dataset: 'production',
    
    useCdn: false,
    
    apiVersion: '2025-01-04',
})

export default client;
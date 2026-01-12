import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { NextRequest } from 'next/server'

export async function POST(req) {
    try {
        const evt = await verifyWebhook(req)

        // Do something with payload
        // For this guide, log payload to console
        const { id } = evt.data
        const eventType = evt.type

        if (eventType === 'user.created') {
            console.log(`New user created with id: ${id}`)
        }
        else if (eventType === 'user.updated') {
            console.log(`User with id: ${id} updated`)
        }
        else if (eventType === 'user.deleted') {
            console.log(`User with id: ${id} deleted`)
        }


        return new Response('Webhook received', { status: 200 })
    } catch (err) {
        console.error('Error verifying webhook:', err)
        return new Response('Error verifying webhook', { status: 400 })
    }
}
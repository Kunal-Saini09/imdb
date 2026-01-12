import { Webhook } from 'svix';
import { verifyWebhook } from '@clerk/nextjs/webhooks';

export async function POST(req) {
    try {
        const evt = await verifyWebhook(req);

        // Do something with payload
        const { id } = evt.data;
        const eventType = evt.type;

        if (eventType === 'user.created') {
            console.log(`New user created with id: ${id}`)
        }
        else if (eventType === 'user.updated') {
            console.log(`User with id: ${id} updated`)
        }
        else if (eventType === 'user.deleted') {
            console.log(`User with id: ${id} deleted`)
        }

        return Response.json({ message: 'Webhook received' }, { status: 200 });
    } catch (err) {
        console.log('Error: Could not verify webhook:', err.message);
        return Response.json({ message: 'Error: Verification error' }, { status: 400 });
    }
}
import { Webhook } from 'svix';

const webhookSecret = process.env.WEBHOOK_SECRET;

export async function POST(req) {
    try {
        const payload = await req.text();
        const headers = {
            'svix-id': req.headers.get('svix-id'),
            'svix-timestamp': req.headers.get('svix-timestamp'),
            'svix-signature': req.headers.get('svix-signature'),
        };

        const wh = new Webhook(webhookSecret);
        const evt = wh.verify(payload, headers);

        const { id } = evt.data;
        const eventType = evt.type;
        console.log(`Received webhook with ID ${id} and event type of ${eventType}`);

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
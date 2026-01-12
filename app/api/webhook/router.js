import { verifyWebhook } from '@clerk/express/webhooks';

app.post(
    '/api/webhooks',
    bodyParser.raw({ type: 'application/json' }),

    async (req, res) => {
        try {
            const evt = await verifyWebhook(req);

            // Do something with payload
            const { id } = evt.data;
            const eventType = evt.type;
            console.log(`Received webhook with ID ${id} and event type of ${eventType}`);
            console.log('Webhook payload:', body);

            if (eventType === 'user.created') {
                console.log(`New user created with id: ${id}`)
            }
            else if (eventType === 'user.updated') {
                console.log(`User with id: ${id} updated`)
            }
            else if (eventType === 'user.deleted') {
                console.log(`User with id: ${id} deleted`)
            }

            return res.status(200).send('Webhook received');
        } catch (err) {
            console.log('Error: Could not verify webhook:', err.message);
            return res.status(400).send('Error: Verification error');
        }
    },
);
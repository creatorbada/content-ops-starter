export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // Log the webhook for debugging
        console.log('Stackbit webhook received:', req.body);
        
        // Return success
        res.status(200).json({ 
            success: true,
            message: 'Webhook received'
        });
    } catch (error) {
        console.error('Webhook error:', error);
        res.status(500).json({ 
            error: 'Internal server error',
            message: error.message 
        });
    }
}

require('dotenv').config()
const express = require('express')
const app = express()

const webpush = require('web-push')

webpush.setVapidDetails('test@test.com', process.env.VAPID_PUBLIC_KEY, process.env.VAPID_PRIVATE_KEY)

app.use(express.json())

app.post('/subscribe', (req, res) => {
    const subscriptionObj = req.body

    res.status(201).json({message: 'Hello world!'})

    const payload = { title: 'Test Push Notification'}

    webpush.sendNotification(subscriptionObj, JSON.stringify(payload))
})

const port = process.env.PORT
app.listen(port, '127.0.0.1', () => {
    console.log('Server listening on port ', port);
})

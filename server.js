const express = require('express');
const bodyParser = require('body-parser');
const mailgun = require('mailgun-js');
const cors = require('cors');


const app = express();
// Mailgun configuration
// const domain = 'sandboxbce0ef5780654ee197b04afd4020d903.mailgun.org';
// const api_key = '0bdb45fbedca0c6a35887c9fd937c2d9-3750a53b-56262497'; 
const mailgunInstance = mailgun({ apiKey: api_key, domain: domain });

const corseOptions = {
    origin: 'http://localhost:3000',
}
app.use(cors(corseOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API endpoint for subscription
app.post('/', (req, res) => {
    const email = req.body;
    const mailData = {
        from: 'parikshit <parikshit4879.be22@chitkara.edu.in>',
        to:'parikshit4879.be22@chitkara.edu.in',
        subject: 'Welcome to Our Newsletter!',
        text: 'Dear subscriber,\n\nThank you for signing up for our newsletter. We are excited to have you on board!\n\nBest regards,\nThe Newsletter Team',
    };

    mailgunInstance.messages().send(mailData, function (error, body) {
        if (error) {
            console.error(error);
            return res.status(500).send("Error sending email");
        } else {
            console.log(body);
            res.status(200).send("Email sent successfully");
        }
    });
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`The Server is running at port ${PORT}!`);
});
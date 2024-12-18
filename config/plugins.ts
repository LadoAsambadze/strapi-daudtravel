module.exports = ({ env }) => ({
    // ...
    email: {
        config: {
          provider: 'nodemailer',
          providerOptions: {
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
              user: 'lado.asambadze1@gmail.com',
              pass: 'yrpdlftdwodjkiqr', // Your app password
            },
          },
          settings: {
            defaultFrom: 'lado.asambadze1@gmail.com',
            defaultReplyTo: 'lado.asambadze1@gmail.com',
          },
        },
      },
    // ...
  });
export default {
    jwt: {
      publicSecret: process.env.APP_SECRET_PUBLIC || 'default',
      privateSecret: process.env.APP_SECRET_PRIVATE || 'default',
      publicExpiresIn: '1d',
      privateExpiresIn: '1d',
    },
};

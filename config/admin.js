module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f1b2c2246bfb0fb74548fab729a5d398'),
  },
});

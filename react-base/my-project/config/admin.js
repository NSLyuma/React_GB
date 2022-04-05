module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '99a2d8407813245d5d9c9842b157e81c'),
  },
});

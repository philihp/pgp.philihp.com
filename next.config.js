module.exports = {
  rewrites: async () => [
    {
      source: '/pks/lookup',
      destination: '/api/lookup',
    },
  ],
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
}

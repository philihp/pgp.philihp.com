module.exports = {
  rewrites: async () => [
    {
      source: '/pks/lookup',
      destination: '/api/lookup',
    },
  ],
}

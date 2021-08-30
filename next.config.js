module.exports = {
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: '/pks/lookup',
      destination: '/api/lookup',
    },
  ],
}

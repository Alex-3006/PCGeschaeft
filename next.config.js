module.exports = {
  future: {
    webpack5: false,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};
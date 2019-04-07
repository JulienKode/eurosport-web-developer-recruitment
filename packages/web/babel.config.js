module.exports = {
  // presets run in reverse order
  presets: [['react-app', { flow: false, typescript: true }]],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    [
      'babel-plugin-styled-components',
      {
        ssr: false,
        fileName: false,
      },
    ],
  ],
};

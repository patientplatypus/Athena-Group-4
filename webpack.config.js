var path = require('path');

module.exports = [{
  entry: './client/provider/index.js',
  output: {
    filename: 'provider-app.js',
    path: path.resolve(__dirname, 'public/javascript')
  }
},
{
  entry: './client/patient/index.js',
  output: {
    filename: 'patient-app.js',
    path: path.resolve(__dirname, 'public/javascript')
  }
},
{
  entry: './client/index.js',
  output: {
    filename: 'index-app.js',
    path: path.resolve(__dirname, 'public/javascript')
  }
}];

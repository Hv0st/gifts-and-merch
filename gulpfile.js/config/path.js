const pathSrc = './src';
const pathDest = './public';


module.exports = {
  root: pathDest,

  html: {
    src: pathSrc + '/*.html',
    watch: pathSrc + '/**/*.html',
    dest: pathDest
  },

  scss: {
    src: pathSrc + '/*.{sass,scss}',
    watch: pathSrc + '/**/*.{sass,scss}',
    dest: pathDest + '/css/'
  },

  js: {
    src: pathSrc + '/*.js',
    watch: pathSrc + '/**/*.js',
    dest: pathDest
  },

  img: {
    src: pathSrc + '/assets/img/**/*.{png,jpg,jpeg,gif,svg}',
    watch: pathSrc + '/assets/img/**/*.{png,jpg,jpeg,gif,svg}',
    dest: pathDest + '/assets/img/'
  },

  font: {
    src: pathSrc + '/assets/font/**/*.{eot,ttf,otf,otc,ttc,woff,woof2,svg}',
    watch: pathSrc + '/assets/font/**/*.{eot,ttf,otf,otc,ttc,woff,woof2,svg}',
    dest: pathDest + '/assets/font/'
  },

  favicon: {
    src: pathSrc + '/assets/img/favicon/favicon.svg',
    watch: pathSrc + '/assets/img/favicon/favicon.svg',
    dest: pathDest + '/assets/img/favicon/'
  },
}
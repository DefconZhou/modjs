// A sample Modfile
// More info at https://github.com/modulejs/modjs/

module.exports = {
    plugins: {
        concat: "grunt-contrib-concat@0.3.0"
    },
    tasks: {
        concat: {
            options: {
              separator: '/* separator */',
            },
            dist: {
              src: ['foo.js', 'bar.js'],
              dest: 'dist/foobar.js',
            },
        }
    }
};
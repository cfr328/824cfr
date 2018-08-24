var gulp = require('gulp');
var server = require('gulp-webserver');
var sass = require('gulp-sass');
var mincss = require('gulp-clean-css');
var minjs = require('gulp-uglify');
var autofex = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var data = require('./mock/data.json');
var fs = require('fs');
var url = require('url');
var path = require('path');
gulp.task('css', function() {
    return gulp.src('src/sass/*.scss')
        .pipe(sass())
        .pipe(autofex({
            browsers: ['last 2 versions']
        }))
        .pipe(mincss())
        .pipe(gulp.dest('src/css'))
})
gulp.task('server', function() {
    return gulp.src('src')
        .pipe(server({
            port:8888,
            open:true,
            middleware: function(req,res) {
                if(req.url === '/favicon.ico') {
                    res.end('');
                    return;
                }
                var pathname = url.parse(req.url).pathname;
                pathname = pathname === '/' ? 'index.html':pathname;
                if(pathname === '/api/list') {
                    res.end(JSON.stringify(data))
                } else {
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)))
                }
            }
        }))
})
gulp.task('watch', function() {
    return gulp.watch('src/sass/*.scss', gulp.series('css'))
})
gulp.task('dev', gulp.series('server', 'css', 'watch'))
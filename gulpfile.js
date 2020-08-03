const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const temlateHtml = require('gulp-template-html');
const concat = require('gulp-concat');

gulp.task('sass', function(){
    return gulp.src('./app/sass/page/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./css/'));
});

gulp.task('pug', function(){
    return gulp.src('./app/pug/*.pug')
        .pipe(pug({
            doctype: 'html',
            pretty: true
        })).pipe(gulp.dest('./faq/'));
})

gulp.task('builHtml6', function(){
    return gulp.src('./faq/index.html')
        .pipe(temlateHtml('template.html'))
        .pipe(gulp.dest('./faq/'));
});

gulp.task('watch', function(){
    gulp.watch('./app/sass/**/*.sass', gulp.series('sass'));
    gulp.watch('./app/pug/**/*.pug', gulp.series('pug'));
})
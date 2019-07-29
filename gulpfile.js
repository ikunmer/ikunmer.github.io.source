var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    htmlmin = require('gulp-htmlmin'),
    htmlclean = require('gulp-htmlclean');
    concat = require('gulp-concat');
//JSѹ��
gulp.task('uglify', function() {
    return gulp.src(['./public/js/**/.js','!./public/js/**/*min.js'])//ֻ���ų�min.js�ļ����ǲ��Ͻ���һ�㲻�������⣬�����Լ����͵��޸��ҵ��޸�Ϊreturn gulp.src(['./public/**/*.js','!./public/zuoxi/**/*.js',,'!./public/radio/**/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'));//��Ӧ�޸�Ϊ./public����
});
//public-fancybox-jsѹ��
gulp.task('fancybox:js', function() {
    return gulp.src('./public/vendors/fancybox/source/jquery.fancybox.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/vendors/fancybox/source/'));
});
// �ϲ� JS
gulp.task('jsall', function () {
    return gulp.src('./public/**/*.js')
    // ѹ����������
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./public'));
});
//public-fancybox-cssѹ��
gulp.task('fancybox:css', function() {
    return gulp.src('./public/vendors/fancybox/source/jquery.fancybox.css')
        .pipe(cssmin())
        .pipe(gulp.dest('./public/vendors/fancybox/source/'));
});
//CSSѹ��
gulp.task('cssmin', function() {
    return gulp.src(['./public/css/main.css','!./public/css/*min.css'])   
        .pipe(cssmin())
        .pipe(gulp.dest('./public/css/'));
});
//ͼƬѹ��
gulp.task('images', function() {
    gulp.src('./public/uploads/*.*')
        .pipe(imagemin({
            progressive: false
        }))
        .pipe(gulp.dest('./public/uploads/'));
});
// ѹ�� public Ŀ¼ html�ļ� public/**/*.hmtl ��ʾpublic�������ļ�����html��������ǰĿ¼
    gulp.task('minify-html', function() {
      return gulp.src('./public/**/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
             removeComments: true,
             minifyJS: true,
             minifyCSS: true,
             minifyURLs: true,
        }))
        .pipe(gulp.dest('./public'))
    });
gulp.task('build', ['uglify', 'cssmin', 'fancybox:js', 'fancybox:css', 'jsall','images']);

//, 'minify-html'
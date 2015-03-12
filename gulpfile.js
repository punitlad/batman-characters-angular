var gulp = require('gulp'),
            connect = require('gulp-connect');

gulp.task('webserver', function() {
    connect.server({
        root: 'app/',
        port: 8080
    });
});

gulp.task('default', ['webserver']);

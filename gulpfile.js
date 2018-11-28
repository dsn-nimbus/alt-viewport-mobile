const gulp = require('gulp')
const del = require('del')
const uglify = require('gulp-uglify')

gulp.task('del', () => {
    return del.sync(['dist'])
})

gulp.task('build', () => {
    return gulp.src('./src/alt-viewport-mobile.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))    
})

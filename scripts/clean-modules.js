
import gulp from 'gulp'
import { deleteSync } from 'del'

// 清理 node_modules 任务
gulp.task('clean:modules', (done) => {
  deleteSync([
    '../apps/*/node_modules',
    '../packages/*/node_modules',
    '../node_modules'
  ], { force: true })
  done()
})
// 清理构建文件
gulp.task('clean:dist', (done) => {
  deleteSync([
    '**/dist/**',
    'dist'
  ], { force: true })
  done()
})

// 清理所有（node_modules 和构建文件）
gulp.task('clean:all', gulp.parallel('clean:modules', 'clean:dist'))

// 默认任务
gulp.task('default', gulp.series('clean:all'))

const gulp = require('gulp');
const cp = require('child_process')

const { watch } = gulp;



const doWatch = () => {
 cp.exec('npm run serve');
  watch(['src/**/*.ts', '!src/**/*.test.ts', 'docs/**/*', 'themes/**/*'],  { events: 'all' }, (done) => {
    console.info('file changed')
    cp.exec("npm run build")
    done()
  })
}

exports.watch = doWatch;

exports.default = doWatch
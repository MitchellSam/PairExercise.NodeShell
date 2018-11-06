const fs = require('fs')

let fileList = fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
        throw err
    } else {
        process.stdout.write(files.join('\n'))
    }
})

module.exports = function() {
    process.stdout.write(fileList)
}
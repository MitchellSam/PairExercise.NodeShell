
// function printWorkingDir() {
//     process.stdout.write(process.cwd())
// }

module.exports = function() {
    // process.stdout.write(printWorkingDir())
    process.stdout.write(process.cwd())
    process.stdout.write('\nprompt > ');
}

// module.exports.printWorkingDir = printWorkingDir();


const pwd = require('./pwd.js')
const ls = require('./ls.js')
const cat = require('./cat.js')

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim().split(' ');

    if (cmd[0] === 'pwd') {
        pwd()
    } else if (cmd[0] === 'ls') {
        ls()
    }else if (cmd[0] === 'cat') {
        // cat(filename)
    } else {
        process.stdout.write('You typed: ' + cmd[0]);
        process.stdout.write('\nprompt > ');
    }
});
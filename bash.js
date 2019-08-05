const pwd = require('./pwd');
process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    // process.stdout.write('You typed: ' + cmd);
    if (cmd === 'pwd') {

        // process.stdout.write(process.cwd())
        pwd()
    }
    process.stdout.write('\nprompt > ');
})
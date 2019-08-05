const pwd = require('./pwd');
const ls = require('./ls');
const fs = require('fs');
process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim().split(' ');

    // process.stdout.write('You typed: ' + cmd);
    if (cmd[0] === 'pwd') {

        // process.stdout.write(process.cwd())
        pwd();
    }
    if (cmd[0] === 'ls'){
        ls();
    }
    if (cmd[0] === 'cat'){
        console.log(cmd[1]);
        fs.readFile('./' + cmd[1],('utf8'),(err, content)=> {
            if(err){throw err}
            else{
                process.stdout.write(content);
            }
        });

    }
    process.stdout.write('\nprompt > ');
})

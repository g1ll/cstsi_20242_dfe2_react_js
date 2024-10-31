import bcrypt from "bcrypt";
import chalk from "chalk";
import scanf from "scanf";

const PLAINTEXT = 'senha5';

// bcrypt.hash(PLAINTEXT, 10, function(err, hash) {
//     console.log({hash});
// });

const PASSWORD_HASH = '$2b$10$Ng1vmS5NE.1oNetZ1.hf4O0LMXqDa8DMGWoBKRCJs/10bRIOG.S26'

console.log("Password:");
let input_password = scanf('%s');
console.log({input_password})

bcrypt.compare(input_password, PASSWORD_HASH, function(err, result) {
    if(err)
        return console.log({err})
    if(result)
        console.log(`${chalk.green('SENHA CORRETA!!!')}`)
    else   console.log(`${chalk.red('SENHA INCORRETA!!!')}`)
});
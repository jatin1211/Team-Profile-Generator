const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name = '',id = '',email = '',github){
        super(name,id,email);
        this.github = github;
        this.type = 'Engineer';
    }
    getGithub(){
        return `${this.github}`;
    }
    getRole(){
        if(this.github){
            return `Engineer`;
        }
    }
}
module.exports = Engineer;
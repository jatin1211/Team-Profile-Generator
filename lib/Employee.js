class Employee{
    constructor(name = '',id = '',email = ''){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return `${this.name}`;
        }

    getId(){
       return `${this.id}`;
    }
    getEmail(){
        return `${this.email}`;
    }
    getRole(){
        const employee = !this.officeNumber && !this.github && !this.school;
       
        
        if(employee){
            return `Employee`;
        }
       
    }
}



module.exports = Employee;
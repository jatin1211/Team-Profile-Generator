const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const writeToFile = require('./dist/pageTemplate');
var data = [];

    async function ManagerQuestions (){
        const value = await inquirer
    .prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is your Manager's name?"
        },
        {
            type: 'text',
            name: 'id',
            message: "What is your Manager's employee Id?"
        },
        {
            type: 'text',
            name: 'email',
            message: "What is your Manager's email address?"
        },
        {
            type: 'text',
            name: 'officeNumber',
            message: "What is your Manager's office number?"
        },
        {
            type:'list',
            name: 'addOrFinish',
            message: 'Would you like to add engineer or intern or finish building team?',
            choices:['engineer','intern','finish']
        },
        ])

        
        data.push(new Manager(value.name,value.id,value.email,value.officeNumber,this.type));
        checkFunction(value,data);
       
    }

async function EngineerQuestions (){
    const engineerData = await inquirer
    .prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is your Engineer's name?"
        },
        {
            type: 'text',
            name: 'id',
            message: "What is your Engineer's employee Id?"
        },
        {
            type: 'text',
            name: 'email',
            message: "What is your Engineer's email address?"
        },
        {
            type: 'text',
            name: 'github',
            message: "What is your Engineer's Github Username?"
        },
        {
            type:'list',
            name: 'addOrFinish',
            message: 'Would you like to add engineer or intern or finish building team?',
            choices:['engineer','intern','finish']
        },
    
    ])
    
    //console.log(data)
    
    data.push(new Engineer(engineerData.name,engineerData.id,engineerData.email,engineerData.github,this.type))
    checkFunction2(engineerData,data);
    }

    async function InternQuestions(){
        const internData = await inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: "What is your Intern's name?"
            },
            {
                type: 'text',
                name: 'id',
                message: "What is your Intern's employee Id?"
            },
            {
                type: 'text',
                name: 'email',
                message: "What is your Intern's email address?"
            },
            {
                type: 'text',
                name: 'school',
                message: "What is your Intern's school?"
            },
            {
                type:'list',
                name: 'addOrFinish',
                message: 'Would you like to add engineer or intern or finish building team?',
                choices:['engineer','intern','finish']
            },
        
        ])
       
        //console.log(data);
       
        data.push(new Intern(internData.name,internData.id,internData.email,internData.school,this.type))
        checkFunction(internData,data);
       
    }

    function checkFunction(first,data){
        if(first.addOrFinish == 'engineer'){
            EngineerQuestions();
            
        }
        else if(first.addOrFinish == 'intern'){
            InternQuestions();
        }
        else{
            console.log('finish,HTML generated');
            console.log(data);
            const page = writeToFile(data);
            fs.writeFile('./dist/index.html', page , err => {
                if(err){
                    throw Error('code incorrect')
                }
                console.log('htmlpage created');
            })
        };

    };

    function checkFunction2(engineerData,data){
        if(engineerData.addOrFinish == 'engineer'){
            EngineerQuestions();
            
        }
        else if(engineerData.addOrFinish == 'intern'){
            InternQuestions();
        }
        else{
            console.log('finish,HTML generated');
            console.log(data);
            const page = writeToFile(data);
            fs.writeFile('./dist/index.html', page , err => {
                if(err){
                    throw Error('code incorrect')
                }
                console.log('htmlpage created');
            })
        };

    }


    

    function printData(data){
        for(var i = 0; i < data.length; i++){
            console.log(data[i])
        }
    }

    ManagerQuestions();

    module.exports = {ManagerQuestions,EngineerQuestions,InternQuestions,checkFunction,data};

    
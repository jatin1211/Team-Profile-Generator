const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');


const ManagerQuestions = function (){
return inquirer
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
]
)}

const EngineerQuestions = function (){
    return inquirer
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
    
    ])}

    const InternQuestions = function (){
        return inquirer
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
                name: 'github',
                message: "What is your Intern's school?"
            },
            {
                type:'list',
                name: 'addOrFinish',
                message: 'Would you like to add engineer or intern or finish building team?',
                choices:['engineer','intern','finish']
            },
        
        ])}




ManagerQuestions()
    .then((data) => {
        if(data.addOrFinish == 'engineer'){
            EngineerQuestions();
            //console.log('add engineer');
    }
    else if(data.addOrFinish == 'intern'){
            InternQuestions();
            //console.log('add intern');
    }
    else{
        console.log('finish,HTML generated');
    }});
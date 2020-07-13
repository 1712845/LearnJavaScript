let readLineSync = require('readline-sync');
let fs = require('fs');

let students = [];

function loadData(){
    let context = fs.readFileSync('./data.json');
    students = JSON.parse(context);
};
function showStudents(){
    for(let student of students){
        console.log(student.name , student.age);
    }
};

function showCreateStudent(){
    let name = readLineSync.question('Student name: ');
    let age = readLineSync.question('Age: ');

    let student = {
        'name': name,
        'age': parseInt(age)
    };
    students.push(student);
};

function saveAndExit(){
    let context = JSON.stringify(students);
    fs.writeFileSync('./data.json', context , {encoding: 'utf8'});
};

function showMenu(){
    console.log('1.Show all students');
    console.log('2.Create new student');
    console.log('3.Save and exit')
    let option = readLineSync.question('> ')
    switch(option){
        case '1':
            showStudents();
            showMenu();
            break;
        case '2':
            showCreateStudent();
            showMenu();
            break;
        case '3':
            saveAndExit();
            break;
        default:
            console.log("Option wrong");
            break;
    };
};

function main(){
    loadData();
    showMenu();
};
main();
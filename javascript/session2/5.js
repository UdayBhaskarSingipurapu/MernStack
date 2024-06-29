//advanced operations
//filter, map, forEach, reduce, find, findIndex

let arr=[9,-23,78,65,87];

//filter
let res=arr.filter(function(element){
    return element>50;
})

console.log(res);

//map
let res2=arr.map(function(ele){
    if(ele%2==0){
        return ele+10;
    }
    else {
        return ele+20;
    }
})
console.log(res2);

//forEach

arr.forEach(function(element,index){

})













let emps=[
    {
        eno:100,
        name:'ravi',
        age:21,
        salary:2000
    },
    {
        eno:200,
        name:'uday',
        age:25,
        salary:5000
    },
    {
        eno:300,
        name:'bhaskar',
        age:30,
        salary:30000
    }
]

let young=emps.reduce(function(a,b){
    return a.age>b.age?b:a;
})
console.log(young);

let test={
    a:10,
    b:20,
    c:30
}

let k=Object.keys(test)
console.log(k);

let v=Object.values(test)
console.log(v);

//freeze, so that no changes can be done
Object.freeze(test);

//create a copy 
let copy=Object.assign({},test);
console.log(copy);

//merge objects

let obj1={x:10};
let obj2={y:20};
let merge=Object.assign({},obj1,obj2);
console.log(merge);


class Student {
    constructor(sno,name){
        this.sno=sno;
        this.name=name;
    }
    getStudent(){
        console.log("sno: ",sno);
        console.log("name: ",name);
    }
}

let x = new Student(1,'uday');
let y=new Student(2,'bhaskar');
console.log(x);console.log(y);


let college={
    col:'pvpsit',
    city: 'vij',
    phno:2345673456,
    branch:'CSE'
}

let std1={
    sno:1,
    name:'uday'
}

let std2={
    sno:2,
    name:'bhaskar'
}

Object.setPrototypeOf(std1,college);
Object.setPrototypeOf(std2,college);
console.log(std1);
console.log(std2);




class colege{
    constructor(collegeName,city){
        this.collegeName=collegeName;
        this.city=city;
    }
}

class student extends colege{
    constructor(collegeName,city,sno,name){
        super(collegeName,city);
        this.sno=sno;
        this.name=name;
    }
}

let std3=new student('pvpsit','vij', 3, 'uday');
console.log(std3);
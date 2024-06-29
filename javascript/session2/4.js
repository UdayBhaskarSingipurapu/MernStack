//objects

let person ={
    id:100,
    name: 'uday'

}
console.log(person.id);
console.log(person.name);

console.log(person['x']);

//iterate object

for(let x in person){
    console.log(person[x]);
}

//insertion
  person.age='hyd';

//deletion
  delete person.id;

//update
  person.name='bhaskar';

console.log(person);


//complex object

let student={
    sno:100,
    name:'uday', 
    city : 'vij',
    marks : [90,98,97],
    address:{
        plot:302,
        street: 'benz'
    },
    getAvg:function(){
      let sum=0;
      this.marks.forEach(function(element){
        sum+=element;
      })
      let avg=sum/this.marks.length;
        //console.log('sno is:', this.sno,'marks:',this.marks,'average', avg);
        return avg;
    },
    

};



console.log(student.name);
var x=student.getAvg();
console.log(x);


console.log(student.address.street);
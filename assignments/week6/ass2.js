const student={
    objtname:'student',
    roll:100,
    name:'ravi',
    id:'12a',
    cgpa:8.98
}

const employee={
    objname:'employee',
    empid:101,
    name:'somu',
    sal:12000,
    position:'manager'
}

const bus={
    objname:'bus',
    wheels:4,
    color:'yellow',
    company:'ashok leyland',
    milage:'60km/l'
}

const mobile={
    objname:'mobile',
    pintype:'c pin',
    company:'samsung',
    cost:8999.99,
    color:'black'
}

let a=[student,employee,bus,mobile]
for(let i of a)
    console.log(i)


    const stu={
        roll:100,
        name:'ravi',
        marks:[67,76,87,98,92],
        address:{
            street:'2nd lane',
            city:'vijayawada',
            state:'andhra'
        },
        average:function(arr){
            let sum=0
            for(let i of arr) sum+=i
            return sum/arr.length
        }
    }
    
    let re=stu.average(stu.marks)
    console.log('average of',stu,'marks is',res);
    const product={
        num:4321,
        name:'desktop',
        model:'win 11',
        price:'70000',
        discount:function(dis){
            let res=this.price*dis/100;
            return this.price-res
        }
    }
    
    let r=product.discount(15)
    console.log('the final price of',product,'after 10% discount is',r)




class employee{
    constructor(name,age,sal){
        this.name=name
        this.age=age
        this.sal=sal
    }
}

function getSal(a){
    return a+5000
}
Object.setPrototypeOf(employee.prototype,{getSal})

let emp1=new employee('ravi',25,8000)
let emp2=new employee('seenu',21,10000)
let emp3=new employee('raju',20,15000)
let emp4=new employee('ramesh',30,80000)
let emp5=new employee('somu',28,60000)

console.log('salaries of employees before changing\n\n\n')
let emp=[emp1,emp2,emp3,emp4,emp5]

for(let i of emp) 
    console.log(i)

for(let i of emp) 
    i.sal=employee.prototype.getSal(i.sal)

console.log('\n\n\nsalaries of employees after changing\n\n\n')

for(let i of emp) 
    console.log(i)



class product{
    constructor(brand,price,model){
        this.brand=brand;
        this.price=price;
         this.model=model
        }
    }
    
    let getDiscountPrice=function(a){
        let res=a*this.price/100
        return this.price-a
    }
    Object.setPrototypeOf(product.prototype,{getDiscountPrice})
    
    let p1=new product('samsung',10000,'m21')
    let p2=new product('vivo',20000,'v21')
    let p3=new product('iqoo',22000,'---')
    let p4=new product('realme',25000,'---')
    let p5=new product('iphone',65000,'gen10')
    
    let p=[p1,p2,p3,p4,p5]
    console.log('\n\nactual prices\n\n')
    
    for(let i of p){
        console.log(i.brand,'-',i.price,'(',i.model,')')
    }
    
    p1.price=p1.getDiscountPrice(25)
    p2.price=p2.getDiscountPrice(10)
    p3.price=p3.getDiscountPrice(20)
    p4.price=p4.getDiscountPrice(30)
    p5.price=p5.getDiscountPrice(15)
    
    console.log('\n\nafter discount\n\n')
    for(let i of p){
        console.log(i.brand,'-',i.price,'(',i.model,')')
    }
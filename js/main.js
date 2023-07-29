let shallow1=document.getElementById("shallow1")
function shallow(){ 
let x=[1,2,3];
let y=x;
x.push(5,9);
   shallow1.innerHTML=`shallow copy ${x}, <br> ${y}`
   console.log(x,y)
}

// let x={name:"Mani",
					// id:1,
					// position: "Junior developer"}
				
	// let y=x;
	// y.id=3;
	// console.log(x,y)
	
let deep1=document.getElementById("deep1")
let deep2=document.getElementById("deep2")
let deep3=document.getElementById("deep3")
function deep(){

let x=[1,2,3];
let y=[...x];
x.push(4);
deep1.innerHTML=`deep copy spread operator<br> x value: ${x},<br>   y value : ${y}`
console.log(x,y)


let a=[1,2,3];
let b=Object.assign([],a)
a.push(4);
deep2.innerHTML=`deep copy Object assign <br> a value: ${a},<br>   b value : ${b}`

console.log(a,b)




let c=[1,2,3];
let d=JSON.parse(JSON.stringify(c))
c.push(4);
deep3.innerHTML=`deep copy JSON stringify <br> c value: ${c},<br>   d value : ${d}`
console.log(c,d)
	
}	

let deephead=document.getElementById("deep0")
let deepOb1=document.getElementById("deep4")
let deepOb2=document.getElementById("deep5")
let deepOb3=document.getElementById("deep6")
function deepobj(){
	
	deephead.innerHTML = `
	<h3> x = {car: 'Hyndai-creta',engine: 'diesel'} </h3>` 

const x = {
    car: 'Hyndai-creta',
    
    engine: 'diesel'
}
let y={...x};

x.milege = 18;

z=JSON.stringify(x);
zz=JSON.stringify(y);

deepOb1.innerHTML=`deep copy spread operator<br> x value: ${z},<br>   y value : ${zz}`
console.log(x,y)




const a = {
    car: 'Hyndai-creta',
    
    engine: 'diesel'
}
let b=Object.assign({},a)

a.milege = 18;

f=JSON.stringify(a);
ff=JSON.stringify(b);

deepOb2.innerHTML=`deep copy object assign <br> a value: ${f},<br> b value : ${ff}`

console.log(a,b);


const c = {
     car: 'Hyndai-creta',
    
    engine: 'diesel'
}
let d=JSON.parse(JSON.stringify(c))

c.milege = 18;

j=JSON.stringify(c);
jj=JSON.stringify(d);

deepOb3.innerHTML=`deep copy JSON stringify <br> c value: ${j},<br>   d value : ${jj}`

console.log(c,d);

}
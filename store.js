function addproducts(count){
    for(let i=0;i<count;i++){
        ap[i]=prompt('Enter Product name:')
        pp[i]=prompt('Enter Your '+ ap[i]+' Product Price:')
        }

}
function deleteproducts(no,ap,pp){
         ap.splice(no,1);
         pp.splice(no,1);

}
function billing(sel,quan){
  cart.push(ap[sel]);
  var y=ap.indexOf(ap[sel]);
  total.push(pp[y]*quan);
  qua.push(quan);
}
function getbill(total){
 var cou=0;
 for(let i=0;i<total.length;i++){
     cou+=total[i];
 }
 return cou;
}
const prompt = require('prompt-sync')();
console.log("Welcome to Grocerry Store");
var ap=[];
var pp=[];
var cart=[];
var total=[];
var qua=[];
while(true){
console.log("1.Add Products\n2.Display Products\n3.Delete Products\n4.Purchase Products\n5.cart\n6.Total-Bill\n7.Press n to Exit");
var choice = prompt('Enter Your Choice:');
switch(choice){
    case "1":
        var count=prompt("Enter How many Products You need to Enter:")
        addproducts(count);
        break;
    case "2":
        if(ap.length>0){
        console.log("\t\tID\tName\tPrice");
        for(let i=0;i<ap.length;i++){
            console.log("\t\t"+i+"\t"+ap[i]+"\t"+pp[i]);
        }
        }
        else{
            console.log("No Products to Display");
        }
        break;
    case "3":
        var no=prompt("Enter Product Number To Delete:")
         deleteproducts(no,ap,pp)
         break;
    case "4":
        var sel=prompt("Enter Product ID to Purchase:")
        var quan=prompt("Enter Product Quantity:")
        billing(sel,quan);
        break;
    case "5":
        if(cart.length>0){
            console.log("\t\tName\tQuan\tTotal");
            for(let i=0;i<cart.length;i++){
                console.log("\t\t"+cart[i]+"\t"+qua[i]+"\t"+total[i]);
            }
            }
            else{
                console.log("No Products in Your Cart");
            }
        break;
    case "6":
        console.log("Your Total Bill Is:"+getbill(total));
        break;

}
if(choice=="n"){
    break;
}
}
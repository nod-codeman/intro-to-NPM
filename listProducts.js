// The 'faker' package generates random information based on the category selected. 

var faker = require("faker");

console.log("==============================");
console.log("WELCOME TO NOD-CODEMAN SHOP");
console.log("==============================");


for(var i = 0; i <10; i++){
    console.log(faker.fake("{{commerce.productName}} - ${{commerce.price}}"));
}

for(var i = 0; i <10; i++){
    console.log(faker.fake("{{internet.ip}} - {{finance.bitcoinAddress}} {{address.latitude}} - {{address.longitude}}"));
}
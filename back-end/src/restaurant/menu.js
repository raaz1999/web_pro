const  {readFileSync} = require('fs');


let loadUser=()=>JSON.parse(readFileSync('restaurant.json'));

module.exports={loadUser};
const fs = require("fs")

try{
    const read = fs.readFileSync("./text.txt","utf-8")
    console.log(read)
    fs.writeFileSync("./write",`${read}`)

}catch(err){
    console.log(err)
}
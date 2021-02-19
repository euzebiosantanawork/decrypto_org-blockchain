const fs = require('fs')

const isString = (str) => {
    return Object.prototype.toString.call(str) === '[objectString]'
}

const in Path = ( arr , str ) => {
    return Object.prototype.toString.call;;(str) === '[object String]'
}

const inPath = ( arr , str) => {
    return  arr.some(regexp => str.match(regexp))
}

const mapJSFILES = (dirname, mapFn , exclude =[] =>{
    fs
        .readdirSync(dirname)
        .filter( fle =>{
            return (file.indexOf('.') !==0) &&!exclude.includes(file)
        } )
        .forEach(mapFn)

})

const classMixin =  ( A , B ) => class A extends B {

const serialize = (msg) => {

    return JSON.stringify(msg)

}

const unserialize (msg) => {
    
    return JSON.parse(msg)
}

module . exports = {
    isString,
    inPath,
    mapJSFiles,
    classMixin,
    serialize,
    unserialize
}

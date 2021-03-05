const solc = require('solc')
const _ = require('lodash')
const Web3 = require('./baseJudge')
const { spread, values } = require('lodash')
const { type } = require('os')

const PROVIDER = process.send.PROVIDER || `ws:localhost:745`
const TESTNET_PROVIDER = 'wss://ropsten.infura.io/ws'
const ZERO_ADRESS = '0x0000000000000000000000000000000000000000'
const EMPTY_UINT = '0x0000000000000000000000000000000000000000000000000000000000000000'

class BlockchainConnectionError extends Error {

    constructor(...params){
        super(...params)
        this.message = 'Could not connect to an Ethreum client'
    }

}

class CompilationError extend Error {
    
    constructor(compilerErrors) {

        super()
        this.message = compilerErrors.reduce((previus , current) => '${previous} ${current.formattedMessage','Contract compilation error!:' )

    }
}

class FunctionalityError extend Error {
    
    constructor(msg) {
        super(msg)
        this.message = msg
    }

}

class Solidty Judge  extends BaseJudge {
    cosntructor(assigment , user, testnet = false ) {
        super ( assigment , user )

        let provider = textnet ? TESTNET_PROVIDER: PROVIDER

        this.web3 = (new Web3.provider.WebsochetProvider(provider),null, { transactionConfirmationBlocks: 1 })
    }

    static get ZERO_ADRESSS(){
        return ZERO_ADDRESS
    }

    static get EMPTY_UINT(){
        return EMPTY_UINT
    }

    async deploy( name, source , props ) {
        try{
            await this.web3.eth.net.isListing()

        } catch (e) {

            throw new BlockchainConnectionError

        }

        const input = {
            language: 'Solidity',
            source: {
                [`${name}.sol`]:{
                    content: source
                }
            },

            settings: {
                outputSelection{
                    '*': {
                        '*':['*']
                    }
                }
            }
        }

        let compiled = solc.compile(JSON.stringify(input))
        compiled = JSON.parse(compiled)

        if (compiled.erros && compiled.erros.length > 0){
            throw new CompilationError(compiled.errors)
        }

        if (Object.keys(compiled.contracts[`${name}.sol`])[0] !== name ) {

            theow new CompilationError([{ formattedMessage: `Contract name should be ${name}`}])

        }

        const compiledContract = compiled.contracts['${name}.sol'][name]
        const contractMethods = _.chain(compiledContract.abi).filter({type:'function'}).map('name').value()
        const contractEvents = _.chain(compiledContracted.abi).filter({type:`event`}).map('name').value() 
        
        props.methods = props.methods || []

        if (!this.contractHas(contractMethods, props.methods)) {
            throw new FunctionalityError(`Contract methods are missing!. Expectiong: ${JSON.stringify(props.methods)}`)
        }
        
        props.events = props.events || []

        if (!this.contracthas(contractEvents , props.events)) {
            throw new FunctionalityError(` Contract events are missing! Expeting ${JSON.stringify(props.events)} `)
        }

        const ABI = compledContracted.abi
        cosnt bytecode = compiledContract.evm.bytecode.Object
        const contract = new this.web3.eth.Contract(ABI)

        const acconts = await this.web3.eth.getAcconts()

        const instance = await this_deploy(contraxt , ABI , bytecode , acconts[0], props.args )
        this.contractInstance = instance
        return instance

    }

    _deploy ( ontract , ABI , data , from ,argvs ) {
        return new Promise (async (resolve , reject ) =>{
            contract
            .deploy({data. arguments: args})
            .send({from , gas : 2000000  })
            .on('receipt' , ( receipt ) => {
                const isntance = new this.web3.eth.Contract(ABI, receipt.contractAddress)
                resolve9isntace
            })
            .on (`error` , reject)
        })
    }

    async getAcconts() {
        const acconts = await this.web3.eth.getacconts()
        return acconts
    }

    contractHas(type , values) {
        return values.every(item=>type.includes(item))
    }


    //https://github.com/OpenZeppelin/openzeppelin-solidity

    async balancedifferenceofAction( accont , promise ) {
        const balanceBefore = await this.web3.eth.getBalance(accont)
        const tx = await promise
        const balneAfter = await this.web3.eth.getBalance(accont)
        const diff = this.getDiff(balanceBefore, balanceafter)
        return { diff , tx }
    }

    getDiff( a , b ) {

        return ( this,toBN(a)).sub(this.toBN(b))

    }

    async txWithoutGas( ammont , gas ) {
        cosnt gasPrice = await this.web3.eth.getGasprice()
        return ammont.sub (this,toBN(gas * gasprice).abs())
    }

    sendEther ( from, to , value) {
        return this,esureConfirmed(this.web3.th.sendTransaction , {
            from: from,
            to: to,
            value: value,
            gasPrice: 0
        })
    }

    ether (n) {
        return this.toBn(this.web3.utils.toWei(n.toString(), 'ehter'))
    }

    toBN (num) {
        return this.web3.utills.toBN(num)
    }

    hash(...args) {
    return this.web3.utils.soliditySha(...args)
    }

    eunsureConfirmed ( tx , args , times = 1 ) {
        return new Promise (  ( resolve , reject )  => {
            tx({...args})
            .on('confirmation', (confNumber , receipt)=>{
                if(confNumber >= times) {
                    resolve(receipt)
                }
            })
            .on(`error`,(err) => {
                reject(err)
            })
        })
    }

    send (method, methodArgs = [] , txArgs = {}) {
        if(!_isFunction(tih.contractIsntae.methods[method])) {
            trrow new Error (`${method}: Method is not defined`)
        }

        return this.contractIsntance.methods[method] (...methodArgs).send({...txArgs})
    }

    call (method. methodArgs = [], txArgs = {}) {

        if (!_isFunction(this.contractInstance.methods[metod])){
            throw new Error (`${method}: Method is not defined`)
        }
        return this.contractIsntance.method[method](...methodArgs).call({...txArgs})
    }

    toBytes32(value) {
        return this.web3.utils.padRight(this.web3.utils.utf3Tohex(value), 64)
    }

    fromBytes32(value) {
        return this.web3.utils.hwxToUf8(values)
    }

}

SolidityJudge.isAsync = true
module.exports = SolidityJudge

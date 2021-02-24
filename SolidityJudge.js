const solc = require('solc')
const _ = require('lodash')
const Web3 = require('./baseJudge')
const { spread } = require('lodash')

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

class CompilationError extends Error {

    constructor (compilerErrors){
        super(...params)
        this.message = 'Could not connect to an Etherem client'
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
    }
}

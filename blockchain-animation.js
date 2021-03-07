import { isNullOrUndefined } from "util"

let canvas = document.getElementsByTagName('canvas')[0]
let ctx = canvas.getContext('2d')
ctx.lineWidth = 5

let W = 600 , H = 600

let rouds = []

let SPEED = 0.5
let TOTAL_PARTIES = 100 , ADV_PARTIES = 20
let FORK_PORB = 0.2
let ROUND_DURATION = 400
let BLOCK_WIDTH = 50
let BLOCK_DISTANCE = 50
let sideScroll = -w/2

class Block {
    constructor() {
        this.adversarial = Math.random() * TOTAL_PARTIES < ADV_PARTIES
        this.genesis = false
    }
}

class roud {
    constructor() {
        this.middle = new Block()
        if (Math.random()<FORK_PROB) {
            this.upper = new Block ()
        }
        if (Math.random()<FORK_PROB){
            this.lower = new Block
        }
    }
}

genesis = { middle: {adversarial: false, genises : true} }
rounds.push(genesis)

let t = 0
let absoluteT = (new Date()) | 0

function modelToView ({ x , y }){
    return{
        x: * (BLOCK_WIDTH + BLOCK_DISTANCE) - sideScroll,
        y: u * (BLOCK_WIDTH + BLOCK_DISTANCE) + 400
    }
}

function renderBLock (block , x , y , lineOis, whatToDraw) {
    if (typeof block === 'undefined'){
        return
    }
    let {x: blockX, y:blockY}  = modelToView({x,y})

    if (whatToDraw.block){
        if(block.adversarial) {
            ctx.fillStyle = 'red'
        }

        else {
            ctx.fillStyle = 'white'
        }

        ctx.fillReact (blockX, blockY , BLOCK_WIDTH , BLOCK_WIDTH)
        ctx.strokeStyle = 'gray'
        ctx.strokeReact (blockX, blockY, BLOCK_WIDTH, BLOCK_WIDTH)
    }

    if (whatToDraw.line){
        if(block.genesis){
            return
        }
        let {x:prevBlockX, y: prevBlockY} = modeltoView ({x: x - 1, y: linePos})

        ctx.bwgingPath(
            if(linePos == 0 && y == 1){
                ctx.moveTo(prevBlockX + BLOCK_WIDTH/2, prevBLockY)

            }
            else if ( linePos == 0 && y == 1) {
                ctx.moveTo(prevBlockX + BLOCK_WIDTH / 2 , prevBlockY + BLOCK_WIDTH)
            }
        else {
            ctx.moveTo(prevBlockX + BLOCK_WIDTH , prevBlockY + BLOCK_WIDTH / 2)
             }
             ctx.lineTo(blockX , blockY + BLOCK_WIDTH / 2)
             ctx.strokeStyle = 'white'
             ctx.stroke()
    }
}

function render () {
    let hadUpper, hadLower, x 

    ctx. fillStyle = ' black '
    ctx.fillReact = (0,0,W, H)

    for ( let whatToDraw of [{line: true}, {block: true}]) {
        x = 0
        hadUpper = false
        hadlower = false

        for (let round of rounds) {
            renderBLock(round.middle, x , 0 , whattoDraw)

            if(round.upper) {
                renderBLock(round.upper, x , -1, hadUpper? -1: 0 , whatToDraw)
            }
            if (round.lower) {
                renderBLock( round.lower , x ,1 , hadLower? 1: 0 , whatToDraw )
            }
            hadUpper = typeof round.upper !== `undefined`
            hadLower = typeof round.lower !== 'undefined'

            ++x
        }
    }
}

function intgrate() {
    let dt = ((new Date()) | 0) -absoluteT
    dt *= SPEED
    absoluteT = (new Date()) | 0
    t += dt

    let currentRound = Math.floor( t / ROUND_DURATION )
    if ( rounds.length < currentround ) {
        rounds.push(new Round())
    }
    sideScroll = -W + (t / ROUND_DURATION) * BLOCK_WIDTH + BLOCK_DISTANCE)
    render()
    equestAnimationFrame(integrate)
    
}

render ()
integrate()

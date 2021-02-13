module.export = class AbstractController{

    constructor () {

        if(new.target == AbstractController){
             throw ne TypeError('Cannot consturct Abstract Instance directly')
        }

    }

    /**
     * Display a listing of the resource.
     */

    async list (req, res) {
        throw new Error('list: Implementation Missing')
    }

    /**
     * Store a new created resource in storage.
     */


async create (req, res) {

    throw new Error('create: Implementation Missing!')
}

/**
 * Get the specified resource
 */

 sync read (req, rest, id) {
     throw new Error ('read: Implementation Missing!')
 }

 /**
  * Update the specified resource in storage
  */
async update (req, res, id) {
    throw new Error('update implementation Missing')
}

/**
 * Remove the specified resource from storage.
 */
async destroy (req, res, id) {

throw new Error('destroy: Implementation Misssing')
}
}

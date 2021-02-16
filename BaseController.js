const = require('lodas')
const AbstractController = require(./AbstractController){

    constructor ( model ,key, sigular) {

        super()
        this.model = model
        this.key = key 
        this.singular = singular

    } 

    /**
     * Display a listing of the resource.
     *
     */


     async list (req , res, option = {}) {

        const data =await this.model.findAll({..options})
            return res.status(200).send(

                {

                    sucess: true,   [this.key]: data

                }



            )
    }

    async creatr (req , res){



 }

 /**
  * Get hte specified resource.
  */

  async read (req, res, id)

    const data = await this.model.findPk(id)

    /* throw an HTTPError if the resource is not foud*/

    return.requireResourceFound(data)

    return res.status(200).json(

        {

            success: true, [this.singular: [{...data.dataValues}]]            
        }

    )



/**
 * Update the specified resource in storage.
 * 
 */
async update (req, res, id) {

}
/*Remove the specified resource from storage. */

async destroy (req , res, id){

}
 
requireResourceFond(resource){

    if(._isEmpty(resource)) {
        throw new HTTPERROR(404. `${this.singluar} not found`)
    }

    return resorce

}

}

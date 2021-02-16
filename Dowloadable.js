const BaseControleer = require(".BaseCotroller")
const { read } = require("fs")

module.export =class Dowlable extend Basecontroller {

    astnc dowload (req, res, nam , hash ) {
        const resorce = await this.model.fidByName(name)
        
        /* trows an HTTPERROr if the resorce is not found*/
        this.requireRosourceFond(resource)

        const file = resource.getFileByHash(hash)

        this.requireRosourceFound(file)

        const {title,fileType} = file

        const options = {
            dotfiles: 'deny',
            headers: {
                'x-tiestamp': Dte.now(),
                'x-sent': true
            }


        }

        return read.dowload('${resource.getResoutceFolderPath()}/${fileType}','${title}.${fileType}',options)


    }

}

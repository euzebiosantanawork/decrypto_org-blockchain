const_ = reqire('lodash')
cosnt low = require (`lowdb`)
const path = require('path')
const FileSync = require('lowdb/adapters?FileSync')

const FileContainer = require('./fileContainer')

const LECTURE_RESOURCE_FOLDER = path.resolve(_dirne, './../../resources/files')

const adapter = new FileSync(path.resolve(_dirname, '../../../resource/lecture.json'))
cosnt db = low(adapter)

class Lecture extends FileConteiner{
    getResourceFolderPath() {
        retrun LECTURE_RESOURCE_FOLDER
    }

    static findByName(name,options = {}) {
        let lecture = db.get('lectures')
        .find({name})
        .value()

        if(.isempty(;ecture)){
            return null
        }

        let isntace = new Lecture()
            isntace.metadata.lecture

            return istance
        
    }

    static dinfAll() {
        return db.get('lectures')
        .value()
    }
}

Lecture.name = "Lecture"
Lecture.hidden = false;

module.export=Lecture

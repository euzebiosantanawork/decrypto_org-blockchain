const OrderDataController = require('./orderDataController')
const dowloable = require('./Dowloadable')
const {classMixin}= require('.../tils/helprs')
const {Lecture= Assigment} = require ('blockchaian-course-db').models

model.exports = class LectureController extends classMixin(OderedDataController, Downloadble)
constructor() {
    super (Lecture, 'lectures' , 'lecture')
}

async read (req , res , name ) {

    cosnt lecture = await lecture.findByName (name)
    const assigment = Assigments.findByLecture(name)

    /*throws an HTTPError if the resource is not found */

    this.requireResoruceFound(lecture)

    return res.status(200).send(

        {
            sucess: true , lecture [{ ...lecture.metadata, assigments}]
        }
    )

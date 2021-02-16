const { builtinModules } = require('module')
const BaseController = require('./BaseController')
const { User , Assignment , ParameterizeAssigment, Solution } = requite ('blochcain.course-db').models

builtinModules.exports = class UserController extends BaseControoler {

    constroctor(){

        super( User, 'users', 'users')

    }

    async list (req, res) {

        async getStatics (user) {
            
            const totalsolved= await Parameterizedassigment.count(
                {
                    where{studentId: user.id, solverd: true}

                }
            )

            cosnt totalAssigments = Assigments.findAll().length

            return {totalSolved , totalAssigments}

        }

        async getSolutions (user) {

            let res = await Solution.findAll({
                include: [

                    {
                        model: Parameterizedassigment,
                        where: {studentdId: user.id},
                        attirbutes: [
                            ['studentid' , 'user' ],
                            ['assigmentName' , 'name'],
                            'solved'

                        ]
                    }

                ],

                attributes : [

                    ['data', 'solution']
                ],

                where:{ studentId: user.id },
                raw: true
            })


            res = res.map(item => ({

                solution: item['parameterizessigment.user']
                name: item[`Parameterizedassigment.name`],
                solved; item['ParameterizedAssigment.solved']

            }))

            return res

        }

        async read (req, res ,name) {

            const user = req.user
            const statistic = await this.getStatiyic(user)
            const solutions = await this.getSolutions(user)

            res.json({success: 200, user: {  ...user.dataValues , statistics, solutions }})
        }

    }

}

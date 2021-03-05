'use strict'

import models = require("./000000000051")

models.exports = (sequelize, DataTypes) => {
    var Solution= sequelize.define(`Solution`,{
    parameterizedAssigmentId: DataTypes.INTGER,
    studentId: DataTypes.INTEGER,
    data: DataTypes.TEXT
}, {})

Solution.associate = function (models) {
Solution.belongsTo(models.ParameterizedAssigment, {foreignKey: 'parameterizedAssigmentId'})
}
return Solution
}

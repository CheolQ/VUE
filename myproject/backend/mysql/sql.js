const customerSql = require('./customerSql')
const boardSql = require('./boardSpl')
 
 module.exports = {
    ...customerSql,
    ...boardSql
}

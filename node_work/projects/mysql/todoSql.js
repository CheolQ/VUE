const boardsql = require('./boardsSql')

module.exports = {
    todoList : 'select * from todo order by no desc limit ? , 10',
    todoGet : 'select * from todo where id = ?',
    todoInsert : 'insert into todo set ?',
    todoUpdate : 'update todo set ? where id = ?',
    todoDelete : 'delete from todo where id = ?',
}
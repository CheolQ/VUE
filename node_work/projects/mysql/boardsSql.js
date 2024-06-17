module.exports = {
    boardList : 'select * from board order by no desc limit ? , 10',
    boardGet : 'select * from board where id = ?',
    boardInsert : 'insert into board set ?',
    boardUpdate : 'update board set ? where id = ?',
    boardDelete : 'delete from board where id = ?',
}
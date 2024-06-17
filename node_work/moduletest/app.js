const customerRouter = require('./routes/customer.js');
const router = express.Rounter()
const mysql = require("./mysql/index")
                                    //../mysql

                      
app.use("/customer", customerRouter);
// router.get("/", (req.res) => {

//     res.send(board)
// })
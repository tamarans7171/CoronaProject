                       const express = require("express");
                       const cors = require("cors");

                       const app=express();

                       require("./configs/database")
                       const MemberRouter =require("./routes/memberRouter")

                       app.use(cors())
                       app.use(express.json())
                       app.use(express.urlencoded({extended:false}))
                       app.use("/api/members",MemberRouter);



                       app.listen(5000,()=>{
                           console.log("listening port 5000 :)");
                       })
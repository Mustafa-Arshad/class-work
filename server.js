// const req = require('express/lib/request');
// const fs = require('fs');

// // fs.readdir("./", (err, dir) => {
// //     if (err) {
// //         console.log("err")
// //     } else {
// //         console.log("dir")
// //     }
// // })

// // fs.readFile("./abc.text","utf-8", (err,data) => {
// //     if (err) {
// //         console.log(err)
// //     } else {
// //         console.log(data)
// //     }
// // })

// // fs.writeFile("./abc.txt","hellow world", (err,data) => {
// //     if (err) {
// //         console.log(err)
// //     } else {
// //         console.log("saved successfully")
// //     }
// // })

// // fs.appendFile("abc.txt", "hellow Mustafa", (err) => {
// //     if (err) {
// //         console.log(err)
// //     } else {
// //         console.log("saved")
// //     }
// // })

// const http = require("http");
// const cources = [
//     {
//         id: 1,
//         name: 'ABC'
//     },
//     {
//         id: 2,
//         name: 'ABC'
//     },
//     {
//         id: 3,
//         name: 'ABC'
//     },
//     {
//         id: 4,
//         name: 'ABC'
//     },
// ]


// const server = http.createServer((req, res) => {

//     if (req.url == "/courses") {
//         if (req.method == "GET") {
//             res.write(JSON.stringify(cources))
//         }
//         if (req.method == "POST") {
//             req.body
//             res.write(JSON.stringify(cources))
//         }
//         res.end();

//     }
//     if (req.url == "/user") {
//         res.write("/user route working successfully")
//         res.end();
//     }
//     if (req.url == "/user2") {
//         res.write("/user2 route working done")
//         res.end();
//     }
// })

// const PORT = 5000;


// server.listen(PORT,()=>{
//     console.log(`server is listing on ${PORT}`)
// })


// const express = require("express")
// const app = express();
// const cources = [
//     {
//         id: 1,
//         name: 'ABC'
//     },
//     {
//         id: 2,
//         name: 'ABC'
//     },
//     {
//         id: 3,
//         name: 'ABC'
//     },
//     {
//         id: 4,
//         name: 'ABC'
//     },
// ];

// app.get("/cources", (req, res) => {
//     res.json(cources);
// });
// app.get("/cources/:id", (req, res) => {
//     let id = req.params.id;
//     let obj = cources.find((x) => x.id == id);
//     if (obj) {
//         res.send(obj).status(200)
//     } else {
//         res.send("No deta found").status(404)
//     }
// })

// app.listen(2000)

// const express = require("express")
// const app = express();
// const cources = [
//     {
//         id: 1,
//         name: 'ABC'
//     },
//     {
//         id: 2,
//         name: 'ABC'
//     },
//     {
//         id: 3,
//         name: 'ABC'
//     },
//     {
//         id: 4,
//         name: 'ABC'
//     },
// ];

// app.put("/cources", (req, res) => {
//     res.json(cources);
// });
// app.put("/cources", (req, res) => {
//     let id = req.params.id;
//     let obj = cources.find((x) => x.id == id);
//     if (obj) {
//         res.send(obj).status(200)
//     } else {
//         res.send("No data found").status(404)
//     }
// })

// app.listen(2000)



// const http = require("http");
// const cources = [
//     {
//         id: 1,
//         name: 'ABC'
//     },
//     {
//         id: 2,
//         name: 'ABC'
//     },
//     {
//         id: 3,
//         name: 'ABC'
//     },
//     {
//         id: 4,
//         name: 'ABC'
//     },
// ]


// const server = http.createServer((req, res) => {

//     if (req.url == "/courses") {
//         if (req.method == "GET") {
//             res.write(JSON.stringify(cources))
//         }
//         if (req.method == "POST") {
//             req.body
//             res.write(JSON.stringify(cources))
//         }
//         if (req.method == "PUSH") {
//             res.write(JSON.stringify(cources))
//         }
//         if (req.method == "PUT") {
//             res.write(JSON.stringify(cources))
//         }
//         if (req.method == "DELETE") {
//             res.write(JSON.stringify(cources))
//         }
//         res.end();

//     }
//     if (req.url == "/user") {
//         res.write("/user route working successfully")
//         res.end();
//     }
//     if (req.url == "/user2") {
//         res.write("/user2 route working done")
//         res.end();
//     }
// })

// const PORT = 5000;


// server.listen(PORT, () => {
//     console.log(`server is listing on ${PORT}`)
// // })


// app.get("/cources", (req, res) => {
//     res.json(cources);
// });
// app.get("/cources", (req, res) => {
//     let id = req.params.id;
//     let obj = cources.find((x) => x.id == id);
//     if (obj) {
//         res.send(obj).status(200)
//     } else {
//         res.send("No deta found").status(404)
//     }
// })

// app.listen(2000)

const express = require('express')
const app = express();
const studentRouter = require("./routes/studentRouter")
const teacherRouter = require("./routes/teacherRouter")


require("dotenv").config();
const mongoose = require("mongoose");

app.use("/api/student", studentRouter);
app.use("/api/teacher", teacherRouter);
app.use("/api/institute", instituteRouter);
app.use("/api/todo", todoRouter);
app.use(express.json());



mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Database Connected Successfully and server is listening on this port 5000");
        })
    });


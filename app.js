// const express = require("express");
// const app = express();
// const path = require("path");
// const { v4: uuidv4 } = require('uuid');
// const methodOverride = require("method-override");


// app.set("view engine" , "views");
// app.set("views" , "views");

// app.use(express.json()); 
// app.use(methodOverride('_method'));
// app.use(express.urlencoded({ extended: true }));
 

// let data = [
//     {
//         name:"Prabhat",
//         role:"Developer",
//         id:uuidv4(),
//         info:"This is prabhat  ",
//     },
//     {
//         name:"Narayan",
//         role:"CSER",
//         id:uuidv4(),
//         info:"This is  narayan",
//     },
//     {
//         name:"Payasi",
//         role:"Web DEv.",
//         id:uuidv4(),
//         info:"This is prabhat narayan payasi",
//     }
  
// ]

// app.listen(8080 , (req ,res)=>{
//     console.log("Server is listening on port.")
// });

// app.get("/" , (req ,res)=>{
//     res.render("home.ejs" , {data})
// })

// app.get("/show/:id" , (req , res)=>{
//     let { id } = req.params;
//     // let post = data.find((p) => id === p.id);
//     let deta =data.find((deta) => id === deta.id)
//     console.log(deta)
//     res.render("show.ejs" , { deta })
     
// })

// app.get("/post/new" , (req , res)=>{
 
//     res.render("new.ejs")
     
// })

// app.post("/" , (req ,res)=>{
//     let {name , role , info} = req.body;
//     let id = uuidv4();
//     data.push({name , role , info , id}) 
    
//     res.redirect("/")
// })


// app.delete("/post/:id" , (req ,res)=>{
//    let {id} = req.params;
//    data = data.filter((deta) => id!=deta.id);
//    res.redirect("/")
 
// //    let { id } = req.params;
// //    // let post = posts.find((p) => id === p.id);
// //     posts = posts.filter((p) => id !== p.id);
// //    res.redirect("/posts")
// })
// app.get("/post/:id/edit" , (req ,res)=>{
//     let {id} = req.params;
//     let deta = data.find((deta) => id==deta.id)
//     res.render("edit.ejs"  ,  {deta})
// })
// app.patch("/post/:id", (req, res) => {
//     let { id } = req.params;
   


//     // Find the data item that matches the provided ID
//     let deta = data.find((deta) => id == deta.id);
//     let Nname = req.body.name;
//     let Nrole = req.body.role;
//     let Ninfo = req.body.info;
    
//      deta.name = Nname
//      deta.role = Nrole;
//      deta.info = Ninfo
   

//         // Send a response confirming the update
//     res.redirect("/");
    
// });















// ================================Project Blog Using Crud Operations=================================================

const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require('uuid');
app.set("view engine" , "ejs");
app.set("views" , "views");


app.use(methodOverride('_method'))
app.use(express.json());
app.use((express.urlencoded({extended : true})))

app.listen(8080 , (req ,res)=>{
    console.log(`Server is working on port ${8080}`);
})



let Blogs =[
    {
        Title : "How is japan",
        Description:"Japan Is sprituals",
        id : uuidv4(),
        comment : "",
        Image : "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGphcGFufGVufDB8fDB8fHww"
    }, 
    {
        Title : "How is India",
        Description:"Japan Is sprituals",
        id : uuidv4(),
        comment : "",
        Image : "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWF8ZW58MHx8MHx8fDA%3D"
    }, 
    {
        Title : "How is England",
        Description:"Japan Is sprituals",
        id : uuidv4(),
        comment : "",
        Image: "https://images.unsplash.com/photo-1543832923-44667a44c804?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RW5nbGFuZHxlbnwwfHwwfHx8MA%3D%3D"
    }, 


    {
        Title : "How is Russia",
        Description:"Japan Is sprituals",
        id : uuidv4(),
        comment : "",
        Image:"https://images.unsplash.com/photo-1513326738677-b964603b136d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UnVzc2lhfGVufDB8fDB8fHww",
    }, 
    {
        Title : "How is Austrailia",
        Description:"Japan Is sprituals",
        id : uuidv4(),
        comment : "",
        Image:"https://images.unsplash.com/photo-1636004482379-d3fa1c839a77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF1c3RyYWlsaWF8ZW58MHx8MHx8fDA%3D",
    }, 
    {
        Title : "How is America",
        Description:"Japan Is sprituals",
        id : uuidv4(),
        comment : "",
        Image : "https://images.unsplash.com/photo-1494449880320-18d3dae5d16e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QW1lcmljYXxlbnwwfHwwfHx8MA%3D%3D",
    }, 
]

 
app.get("/" , (req ,res)=>{
    res.render("index.ejs" , {Blogs})
})

app.get("/blog/:id" , (req , res)=>{
    let {id} = req.params;
     let blogpost = Blogs.find((bp) => id==bp.id)
res.render("showBlog.ejs" , {blogpost})
/*
Error: req.body से id नहीं आ रही 🚨
🔹 Problem:
आप route parameter (/blog/:id) यूज़ कर रहे हैं, लेकिन id को req.body से extract कर रहे हैं।
req.body तब काम करता है जब आप POST, PUT, PATCH request में data भेजते हैं, लेकिन GET request में req.body empty होता है।
*/
})

app.get("/blog/:id/edit" , (req,res)=>{
    let {id} = req.params;
    let blogpost = Blogs.find((p) => id==p.id)
    res.render("editBlog.ejs" , {blogpost})
})

app.patch("/blog/:id" , (req ,res)=>{
    let {id} = req.params;
    let post = Blogs.find((p)=>id == p.id);
    let NewT = req.body.Title;
    let NewD= req.body.Description;
    let NewI = req.body.Image;
    let NewC= req.body.comment;



    post.Title = NewT;
    post.Description = NewD;
    post.Image = NewI;
    post.comment = NewC;
    res.redirect("/")
})
app.delete("/blog/:id" , (req , res)=>{
    let {id} = req.params;
    Blogs = Blogs.filter((p)=> id!=p.id);
    res.redirect("/");
})
app.get("/newBlog" , (req , res)=>{
    res.render("newBlog.ejs")
})
app.post("/" , (req , res)=>{
    let{Title , Description , Image , comment} = req.body;
     id = uuidv4();
     Blogs.push({Title , Description , Image , comment , id})
    res.redirect("/")
})



app.get("/contact" , (req,res)=>{
    res.render("contact.ejs")
})


module.exports=function(app){

  
    app.get('/user/:id',(req,res) =>{

        const filtro=req.query.filtro

        return res.status(404).send(false)

    })

}
const {Centres,Preventions, Actualites} = require('../models/models.js');

createOneCentre = (req,res)=>{
    const createCentre = async () =>{
        try { let data = await Centres.create(req.body);
            console.log(req)
            res.json(data);}
        catch(error){
            console.log(res)
            res.json(error)
        }
    }
    createCentre();
}


createOnePrevention = (req,res)=>{
    const createPrevention = async () =>{
        try { let data = await Preventions.create(req.body);
            console.log(req)
            res.json(data);}
        catch(error){
            console.log(res)
            res.json(error)
        }
    }
    createPrevention();
}

createOneActualite = (req,res)=>{
    const createActualite = async () =>{
        try { let data = await Actualites.create(req.body);
            console.log(req)
            res.json(data);}
        catch(error){
            console.log(res)
            res.json(error)
        }
    }
    createActualite();
}



module.exports = {createOneCentre,createOnePrevention,createOneActualite}
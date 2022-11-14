const {Centres,Preventions,Actualites} = require('../models/models.js');

exports.getAllCentres = (req,res)=>{
    const getCentres = async () =>{
        try { let data = await Centres.find();
            console.log(data)
            res.json(data);}
        catch(error){
            res.json(error)
        }
    }
    getCentres();
}

exports.getAllPrevention = (req,res)=>{
    const getPreventions = async () =>{
        try { let data = await Preventions.find();
            res.json(data);}
        catch(error){
            console.log(res)
            res.json(error)
        }
    }
    getPreventions();
}

exports.getAllActualites = (req,res)=>{
    const getActualites = async () =>{
        try { let data = await Actualites.find();
            console.log(data)

            const d = new Date(data[0].date);
            let text = d.toLocaleString("fr-FR",{ day:"numeric", month: "long", year:"numeric"});
            console.log(text)
   
            res.json(data);}
            
        catch(error){
            // console.log(res)
            res.json(error)
        }
    }
    getActualites();
}


exports.getOneCentres = (req,res)=>{
    let id = req.params.id
    const getCentre = async () =>{
        try { let data = await Centres.findOne({"_id":`${id}`});
            console.log(data)
            res.json(data);}
        catch(error){
            res.json(error)
        }
    }
    getCentre();
}

exports.getOnePrevention = (req,res)=>{
    let id = req.params.id
    const getPrevention = async () =>{
        try { let data = await Preventions.findOne({"_id":`${id}`});
            res.json(data);}
        catch(error){
            console.log(res)
            res.json(error)
        }
    }
    getPrevention();
}

exports.getOneActualites = (req,res)=>{
    let id = req.params.id
    const getActualite = async () =>{
        try { let data = await Actualites.findOne({"_id":`${id}`});
            res.json(data);}
        catch(error){
            console.log(res)
            res.json(error)
        }
    }
    getActualite();
}
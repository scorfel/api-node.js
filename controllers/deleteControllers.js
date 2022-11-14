const {Centres,Preventions, Actualites} = require('../models/models.js');

deleteOneCentre = (req,res)=>{
    let id = req.params.id
    const deleteCentre = async () => {
        try {
            let data = await Centres.deleteOne({"_id":`${id}`});
            res.status(200).json(data);
        }
        catch(error){
            res.status(400).json(error)
        }
    }
    deleteCentre();
  }


deleteOnePrevention = (req,res)=>{
    let id = req.params.id
    const deletePrevention = async () => {
        try {
            let data = await Preventions.deleteOne({"_id":`${id}`});
            res.status(200).json(data);
        }
        catch(error){
            res.status(400).json(error)
        }
    }
    deletePrevention();
  }


deleteOneActualite = (req,res)=>{
    let id = req.params.id
    const deleteActualite = async () => {
        try {
            let data = await Actualites.deleteOne({"_id":`${id}`});
            res.status(200).json(data);
        }
        catch(error){
            res.status(400).json(error)
        }
    }
    deleteActualite();
  }


module.exports = {deleteOneCentre,deleteOnePrevention,deleteOneActualite}
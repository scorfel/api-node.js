const {Centres,Preventions, Actualites} = require('../models/models.js');

updateOneCentre = (req,res)=>{
    const updateCentre = async () => {
        try {
            let data = await Centres.updateOne({"_id": req.body.id,}, {...req.body});
            res.status(200).json(data);
        }
        catch(error){
            res.status(400).json(error)
        }
    }
    updateCentre();
  }


updateOnePrevention = (req,res)=>{
    const updatePrevention = async () => {
        try {
            let data = await Preventions.updateOne({"_id": req.body.id,}, {...req.body});
            res.status(200).json(data);
        }
        catch(error){
            res.status(400).json(error)
        }
    }
    updatePrevention();
  }


updateOneActualite = (req,res)=>{
    const updateActualite = async () => {
        try {
            let data = await Actualites.updateOne({"_id": req.body.id,}, {...req.body});
            res.status(200).json(data);
        }
        catch(error){
            res.status(400).json(error)
        }
    }
    updateActualite();
  }


module.exports = {updateOneCentre,updateOnePrevention,updateOneActualite}
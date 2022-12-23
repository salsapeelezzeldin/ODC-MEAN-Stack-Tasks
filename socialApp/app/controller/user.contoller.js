const userModel = require("../../db/models/user.model")
const myHelper = require("../../app/helper")
const fs = require("fs")

class User{
    static register = async(req,res) => {
        try{
            if(req.body.password.length<6) throw new Error("password must be more than 6")
            const userData = new userModel(req.body)
            await userData.save()

            myHelper.resHandler(res, 200, true, userData, "user added successfully")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static login = async(req,res) => {
        try{

            const userData = await userModel.loginUser(req.body.email, req.body.password)
            const token = await userData.generateToken()
            myHelper.resHandler(res, 200, true, {user:userData, token}, "user added successfully")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static allUsers = async(req,res) => {
        try{
            const userData = await userModel.find()
            myHelper.resHandler(res, 200, true, userData, "users fetched successfully")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static profile = (req,res)=>{        
        try{
            myHelper.resHandler(res, 200, true,{user: req.user},"user profile fetched successfully")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static logOut = async(req,res)=>{
        try{
            req.user.tokens = req.user.tokens.filter(tok => tok.token != req.token )
            await req.user.save()
            myHelper.resHandler(res, 200, true,null,"logged out successfully")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static logOutAll = async(req,res)=>{
        try{
            req.user.tokens = []
            await req.user.save()
            myHelper.resHandler(res, 200, true,null,"logged out all successfully")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static singleUser = async(req, res)=>{
        try{
            const user = await userModel.findById(req.params.id)
            myHelper.resHandler(res, 200, true,user,"user fetched successfully")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static changeStatus = async(req,res)=>{
        try
        {
            let user = req.user
            if(!req.query.current || req.query.current=="0") 
                user = await userModel.findById(req.body._id)
            
            if(req.query.activate=="1")  user.status=true
            else user.status = false
            await user.save()
            myHelper.resHandler(res, 200, true, user, "status updated")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static editProfile = async(req,res)=>{
        try
        {
            await req.user.updateOne({...req.body})
            myHelper.resHandler(res, 200, true, req.user, "profile updated")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static edituser = async(req,res)=>{
        try
        {
            let userData = await userModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
            myHelper.resHandler(res, 200, true, userData, "user updated")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static deleteProfile = async(req,res)=>{
        try
        {
            await req.user.deleteOne()
            myHelper.resHandler(res, 200, true, null, "profile deleted")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static deleteUser = async(req,res)=>{
        try
        {
            await userModel.findByIdAndDelete(req.params.id)
            myHelper.resHandler(res, 200, true, null, "user deleted")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static addAddress = async(req,res)=>{
        try
        {
            if (!req.user.addresses) req.user.addresses =[]
            req.user.addresses.push(req.body)
            await req.user.save()
            myHelper.resHandler(res, 200, true, req.user, "address added")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static deleteAddress = async(req,res)=>{
        try
        {
            const address = req.user.addresses.findIndex(add => add._id == req.params.id)
            await req.user.addresses.splice(address,1)
            req.user.save()
            myHelper.resHandler(res, 200, true, req.user, "address deleted")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static showAddress = async(req,res)=>{
        try
        {
            const address = req.user.addresses.find(add => add._id == req.params.id)
            myHelper.resHandler(res, 200, true, address, "address fetched")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static showAddresses = async(req,res)=>{
        try
        {
            myHelper.resHandler(res, 200, true, req.user.addresses, "addresses fetched")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
}
module.exports = User
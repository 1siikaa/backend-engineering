const express= require('express')
const router= express.Router()
const customercontroller= require('../controller/customercontroller')
const cardcontroller= require('../controller/cardcontroller')
const {middleware}= require("../middleware/auth.js")

//............................................................................. CUSTOMER API ...............................................................
router.post('/newcustomer', customercontroller.createCustomer)
router.get('/fetchcustomer', customercontroller.getCustomers)
router.delete('/deleteCustomer',middleware, customercontroller.deleteCustomer)

//............................................................................. CARD API ...............................................................
router.post('/newcard', cardcontroller.createCard)
router.get('/fetchcard', cardcontroller.getCards)

//............................................................................. PATH NOT FOUND ...............................................................
router.all('/*', function(req, res){
    return res.status(404).send({status:false, message:"invalid path/path not found"})
})
module.exports=router







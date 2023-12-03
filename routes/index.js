var express = require('express');
var router = express.Router();
const EMPLOYEE = require("../model/employeeModel")
let data = [];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

router.post('/register',async function(req, res, next) {
  // res.json(req.body);
  try {
    const employe = new EMPLOYEE(req.body);
    await employe.save();
    res.redirect("/show");

    
  } catch(error) {
    res.send(error);
  }

 
});

router.get('/show',async function(req, res, next) {
  try {
    const data = await EMPLOYEE.find({});
    res.render("show",{data:data});

  } catch (error) {
    res.send(error);
  }
});

router.get('/aboutus', function(req, res, next) {
  res.render('aboutus', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.get('/details/:id',async function(req, res, next) {
  try{
    const data =await EMPLOYEE.findById(req.params.id);
    res.render('details',{data:data});
   }catch(error){
    res.send(error);
   }

});

router.get('/delete/:id', async function(req, res, next) {
  try {
    await EMPLOYEE.findByIdAndDelete(req.params.id);
    res.redirect('/show');
  } catch (error) {
    res.send(error);
  }
 
});   

router.get('/update/:id', async function(req,res,next){
  try {
    const data = await EMPLOYEE.findById(req.params.id);
    
    res.render('update',{data:data});
  } catch (error) {
    res.send(error)
  }

  // res.render('update',{book:dets,index:req.params.index});
});

router.post('/update/:id',async function(req,res,next){
  try {
    await EMPLOYEE.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/details/${req.params.id}`);
  } catch (error) {
    res.send(error)
  }
  // books[req.params.index] = req.body;
 
});


module.exports = router;

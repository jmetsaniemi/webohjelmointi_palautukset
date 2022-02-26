const express = require ('express')
const { v4: uuidv4 } = require('uuid');
const router = express.Router()



const products = [

    {
        name:"Puhelin",
        id: uuidv4(),
        description: "Rullapuhelin, hyva peli!",
        image: "",
        manufacturer: "Iisalmen lanka"

    },

    {
        name:"Puupala",
        id: uuidv4(),
        description: "Neliö",
        image: "",
        manufacturer: "Iisalmen lanka"

    },
    {
        name:"Erkki",
        id: uuidv4(),
        description: "Erkki tekee askareet mutisematta",
        image: "",
        manufacturer: "Tallink Silja Oy"

    }
];


  

    //get all products
    router.get('/', (req, res) => {
    res.json(products);
     })
  
   
     //get a single product
    router.get('/:id', (req, res) => {
      let foundIndex = products.findIndex(t => t.id === req.params.id); 
  
      if (foundIndex === -1){
          res.sendStatus(404);
      }else{
          res.json(products[foundIndex]);
      }
    })
  
    //delete a product
    router.delete('/:id', (req, res) => {
      let foundIndex = -1;
      for(let i = 0; i < products.length; i++){
          if (products[i].id === req.params.id){
              foundIndex = i;
              break;
          }
      }
  
      if (foundIndex === -1){
          res.sendStatus(404);
  
      }else{
          products.splice(foundIndex, 1);
          res.send(202);
      }
    })
  
    //create/add a product
    router.post('/', (req, res) => {
      console.log(req.body);
      res.sendStatus(202);
  
      products.push({
          id: uuidv4(),
          description: req.body.description,
          image: req.body.image,
          name: req.body.name,
          manufacturer: req.body.manufacturer
          
  
      });
    })
  
    //edit a product
    router.put('/:id', (req, res) => {
      let foundIndex = products.find(t => t.id === req.params.id);
  
      if(foundIndex) {
          foundIndex.description = req.body.description;
          foundIndex.name = req.body.name;
          foundIndex.image = req.body.findIndex;
          foundIndex.manufacturer = req.body.manufacturer;
          
      }else{
          res.sendStatus(404);
      }
  
    })

    module.exports = router
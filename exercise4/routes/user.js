const express = require ('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')



const user = [

    {
        name:"Erkki Rytsölä",
        userId: uuidv4(),
        address: "Soonsiinä 1 B",
        phone: 0501234567

    },

    {
        name:"Kahra Nootola",
        userId: uuidv4(),
        address: "Neliökuja 78 B 22",
        phone: 0501234567

    },
    {
        name:"Sahrami Kantola",
        userId: uuidv4(),
        address: "Alakalasatamankatu 1112",
        phone: 0501234567

    }
];

//get all users
router.get('/', (req, res) => {
    res.json(user);
  })

  //get a single
  router.get('/:userId', (req, res) => {
    let foundIndex = user.findIndex(t => t.userId === req.params.userId); 

    if (foundIndex === -1){
        res.sendStatus(404);
    }else{
        res.json(user[foundIndex]);
    }
  })
  

  //edit user
  router.put('/:userId', (req, res) => {
    let foundIndex = user.find(t => t.userId === req.params.userId);

    if(foundIndex) {
        foundIndex.address = req.body.address;
        foundIndex.name = req.body.name;
        foundIndex.phone = req.body.phone;
        
    }else{
        res.sendStatus(404);
    }

    //create user
    router.post('/', (req, res) => {
        console.log(req.body);
        res.sendStatus(202);
    
        user.push({
            userId: uuidv4(),
            address: req.body.address,
            name: req.body.name,
            phone: req.phone
            
    
        });
      })


  })

  module.exports = router
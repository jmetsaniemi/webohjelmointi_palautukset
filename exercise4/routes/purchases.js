const express = require ('express')
const { get } = require('express/lib/response')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')


//example invoicese for testing
const invoices =[

    {
        "id" : uuidv4(),
        "productId" : "123",
        "customerId": "456",
        "price" : 300

    },

    {
        "id" : uuidv4(),
        "productId" : "321",
        "customerId": "654",
        "price" : 333

    }
]


//get all invoices

router.get('/', (req, res) => {
    res.json(invoices);

} );


//create invoice/purchase
router.post('/', (req, res) => {
    invoices.push({
        id: uuidv4(),
        productId: req.body.productId,
        customerId: req.body.customerId,
        price: req.body.price
        
    })
    res.sendStatus(202);
});


//delete invoice
router.delete('/:customerId/:invoiceId', (req, res) => {

    let foundIndex = invoices.find(p => p => p.customerId == req.params.customerId && p.id == req.params.invoiceId);
    if(foundIndex){
        invoices.splice(foundIndex, 1);
        res.json(202);
    }else{
        res.sendStatus(404);
    }
});

//get one invoice

router.get('/:customerId/:invoiceId', (req, res) => {
    let foundIndex = invoices.find(p => p.customerId == req.params.customerId && p.id == req.params.invoiceId);
    if(foundIndex){
        res.json(foundIndex);
        console.log("FOUND -> OK");
    }else{
        res.sendStatus(404);
    }
});

//get users invoices
router.get('/:customerId', (req,res) => {
    let foundIndex = invoices.filter(p => p.customerId = req.params.customerId);
    if(foundIndex){
        res.json(invoices);
        console.log("All invoices found");
    }else{
        res.sendStatus(404);
    }
})



module.exports = router;
const { Router } =  require('express');
const router = Router();
const Contractor = require('../models/contractor');

router.get('/', (req, res) => {
  Contractor.find({}, (err, contractors) => {
    res.json(contractors)
  })
});
router.get('/:id/description', (req, res) => {
  Contractor.findById(req.params.id,(err, contractor) => {
    res.json(contractor)
  })
});
router.post('/save', (req,res) => {
  const contractorCreated = new Contractor({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    userId: req.user
  });
  try {
    contractorCreated.save().then(() => {
      res.json(contractorCreated);
    })
  } catch (e) {
    console.log(e)
  }
});
router.delete('/:id/delete', async (req,res) => {
  try {
    await Contractor.deleteOne({
      _id: req.params.id
    });
    res.json('delete success')
  } catch(e) {
    console.log(e)
  }
});

module.exports = router;
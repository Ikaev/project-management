const { Router } =  require('express');
const router = Router();
const Project = require('../models/project');
const auth = require('../middleware/auth');

router.get('/', auth, (req, res) => {
  Project.find({}, (err, projects) => {
    res.json(projects)
  })
});
router.get('/:id/description', async (req, res) => {
  const project = await Project.findById(req.params.id).populate('contractor');
  res.json(project);
});
router.post('/save', (req,res) => {
  const projectCreated = new Project(req.body);
  try {
    projectCreated.save().then(() => {
      res.json(projectCreated);
    })
  } catch(error) {
    console.log(error)
  }

});
router.delete('/:id/delete', async (req,res) => {
  try {
    await Project.deleteOne({
      _id: req.params.id
    });
    res.json('delete success')
  } catch(e) {
    console.log(e)
  }
});

module.exports = router;
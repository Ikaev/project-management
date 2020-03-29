const { Router } =  require('express');
const router = Router();
const Project = require('../models/project');
const auth = require('../middleware/auth');

router.get('/', auth, (req, res) => {
  Project.find({}, (err, projects) => {
    console.log(res.locals)
    res.json(projects)
  })
});
router.get('/:id/description', (req, res) => {
  Project.findById(req.params.id,(err, project) => {
    res.json(project)
  })
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
const router = require("express").Router();
const User = require('../models/User.model');


router.get("/", (req, res, next) => {
  res.json("All good in here");
 
});

router.get("/userinformation", (req, res, next) => {
  User.find()
  .then((allUsers) => {
    res.json(allUsers)
  }).catch((err) => {console.log(err)})
})


// to get a specific project
router.get('/userinformation/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(project => {
      if (!project) {
        res.status(404).json(project)
      } else {
        res.status(200).json(project)
      }
    })
    .catch(err => {
      next(err)
    })
});






// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

// router.get('/', (req, res, next) => {
//   Project.find()
//     .then(users => {
//       console.log("ICI USERS",users)
//       res.json(users);
//     })
//     .catch(err => {
//       next(err)
//     })
// });





module.exports = router;


/*

const { default: UsersList } = require("../client/src/components/User");
const User = require("../models/User.model");



// to get all the projects
router.get('/', (req, res, next) => {
  console.log(users)
  User.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      next(err)
    })
   
});

*/

/*
// to get a specific project
router.get('/projects/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(project => {
      if (!project) {
        res.status(404).json(project)
      } else {
        res.status(200).json(project)
      }
    })
    .catch(err => {
      next(err)
    })
});

// to update a project
router.put('/projects/:id', (req, res, next) => {
  const { title, description } = req.body;
  // if we don't have {new: true} findByIdAndUpdate() will return the old version of 
  // the project
  Project.findByIdAndUpdate(req.params.id, { title, description }, { new: true })
    .then(project => {
      res.status(200).json(project)
    })
    .catch(err => {
      next(err)
    })
});

// to delete a project
router.delete('/projects/:id', (req, res, next) => {
  Project.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ message: 'project deleted' })
    })
    .catch(err => {
      next(err)
    })
});


// to create a project
router.post("/projects", (req, res, next) => {
  const { title, description } = req.body;
  Project.create({ title, description })
    .then(project => {
      // we return an http status code as well
      // https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
      res.status(201).json(project)
    })
    .catch(err => {
      next(err)
    })
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)


module.exports = router;

*/

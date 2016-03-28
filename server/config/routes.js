const User = require('../../users/userController.js');
const City = require('../../cities/cityController.js');

module.exports = (app) => {
  // GET / Read
  app.get('/', (req, res) => {
    // Changes this to serve index / main page
    res.send('GET request successful');
  });

  app.get('/api/cities/visited', (req, res) => {
    City.find({
      name: req.body.name,
    })
    .then(cities) => {
      res.send(cities);
    }
  });

  // app.get('/api/cities/planned', (req, res) => {

  // });

  // app.post('/signin', (req, res) => {

  // });

  // app.post('/signout', (req, res) => {

  // });

  // app.put('/api/cities/visited', (req, res) => {

  // });

  // How do I make the same page handle multiple POST requests?
  // POST cities user has already been to
  app.post('/api/cities/visited', (req, res) => {
    // Create city to store
    const newCity = City({
      name: req.body.name,
      dateVisited: req.body.dateVisited,
      // datePlanned: req.body.city,
    });
    // Check if city exists in database already
    City.findOne({
      name: req.body.name,
    })
    .then((city) => {
      // If city exists, throw error message
      if (city) {
        next(new Error('You have already added this city!'));
      } else {
        // If it doesn't exist, save it to database
        newCity.save(function(err, success) {
          if (err) {
            throw err;
          } else {
            res.sendStatus(200);
          }
        });
      }
    })
  });

  // POST cities user has yet to go to
  app.post('/api/cities/planned', (req, res) => {
    // Create city to store
    const newCity = City({
      name: req.body.name,
      dateVisited: req.body.dateVisited,
      // datePlanned: req.body.city,
    });
    // Check if city exists in database already
    City.findOne({
      name: req.body.name,
    })
    .then((city) => {
      // If city exists, throw error message
      if (city) {
        next(new Error('You have already added this city!'));
      } else {
        // If it doesn't exist, save it to database
        newCity.save(function(err, success) {
          if (err) {
            throw err;
          } else {
            res.sendStatus(200);
          }
        });
      }
    })
  });

  // Should I use next here?  Is next an Express thing?
  app.get('signup', (req, res, next) => {
    User.findOne({
      username: req.body.username,
    })
    .then((user) => {
      if (user) {
        next(new Error('This username is taken, please try a new one.'));
      } else {
        User.create({
          username: req.body.username,
          password: req.body.password,
        });
      }
    })
  });

  // POST / Create
  app.post('/login', (req, res) => {
    const newUser = new User({
      username: req.body.username,
      password: req.body.password,
    });

    newUser.save((err) => {
      if (err) {
        res.send(err);
      }
    });
    res.send('User added to the database: ' + newUser);
  });

  // app.post('/logout', (req, res) => {

  // });

  // app.put('/api/cities/planned', (req, res) => {

  // });

  // app.delete('/api/cities/planned', (req, res) => {

  // });

  // app.delete('/api/cities/planned', (req, res) => {

  // });
}
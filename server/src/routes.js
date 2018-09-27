const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const JobsController = require('./controllers/JobsController')
const BookmarksController = require('./controllers/BookmarksController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register),
  app.post('/login',
    AuthenticationController.login
  ),

  app.get('/jobs/:jobId',
    JobsController.show),
  app.get('/jobs',
    JobsController.index),
  app.post('/jobs',
    JobsController.post),
  app.put('/jobs/:songId',
    JobsController.put)

  app.get('/bookmarks',
  BookmarksController.index),
  app.post('/bookmarks',
  BookmarksController.post),
  app.delete('/bookmarks/:bookmarkId',
    BookmarksController.delete)
}

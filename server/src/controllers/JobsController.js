const {Job} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let jobs = null
      const search = req.query.search
      if (search) {
        jobs = await Job.findAll({
          where: {
            $or: [
              'title', 'description', 'content'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      } else {
        jobs = await Job.findAll({
          limit: 10
        })
      }
      res.send(jobs)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the jobs'
      })
    }
  },
  async show (req, res) {
    try {
      const job = await Job.findById(req.params.JobId)
      res.send(job)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the jobs'
      })
    }
  },
  async post (req, res) {
    try {
      const job = await Job.create(req.body)
      res.send(job)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the job'
      })
    }
  },
  async put (req, res) {
    try {
      const job = await Job.update(req.body, {
        where: {
          id: req.params.jobId
        }
      })
      res.send(job)
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the job'
      })
    }
  }
}

import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('jobs', {
      params: {
        search: search
      }
    })
  },
  show (jobId) {
    return Api().get(`jobs/${jobId}`)
  },
  post (job) {
    return Api().post('jobs', job)
  },
  put (job) {
    return Api().put(`jobs/${job.id}`, job)
  }
}

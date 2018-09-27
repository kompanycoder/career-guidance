<template>
  <div>
    <v-layout>
      <v-flex xs12>
        <Job-metadata :job="job" />
      </v-flex>

    </v-layout>

    <v-layout class="mt-2">
      <v-flex xs6>
        <Content :job="job" />
      </v-flex>

      <v-flex xs6 class="ml-2">
       
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Content from './content'

import JobMetadata from './JobMetadata'

import JobsService from '@/services/JobsService'
import JobHistoryService from '@/services/JobHistoryService'

export default {
  data () {
    return {
      job: {}
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  },
  async mounted () {
    const jobId = this.route.params.jobId
    this.job = (await JobsService.show(jobId)).data

    if (this.isUserLoggedIn) {
      JobHistoryService.post({
        jobId: jobId
      })
    }
  },
  components: {
    JobMetadata,
    Content
  }
}
</script>

<style scoped>
</style>

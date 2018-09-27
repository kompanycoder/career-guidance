<template>
  <div class="container">
    <panel title="Jobs">
    
    <div 
      v-for="job in jobs"
      class="job"
      :key="job.id">

      <v-layout>
        <v-flex xs6>
          <div class="job-title">
            {{job.title}}
          </div>
          <div class="job-description">
            {{job.description}}
          </div>

          <v-btn
            dark
            class="green"
            :to="{
              name: 'job', 
              params: {
                jobId: job.id
              }
            }">
            View
          </v-btn>
        </v-flex>
      </v-layout>
    </div>
  </panel>
  
  
  </div>
</template>

<script>
import JobsService from '@/services/JobsService'

export default {
  data () {
    return {
      jobs: {}
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.jobs = (await JobsService.index(value)).data
      }
    }
  }
}
</script>

<style scoped>
.job {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.job-title {
  font-size: 30px;
}

.job-description {
  font-size: 24px;
}

.job-content {
  font-size: 18px;
}
</style>

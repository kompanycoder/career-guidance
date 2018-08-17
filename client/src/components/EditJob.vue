<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Job details">
        <v-text-field
          label="Title"
          required
          :rules="[required]"
          v-model="job.title"
        ></v-text-field>

        <v-text-field
          label="description"
          required
          :rules="[required]"
          v-model="job.description"
        ></v-text-field>

      </panel>
    </v-flex>

    <v-flex xs8>
      <panel title="Job Structure" class="ml-2">
        <v-text-field
          label="Content"
          multi-line
          required
          :rules="[required]"
          v-model="job.content"
        ></v-text-field>
        
        <v-text-field
          label="Company"
          multi-line
          required
          :rules="[required]"
          v-model="job.company"
        ></v-text-field>

      </panel>

      <div class="danger-alert" v-if="error">
        {{error}}
      </div>

      <v-btn
        dark
        class="green"
        @click="create">
        Save Job
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import JobsService from '@/services/JobsService'

export default {
  data () {
    return {
      job: {
        title: null,
        description: null,
        content: null,
        company: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async save () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.job)
        .every(key => !!this.job[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }

      const jobId = this.$store.state.route.params.jobId
      try {
        await JobsService.put(this.job)
        this.$router.push({
          name: 'job',
          params: {
            jobId: jobId
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      const jobId = this.$store.state.route.params.jobId
      this.job = (await JobsService.show(jobId)).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>
</style>

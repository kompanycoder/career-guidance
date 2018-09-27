<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Job details for Posting">
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
        Create Job
      </v-btn>
    </v-flex>
    
    
    <v-flex xs8>
       <panel title="candidates" class="ml-2">
            <div>
                <p>candidates are shown here</p>
            </div>
        </panel>
    </v-flex>
  </v-layout>
  
</template>

<script>
import JobsService from '@/services/JobsService'
import Panel from '@/components/globals/Panel.vue'

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
  components: {
    Panel
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.job)
        .every(key => !!this.job[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }

      try {
        await JobsService.post(this.job)
        this.$router.push({
          name: 'jobs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
</style>

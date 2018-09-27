<template>
  <panel title="Job Metadata">
    <v-layout>
      <v-flex xs6>
        <div class="job-title">
          {{job.title}}
        </div>
        <div class="job-description">
          {{job.description}}
        </div>
      </v-flex>
      <v-flex xs6>
        <v-btn
          dark
          class="green"
          :to="{
            name: 'job-edit', 
            params () {
              return {
                jobId: job.id
              }
            }
          }">
          Edit
        </v-btn>

        <v-btn
          v-if="isUserLoggedIn && !bookmark"
          dark
          class="green"
          @click="setAsBookmark">
          Set As Bookmark
        </v-btn>

        <v-btn
          v-if="isUserLoggedIn && bookmark"
          dark
          class="green"
          @click="unsetAsBookmark">
          Unset As Bookmark
        </v-btn>
      </v-flex>

    </v-layout>
  </panel>
</template>

<script>
import Panel from '@/components/globals/Panel.vue'
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  props: [
    'job'
  ],
  components: {
    Panel
  },
  data () {
    return {
      bookmark: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  watch: {
    async job () {
      if (!this.isUserLoggedIn) {
        return
      }

      try {
        const bookmarks = (await BookmarksService.index({
          jobId: this.job.id
        })).data
        if (bookmarks.length) {
          this.bookmark = bookmarks[0]
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
  methods: {
    async setAsBookmark () {
      try {
        this.bookmark = (await BookmarksService.post({
          jobId: this.job.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async unsetAsBookmark () {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
.job {
  padding: 20px;
  height: 500px;
  overflow: hidden;
}

.job-title {
  font-size: 30px;
}

.job-description {
  font-size: 24px;
}

.job-content{
  font-size: 18px;
}
</style>

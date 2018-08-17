<template>
  <panel title="Job Metadata">
    <v-layout>
      <v-flex xs6>
        <div class="job-title">
          {{job.title}}
        </div>
        <div class="job-artist">
          {{job.artist}}
        </div>
        <div class="job-genre">
          {{job.genre}}
        </div>

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

      <v-flex xs6>
        <img class="album-image" :src="job.albumImageUrl" />
        <br>
        {{job.album}}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  props: [
    'job'
  ],
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
  height: 330px;
  overflow: hidden;
}

.job-title {
  font-size: 30px;
}

.job-artist {
  font-size: 24px;
}

.job-genre {
  font-size: 18px;
}

.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>

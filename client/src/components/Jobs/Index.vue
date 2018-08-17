<template>
  <v-layout>
    <v-flex xs6 v-if="isUserLoggedIn">
      <jobs-bookmarks />
      <recently-viewed-jobs class="mt-2" />
    </v-flex>

    <v-flex :class="{
        xs12: !isUserLoggedIn,
        xs6: isUserLoggedIn
      }" class="ml-2">
      <jobs-search-panel />
      <jobs-panel class="mt-2" />
    </v-flex>
  </v-layout>
</template>

<script>
import JobsPanel from './JobsPanel'
import JobsBookmarks from './JobsBookmarks'
import RecentlyViewedJobs from './RecentlyViewedJobs'
import JobsSearchPanel from './JobsSearchPanel'
import JobsService from '@/services/JobsService'
import {mapState} from 'vuex'

export default {
  components: {
    JobsPanel,
    JobsSearchPanel,
    JobsBookmarks,
    RecentlyViewedJobs
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.jobs = (await JobsService.index()).data
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

<template>
  <panel title="Try self Assessment Tests and other Resources">
    <p>This career tests will help you find out what professions fit your personality: <br></p>
    <div class="row">
      <div class="col-md-5">
        <div class="container">
          <p class="text">Take standard career aptitude test online</p>
          <a href="https://www.123test.com/career-test/"> <v-btn class="info btn-block col-md-5">Standard Career aptitude test </v-btn></a> 
          
        </div>
        <div >
          <p class="text">what career is right for me? click below to find out more about comprehensive careers.</p>
          <a href="https://www.whatcareerisrightforme.com/"> <v-btn class="info btn-block col-md-5">  Right Career? </v-btn></a> 
          
        </div>
        <div >
          <p class="text"> Career Test at Sonaku website</p>
          <a href="https://www.sokanu.com/assessments/welcome/intro/?"> <v-btn class="info btn-block col-md-5">  Sonaku career test </v-btn></a>
          
        </div>
        
        <div >
          <p class="text">Discover your career</p>
          <a href="http://www.discoveryourcareer.co.ke/"> <v-btn class="info btn-block col-md-5"> Discover your career </v-btn></a> 
          
        </div>
        <div >
          <p class="text">Career Test Free for Students and Adults</p>
          <a href="https://www.yourfreecareertest.com/"> <v-btn class="info btn-block col-md-5">Student and adult test </v-btn></a> 
          
        </div>
      </div>
    </div>
    
  </panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  data () {
    return {
      headers: [
        {
          text: 'Title',
          value: 'title'
        },
        {
          text: 'Company',
          value: 'company'
        }
      ],
      pagination: {
        sortBy: 'createdAt',
        descending: true
      },
      bookmarks: []
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.bookmarks = (await BookmarksService.index()).data
    }
  }
}
</script>

<style>

</style>

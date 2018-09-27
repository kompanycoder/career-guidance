<template>
<div>
  login for companies  and related components.

  <div class="container">
      <v-btn class="btn warning"
        dark
        :to="{
          name: 'loginCompany'
        }">
        Login as a Company
    </v-btn>

  </div>
  
   
</div>
      
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>

<template>
    <v-container fluid>
      <h4 class="text">Welcome to the Online Career Guidance System</h4>
        <v-carousel>
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            ></v-carousel-item>
        </v-carousel>
    </v-container>

</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require(`@/assets/career.jpg`)
          },
          {
            src: require(`@/assets/Career-Guidance-Dublin.jpg`)
          },
          {
            src: require(`@/assets/success-2697951_960_720.jpg`)
          },
          {
            src: require(`@/assets/consulting-2045471_960_720.jpg`)
          }
        ]
      }
    }
  }
</script>

<style scoped>
h4{
  color: green;
}
</style>

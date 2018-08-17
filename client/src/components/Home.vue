<template>
    <v-container fluid>
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
</style>

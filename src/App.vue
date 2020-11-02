<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  // created(){
  //   //api path(jacky1209)
  //   const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`
  //   // const api = 'https://vue-course-api.hexschool.io/api/jacky1209/products'
  //   console.log(process.env.APIPATH,process.env.CUSTOMPATH)
  //   this.$http.get(api).then((response)=>{
  //     console.log(response.data)
  //   })
  // }
}
</script>

<style lang="scss">
//載入scss版本的bootstrap
@import "./assets/all";
</style>

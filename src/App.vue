<template>
    <Nav />
    <router-view />
    <Link/>
  <Footer/>

</template>

<script>
import Nav from "./views/Nav";
import Footer from "./views/Footer";
import Link from './views/Link.vue';

export default {
  components: {
    Nav,
    Footer,
  },
  data() {
    return {
    
    }
  }
};
</script>
<style>

</style>

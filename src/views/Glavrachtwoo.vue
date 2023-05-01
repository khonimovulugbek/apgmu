<template>
    <div class="container">
        <div class="vrach">
        <div class="vrach__info">
            <div class="vrach__info-name">
            <p class="vrach__info-name-text">{{doctor.post_ru }}</p>
        <h1>{{ doctor.name_ru }}</h1>
        </div>
        <div class="vrach__info-img">
             <img :src="'http://127.0.0.1:8000' + doctor.photo" alt="">
        </div>
        </div>
       <p v-html="doctor.text_ru" class="doctor__text"></p>

    
    
    
    </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState(["doctor"]),
    },
}
</script>
<style lang="scss">
    .doctor__text{
        line-height: 150%;
        font-size: 25px;
    }
</style>
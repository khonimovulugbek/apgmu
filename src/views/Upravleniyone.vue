<template>
    <div class="container">
             <div class="vrach">
        <div class="vrach__info">
            <div class="vrach__info-name">
            <p class="vrach__info-name-text">{{upone.post_ru }}</p>
        <h1>{{ upone.name_ru }}</h1>
        </div>
        <div class="vrach__info-img">
            <img :src="'http://127.0.0.1:8000' + upone.photo" alt="">
        </div>
        </div>
        <p v-html="upone.text_ru"></p>
    <h4 class="vrach__title">Структура Управления по обеспечению специализированным автотранспортом</h4>
    <h5 class="vrach-title">Административный отдел</h5>
    <h5 class="vrach-title">Отдел эксплуатации</h5>
    <h5 class="vrach-title">Отдел хозяйственной службы</h5>
    <h5 class="vrach-title">Технический отдел</h5> 
    </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState(["upone"]),
    },
}
</script>
<style lang="">
    
</style>
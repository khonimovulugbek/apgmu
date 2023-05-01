<template>
    <div class="container">
              <div class="vrach">
        <div class="vrach__info">
            <div class="vrach__info-name">
            <p class="vrach__info-name-text">{{uptwoo.post_ru}}</p>
        <h1>{{ uptwoo.name_ru }}</h1>
        </div>
        <div class="vrach__info-img">
            <img :src="'http://127.0.0.1:8000' + uptwoo.photo" alt="">
        </div>
        </div>
       <p v-html="uptwoo.text_ru"></p>
    <h4 class="vrach__title">Структура управления по развитию материально-технической базы:</h4>
    <h5 class="vrach-title">Отдел контроля и мониторинга капитального ремонта и реконструкции объектов ГМУ</h5>
    <h5 class="vrach-title">Отдел по развитию материально-технической базы ГМУ</h5>
    </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState(["uptwoo"]),
    },
}
</script>
<style lang="">
    
</style>
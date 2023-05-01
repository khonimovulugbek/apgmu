<template>
    <div class="container">
            <div class="vrach">
        <div class="vrach__info">
            <div class="vrach__info-name">
            <p class="vrach__info-name-text">{{nachalnik.post_ru }}</p>
        <h1>{{ nachalnik.name_ru }}</h1>
        </div>
        <div class="vrach__info-img">
          <img :src="'http://127.0.0.1:8000' + nachalnik.photo" alt="">
        </div>
        </div>
       <p v-html="nachalnik.text_ru"></p>
    <h4 class="vrach__title">Управление cанитарно-эпидемиологического надзора</h4>
    <h5 class="vrach-title">Санитарно-гигиенический отдел</h5>
    <h5 class="vrach-title">Эпидемиологический отдел</h5>
    <h5 class="vrach-title">Отдел по контролю за радиационной безопасности и физических факторов с лабораторией</h5>
    <h5 class="vrach-title">Санитарно-гигиеническая лаборатория</h5>
    <h5 class="vrach-title">Бактериологическая лаборатория</h5>  
    <h5 class="vrach-title">Профилактическая токсико-гигиеническая лаборатория</h5>  
    <h5 class="vrach-title">Отдел оказания платных услуг и выдачи санитарно-гигиенических заключений</h5>  
    <h5 class="vrach-title">Отдел профилактической дезинфекции</h5>  
    </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState(["nachalnik"]),
    },
}
</script>
<style lang="">
    
</style>
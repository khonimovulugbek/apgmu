<template>
    <div class="container">
            <div class="vrach">
        <div class="vrach__info">
            <div class="vrach__info-name">
            <p class="vrach__info-name-text">{{director.post_ru }}</p>
        <h1>{{ director.name_ru }}</h1>
        </div>
        <div class="vrach__info-img">
            <img :src="'http://127.0.0.1:8000' + director.photo" alt="">
        </div>
        </div>
        <p v-html="director.text_ru"></p>
    <h4 class="vrach__title">Структура Центральной аптеки</h4>
    <h5 class="vrach-title"><span>ЦЕНТРАЛЬНАЯ АПТЕКА:</span></h5>
    <h5 class="vrach-title">Отдел готовых лекарственных форм</h5>
    <h5 class="vrach-title">Рецептурно - производственный отдел</h5>
    <h5 class="vrach-title">Отдел запасов</h5>
    <h5 class="vrach-title">ФИТОБАР</h5>  
    <h5 class="vrach-title">Дежурный отдел </h5>  
    <br>
    <h5 class="vrach-title">ОПТИКА</h5>  
    <h5 class="vrach-title">Отдел готовых лекарственных форм при ЦКДП №2</h5>  
    </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState(["director"]),
    },
}
</script>
<style lang="">
    
</style>
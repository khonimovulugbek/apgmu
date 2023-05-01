<template>
    <div class="container">
         <div class="vrach">
        <div class="vrach__info">
            <div class="vrach__info-name">
            <p class="vrach__info-name-text">{{glavrach.post_ru }}</p>
        <h1>{{ glavrach.name_ru }}</h1>
        </div>
        <div class="vrach__info-img">
           <img :src="'http://127.0.0.1:8000' + glavrach.photo" alt="">
        </div>
        </div>
       <p v-html="glavrach.text_ru"></p>
    <div class="vrach__cards">
        <h5>Приемный покой</h5>
        <h5>Клинико-диагностическое отделение</h5>
        <h5>Клинико биохимическая лаборатория</h5>
        <br>
        <h4>СТАЦИОНАРНЫЕ ОТДЕЛЕНИИ :</h4>
        <h5>Приемно-диагностическое отделение</h5>
        <h5>Терапевтическое отделение</h5>
        <h5>Неотложная кардиология</h5>
        <h5>Реанимационное отделение</h5>
        <h5>Неврологическое отделение</h5>
        <h5>Эндокринологическое отделение</h5>
        <h5>ЛОР отделение</h5>
        <h5>Офтальмологическое отделение</h5>
        <h5>Кардиологическое отделение</h5>
        <br>
        <h5>ОПЕРАЦИОННЫЙ БЛОК</h5>
        <h5>Физиотерапевтическое отделение</h5>
        <h5>Отделение централизованной стерилизации</h5>
        <h5>АПТЕКА</h5>
        <h5>Медицинский архив и мед.статистика</h5>
    </div>
    
    
    </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState(["glavrach"]),
    },
}
</script>
<style lang="">
    
</style>
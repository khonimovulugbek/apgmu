<template>
    <div class="container">
           <div class="vrach">
        <div class="vrach__info">
            <div class="vrach__info-name">
            <p class="vrach__info-name-text">{{qibray.post_ru }}</p>
        <h1>{{ qibray.name_ru }}</h1>
        </div>
        <div class="vrach__info-img">
          <img :src="'http://127.0.0.1:8000' + qibray.photo" alt="">
        </div>
        </div>
        <p v-html="qibray.text_ru"></p>
    <h4 class="vrach__title">Клиническая санатория «КИБРАЙ»</h4>
    <h5 class="vrach-title">Бальнео-физиотерапевтическое отделение</h5>
    <h5 class="vrach-title">Кардиологическое отделение</h5>
    <h5 class="vrach-title">Клинико- диагностическая лаборатория</h5>
    <h5 class="vrach-title">Отделение восстановительного лечения</h5>
    <h5 class="vrach-title">Неврологическое отделение</h5>  
    </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState(["qibray"]),
    },
}
</script>
<style lang="scss">
    .vrach{
        &-title{
            text-align: center;
            font-size: 18px;
        }
        &__title{
            text-align: center;
            font-size: 22px;
            margin-top: 50px;
        }
    }
    @media (max-width:550px) {
        .vrach{
        &-title{
            text-align: center;
            font-size: 17px;
        }
        &__title{
            text-align: center;
            font-size: 20px;
            margin-top: 35px;
        }
    }
    }
    @media (max-width:400px) {
        .vrach{
        &-title{
            text-align: center;
            font-size: 16px;
        }
        h3{
            font-size: 18px;
            font-weight: 500;
        }
        &__title{
            text-align: center;
            font-size: 18px;
            margin-top: 25px;
        }
    }
    }
    @media (max-width:350px) {
        .vrach{
            gap: 5px;
        &-title{
            text-align: center;
            font-size: 16px;
            font-weight: 500;
        }
        h3{
            font-size: 16px;
            font-weight: 500;
        }
        &__title{
            text-align: center;
            font-size: 18px;
            margin-top: 15px;
            font-weight: 500;
        }
    }
    }
</style>
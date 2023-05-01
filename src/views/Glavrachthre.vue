<template>
    <div class="container">
        <div class="vrach">

        <div class="vrach__info">
            <div class="vrach__info-name">
            <p class="vrach__info-name-text">{{vrach.post_ru }}</p>
        <h1>{{ vrach.name_ru }}</h1>
        </div>
        <div class="vrach__info-img">
             <img :src="'http://127.0.0.1:8000' + vrach.photo" alt="">
        </div>
        </div>
       <p v-html="vrach.text_ru"></p>
    <div class="vrach__cards">
        <h5>Приемный покой</h5>
        <h5>Клинико-диагностическое отделение</h5>
        <h5>Клинико-биохимическая лаборатория</h5>
        <br>
        <h4>СТАЦИОНАРНЫЕ ОТДЕЛЕНИИ:</h4>
        <h5>Терапевтическое отделение</h5>
        <h5>Кардиологическое отделение</h5>
        <h5>Неврологическое отделение</h5>
        <h5>Реанимационное отделение</h5>
        <h5>Хирургическое отделение</h5>
        <h5>Урогинекологическое отделение</h5>
        <br>
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
        ...mapState(["vrach"]),
    },
}
</script>
<style lang="scss">
    .vrach{
        h2{
            text-align: center;
            font-size: 20px;
            margin-top: 30px;
        }
        &__cards{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 1px solid black;
            width: 450px;
            margin: 0 auto;
            padding: 30px;
            border-radius: 10px;
            h4{
                font-size: 18px;
                max-width: 450px;
                width: 100%;
            }
            h5{
                max-width: 450px;
                width: 100%;
                font-size: 16px;
                margin-top: 20px;
                border-bottom: 1px solid grey;
                text-align: center;
                border-radius: 10px;
                box-shadow: 0 5px 0 0 grey;
            }
        }
    }
    @media (max-width:550px) {
        .vrach{
        h2{
            text-align: center;
            font-size: 18px;
            margin-top: 30px;
        }
        &__cards{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 1px solid black;
            width: 400px;
            margin: 0 auto;
            padding: 20px;
            border-radius: 10px;
            h4{
                font-size: 16px;
                text-align: center;
            }
            h5{
                font-size: 15px;
                margin-top: 20px;
                border-bottom: 1px solid grey;
                width: 100%;
                text-align: center;
                border-radius: 10px;
                box-shadow: 0 5px 0 0 grey;
            }
        }
    }
    }
    @media (max-width:490px) {
        .vrach{
        h2{
            text-align: center;
            font-size: 18px;
            margin-top: 30px;
        }
        &__cards{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 1px solid black;
            width: 350px;
            margin: 0 auto;
            padding: 20px;
            border-radius: 10px;
            h4{
                font-size: 16px;
                text-align: center;
            }
            h5{
                font-size: 15px;
                margin-top: 20px;
                border-bottom: 1px solid grey;
                width: 100%;
                text-align: center;
                border-radius: 10px;
                box-shadow: 0 5px 0 0 grey;
            }
        }
    }
    }
    @media (max-width:440px) {
        .vrach{
        h2{
            text-align: center;
            font-size: 16px;
            margin-top: 30px;
        }
        h3{
            font-size: 16px;
        }
        ul{
            li{
                font-size: 16px;
                text-align: justify;
            }
        }
        &__cards{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 1px solid black;
            width: 300px;
            margin: 0 auto;
            padding: 15px;
            border-radius: 10px;
            h4{
                font-size: 15px;
                text-align: center;
            }
            h5{
                font-size: 14px;
                margin-top: 20px;
                border-bottom: 1px solid grey;
                width: 100%;
                text-align: center;
                border-radius: 10px;
                box-shadow: 0 5px 0 0 grey;
            }
        
        }
    }
    }
    @media (max-width:380px) {
        .vrach{
        h2{
            text-align: center;
            font-size: 15px;
            margin-top: 30px;
        }
        h3{
            font-size: 16px;
        }
        &__cards{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 1px solid black;
            width: 250px;
            margin: 0 auto;
            padding: 10px;
            border-radius: 10px;
            h4{
                font-size: 14px;
                text-align: center;
            }
            h5{
                font-size: 13px;
                margin-top: 20px;
                border-bottom: 1px solid grey;
                width: 100%;
                text-align: center;
                border-radius: 10px;
                box-shadow: 0 5px 0 0 grey;
            }
        }
    }
    }
    @media (max-width:330px) {
        .vrach{
        h2{
            text-align: center;
            font-size: 15px;
            margin-top: 30px;
            font-weight: 500;
        }
        h3{
            font-size: 16px;
            font-weight: 500;
        }
        &__cards{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 1px solid black;
            width: 200px;
            margin: 0 auto;
            padding: 10px;
            border-radius: 10px;
            h4{
                font-size: 14px;
                font-weight: 500;
                text-align: center;
            }
            h5{
                font-size: 12px;
                font-weight: 500;
                padding: 0 5px;
                margin-top: 20px;
                border-bottom: 1px solid grey;
                width: 100%;
                text-align: center;
                border-radius: 10px;
                box-shadow: 0 5px 0 0 grey;
            }
        }
    }
    }
</style>
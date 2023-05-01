<template>
   <div class="container">
     <div class="for">
        <h1>Дадажонов Шухрат Нурматович</h1>
        <h2>Ҳурматли Шуҳрат Нурматович!</h2>
        <p class="for-texts">Сизни ҳаётингиздаги чинакам баркамоллик палласи - таваллуд топган кунингизнинг 50 йиллиги муносабати билан,  Ўзбекистон Республикаси Президенти Администрацияси ҳузуридаги Тиббиёт бош бошқармаси ходимлари номидан самимий табриклаймиз. Сизнинг ғайрат-шижоатга тўла, самарали меҳнат фаолиятингиз кўпчилик учун ибрат ва фидойилик намунаси бўла олади.</p>
    
    </div>
     <div class="for__bottom">
        <h1>Дадажонов Шухрат Нурматович</h1>
        <img src="../assets/imgs/jamoa.jpg" alt="">
        <h2>Ҳурматли Шуҳрат Нурматович!</h2>
        <p class="for__bottom-texts">Сизни ҳаётингиздаги чинакам баркамоллик палласи - таваллуд топган кунингизнинг 50 йиллиги муносабати билан,  Ўзбекистон Республикаси Президенти Администрацияси ҳузуридаги Тиббиёт бош бошқармаси ходимлари номидан самимий табриклаймиз. Сизнинг ғайрат-шижоатга тўла, самарали меҳнат фаолиятингиз кўпчилик учун ибрат ва фидойилик намунаси бўла олади.</p>
    
    </div> 
    <div class="new__footer">
                <router-link class="new__footer-li" to="/yangiliklarone">1</router-link>
                <router-link class="new__footer-li" to="/yangiliklartwoo">2</router-link>
                <router-link class="new__footer-li" to="/yangiliklarthre">3</router-link>
                <router-link class="new__footer-li" to="/yangiliklarfor">4</router-link>
        </div>
   </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .for{
        margin-top: 50px;
          border: 1px solid black;
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 20px; 
            &-text{
                text-align: right;
            }
            h1{
                font-size: 25px;
                color: rgb(20, 20, 111);
            }
            p{
                color: darkblue;
                font-weight: 600;
            }
            h2{
                text-align: center;
                color: rgb(129, 129, 95);
                font-weight: 900;
                font-family: Verdana, Geneva, sans-serif;
            }
            &-texts{
                font-size: 22px;
                font-weight: 600;
                color: teal;
                text-align: justify;
                line-height: 140%;
            }
    }
    .for__bottom{
        border: 1px solid black;
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin: 30px 0;
            &-text{
                 text-align: right;
            }
            img{
                width: 180px;
                height: 120px;
                border-radius: 10px;
            }
            h1{
                font-size: 25px;
                color: rgb(20, 20, 111);
            }
            p{
                color: darkblue;
                font-weight: 600;
            }
            h2{
                text-align: center;
                color: rgb(129, 129, 95);
                font-weight: 900;
                font-family: Verdana, Geneva, sans-serif;
            }
            &-texts{
                font-size: 22px;
                font-weight: 600;
                color: teal;
                text-align: justify;
                line-height: 140%;
            }
    }
    @media (max-width:1000px) {
        .for{
            h1{
                font-size: 22px;
            }
            h2{
                font-size: 22px;
            }
            p{
                font-size: 20px;
            }
        }
        .for__bottom{
            h1{
                font-size: 22px;
            }
            h2{
                font-size: 22px;
            }
            &-texts{
                font-size: 20px;
            }
        }
    }
    @media (max-width:800px) {
        .for{
            h1{
                font-size: 20px;
            }
            h2{
                font-size: 20px;
            }
            p{
                font-size: 18px;
            }
        }
        .for__bottom{
            h1{
                font-size: 20px;
            }
            h2{
                font-size: 20px;
            }
            &-texts{
                font-size: 18px;
            }
        }
    }
    @media (max-width:600px) {
        .for{
            h1{
                font-size: 18px;
            }
            h2{
                font-size: 18px;
            }
            p{
                font-size: 16px;
            }
        }
        .for__bottom{
            h1{
                font-size: 18px;
            }
            h2{
                font-size: 18px;
            }
            &-texts{
                font-size: 16px;
            }
        }
    }
    @media (max-width:400px) {
        .for{
            h1{
                font-size: 16px;
            }
            h2{
                font-size: 16px;
            }
            p{
                font-size: 14px;
            }
        }
        .for__bottom{
            img{
                margin-left: auto;
                margin-right: auto;
            }
            h1{
                font-size: 16px;
            }
            h2{
                font-size: 16px;
            }
            &-texts{
                font-size: 14px;
            }
        }
    }
    @media (max-width:350px) {
        .for{
            h1{
                font-size: 16px;
                text-align: center;
            }
            h2{
                font-size: 16px;
                font-weight: 500;
            }
            p{
                font-size: 14px;
                font-weight: 500;
            }
        }
        .for__bottom{
            h1{
                font-size: 16px;
                text-align: center;
            }
            h2{
                font-size: 16px;
                font-weight: 500;
            }
            &-texts{
                font-size: 14px;
                font-weight: 500;
            }
        }
    }
</style>
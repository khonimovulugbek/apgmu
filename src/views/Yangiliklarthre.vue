<template>
    <div class="container">
         <div class="neww">
        <div class="neww__one">
            <h1>РАМАЗОН ХАЙИТИ МУБОРАК БЎЛСИН!</h1>
            <img src="../assets/imgs/ramazon_hayit.jpg" alt="">
        </div>
        <div class="neww__two">
            <h1>Поздравляем с Международный день медицинской сестры</h1>
            <img src="../assets/imgs/pozdravlenie-s-dnem-medsestry-1024x1024.jpg" alt="">
           
        </div>
        <div class="neww__footer">
                <router-link class="new__footer-li" to="/yangiliklarone">1</router-link>
                <router-link class="new__footer-li" to="/yangiliklartwoo">2</router-link>
                <router-link class="new__footer-li" to="/yangiliklarthre">3</router-link>
                <router-link class="new__footer-li" to="/yangiliklarfor">4</router-link>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .neww{
        margin-top: 50px;
        &__footer{
            display: flex;
            gap: 30px;
            margin-bottom: 30px;
            &-li{
                border: 1px solid black;
                width: 25px;
                height: 25px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 5px;
                background: black;
                color: white;
                font-weight: 700;
            }
        }
        h1{
            color: royalblue;
        }
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 30px;
        &__one{
            border: 1px solid black;
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            img{
                width: 100%;
                object-fit: cover;
                border-radius: 10px;
            }
            p{
                font-size: 16px;
                text-align: right;
                color: darkblue;
                font-weight: 600;
            }
            h1{
                font-size: 24px;
                color: steelblue;
            }
        }
        &__two{
            border: 1px solid black;
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            img{
                width: 100%;
                height: 100%;
                border-radius: 10px;
            }
            &-video{
                border-radius: 10px;
            }
            p{
                text-align: right;
                color: darkblue;
                font-weight: 600;
            }
            h3{
                font-weight: 500;
            }
        }
        
    }
    @media (max-width:1000px) {
        .neww{
            h1{
                font-size: 23px;
            }
        }
    }
    @media (max-width:750px) {
        .neww{
            h1{
                font-size: 20px;
                text-align: center;
            }
        }
    }
    @media (max-width:450px) {
        .neww{
            h1{
                font-size: 18px;
                text-align: center;
            }
        }
    }
    @media (max-width:350px) {
        .neww{
            h1{
                font-size: 16px;
                text-align: center;
                font-weight: 500;
            }
        }
    }
</style>
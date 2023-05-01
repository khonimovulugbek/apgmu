<template>
      <div class="home">
      <video autoplay muted src="../assets/video/prizidentadmin.mp4"></video>
    </div> 
    <div class="container">
         <div class="info">
            <h1 class="info-title">Об управлении</h1>
            <div class="info_infoo" v-for="(manage, i) in managements" :key="i">
    <p class="info-text">{{ manage.text_ru }}</p>
            </div>
        </div> 
         <div class="region">
            <h1 class="region__title">Региональные учреждения</h1>
            <div class="about__left-nav">
                <button @click="cnopca = !cnopca">
                    <img v-if="cnopca" src="../assets/imgs/list.svg" alt="">
                    <img v-else src="../assets/imgs/grid.svg" alt="">
                    <span v-if="cnopca">Ro'yxat</span>
                    <span v-else>Setka</span>
                </button>
            </div>
            <div class="region__cards" :class="{ setka: cnopca, list: !cnopca }">
                <div class="region__cards-card" v-for="(clinik,i) of cliniks" :key="i">
                    <img :src="'http://127.0.0.1:8000' + clinik.image" alt="">
                    <div class="region__cards-card-info">
                        <h2>{{ clinik.title_ru }}</h2>
                        <div class="region__cards-card-info-number">
                            <img src="../assets/imgs/phone.svg" alt="">
                            <div class="region__cards-card-info-number-link">
                                <a href="tel:+998-71-233-57-04" v-html="clinik.numbers">
                                </a>
                                <!-- <a href="tel:+998-71-236-08-84">
                                    +998-71-236-08-84
                                </a>
                                <a href="+998-71-233-19-03">
                                    +998-71-233-19-03
                                </a> -->
                            </div>
                        </div>
                        
                        <p class="region__cards-card-info-text" >
                            <img src="../assets/imgs/locatsia.svg" alt="">
                            {{ clinik.address }}
                        </p>


                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    data() {
        return {
            cnopca: false
        }
    },
     computed: {
        ...mapState(["cliniks"]),
        ...mapState(["managements"]),
    },
    watch: {
        cliniks() {
            // console.log(this.cliniks[0].title_uz);
        }
    }
};
</script>
<style lang="scss">
#myVideo {
    right: 0;
    top: 100px;
    height: 200px;
}
.home {
    width: 100%;
    background-size: cover;
    background-position: center;
    position: relative;
    video{
        width: 100%;
        max-height: 650px;
        height: 100%;
        object-fit: fill;
        object-position: center;
        display: block;
        z-index: -1;
    }
    &::after {
        content: "";
        background-color: rgba(5, 5, 5, 0.582);
        width: 100%;
        max-height: 650px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;

    }

    &__burger,
    &__close {
        display: none;

        img {
            max-width: 30px;
            width: 100%;

        }
    }

    &__burger {
        img {
            margin-top: 30px;
        }
    }

    &__nav {
        margin-top: 30px;
        background: darkblue;
        width: 100%;
        height: 80px;

        &-list {
            display: flex;
            justify-content: space-between;
            padding: 30px 0;
            max-width: 1640px;
            width: 100%;

            &-li {
                color: white;
                font-weight: 700;
                font-size: 18px;
                transition: 0.7s;
                cursor: pointer;

                &:hover {
                    color: red;
                }
            }
        }
    }

    &__main {
        position: absolute;
        left: 5%;
        top: 45%;

        &-title {
            color: black;
            font-size: 40px;
        }

        &-text {
            color: black;
            font-size: 30px;
            font-weight: 700;


        }

        &-btns {
            display: flex;
            gap: 15px;
            align-items: center;
            justify-content: center;
            margin-top: 30px;

            &-btn {
                color: black;
                background: white;
                font-size: 20px;
                font-weight: 600;
                border: 3px solid black;
                padding: 10px 40px;
                border-radius: 10px 20px;
                transition: 0.5s;

                &:hover {
                    color: white;
                    background: black;
                    border-radius: 20px 10px;
                    border: 3px solid white;
                }

            }
        }
    }
}

.region {
    margin: 50px 0;

    &__title {
        margin-bottom: 30px;
        font-size: 35px;
        font-family: 'Courier New', Courier, monospace;
        text-shadow: 0 8px 2px grey;
        background: white;
        width: max-content;
        padding: 5px 15px;
        border-radius: 10px;
    }

    &__cards {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        margin-top: 30px;

        &-card {
            display: flex;
            align-items: center;
            gap: 30px;
            max-width: 1500px;
            width: 100%;
            height: 100%;
            margin-left: auto;
            margin-right: auto;
            background: white;
            padding: 10px;
            border-radius: 10px;
                transition: 0.5s;


            &:hover {
                box-shadow: 0 0 20px rgba(0, 0, 0, 0.44);
                transform: scale(0.95);
               
            }

            img {
                max-width: 250px;
                width: 100%;
                max-height: 150px;
                height: 100%;
                border-radius: 5px;
            }

            &-info {
                display: flex;
                flex-direction: column;
                gap: 10px;

                h2 {
                    font-size: 20px;
                    color: indigo;
                    max-width: 500px;
                    width: 100%;
                    
                    span {
                        color: red;
                        font-family: serif;
                        
                    }
                }

                &-text {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 18px;
                    font-family: Verdana, Geneva, sans-serif;
                    font-weight: 600;
                    max-width: 500px;
                    width: 100%;

                    img {
                        width: 30px;
                        height: 30px;
                    }
                }

                &-number {
                    display: flex;
                    align-items: center;
                    gap: 20px;

                    img {
                        width: 30px;
                        height: 30px;
                    }

                    &-link {
                        display: flex;
                        flex-direction: column;

                        a {
                            color: slategray;
                            font-size: 20px;
                            font-weight: 600;
                        }
                    }
                }
            }
        }
    }
}

.info {
    margin: 50px 0;

    &-title {
        color: darkslategrey;
        background-color: rgb(212, 207, 207);
        box-shadow: 0 0 10px 0 grey;
        border-radius: 10px;
        width: 250px;
        text-align: center;
    }

    &-text {
        font-size: 18px;
        text-align: justify;
        width: 80%;
        margin-left: auto;
        margin-top: 30px;
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 5px 0 0 grey;

        span {
            font-weight: 700;
            font-size: 20px;
        }
    }
}

@media (max-width:1150px) {
    .home {
        &__nav {
            &-list {
                &-li {
                    font-size: 17px;
                }
            }
        }
    }
}

@media (max-width:1080px) {
    .home {
        &__nav {
            &-list {
                &-li {
                    font-size: 17px;
                    font-weight: 500;
                }
            }
        }
    }
}

@media (max-width:1000px) {
    .home {

        &__burger,
        &__close {
            display: block;
        }

        &__close {
            position: absolute;
            right: 30px;
            top: 30px;
        }

        &__nav {
            margin-top: 100px;

            &-list {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 100%;
                position: fixed;
                align-items: center;
                background-color: black;
                left: 0;
                bottom: -100%;
                transition: 0.5s;

                &.active {
                    bottom: 0;
                }

                &-li {
                    font-size: 17px;
                    font-weight: 500;
                }
            }
        }
    }

    .info {
        &-title {
            font-size: 28px;
        }
    }
}

@media (max-width:800px) {
    .region {
        &__title {
            font-size: 30px;
        }

        &__cards {
            &-card {
                &-info {
                    h2 {
                        font-size: 18px;
                    }

                    &-text {
                        font-size: 16px;
                        text-align: center;
                    }

                    &-number {
                        a {
                            font-size: 18px;
                        }
                    }
                }
            }
        }
    }
}

@media (max-width:700px) {
    .info {
        &-title {
            font-size: 25px;
            margin-left: auto;
            margin-right: auto;

        }

        &-text {
            margin-left: auto;
            margin-right: auto;
            text-align: start;
            width: 100%;
        }
    }
}

@media (max-width:650px) {
    .region {
        &__title {
            font-size: 25px;
        }

        &__cards {
            &-card {
                &-info {
                    h2 {
                        font-size: 17px;
                        max-width: 300px;
                        width: 100%;
                        text-align: center;
                    }

                    &-text {
                        font-size: 15px;
                        text-align: center;

                        img {
                            width: 20px;
                            height: 20px;
                        }
                    }

                    &-number {
                        a {
                            font-size: 16px;
                        }

                        img {
                            width: 20px;
                            height: 20px;
                        }
                    }
                }
            }
        }
    }
}

@media (max-width:600px) {
    .region {
        &__title {
            font-size: 25px;
        }

        &__cards {
            margin-left: auto;
                margin-right: auto;
            &-card {
                flex-direction: column;
                align-items: center;
                

                &-info {
                    h2 {
                        font-size: 17px;
                        max-width: 300px;
                        width: 100%;
                        text-align: center;
                        margin-left: auto;
                        margin-right: auto;
                    }

                    &-text {
                        font-size: 15px;
                        text-align: center;

                        img {
                            width: 20px;
                            height: 20px;
                        }
                    }

                    &-number {
                        margin-left: auto;
                        margin-right: auto;

                        a {
                            font-size: 16px;

                        }

                        img {
                            width: 20px;
                            height: 20px;
                        }
                    }
                }
            }
        }
    }
}

@media (max-width:500px) {
    .info {
        &-title {
            font-size: 20px;
            margin-left: auto;
            margin-right: auto;

        }

        &-text {
            margin-left: auto;
            margin-right: auto;
            text-align: start;
            font-size: 16px;

            span {
                font-size: 18px;
            }
        }
    }
    .region{
        &__cards {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 20px;
            &-card{
                gap: 10px;
                margin: 0;
            }
        }
    }
}

@media (max-width:400px) {
    .region {
        &__title {
            font-size: 20px;
        }

    }
}

@media (max-width:350px) {
    .info {
        &-title {
            font-size: 18px;
            margin-left: auto;
            margin-right: auto;
            width: 200px;
        }

        &-text {
            margin-left: auto;
            margin-right: auto;
            text-align: start;
            font-size: 15px;

            span {
                font-size: 15px;
            }
        }
    }
    .region{
        &__title{
            font-size: 18px;
            font-family: monospace;
            padding: 0 7px 3px 7px;
            
        }
    }
}</style>

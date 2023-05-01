<template>
    <div class="uslugi">
        <div class="container">
            <h1 class="uslugi-title">Услуги и обращение</h1>
            <div class="uslugi__cards">
                <div class="uslugi__cards-card">
                    <img src="../assets/imgs/icon1.png" alt="">
                    <p class="uslugi__cards-card-text">Подача заявления на государственную регистрацию лекарственного средства</p>
                </div>
                <div class="uslugi__cards-card">
                    <img src="../assets/imgs/icon2.png" alt="">
                    <p class="uslugi__cards-card-text">Подача заявления на государственную регистрацию лекарственного средства</p>
                </div>
                <div class="uslugi__cards-card">
                    <img src="../assets/imgs/icon3.png" alt="">
                    <p class="uslugi__cards-card-text">Подача заявления на государственную регистрацию лекарственного средства</p>
                </div>
                <div class="uslugi__cards-card">
                    <img src="../assets/imgs/icon4.png" alt="">
                    <p class="uslugi__cards-card-text">Подача заявления на государственную регистрацию лекарственного средства</p>
                </div>
                <div class="uslugi__cards-card">
                    <img src="../assets/imgs/icon5.webp" alt="">
                    <p class="uslugi__cards-card-text">Подача заявления на государственную регистрацию лекарственного средства</p>
                </div>
                <div class="uslugi__cards-card">
                    <img src="../assets/imgs/icon6.png" alt="">
                    <p class="uslugi__cards-card-text">Подача заявления на государственную регистрацию лекарственного средства</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .uslugi{
        background: rgb(46, 113, 194);
        width: 100%;
        height: 100%;
        padding: 50px 0;
        &-title{
            margin-bottom: 30px;
            color: aqua;
        }
        &__cards{
            display: flex;
            justify-content: end;
            flex-wrap: wrap;
            gap: 30px;
            &-card{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 20px;
                border-radius: 15px 30px;
                text-align: center;
                background: white;
                width: 450px;
                height: 200px;
                transition:0.5s;
                &:hover{
                    background: lightgreen;
                    border-radius: 30px 15px;
                    
                }
                img{
                    width: 85px;
                    height: 56px;
                    object-fit: contain;
                    text-align: center;
                }
                &-text{
                    color: black;
                    font-size: 20px;
                    font-weight: 600;
                    width: 450px;
                }
            }
        }
    }
</style>
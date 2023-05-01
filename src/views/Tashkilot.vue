<template>
    <div class="container">
    <div class="tashkilot">

    <h1>Подведомственные организации</h1>
    <ul class="tashkilot-list">
        <router-link class="tashkilot-list-link" to="/glavrachone">Центральная консультативно-диагностическая поликлиника №1</router-link>
        <router-link class="tashkilot-list-link" to="/glavrachtwoo">Центральная консультативно-диагностическая поликлиника №2</router-link>
        <router-link class="tashkilot-list-link" to="/glavrachthre">Центральная клиническая больница №1</router-link>
        <router-link class="tashkilot-list-link" to="/glavrachfor">Центральная клиническая больница № 2</router-link>
        <router-link class="tashkilot-list-link" to="/qibray">Клинический санаторий “Кибрай”</router-link>
        <router-link class="tashkilot-list-link" to="/nachalnik">Управление санитарно-эпидемиологического надзора</router-link>
        <router-link class="tashkilot-list-link" to="/direktor">Центральная аптека</router-link>
        <router-link class="tashkilot-list-link" to="/upravleniyone">Управление по обеспечению специализированным автотранспортом</router-link>
        <router-link class="tashkilot-list-link" to="/upravleniytwoo">Управление по развитию материально-технической базы</router-link>
    </ul>
   </div>
   </div> 
</template>
<script>
// import { mapState, mapActions } from 'vuex'
export default {
    //   computed: {
    //     ...mapState(["orgins"]),
    // },
    // watch: {
    //     orgins() {
    //         console.log(this.orgins[i]);
    //     }
    // } 
}
</script>
<style lang="scss">
    .tashkilot{
        margin-top: 50px;
        h1{
            margin: 10px 0 30px;
            text-shadow: 0 10px 3px  grey;
        }
        background: white;
        box-shadow: 0 10px 10px 0 grey;
        margin-bottom: 30px;
        padding: 30px;
        border-radius: 30px;
        &-list{
            display: flex;
            flex-direction: column;
            gap: 20px;
            text-align: center;
            &-link{
                background: rgba(181, 176, 176, 0.626);
                padding: 5px 10px;
                border-radius: 15px;
                color: black;
                font-size: 20px;
                font-weight: 600;
                transition: 0.5s;
                max-width: 800px;
                width: 100%;
                margin: 0 auto;
                &:hover{
                    box-shadow: 0 10px 10px 0 grey;
                }
            }
        }
    }
    @media (max-width:1000px) {
       .tashkilot{
        h1{
            font-size: 28px;
        }
       } 
    }
    @media (max-width:700px) {
       .tashkilot{
        h1{
            font-size: 26px;
        }
        &-list{
            &-link{
                font-size: 18px;
            }
        }
       } 
    }
    @media (max-width:500px) {
       .tashkilot{
        h1{
            font-size: 22px;
        }
        &-list{
            &-link{
                padding: 5px;
                font-size: 16px;
            }
        }
       } 
    }
    @media (max-width:350px) {
       .tashkilot{
        h1{
            font-size: 18px;
        }
        &-list{
            &-link{
                padding: 5px;
                font-size: 15px;
            }
        }
       } 
    }
</style>
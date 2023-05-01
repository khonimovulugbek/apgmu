<template>
   <div class="container">
    <div class="danniy">
    <h1>ОТКРЫТЫЕ ДАННЫЕ</h1>
    <ul class="danniy-list" v-for="(data, i) in opendata" :key="i">
        <li><a :href="data.pdf_ru"  download class="danniy-list-link">{{data.title_ru }} <span>PDF</span></a></li>

    </ul>
   </div>
   </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
    computed: {
        ...mapState(["opendata"]),
    },
}
</script>
<style lang="scss">

    .danniy{
        background: whitesmoke;
        padding: 20px;
        margin-bottom: 30px;
        border-radius: 5px;
        margin-top: 100px;
        h1{
            color: slategrey;
        }
        &-list{
            display: flex;
            gap: 10px;
            flex-direction: column;
            margin-top: 20px;
            &-link{
                color: black;
                border-radius: 5px;
                border: 1px solid black;
                padding: 10px 20px;
                font-size: 18px;
                font-weight: 600;
                display: flex;
                justify-content: space-between;
                span{
                    font-weight: 600;
                    color: white;
                    background: black;
                    padding: 0 8px;
                    margin-left: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                & link.router-link-exact-active{
    color: red;
    border-bottom: 2px solid red;
    box-shadow: 0 0 2px 0  rgb(31, 19, 19);
}
            }
        }
    }
    @media (max-width:1000px) {
        .danniy{
            h1{
                font-size: 28px;
            }
        }
    }
    @media (max-width:750px) {
        .danniy{
            h1{
                font-size: 25px;
            }
            &-list{
                &-link{
                    font-size: 17px;
                    span{
                        font-size: 16px;
                    }
                }
            }
        }
    }
    @media (max-width:600px) {
        .danniy{
            h1{
                font-size: 22px;
            }
            &-list{
                &-link{
                    font-size: 16px;
                    span{
                        font-size: 15px;
                    }
                }
            }
        }
    }
    @media (max-width:470px) {
        .danniy{
            h1{
                font-size: 20px;
            }
            &-list{
                &-link{
                    font-size: 15px;
                    span{
                        font-size: 15px;
                    }
                }
            }
        }
    }
    @media (max-width:450px) {
        .danniy{
            h1{
                font-size: 20px;
                text-align: center;
            }
            &-list{
                &-link{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 15px;
                    font-size: 15px;
                    text-align: center;
                    span{
                        font-size: 15px;
                    }
                }
            }
        }
    }
    @media (max-width:350px) {
        .danniy{
            h1{
                font-size: 18px;
                text-align: center;
            }
            &-list{
                &-link{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 15px;
                    font-size: 15px;
                    text-align: center;
                    font-weight: 500;
                    span{
                        font-size: 15px;
                        font-weight: 500;
                    }
                }
            }
        }
    }
</style>
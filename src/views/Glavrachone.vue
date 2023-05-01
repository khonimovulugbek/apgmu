<template>
   <div class="container">
     <div class="vrach">
        <div class="vrach__info">
            <div class="vrach__info-name">
            <p class="vrach__info-name-text">{{orgins.post_ru }}</p>
        <h1>{{orgins.name_ru }}</h1>
        </div>
        <div class="vrach__info-img">
           <img :src="'http://127.0.0.1:8000' + orgins.photo" alt="">
        </div>
        </div>
      <p v-html="orgins.text_ru"></p>
    <p>Электронная почта: Email: <a href="mailto:ckdp1@apgmu.uz">ckdp1@apgmu.uz</a></p>
    
    
    
    </div>
   </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
      computed: {
        ...mapState(["orgins"]),
        },
}
</script>
<style lang="scss">
    .vrach {
        padding: 30px;
        margin: 50px 0;
        background: white;
        display: flex;
        flex-direction: column;
        gap: 20px;
        border-radius: 10px;
        &__info{
            display: flex;
            justify-content: space-between;
        &-name{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 auto;
            margin-top: 30px;
            &-text{
                font-family: Verdana, Geneva, sans-serif;
            }
        }
        &-img{
            
            img{
                border-radius: 10px;
                display: block;
                max-width: 230px;
            width: 100%;
                
            }
        }
        }
        p{
            font-size: 20px;
            text-align: justify;
            a{
                color: rgb(0, 34, 168);
            }
        }
        ul{
            display: flex;
            flex-direction: column;
            gap: 10px;
            li{
                font-size: 22px;
                color: grey;
                text-align: justify;
                a{
                    color: black;
                    font-size: 18px;
                    font-weight: 600;
                }
            }
        }
       
    }
    @media (max-width:1000px) {
        .vrach{
           &__info{
            
               &-name{
                   font-size: 18px;
                   
               }
               h1{
                text-align: center;
               }
           }
        }
    }
    @media (max-width:800px) {
        .vrach{
           &__info{
               &-name{
                   font-size: 16px;
                   
               }
              
               
           }
           p{
                font-size: 18px;
               }
               ul{
                li{
                    font-size: 20px;
                    a{
                        font-size: 16px;
                    }
                }
               }
        }
    }
    @media (max-width:600px) {
        .vrach{
           &__info{
               &-name{
                   font-size: 14px;
                   
               } h1{
                font-size: 20px;
                text-align: center;
               }
               
           }
           p{
                font-size: 16px;
               }
               ul{
                li{
                    font-size: 18px;
                    a{
                        font-size: 15px;
                    }
                }
               }
             
        }

        
         
    }
    @media (max-width:400px) {
        .vrach{
           &__info{
            gap: 10px;
               &-name{
                p{
                    font-size: 12px;
                }
                h1{
                font-size: 18px;
                text-align: center;
               }
                   
               }
               
                
               
           }
           p{
                font-size: 15px;
               }
               ul{
                li{
                    font-size: 17px;
                    a{
                        font-size: 14px;
                    }
                }
               }
        }
    }
    @media (max-width:350px) {
        .vrach{
           &__info{
            gap: 10px;
            flex-direction: column;
               &-name{
                h1{
                font-size: 18px;
                text-align: center;
                font-weight: 500;
               }
                   
               }
               
                
               
           }
           p{
                font-size: 14px;
               }
               ul{
                li{
                    font-size: 16px;
                    a{
                        font-size: 14px;
                        font-weight: 500;
                    }
                }
               }
        }
    }
   
</style>
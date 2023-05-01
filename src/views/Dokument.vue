<template>
   <div class="container">
    
    <div class="dokument">
    <h1>Документация</h1>
    <ul class="dokument-list" v-for="(doc,i) in document" :key="i">
        <li><a :href="doc.pdf_ru" download>{{doc.title_ru }}<span>PDF</span></a></li>
       
    </ul>
   </div>
   </div> 
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
    computed: {
        ...mapState(["document"]),
    },
}
</script>
<style lang="scss">
    .dokument {
        margin-top: 215px;
        background: grey;
        padding: 30px;
        margin-bottom: 30px;
        border-radius:  45px 10px;
        h1{
            color: #fff;
            text-align: center;
            text-shadow: 0 10px 3px black;
            
        }
        &-list{
            display: flex;
            flex-direction: column;
            gap: 30px;
            margin-top: 30px;
             img{
                    max-width: 800px;
                    width: 100%;
                    margin-left: auto;
                    margin-right: auto;
                    height: 100%;
                }
            li{
                padding: 10px 20px;
                font-size: 20px;
                line-height: 140%;
                border: 1px solid black;
                width: 100%;
                border-radius: 10px;
                font-weight: 600;
                font-family: Verdana, Geneva, sans-serif;
               
                a{
                    display: flex;
                    color: darkblue;
                justify-content: space-between;  
                }
                span{
                    color: white;
                    background: black;
                    font-size: 18px;
                    padding: 0 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 5px;
                }
            }
        }
    }
    @media (max-width:1000px) {
        .dokument{
            h1{
                font-size: 28px;
            }
            &-list{
                li{
                    font-size: 18px;
                }
            }
        }
    }
    @media (max-width:750px) {
        .dokument{
            h1{
                font-size: 25px;
            }
            &-list{
                li{
                    font-size: 16px;
                    span{
                        font-size: 16px;
                    }
                }
            }
        }
    }
    @media (max-width:550px) {
        .dokument{
            padding: 20px;
            h1{
                font-size: 22px;
            }
            &-list{
                li{
                    font-size: 15px;
                    span{
                        font-size: 15px;
                    }
                }
            }
        }
    }
    @media (max-width:450px) {
        .dokument{
            padding: 20px;
            h1{
                font-size: 20px;
            }
            &-list{
                li{
  
                    a{
                        display: flex;
                    flex-direction: column;
                    align-items: center;  
                    font-size: 15px;
                   
                   gap: 15px;
                   text-align: center;
                    }
                    span{
                        font-size: 15px;
                    }
                }
            }
        }
    }
</style>
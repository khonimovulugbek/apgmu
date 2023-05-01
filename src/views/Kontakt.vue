<template>
    <div class="kontakt">
       <div class="container">
         <h1>Контакты</h1>
       <div class="kontakt__info">
         <p class="kontakt__info-textone">
            Клинический санаторий “Кибрай”
            <a href="tel:+998-71-286-02-00" class="kontakt__info-textone-link">телефоны: +998-71-286-02-00, +998-71-286-01-46</a>
        </p>
        <p class="kontakt__info-texttwoo">
            Центральная клиническая больница №1
            <a href="tel:+998-71-264-05-11" class="kontakt__info-textone-link">телефоны: +998-71-264-05-11; +998-71-264-81-05</a>
        </p>
        <p class="kontakt__info-textthre">
           Центральная клиническая больница №2
            <a href="tel:+998-71-267-21-75" class="kontakt__info-textone-link">телефоны: +998-71-267-21-75; +998-71-268-77-3</a>
        </p>
        <p class="kontakt__info-textfor">
          <img src="../assets/imgs/clock.svg" alt="">
            Прием звонков: с 9:00 до 18:00 (Пн-Пт)
        </p>
       </div>
       </div>
       <iframe class="kontakt__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.2365223518236!2d69.28729678968604!3d41.30371793683387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef52ca08ae12d%3A0x4880fd001820103!2zNjUg0YPQu9C40YbQsCDQodCw0LTRi9C60LAg0JDQt9C40LzQvtCy0LAsINCi0LDRiNC60LXQvdGCIDEwMDA2MCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1677074998713!5m2!1sru!2s" width="90%" height="500px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .kontakt{
        margin: 50px 0;
        &__map{
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            border-radius: 10px;
            box-shadow: 0 20px 10px grey,

        }
        h1{
           padding: 15px 30px;
           color: red;
           font-size: 35px;
           text-shadow: 5px 10px 3px black;
           display: flex;
           justify-content: center;
           align-items: center;
           margin: 0 auto;
           background: grey;
           max-width: 250px;
           width: 100%;
           border-radius: 10px;
        }
        &__info{
            margin: 50px 0;
            display: flex;
            flex-direction: column;
            background: grey;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 20px 10px black;
            &-textone{
                display: flex;
                flex-direction: column;
                gap: 10px;
                font-size: 20px;
                font-weight: 600;
                &-link{
                    font-size: 18px;
                    font-weight: 500;
                    color: white
                }
            }
            &-texttwoo{
                display: flex;
                flex-direction: column;
                gap: 10px;
                font-size: 20px;
                font-weight: 600;
            }
            &-textthre{
                display: flex;
                flex-direction: column;
                gap: 10px;
                font-size: 20px;
                font-weight: 600;
            }
            &-textfor{
                display: flex;
                align-items: center;
                gap: 20px;
                font-size: 20px;
                font-weight: 500;
                margin-top: 15px;
                img{
                    width: 20px;
                    height: 20px;
                }
            }
        }
    }
    @media (max-width:1000px) {
        .kontakt{
            h1{
                font-size: 28px;
                padding: 10px 20px;
            }
            &__info{
                margin-top: 30px;
                &-textone{
                    font-size: 18px;
                    &-link{
                        font-size: 17px;
                    }
                }
                &-texttwoo,
                &-textthre,
                &-textfor{
                    font-size: 18px;
                }
            }
        }
    }
    @media (max-width:800px) {
        .kontakt{
            h1{
                font-size: 25px;
                padding: 5px 15px;
            }
            &__info{
                margin-left: auto;
                margin-right: auto;
                margin-top: 30px;
                &-textone{
                    font-size: 17px;
                    &-link{
                        font-size: 16px;
                    }
                }
                &-texttwoo,
                &-textthre,
                &-textfor{
                    font-size: 17px;
                }
            }
        }
    }
    @media (max-width:500px) {
        .kontakt{
            h1{
                font-size: 22px;
                padding: 5px 15px;
                width: 180px;
            }
            &__info{
                margin-left: auto;
                margin-right: auto;
                margin-top: 30px;
                &-textone{
                    font-size: 16px;
                    &-link{
                        font-size: 15px;
                    }
                }
                &-texttwoo,
                &-textthre,
                &-textfor{
                    font-size: 16px;
                }
            }
        }
    }
    @media (max-width:450px) {
        .kontakt{
            h1{
                font-size: 22px;
                padding: 5px 15px;
                width: 180px;
            }
            &__info{
                margin-left: auto;
                margin-right: auto;
                margin-top: 30px;
                &-textone{
                    font-size: 16px;
                    
                    &-link{
                        font-size: 15px;
                        max-width: 250px;
                        width: 100%;
                    }
                }
                &-texttwoo,
                &-textthre,
                &-textfor{
                    font-size: 15px;
                    
                }
                &-textfor{
                    max-width: 250px;
                        width: 100%;
                        text-align: center;
                }
            }
        }
    }
    @media (max-width:400px) {
        .kontakt{
            h1{
                font-size: 20px;
                padding: 5px 15px;
                width: 150px;
            }
            &__info{
                margin-left: auto;
                margin-right: auto;
                margin-top: 30px;
                &-textone{
                    font-size: 16px;
                    
                    &-link{
                        font-size: 15px;
                        max-width: 250px;
                        width: 100%;
                    }
                }
                &-texttwoo,
                &-textthre,
                &-textfor{
                    font-size: 15px;
                    max-width: 250px;
                        width: 100%;
                    
                }
                &-textfor{
                    max-width: 250px;
                        width: 100%;
                        text-align: center;
                }
            }
        }
    }
    @media (max-width:350px) {
        .kontakt{
            h1{
                font-size: 18px;
                padding: 5px 15px;
                width: 150px;
            }
            &__info{
                margin-left: auto;
                margin-right: auto;
                margin-top: 30px;
                &-textone{
                    font-size: 15px;
                    
                    &-link{
                        font-size: 14px;
                        max-width: 220px;
                        width: 100%;
                    }
                }
                &-texttwoo,
                &-textthre,
                &-textfor{
                    font-size: 14px;
                    max-width: 250px;
                        width: 100%;
                    
                }
                &-textfor{
                    max-width: 250px;
                        width: 100%;
                        text-align: center;
                }
            }
        }
    }
    @media (max-width:290px) {
        .kontakt{
            h1{
                font-size: 18px;
                padding: 5px 15px;
                width: 150px;
            }
            &__info{
                margin-left: auto;
                margin-right: auto;
                margin-top: 30px;
                &-textone{
                    font-size: 15px;
                    
                    &-link{
                        font-size: 13px;
                        max-width: 200px;
                        width: 100%;
                    }
                }
                &-texttwoo,
                &-textthre,
                &-textfor{
                    font-size: 14px;
                    max-width: 250px;
                        width: 100%;
                    
                }
                &-textfor{
                    max-width: 250px;
                        width: 100%;
                        text-align: center;
                }
            }
        }
    }
</style>
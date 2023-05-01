<template>
   <div class="container">
     <div class="twoo">
    <h1>Уважаемая Галина Ивановна!</h1>
    <img class="twoo__imgone" src="../assets/imgs/gullar_tkun.jpg" alt="" />
    <img class="twoo__imgtwoo" src="../assets/imgs/cadr15.jpg" alt="" />
    <h2 class="twoo-title">Уважаемая Галина Ивановна!</h2>
    <p>
      В этот день коллектив Главного медицинского управления горячо и сердечно
      поздравляет Вас с юбилеем 75 ти летием.
    </p>
    <p>
      Работать с вами комфортно и приятно, так пусть и вам трудовые будни
      приносят удовлетворение в работе и реализацию всего задуманного. Вы -
      неиссякаемый источник энергии и жизнелюбия, желаем вам здоровья и новых
      идей.
    </p>
    <p>
      От всей души примите нашу благодарность за добросовестный труд и самые
      теплые пожелания крепкого здоровья, долгих лет жизни, благополучия и
      счастья.
    </p>
    <p>Начальник Главного медицинского управления А.А.Худаяров</p>
  </div>
  <div class="twoo-bottom">
    <h1>Клиник конференция!</h1>
    <img src="../assets/imgs/doctor.jpg" alt="" />
    <p class="twoo-bottom-textt">
      Ўзбекистон Республикаси Президенти Администрацияси ҳузуридаги Тиббиёт бош
      бошқармаси
    </p>
    <p class="twoo-bottom-textt">“Қибрай” клиник санаторийси</p>
    <p class="twoo-bottom-textt">
      Тиббиёт бош бошқармаси ҳузуридаги тиббиёт муассасалари шифокорлари учун
      мўлжалланган
    </p>
    <p class="twoo-bottom-textt">К Л И Н И К К О Н Ф Е Р Е Н Ц И Я</p>
    <p class="twoo-bottom-textt">Ўтказилиш манзили: “Қибрай клиник санаторийси</p>
    <p class="twoo-bottom-textt">Ўтказилиш санаси: 2022 йил 31 март соат 13.00</p>
    
  </div>
  <div class="twoo-bottom__footer">
                <router-link class="new__footer-li" to="/yangiliklarone">1</router-link>
                <router-link class="new__footer-li" to="/yangiliklartwoo">2</router-link>
                <router-link class="new__footer-li" to="/yangiliklarthre">3</router-link>
                <router-link class="new__footer-li" to="/yangiliklarfor">4</router-link>
        </div>
  </div>
  
</template>
<script>
export default {};
</script>
<style lang="scss">
.twoo {
  margin-top: 50px;
  border: 1px solid black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  &-text {
    text-align: right;
  }
  h1 {
    font-size: 25px;
    color: rgb(14, 14, 113);
  }
  h2 {
    font-size: 20px;
    color: darkblue;
    text-align: center;
  }
  p {
    font-size: 18px;
    font-weight: 600;
    color: darkblue;
  }
  &__imgone {
    max-width: 180px;
    width: 100%;
    height: 140px;
    border-radius: 10px;
  }
  &__imgtwoo {
    max-width: 430px;
    width: 100%;
    max-height: 640px;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
  }
}
.twoo-bottom {
  border: 1px solid black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
  &__footer{
    margin-top: 20px;
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
  &-text {
    text-align: end;
  }
  h1 {
    font-size: 25px;
    color: rgb(14, 14, 113);
  }
  p{
    color: darkblue;
                font-weight: 600;
  }
  img {
    width: 180px;
    height: 120px;
    border-radius: 10px;
  }
  &-textt{
    text-align: center;
    font-size: 20px;
    margin-top: 30px;
    color: darkblue;
    font-weight: 600;
  }
}
@media (max-width:850px) {
  .twoo{
    h1{
      font-size: 22px;
    }
    h2{
      font-size: 18px;
    }
    p{
      font-size: 17px;
      text-align: justify;
    }
  }
  .twoo-bottom{
    h1{
      font-size: 22px;
    }
    &-textt{
      font-size: 18px;
    }
  }
}
@media (max-width:700px) {
  .twoo{
    flex-direction: column-reverse;
    align-items: center;
    h1{
      font-size: 22px;
    }
    h2{
      font-size: 18px;
    }
    p{
      font-size: 17px;
    }
  }
}
@media (max-width:600px) {
  .twoo-bottom{
    flex-direction: column-reverse;
    align-items: center;
    gap: 10px;
    h1{
      font-size: 20px;
    }
    &-textt{
      font-size: 17px;
      margin-top: 10px;
    }
  }
}
@media (max-width:550px) {
  .twoo{
    flex-direction: column-reverse;
    align-items: center;
    h1{
      font-size: 20px;
    }
    h2{
      font-size: 17px;
    }
    p{
      font-size: 16px;
    }
  }
}
@media (max-width:450px) {
  .twoo-bottom{
    flex-direction: column-reverse;
    align-items: center;
    gap: 10px;
    h1{
      font-size: 18px;
    }
    &-textt{
      font-size: 15px;
      margin-top: 10px;
    }
  }
}
@media (max-width:400px) {
  .twoo{
    flex-direction: column-reverse;
    align-items: center;
    h1{
      font-size: 19px;
    }
    h2{
      font-size: 16px;
    }
    p{
      font-size: 15px;
    }
  }
}
@media (max-width:350px) {
  .twoo{
    flex-direction: column-reverse;
    align-items: center;
    h1{
      font-size: 19px;
      font-weight: 500;
      text-align: center;
    }
    h2{
      font-size: 16px;
      font-weight: 500;
    }
    p{
      font-size: 15px;
      font-weight: 500;
    }
  }
  .twoo-bottom{
    flex-direction: column-reverse;
    align-items: center;
    gap: 10px;
    h1{
      font-size: 18px;
    }
    &-textt{
      font-size: 14px;
      margin-top: 10px;
    }
  }
}
</style>

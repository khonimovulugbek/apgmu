<template>
   <div class="container">
      <div class="about">
         <div class="about__left">
            <div class="about__left-top">

               <div class="about__left-nav">
                  <button @click="grid = !grid">
                     <img v-if="grid" src="../assets/imgs/list.svg" alt="">
                     <img v-else src="../assets/imgs/grid.svg" alt="">
                     <span v-if="grid">Ro'yxat</span>
                     <span v-else>Setka</span>
                  </button>
               </div>
            </div>


            <div class="about__left-cards" :class="{ setka: grid, list: !grid }">
               <div class="about__left-cards-card" v-for="(user, index) in users" :key="user.id">
                  <img :src="'http://127.0.0.1:8000'+user.photo" alt="">
                  <div class="about__left-cards-card-info">
                     <h2>{{ user.post_ru }}</h2>
                     <h1>{{ user.name_ru }}</h1>
                     <ul class="about__left-cards-card-info-list">
                        <li><a href="tel:+998 555 03 03 00">
                              <img src="../assets/imgs/phone.svg" alt="">
                              {{ user.contact }}

                           </a></li>
                        <li><a href="tel:+998712334814">
                              <img src="../assets/imgs/terminal.png" alt="">
                              {{ user.work_contact }}
                           </a></li>
                        <li>
                           <img src="../assets/imgs/clock.svg" alt="">
                           {{ user.work_time_ru }}
                        </li>
                     </ul>
                  </div>
               </div>

            </div>
         </div>
      </div>
   </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
   data() {
      return {
         grid: false,
         poisk: true,
         search: false,
         back: false,
         searchVal: "",
         images: []
      };
   },
   computed: {
      ...mapState(["users"]),
      notesFilter() {
         let search = this.searchVal
         if (!search) return array;
         search = search.trim().toLowerCase();
         let array = array.filter(note => {
            if (note.title.toLowerCase().indexOf(search) != -1) return note;

         })
         return array

      },


   },
   methods: {
      ...mapMutations(["filterUsers"]),
      usersPhoto(users) {
         return users.map(user => user.photo && `@/assets${user.photo}`)
      }
   },
   watch: {
      searchVal(val) {
         this.filterUsers(val)
      },
      users() {

      }
   },
}

</script>
<style lang="scss">
.girl {
   display: flex;
   justify-content: space-between;
   gap: 100px;
}

.about {
   margin-top: 30px;

   &__left {
      &-top {
         display: flex;
         align-items: center;

         input {
            padding: 5px 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid grey;
            border-radius: 10px;
            background: unset;
            color: red;
            font-weight: 600;
         }
      }

      &-nav {
         display: flex;
         align-items: center;
         background: grey;
         max-width: 200px;
         width: 100%;
         padding: 20px;
         border-radius: 10px 45px;
         margin-left: auto;

         button {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            gap: 10px;

            span {
               font-size: 18px;
               font-weight: 600;
               color: white;
            }

            img {
               max-width: 25px;
               width: 100%;
               max-height: 25px;
               height: 100%;
            }
         }
      }

      &-cards {
         margin-top: 20px;
         margin-bottom: 30px;
         display: flex;
         flex-direction: column;
         gap: 30px;
         width: 100%;
         height: 100%;
         flex-wrap: wrap;

         &-card {
            padding: 20px;
            display: flex;
            gap: 30px;
            align-items: center;
            background: white;
            border-radius: 0px 30px 0px 30px;

            width: 100%;

            &:hover {
               box-shadow: 0 20px 10px 0 rgba(128, 128, 128, 0.471);
               transition: 0.5s;
            }

            img {
               max-width: 160px;
               width: 100%;
               height: 170px;
               border-radius: 5px;
            }

            &-info {
               display: flex;
               flex-direction: column;
               gap: 30px;

               h1 {
                  font-size: 28px;
                  text-align: center;
                  color: navy;
               }

               h2 {
                  font-size: 20px;

               }

               &-list {
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  gap: 30px;

                  li {
                     display: flex;
                     align-items: center;
                     gap: 10px;
                     font-size: 18px;
                     font-weight: 600;

                     img {
                        width: 30px;
                        height: 30px;
                     }

                     a {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        color: black;
                        font-size: 18px;
                        font-weight: 600;

                        img {
                           width: 30px;
                           height: 30px;
                        }
                     }
                  }
               }
            }
         }
      }
   }
}

@media (max-width:1150px) {
   .about {
      &__left {
         &-cards {
            &-card {
               &-info {
                  h1 {
                     font-size: 25px;
                  }

                  h2 {
                     font-size: 18px;
                  }

                  &-list {
                     li {
                        font-size: 15px;

                        img {
                           width: 25px;
                           height: 25px;
                        }

                        a {
                           img {
                              width: 25px;
                              height: 25px;
                           }
                        }
                     }
                  }
               }
            }
         }
      }
   }
}

@media (max-width:1070px) {
   .about {
      &__left {
         &-cards {
            &-card {
               &-info {
                  h1 {
                     font-size: 25px;
                  }

                  h2 {
                     font-size: 18px;
                  }

                  &-list {
                     li {
                        font-size: 16px;

                        img {
                           width: 22px;
                           height: 22px;
                        }

                        a {
                           font-size: 16px;

                           img {
                              width: 22px;
                              height: 22px;
                           }
                        }
                     }
                  }
               }
            }
         }
      }
   }
}

@media (max-width:1000px) {
   .about {
      &__left {
         &-nav {
            padding: 15px;

            button {}
         }

         &-cards {
            &-card {
               &-info {
                  h1 {
                     font-size: 25px;
                  }

                  h2 {
                     font-size: 18px;
                  }

                  &-list {
                     flex-direction: column;
                     gap: 20px;

                     li {
                        font-size: 16px;

                        img {
                           width: 22px;
                           height: 22px;
                        }

                        a {
                           font-size: 16px;

                           img {
                              width: 22px;
                              height: 22px;
                           }
                        }
                     }
                  }
               }
            }
         }
      }
   }
}

@media (max-width:700px) {
   .about {
      &__left {
         &-cards {
            &-card {
               &-info {
                  h1 {
                     font-size: 22px;
                  }

                  h2 {
                     font-size: 16px;
                     text-align: justify;
                  }

                  &-list {
                     flex-direction: column;
                     gap: 20px;

                     li {
                        font-size: 16px;

                        img {
                           width: 22px;
                           height: 22px;
                        }

                        a {
                           font-size: 16px;

                           img {
                              width: 22px;
                              height: 22px;
                           }
                        }
                     }
                  }
               }
            }
         }
      }
   }
}

@media (max-width:500px) {
   .about {
      &__left {
         &-nav {
            max-width: 150px;
            width: 100%;
            max-height: 35px;
            padding: 15px;
            margin-left: auto;

            button {
               span {
                  font-size: 15px;
               }
            }
         }

         &-cards {
            &-card {
               flex-direction: column;

               &-info {
                  h1 {
                     font-size: 20px;
                  }

                  h2 {
                     font-size: 15px;
                     text-align: justify;
                  }

                  &-list {
                     flex-direction: column;
                     gap: 20px;

                     li {
                        font-size: 15px;

                        img {
                           width: 20px;
                           height: 20px;
                        }

                        a {
                           font-size: 15px;

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
      }
   }
}

@media (max-width:400px) {
   .about {
      &__left {
         &-top {
            input {
               padding: 2px 5px;
               font-weight: 500;
            }
         }

         &-nav {
            display: none;
         }
      }
   }
}
</style>
<template>
    <div class="malumot">
        <div class="malumot__nav">
            <h1>О нас</h1>

        </div>
        <div class="container">
            <div class="malumot__main">

                <p v-html="infos[0]?.text_ru" class="malumot__main-textone"></p>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    data() {
        return {
        };
    },
    computed: {
        ...mapState(["infos"]),
    },
    methods: {
        ...mapActions(['getInfo'])
    },
    watch: {
        infos() {
            console.log(this.infos);
        }
    }
}

</script>
<style lang="scss">
.malumot {
    margin-bottom: 30px;
    margin-top: 50px;

    &__nav {
        background: aqua;
        border-radius: 10px;
        width: 100%;
        height: 100px;
        display: flex;
        flex-direction: column;
        padding: 30px;

        h1 {
            text-align: center;
            box-shadow: 0 15px 10px 0 grey;
            border-radius: 10px;
        }
    }

    &__main {
        padding: 0 30px;
        margin-top: 50px;

        &-textone {
            margin-bottom: 30px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            font-size: 25px;
            font-weight: 600;
            text-align: justify;
            color: midnightblue;

        }

        &-texttwo {
            text-align: justify;
            color: midnightblue;
            display: flex;
            flex-direction: column;
            margin-top: 10px;
            gap: 10px;
            font-size: 18px;

            span {
                font-size: 20px;
                color: black;
                font-weight: 600;
            }
        }

        &-textthre {
            text-align: justify;
            color: midnightblue;
            display: flex;
            flex-direction: column;
            margin-top: 10px;
            font-size: 18px;
            font-weight: 600;
        }
    }
}

@media (max-width:700px) {
    .malumot {
        &__nav {
            h1 {
                font-size: 28px;
            }
        }
    }
}

@media (max-width:500px) {
    .malumot {
        &__nav {
            height: 80px;

            h1 {
                font-size: 25px;
            }
        }

        &__main {
            margin-top: 20px;

            &-textone {
                font-size: 16px;
            }

            &-texttwo {
                font-size: 17px;

                span {
                    font-size: 18px;
                }
            }

            &-textthre {
                font-size: 16px;
            }
        }
    }
}

@media (max-width:400px) {
    .malumot {
        &__nav {
            padding: 15px;
            height: 60px;

            h1 {
                font-size: 22px;
            }
        }

        &__main {
            margin-top: 30px;

            &-textone {
                font-size: 16px;
                text-align: start;
            }

            &-texttwo {
                font-size: 16px;
                text-align: start;

                span {
                    font-size: 17px;
                }
            }

            &-textthre {
                font-size: 15px;
                text-align: start;
            }
        }
    }
}
</style>
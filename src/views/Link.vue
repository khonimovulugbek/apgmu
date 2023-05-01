<template>
    <div class="link">
        <ul >
            <li><a href="https://uzbekistan-kmv.ru/" class="link__a">Санаторий Узбекистан в г. Кисловодск</a></li>
            <li><a href="https://yalta-uzbekistan.ru/" class="link__a">Санаторий Узбекистан в г. Ялта</a></li>

        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            icon: true
        };
    },
}
</script>
<style lang="scss">
.home {
    position: relative;
}


.link {
    z-index: 99;

    ul {

        background: white;
        border: 2px solid darkblue;
        max-width: 350px;
        padding: 20px;
        border-radius: 10px;
        position: fixed;
        display: flex;
        flex-direction: column;
        gap: 10px;
        right: 20px;
        bottom: 50px;
        box-shadow: 0 0 50px 5px rgba(26, 26, 36, 0.533);
        transition: 0.5s;
        animation: mm 2s linear infinite;

        &:hover {
            transform: scale(1.1);
        }
        &:active {
            display: block;
        }
  

        li {
            a {
                padding: 0 5px;
                border-radius: 5px;
                color: black;
                font-weight: 600;
                box-shadow: 0 8px 10px black;
                animation: muzaffar 2s linear infinite;
                transition: 0.5s;

                @keyframes muzaffar {
                    to {
                        color: blue;

                    }
                }
            }
        }
    }
}

@media (max-width:500px) {


    .link {

        ul {

            li {
                a {
                    font-size: 15px;
                    font-weight: 500;
                }
            }
        }
    }
}

@media (max-width:350px) {
    .link {
        ul {
            li {
                a {
                    font-size: 11px;
                    font-weight: 500;
                }
            }
        }
    }
}</style>
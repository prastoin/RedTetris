<template>
    <div class="root">
        <input autofocus @keydown.left="goLeft()" @keydown.right="goRight()" @keydown.up="incrRota()" class="eventCatch">
        <div class="arena">
            <div class="container">
                <div class="matriceContainer">
                    <div class="matrice">
                    <TetriDisplay :currTetri="currTetri" :currRota="currRota" :tetrimino="tetrimino"/>
                        <div 
                            v-for=" y in 25"
                            :key="y"
                            :id="y"
                            class="matriceLine"
                            :style="y <= 3 ? 'visibility: hidden;': 'visibility: visible;'">
                                <div
                                v-for="x in 10"
                                :key="x"
                                :id="'[' + y + ']' + '[' + x + ']'"
                                class="cell"
                                >
                                </div>
                        </div>
                    </div>
                </div>
                <div class="infos">
                    <span>Score: {{ score }}</span>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
import TetriDisplay from "./dev.vue";
import { tetrimino, board } from "../data.js";
export default {
    name: 'game',
    data () {
        return {
            currTetri: Math.floor(Math.random() * Math.floor(7)),
            currRota: Math.floor(Math.random() * Math.floor(4)),
            tetrimino,
            score: 0,
            board,
            }
    },
    components : {
        TetriDisplay,
    },
    methods: {
        incrRota ()
        {
            this.currRota++;
            this.currRota = (this.currRota === 4 ? 0 : this.currRota);
        },
        initBoard(y, x) {
            console.log(y, x);
            this.board[y][x] = document.getElementById('[' + y + ']' + '[' + x + ']');
        },
    },
}
</script>

<style lang="stylus" scoped>
.root{
    width: 100%;
    height: 100%;
    position: relative;
}

.eventCatch {
    visibility: visible;
    width: 200vw;
    height: 200vh;
    position: absolute;
    top: -10vh; 
    left: -10vw;
}

.arena {
    width: 400px;
    height: 1120px;
    background: grey;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -30%);
    .container {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        .matriceContainer {
            height: 1000px;
            width: 100%;
            position: relative;
            .matrice{
                .matriceLine {
                display:flex;
                    .cell {
                        border: solid 1px black;
                        width: 40px;
                        height: 40px;
                        opacity: 0.1;
                        background: yellow;
                    }
                }
            }
        }
        .infos {
            height: 120px;
            width: 100%;
            position: relative;
            text-align: left;
        }
    }
}

</style>
<template>
    <div class="root">
        <input autofocus @keydown.left="goLeft()" @keydown.right="goRight()" @keydown.up="incrRota()" class="eventCatch">
        <div class="arena">
            <div class="container">
                <div class="matriceContainer">
                    <div class="matrice">
                        <div 
                            v-for=" (colunm, y) in 26"
                            :key="y"
                            :id="y"
                            class="matriceLine"
                            :style="y <= 3 ? 'visibility: visible;': 'visibility: visible;'">
                                <div
                                v-for="(cell, x) in 10"
                                :key="x"
                                :id="'[' + y + ']' + '[' + x + ']'"
                                class="cell"
                                :style="`background:` + (board[y][x] === 0 ? 'white' : 'red')"
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
import { tetrimino, board, currTetri } from "../data.js";

export default {
    name: 'game',
    data () {
        return {
            tetrimino,
            score: 0,
            board,
            currTetri,
            }
    },
    components : {
    },
    methods: {
        init() {
            let continu = true;
            console.log('in');
            while (continu)
            {
//                let playing = true;
                if (this.currTetri.n < 0)
                    this.pickPrint();
                continu = false;
            }
        },
        pickPrint () {
            this.currTetri.n = this.getRandomInt(7);
            this.currTetri.y = 0;
            do {
            this.currTetri.rota= this.getRandomInt(4);
            this.currTetri.x = this.getRandomInt(10);
            console.log(this.currTetri);
            } while ((this.draw(this.currTetri)) === false)
        },
        draw(currTetri) {
            console.log(currTetri);
            for (let y = 0; y < 4; y++)
            {
                for (let x = 0; x < 4; x++)
                {
                    if ((this.valid((y + currTetri.y), (x + currTetri.x))) === false)
                    {
                        this.clearTopBoard();
                        return (false);
                    }
                    this.board[y + currTetri.y][x + currTetri.x] = this.tetrimino[currTetri.n].coord[currTetri.rota][y][x];
                }
            }
        },
        valid(y, x) {
            if (y < 0 || y >= 22 || x < 0 || x >= 10)
                return (false);
            console.log(`VALID ${y} ${x}`)
            return (true);
        },
        clearTopBoard() {
            for(let y = 0; y < 4; y++)
                for(let x = 0; x < 10; x++)
                    this.board[y][x] = 0;
        },
        incrRota() {
            this.currRota++;
            this.currRota = (this.currRota === 4 ? 0 : this.currRota);
        },
        getRandomInt(max) {
            return (Math.floor(Math.random() * Math.floor(max)));
        }
    },
    mounted () {
        this.init()
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
    width: 110%;
    height: 110%;
    position: absolute;
    top: -10%; 
    left: -10%;
    min-height: calc(1230px);
}

.arena {
    margin-top: 16px;
    width: 400px;
    height: 1120px;
    background: grey;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
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
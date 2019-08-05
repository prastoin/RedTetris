<template>
    <div class="root">
        <input autofocus @click="goTo(1, 0)" @keydown.down="goTo(0, 1)" @keydown.left="goTo(-1, 0)" @keydown.right="goTo(1, 0)" @keydown.up="incrRota()" class="eventCatch">
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
            console.log('init\n');
            if (this.currTetri.n < 0)
                this.pickPrint();
        },
        pickPrint () {
            this.currTetri.n = this.getRandomInt(7);
            this.currTetri.y = 0;
            do {
            this.currTetri.rota= this.getRandomInt(4);
            this.currTetri.x = this.getRandomInt(10);
            } while ((this.draw(this.currTetri)) === false)
        },
        draw(currTetri) {
            if (this.moveAble(0, 0, this.currTetri) === false)
                return (false);
            for (let y = 0; y < 4; y++)
                for (let x = 0; x < 4; x++)
                    this.$set(this.board[y + currTetri.y], x + currTetri.x, this.tetrimino[currTetri.n].coord[currTetri.rota][y][x]);
            return (true);
        },
        goTo (valueX, valueY) {
            console.log(`goTo = ` + valueX + valueY);
            if (this.moveAble(valueX, valueY, this.currTetri))
            {
                this.clear4x4(this.currTetri.y, this.currTetri.x);
                if (valueY != 0)
                    this.currTetri.y += valueY;
                else
                    this.currTetri.x += valueX;
                this.draw(this.currTetri);
            }
        },
        moveAble (valueX, valueY, currTetri) {
            for (let y = 0; y < 4; y++)
                for (let x = 0; x < 4; x++)
                    if (this.tetrimino[currTetri.n].coord[currTetri.rota][y][x] === 1)
                        if (this.valid(y + currTetri.y + valueY, currTetri.x + valueX + x) === false)
                            return (false);
            return (true);
        },
        valid(y, x) {
            if (y < 0 || y >= 22 + 4 || x < 0 || x >= 10)
                return (false);
            return (true);
        },
        clear4x4(y, x) {
            for(let j = 0; j < 4; j++)
                for(let i = 0; i < 4; i++)
                    this.board[j + y][i + x] = this.board[j + y][i + x] != 2 ? 0 : this.board[j + y][i + x];
        },
        incrRota() {
            let save = this.currTetri.rota;
            this.currTetri.rota++;
            this.currTetri.rota = (this.currTetri.rota === 4 ? 0 : this.currTetri.rota);
            if (this.moveAble(0, 0, this.currTetri) === false)
            {
                this.currTetri.rota = save;
                return (false);
            }
            this.clear4x4(this.currTetri.y, this.currTetri.x);
            this.draw(this.currTetri);
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
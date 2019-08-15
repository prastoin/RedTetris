<template>
    <div class="root">
        <div class="arena">
            <div class="container">
                <div class="matriceContainer">
                    <div class="matrice">
                        <div 
                            v-for=" (colunm, y) in 22"
                            :key="y"
                            :id="y"
                            class="matriceLine"
                            :style="y <= 3 ? 'visibility: visible;': 'visibility: visible;'">
                                <div
                                v-for="(cell, x) in 10"
                                :key="x"
                                :id="'[' + y + ']' + '[' + x + ']'"
                                class="cell"
                                :style="`background:` + cellColor(y, x)"
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
            intervalID: null,
            }
    },
    components : {
    },
    methods: {
        init() {
            if (this.currTetri.n < 0)
                this.pickPrint();
            this.intervalID = window.setInterval(() => this.goTo(0, 1), 500);
            document.addEventListener('keydown', this.onKey);
        },
        onKey({ key }) {
            if (!this.currTetri.playing)
                return ;
            if (key === 'ArrowDown')
                this.goTo(0, 1);
            else if (key === 'ArrowUp')
                this.incrRota();
            else if (key === 'ArrowRight')
                this.goTo(1, 0);
            else if (key === 'ArrowLeft')
                this.goTo(-1, 0);
            console.log(event);
        },
        pickPrint () {
     //       console.log('pickprint' )
            if (currTetri.playing === true)
            {
                this.currTetri.n = this.getRandomInt(7);
                this.currTetri.y = 0;
                do {
                this.currTetri.rota= this.getRandomInt(4);
                this.currTetri.x = this.getRandomInt(10);
                } while ((this.moveAble(0, 0, this.currTetri)) === false)
                this.draw(this.currTetri);
            }
        },
        draw(currTetri) {
      //      console.log('draw');
            for (let y = 0; y < 4; y++)
                for (let x = 0; x < 4; x++)
                    if (this.board[currTetri.y + y][currTetri.x + x] != 2 && this.tetrimino[currTetri.n].coord[currTetri.rota][y][x] === 1)
                        this.$set(this.board[y + currTetri.y], x + currTetri.x, this.tetrimino[currTetri.n].coord[currTetri.rota][y][x]);
            return (true);
        },
        goTo (valueX, valueY) {
       //     console.log(`goTo = ` + valueX + valueY);
            if (this.currTetri.playing === false)
            {
                clearInterval(this.intervalID);
                console.log('loose');
            }
            if (this.moveAble(valueX, valueY, this.currTetri) === true)
            {
                this.clear4x4(this.currTetri.y, this.currTetri.x, 0); //1 to 0
                if (valueY != 0)
                    this.currTetri.y += valueY;
                else
                    this.currTetri.x += valueX;
                this.draw(this.currTetri);
            }
        },
        moveAble (valueX, valueY, currTetri) {
          //  console.log('moveable');
            for (let y = 0; y < 4; y++)
                for (let x = 0; x < 4; x++)
                    if (this.tetrimino[currTetri.n].coord[currTetri.rota][y][x] === 1)
                        if ((this.valid(y + currTetri.y + valueY, currTetri.x + valueX + x, valueX)) === false)
                             return (false);
            return (true);
        },
        valid(y, x, valueX) {
            if (x < 0 || x >= 10)
                return (false);
            if (y < 0 || y >= 22 + 4 || this.board[y][x] === 2)
            {
                if (valueX != 0 || this.currTetri.inRota === true) 
                    return (false);
                if (currTetri.y >= 0 && currTetri.y <= 3)
                {
                    this.currTetri.playing = false;
                    return (false);
                }
                this.blockTetri(this.currTetri);
                this.pickPrint();
                return (false);
            }
            return (true);
        },
        blockTetri (currTetri) {
//            console.log('blocktetri');
            this.clear4x4(currTetri.y, currTetri.x, 2); // 1 to 2
            this.fullLine(currTetri);//checking full line on 4y
        },
        fullLine(currTetri){
//            console.log('fullLINE');
            for (let y = 0; y < 4; y++)
                for (let x = 0; x < 10 && y < 26 && (this.board[y + currTetri.y][x] === 2); x++)
                    if (x === 9 )
                    {
 //                       console.log('deleting', y);
                        this.board[y + currTetri.y].forEach((x, index) => {
                            this.$set(this.board[y + currTetri.y], index, 0);
                        });
//                        debugger;
                        this.fall(y + currTetri.y);
                    }
        },
        fall(y){
   //         console.log(y);
     //       console.log(this.board);
//            debugger;
            while (y >= 4)
            {
                for(let x = 0; x < 10; x++)
                    this.swapUpper(y, x);
                y--;
            }
        },
        swapUpper(y, x){
            let tmp = this.board[y][x];
            this.$set(this.board[y], x, this.board[y - 1][x]);
            this.$set(this.board[y - 1], x, tmp);
        },
        clear4x4(y, x, value) {
            for(let j = 0; j < 4; j++)
                for(let i = 0; i < 4; i++)
                    if (this.board[j + y][i + x] === 1)
                        this.$set(this.board[j + y], i + x, value);
        },
        incrRota() {
       //     console.log('incrRota');
            let save = this.currTetri.rota;
            this.currTetri.rota++;
            this.currTetri.rota = (this.currTetri.rota === 4 ? 0 : this.currTetri.rota);
            this.currTetri.inRota = true;
            if (this.moveAble(0, 0, this.currTetri) === false)
            {
                this.currTetri.rota = save;
                this.currTetri.inRota = false;
                return (false);
            }
            this.currTetri.inRota = false;
            this.clear4x4(this.currTetri.y, this.currTetri.x, 0); // 1 to 0
            this.draw(this.currTetri);
        },
        getRandomInt(max) {
            return (Math.floor(Math.random() * Math.floor(max)));
        },
        cellColor(y, x)
        {
            if (this.board[y + 4][x] === 1)
                return ('red;');
            else if (this.board[y + 4][x] === 2)
                return ('blue;')
            else
                return ('white;')
        }
    },
    mounted () {
        this.init()
    },
    destroyed() {
        document.removeEventListener('keypress', this.onKey);
    }
}
</script>

<style lang="stylus" scoped>
.root{
    margin: 0 auto;
}

.eventCatch {
    visibility: visible;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    border: none;

    &:focus {
       outline: none;
    }
}

.arena {
    height: 100vh;
    background: grey;
    .container {
        display: flex;
        flex-direction: column;
        .matriceContainer {
            .matrice{
                .matriceLine {
                    display:flex;
                    .cell {
                        border: solid 1px black;
                        width: calc(100vw / 10)
                        height: calc((100vh / 25))
                        opacity: 0.1;
                        background: yellow;
                    }
                }
            }
        }
        .infos {
            position: relative;
            text-align: left;
        }
    }
}

@media screen and (min-width: 400px) and (min-height: 1000px) {
    .arena {
        width: 400px;
        height: 1000px;
    }

    .cell {
        width: 40px !important;
        height: 40px !important;
    }

    .infos {
        height: 120px;
    }
}
</style>

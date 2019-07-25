<template>
    <div class="root" @click="incrRota(1)">
        <p style="font-size: 3rem">| DEV |</p>
        <div class="container">
            <div class="tetrimino">
                <div
                v-for="y in matriceSize"
                :key="y"
                style="display: flex; flex-direction: colunm;">
                    <div
                    v-for="x in matriceSize"
                    :key="x"
                    class="cell"
                    :style="isCell(y - 1, x - 1) === true ? 'background: yellow;' : ''"
                    >
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>

const tetrimino = [
    {
        name: 'I',
        coord: [
            [
                [0, 0, 0, 0],
                [1, 1, 1, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],
            [
                [0, 0, 1, 0],
                [0, 0, 1, 0],
                [0, 0, 1, 0],
                [0, 0, 1, 0]
            ],
            [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [1, 1, 1, 1],
                [0, 0, 0, 0]
            ],
            [
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0]
            ]
        ]
    },
    {
        name: 'O',
        coord: [
            [
                [0, 1, 1, 0],
                [0, 1, 1, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],
            [
                [0, 1, 1, 0],
                [0, 1, 1, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],
            [
                [0, 1, 1, 0],
                [0, 1, 1, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],
            [
                [0, 1, 1, 0],
                [0, 1, 1, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ]
        ]
    },
    {
        name: 'T',
        coord: [
            [
                [1, 1, 1],
                [0, 1, 0],
                [0, 0, 0]
            ],
            [
                [0, 1, 0],
                [1, 1, 1],
                [0, 0, 0]
            ],
            [
                [0, 1, 0],
                [1, 1, 0],
                [0, 1, 0]
            ],
            [   
                [0, 1, 0],
                [0, 1, 1],
                [0, 1, 0]
            ],
        ]
    },
    {
        name: 'L',
        coord: [
            [
                [0, 0, 1],
                [1, 1, 1],
                [0, 0, 0]
            ],
            [
                [0, 1, 0],
                [0, 1, 0],
                [0, 1, 1]
            ],
            [
                [0, 0, 0],
                [1, 1, 1],
                [1, 0, 0]
            ],
            [   
                [1, 1, 0],
                [0, 1, 0],
                [0, 1, 0]
            ],
        ]
    },
    {
        name: 'J',
        coord: [
            [
                [1, 0, 0],
                [1, 1, 1],
                [0, 0, 0]
            ],
            [
                [0, 1, 1],
                [0, 1, 0],
                [0, 1, 0]
            ],
            [
                [0, 0, 0],
                [1, 1, 1],
                [0, 0, 1]
            ],
            [   
                [0, 1, 0],
                [0, 1, 0],
                [1, 1, 0]
            ]
        ]
    },
    {
        name: 'Z',
        coord: [
            [
                [1, 1, 0],
                [0, 1, 1],
                [0, 0, 0]
            ],
            [
                [0, 0, 1],
                [0, 1, 1],
                [0, 1, 0]
            ],
            [
                [0, 0, 0],
                [1, 1, 0],
                [0, 1, 1]
            ],
            [   
                [0, 1, 0],
                [1, 1, 0],
                [1, 0, 0]
            ]
        ]
    },
    {
        name: 'S',
        coord: [
            [
                [0, 1, 1],
                [1, 1, 0],
                [0, 0, 0]
            ],
            [
                [0, 1, 0],
                [0, 1, 1],
                [0, 0, 1]
            ],
            [
                [0, 0, 0],
                [0, 1, 1],
                [1, 1, 0]
            ],
            [   
                [1, 0, 0],
                [1, 1, 0],
                [0, 1, 0]
            ]
        ]
    }
]

export default {
    name: 'dev',
    data () {
        return {
            currTetri: Math.floor(Math.random() * Math.floor(7)),
            currRota: Math.floor(Math.random() * Math.floor(4)),
            tetrimino,
            x: 0,
            }
    },
    methods: {
        isCell (y, x) {
            console.log(y, x);
            console.log(this.tetrimino[this.currTetri].coord[this.currRota])
            if (this.tetrimino[this.currTetri].coord[this.currRota][y][x] === 1)
              return true;
            console.log('nope');
            return (false);
        },
        incrRota (value)
        {
            this.currRota++;
            this.currRota = (this.currRota === 4 ? 0 : this.currRota);
        }
    },
    computed: {
        matriceSize() {
            return ((this.tetrimino[this.currTetri].name === 'I' || this.tetrimino[this.currTetri].name === 'O') ? 4 : 3)
        },
    }
}
</script>

<style lang="stylus" scoped>
.root {
    height: 100%;
    width: 100%;
    position relative; 
}

.container {
    border: 1px solid black;
    width: 400px;
    height: 880px;
    position relative;
    margin: auto;
}

.tetrimino {
    width: 160px;
    height: 160px;
    position: relative;
}

.cell {
    border: 1px solid black;
    height: 40px;
    width: 40px;
}
</style>

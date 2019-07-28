<template>
    <div class="tetrimino"
    :style="matriceSize === 4 ? 'width: 160px; height: 160px;' : 'width: 120px; height: 120px;'">
        <div
        v-for="y in matriceSize"
        :key="y"
        class="tetriLine"
        :style="(matriceSize === 4) ? 'width: 160px' : 'width: 120px;'">
            <div
            v-for="x in matriceSize"
            :key="x"
            class="cell"
            :style="isCell(y, x) === true ? 'background-image:' + tetrimino[currTetri].texture + 'background-size: contain;' : ''"
            >
            </div>
        </div> 
    </div>
</template>

<script>

    //:style="matriceSize === 4 ? 'width: 160px; height: 160px;' : 'width: 120px; height: 120px;'">
export default {
    name: 'dev',
    data () {
        return {
            x: 0,
            }
    },
    props: [
        'currTetri',
        'currRota',
        'tetrimino'
    ],
    methods: {
        isCell (y, x) {
//            console.log(y - 1, x - 1);
//            console.log(this.tetrimino[this.currTetri].coord[this.currRota])
            if (this.tetrimino[this.currTetri].coord[this.currRota][y - 1][x - 1] === 1)
              return true;
//            console.log('nope');
            return (false);
        },
    },
    computed: {
        matriceSize() {
            return ((this.tetrimino[this.currTetri].name === 'I' || this.tetrimino[this.currTetri].name === 'O') ? 4 : 3)
        },
    }
}
</script>

<style lang="stylus" scoped>

.tetrimino {
    display: flex;
    flex-direction: column;
    position: absolute;
}

.cell {
    height: 40px;
    width: 40px;
} 

.tetriLine {
    height: 40px;
    display: flex;
    flex-direction: row;
}
</style>

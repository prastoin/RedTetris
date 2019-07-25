<template>
    <div class="root">
        <div class="arena">
            <div class="container">
                <div class="matrice">
                    <div 
                        v-for=" y in 22"
                        :key="y"
                        :id="y"
                        style="display:flex; flex-direction: colunm;">
                            <div
                            v-for="x in 10"
                            :key="x"
                            :id="x"
                            class="cell"
                            >
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
export default {
    name: 'game',
    data () {
        return {score: 0}
    },
}
</script>

<style lang="stylus" scoped>
.root{
    width: 100%;
    height: 100%;
    position: relative;
}

.arena {
    width: 400px;
    height: 1000px;
    background: grey;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .container {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        .matrice {
            height: 880px;
            width: 100%;
            position: relative;
            .cell {
                border: solid 1px black;
                width: 40px;
                height: 40px;
                opacity: 0.1;
                background: yellow;
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

<template>
    <div class="root">
        <div class="buttonbox">
                <p class="minecraftButton" id="menu">Menu</p>
                <router-link to="RedTetris" style="text-decoration: none;">
                    <p class="minecraftButton" id="play">Play</p>
                </router-link>
                <p class="minecraftButton" id="settings">Settings</p>
                <p class="minecraftButton" id="credits">Credits</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "menu",
}
</script>

<style lang="stylus" scoped>
.root {
    height: 70vh;
    width: 60vw;
    margin-left: auto;
    margin-right: auto;
}

.container {
    margin: auto;
}

.buttonbox {
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    p {
        background-image: url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/d82j2kd-4bd6de45-7b91-462a-890a-c99485b163dd.jpg/v1/fill/w_1024,h_576,q_75,strp/minecraft_stone_brick_simple_texture_wallpaper_by_elbarnzo_d82j2kd-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZDFmYTBmODAtMzNjMS00NTE2LThiYWEtOTBmYjY3ZWQyMjY5XC9kODJqMmtkLTRiZDZkZTQ1LTdiOTEtNDYyYS04OTBhLWM5OTQ4NWIxNjNkZC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19._DX46Z-fJNwSOoDK3d50K2pnMiBlgbHvqptlkSJQHw4);
        margin: 32px;
        margin-left: auto;
        margin-right: auto;
        font-size: 2rem;
    }
    #menu {
        padding: 32px;
        width: 60%;
        height: auto;
        font-size: 6rem;
        font-font-family: verdana;
    }
}

.minecraftButton{
  width: 210px;
  height: 80px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  background: rgba(0,0,0,0, 0.1);
    border: 0;
  position: relative;
  text-shadow: 0 2px 0 rgba(0,0,0,0.3);
}

.minecraftButton:hover{
  cursor: pointer;
}

.minecraftButton:after, .minecraftButton:before{
  display: block;
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.minecraftButton:before{
  background: none;
  border-top: 4px solid #808080;
  border-bottom: 4px solid #636060;
  border-left: 4px solid #636060;
  border-right: 4px solid #808080;
  box-shadow: 0 4px 0 0 rgba(0, 0, 0, 0.15);
}
</style>

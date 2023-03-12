<template>
<div class="top">
    <div class="box">
        <div class=" top-1">
            <h1>Animate</h1>
        </div>
        <div class=" top-2">
<!--             <input type="text" placeholder="請輸入動漫名稱"> -->
        </div>
        <div class=" top-3">
            <div class="tag">
            <router-link :to="{name:'home'}" active-class="active">home</router-link>
            </div>
            <div class="tag">
            <router-link :to="{name:'product'}" active-class="active">anime</router-link>
            </div>
            <div class="tag">    
                <router-link :to="{name:'product'}" active-class="active">製作中</router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'top',
}
</script>

<style scoped>
*{
    text-decoration: none;
    padding: 0;
    margin: 0;
}
.top{
    width: 100%;
    position: fixed;
    backdrop-filter: blur(0px);
    background-color: black;
    color: white;
    height: 70px;
    z-index: 100;
    opacity: 0.3;
}
.box{
    height: 80px;
    display: flex;
    align-items: center;
}
.top-1{
    flex:2;
    text-align: center;
}

.top-2{
    flex: 1;
}
.top-2 input{
    width: 100%;
    height: 40px;
    border: none;
    outline: none;
    text-align: center;
    color: black;
}

.top-3 a{
    color: white;
    font-size: 25px;

}

.top-3{
    display: flex;
    flex: 2;
    justify-content: space-around;
}
.top-3 a:hover{
    text-decoration: underline;
}
h1{
    font-size: 40px;
    user-select: none;
}
h2{
    font-size: 15px;
}
.active{
    text-decoration: underline;
    color: purple;
}

@media screen and (max-width: 768px){

}

</style>
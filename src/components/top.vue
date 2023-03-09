<template>
<div class="top">
    <div class="box">
        <div class=" top-1">
            <h1>Animate</h1>
        </div>
<!--         <div class=" top-2">
            <input type="text" placeholder="請輸入動漫名稱">
        </div> -->
        <div class=" top-3">
            <router-link :to="{name:'product'}" active-class="active">home</router-link>
            <router-link :to="{name:'product'}" active-class="active">製作中</router-link>
            <router-link :to="{name:'product'}" active-class="active">製作中</router-link>
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
}
.top{
    width: 100%;
    position: fixed;
    backdrop-filter: blur(15px);
    color: white;
    height: 80px;
    z-index: 100;
}
.box{
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
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
    display:flex;
    flex-direction: column;
    align-items: end;
    color: white;

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
}

@media screen and (max-width: 768px){

}

</style>
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
            <router-link :to="{name:'home'}" active-class="active">
                Home
            </router-link>
            </div>
            <div class="tag">
            <router-link :to="{name:'product'}" active-class="active">
                Anime
            </router-link>
            </div>
            <div class="tag">    
                <router-link :to="{name:'create'}" active-class="active">
                    login
                    <ion-icon name="log-in-outline"></ion-icon>
                </router-link>
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
    background-color: rgba(12, 9, 9, 0.336);
    color: white;
    height: 70px;
    z-index: 100;
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
    position: relative;
}

.top-3{
    display: flex;
    flex: 2;
    justify-content: space-around;
}
.top-3 a:hover{
    border-radius: 5px;
    color: purple;
    transform: translateY(-3px);
}
.top-3 a::after{
    content:'';
    position: absolute;
    left: 0%;
    right: 100%;
    bottom: 1px;
    border-bottom: 2px solid purple;
    transition: .4s;
}
.top-3 a:hover::after{
    left: 0;
    right: 0;
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
    font-weight: 600;
    color: black;
}

@media screen and (max-width: 768px){

}

</style>
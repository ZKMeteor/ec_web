<template>
    <div class="pro container-fluid">
        <div class="row box">
            <div class="col-lg-3 title">
                <div class="title-1" v-for="c in animeData" :key="c.ID">
                    <h2>{{ c.Title }}</h2>
                </div>
            </div>
            <div class="col-lg-9 list ">
                    <div v-for="c in animeData" :key="c.ID" class="card text-center" style="width: 12rem;">
                            <img :src="c.Pic" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">{{c.Title}}</h5>
                                <p class="card-text">{{c.Date}}</p>
                                <p class="card-text">{{c.Type[0]}}</p>
                                <a :href="c.Url" class="btn card-botton btn-outline-warning">官網</a>
                            </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Product',
    data() {
        return {
            animeData: null,
        };
    },
    methods: {
    },
    mounted() {
        axios.get('./anime.json').then(
            response  => {
                console.log(response.data);
                this.animeData = response.data;
            },
            err => {
                console.log(err.message, '请求失败');
            });
        },
}
</script>

<style scoped>
*{
    text-decoration: none;
}
.pro{
    padding: 100px 80px 30px 80px;

}
.box{

}

h2{
    color: orange;
}

.list{
   display: flex;
   flex-direction:row;
   flex-wrap: wrap;
}
.title-1{
    display: flex;

}

.card{
    margin: 10px;
    border: none;
    outline: none;
    background-color: rgb(181, 242, 247);
    color: purple;
    font-weight: 600;

}
.btn{
    align-items: bottom;
    color: purple;
    border: purple 1px solid;
}
.btn:hover{
    background-color: purple;
    color: aqua;
}
</style>
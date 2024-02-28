
<template>
    <main>
   <div class="container">
    <div class="row">
        <div class="col-4" v-for="cocktail in cocktails" :key="cocktail.id">
            <div class="card">
                <img :src="cocktail.image" class="card-img-top" alt="Cocktail Image">
                <div class="card-body">
                <h5 class="card-title">{{ cocktail.name }}</h5>
                <p class="card-text">{{ cocktail.description }}</p>
            </div>
        </div>
        </div>
    </div>
   </div>

</main>
</template>

<script>
import axios from 'axios';

   

export default {
    name: 'CocktailsIndex',
    data(){
       return {
        cocktails: [],
       }
    },

    methods:{
        getCocktails(){
            axios.get('http://127.0.0.1:8000/api/cocktails',{
                params: {
                }
            })
            .then((response)=>{
                console.log(response);
                this.cocktails = response.data.results
            })
            .catch(function(error){
                console.log(error);
            })
            .finally(function(){

            });
        }
    },

    created(){
        this.getCocktails();
    }

}
</script>

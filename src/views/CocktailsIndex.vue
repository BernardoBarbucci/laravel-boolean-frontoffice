
<template>
    <main>
        <h1 class="title-cocktails text-center mt-5">
            cocktails
        </h1>
   <div class="container mt-5">
    <div class="row">
        <div class="col-4 mt-2 mb-4 vh-50" v-for="cocktail in cocktails" :key="cocktail.id">
            <div class="card">
                <img :src="cocktail.image" class="card-img-top" alt="Cocktail Image">
                <div class="card-body">
                <h5 class="card-title text-center">{{ cocktail.name }}</h5>
                <p class="card-text">{{ cocktail.description }}</p>
                <p class="card-text">{{ cocktail.price }}€</p>
                <p class="card-text">{{ cocktail.alcohol_content}}°</p>
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

<style scoped>

.title-cocktails{
    color: white;
} 

.card {
  transition: all 0.2s ease-in-out; 
}

.card:hover {

  transform: scale(1.05); 
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); 
  
}

</style>
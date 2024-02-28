
<template>
   <main class="container">
        <div class="row">
            <div class="col-12 mt-5">
                <ul>
                    <li v-for="cocktail in cocktails" :key="cocktail.id">
                        <div class="cocktail-image">
                            <h2 class="title ms-2">
                                {{ cocktails.name }}
                            </h2>
                                <img :src="cocktail.image" alt="" class="image-cocktail">
                                <p>
                                    {{ cocktail.description }}
                                </p>
                        </div>
                    </li>
                </ul>
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

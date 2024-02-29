<template>
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cocktails</title>
    </head>
    <body class="d-flex align-content-center">
      <div class="d-flex">
        <h1 class="first-main-title text-white pe-4 pb-2 fw-bolder">Cocktail</h1>
        <h1 class="main-title text-white fw-lighter">Bar</h1>
      </div>
      <section>
        <p class="home-description text-white fw-medium">
          Benvenuti nel nostro cocktail bar, dove l'eleganza si unisce all'innovazione per offrirvi un'esperienza unica. Con cocktail artigianali e un'atmosfera raffinata, ogni sorso è un viaggio sensoriale. Venite a scoprire il gusto della nostra creatività in ogni bicchiere.
        </p>
        <button type="button" class="index-btn btn btn-primary" @click="navigateToCocktails">
          <a href="#" class="justify-content-center">
            <h2>
              MENU
            </h2>
          </a>
        </button>
        <div>
          <button type="button" class="index-btn btn btn-primary" @click="navigateToContact">
            <a href="#" class="justify-content-center">
              <h2>
                Contact
              </h2>
            </a>
          </button>
        </div>
        <div>
          <button type="button" class="index-btn btn btn-primary" @click="navigateToAbout">
            <a href="#" class="justify-content-center">
              <h2>About Us</h2>
            </a>
          </button>
        </div>
         
      </section>
    </body>
    </html>
  </template>
  
  <style scoped>
  
  .index-btn{
    height: 65px;
    margin-bottom: 2rem;
  }

  section{
    margin-top: 15rem;
  }

  
  
  </style>
  
  <script>
 import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const navigateToCocktails = () => {
      router.push('/cocktails');
    };

    const navigateToContact = () => {
      router.push('/contactUs');
    };

    const navigateToAbout = () => {
      router.push('/about-us'); 
    };

    return {
      navigateToCocktails,
      navigateToContact,
      navigateToAbout,
    };
  },
};
  </script>
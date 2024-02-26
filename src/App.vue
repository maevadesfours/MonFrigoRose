<script setup>
//import CompartimentItems from "./components/CompartimentItems.vue";
//import FrigoForm from "./components/CompartimentItems.vue";
//import Recherche from "./components/Recherche.vue";
import frigoFooter from "./components/frigoFooter.vue"
import Liste from "./components/Liste.vue";
import monFrigo from "./components/monFrigo.vue";

const scrollToFeatures = () => {
  const featuresElement = document.querySelector(".features");
  featuresElement.scrollIntoView({ behavior: 'instant' });
};

</script>

<template>
  <body>
    <div class="header">
      <monFrigo />
      <div class="scroll">
        <button class="fonction" @click="scrollToFeatures">
          <img id="click" src="./components/icons/Click.png">
        </button>
      </div>
    </div>
    <div class="features">
      <Liste />
    </div>
  </body>
</template>


<style>
body {
  margin: center;
}


.header {
  background-image: url('components/icons/page_accueil.jpg');
  background-size: cover;
  width: 100%;
  height: 110vh;
  background-position: center;
}

.scroll {
  margin-top: -53vh;
  margin-left: 63vw;
}


#click {
  width: 15vw;
}

.features {
  margin: center;
  background-image: url('components/icons/frigo_ouvert.jpg');
  background-position: left;
  background-color: rgb(250, 250, 250);
  width: 100vw;
  padding-bottom: 500px;
}

</style>
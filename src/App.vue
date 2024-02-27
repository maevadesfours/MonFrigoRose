<script setup>
import fonction from "./components/fonction.vue";
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
      <fonction />
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
  margin-top: -6vh;
  margin-left: 61vw;
}

#click {
  width: 20vw; 
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
<script setup>
import fonction from "./components/fonction.vue";
import monFrigo from "./components/monFrigo.vue";

</script>
<template>
    <div class="frigo">
      <monFrigo />
      <fonction />
    </div>
</template>

<style>

.frigo {
  background-image: url('components/icons/page_accueil.jpg');
  background-size: cover;
  width: 100%;
  height: 110vh;
  background-position: center;
}

</style>
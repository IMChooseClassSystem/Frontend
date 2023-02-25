<template>
  <Header />

  <Select class="mt-2 mx-2" />

  <div class="row mt-3 mx-2 mb-4">
    <RouterView />
  </div>
</template>
<style scoped>
@media (max-width: 768px) {
  .container-fluid {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
}
</style>

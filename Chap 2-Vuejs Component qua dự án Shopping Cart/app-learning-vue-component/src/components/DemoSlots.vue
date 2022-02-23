<template>
  <h1>Demo Slot</h1>
  <slot>
      <h3>Slot default</h3>
  </slot>
 
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <section class="one">
      <slot name="one"></slot>
    </section>
    <section class="two">
      <slot name="two"></slot>
    </section>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</template>

<script>
export default {};
</script>

<style>
</style>
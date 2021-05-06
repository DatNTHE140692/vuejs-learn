<template>
  <form>
    <div class="form-header">
      <slot name="form-header" />
    </div>
    <div class="form-fields">
      <slot name="form-fields" />
    </div>
    <div class="form-controls">
      <slot name="form-controls" />
    </div>
    <div class="useful-links">
        <ul>
            <li><a href="#">Useful Link 1</a></li>
            <li><a href="#">Useful Link 2</a></li>
            <li><a href="#">Useful Link 3</a></li>
        </ul>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style scoped>
</style>

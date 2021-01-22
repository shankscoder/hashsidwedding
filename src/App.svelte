<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
</script>

<style  global>
  @import "../assets/styles/global.pcss";
</style>

<Router {routes} />

<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100..900;1,700&family=Roboto+Slab:ital,wght@0,100..900;1,700" rel="stylesheet">
</svelte:head>
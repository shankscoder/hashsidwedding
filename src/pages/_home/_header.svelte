<script>
    import { layout, url, isActive } from "@roxi/routify";

    export let headerData = {
      brand: '',
      leftLinks: [

      ],
      rightLinks: [
      ]
    }

    let showMenu = true;
    
</script>
<style>
  .nav-item {
    @apply capitalize block mt-4 lg:inline-block lg:mt-0 mr-4 p-2 font-normal text-base;
  }
  .nav-item:hover {
      @apply text-white rounded shadow-lg;
  }

  .nav-bar {
    @apply max-w-screen-2xl mx-auto flex items-center justify-between flex-wrap p-2 pt-3 pl-0;
  }
</style>
<div class="header">
  <!-- <nav class="nav-bar">
      <div class="flex items-center flex-shrink-0 lg:mr-2">
        <a href={$url('/')}>
          
        <span class="font-black text-xl tracking-tighter">{headerData.brand}</span>
          
        </a>
      </div>
      <div class="block lg:hidden">
        <button on:click="{() => showMenu = !showMenu}" class="flex items-center px-3 py-2 border rounded text-gray-700 border-gray-700 hover:text-gray-300 hover:border-gray-300">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:visible hidden" class:hidden={showMenu} >
        <div class="text-base lg:flex-grow">
          {#each headerData.leftLinks as [path, name, color]}
            <a href={$url(path)} class="nav-item hover:bg-gray-700" class:active={$isActive(path)}>{name}</a>
          {/each}
        </div>
        <div class="text-base lg:flex-shrink">
          {#each headerData.rightLinks as [path, name, color]}
            <a href={$url(path)} class="nav-item hover:bg-gray-700" class:active={$isActive(path)}>{name}</a>
          {/each}
        </div>
      </div>
  </nav> -->
  <div class="w-full pt-4 py-2 text-center">
      <span class="font-bold text-xl tracking-tighter">Hash + Sid Wedding - Jan 24 2021</span>
  </div>
</div>
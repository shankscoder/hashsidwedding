<script>
    import Header from './_home/_header.svelte'
    import Footer from './_home/_footer.svelte'
    import Modal from 'svelte-simple-modal';
    import { metatags, page } from '@roxi/routify'
    
    $: {
        if(page.title)
            metatags.title = `Harshni & Sid's Wedding`
    }

    metatags.description = 'Hash + Sid Wedding - January 24 2021'
</script>

<!-- routify:options preload="proximity" -->

<div class="bg-gradient-to-t from-orange-300 to-lightblue-400 min-h-screen px-5 md:px-16 pb-5 m-0 text-white">
	<div class="max-w-screen-xl mx-auto">
    <Modal>
      <Header/>
      <slot />
      <Footer />
    </Modal>
	</div>
</div>
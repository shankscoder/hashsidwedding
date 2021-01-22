<script>
    import MainStream from './_mainstream.svelte'
    import TableCam from './_tablecam.svelte'
    import AreaCam from './_areacam.svelte'
</script>
<section class="section mt-8 pb-4 w-full p-6" id="cams">
    <h1 class="mt-2 mb-4 text-4xl font-thin tracking-tight uppercase text-left">Live Streams</h1>
    <div class="prose-2xl mb-8">
        <h3>As these two are football obsessed, there's a lot of football themes involved in the wedding.</h3>
        <p class="leading-tight text-sm">
            Please note: These streams are really for the wedding, not an Arsenal vs Manchester United match (which would be a bore...)
        </p>
    </div>
    <div class="w-full">
        <MainStream></MainStream>
    </div>
    <div class="flex flex-wrap md:flex-nowrap md:space-x-6 mt-8">
        <div class="w-full md:flex-1">
            <TableCam></TableCam>
        </div>
        <div class="mt-8 md:mt-0 w-full md:flex-1">
            <AreaCam></AreaCam>
        </div>
    </div>
</section>
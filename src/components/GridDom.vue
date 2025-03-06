<template>

    <h2>1</h2>
    <div class="grid grid-cols-3 gap-2 border-4 border-red-400">
        <div class="border-4 border-blue-500">hello</div>
        <div class="border-4 border-blue-500">hello</div>
        <div class="border-4 border-blue-500">hello</div>
        <div class="border-4 border-blue-500">hello</div>
        <div class="border-4 border-blue-500">hello</div>
        <div class="border-4 border-blue-500">hello</div>
        <div class="border-4 border-blue-500">hello</div>
        <div class="border-4 border-blue-500">hello</div>
        <div class="border-4 border-blue-500">hello</div>
        <div class="border-4 border-blue-500">hello</div>
        <div class="border-4 border-blue-500">hello</div>
    </div>

    <h2>2</h2>
    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2 border-4 border-red-400">
        <div class="border-4 border-blue-500">hello</div>
        <div class="border-4 border-blue-500">hello</div>
        <div class="border-4 border-blue-500">hello</div>
        <div class="border-4 border-blue-500">hello</div>
        <div class="border-4 border-blue-500">hello</div>
        <div class="border-4 border-blue-500">hello</div>
        <div class="border-4 border-blue-500">hello</div>
        <div class="border-4 border-blue-500">hello</div>
        <div class="border-4 border-blue-500">hello</div>
        <div class="border-4 border-blue-500">hello</div>
        <div class="border-4 border-blue-500">hello</div>
    </div>

    <h2>3</h2>
    <div class="grid grid-cols-3 grid-rows-4 gap-2 border-4 border-red-400">
        <div class="border-4 border-blue-500">hello</div>
        <div class="border-4 border-blue-500">hello</div>
        <div class="border-4 border-blue-500">hello</div>
        <div class="border-4 border-blue-500">hello</div>
        <div class="border-4 border-blue-500 break-words">hello hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello</div>
        <div class="border-4 border-blue-500 break-words">hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello</div>
        <div class="border-4 border-blue-500">hello</div>
    </div>

    <h2>4</h2>
    <div class="grid grid-cols-3 grid-rows-4 grid-flow-col gap-2 border-4 border-red-400">
        <div class="border-4 border-blue-500">hello 1</div>
        <div class="border-4 border-blue-500">hello 2</div>
        <div class="border-4 border-blue-500">hello 3</div>
        <div class="border-4 border-blue-500">hello 4</div>
        <div class="border-4 border-blue-500">hello 5</div>
        <div class="border-4 border-blue-500">hello 6</div>
    </div>

    <h2>5</h2>
    <div class="grid grid-cols-4 grid-rows-4 gap-2 border-4 border-red-400">
        <div class="col-span-3 border-4 border-blue-500">hello 1</div>
        <div class="border-4 border-blue-500">hello 2</div>
        <div class="border-4 border-blue-500">hello 3</div>
        <div class="border-4 border-blue-500">hello 4</div>
        <div class="border-4 border-blue-500">hello 5</div>
        <div class="border-4 border-blue-500 row-span-2">hello 6</div>
        <div class="border-4 border-blue-500">hello 7</div>
        <div class="border-4 border-blue-500">hello 8</div>
        <div class="border-4 border-blue-500">hello 9</div>
        <div class="border-4 border-blue-500">hello 10</div>
        <div class="border-4 border-blue-500">hello 11</div>
        <div class="border-4 border-blue-500">hello 12</div>
        <div class="border-4 border-blue-500">hello 13</div>
    </div>

    <h2>6</h2>
    <div class="grid grid-cols-4 grid-rows-4 gap-2 border-4 border-red-400">
        <div class="col-start-1 col-end-5 border-4 border-blue-500">hello 1</div>
        <div class="border-4 border-blue-500">hello 2</div>
        <div class="border-4 border-blue-500">hello 3</div>
        <div class="border-4 border-blue-500">hello 4</div>
        <div class="border-4 border-blue-500">hello 5</div>
        <div class="border-4 border-blue-500">hello 6</div>
    </div>
    <br />
    <div class="grid grid-cols-4 grid-rows-4 gap-2 border-4 border-red-400">
        <div class="col-start-1 col-end-3 row-start-1 row-end-3 border-4 border-blue-500">hello 1</div>
        <div class="border-4 border-blue-500">hello 2</div>
        <div class="border-4 border-blue-500">hello 3</div>
        <div class="border-4 border-blue-500">hello 4</div>
        <div class="border-4 border-blue-500">hello 5</div>
        <div class="border-4 border-blue-500">hello 6</div>
    </div>
    <br />
    <div class="grid grid-cols-4 grid-rows-4 gap-2 border-4 border-red-400">
        <div class="border-4 border-blue-500">hello 1</div>
        <div class="col-start-1 row-start-2 border-4 border-blue-500">hello 2</div>
        <div class="border-4 border-blue-500">hello 3</div>
        <div class="border-4 border-blue-500">hello 4</div>
        <div class="border-4 border-blue-500">hello 5</div>
        <div class="border-4 border-blue-500">hello 6</div>
    </div>
    <br />
    <div class="grid grid-cols-4 grid-rows-4 gap-2 border-4 border-red-400">
        <div class="md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3 border-4 border-blue-500">hello 1</div>
        <div class="border-4 border-blue-500">hello 2</div>
        <div class="border-4 border-blue-500">hello 3</div>
        <div class="border-4 border-blue-500">hello 4</div>
        <div class="border-4 border-blue-500">hello 5</div>
        <div class="border-4 border-blue-500">hello 6</div>
    </div>
    <br />
    <div class="grid grid-cols-4 grid-rows-4 gap-2 border-4 border-red-400 items-center">
        <div class="border-4 border-blue-500">hello 1</div>
        <div class="border-4 border-blue-500">hello 2</div>
        <div class="border-4 border-blue-500">hello 3</div>
        <div class="md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3 border-4 border-blue-500">hello 4</div>
        <div class="border-4 border-blue-500">hello 5</div>
        <div class="border-4 border-blue-500">hello 6</div>
    </div>
    <br />
    <div class="grid grid-cols-4 grid-rows-4 gap-2 border-4 border-red-400 items-stratch">
        <div class="h-20 border-4 border-blue-500">hello 1</div>
        <div class="border-4 border-blue-500">hello 2</div>
        <div class="h-20 border-4 border-blue-500">hello 3</div>
        <div class="h-20 border-4 border-blue-500">hello 4</div>
        <div class="h-20 border-4 border-blue-500">hello 5</div>
        <div class="h-20 border-4 border-blue-500">hello 6</div>
    </div>
    <br />
    <div class="grid grid-cols-4 grid-rows-4 gap-2 border-4 border-red-400 items-stratch justify-items-stratch">
        <div class="h-20 border-4 border-blue-500">hello 1</div>
        <div class="border-4 border-blue-500">hello 2</div>
        <div class="h-20 border-4 border-blue-500">hello 3</div>
        <div class="h-20 border-4 border-blue-500">hello 4</div>
        <div class="h-20 border-4 border-blue-500">hello 5</div>
        <div class="h-20 border-4 border-blue-500">hello 6</div>
    </div>
    <br />
    <div class="h-80 grid grid-cols-4 gap-2 border-4 border-red-400 content-around">
        <div class="h-20 border-4 border-blue-500">hello 1</div>
        <div class="border-4 border-blue-500">hello 2</div>
        <div class="h-20 border-4 border-blue-500">hello 3</div>
        <div class="h-20 border-4 border-blue-500">hello 4</div>
        <div class="h-20 border-4 border-blue-500">hello 5</div>
        <div class="h-20 border-4 border-blue-500">hello 6</div>
    </div>
    <br />
    <div class="grid grid-cols-4 gap-2 border-4 border-red-400">
        <div class="border-4 border-blue-500">hello 1</div>
        <div class="border-4 border-blue-500 order-first">hello 2</div>
        <div class="border-4 border-blue-500">hello 3</div>
        <div class="border-4 border-blue-500">hello 4</div>
        <div class="border-4 border-blue-500">hello 5</div>
        <div class="border-4 border-blue-500">hello 6</div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
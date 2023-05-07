import React from'react';
import VueRemote from './components/vue';
import SvelteRemtoe from './components/svelte';

const App = () => { 

    return (
        <div>
            <h1>React js Host</h1>
            <VueRemote />
            <SvelteRemtoe />
        </div>
    )
}

export default App;
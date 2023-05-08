import React from'react';
import VueRemote from './components/vue';
import SvelteRemote from './components/svelte';

const App = () => { 
    return (
        <div>
            <VueRemote />
            <h1>React js Host</h1>
            <SvelteRemote />
        </div>
    )
}

export default App;
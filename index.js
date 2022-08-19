const app = Vue.createApp({});

app.component('tag-form', {
    template: `
        <form class="container mt-3">
            <div class="row justify-content-center">
                <label for="nombre" class="col-1">Nombre:</label>
                <input type="text" id="nombre" class="col-6"/>
            </div>
        </form>
    `
});

app.mount('#app');
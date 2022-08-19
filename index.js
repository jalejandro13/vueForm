const app = Vue.createApp({
    
});

app.component('input-div', {
    template: `
        <div class="row justify-content-center">
                <label class="col-auto" for="nombre">Nombre:</label>
                <input class="col-6" type="text" id="nombre" name="nombre" >
        </div>
    `,
    data() {
        return {
            respuesta: ''
        }
    },
});

app.mount('#app');
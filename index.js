const app = Vue.createApp({
    data() {
        return {
            informacionForm:[
                {
                    etiqueta: 'Nombre',
                    tipo: 'text',
                    respuesta: ''
                }
            ]
        }
    },
});

app.component('input-div', {
    template: `
        <div class="row justify-content-center">
                <label class="col-auto" :for="etiqueta">{{ etiqueta }}:</label>
                <input class="col-6" :type="tipo" :id="etiqueta" :name="etiqueta" >
        </div>
    `,
    data() {
        return {
            respuesta: ''
        }
    },
    props: ['etiqueta', 'tipo', 'modelValue']
});

app.mount('#app');
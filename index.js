const app = Vue.createApp({
    data() {
        return {
            informacionForm:[
                {
                    etiqueta: 'Nombre:',
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
                <label class="col-auto" for="nombre">{{etiqueta}}</label>
                <input class="col-6" type="text" id="nombre" name="nombre" >
        </div>
    `,
    data() {
        return {
            respuesta: ''
        }
    },
    props: ['etiqueta']
});

app.mount('#app');
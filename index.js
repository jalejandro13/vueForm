const app = Vue.createApp({
    data() {
        return {
            informacionForm:[
                {
                    etiqueta: 'Nombre',
                    tipo: 'text',
                    respuesta: ''
                },
                {
                    etiqueta: 'Edad',
                    tipo: 'number',
                    respuesta: ''
                },
                {
                    etiqueta: 'Animal Fav',
                    tipo: 'text',
                    respuesta: ''
                }
            ]
        }
    },
    methods: {
        agregar(){
            this.informacionForm.forEach(input => console.log(input['respuesta']));
            this.informacionForm.forEach(input => input['respuesta'] = '');
            this.informacionForm.forEach(input => console.log(input['respuesta']));
        }
    },
});

app.component('input-div', {
    template: `
        <div class="row justify-content-center mt-3">
                <label class="col-2" :for="etiqueta">{{ etiqueta }}:</label>
                <input class="col-5" :type="tipo" :id="etiqueta" :name="etiqueta" v-model="respuesta">
        </div>
    `,
    props: ['etiqueta', 'tipo', 'modelValue'],
    computed: {
        respuesta: {
            get(){
                return this.modelValue;
            },
            set(res){
                this.$emit('update:modelValue', res);
            }
        }
    }
});

app.mount('#app');
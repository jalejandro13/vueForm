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
            ],
            elementosAñadidos:[]
        }
    },
    methods: {
        agregar(){
            this.elementosAñadidos.push({ nombre : this.informacionForm[0]['respuesta'], edad : this.informacionForm[1]['respuesta'], animal : this.informacionForm[2]['respuesta']});

            this.informacionForm.forEach(input => input['respuesta'] = '');
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

app.component('output-div', {
    template: `
        <table class="container respuestas mt-3">
            <tr class="row text-center mt-1">
                <td>
                    {{ nombre }}
                </td>
            </tr>
            <tr class="row text-center mt-1">
                <td>
                    {{ edad }}
                </td>
            </tr>
            <tr class="row text-center mt-1">
                <td>
                    {{ animal }}
                </td>
            </tr>
        </table>
    `,
    props: ['nombre', 'edad', 'animal']
});

app.mount('#app');

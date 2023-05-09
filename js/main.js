document.addEventListener('DOMContentLoaded', function () {
    set_email_soporte();
});

function limpiar_avisos(contenedor) {
    contenedor.innerHTML = '';
    contenedor.style.display = 'none';
}

function set_email_soporte() {
    document.getElementById('email-soporte').value = document.getElementById('email-hidden-soporte').value;
}

function preload_display(preload, ocultar, estado) {
    if (estado == 'mostrar') {
        preload.style.display = 'block';
        ocultar.style.display = 'none';
        return;
    }
    preload.style.display = 'none';
    ocultar.style.display = 'block';
}

function agregar_avisos(contenedor, avisos) {
    avisos.forEach(element => {
        let label = document.createElement('label');
        label.innerHTML = element;
        contenedor.appendChild(label);
    });
    contenedor.style.display = 'block';
    contenedor.classList.remove('hide');
    contenedor.scrollIntoView({ behavior: "smooth" });
}

function comprar_fechas(fecha_1 = null, fecha_2 = null) {
    let date_1 = new Date();
    let date_2 = new Date();
    if (fecha_1 != null) {
        date_1 = new Date(fecha_1)
    }
    if (fecha_2 != null) {
        date_2 = new Date(fecha_2)
    }
    if (date_1 == date_2) {
        return 3;
    }
    if (date_1 > date_2) {
        return 1;
    }
    return 2;
}

function formatear_fecha(fecha = null) {
    let date = new Date();
    if (fecha != null) {
        date = new Date(fecha)
    }
    let dia = date.getDate();
    let month = `0${(date.getMonth() + 1)}`.slice(-2)
    let year = date.getFullYear();
    let hour = `0${date.getHours()}`.slice(-2);
    let minute = `0${date.getMinutes()}`.slice(-2);

    return `${dia}/${month}/${year} ${hour}:${minute}`;
}

function convertir_file_input(items) {
    let contenedor = [];
    FilePond.registerPlugin(
        FilePondPluginImagePreview
    );
    Array.from(items).forEach(element => {
        const item = {
            input: FilePond.create(
                element,
                {
                    labelIdle: `Arrastre los archivos o <span class="filepond--label-action">Busque en el dispositivo</span>`,
                    imageCropAspectRatio: '1:1',
                    credits: ['', '']
                }
            ),
            id: element.id
        };
        contenedor.push(item);
    });

    return contenedor;
}

function array_search_key(arr, val) {
    for (var i = 0; i < arr.length; i++)
        if (arr[i].id === val)
            return i;
    return false;
}
const ingresos = [
    new Ingreso('Sueldo', 2000),
    new Ingreso('Venta Coche',2000),
   
    
];

const egresos= [
    new Egreso('Renta',1000),
    new Egreso('Ropas', 1200)
]

let cargarApp = ()=>{
    cargarCabecero()
    cargarIngreso()
    cargarEgreso()
    
}

let totalIngresos = ()=>{
    let totalIngresos = 0
    for(let ingreso of ingresos){
        totalIngresos += ingreso.valor
    }
    return totalIngresos
}

let totalEgresos = ()=>{
    let totalEgresos = 0
    for(let egreso of egresos){
        totalEgresos += egreso.valor
    }
    return totalEgresos
}

let cargarCabecero= ()=>{
    let presupuesto = totalIngresos()-totalEgresos()
    let porcentajeEgreso = totalIngresos() > 0 ? totalEgresos() / totalIngresos() : 0;
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());

}

const formatoMoneda = (valor)=>{
    return valor.toLocaleString('es-EC', {style:'currency', currency: 'USD', minimumFractionDigits: 2})

}
const formatoPorcentaje = (valor)=>{
    return valor.toLocaleString('es-EC', {style:'percent', minimumFractionDigits: 2})
}

const cargarIngreso = ()=>{
    let ingresosHtml = ''
    for(let ingreso of ingresos){
        ingresosHtml += crearIngresoHtml(ingreso)
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHtml
    
}

const crearIngresoHtml = (ingreso)=>{
    let ingresosHtml= `
    <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${ingreso.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">+${formatoMoneda(ingreso.valor)}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn">
                                <ion-icon name="close-outline" onclick='eliminarIngreso(${ingreso.id})'></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
    `
    return ingresosHtml
}

const eliminarIngreso = (id)=>{
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id)
    ingresos.splice(indiceEliminar, 1)//dirve para eliminar splice, y el 1 para que solo se elimine un elemento
    cargarCabecero()
    cargarIngreso()
}

const cargarEgreso = ()=>{
    let egresosHtml = ''
    for(let egreso of egresos){
        egresosHtml += crearEgresosHtml(egreso)
    }
    document.getElementById('lista-egreso').innerHTML = egresosHtml
}

const crearEgresosHtml = (egreso)=>{
    let egresosHtml = `
        <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${egreso.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">-${formatoMoneda(egreso.valor)}</div>
                        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn">
                                <ion-icon name="close-outline" onclick='eliminarEgreso(${egreso.id})'></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
    `
    return egresosHtml
}

const eliminarEgreso = (id)=>{
    let indiceEliminarEgreso = egresos.findIndex(egreso => egreso.id === id)
    egresos.splice(indiceEliminarEgreso, 1)//dirve para eliminar splice, y el 1 para que solo se elimine un elemento
    cargarCabecero()
    cargarEgreso()
}

const agregarDato = ()=>{
    let form = document.forms['forma']
    let tipo = form['tipo']
    let descripcion = form['descripcion']
    let valor = form['valor']

    if(descripcion.value !== '' && valor.value!== ''){
        if(tipo.value === 'ingreso'){
            ingresos.push(new Ingreso(descripcion.value,Number(valor.value)))
            cargarCabecero()
            cargarIngreso()
        }
        else if(tipo.value === 'egreso'){
            egresos.push(new Egreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarEgreso();

        }
    }
}


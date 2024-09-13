# Explicación del Código

Este proyecto de control de presupuesto tiene como objetivo gestionar ingresos y egresos, mostrar el presupuesto disponible, el porcentaje de gastos, y permite agregar o eliminar entradas de ingresos y egresos.

#### **1. Clases `Datos`, `Ingreso`, y `Egreso`:**

-   **Clase `Datos`:**  
    La clase base que se usa tanto para `Ingreso` como para `Egreso`. Contiene dos propiedades: `descripcion` y `valor`. Se implementan métodos `get` y `set` para acceder y modificar estos valores.
    
-   **Clase `Ingreso`:**  
    Hereda de la clase `Datos` y añade una propiedad `id` única para cada ingreso. Esta `id` se genera mediante un contador estático que se incrementa cada vez que se crea un nuevo ingreso.
    
-   **Clase `Egreso`:**  
    Funciona de la misma manera que la clase `Ingreso`, pero para los egresos, utilizando también un contador estático para generar un `id` único para cada egreso.
    

#### **2. Variables Globales:**

-   **`ingresos` y `egresos`:**  
    Son arrays que contienen los objetos de tipo `Ingreso` y `Egreso`, respectivamente. Inicialmente, contienen algunos datos de prueba.

#### **3. Funciones Principales:**

-   **`cargarApp()`:**  
    Se ejecuta al cargar la aplicación. Llama a las funciones que cargan el resumen del presupuesto (`cargarCabecero()`) y las listas de ingresos y egresos.
    
-   **`totalIngresos()` y `totalEgresos()`:**  
    Calculan la suma total de los valores de ingresos y egresos, recorriendo sus respectivos arrays.
    
-   **`cargarCabecero()`:**  
    Muestra en el DOM el presupuesto total (ingresos - egresos) y el porcentaje de egresos respecto a los ingresos. Usa dos funciones de formato: `formatoMoneda()` y `formatoPorcentaje()` para mostrar los valores de manera legible.
    
-   **`formatoMoneda()` y `formatoPorcentaje()`:**  
    Estas funciones convierten los valores numéricos a formatos amigables, como moneda y porcentaje.
    

#### **4. Manejo de Ingresos y Egresos:**

-   **`cargarIngreso()` y `cargarEgreso()`:**  
    Estas funciones cargan las listas de ingresos y egresos, respectivamente, en el DOM. Utilizan las funciones `crearIngresoHtml()` y `crearEgresosHtml()` para generar el HTML necesario para cada elemento de la lista.
    
-   **`crearIngresoHtml()` y `crearEgresosHtml()`:**  
    Generan el HTML para cada ingreso o egreso con su respectivo valor y botón de eliminación.
    
-   **`eliminarIngreso()` y `eliminarEgreso()`:**  
    Permiten eliminar un ingreso o egreso al hacer clic en el botón correspondiente. La función busca el elemento por su `id` en el array y lo elimina usando `splice()`. Después, se actualizan el encabezado y la lista.
    

#### **5. Agregar Nuevos Ingresos y Egresos:**

-   **`agregarDato()`:**  
    Obtiene los valores del formulario (`descripcion`, `valor`, y `tipo`) para agregar un nuevo ingreso o egreso. Dependiendo del tipo seleccionado, agrega un nuevo objeto a los arrays correspondientes de ingresos o egresos y actualiza el encabezado y las listas.

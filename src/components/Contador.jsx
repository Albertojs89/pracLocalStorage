import { useState, useEffect } from "react";

 
   
const Boton = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    // 1. Recuperar el valor de localStorage
    const valorGuardado = localStorage.getItem('contador');

    // 2. Verificar si hay un valor guardado
    if (valorGuardado !== null) {
      // 3. Convertir el valor a número y actualizar el estado
      setContador(parseInt(valorGuardado));
    }
  }, []); // El array vacío [] asegura que esto solo se ejecute una vez

  const handleClick = () => {
    // 1. Actualizar el estado del contador
    setContador(contador + 1);

    // 2. Guardar el nuevo valor en localStorage
    localStorage.setItem('contador', contador + 1);
  };

  return <button onClick={handleClick}>Click me! {contador}</button>;
};

export default Boton;


/*
Explicación detallada:

useEffect:

localStorage.getItem('contador'): Intenta obtener el valor almacenado con la clave "contador".
valorGuardado !== null: Comprueba si se encontró un valor en localStorage. Si getItem no encuentra nada, devuelve null.
parseInt(valorGuardado): Convierte la cadena recuperada de localStorage a un número, ya que localStorage solo almacena cadenas.
setContador(parseInt(valorGuardado)): Actualiza el estado contador con el valor recuperado (y convertido a número).
[]: El array vacío como segundo argumento de useEffect indica que este efecto solo debe ejecutarse una vez, cuando el componente se monta por primera vez. Esto es importante para que solo intente cargar el valor inicial de localStorage una vez.
handleClick:

setContador(contador + 1): Incrementa el valor del contador.
localStorage.setItem('contador', contador + 1): Guarda el nuevo valor del contador en localStorage. Es importante guardar el valor después de actualizar el estado, y guardar el nuevo valor (contador + 1).
Ahora, con este código, el contador debería:

Al cargar la página por primera vez, intentar recuperar el valor de localStorage.
Si hay un valor guardado, inicializar el contador con ese valor.
Si no hay un valor guardado, inicializar el contador con 0 (como lo hace useState).
Cada vez que se haga clic en el botón, incrementar el contador y guardar el nuevo valor en localStorage.




*/
# Tarea 3 - Reproducción de video

# Índice
1. [Enunciado](#enunciado)
    - [Requisitos](#requisitos)
        1. [HTML](#1-html)
        2. [CSS](#2-css)
        3. [JavaScript](#3-javascript)
        4. [Mejoras Adicionales (Opcionales)](#4-mejoras-adicionales-opcional)
    - [Entrega](#entrega)
    - [Puntuación](#puntuación)
2. [Manual de Usuario](#manual-de-usuario)
   - [Documentación](#documentación)
   - [Cómo Usar](#como-usar)
     - [Reproducción](#reproducción)
     - [Volumen](#volumen)
     - [Visualización](#visualizacion)

---

# Enunciado

El objetivo de esta tarea es crear un reproductor musical básico utilizando HTML, CSS y JavaScript. El reproductor debe incluir las funcionalidades esenciales de control de la música, como reproducción, pausa, detención, control de volumen, muteo, visualización del tiempo de la pista, y debe ofrecer mejoras visuales e interactivas.

## Requisitos

### 1. HTML

- Crear la estructura básica del reproductor musical con etiquetas semánticas (por ejemplo, `<video>`, `<div>`, `<button>`, etc.).
- Incluir al menos un archivo de audio que se pueda reproducir en el reproductor.

### 2. CSS

- Diseñar una interfaz atractiva y funcional para el reproductor, con botones y controles bien organizados.
- Aplicar estilos para los botones de reproducción, pausa, stop, mute, volumen, y barra de progreso.
- Implementar efectos visuales o animaciones cuando se interactúa con los botones (por ejemplo, cambio de color al hacer clic o pasar el ratón sobre ellos).

### 3. JavaScript

- Implementar las siguientes funciones: 
    - Play: Al hacer clic en el botón de reproducción, el audio debe comenzar a sonar.
    - Pause: Al hacer clic en el botón de pausa, la música se detiene temporalmente.
    - Stop: Al hacer clic en el botón de stop, el audio debe detenerse y retroceder al inicio.
    - Mute: Al hacer clic en el botón de mute, el audio debe silenciarse o restaurarse a su volumen anterior.
    - Control de volumen: Implementar un control deslizante para aumentar o disminuir el volumen.
    - Barra de progreso: Mostrar el tiempo transcurrido y el tiempo restante de la pista mediante una barra de progreso interactiva.
    - Visualización del tiempo: Mostrar el tiempo actual y el tiempo total de la canción de manera clara y legible.

### 4. Mejoras adicionales (opcional)

- Incluir un diseño adaptativo (responsive) para que el reproductor se vea bien en dispositivos móviles.
- Implementar un control de velocidad de reproducción (puede ser opcional).
- Añadir la funcionalidad para poder cargar una lista de reproducción o cambiar entre varios videos.
- Integrar algún tipo de retroalimentación visual o sonora que indique cuándo la canción ha terminado (por ejemplo, cambiar el color del fondo, mostrar un mensaje, etc.).

## Entrega

Subir el archivo comprimido con los siguientes archivos:
- index.html
- style.css
- script.js
- Archivos de video utilizados (si es necesario).
- Otros…

## Puntuación

- Presentación y diseño: 2 ptos
- JavaScript:  
    - Estructura: 1 ptos
    - Eficiencia y funcionalidad: 3 ptos
    - Comentarios: 1 ptos
- Mejoras: 2 ptos
- Manual de usuario: 1 ptos (Portada descriptiva, índice standard, español e inglés, datos del autor y/o la empresa).

# Manual de usuario

## Documentación

Para acceder a la página de documentación del proyecto:
- `docs/index.html` para ver la página de "inicio" de la documentación
- `docs/global.html` para ver la página principal
- `docs/script.js.html` para ver el código del **Script**


## Como usar

El reproductor musical (con vídeo) contiene varios botones y otros elementos con los que interactuar

### Reproducción

- `Reanudar/Play` Si el vídeo está pausado, el botón de la izquierda será un botón de ***play*** (flecha derecha). Al pulsar este botón, el vídeo se empezará a reproducir.
- `Pausar` Si el vído se está reproduciendo, el botón de *play* será un botón de ***pause*** (2 barras verticales). Al pulsar este botón, el vídeo se pausará, al reanudarlo seguirá desde donde se pausó.
- `Parar/Stop` Este botón está situado a la derecha del *play/pause*. Al pulsar el botón de ***stop*** (cuadrado), el vídeo dejará de reproducirse, al volver a reproducirlo, este empezará desde el principio.

### Volumen
- `Silenciar/Mute` Si el vídeo no está silenciado, el botón lo indicará por su apariencia (bocina con sonido). Al pulsar este botón, el sonido del vídeo dejará de escucharse y el botón pasará a estar **tachado**.
- `Quitar Silencio/Unmute` Si el vídeo está silenciado, el botón estará tachado. Al pulsar este botón, el sonido volverá a escucharse al nivel establecido por la *barra de volumen* .
- `Barra de volumen` Puedes mover esta barra situada a la izquierda del botón de *silenciar* para modificar el voúmen de la canción.

### Visualizacion
- `Pantalla Completa` Si se pulsa este botón, situado a la derecha de la *barra de volumen*, el vídeo se reproducirá en pantalla completa. Para salir de este "modo" pulsar el botón que aparece abajo a la derecha (a la derecha del volumen en pantalla completa).
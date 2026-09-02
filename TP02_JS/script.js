// ===== Actividad 2: =====

let todos = JSON.parse(localStorage.getItem("todos")) || [];

const guardarTodos = () => {

    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );

};

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const lista = document.getElementById("todo-list");


// ===== Actividad 1: =====

const renderTodos = () => {

    lista.innerHTML = "";

    todos.forEach((todo) => {

        const item = document.createElement("li");

        const texto = document.createElement("span");

        texto.textContent = todo.texto;

        if (todo.completada) {

            texto.style.textDecoration = "line-through";

        }

        texto.addEventListener("click", () => {

            toggleTodo(todo.id);

        });

        const botonEliminar = document.createElement("button");

        botonEliminar.textContent = "Eliminar";

        botonEliminar.addEventListener("click", () => {

            eliminarTodo(todo.id);

        });

        item.append(texto);
        item.append(botonEliminar);

        lista.append(item);

    });

};

const agregarTodo = (texto) => {

    const nuevaTarea = {

        id: Date.now(),
        texto: texto,
        completada: false

    };

    todos.push(nuevaTarea);

    guardarTodos();

    renderTodos();

};

const eliminarTodo = (id) => {

    todos = todos.filter((todo) => {

        return todo.id !== id;

    });

    guardarTodos();

    renderTodos();

};

const toggleTodo = (id) => {

    const tarea = todos.find((todo) => {

        return todo.id === id;

    });


    if (tarea) {

        tarea.completada = !tarea.completada;

        guardarTodos();

        renderTodos();

    }

};

form.addEventListener("submit", (evento) => {

    evento.preventDefault();

    const texto = input.value.trim();

    if (texto !== "") {

        agregarTodo(texto);


        // Limpiar el input.
        input.value = "";

    }

});

renderTodos();
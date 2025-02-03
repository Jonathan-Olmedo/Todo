import './TodoCounter.css'

function TodoCounter({ completed, total }) {
    const todoCompleto = completed === total;

    return (
        <h1 className="TodoCounter">
            {todoCompleto ? (
                <>Has completado todos los TODOs 🎉</>
            ) : (
                <>Has completado <span>{completed}</span> de <span>{total}</span> TODOs</>
            )}
        </h1>
    );
}


export {TodoCounter}
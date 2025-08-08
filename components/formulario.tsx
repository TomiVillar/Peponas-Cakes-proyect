import { useState } from 'react';

type Props = {
onAgregar: (tarea: string) => void;
};

export default function Formulario({ onAgregar }: Props) {
const [texto, setTexto] = useState<string>("");

const manejarEnvio = () => {
    onAgregar(texto);     // Llama al padre con la tarea escrita
    setTexto("");         // Limpia el input
};

return (
    <div className="input-group mb-3">
    <input
        type="text"
        className="form-control"
        placeholder="Escribí una tarea"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
    />
    <button className="btn btn-primary" onClick={manejarEnvio}>
        Agregar
    </button>
    </div>
);
}

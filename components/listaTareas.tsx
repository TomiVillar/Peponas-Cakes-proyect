type Props = {
    tareas: string[];
};

export default function ListaTareas({ tareas }: Props) {
return (
    <ul className="list-group mt-4">
    {tareas.length === 0 ? (
        <li className="list-group-item text-muted">No hay tareas aún.</li>
    ) : (
        tareas.map((tarea, index) => (
            <li key={index} className="list-group-item">
                {tarea}
            </li>
            ))
        )}
    </ul>
);
}

//componente para evitar repetição de código

function Button(props) {
  return (
    <button className="bg-slate-400 text-white p-2 rounded-md" {...props}>
        {/* Carrega os atributos de dentro do componente */}{props.children}
    </button>
  );
}
export default Button;

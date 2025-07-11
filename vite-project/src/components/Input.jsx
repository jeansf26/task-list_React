
//Componente para evitar repetição de codigo

function Input(props) {
  return (
    <input
      className="border border-slate-400 px-4 py-2 rounded-md"
      //Carrega os outros atributos do componente
      {...props}
    />
  );
}
export default Input;
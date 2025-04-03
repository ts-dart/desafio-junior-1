export default function PetForm() {
  return (
      <section 
        className="bg-gradient-to-r from-[#001e4d] to-[#000814] absolute top-[100px] left-1/2 transform -translate-x-1/2 p-6 rounded-lg shadow-lg w-full max-w-2xl text-white z-50 border-2 border-[#00c9fb] shadow-[5px_5px_20px_5px_#00c9fb] p-6 rounded-lg"
      >
        {/* Cabeçalho */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <div className="flex items-center gap-2">
            <img src="" alt="Ícone" className="w-6 h-6" />
            <h1 className="text-lg font-semibold">Exemplo</h1>
          </div>
          <button className="text-red-500 text-lg">✖</button>
        </div>

        {/* Formulário */}
        <form className="grid grid-cols-2 gap-4 mb-4">
          <label className="flex flex-col">
            <p>Nome</p>
            <input type="text" className="bg-[#404a5c] p-3 rounded-lg text-white" placeholder="Nome Sobrenome" />
          </label>
          <label className="flex flex-col">
            <p>Dono</p>
            <input type="text" className="bg-[#404a5c] p-3 rounded-lg text-white" placeholder="Nome Sobrenome"/>
          </label>
          <label className="flex flex-col">
            <p>Telefone</p>
            <input type="text" className="bg-[#404a5c] p-3 rounded-lg text-white" placeholder="(00) 0 0000-0000"/>
          </label>
          <div className="flex flex-col">
            <p>Animal</p>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input type="radio" name="animal" value="cachorro" className="mr-2 bg-[#404a5c] p-6 rounded-lg text-white" /> Cachorro
              </label>
              <label className="flex items-center">
                <input type="radio" name="animal" value="gato" className="mr-2 bg-[#404a5c] p-6 rounded-lg text-white" /> Gato
              </label>
            </div>
          </div>
          <label className="flex flex-col">
            <p>Raça</p>
            <input type="text" className="bg-[#404a5c] p-3 rounded-lg text-white" placeholder="Raça"/>
          </label>
          <label className="flex flex-col">
            <p>Nascimento (Aproximado)</p>
            <input type="date" className="bg-[#404a5c] p-3 rounded-lg text-white" />
          </label>
        </form>

        {/* Rodapé */}
        <div className="text-center mb-2">
          <h1 className="text-lg font-semibold">Teste</h1>
        </div>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Salvar</button>
          <button className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">Cancelar</button>
        </div>
      </section>
  );
}

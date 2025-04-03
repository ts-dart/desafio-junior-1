import { Plus } from "lucide-react";
import PetForm from "./petForm";

export default function Header() {
  return (
    <header className="flex flex-col w-4/5 mx-auto p-4">
      {/*colocar uma logo aqui*/}
      <h1 className="text-white text-xl font-semibold mb-2">SoftPet</h1>
      <div className="flex justify-between items-center w-full">
        <div id="input" className="flex items-center border-3 border-[#404a5c] rounded-lg overflow-hidden w-2/3">
          <div
            id="icon"
            className="flex items-center justify-center px-2 py-2 shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="#404a5c"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1 0 3 10.5a7.5 7.5 0 0 0 13.65 6.15z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Buscar..."
            className="flex-1 px-4 py-2 outline-none"
          />
          <div className="p-1">
            <button className="text-white bg-[#404a5c] px-4 py-2 hover:opacity-80 rounded-full">
              Pesquisar
            </button>
          </div>
        </div>
        <button 
          onClick={() => {}}
          className="flex items-center gap-2 px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-[#00c0f9] to-[#0063e4] hover:opacity-90 transition"
        >
          <span className="flex items-center justify-center w-6 h-6 border border-white rounded-full">
            <Plus size={16} className="text-white" />
          </span>
          <span>Cadastrar</span>
        </button>
      </div>
    </header>
  );
}
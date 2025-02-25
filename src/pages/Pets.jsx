import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import Modal from '../components/Modal';
import Button from '../components/Button';
import InputField from '../components/InputField';

const petsData = [
  { id: '#5644', nome: 'Totó', raca: 'Golden', dono: 'João', telefone: '(85)999999999', observacoes: 'Problemas de pelagem' },
  { id: '#6112', nome: 'Pegasus', raca: 'Spitz', dono: 'José', telefone: '(85)999999999', observacoes: 'Alergia a ração de peixe' },
  { id: '#6141', nome: 'Cristal', raca: 'Chow-Chow', dono: 'Raimundo', telefone: '(85)999999999', observacoes: '' },
  { id: '#6535', nome: 'Shelby', raca: 'A684', dono: 'Francisco', telefone: '(85)999999999', observacoes: 'Sem Observações' },
  { id: '#6541', nome: 'Luke', raca: 'B464', dono: 'Maria', telefone: '(85)999999999', observacoes: 'Sem Observações' },
  { id: '#9846', nome: 'Yadrin', raca: 'C648', dono: 'José', telefone: '(85)999999999', observacoes: 'Sem Observações' },
  { id: '#4921', nome: 'Kiand', raca: 'D644', dono: 'Francisco', telefone: '(85)999999999', observacoes: 'Sem Observações' },
  { id: '#4921', nome: 'Kiand', raca: 'D644', dono: 'João', telefone: '(85)999999999', observacoes: 'Sem Observações' },
  { id: '#9841', nome: 'Turen', raca: 'B641', dono: 'Maria', telefone: '(85)999999999', observacoes: 'Sem Observações' },
  { id: '#9841', nome: 'Turen', raca: 'B641', dono: 'Raimundo', telefone: '(85)999999999', observacoes: 'Sem Observações' },
];

const Pets = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPet, setNewPet] = useState({
    nome: '',
    raca: '',
    dono: '',
    telefone: '',
    observacoes: '',
  });

  const itemsPerPage = 10;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPet(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Novo Pet', newPet);
    setIsModalOpen(false);
    setNewPet({ 
      nome: '',
      raca: '',
      dono: '',
      telefone: '',
      observacoes: '',
    });
  };


  const filteredPets = petsData.filter(pet =>
    pet.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPets.length / itemsPerPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <DashboardLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Pets</h1>
          <div className="flex gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Pesquisar por Nome do Pet"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg
                className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
              Filtrar
            </button>
            <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-brand-dark text-white rounded-md hover:bg-blue-900 transition-colors">
              Adicionar Pet
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4">ID do Pet</th>
                <th className="text-left py-3 px-4">Nome</th>
                <th className="text-left py-3 px-4">Raça do Pet</th>
                <th className="text-left py-3 px-4">Nome do Dono</th>
                <th className="text-left py-3 px-4">Número do Dono</th>
                <th className="text-left py-3 px-4">Observações</th>
                <th className="text-left py-3 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {filteredPets.map((pet, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-3 px-4">{pet.id}</td>
                  <td className="py-3 px-4">{pet.nome}</td>
                  <td className="py-3 px-4">{pet.raca}</td>
                  <td className="py-3 px-4">{pet.dono}</td>
                  <td className="py-3 px-4">{pet.telefone}</td>
                  <td className="py-3 px-4">{pet.observacoes || 'Sem Observações'}</td>
                  <td className="py-3 px-4">
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-6">
          <button
            className="px-4 py-2 text-gray-600 disabled:text-gray-400"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          <div className="flex gap-2">
            {pages.map(page => (
              <button
                key={page}
                className={`w-8 h-8 rounded-full ${
                  currentPage === page
                    ? 'bg-brand-dark text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            className="px-4 py-2 text-gray-600 disabled:text-gray-400"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Próximo
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Adicionar Novo Pet">
        <form onSubmit={handleSubmit} className='space-y-4'>
          <InputField
            label="Nome do Pet"
            name="nome"
            value={newPet.nome}
            onChange={handleInputChange}
          />
          <InputField
            label="Raça do Pet"
            name="raca"
            value={newPet.raca}
            onChange={handleInputChange}
          />
          <InputField
            label="Nome do Dono"
            name="dono"
            value={newPet.dono}
            onChange={handleInputChange}
          />
          <InputField
            label="Número do Dono"
            name="telefone"
            value={newPet.telefone}
            onChange={handleInputChange}
          />
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Observações
            </label>
            <textarea
              name="observacoes"
              value={newPet.observacoes}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
              rows="3"
            />
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
            >
              Cancelar
            </button>
            <Button type="submit">
              Salvar
            </Button>
          </div>
        </form>
      </Modal>
    </DashboardLayout>
  );
};

export default Pets;
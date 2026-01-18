import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Plus, Search, Filter } from 'lucide-react';
import DashboardHeader from '../../ui/Header/DashboardHeader';
import OffersOverview from '../../components/Offers/OffersOverview';
import OffersTable from '../../components/Offers/OffersTable';
import OfferModal from '../../components/Offers/OfferModal';
import AssignOfferModal from '../../components/Offers/AssignOfferModal';

const Offerslist = () => {
  const { isDarkMode, userRole } = useOutletContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const [offers, setOffers] = useState([
    { id: 1, title: 'Summer Health Checkup', code: 'SUMMER2024', type: 'Percentage', value: '20%', validity: '30 Jun 2024', status: 'Active', description: '20% off on all health packages.' },
    { id: 2, title: 'New User Bonus', code: 'WELCOME500', type: 'Flat Discount', value: '₹500', validity: '31 Dec 2024', status: 'Active', description: 'Flat 500 off for first time users.' },
    { id: 3, title: 'Senior Citizen Special', code: 'SENIOR15', type: 'Percentage', value: '15%', validity: '31 Dec 2024', status: 'Active', description: 'Special discount for senior citizens.' },
    { id: 4, title: 'Diabetic Care Promo', code: 'DIABETIC10', type: 'Percentage', value: '10%', validity: '15 May 2024', status: 'Expired', description: 'Discount on diabetic care packages.' },
  ]);

  const handleAddOffer = () => {
    setModalMode('add');
    setSelectedOffer(null);
    setIsModalOpen(true);
  };

  const handleEditOffer = (offer) => {
    setModalMode('edit');
    setSelectedOffer(offer);
    setIsModalOpen(true);
  };

  const handleAssignOffer = (offer) => {
    setSelectedOffer(offer);
    setIsAssignModalOpen(true);
  };

  const handleSaveOffer = (offerData) => {
    if (modalMode === 'add') {
      setOffers([...offers, { id: offers.length + 1, ...offerData, validity: offerData.endDate || 'N/A' }]);
    } else {
      setOffers(offers.map(o => o.id === selectedOffer.id ? { ...o, ...offerData, validity: offerData.endDate || o.validity } : o));
    }
  };

  const handleAssignSubmit = (data) => {
    console.log('Assigned Offer:', data);
    // API call would go here
  };

  const filteredOffers = offers.filter(offer => 
    offer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    offer.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <DashboardHeader 
        title="Offers & Discounts" 
        subtitle="Manage promotional offers and coupons."
        userRole={userRole}
        isDarkMode={isDarkMode}
      >
        <button 
          onClick={handleAddOffer}
          className="px-4 py-2 bg-[#1bd488] hover:bg-[#1bd488]/90 text-[#055b65] rounded-lg text-sm font-bold transition-colors shadow-lg shadow-[#1bd488]/20 flex items-center gap-2"
        >
          <Plus size={16} />
          Create Offer
        </button>
      </DashboardHeader>

      <OffersOverview isDarkMode={isDarkMode} />

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className={`relative w-full md:w-96`}>
          <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`} size={18} />
          <input 
            type="text" 
            placeholder="Search offers..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-10 pr-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${isDarkMode ? 'bg-[#022c33] border-[#45828b]/30 text-white' : 'bg-white border-slate-200 text-slate-900'}`}
          />
        </div>
        
        <button className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-colors ${isDarkMode ? 'bg-[#022c33] border-[#45828b]/30 text-white hover:bg-[#055b65]' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'}`}>
          <Filter size={18} />
          <span>Filters</span>
        </button>
      </div>

      <OffersTable 
        offers={filteredOffers} 
        isDarkMode={isDarkMode} 
        onEdit={handleEditOffer} 
        onAssign={handleAssignOffer}
      />

      <OfferModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSave={handleSaveOffer} 
        offer={selectedOffer} 
        mode={modalMode} 
        isDarkMode={isDarkMode} 
      />

      <AssignOfferModal 
        isOpen={isAssignModalOpen} 
        onClose={() => setIsAssignModalOpen(false)} 
        onAssign={handleAssignSubmit} 
        offer={selectedOffer} 
        isDarkMode={isDarkMode} 
      />
    </div>
  );
};

export default Offerslist;
import { useState } from "react";
import PageWrapper from '../components/PageWrapper';
import PageTitle from '../components/PageTitle';
import Card from '../components/Card';
import BuildingInfo from '../components/BuildingInfo';
import BuildingImage from '../assets/images/building.png';
import UserContacts from '../components/UserContacts';
import BlockTitle from '../components/BlockTitle';
import DetailsList from '../components/DetailsList';
import ClientFilesList from '../components/ClientFilesList';
import Vindication from '../components/Vindication';
import Table from '../components/Table';
import Button from '../components/Button';
import RightArrowIcon from '../assets/images/right-arrow.svg';
import SaleStatus from '../components/SaleStatus';
import BuildingIcon from '../assets/images/building.svg';
import WalletIcon from '../assets/images/wallet.svg';
import ReservationIcon from '../assets/images/reservations.svg';
import Modal from '../components/Modal';
import PaymentsTableHeader from "../components/PaymentsTableHeader";
import AddEditClient from "../components/AddEditClient";

const CUSTOMER_DETAILS = [
  {
    title: 'Liczba Lokali',
    value: 29,
  },
  {
    title: 'Liczba UP/UD',
    value: 0,
  },
  {
    title: 'Lokale Mieszkanowe',
    value: 25,
  },
  {
    title: 'Lokale Usługowe',
    value: '4',
  },
];

const CLIENT_FILES = [
  {
    type: 'pdf',
    name: 'Property-File.pdf',
    size: '2.4 MB',
  },
  {
    type: 'contact',
    name: 'Client-List.pdf',
    size: '1.6 MB',
  },
  {
    type: 'image',
    name: 'Property-Photo.pdf',
    size: '23.2 MB',
  },
  {
    type: 'map',
    name: 'Area-sqft.png',
    size: '2.3 MB',
  },
];

const VINDICATIONS_LIST = [
  {
    title: 'Przypomnienie o płatności',
    email: 'michaelminer@dayrep.com',
    price: '12 000 zł',
    status: {
      type: 'success',
      title: 'Wysłano',
      date: '11/10/24',
    },
  },
  {
    title: 'Przypomnienie o płatności',
    email: 'michaelminer@dayrep.com',
    price: '12 000 zł',
    status: {
      type: 'pending',
      title: 'Wysyłka',
      date: '24/10/24',
    },
  },
  {
    title: 'Przypomnienie o płatności',
    email: 'michaelminer@dayrep.com',
    price: '12 000 zł',
    status: {
      type: 'failed',
      title: 'Wysyłka nieudana',
      date: '25/10/24',
    },
  },
];

const TABLE_DATA = [
  {
    'LP.': '1',
    Mieszkanie: 'CO2',
    Powierzchnia: '1',
    'Nabywca 1/2': '1. Jan Nowak',
    'Kwota z AN': '1',
    Zapłacono: '1',
    Pozostało: '25 000 zł',
    Wypłacono: '1',
    'Opłata rezerwacyjna': '-',
    'Data zapłaty': '10/11/2024',
    Status: 'Zapłacono',
    Zwrócono: '-',
    'Data zwrotu': '-',
    'Przekazano na rachunek deweloperski': '-',
    'Data przekazania': '-',
    Komentarz: '-',
    'Wymagane wpłaty': '-',
    'Brakujące wpłaty': '-',
  },
  {
    'LP.': '2',
    Mieszkanie: 'CO2',
    Powierzchnia: '1',
    'Nabywca 1/2': '',
    'Kwota z AN': '1',
    Zapłacono: '1',
    Pozostało: '17 000 zł',
    Wypłacono: '1',
    'Opłata rezerwacyjna': '-',
    'Data zapłaty': '10/11/2024',
    Status: 'Windykacja',
    Zwrócono: '-',
    'Data zwrotu': '-',
    'Przekazano na rachunek deweloperski': '-',
    'Data przekazania': '-',
    Komentarz: '-',
    'Wymagane wpłaty': '-',
    'Brakujące wpłaty': '-',
  },
  {
    'LP.': '',
    Mieszkanie: 'CO2',
    Powierzchnia: '1',
    'Nabywca 1/2': '',
    'Kwota z AN': '1',
    Zapłacono: '1',
    Pozostało: '17 000 zł',
    Wypłacono: '1',
    'Opłata rezerwacyjna': '-',
    'Data zapłaty': '10/11/2024',
    Status: 'Po terminie',
    Zwrócono: '-',
    'Data zwrotu': '-',
    'Przekazano na rachunek deweloperski': '-',
    'Data przekazania': '-',
    Komentarz: '-',
    'Wymagane wpłaty': '-',
    'Brakujące wpłaty': '-',
  },
];

const TABLE_SUMMARY = {
  'Kwota z AN': 'zł',
  Zapłacono: 'zł',
  Pozostało: 'zł',
  Wypłacono: 'zł',
  'Opłata rezerwacyjna': 'zł',
  'Data zapłaty	': '-',
};

const TABLE_BILL = {
  Mieszkanie: 'Podsumowanie',
  Powierzchnia: 'Lokal 1',
  'Nabywca 1/2': 'Lokal 2',
};

const Payments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

 const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <PageWrapper>
      <PageTitle>Inwestycja - Płatności - Szczegóły</PageTitle>

      <div className="grid grid-cols-[1fr_447px] max-1400:grid-cols-1 gap-[13px] mt-[20px] items-start">
        <Card className="pt-[20px]">
          <BuildingInfo
            title="Kamienice Calisia"
            type="Inwestycja"
            imagePath={BuildingImage}
          />

          <UserContacts
            className="mt-[20px]"
            address="ul. Złota 20A, Kalisz"
            userName="Aleksander Dutkiewicz"
            phoneNumber="+48 791 689 248"
          />

          <DetailsList className="mt-[22px]" items={CUSTOMER_DETAILS} />

          <Button
            variant="flat"
            className="mt-[22px] text-[var(--maroon)] font-medium pl-0"
          >
            Więcej
            <img src={RightArrowIcon} width={15} height={15} alt="Więcej" />
          </Button>

          <div className="mt-[26px]">
            <BlockTitle>Status sprzedaży :</BlockTitle>

            <div className="flex flex-wrap mt-[20px] gap-2.5">
              <SaleStatus
                icon={BuildingIcon}
                title="Wszystkie"
                amount={29}
                maxAmount={29}
                fillColor="#47AD94D9"
              />
              <SaleStatus
                icon={WalletIcon}
                title="Sprzedane"
                amount={10}
                maxAmount={29}
                fillColor="#E1360DD9"
              />
              <SaleStatus
                icon={ReservationIcon}
                title="Rezerwacje"
                amount={19}
                maxAmount={29}
                fillColor="#027EF4D9"
              />
            </div>
          </div>

          <div className="mt-[22px]">
            <BlockTitle>Pliki Klienta:</BlockTitle>

            <ClientFilesList
              className="mt-[21px] max-768:grid max-768:grid-cols-2 max-500:grid-cols-1"
              files={CLIENT_FILES}
            />
          </div>
        </Card>

        <Vindication items={VINDICATIONS_LIST} />
      </div>

      <Table
        className="mt-[28px]"
        topContent={<PaymentsTableHeader onModalOpen={openModal} />}
        data={TABLE_DATA}
        summary={TABLE_SUMMARY}
        bill={TABLE_BILL}
        showTotalSecondary
        hasActions
      />

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddEditClient  />
      </Modal>
    </PageWrapper>
  );
};

export default Payments;

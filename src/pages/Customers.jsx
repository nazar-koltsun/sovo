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
    'Termin z AN': '-',
    '% Ceny brutto': '10%',
    Kwota: '-',
    Status: 'Windykacja',
    'Data zapłaty': '-',
    Zapłacono: '-',
    Pozostało: '-',
    Wypłacono: '-',
    Dnia: '-',
    'Kwota wypłacona': '-',
  },
  {
    'Termin z AN': '-',
    '% Ceny brutto': '10%',
    Kwota: '-',
    Status: 'Po terminie',
    'Data zapłaty': '-',
    Zapłacono: '-',
    Pozostało: '-',
    Wypłacono: '-',
    Dnia: '-',
    'Kwota wypłacona': '-',
  },
  {
    'Termin z AN': '-',
    '% Ceny brutto': '10%',
    Kwota: '-',
    Status: 'Zapłacono',
    'Data zapłaty': '-',
    Zapłacono: '-',
    Pozostało: '-',
    Wypłacono: '-',
    Dnia: '-',
    'Kwota wypłacona': '-',
  },
  {
    'Termin z AN': '-',
    '% Ceny brutto': '10%',
    Kwota: '-',
    Status: 'Do zapłaty',
    'Data zapłaty': '-',
    Zapłacono: '-',
    Pozostało: '-',
    Wypłacono: '-',
    Dnia: '-',
    'Kwota wypłacona': '-',
  },
];

const TABLE_SUMMARY = {
  'Termin z AN': 'Total',
  '% Ceny brutto': '100%',
  Kwota: '145 000 zł',
  Status: 'Status',
  'Data zapłaty': '-',
  Zapłacono: '120 000 zł',
  Pozostało: '21 000 zł',
  Wypłacono: '-',
  Dnia: '-',
  'Kwota wypłacona': '-',
};
const TABLE_BILL = { 'Termin z AN': 'Rachunek bankowy:', age: '-' };

const Payments = () => {
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
            {/* <div className="grid grid-cols-3 max-1600:grid-cols-2 max-1400:grid-cols-3 max-1200:grid-cols-2 max-600:grid-cols-1 mt-[20px] gap-2.5"> */}
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
        topContent={<BlockTitle>Harmonogram płatności</BlockTitle>}
        data={TABLE_DATA}
        summary={TABLE_SUMMARY}
        bill={TABLE_BILL}
        editable
      />
    </PageWrapper>
  );
};

export default Payments;

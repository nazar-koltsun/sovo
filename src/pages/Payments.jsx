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

const CUSTOMER_DETAILS = [
  {
    title: 'Umowa deweloperska',
    value: 'UM/WOK/2042/13',
  },
  {
    title: 'Data',
    value: '12/10/2023',
  },
  {
    title: 'Mieszkanie',
    value: 'CO2',
  },
  {
    title: 'Powierzchnia',
    value: '44,12 m2',
  },
];

const BUYERS_DETAILS = [
  [
    {
      title: 'Nabywca 1',
      value: 'Jan Nowak',
    },
    {
      title: 'Adres',
      value: 'ul. Kaszubska 4, Poznań',
    },
    {
      title: 'PESEL',
      value: '91080707741',
    },
  ],
  [
    {
      title: 'Nabywca 2',
      value: 'Jan Nowak',
    },
    {
      title: 'Adres',
      value: 'ul. Kaszubska 4, Poznań',
    },
    {
      title: 'PESEL',
      value: '91080707741',
    },
  ],
];

const CUSTOMER_OTHER_DETAILS = [
  {
    title: 'Cena netto',
    value: '145 000 zł',
  },
  {
    title: 'Cena brutto',
    value: '245 000 zł',
  },
  {
    title: 'Liczba rat',
    value: '9',
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
      <PageTitle>Klient - Szczegóły</PageTitle>

      <div className="grid grid-cols-[1fr_447px] gap-[13px] mt-[20px] items-start">
        <Card className="pt-[20px]">
          <BuildingInfo
            title="Kamienice Calisia"
            type="Inwestycja"
            imagePath={BuildingImage}
          />

          <UserContacts
            className="mt-[20px]"
            address="ul. Kaliska 1, Warszawa"
            userName="Jan Kowalski"
            phoneNumber="+48 123 456 789"
          />

          <div className="mt-[22px]">
            <BlockTitle>Szczegóły Klienta</BlockTitle>

            <DetailsList className="mt-3" items={CUSTOMER_DETAILS} />

            <div className="flex gap-4">
              {BUYERS_DETAILS.map((buyer, index) => (
                <DetailsList key={index} className="mt-3" items={buyer} />
              ))}
            </div>

            <DetailsList className="mt-3" items={CUSTOMER_OTHER_DETAILS} />
          </div>

          <div className="mt-[22px]">
            <BlockTitle>Pliki Klienta:</BlockTitle>

            <ClientFilesList className="mt-[21px]" files={CLIENT_FILES} />
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

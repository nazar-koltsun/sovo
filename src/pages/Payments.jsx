import PageWrapper from '../components/PageWrapper';
import PageTitle from '../components/PageTitle';
import Card from '../components/Card';
import BuildingInfo from '../components/BuildingInfo';
import BuildingImage from '../assets/images/building.png';
import UserContacts from '../components/UserContacts';
import BlockTitle from '../components/BlockTitle';
import DetailsList from '../components/DetailsList';
import ClientFilesList from '../components/ClientFilesList';

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

const Payments = () => {
  return (
    <PageWrapper>
      <PageTitle>Klient - Szczegóły</PageTitle>

      <div className="grid grid-cols-[1fr_447px] gap-[13px] mt-[20px]">
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
              {BUYERS_DETAILS.map((buyer) => (
                <DetailsList key={buyer.title} className="mt-3" items={buyer} />
              ))}
            </div>

            <DetailsList className="mt-3" items={CUSTOMER_OTHER_DETAILS} />
          </div>

          <div className="mt-[22px]">
            <BlockTitle>Pliki Klienta:</BlockTitle>

            <ClientFilesList className="mt-[21px]" files={CLIENT_FILES} />
          </div>
        </Card>

        <Card>Windykacja</Card>
      </div>
    </PageWrapper>
  );
};

export default Payments;

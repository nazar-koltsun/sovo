import PageWrapper from '../components/PageWrapper';
import PageTitle from '../components/PageTitle';
import Card from '../components/Card';
import BuildingInfo from '../components/BuildingInfo';
import BuildingImage from '../assets/images/building.png'

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

          
        </Card>

        <Card>Windykacja</Card>
      </div>
    </PageWrapper>
  );
};

export default Payments;

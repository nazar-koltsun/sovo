import Card from '../components/Card';
import BlockTitle from '../components/BlockTitle';
import VindicationList from '../components/VindicationList';
import VindicationStatus from '../components/VindicationStatus';

const Vindication = ({items}) => {
  return (
    <Card>
      <BlockTitle>Windykacja</BlockTitle>
      <VindicationList items={items} />
      <VindicationStatus className="mt-8" />
    </Card>
  );
};

export default Vindication;

import Button from './Button';

const BuildingInfo = ({ title, type, imagePath }) => {
  return (
    <div className="flex justify-between items-center gap-4 max-500:flex-col max-500:items-start">
      <div className="flex items-center">
        <img
          src={imagePath}
          alt={title}
          width={96}
          height={96}
          className="mr-[20px] rounded-full aspect-square"
        />

        <div>
          <h2 className="text-base font-medium text-[var(--arsenic)]">
            {title}
          </h2>
          <p className="text-[var(--electric-blue)]">{type}</p>
        </div>
      </div>

      <div className="flex justify-end max-1024:flex-col gap-[5px] max-500:flex-row max-500:w-full">
        <Button className="max-500:w-1/2">Akcja 1</Button>
        <Button variant="bordered" className="min-w-[150px] max-500:w-1/2">
          Akcja 2
        </Button>
      </div>
    </div>
  );
};

export default BuildingInfo;

import Button from './Button';

const BuildingInfo = ({ title, type, imagePath }) => {
  return (
    <div className="flex justify-between items-center gap-4">
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

      <div className="flex justify-end">
        <Button className="mr-[5px]">Akcja 1</Button>
        <Button variant="bordered" className="min-w-[150px]">Akcja 2</Button>
      </div>
    </div>
  );
};

export default BuildingInfo;

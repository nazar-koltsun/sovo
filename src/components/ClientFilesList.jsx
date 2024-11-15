import PdfIcon from '../assets/images/pdf.svg';
import ContactIcon from '../assets/images/clientFile.svg';
import ImageIcon from '../assets/images/image.svg';
import MapIcon from '../assets/images/map.svg';
import DownLoadIcon from '../assets/images/download.svg';

const getFileTypeIcon = (type) => {
  switch (type) {
    case 'pdf':
      return PdfIcon;
    case 'contact':
      return ContactIcon;
    case 'image':
      return ImageIcon;
    case 'map':
      return MapIcon;
    default:
      return null;
  }
};

const ClientFilesList = ({ files, className }) => {
  return (
    <ul className={`${className} flex gap-2.5 flex-wrap`}>
      {files.map((file, index) => (
        <li
          key={index}
          className="bg-[var(--lotion)] rounded-[6px] border border-[var(--bright-gray)] py-[11px] pr-[18px] pl-[13px] inline-flex items-center gap-[10px] hover:shadow-blockShadow cursor-pointer"
        >
          <img
            src={getFileTypeIcon(file.type)}
            width={24}
            height={24}
            alt="File Icon"
          />

          <div>
            <p className="font-medium text-[var(--arsenic)]">{file.name}</p>
            <p className="text-xs text-[var(--electric-blue)]">{file.size} KB</p>
          </div>

          <img className='ml-auto' src={DownLoadIcon} alt="Download Icon" />
        </li>
      ))}
    </ul>
  );
};

export default ClientFilesList;

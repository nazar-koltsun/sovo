import LocationIcon from '../assets/images/location.svg';
import UserIcon from '../assets/images/user.svg';
import PhoneIcon from '../assets/images/phone.svg';

const UserContact = ({ title, iconPath }) => {
  return (
    <div className="flex items-center gap-[5px]">
      <div className='flex justify-center items-center w-[20px] h-[20px]'>
        <img src={iconPath} alt="User" />
      </div>
      <p className="text-[var(--electric-blue)]">{title}</p>
    </div>
  );
};

const UserContacts = ({ address, userName, phoneNumber, ...props }) => {
  return (
    <div className={`space-y-2 ${props.className}`}>
      <UserContact title={address} iconPath={LocationIcon} />
      <UserContact title={userName} iconPath={UserIcon} />
      <UserContact title={phoneNumber} iconPath={PhoneIcon} />
    </div>
  );
};

export default UserContacts;

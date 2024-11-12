import Button from './Button';

import NotificationIcon from '../assets/images/notification.svg';
import SettingsIcon from '../assets/images/settings.svg';
import UserAvatar from '../assets/images/user-avatar.png';

const HeaderActions = () => {
  const baseBtnStyles = 'flex justify-center items-center pt-0 pb-0 pr-0 pl-0 hover:opacity-70';

  return (
    <div className="ml-auto flex gap-2">
      <Button
        className={`${baseBtnStyles} w-[40px] h-[52px] relative`}
        variant="flat"
      >
        <img src={NotificationIcon} width={20} height={22} alt="Notyfikacje" />
        <div className="absolute top-0 right-0 bg-[var(--pink)] text-white rounded-full w-[18px] h-4 flex justify-center items-center text-[10px]">
          3
        </div>
      </Button>

      <Button
        className={`${baseBtnStyles} w-[40px] h-[52px]`}
        variant="flat"
      >
        <img src={SettingsIcon} width={20} height={20} alt="Settings" />
      </Button>

      <Button
        className={`${baseBtnStyles} w-[48px] h-[48px]`}
        variant="flat"
      >
        <img src={UserAvatar} width={32} height={32} alt="User avatar" />
      </Button>
    </div>
  );
};

export default HeaderActions;

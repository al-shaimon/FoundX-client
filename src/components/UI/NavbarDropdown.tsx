'use client';

import { useUser } from '@/src/context/user.provider';
import { logout } from '@/src/services/AuthService';
import { Avatar } from '@nextui-org/avatar';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown';
import { useRouter } from 'next/navigation';
const NavbarDropdown = () => {
  const router = useRouter();

  const { user, setIsLoading: userLoading } = useUser();

  const handleLogout = () => {
    logout();
    userLoading(true);
  };

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar className="cursor-pointer" src={user?.profilePhoto} />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="profile" onClick={() => handleNavigation('/profile')}>
          Profile
        </DropdownItem>
        <DropdownItem key="about" onClick={() => handleNavigation('/profile/about')}>
          About
        </DropdownItem>
        <DropdownItem
          key="claim-request"
          onClick={() => handleNavigation('/profile/claim-requests')}
        >
          Claim Request
        </DropdownItem>
        <DropdownItem key="create-post" onClick={() => handleNavigation('/profile/create-post')}>
          Create Post
        </DropdownItem>
        <DropdownItem key="settings" onClick={() => handleNavigation('/profile/settings')}>
          Settings
        </DropdownItem>
        <DropdownItem
          key="logout"
          className="text-danger"
          color="danger"
          onClick={() => handleLogout()}
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavbarDropdown;

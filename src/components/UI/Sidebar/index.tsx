'use client';

import Loading from '@/src/components/UI/Loading';
import { adminLinks, userLinks } from '@/src/components/UI/Sidebar/constants';
import SidebarOptions from '@/src/components/UI/Sidebar/SidebarOptions';
import { useUser } from '@/src/context/user.provider';
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => {
  const { user } = useUser();

  return (
    <>
      {!user && <Loading />}
      <div className="rounded-xl bg-default-100 p-2">
        <div className="h-[330px] w-full rounded-md relative">
          {user?.profilePhoto ? (
            <Image
              alt="Profile picture"
              className="rounded-md"
              layout="fill"
              objectFit="cover"
              src={user?.profilePhoto}
            />
          ) : (
            <div className="h-[330px] w-full rounded-md bg-gray-200" />
          )}
        </div>

        <div className="my-3">
          <h1 className="text-2xl font-semibold">{user?.name}</h1>
          <p className="break-words text-sm">{user?.email}</p>
        </div>
        <Button as={Link} className="mt-2 w-full rounded-md" href={'/profile/create-post'}>
          Create a post
        </Button>
      </div>
      <div className="mt-3 space-y-2 rounded-xl bg-default-100 p-2">
        <SidebarOptions links={user?.role === 'USER' ? userLinks : adminLinks} />
      </div>
    </>
  );
};

export default Sidebar;

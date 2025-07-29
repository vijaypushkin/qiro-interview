'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/utils/ui.utils';

import { PoolIcon } from './icons/pool.icon';
import { PositionIcon } from './icons/position.icon';

import bellIcon from '@/assets/images/icons/bell.svg';
import userIcon from '@/assets/images/icons/user.svg';

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white border-b">
        <div className="flex items-center justify-between h-16 max-w-(--app-m-w) mx-auto px-4">
          <div className="flex items-center gap-6">
            <img src="/qiro.svg" alt="logo" className="h-6" />
            <nav className="flex items-center gap-4 h-6">
              <Link
                href={'/pools'}
                className={cn(
                  'flex items-center gap-1 text-sm font-medium text-black border-b-2 py-5',
                  pathname === '/pools'
                    ? 'border-purple-600'
                    : 'border-transparent',
                )}
              >
                <PositionIcon className="h-5 w-5" />
                Pools
              </Link>
              <Link
                href={'/positions'}
                className={cn(
                  'flex items-center gap-1 text-sm font-medium text-black border-b-2 py-5',
                  pathname === '/positions'
                    ? 'border-purple-600'
                    : 'border-transparent',
                )}
              >
                <PoolIcon className="h-5 w-5" />
                Position
              </Link>
            </nav>
          </div>

          {/* Right: Icons + Address + Avatar */}
          <div className="flex items-center gap-3">
            <button className="w-9 h-9 rounded-full border flex items-center justify-center">
              <Image
                src={bellIcon}
                alt="notification"
                className="h-5"
                width={20}
                height={20}
              />
            </button>
            <div className="flex items-center rounded-full border px-2 py-1 text-sm">
              <Image
                src={userIcon}
                alt="emoji avatar"
                className="h-5 w-5 mr-1"
                width={20}
                height={20}
              />
              0x48ce....ht56
            </div>
            <div className="w-9 h-9 rounded-full bg-[#6C76F8] text-white flex items-center justify-center text-sm font-semibold">
              TH
            </div>
          </div>
        </div>
      </header>
      <div className="h-16"></div>
    </>
  );
};

export { Header };

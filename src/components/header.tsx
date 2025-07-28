import { PoolIcon } from "./icons/pool.icon";
import { PositionIcon } from "./icons/position.icon";

const Header: React.FC = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white border-b">
        <div className="flex items-center justify-between h-16 max-w-(--app-m-w) mx-auto px-4">
          <div className="flex items-center gap-6">
            <img src="/qiro.svg" alt="logo" className="h-6" />
            <nav className="flex items-center gap-4">
              <button className="flex items-center gap-1 text-sm font-medium text-black border-b-2 border-purple-600">
                <PositionIcon className="h-5 w-5" />
                Pools
              </button>
              <button className="flex items-center gap-1 text-sm text-muted-foreground">
                <PoolIcon className="h-5 w-5" />
                Position
              </button>
            </nav>
          </div>

          {/* Right: Icons + Address + Avatar */}
          <div className="flex items-center gap-3">
            <button className="w-9 h-9 rounded-full border flex items-center justify-center">
              <img src="/image.svg" alt="notification" className="h-5" />
            </button>
            <div className="flex items-center rounded-full border px-2 py-1 text-sm">
              <img
                src="/image.svg"
                alt="emoji avatar"
                className="h-5 w-5 mr-1"
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

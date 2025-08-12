import LanguageSwitcher from "@/components/Header/LanguageSwitcher";
import State from "@/components/Header/State";

export default function HeaderLayout() {
  return (
    <>
      <header className="z-10 snap-start scroll-smooth">
        <nav>
          <ul className="flex gap-5 items-center justify-between py-4">
            {/* Estado */}
            <li className="flex items-center">
              <State />
            </li>

            {/* Lang Switcher */}
            <li className="flex space-x-4">
              <LanguageSwitcher />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

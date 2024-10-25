import Link from "next/link";
import { IoCafeOutline } from "react-icons/io5";

interface Props {
  value: string;
  subtitle?: string;
  title?: string;
  icon?: React.ReactNode;
  href?: string;
}

export const SimpleWidget = ({
  value,
  subtitle = "",
  title = "",
  icon = <IoCafeOutline size={50} className="text-blue-500" />,
  href = "#",
}: Props) => {
  return (
    <div className="bg-white shadow-xl p-3 sm:min-w-[25%] min-w-full  rounded-2xl border-1 border-gray-50">
      <div className="flex flex-col">
        <div>
          <h2 className="font-bold text-gray-600 text-center">{title}</h2>
        </div>
        <div className="my-3">
          <div className="flex flex-row items-center justify-center space-x-1 ">
            <div id="icon">{icon}</div>
            <div id="temp" className="text-center">
              <h4 className="text-4xl">{value}</h4>
              <p className="text-xs text-gray-500">{subtitle}</p>
            </div>
          </div>
        </div>

        <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
          <Link href={href} className="text-indigo-600 text-xs font-medium">
            Más
          </Link>
        </div>
      </div>
    </div>
  );
};

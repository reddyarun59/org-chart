import Image from "next/image";
import { IEmployee } from "@/types/IEmployee";
import { FiEdit2 } from "react-icons/fi";

interface IPersonProps {
  member: IEmployee | null;
  isDescendant?: boolean;
}

export const Card = ({ member }: IPersonProps) => {
  if (member === null) {
    return null;
  }

  const { name, designation, team } = member;

  return (
    <div
      className="border-t-4 py-4 px-2 inline-block rounded-md shadow-md border-t-purple-600 w-64"
      data-testid="person-container"
    >
      <div className="flex justify-end mx-4">
        <FiEdit2 />
      </div>
      <div className="flex mx-auto justify-center mt-2 mb-4">
        <Image src="avatar.svg" alt="avatar" width={60} height={60} />
      </div>
      <p className="text-sm text-gray-800">{name}</p>
      <div className="flex item-center mx-4 mt-4">
        <div className="bg-purple-600/20 px-3.5 py-0.5 rounded-sm text-xs flex items-center font-medium text-gray-800">
          ROLE
        </div>
        <div className="mx-2 text-xs flex items-center text-gray-800/70">
          {designation}
        </div>
      </div>
      <div className=" flex item-center  my-2 mx-4">
        <div className="bg-purple-600/20 px-3.5 p-0.5 rounded-sm text-xs flex items-center font-medium text-gray-800">
          ROLE
        </div>
        <div className="mx-2 text-xs flex items-center text-gray-800/70">
          {team}
        </div>
      </div>
    </div>
  );
};

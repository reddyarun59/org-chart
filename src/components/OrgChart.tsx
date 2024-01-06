import { Card } from "@/components/Card";
import { useEmployeeTree } from "./EmployeeTreeProvider";
import { IEmployee } from "@/types/IEmployee";

interface SubEmployeeTreeProps {
  rootMember: IEmployee;
  level?: number;
}

const SubEmployeeTree = ({ rootMember, level = 0 }: SubEmployeeTreeProps) => {
  const renderCouple = () => (
    <div className="border rounded-md inline-block">
      <Card member={rootMember} />
    </div>
  );

  const renderChildren = () => (
    <ul
      key={rootMember.name}
      className="pt-14 relative flex flex-row items-baseline justify-center"
    >
      {rootMember?.subordinates?.map((member) => (
        <SubEmployeeTree
          rootMember={member}
          level={level + 1}
          key={member.name}
        />
      ))}
    </ul>
  );

  return (
    <li className="float-left list-none relative pt-14 px-2">
      {renderCouple()}
      {rootMember?.subordinates.length > 0 && renderChildren()}
    </li>
  );
};

const OrgChart = () => {
  const { root } = useEmployeeTree();

  return (
    <div
      className="tree whitespace-nowrap absolute top-0 py-20"
      data-testid="employee-tree-root"
    >
      <div className="w-full mx-auto text-4xl mb-20 ">
        Organisation Chart 💻
      </div>

      <ul className="relative flex flex-row items-baseline justify-center">
        <SubEmployeeTree rootMember={root} />
      </ul>
    </div>
  );
};

export default OrgChart;

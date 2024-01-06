import { IEmployee } from "@/types/IEmployee";
import { employees } from "@/utils";
import { ReactNode, createContext, useContext, useState } from "react";

interface OnbardingContextValue {
  root: IEmployee;
}

const EmployeeTreeContext = createContext({} as OnbardingContextValue);

export const EmployeeTreeProvider = ({ children }: { children: ReactNode }) => {
  function buildHierarchyTree(
    employees: {
      name: string;
      email: string;
      designation: string;
      reporting_manager?: string;
      team: string;
    }[],
    managerEmail = null
  ) {
    const findEmployee = (email: string) =>
      employees.find((employee) => employee.email === email);

    const createMember: any = (email: string) => {
      const employee = findEmployee(email);
      const subordinateEmails = employees
        .filter((emp) => emp.reporting_manager === email)
        .map((sub) => sub.email);
      const subordinates = subordinateEmails.map((subEmail) =>
        createMember(subEmail)
      );

      return {
        name: employee?.name,
        email: employee?.email,
        designation: employee?.designation,
        reporting_manager: employee?.reporting_manager,
        team: employee?.team,
        subordinates: subordinates,
      };
    };

    // Find the employee without a reporting manager (root of the tree)
    const rootEmployee = employees.find(
      (employee) => !employee.reporting_manager
    );

    // Building the hierarchy tree starting from the root employee
    return createMember(rootEmployee?.email);
  }

  // Generating the hierarchical tree
  const hierarchyTree = employees && buildHierarchyTree(employees);

  console.log(JSON.stringify(hierarchyTree, null, 2));
  const value = {
    root: hierarchyTree,
  };
  return (
    <EmployeeTreeContext.Provider value={value}>
      {children}
    </EmployeeTreeContext.Provider>
  );
};

export const useEmployeeTree = (): OnbardingContextValue => {
  const context = useContext(EmployeeTreeContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};

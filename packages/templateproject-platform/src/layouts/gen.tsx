import { useNavigate } from "react-router-dom";

export function genBreadcrumbItems(pathname: string) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const nav = useNavigate();
  if (pathname.includes("overview")) {
    return [
      {
        title: <span className={"cursor-pointer"}>Project</span>,
        onClick() {
          nav("/project");
        },
      },
      {
        title: "Overview",
      },
    ];
  } else if (pathname.includes("commits")) {
    return [
      {
        title: <span className={"cursor-pointer"}>Project</span>,
        onClick() {
          nav("/project");
        },
      },
      {
        title: <span className={"cursor-pointer"}>Overview</span>,
        onClick() {
          const regex = /\/project\/(\d+)\//;
          const match = pathname.match(regex);
          if (match) {
            const projectId = match[1];
            nav(`/project/${projectId}/overview`);
          } else {
            console.log("未找到匹配的项目ID");
          }
        },
      },
      {
        title: "Coverage Details",
      },
    ];
  } else {
    return [];
  }
}

import Icon, {
  DashboardOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useQuery } from "@apollo/client";
import type { MenuProps } from "antd";
import { Avatar, Breadcrumb, Dropdown, Layout, Menu, Space } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";

import ClarityTagSolid from "~icons/clarity/tag-solid";
import IonLanguage from "~icons/ion/language";
import routes from "~react-pages";

// import { MeDocument } from '../helpers/backend/gen/graphql.ts';
import { genBreadcrumbItems } from "./gen.tsx";
import Sv from "./Sv";
const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "dashboard", <DashboardOutlined />),
  getItem("Members", "members", <Icon component={Sv} />),
];

const App: React.FC = () => {
  const nav = useNavigate();
  // const { data: meData } = useQuery(MeDocument);

  const defaultSelectedKeys = (() => {
    if (localStorage.getItem("main-selectedKeys")) {
      return localStorage.getItem("main-selectedKeys") === "true";
    } else {
      localStorage.setItem("main-selectedKeys", "false");
      return false;
    }
  })();
  const [collapsed, setCollapsed] = useState(defaultSelectedKeys);
  useEffect(() => {
    localStorage.setItem("main-selectedKeys", collapsed.toString());
  }, [collapsed]);
  const loc = useLocation();
  const mode = ["/register", "/login"].includes(loc.pathname);
  const r = useRoutes(routes);

  const selectedKey = useMemo(() => {
    if (loc.pathname === "/") {
      return "dashboard";
    } else {
      return loc.pathname.replace("/", "");
    }
  }, [loc.pathname]);

  // {
  //   key: 'settings',
  //     label: <a>个人设置</a>,
  //   icon: <SettingOutlined />,
  // },
  // {
  //   key: '3',
  //     type: 'divider',
  //   // label: '退出登录',
  //   // icon:<LogoutOutlined/>
  // },
  // {
  //   key: 'logout',
  //     label: '退出登录',
  //   icon: <LogoutOutlined />,
  // },

  const dropdownItems = [
    getItem("个人设置", "settings", <SettingOutlined />),
    {
      key: "3",
      type: "divider",
    },
    getItem("登出", "logout", <LogoutOutlined />),
  ];
  const dropdownItems2 = [
    {
      key: "zh",
      label: "🇨🇳 简体中文",
    },
    {
      key: "en",
      label: "🇺🇸 English",
    },
  ];
  const dropdownClick = ({ key }: any) => {
    if (key === "logout") {
      localStorage.clear();
      window.location.href = "/welcome";
    }
    if (key === "settings") {
      // window.location.href = '/settings';
      nav(`/settings`);
    }
  };
  return (
    <div>
      {!mode ? (
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            <div
              className={`flex items-center px-[16px] py-[10px] ${
                collapsed ? "justify-center" : ""
              } cursor-pointer`}
              onClick={() => {
                nav("/");
              }}
            >
              <div>
                <img className={"w-[28px]"} src="/light-logo.svg" alt="" />
              </div>
              {!collapsed && (
                <span className={"text-xl text-white ml-3"}>AREXTEST</span>
              )}
            </div>
            <Menu
              onSelect={(selectInfo) => {
                if (selectInfo.key === "dashboard") {
                  nav("/");
                } else {
                  nav(selectInfo.key);
                }
              }}
              theme="dark"
              selectedKeys={[selectedKey]}
              mode="inline"
              items={items}
            />
          </Sider>
          <Layout>
            <header className={"h-[48px] bg-white flex justify-between px-5"}>
              <div>
                {/*<div>{JSON.stringify(loc)}</div>*/}
                <Breadcrumb
                  className={"ml-3 mt-3"}
                  items={genBreadcrumbItems(loc.pathname)}
                />
              </div>

              <div className={"right flex gap-2"}>
                <div
                  className={
                    "flex items-center cursor-pointer hover:bg-[rgb(0,0,0,.025)] px-2"
                  }
                >
                  <QuestionCircleOutlined />
                </div>

                <div
                  className={
                    "flex items-center cursor-pointer hover:bg-[rgb(0,0,0,.025)] px-2"
                  }
                  onClick={() => {
                    window.open(`https://github.com/canyon-project/canyon`);
                  }}
                >
                  <Icon component={ClarityTagSolid} />
                </div>

                <Dropdown
                  menu={{ items: dropdownItems, onClick: dropdownClick }}
                >
                  <Space
                    className={
                      "flex items-center cursor-pointer hover:bg-[rgb(0,0,0,.025)] px-2"
                    }
                    onClick={(e) => e.preventDefault()}
                  >
                    {/*<Avatar src={meData?.me.avatar} />*/}
                    {/*<span>{meData?.me.nickname}</span>*/}
                  </Space>
                </Dropdown>

                <Dropdown
                  menu={{
                    items: dropdownItems2,
                    onClick: dropdownClick,
                    activeKey: "en",
                  }}
                >
                  <Space
                    className={"cursor-pointer hover:bg-[rgb(0,0,0,.025)] px-2"}
                    onClick={(e) => e.preventDefault()}
                  >
                    <Icon component={IonLanguage} style={{ fontSize: 18 }} />
                  </Space>
                </Dropdown>
              </div>
            </header>
            <Content style={{ margin: "0 0" }}>
              <div style={{ padding: 24, minHeight: 360 }}>{r}</div>
            </Content>
          </Layout>
        </Layout>
      ) : (
        r
      )}
    </div>
  );
};

export default App;

import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "components";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "state/api";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId);

  const [isOpenSidebar, setIsOpenSidebar] = useState(true);

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isOpen={isOpenSidebar}
        onChangeOpenSidebar={setIsOpenSidebar}
      />

      <Box flexGrow={1}>
        <Navbar user={data || {}} onChangeSidebar={setIsOpenSidebar} />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;

import React, { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { GlobalLoading, Navbar, Sidebar } from "components";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserQuery } from "store/api";
import { setIsShowGlobalLoading } from "store";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const userId = useSelector((state) => state.global.userId);
  const { data, isLoading } = useGetUserQuery(userId);
  const dispatch = useDispatch();

  const [isOpenSidebar, setIsOpenSidebar] = useState(true);

  useEffect(() => {
    if (isLoading) {
      dispatch(setIsShowGlobalLoading(true));
    } else {
      dispatch(setIsShowGlobalLoading(false));
    }
  }, [isLoading, dispatch]);

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <GlobalLoading />
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

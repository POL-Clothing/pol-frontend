import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";
import Link from "next/link";
import Sticky from "react-sticky-el";
import { HeaderProps } from "./types";
import { useAuth } from "../../config/auth";
import { MyLogo } from "../Layout/Layout";
import SearchBar from "../SearchBar";
import { MainMenu } from "../MainMenu";
import { menusData } from "../MainMenu/data/menusData";
import { Cart } from "../Cart/Cart";

import {
  TopHeader,
  RightSide,
  LogoDiv,
  HeaderDiv,
  LinkDiv,
  BottomHeader,
  Category,
  UserIconMo,
  CartMo,
  HeaderAccount,
  HeaderOptions,
  ArrowDown,
  ShoppingCart,
  FavoriteIcon
} from "./Header.styles";

const dummyCategories = ["Best Sellers", "Latest", "Seasonal", "Luxury", "On Sale", "Coming Soon"];

export const Header: React.FC<HeaderProps> = (props) => {
  const { pathname } = useRouter();
  const { user, logout } = useAuth();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [cartVisible, setCartVisible] = React.useState(false);
  const toggleCart = () => setCartVisible((isVisible) => !isVisible);

  const isMaint = process.env.IS_MAINT_MODE;

  if (isMaint && isMaint === "true") {
    return null;
  }

  useEffect(() => {
    console.log(user && user.data.attributes);
  }, []);

  return (
    <HeaderDiv>
      <TopHeader>
        <LogoDiv>
          <Link href="/">
            <LinkDiv isActive>
              <MyLogo imageFile="/logo.png" isDark />
            </LinkDiv>
          </Link>
        </LogoDiv>
        <RightSide>
          {isMobile ? null : <SearchBar />}
          {user ? (
            <HeaderAccount>
              <div>{user.data.attributes.email}</div>
              <UserIconMo src={"/user.png"} />
              <ArrowDown />
              <FavoriteIcon />
              <button onClick={logout}>LOGOUT</button>
            </HeaderAccount>
          ) : (
            <HeaderOptions>
              <Link href="/authenticate/login">
                <LinkDiv isActive={pathname === "/authenticate/login"}>LOG IN</LinkDiv>
              </Link>
              <Link href="/authenticate/signup">
                <LinkDiv isActive={pathname === "/authenticate/signup"}>SIGN UP</LinkDiv>
              </Link>
            </HeaderOptions>
          )}
          <Cart isVisible={cartVisible} toggle={toggleCart} />
        </RightSide>
      </TopHeader>
    </HeaderDiv>
  );
};

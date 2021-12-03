import styled from "@emotion/styled";
import { pxIphone } from "../../utils";

type LogoType = {
  src: string;
  isDark: boolean;
};

export const LayoutContainer = styled.main`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  max-height: calc(100% - 235px);
  overflow: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const LayoutContent = styled.div`
  width: 100%;
  flex: 1;
  overflow: scroll;
`;

export const Logo = styled.img<LogoType>`
  width: 181px;
  height: auto;
  margin-bottom: 20px;
  ${(p) => (p.isDark ? "filter: invert(1);" : null)};
  box-shadow: 0 10px 22px rgba(255, 255, 255, 0.1);
  @media (max-width: 375px) {
    width: ${pxIphone(80)};
    margin-bottom: 14.68vw;
    height: auto;
  }
  @media (max-width: 750px) {
    margin-bottom: 0;
    margin-top: 6px;
  }
`;

export const CameraIcon = styled.img`
  width: 11px;
  height: auto;
  margin-right: 3.88px;
  @media (max-width: 375px) {
    width: 5.522vw;
    height: auto;
    margin-right: 2.069vw;
  }
  @media (max-width: 750px) {
    width: 5.522vw;
    height: auto;
    margin-right: 2.069vw;
  }
`;

export const FacebookIcon = styled.img`
  width: 6.81px;
  height: auto;
  margin-right: 3.88px;
  @media (max-width: 375px) {
    width: 3.634vw;
    height: auto;
    margin-right: 2.069vw;
  }
  @media (max-width: 750px) {
    width: 3.634vw;
    height: auto;
    margin-right: 2.069vw;
  }
`;

export const PlayIcon = styled.img`
  width: 12.29px;
  height: auto;
  margin-right: 3.88px;
  @media (max-width: 375px) {
    width: 6.557vw;
    height: auto;
    margin-right: 2.069vw;
  }
  @media (max-width: 750px) {
    width: 6.557vw;
    height: auto;
    margin-right: 2.069vw;
  }
`;

export const CircleIcon = styled.img`
  width: 10.35px;
  height: auto;
  @media (max-width: 375px) {
    width: 5.522vw;
    height: auto;
  }
  @media (max-width: 750px) {
    width: 5.522vw;
    height: auto;
  }
`;

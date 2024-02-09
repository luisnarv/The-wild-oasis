import styled from "styled-components";
import MainNav from "./MainNav";
import Logo from "./Logo";
// import Uploader from "../data/Uploader";

const StyleSideBar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 3px solid var(--color-grey-100);

  grid-row: 1 / -1;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export default function SideBar() {
  return (
    <StyleSideBar>
      <Logo />
      <MainNav />

      {/* <Uploader /> */}
    </StyleSideBar>
  );
}

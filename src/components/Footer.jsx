import { LinkX, SmallLogo, Content, AppFooter } from "./styles/App";

export function Footer() {
  return (
    <AppFooter>
      <SmallLogo>Logo</SmallLogo>
      <Content>
        <LinkX to="/contact-us">Contact Us</LinkX>
        <LinkX to="/terms-and-conditions">Terms and Conditions</LinkX>
        <LinkX to="/privacy_policy">Privacy policy</LinkX>
      </Content>
      <p>@fleets All Right Reserverd 2021</p>
    </AppFooter>
  );
}

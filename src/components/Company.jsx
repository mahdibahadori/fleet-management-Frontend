import { LoggedInNavBar } from "./LoggedInNavBar";
import { SideNavBars } from "./SideNavBars";
import { CompanyPage, Section } from "./styles/App";
import { Footer } from "./Footer";

export function Company() {
  return (
    <div>
      <CompanyPage>
        <SideNavBars />
        <Section>
          <LoggedInNavBar />
        </Section>
      </CompanyPage>
      <Footer />
    </div>
  );
}

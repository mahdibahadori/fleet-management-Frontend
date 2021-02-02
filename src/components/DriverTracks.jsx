import { LoggedInNavBar } from "./LoggedInNavBar";
import { SideNavBars } from "./SideNavBars";
import { CompanyPage, Section } from "./styles/App";
import { TracksDiv, Tracks, TracksText} from "./styles/App";
import { MainContent } from "./styles/Form";
import {Footer} from "./Footer"

export function DriverTracks() {
  return (
    <>
    <CompanyPage>
      <SideNavBars />
      <Section>
        <LoggedInNavBar />
        <MainContent>
        <hr style={{ width: "95%", opacity: ".4" }} />
        <h2
          style={{
            textAlign: "right",
            marginBottom: "20px",
            fontFamily: "sans-serif",
            fontSize: "30px",
            color: "grey",
            paddingRight: '84px'
          }}
        >
          Tracks
        </h2>
          <h2
            style={{
              textAlign: "left",
              marginTop: "30px",
              fontFamily: "sans-serif",
              fontSize: "30px",
              paddingLeft: '84px',
              color:"skyblue"
            }}
          >
            Driver's Name:
          </h2>
          <TracksDiv>
            <Tracks>
              <TracksText>Date:</TracksText>
              <TracksText>Vehicle Rego:</TracksText>
              <TracksText>Track Number:</TracksText>
            </Tracks>
            <Tracks>
              <TracksText>Date:</TracksText>
              <TracksText>Vehicle Rego:</TracksText>
              <TracksText>Track Number:</TracksText>
            </Tracks>
            <Tracks>
              <TracksText>Date:</TracksText>
              <TracksText>Vehicle Rego:</TracksText>
              <TracksText>Track Number:</TracksText>
            </Tracks>
            <Tracks>
              <TracksText>Date:</TracksText>
              <TracksText>Vehicle Rego:</TracksText>
              <TracksText>Track Number:</TracksText>
            </Tracks>
            <Tracks>
              <TracksText>Date:</TracksText>
              <TracksText>Vehicle Rego:</TracksText>
              <TracksText>Track Number:</TracksText>
            </Tracks>
            <Tracks>
              <TracksText>Date:</TracksText>
              <TracksText>Vehicle Rego:</TracksText>
              <TracksText>Track Number:</TracksText>
            </Tracks>
            <Tracks>
              <TracksText>Date:</TracksText>
              <TracksText>Vehicle Rego:</TracksText>
              <TracksText>Track Number:</TracksText>
            </Tracks>
            <Tracks>
              <TracksText>Date:</TracksText>
              <TracksText>Vehicle Rego:</TracksText>
              <TracksText>Track Number:</TracksText>
            </Tracks>
            <Tracks>
              <TracksText>Date:</TracksText>
              <TracksText>Vehicle Rego:</TracksText>
              <TracksText>Track Number:</TracksText>
            </Tracks>
          </TracksDiv>
        </MainContent>
      </Section>
    </CompanyPage>
      <Footer />
    </>
  );
}

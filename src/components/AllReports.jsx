import { LoggedInNavBar } from "./LoggedInNavBar";
import { SideNavBars } from "./SideNavBars";
import {
  CompanyPage,
  Section,
  TracksDiv,
  Tracks,
  TracksText,
  Div
} from "./styles/App";
import {
  MainContent,
  ReportForm,
  ReportFormGroup,
  FormLabel,
  ReportFormInput,
  SubmitInput1,
  FormSelect,
} from "./styles/Form";
import {Footer} from './Footer'

export function AllReports() {
  const letters = ["A", "B", "C", "D"];

  return (
    <>
      <CompanyPage>
        <SideNavBars />
        <Section>
          <LoggedInNavBar />
          <MainContent>
            <hr style={{ width: "95%", opacity: ".4" }} />
            <ReportForm>
              <ReportFormGroup>
                <FormLabel htmlFor="ReportsByDate">Reports by date</FormLabel>
                <ReportFormInput
                  type="date"
                  name="ReportsByDate"
                  id="ReportsByDate"
                  placeholder="1"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </ReportFormGroup>

              <ReportFormGroup>
                <FormLabel htmlFor="ReportsByVehicle">
                  Reports by vehicle
                </FormLabel>
                <FormSelect
                  type="text"
                  name="company"
                  id="companyName"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                >
                  {letters.map((letter) => {
                    return (
                      <option key={letters.indexOf(letter)} value={letter}>
                        {letter}
                      </option>
                    );
                  })}
                </FormSelect>
              </ReportFormGroup>
              <SubmitInput1
                id="submit"
                type="submit"
                value="Find reports"
                style={{ width: "20%", marginBottom: "34px" }}
              />
            </ReportForm>
            <hr style={{ width: "95%", opacity: ".4" }} />
            <TracksDiv>
              <Div>
                <h3
                  style={{
                    marginBottom: "0px",
                    paddingLeft: "5px",
                    fontFamily: "sans-serif",
                    fontWeight: "400",
                  }}
                >
                  Reported by:{" "}
                </h3>
                <h3 style={{marginLeft:"70%", fontFamily:"sans-serif", fontWeight:"400"}}>Date:</h3>
              </Div>
              <Tracks>
                <TracksText>Vehicle Rego:</TracksText>
                <TracksText>Description:</TracksText>
              </Tracks>
              <Div>
                <h3
                  style={{
                    marginBottom: "0px",
                    paddingLeft: "5px",
                    fontFamily: "sans-serif",
                    fontWeight: "400",
                  }}
                >
                  Reported by:{" "}
                </h3>
                <h3 style={{marginLeft:"70%", fontFamily:"sans-serif", fontWeight:"400"}}>Date:</h3>
              </Div>
              <Tracks>
                <TracksText>Vehicle Rego:</TracksText>
                <TracksText>Description:</TracksText>
              </Tracks>
              <Div>
                <h3
                  style={{
                    marginBottom: "0px",
                    paddingLeft: "5px",
                    fontFamily: "sans-serif",
                    fontWeight: "400",
                  }}
                >
                  Reported by:{" "}
                </h3>
                <h3 style={{marginLeft:"70%", fontFamily:"sans-serif", fontWeight:"400"}}>Date:</h3>
              </Div>
              <Tracks>
                <TracksText>Vehicle Rego:</TracksText>
                <TracksText>Description:</TracksText>
              </Tracks>
              <Div>
                <h3
                  style={{
                    marginBottom: "0px",
                    paddingLeft: "5px",
                    fontFamily: "sans-serif",
                    fontWeight: "400",
                  }}
                >
                  Reported by:{" "}
                </h3>
                <h3 style={{marginLeft:"70%", fontFamily:"sans-serif", fontWeight:"400"}}>Date:</h3>
              </Div>
              <Tracks>
                <TracksText>Vehicle Rego:</TracksText>
                <TracksText>Description:</TracksText>
              </Tracks>
              <Div>
                <h3
                  style={{
                    marginBottom: "0px",
                    paddingLeft: "5px",
                    fontFamily: "sans-serif",
                    fontWeight: "400",
                  }}
                >
                  Reported by:{" "}
                </h3>
                <h3 style={{marginLeft:"70%", fontFamily:"sans-serif", fontWeight:"400"}}>Date:</h3>
              </Div>
              <Tracks>
                <TracksText>Vehicle Rego:</TracksText>
                <TracksText>Description:</TracksText>
              </Tracks>
              <Div>
                <h3
                  style={{
                    marginBottom: "0px",
                    paddingLeft: "5px",
                    fontFamily: "sans-serif",
                    fontWeight: "400",
                  }}
                >
                  Reported by:{" "}
                </h3>
                <h3 style={{marginLeft:"70%", fontFamily:"sans-serif", fontWeight:"400"}}>Date:</h3>
              </Div>
              <Tracks>
                <TracksText>Vehicle Rego:</TracksText>
                <TracksText>Description:</TracksText>
              </Tracks>
            </TracksDiv>
          </MainContent>
        </Section>
      </CompanyPage>
      <Footer />
    </>
  );
}

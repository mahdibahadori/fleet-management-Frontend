import {LoggedInNavBar} from './LoggedInNavBar'
import {SideNavBars} from './SideNavBars'
import {CompanyPage, Section} from './styles/App'


export function Company(){
    return (
        <CompanyPage>
            <SideNavBars />
            <Section>
                <LoggedInNavBar />                
                
            </Section>         
        </CompanyPage>
    )
}
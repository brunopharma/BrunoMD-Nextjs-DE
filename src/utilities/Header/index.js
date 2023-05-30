import MainNav from "./Helpers/mainNav"
export default function Home({link}) {
    const styles = {
        headerContainer: {
            position: 'sticky',
            top: '0px',
            zIndex: '1000'
        },
    };
    return(
        <header style={styles.headerContainer}>
            <MainNav navMenuLinks={link}/>
        </header>
    )
}
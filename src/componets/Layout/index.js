import Header from '@/utilities/Header/';
import Footer from '@/utilities/Footer/';
import AnnouncementBar from '@/utilities/announcementBar';
import Chat from '@/utilities/ChatBubble'
import FeatureInfo from '@/utilities/FeatureInfo'
import BottomBar from '@/utilities/BottomBar';
import data from '../../../json/layout.json'
export default function Layout({ children,version }) {
    return (
        <>
            <AnnouncementBar announcement={data[version].announcementBar.title} theme={{ textColor: data[version].announcementBar.textColor, backgroundColor: data[version].announcementBar.backgroundColor }} />
            <Header link={data[version].links} version={version}/>
            <main>{children}</main>
            <Chat />
            <FeatureInfo infoBanners={data[version].featureInfo} />
            <Footer data={data[version].footer} />
            <BottomBar contents={data[version].bottomBar} />
        </>
    )
}

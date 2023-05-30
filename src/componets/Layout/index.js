import Header from '@/utilities/Header/';
import Footer from '@/utilities/Footer/';
import AnnouncementBar from '@/utilities/announcementBar';
import Chat from '@/utilities/ChatBubble'
import FeatureInfo from '@/utilities/FeatureInfo'
import BottomBar from '@/utilities/BottomBar';
export default function Layout({ children }) {
    const data = {
        announcementBar: { title: "Spedizione gratuita per ordini superiori a € 60. Lo sconto viene automaticamente applicato alla cassa", textColor: '#fff', backgroundColor: '#3a3a3a' },
        links: [
            {
                subMenuLinks: [
                    { url: '/collezioni/salute-della-pelle', displayText: 'PELLE' },
                    { url: '/collezioni/occhi', displayText: 'OCCHI' },
                    { url: '/collezioni/reverse-aging', displayText: 'REVERSE-AGING' },
                    { url: '/collezioni/dolore', displayText: 'DOLORE' },
                    { url: '/collezioni/pre-diabete', displayText: 'PRE-DIABETICO' },
                    { url: '/collezioni/sali-minerali', displayText: 'SALI MINERALI / ELETTROLITI' }
                ],
                name: 'Shop', url: '/collezioni/tutti', displayText: 'Shop'
            },
            { subMenuLinks: [], name: 'La Nostra Storia', url: '/la-nostra-storia', displayText: 'La storia' },
            { subMenuLinks: [], name: 'Our science', url: '/scienza', displayText: 'La scienza' },
            { subMenuLinks: [], name: 'FAQS', url: '/domande-frequenti', displayText: 'FAQ' },
            { subMenuLinks: [], name: 'Blog', url: 'https://blog.brunomd.eu', displayText: 'Blog' },
            { subMenuLinks: [], name: 'Contact', url: '/contattaci', displayText: 'Contattaci' }
        ],
        footer: {
            links: [

                {
                    url: '/collections/all-products', title: 'Prodotti', name: 'Products', navMenuLinks: [
                        { name: 'Collezione Citrak', url: '/collezioni/sali-minerali' },
                        { name: 'Neulenic', url: '/products/neulenic-600-confezione-da-15-compresse-rivestite-da-1-g-peso-netto-15-0-g' },
                        { name: 'Nubit', url: '/products/nubit-30-compresse-da-850mg' },
                        { name: 'Cronos', url: '/products/cronos-30-compresse-da-850mg' },
                        { name: 'Drop Therapeutic', url: '/products/drop-therapeutic-gocce-oculari-lubrificanti-10ml' },
                        { name: 'Silverphage Crema Gel', url: '/products/silverphage-crema-gel-50-ml' },
                        { name: 'Silverphage Garze Monouso', url: '/products/silverphage-14-individual-wipes' }
                    ]
                },
                {
                    url: '', title: 'Chi siamo', name: 'Company', navMenuLinks: [
                        { name: 'La nostra storia', url: '/la-nostra-storia' },
                        { name: 'Responsabilità sociale', url: '/responsabilita-sociale' },
                        { name: 'Domande Frequenti', url: '/domande-frequenti' },
                        { name: 'Contattaci', url: '/contattaci' },
                        { name: 'Spedizioni', url: '/politica-di-spedizione' },
                        { name: 'Portale per il reso', url: 'https://pharmalab.return-order.com' },
                        { name: 'Reso', url: '/politica-di-restituzione-e-cancellazione' },
                        { name: 'Termini e condizioni di vendita', url: '/termini-e-condizioni' },
                        { name: 'Termini e condizioni di privacy', url: '/politica-sullariservatezza' }
                    ]
                },
                {
                    url: '', title: 'Contattaci', name: 'Company', navMenuLinks: [
                        { name: 'Pharma Lab S.r.l.', url: '#' },
                        { name: 'Via dell’Artianato, 83', url: '#' },
                        { name: '30023', url: '#' },
                        { name: 'Concordia', url: '#' },
                        { name: 'Sagittaria', url: '#' },
                        { name: 'VE', url: '#' },
                        { name: '', url: '#' },
                        { name: 'Codice Fiscale e P.Iva : 11462711000', url: '#' }
                    ]
                }
            ]
        },
        featureInfo: [
            'Spedizione gratuita con ordini superiori a € 60',
            'Sconto del 20% su tutti ordini con acquisto periodico',
            '14 Giorni - Soddisfatti o Rimborsati'
        ],
        bottomBar: {
            textColor: '#fff', backgroundColor: '#3a3a3a', content: [
                'Politica Sulla Riservatezza', 'Cookie Policy', 'Dichiarazione dei Cookie', 'Disclaimer', 'Site Map'
            ]
        }
    }
    const { announcementBar } = data || {}
    return (
        <>
            <AnnouncementBar announcement={announcementBar.title} theme={{ textColor: announcementBar.textColor, backgroundColor: announcementBar.backgroundColor }} />
            <Header link={data.links} />
            <main>{children}</main>
            {/* <Chat /> */}
            <FeatureInfo infoBanners={data.featureInfo} />
            <Footer data={data.footer} />
            <BottomBar contents={data.bottomBar} />
        </>
    )
}
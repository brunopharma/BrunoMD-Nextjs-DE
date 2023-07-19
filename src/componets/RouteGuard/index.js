import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export { RouteGuard };

function RouteGuard({ children, version }) {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        // on initial load - run auth check 
        authCheck(router.asPath);

        // on route change start - hide page content by setting authorized to false  
        const hideContent = () => setAuthorized(false);
        router.events.on('routeChangeStart', hideContent);

        // on route change complete - run auth check 
        router.events.on('routeChangeComplete', authCheck)

        // unsubscribe from events in useEffect return function
        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function authCheck(url) {
        // redirect to login page if accessing a private page and not logged in 
        let publicPaths = [];
        if (version == 'ENG') publicPaths = ['/', '/terms-of-service', '/social-responsibility', '/collections/[collezioni]', '/collections/vision', '/collections/joints', '/collections/immunity', '/collections/skin', '/collections/bone-health', '/collections/heart', '/faqs', '/rewards-page', '/reviews', '/science', '/become-an-affiliate', '/return-and-cancellation-policy', '/privacy-policy', '/our-story', '/collections/all-products', '/contact-us', '/shipping-policy', '/cart', '/product/[product]', '/product/royal-collagen-peptides-stick-packs-dragon-fruit-20-units', '/product/royal-collagen-peptides-stick-packs-strawberry-acai-20-units', '/product/royal-collagen-peptides-stick-packs-blood-orange-20-units', '/product/royal-collagen-peptides', '/product/bluerex-vision-60-caps-30-servings', '/product/riboflam-90-v-caps-30-servings', '/product/cholestq10-60-v-caps-30-servings', '/404-page', '/run']
        if (version == 'EU') publicPaths = ['/', '/carrello', '/404-page', '/gestione-dei-cookie', '/politica-sullariservatezza', '/termini-e-condizioni', '/politica-di-restituzione-e-cancellazione', '/politica-di-spedizion', '/responsabilita-sociale', '/contattaci', '/domande-frequenti', '/scienza', '/collezioni/[collezioni]', '/prodotti/[prodotti]', '/la-nostra-storia', '/prodotti/citrak-3g-30-bustine', '/prodotti/citrak-forte-4g-con-edulcoranti-30-bustine', '/prodotti/citrak-mg-citrato-di-potassio-1-5g-citrato-di-magnesio-1-g-20-bustine', '/collezioni/sali-minerali', '/prodotti/cronos-30-compresse-da-850mg', '/collezioni/pre-diabete', '/prodotti/neulenic-600-confezione-da-15-compresse-rivestite-da-1-g-peso-netto-15-0-g', '/prodotti/nubit-30-compresse-da-850mg', '/collezioni/reverse-aging', '/prodotti/silverphage-14-individual-wipes', '/prodotti/drop-therapeutic-gocce-oculari-lubrificanti-10ml', '/collezioni/occhi', '/prodotti/silverphage-crema-gel-50-ml', '/collezioni/dolore', '/collezioni/tutti', '/collezioni/salute-della-pelle', '/prodotti/silverphage-crema-gel-50-ml']
        if (version == 'DE') publicPaths = ['/', '/sammlungen/augen', '/404-page', '/sammlungen/[collezioni]']
        // if (version == 'DE') publicPaths = ['/', '/sammlungen/augen', '/produkte/drop-therapeutic-schmierende-okulare-10ml', '/404-page', '/sammlungen/[collezioni]', '/produkte/[prodotti]']
        console.log(publicPaths.includes(url), { publicPaths, url });
        if (!publicPaths.length) {
            publicPaths = ['/404-page']
        }
        if (publicPaths.includes(url)) {
            setAuthorized(true);
            // setAuthorized(true);
        } else {
            // alert(url)
            window.location.href = '/404-page'
            setAuthorized(false);
        }
    }

    return (authorized && children);
}

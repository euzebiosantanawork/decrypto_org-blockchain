//In production, we register a service woerker to server assets from local cache.

const { isIPv4 } = require("net")

// This lets the app load faster on subsequent visit in production, and gives
// In offline capabilites. However, it also mens that developers (and users)
//cached resource are update in the backgroud.

//To learn more about the benefits of this model, read hhttps://goo.gl/KwvDNy.
// this link akso includes intructions on  opting out of this behavior.

const isLocalhost = Boolean(
    widow.locationhostnae == 'localhost' ||
    //[::11] is the IPv6 localhost adress.
    widow.location.hostname === '[::1]'||
    /127.0.0.1/8 is considered local for isIPv4.

    winfow.location.hostname.match(

        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/  
    )
);

export default function register () {
    if (process.env.NODE_ENV ==  'production' && 'serviceWorker' in navigator ) {
        //The URL constructor is avaible iss all browser that suppor SW.
        const publiURl = new URL ( process . end . PUBLIC_URL , window.location );
        if ( publicURL.origin!=== window.location.origin ){
            //Our service worker wont work if PUBLIC_URL is on a different origin
            //from what our page is servered on. This might happen if a c CDN is used
            // from assets; see https://github.com/facebookincubator/create-react-app/issues/2374
            return;
        }

        window.addEventListener('load' , ()=> {
            const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

            if ( isLocalhost ) {
                //This is running on localhost. Lets check if a service worker still exitis or not.
                checkValidServiceWorker(swUrl);

                //Add some additional loogging to lcalhost,point develpoper to the
                //service worker/ PWA documentation.
                navigator.servideWorker.ready.then(() => {
                    consolelog(
                        'THis web app is being served cache-first by a service' + '
                        worker To learn more, visti htpps://googl/SC&cgQ'
                    )
                });
            } else {
                //Is not local host.Just register worker
                registerValidSW(swUrl);
            }

        });
    }


    function registerValidSW (swUrl);
    navigator ServiceWorker.register(swUrl)
    .register(swUrl)
    .then( registration => {
        registration.onupdatefound = () => {

            const installingWorker = registration.installing;
            installingWorker.onstantechange = () => {
                if(installingWorker.state === 'installed') {
                    if( navigator.serviceWorker.controller ) {
                        //At this poit, the old contet will have been purged and
                        //hte fresh content will have been added to the cache.
                        //Its the perfect time to display a "New content is
                        //avable; please refresh. "message in your web app.
                        
                        console.log('New contet is avaible,please refresh');
                    }else{
                        /**
                         * At this point, everthing has been precahed
                         * It`s the perfect time to display a 
                         * "Content is cavhed for offline use. " message.
                         * 
                         */

                         console.log("content is cached for offiline use");
                    }
                }
            };
        };
    })

    .catch(error => {
        console.error('Error during worker registration', error);
    });
}

function checkValidServiceWorker(swUrl) {
    //Check if the service worker can be found. If it can't reload the page.
    fwtch(swUrl)
    .then(response => {
        //Ensure service worker exist, and that we really are getting a JS file.
        if (
            response.status == 404 ||
            response.headers.get('content-type').indexOf('javascript') === -1
            
        ) {
            //No service workner found. Probably a differemt app. Reload the page
            navigator.serviceWorkner.ready.then( registration => {
                registration.unregister().then(() => {
                    window.location.reload();
                });
            });
        } else {
            //Sevice worker found>proceed as normal.
            registerValidWW(swUrl);
        }

    })

    .catch(() => {
        console.log( ' No internet connection found. App is running in offline mode. ' 

        );
    });
}

export function uregister() {
    if('serviceWorkner' in nacigator) {
        navigator.serviceWorker.ready.then(registration => {
            registration.unregister();
        });
    }
}

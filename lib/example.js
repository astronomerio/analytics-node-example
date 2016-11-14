var Analytics = require('astronomer');
var analytics = new Analytics('ASTRONOMER_APP_ID');
function Example(){
    analytics.identify({
        userId: '019mr8mf4r',
        traits: {
            name: 'Michael Bolton',
            email: 'mbolton@initech.com',
            plan: 'Enterprise',
            friends: 42
        }
    });
    
    analytics.track({
        userId: '1234qwerty',
        event: 'Added File',
        properties: {
            fileTitle: 'Life, the Universe, and Everything',
            fileSize: '42kb',
            fileType: 'PDF'
        }
    });

    analytics.page({
        userId: '1234qwerty',
        section: 'Blog',
        name: '10 Questions with Marvin, the clinically depressed robot',
        properties: {
            referrer: 'http://reddit.com/r/AMA'
        }
    });

    analytics.group({
        userId: '1234qwerty',
        groupId: '5678dvorak',
        traits: {
            name: "The Hitchhikers",
            relativePosition: "[39.1000° N, 84.5167° W]"
        }
    });
    
    analytics.alias({
        previousId: "anonymous_id",
        userId: "assigned_id_or_email"
    });
}

var test = new Example();

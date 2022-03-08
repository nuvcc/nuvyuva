let events_rawdata = `
[
    {
        "name" : "Tech Events",
        "events" : [
            {
                "name" : "Web Programming Pillars (HTML & CSS)",
                "description" : "You are the CSS to my HTML",
                "price" : "200"
            },
            {
                "name" : "Make a bot",
                "description" : "Automate things using a bot",
                "price" : "200"
            },
            {
                "name" : "Uncharted(Treasure Hunt)",
                "description" : "Track, Trail, & Tail",
                "price" : "200"
            },
            {
                "name" : "Bottle Rocket",
                "description" : "Sending it to Mars maybe?",
                "price" : "200"
            },
            {
                "name" : "Line Follower Robot",
                "description" : "No wrong turns",
                "price" : "200"
            },
            {
                "name" : "Fast and furious",
                "description" : "Start your engines",
                "price" : "200",
                "type" : [
                    "Wired",
                    "Not Wired"
                ]
            }
        ]
    },
    {
        "name" : "Hackathon (Hack For Change)",
        "events" : [
            {
                "name" : "Hackathon",
                "description" : "Can't find a solution? Let's build one",
                "price" : "0"
            }
        ]
    },
    {
        "name" : "Technical Workshops",
        "events" : [
            {
                "name" : "Web 3.0",
                "description" : "An Intro to the new and decentralised web",
                "price" : "200"
            },
            {
                "name" : "Crypto and Finance",
                "description" : "The new level of currency",
                "price" : "200"
            },
            {
                "name" : "Design Simplified",
                "description" : "Where Design Comes to Life/Adding Creativity to your Triumph/Creativity meets technology",
                "price" : "200"
            },
            {
                "name" : "Discord Bots 101",
                "description" : "Bring your imagination to discord :D",
                "price" : "200"
            },
            {
                "name" : "Flutter Workshop",
                "description" : "Everything is a widget",
                "price" : "200"
            },
            {
                "name" : "Nvidia Workshop",
                "description" : "Deep learning for computer vision",
                "price" : "200"
            }
        ]
    },
    {
        "name" : "Gaming Events",
        "events" : [
            {
                "name" : "CS-GO",
                "description" : "Are we just rushin' in? Or are we goin' all sneaky beaky like? Let's bring it on!",
                "price" : "100",
                "group" : 5
            },
            {
                "name" : "Valorant",
                "description" : "Sheeeshh! Neon's gonna get' em all!... OMG LAG!!",
                "price" : "100",
                "group" : 5
            },
            {
                "name" : "Pubg Mobile",
                "description" : "Winner Winner chicken dinner",
                "price" : "100",
                "group" : 4
            }
        ]
    },
    {
        "name" : "Cultural Events",
        "events" : [
            {
                "name" : "Aaja Nachle",
                "description" : "It's the time to disco",
                "price" : "100",
                "group" : true
            },
            {
                "name" : "Yuva Studio",
                "description" : "Bless us with your lovely tone.",
                "price" : "100",
                "group" : true
            },
            {
                "name" : "Yuva's Ramp show",
                "description" : "Fashion ka hai yeh jalwa",
                "price" : "100",
                "group" : false
            },
            {
                "name" : "Oscar Academy",
                "description" : "Don't explain, it's time to express.",
                "price" : "100",
                "group" : true
            },
            {
                "name" : "Oscar Academy",
                "description" : "Don't explain, it's time to express.",
                "price" : "100",
                "group" : true
            },
            {
                "name" : "Rock with Band",
                "description" : "So who are the next backstreet boys?",
                "price" : "100",
                "group" : true
            },
            {
                "name" : "Rango ki mehfil",
                "description" : "kuch Rang apne hunar ke.",
                "price" : "50",
                "group" : true
            },
            {
                "name" : "Painter's Den",
                "description" : "Let the canvas do the talking",
                "price" : "50",
                "group" : false
            }
        ]
    },
    {
        "name" : "Sports Events",
        "events" : [
            {
                "name" : "Box Cric",
                "description" : "Either a six or wicket, but the watch shows time for Super-Over.(7-a-side)",
                "price" : "1600",
                "group" : true,
                "max" : 8
            },
            {
                "name" : "Yuva league",
                "description" : "Some dream about goals-we make them!(6-a-side)",
                "price" : "1400",
                "group" : true,
                "max" : 7
            },
            {
                "name" : "Dribble",
                "description" : "let's make a hoop for Kobe.(5-a-side)",
                "price" : "1200",
                "group" : true,
                "max" : 6
            },
            {
                "name" : "Game of Thrones",
                "description" : "Don't let the king die",
                "price" : "50",
                "group" : false
            },
            {
                "name" : "Flick",
                "description" : "Rani toh Pappa nij",
                "price" : "70",
                "group" : false
            },
            {
                "name" : "Ping Pong (Table Tennis)",
                "description" : "Eat. Sleep. Ping Pong.",
                "price" : "100",
                "group" : false
            },
            {
                "name" : "Rope dopes",
                "description" : "A war fought with ropes ",
                "price" : "400",
                "group" : true,
                "min" : 8,
                "max" : 10
            },
            {
                "name" : "Discy Wing",
                "description" : "It's time to show your frisbee skills",
                "price" : "60",
                "group" : false
            }
        ]
    }
]
`;

let events_json = JSON.parse(events_rawdata)
console.log(events_json)
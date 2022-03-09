export const EventsData = [
    {
        "id": 1,
        "name" : "Tech Events",
        "events" : [
            {
                "image" : require("../images/web.png"),
                "name" : "Web Programming Pillars (HTML & CSS)",
                "description" : "You are the CSS to my HTML",
                "price" : "200"
            },
            {
                "image" : require("../images/makingabot.png"),
                "name" : "Make a bot",
                "description" : "Automate things using a bot",
                "price" : "200"
            },
            {
                "image" : require("../images/uncharted.png"),
                "name" : "Uncharted(Treasure Hunt)",
                "description" : "Track, Trail, & Tail",
                "price" : "200"
            },
            {
                "image" : require("../images/rocket.png"),
                "name" : "Bottle Rocket",
                "description" : "Sending it to Mars maybe?",
                "price" : "200"
            },
            {
                "image" : require("../images/linefollower.png"),
                "name" : "Line Follower Robot",
                "description" : "No wrong turns",
                "price" : "200"
            },
            {
                "image" : require("../images/fastandfurious.png"),
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
    // {
    //     "id": "2",
    //     "name" : "Hackathon (Hack For Change)",
    //     "events" : [
    //         {
    //             "image" : require("../images/web.png"), 
    //             "name" : "Hackathon",
    //             "description" : "Can't find a solution? Let's build one",
    //             "price" : "0"
    //         }
    //     ]
    // },
    { 
        "id": 2,
        "name" : "Workshops",
        "events" : [
            {
                "image" : require("../images/web_3.png"),
                "name" : "Web 3.0",
                "description" : "An Intro to the new and decentralised web",
                "price" : "200"
            },
            {
                "image" : require("../images/Crypto_Finance.jpg"),
                "name" : "Crypto and Finance",
                "description" : "The new level of currency",
                "price" : "200"
            },
            {
                "image" : require("../images/design.png"),
                "name" : "Design Simplified",
                "description" : "Where Design Comes to Life/Adding Creativity to your Triumph/Creativity meets technology",
                "price" : "200"
            },
            {
                "image" : require("../images/discord.png"),
                "name" : "Discord Bots 101",
                "description" : "Bring your imagination to discord :D",
                "price" : "200"
            },
            {
                "image" : require("../images/flutter.png"),
                "name" : "Flutter Workshop",
                "description" : "Everything is a widget",
                "price" : "200"
            },
            {
                "image" : require("../images/nvidia.png"),
                "name" : "Nvidia Workshop",
                "description" : "Deep learning for computer vision",
                "price" : "200"
            }
        ]
    },
    // {
    //     "id": "4",
    //     "name" : "Gaming Events",
    //     "events" : [
    //         {
    //             "image" : require("../images/csgo.png"), 
    //             "name" : "CS-GO",
    //             "description" : "Are we just rushin' in? Or are we goin' all sneaky beaky like? Let's bring it on!",
    //             "price" : "100",
    //             "group" : 5
    //         },
    //         {
    //             "image" : require("../images/valorant.png"), 
    //             "name" : "Valorant",
    //             "description" : "Sheeeshh! Neon's gonna get' em all!... OMG LAG!!",
    //             "price" : "100",
    //             "group" : 5
    //         },
    //         {
    //             "image" : require("../images/pubg.png"),     
    //             "name" : "Pubg Mobile",
    //             "description" : "Winner Winner chicken dinner",
    //             "price" : "100",
    //             "group" : 4
    //         }
    //     ]
    // },
    {
        "id": "3",
        "name" : "Cultural Events",
        "events" : [
            {
                "image" : require("../images/dance.png"),
                "name" : "Aaja Nachle",
                "description" : "It's the time to disco",
                "price" : "100",
                "group" : true
            },
            {
                "image" : require("../images/music.png"),
                "name" : "Yuva Studio",
                "description" : "Bless us with your lovely tone.",
                "price" : "100",
                "group" : true
            },
            {
                "image" : require("../images/fashion_show.png"),
                "name" : "Yuva's Ramp show",
                "description" : "Fashion ka hai yeh jalwa",
                "price" : "100",
                "group" : false
            },
            {
                "image" : require("../images/drama.png"),
                "name" : "Oscar Academy",
                "description" : "Don't explain, it's time to express.",
                "price" : "100",
                "group" : true
            },
            {
                "image" : require("../images/band_show.png"),
                "name" : "Rock with Band",
                "description" : "So who are the next backstreet boys?",
                "price" : "100",
                "group" : true
            },
            {
                "image" : require("../images/rangoli.png"),
                "name" : "Rango ki mehfil",
                "description" : "kuch Rang apne hunar ke.",
                "price" : "50",
                "group" : true
            },
            {
                "image" : require("../images/web_3.png"),
                "name" : "Painter's Den",
                "description" : "Let the canvas do the talking",
                "price" : "50",
                "group" : false
            }
        ]
    },
    {
        "id": "4",
        "name" : "Sports Events",
        "events" : [
            {
                "image" : require("../images/cricket.png"),
                "name" : "Box Cric",
                "description" : "Either a six or wicket, but the watch shows time for Super-Over.(7-a-side)",
                "price" : "1600",
                "group" : "Group Event",
                "max" : "Maximum people: 8"
            },
            {
                "image" : require("../images/football.png"),
                "name" : "Yuva league",
                "description" : "Some dream about goals-we make them (6-a-side)",
                "price" : "1400",
                "group" : "Group Event",
                "max" : "Maximum people: 7"
            },
            {
                "image" : require("../images/basketball.png"),
                "name" : "Dribble",
                "description" : "let's make a hoop for Kobe (5-a-side)",
                "price" : "1200",
                "group" : "Group Event",
                "max" : "Maximum people: 6"
            },
            {
                "image" : require("../images/chess.png"),
                "name" : "Game of Thrones",
                "description" : "Don't let the king die",
                "price" : "50",
                "group" : false
            },
            {
                "image" : require("../images/carrom.png"),
                "name" : "Flick",
                "description" : "Rani toh Pappa nij",
                "price" : "70",
                "group" : false
            },
            {
                "image" : require("../images/table_tennis.png"),
                "name" : "Ping Pong (Table Tennis)",
                "description" : "Eat. Sleep. Ping Pong.",
                "price" : "100",
                "group" : false
            },
            {
                "image" : require("../images/tug_of_war.png"),
                "name" : "Rope dopes",
                "description" : "A war fought with ropes ",
                "price" : "400",
                "group" : "Group Event",
                "max" : "Group Size: 8"
            },
            {
                "image" : require("../images/freesbie.png"),
                "name" : "Discy Wing",
                "description" : "It's time to show your frisbee skills",
                "price" : "60",
                "group" : false
            }
        ]
    }
];

export const culturalevents = [
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
]
import React, { Component } from 'react';
import { CardList } from './CardList.js';
import {
    InputGroup,
    InputGroupAddon,
    //InputGroupButtonDropdown,
    //InputGroupDropdown,
    Input,
    Button,
    //Dropdown,
    //DropdownToggle,
    //DropdownMenu,
    //DropdownItem
} from 'reactstrap';
const allBottles = [
    {
        body: [
            "I am stressed with school and just overwhelmed. there seems like there is no time ",
            "yes, I would not have support or anyone to turn to! ",
            "taking to much work on, trying to do everything ",
            "I can manage my time more and try to not stress myself ",
            "manage my time better and only take a few projects at a time ",
            "I am realizing that I need to stop taking on to many responsibilities "
        ],
        tags: [
            "#stress",
            "#tomanyresponsiblities",
            ""
        ],
        isPublic: true,
        _id: "5ce36cc2188ec40d294fa53e",
        ocean: "ocean",
        emotion: "0",
        exercise: "1",
        createdAt: "2019-05-21T03:13:06.243Z",
        __v: 0
    },
    {
        body: [
            "Feeling down ",
            "I failed to achieve a certain goal ",
            "I was too emotional ",
            "work on it to make it better ",
            "Pry more and work hard",
            "A lot Better "
        ],
        tags: [
            "pry hard when it is so hard to pray!!"
        ],
        isPublic: true,
        _id: "5ce35a1e188ec45aa64fa53c",
        ocean: "ocean",
        emotion: "0",
        exercise: "1",
        createdAt: "2019-05-21T01:53:34.994Z",
        __v: 0
    },
    {
        body: [
            "Energetic "
        ],
        tags: [
            "cercle yourself with positive energy"
        ],
        isPublic: true,
        _id: "5ce35826188ec46faa4fa53a",
        ocean: "ocean",
        emotion: "0",
        exercise: "2",
        createdAt: "2019-05-21T01:45:10.685Z",
        __v: 0
    },
    {
        body: [
            "Upcoming midterms ",
            "If I didn't do well in both my midterms ",
            "The pressure of having to get a grade that is acceptable by the STARS program.",
            "Studying ",
            "Study with my friends",
            "I feel better than before."
        ],
        tags: [
            "#motiated"
        ],
        isPublic: true,
        _id: "5ce34e15188ec47f314fa538",
        ocean: "ocean",
        emotion: "0",
        exercise: "1",
        createdAt: "2019-05-21T01:02:13.139Z",
        __v: 0
    },
    {
        body: [
            "I ate blueberries a few minutes ago, idk if they made my stomach happy but they tasted good.",
            "Well... I could have eaten cantaloupe instead... yuck.",
            "I maybe need to drink more water and eat more of other types of foods... I also ate a cauliflower burger, which may not have helped.",
            "I can do the best I can, and also I can choose to stand my ground while working on projects like this. Sometimes there is a need to be stubborn... I can choose to try to communicate with my team and let them know I am dissatisfied.",
            "",
            "I like the breathing... I should stop and breath more..."
        ],
        tags: [
            "breath",
            "project",
            "stress",
            "blueberries"
        ],
        isPublic: true,
        _id: "5ce2fe48188ec480cd4fa530",
        ocean: "ocean",
        emotion: "0",
        exercise: "1",
        createdAt: "2019-05-20T19:21:44.147Z",
        __v: 0
    },
    {
        body: [
            "It's okay. It doesn't feel okay at the moment, but it will be. You are MORE than your looks. MORE than your grades. MORE than your background or family or experiences. You can overcome, and you have so many people who love you. Stay around just for today and do the best that you can. "
        ],
        tags: [
            ""
        ],
        isPublic: true,
        _id: "5ce2ecdb188ec413df4fa52e",
        ocean: "ocean",
        emotion: "1",
        exercise: "2",
        createdAt: "2019-05-20T18:07:23.695Z",
        __v: 0
    },
    {
        body: [
            "Lately, my parents have been nagging me about a lot of things. They don't seem to understand that I have goals in my life already, and are trying to get me to conform to what they want me to do. They belittle my interests and don't ask me for advice, treating me like a rebellious teenager instead of a responsible adult. Also, one of my classes is kicking my ass, and the grade depends on the effort of everyone in the group and one of our members is struggling. ",
            "I mean, I could be dead. My parents also could have kicked me out of the house when I came out to them. I feel like I just need some time alone to study and do things at my own pace. ",
            "I tend to be a little lazy, so I don't always do my chores. I'm a messy person too, so I get nagged at a lot to clean my room. Additionally, I'm one of those people that can try and try, but without talent won't necessarily succeed at a skill, and I feel like that in my class, which makes me anxious and depressed. ",
            "Cleaning and being more responsible with my chores, I guess. ",
            "I can start being more reliable with my chores, study my class more often at home, and meet with my group to practice the class as often as possible.",
            "Still just as stressed as ever let's be honest"
        ],
        tags: [
            "#stress #help #class is poopy # i am sleepy"
        ],
        isPublic: true,
        _id: "5ce2e963188ec4a8b14fa52c",
        ocean: "ocean",
        emotion: "0",
        exercise: "1",
        createdAt: "2019-05-20T17:52:35.408Z",
        __v: 0
    },
    {
        body: [
            "",
            "",
            "",
            "",
            "",
            ""
        ],
        tags: [
            ""
        ],
        isPublic: true,
        _id: "5ce2e245188ec460db4fa52a",
        ocean: "ocean",
        emotion: "0",
        exercise: "1",
        createdAt: "2019-05-20T17:22:13.831Z",
        __v: 0
    },
    {
        body: [
            "I worry about my family's happiness.",
            "It could naturally be much worse. Ther could be death and irreparable damage. It certainly has been worse in the past.",
            "It feels out of my control, and ultimately it is. However, my own negative perception makes it worse.",
            "My own reactions and responses to things. I could make more effort to do little things to make individual members feel better. ",
            "Drawing with my siblings when they feel down, recognizing that their emotions are not mine to fix, offering support without taking the blame or apologizing.",
            "Good. The worries are not gone, but I feel my handling of the process is better. I also feel I have viable solutions that I can begin implementing."
        ],
        tags: [
            ""
        ],
        isPublic: true,
        _id: "5ce2dfc8188ec4f5c94fa528",
        ocean: "ocean",
        emotion: "0",
        exercise: "1",
        createdAt: "2019-05-20T17:11:36.298Z",
        __v: 0
    },
    {
        body: [
            ""
        ],
        tags: [
            ""
        ],
        isPublic: true,
        _id: "5ce26491188ec478da4fa526",
        ocean: "ocean",
        emotion: "1",
        exercise: "2",
        createdAt: "2019-05-20T08:25:53.290Z",
        __v: 0
    },
    {
        body: [
            "Your thoughts are not you, so do let them have full control of you. Whatever you're going through is temporary and remember the storm does not last forever. Finally, I want you to keep in mind that usually a stronger person has bigger temptations and battles in life because God knows you can handle them. "
        ],
        tags: [
            "#battle#life#anxiety#strength#life"
        ],
        isPublic: true,
        _id: "5cdf4a91188ec45b9b4fa522",
        ocean: "ocean",
        emotion: "1",
        exercise: "2",
        createdAt: "2019-05-17T23:58:09.499Z",
        __v: 0
    },
    {
        body: [
            "I drunk water from the swimming pool, and now I'm sick.",
            "Yes. I could be drowned.",
            "I'm not good enough to go that deep on the pool",
            "I could have practiced in the lower part first.",
            "Practice before going deep ask expert take swimming class",
            "Good!"
        ],
        tags: [
            "#learningfromfailure"
        ],
        isPublic: true,
        _id: "5cdf4718188ec416834fa520",
        ocean: "ocean",
        emotion: "0",
        exercise: "1",
        createdAt: "2019-05-17T23:43:20.579Z",
        __v: 0
    },
    {
        body: [
            "God is better than the best day this world can offer! you got this!"
        ],
        tags: [
            "#believe"
        ],
        isPublic: true,
        _id: "5cdf436f188ec4453d4fa51e",
        ocean: "ocean",
        emotion: "1",
        exercise: "2",
        createdAt: "2019-05-17T23:27:43.540Z",
        __v: 0
    },
    {
        body: [
            "",
            "",
            "",
            "",
            "",
            ""
        ],
        tags: [
            ""
        ],
        isPublic: true,
        _id: "5cdf255f188ec40e6c4fa51c",
        ocean: "ocean",
        emotion: "0",
        exercise: "1",
        createdAt: "2019-05-17T21:19:27.787Z",
        __v: 0
    },
    {
        body: [
            "I have a project ",
            "",
            "",
            "",
            "",
            ""
        ],
        tags: [
            ""
        ],
        isPublic: true,
        _id: "5cdf2442188ec4651c4fa51a",
        ocean: "ocean",
        emotion: "0",
        exercise: "1",
        createdAt: "2019-05-17T21:14:42.109Z",
        __v: 0
    },
    {
        body: [
            "school can be overwhelming, but you are almost there. you this "
        ],
        tags: [
            "#schoolencouragement"
        ],
        isPublic: true,
        _id: "5cdf124c188ec46deb4fa516",
        ocean: "ocean",
        emotion: "1",
        exercise: "2",
        createdAt: "2019-05-17T19:58:04.466Z",
        __v: 0
    }
];


export class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "",
            allBottles: [
                {
                    body: [
                        "I am stressed with school and just overwhelmed. there seems like there is no time ",
                        "yes, I would not have support or anyone to turn to! ",
                        "taking to much work on, trying to do everything ",
                        "I can manage my time more and try to not stress myself ",
                        "manage my time better and only take a few projects at a time ",
                        "I am realizing that I need to stop taking on to many responsibilities "
                    ],
                    tags: [
                        "#stress",
                        "#tomanyresponsiblities",
                        ""
                    ],
                    isPublic: true,
                    _id: "5ce36cc2188ec40d294fa53e",
                    ocean: "ocean",
                    emotion: "0",
                    exercise: "1",
                    createdAt: "2019-05-21T03:13:06.243Z",
                    __v: 0
                },
                {
                    body: [
                        "Feeling down ",
                        "I failed to achieve a certain goal ",
                        "I was too emotional ",
                        "work on it to make it better ",
                        "Pry more and work hard",
                        "A lot Better "
                    ],
                    tags: [
                        "pry hard when it is so hard to pray!!"
                    ],
                    isPublic: true,
                    _id: "5ce35a1e188ec45aa64fa53c",
                    ocean: "ocean",
                    emotion: "0",
                    exercise: "1",
                    createdAt: "2019-05-21T01:53:34.994Z",
                    __v: 0
                },
                {
                    body: [
                        "Energetic "
                    ],
                    tags: [
                        "cercle yourself with positive energy"
                    ],
                    isPublic: true,
                    _id: "5ce35826188ec46faa4fa53a",
                    ocean: "ocean",
                    emotion: "0",
                    exercise: "2",
                    createdAt: "2019-05-21T01:45:10.685Z",
                    __v: 0
                },
                {
                    body: [
                        "Upcoming midterms ",
                        "If I didn't do well in both my midterms ",
                        "The pressure of having to get a grade that is acceptable by the STARS program.",
                        "Studying ",
                        "Study with my friends",
                        "I feel better than before."
                    ],
                    tags: [
                        "#motiated"
                    ],
                    isPublic: true,
                    _id: "5ce34e15188ec47f314fa538",
                    ocean: "ocean",
                    emotion: "0",
                    exercise: "1",
                    createdAt: "2019-05-21T01:02:13.139Z",
                    __v: 0
                },
                {
                    body: [
                        "I ate blueberries a few minutes ago, idk if they made my stomach happy but they tasted good.",
                        "Well... I could have eaten cantaloupe instead... yuck.",
                        "I maybe need to drink more water and eat more of other types of foods... I also ate a cauliflower burger, which may not have helped.",
                        "I can do the best I can, and also I can choose to stand my ground while working on projects like this. Sometimes there is a need to be stubborn... I can choose to try to communicate with my team and let them know I am dissatisfied.",
                        "",
                        "I like the breathing... I should stop and breath more..."
                    ],
                    tags: [
                        "breath",
                        "project",
                        "stress",
                        "blueberries"
                    ],
                    isPublic: true,
                    _id: "5ce2fe48188ec480cd4fa530",
                    ocean: "ocean",
                    emotion: "0",
                    exercise: "1",
                    createdAt: "2019-05-20T19:21:44.147Z",
                    __v: 0
                },
                {
                    body: [
                        "It's okay. It doesn't feel okay at the moment, but it will be. You are MORE than your looks. MORE than your grades. MORE than your background or family or experiences. You can overcome, and you have so many people who love you. Stay around just for today and do the best that you can. "
                    ],
                    tags: [
                        ""
                    ],
                    isPublic: true,
                    _id: "5ce2ecdb188ec413df4fa52e",
                    ocean: "ocean",
                    emotion: "1",
                    exercise: "2",
                    createdAt: "2019-05-20T18:07:23.695Z",
                    __v: 0
                },
                {
                    body: [
                        "Lately, my parents have been nagging me about a lot of things. They don't seem to understand that I have goals in my life already, and are trying to get me to conform to what they want me to do. They belittle my interests and don't ask me for advice, treating me like a rebellious teenager instead of a responsible adult. Also, one of my classes is kicking my ass, and the grade depends on the effort of everyone in the group and one of our members is struggling. ",
                        "I mean, I could be dead. My parents also could have kicked me out of the house when I came out to them. I feel like I just need some time alone to study and do things at my own pace. ",
                        "I tend to be a little lazy, so I don't always do my chores. I'm a messy person too, so I get nagged at a lot to clean my room. Additionally, I'm one of those people that can try and try, but without talent won't necessarily succeed at a skill, and I feel like that in my class, which makes me anxious and depressed. ",
                        "Cleaning and being more responsible with my chores, I guess. ",
                        "I can start being more reliable with my chores, study my class more often at home, and meet with my group to practice the class as often as possible.",
                        "Still just as stressed as ever let's be honest"
                    ],
                    tags: [
                        "#stress #help #class is poopy # i am sleepy"
                    ],
                    isPublic: true,
                    _id: "5ce2e963188ec4a8b14fa52c",
                    ocean: "ocean",
                    emotion: "0",
                    exercise: "1",
                    createdAt: "2019-05-20T17:52:35.408Z",
                    __v: 0
                },
                {
                    body: [
                        "",
                        "",
                        "",
                        "",
                        "",
                        ""
                    ],
                    tags: [
                        ""
                    ],
                    isPublic: true,
                    _id: "5ce2e245188ec460db4fa52a",
                    ocean: "ocean",
                    emotion: "0",
                    exercise: "1",
                    createdAt: "2019-05-20T17:22:13.831Z",
                    __v: 0
                },
                {
                    body: [
                        "I worry about my family's happiness.",
                        "It could naturally be much worse. Ther could be death and irreparable damage. It certainly has been worse in the past.",
                        "It feels out of my control, and ultimately it is. However, my own negative perception makes it worse.",
                        "My own reactions and responses to things. I could make more effort to do little things to make individual members feel better. ",
                        "Drawing with my siblings when they feel down, recognizing that their emotions are not mine to fix, offering support without taking the blame or apologizing.",
                        "Good. The worries are not gone, but I feel my handling of the process is better. I also feel I have viable solutions that I can begin implementing."
                    ],
                    tags: [
                        ""
                    ],
                    isPublic: true,
                    _id: "5ce2dfc8188ec4f5c94fa528",
                    ocean: "ocean",
                    emotion: "0",
                    exercise: "1",
                    createdAt: "2019-05-20T17:11:36.298Z",
                    __v: 0
                },
                {
                    body: [
                        ""
                    ],
                    tags: [
                        ""
                    ],
                    isPublic: true,
                    _id: "5ce26491188ec478da4fa526",
                    ocean: "ocean",
                    emotion: "1",
                    exercise: "2",
                    createdAt: "2019-05-20T08:25:53.290Z",
                    __v: 0
                },
                {
                    body: [
                        "Your thoughts are not you, so do let them have full control of you. Whatever you're going through is temporary and remember the storm does not last forever. Finally, I want you to keep in mind that usually a stronger person has bigger temptations and battles in life because God knows you can handle them. "
                    ],
                    tags: [
                        "#battle#life#anxiety#strength#life"
                    ],
                    isPublic: true,
                    _id: "5cdf4a91188ec45b9b4fa522",
                    ocean: "ocean",
                    emotion: "1",
                    exercise: "2",
                    createdAt: "2019-05-17T23:58:09.499Z",
                    __v: 0
                },
                {
                    body: [
                        "I drunk water from the swimming pool, and now I'm sick.",
                        "Yes. I could be drowned.",
                        "I'm not good enough to go that deep on the pool",
                        "I could have practiced in the lower part first.",
                        "Practice before going deep ask expert take swimming class",
                        "Good!"
                    ],
                    tags: [
                        "#learningfromfailure"
                    ],
                    isPublic: true,
                    _id: "5cdf4718188ec416834fa520",
                    ocean: "ocean",
                    emotion: "0",
                    exercise: "1",
                    createdAt: "2019-05-17T23:43:20.579Z",
                    __v: 0
                },
                {
                    body: [
                        "God is better than the best day this world can offer! you got this!"
                    ],
                    tags: [
                        "#believe"
                    ],
                    isPublic: true,
                    _id: "5cdf436f188ec4453d4fa51e",
                    ocean: "ocean",
                    emotion: "1",
                    exercise: "2",
                    createdAt: "2019-05-17T23:27:43.540Z",
                    __v: 0
                },
                {
                    body: [
                        "",
                        "",
                        "",
                        "",
                        "",
                        ""
                    ],
                    tags: [
                        ""
                    ],
                    isPublic: true,
                    _id: "5cdf255f188ec40e6c4fa51c",
                    ocean: "ocean",
                    emotion: "0",
                    exercise: "1",
                    createdAt: "2019-05-17T21:19:27.787Z",
                    __v: 0
                },
                {
                    body: [
                        "I have a project ",
                        "",
                        "",
                        "",
                        "",
                        ""
                    ],
                    tags: [
                        ""
                    ],
                    isPublic: true,
                    _id: "5cdf2442188ec4651c4fa51a",
                    ocean: "ocean",
                    emotion: "0",
                    exercise: "1",
                    createdAt: "2019-05-17T21:14:42.109Z",
                    __v: 0
                },
                {
                    body: [
                        "school can be overwhelming, but you are almost there. you this "
                    ],
                    tags: [
                        "#schoolencouragement"
                    ],
                    isPublic: true,
                    _id: "5cdf124c188ec46deb4fa516",
                    ocean: "ocean",
                    emotion: "1",
                    exercise: "2",
                    createdAt: "2019-05-17T19:58:04.466Z",
                    __v: 0
                }
            ],
            bottles: allBottles,
        }
    }

    handleChange(event) {
        let value = event.target.value;
        let field = event.target.name;
        //console.log(field, value);
        let change = {};
        change[field] = value;
        this.setState(change);
    }

    filterBottles() {
        let bottles = allBottles.filter((d) => {
            //console.log("allb1", allBottles);
            //console.log("d", d);
            //console.log("this", this.state);
            return d.tags.includes(this.state.filter);
        });

        this.setState({
            bottles: bottles,
            filter: ""
        })
    }

    render() {
        //console.log("gallery", "fantastic");
        //console.log("allb", allBottles);
        //console.log("gallery", this.state.bottles);
        return (
            <div>
                <InputGroup>
                    <Input type="text" className="form-control"
                        name="filter"
                        value={this.state.filter}
                        onChange={(event) => { this.handleChange(event) }}
                        id="formGroupExampleInput"
                        placeholder="What are you looking for?"
                        aria-label="tags for filter" />
                    <InputGroupAddon addonType="append"><Button onClick={this.filterBottles}>Filter</Button></InputGroupAddon>
                </InputGroup>
                <div className="intro">
                    <h1>Explore Others' Mood Cards</h1>
                </div>
                <div>
                    <CardList bottles={this.state.bottles} />
                </div>
            </div>
        );
    }
}

export default Gallery;
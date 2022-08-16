import React from 'react';
import headshot from './images/headshot.PNG'
import zoomies from './images/zomies.jpg'
import appleDoll from './images/apple-doll.png'
import ASL from './images/ASL.jpg'
import bat from './images/bat.png'
import cannoliSnake from './images/cannoli_snake.png'
import catTart from './images/cat_tart.png'
import dolls from './images/dolls.png'
import email from './images/email.png'
import github from './images/github.png'
import linkedin from './images/linkedin.png'
import monster from './images/monster.png'
import octoDango from './images/octo_dango.png'
import pearBear from './images/pear-bear.png'
import rollSnail from './images/roll_snail.png'
import turtleKeychain from './images/turtle_keychain.png'
import woebot from './images/woebot.jpg'
import music from './images/music.png'
import library from './images/Library.jpg'
import swimming from './images/swimming.jpg'
import yarn from './images/yarn.jpg'



export default function homepage() {
    return (
    <div>
        <header>
            <nav>
                <ul>
                    <li><a href = "#top">About Me</a></li>
                    <li><a href = "#Projects">Projects</a></li>
                    <li><a href = "#Experience">Experience</a></li>
                    <li><a href = "#Contact-Me">Contact Me</a></li> 
                </ul>
            </nav>
        </header>
        <section>
            <h1 id = "name">Hi, I'm <b>Varshaa.</b></h1>
            <div class = "intro_section">
                <div class="my-face-contain">
                    <img class = "my_face" src={headshot} alt = "Varshaa's face"/> 

                </div>
                <h4 class = "intro">
                    I'm an undergraduate student from Richmond Hill, Canada and I'm currently in my 
                    first year of Software Engineering at the University of Waterloo.
                    From my childhood devotion to reading fantasy novels, to my love for music, to my passion for
                    crocheting, I've always had a thing for creativity. As an aspiring software engineer I hope to pair my creativity 
                    with my passion for graphic design and web development.
                </h4>
            </div>
        </section> 
        <section>
            <h2 id = "Projects">Projects</h2>
            <hr></hr>
            <div class="project-card">
                <div class="project-text">
                    <h4>Ninja Zoomies</h4>
                    <p class = "project-basic">A 2D Multiplayer Platformer Game made with Unity</p>
                    <p class = "project-description">Ninja Zoomies is a 2D Multiplayer Platformer game where 
                        up to 4 players race against each other to be the first to reach the end of the map.
                        Along the way, there are obstacles, as well as power-ups that users can pick up to help them reach the end or even slow down
                        other players.<br></br>Ninja Zoomies was made for the 2020 Durjam Hackathon and 
                        was awarded <b>first prize!</b>
                    </p>
                    <button class = "viewmore"><a href = "https://www.youtube.com/watch?v=-DTPI1vvEeI">Click for Video Demo!</a></button>
                </div>
                <div class="project-img-contain">
                    <img class = "project-images" src={zoomies} alt = "Ninja Zoomies"/> 
                </div>
            </div>
            <div class="project-card">
                <div class="project-text">
                    <h4>ASL Hand Signal Translator</h4>
                    <p class = "project-basic">A translator that captures images of ASL hand signals
                        and translates them into letters.
                    </p>
                    <p class = "project-description">The ASL Translator, Ephphatha, is a translator which is able to recognize ASL hand signals of the English alphabet from an image, and translate
                        those signals into written letters. Ephphatha was built using a Raspberry Pi and a machine learning model. The images are captured by the Raspberry Pi camera and the output letter
                        is displayed on a Flask webapp.<br></br>This project was created by 5 Software Engineering students from the University
                        of Waterloo.
                    </p>
                    <button class = "viewmore"><a href = "https://www.youtube.com/watch?v=Kypr42PMlr0">Click for Video Demo!</a></button>
                </div>
                <div class="project-img-contain">
                    <img class = "project-images" src = {ASL} alt = "Hand Signal Translator"/> 
                </div>
            </div>
            <div class="project-card">
                <div class="project-text">
                    <h4>Mental Health Chatbot</h4>
                    <p class = "project-basic">A chatbot which provides users with mental health advice.
                    </p>
                    <p class = "project-description">The Mental Health Chatbot project consisted of 3 chatbots, all able to interact 
                        with a user and provide mental healh advice. Models used included an ELIZA-based model, a Seq2Seq model made up of 2 LSTMs, 
                        and a SOTA model. The chatbot was able to hold a simple conversation with the user by responding to questions 
                        and providing advice.
                    </p>
                    <p class = "project-description">This project was created as part of the InspiritAI program.
                    </p>
                    
                </div>
                <div class="project-img-contain">
                    <img class = "project-images" src={woebot} alt = "Woebot"/> 
                </div>
            </div>
        </section>
        <section>
            <h2 id = "Experience">Experience</h2>
            <hr></hr>   
            <div class="pengpuff-card">
                <h5>Pengpuff Crochets | <em>Self-Employed</em></h5>
                <p class = "pengpuff-info">At the start of the pandemic, I launched my long-time passion project;
                    a crochet pattern shop. 
                </p>
                <p class = "pengpuff-info">As co-founder, and now the sole owner of the shop, I've designed social media posts on 
                    various social media platforms including Instagram, Pinterest, Facebook, and Tiktok. At the same time, I've committed
                    hours to researching and implementing marketing strategies to boost social media engagement, reach, and customer sales.
                    In just the first year of opening the shop, we sold over 30 patterns, and increased
                    our social media following by 500%!
                </p>
            </div>
            
            <section class="slideshow-section">
                <div id = "photo-slideshow">
                    <figure>
                        <img src={cannoliSnake} alt = "Crochet Cannoli Snake"/> 
                        <img src={catTart} alt = "Crochet Cat Tart"/> 
                        <img src={turtleKeychain} alt = "Crochet Macaron Turtle Keychain"/> 
                        <img src={rollSnail} alt = "Crochet Swiss Roll Snail"/> 
                        <img src={octoDango} alt = "Crochet Octopus Dango"/> 
                        <img src={monster} alt = "Crochet Chocolate Monster"/> 
                        <img src={bat} alt = "Crochet Superhero Bat"/> 
                        <img src={dolls} alt = "Crochet Set of 5 Dolls"/> 
                        <img src={appleDoll}alt = "Crochet Green Apple Doll"/> 
                        <img src={pearBear} alt = "Crochet Pear Bear"/> 

                    </figure>
                </div>
            </section>
            <div class="other-exp">
            <h5>Volunteer Work</h5>
            <hr></hr>
                <div class="exp-card">
                    <div class="img-contain">
                        <img class = "exp-pic" src={swimming} alt = "Swimming pool"/> 
                    </div>
                    <div class="text">
                        <h4 class = "exp-titles">Aquatic Volunteering</h4>
                        <p class = "experience-info">
                            As an avid swimmer in my early years, I began volunteering as a pool receptionist before being an 
                            aquatic volunteer at my local pool. As a receptionist, I managed the swimming attendance lists, provided assistance to visitors,
                            and managed ticket sales for community centre events. As an aquatic volunteer, I had the opportunity 
                            to work with students first-hand and help them build on their aquatic skills. 
                        </p>
                    </div> 
                </div>
                <div class="exp-card">
                    <div class="img-contain">
                        <img class = "exp-pic" src={library} alt = "Shelf of books"/> 
                    </div>
                    <div class="text">
                        <h4 class = "exp-titles">RHPL Teen Advisory Group Member</h4>
                        <p class="experience-info">
                            Prior to COVID-19, I was a member of the Richmond Hill Public Library's Teen Advisory Group. During the 
                            two years I spent in this group, I was part of the decision making and execution of events catered to teens in the library.
                            We met biweekly to discuss ideas on how to bring more teens to the library, including an interactive
                            sticky note board, guest speaker events which included both photography and lyric-writing workshops, and monthly game nights.
                        </p>
                    </div>
                </div> 
                <h5>Leadership</h5>
                <hr></hr>
                <div class="exp-card">
                    <div class="img-contain">
                        <img class = "exp-pic" src={yarn} alt = "Stack of several coloured yarns"/> 
                    </div>
                    <div class="text">
                        <h4 class = "exp-titles">President - Textile Design Club</h4>
                        <p class="experience-info">
                            For the last two years of high school, I was the President of my school’s Textile Design Club, 
                            a club dedicated to teaching students how to knit, crochet, sew, and pick up new skills.
                            Each week students had the opportunity to learn a new skill, and create cute and easy projects
                            to test out their newfound skills!
                        </p>
                    </div>
                </div>
                <div class="exp-card">
                    <div class="img-contain">
                        <img class = "exp-pic" src={music} alt = "Varshaa playing bass"/> 
                    </div>
                    <div class="text">
                        <h4 class = "exp-titles">Public Relations/Co-Vice President - Music Committee</h4>
                        <p class = "experience-info">
                            I acted as both the Public Relations and Co-Vice President at my school's Music Commitee; a commitee run by music 
                            students to help run events for the music program. During my time in the Commitee, we ran 3 successful concerts, 
                            followed by an online concert during the COVID-19 pandemic. 
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <footer class = "footer-section">
            <h2 id = "Contact-Me">Contact Me</h2>
            <hr></hr>
            <p class = "footer-info"></p>
            <div class = "contact-buttons">
                <a href="mailto:varshaa.maxwell@gmail.com"><img class = "contact-img" src={email} alt = "Email" /></a>
                <a href ="https://www.linkedin.com/in/varshaa-maxwell/"><img class = "contact-img" src={linkedin} alt = "Linkedin" /></a>
                <a href= "https://github.com/vas057"><img class = "contact-img" src={github} alt = "Github" /></a> 

            </div>
            

        </footer>        
    </div>
    )

}

// export default homepage
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{60:function(e,t,a){e.exports=a(74)},65:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n,r,o=a(5),l=a(6),i=a(8),c=a(7),s=a(9),m=a(0),u=a.n(m),p=a(42),d=a.n(p),h=(a(65),a(90)),g=a(75),f=a(91),b=a(84),E=a(85),y=a(86),k=a(87),w=a(88);!function(e){e[e.Home=0]="Home",e[e.About=1]="About",e[e.Contact=2]="Contact",e[e.Projects=3]="Projects",e[e.EtchASketch=4]="EtchASketch",e[e.Reflections=5]="Reflections"}(n||(n={})),function(e){e[e.Up=0]="Up",e[e.Down=1]="Down",e[e.Left=2]="Left",e[e.Right=3]="Right",e[e.None=4]="None"}(r||(r={}));var v=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement(h.a,null,u.a.createElement(g.a,{direction:"row",background:"brand",round:!0},u.a.createElement(f.a,{margin:"small",label:"Home",icon:u.a.createElement(b.a,null),primary:this.props.pageState===n.Home,onClick:this.props.handleHomeClick}),u.a.createElement(f.a,{margin:"small",label:"About",primary:this.props.pageState===n.About,icon:u.a.createElement(E.a,null),onClick:this.props.handleAboutClick}),u.a.createElement(f.a,{margin:"small",primary:this.props.pageState===n.Projects,label:"Projects",icon:u.a.createElement(y.a,null),onClick:this.props.handleProjectsClick}),u.a.createElement(f.a,{margin:"small",primary:this.props.pageState===n.Reflections,label:"Reflections",icon:u.a.createElement(k.a,null),onClick:this.props.handleReflectionsClick}),u.a.createElement(f.a,{margin:"small",primary:this.props.pageState===n.Contact,label:"Contact",icon:u.a.createElement(w.a,null),onClick:this.props.handleContactClick})))}}]),t}(u.a.Component),j=a(92),C=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("h1",null," ","My name is Max Medberry, and I'm a senior in Computer Engineering at Iowa State University."),u.a.createElement(j.a,{size:"large"},"This is a small personal site to present and link to some of my personal information and projects. Click on a button at the top to learn more about me or what I've been working on!"))}}]),t}(u.a.Component),S=a(93),O=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(S.a,{level:"2"},"About Me"),u.a.createElement(j.a,null,"I'm a senior in Computer Engineering at Iowa State University. My main area of interest in in software engineering. Languages I have worked in Java, C, C#, JavaScript, and TypeScript. I also have experience in frameworks like .NET Core, Express.js, Node.js, and especially ReactJS. I have done projects in embedded design, desktop applications with internet connectivity, and web apps."),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement(j.a,null," ","I am also a member of Tau Beta Pi, an engineering honor society, and currently work as a pharmacy technician part-time."))}}]),t}(u.a.Component),R=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(S.a,{level:"2"},"Contact information"),u.a.createElement(j.a,{size:"large"},"Phone: \u202a(515)-337-2496"),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement(j.a,{size:"large"},"Email: medberry@iastate.edu"),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("a",{href:"Max-Medberry-Resume-sept-2019-emt.pdf"},u.a.createElement(j.a,{size:"large"},"Resume")),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("a",{href:"https://github.com/mmedberry"},u.a.createElement(j.a,{size:"large"},"Github")))}}]),t}(u.a.Component),I=a(89),A=a(94),P=a(95),T=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(S.a,{level:"2"},"Project Information"),u.a.createElement(I.a,null,u.a.createElement(A.a,{label:u.a.createElement(j.a,{size:"large"},"Mars Rover - Embedded Systems")},u.a.createElement(j.a,null,"This was a project I did for Cpr E 288: Embedded Systems Engineering. In this project I was on a three person team that created a prototype mars rover based on an ARM processor and an iRobot Roomba using C. We were able to connect to the rover over Wi-Fi and give it commands and receive data back. Commands given to the rover consisted of movement and surveying the surroundings. The robot was able to take IR and sonar readings of objects in its vicinity and record collisions, and send that data back to the team over Wi-Fi. We demonstrated the functionality of our rover by using it to navigate a course littered with objects into a target zone while limiting collisions."),u.a.createElement(P.a,{fit:"cover",src:"./rover.jpg",alignSelf:"start"})),u.a.createElement(A.a,{label:u.a.createElement(j.a,{size:"large"},"ProjectX Engine - Software Dev Practices")},u.a.createElement(g.a,null,u.a.createElement(j.a,null,"This was a project I did for Com S 309: Software Development Practices. In this project I was part of a team that created a modular game engine and desktop game application based on that game engine. The game engine was created in Java and is capable of efficiently rendering a 2-D game. The game engine supports multiplayer functionality with a dedicated server machine for hosting peer-to-peer play.")),u.a.createElement(g.a,{responsive:!0,direction:"column",alignContent:"start"},u.a.createElement(g.a,{pad:"small",basis:"1/2"},u.a.createElement(P.a,{fit:"cover",src:"./gameScreen.png",alignSelf:"start"}),u.a.createElement(j.a,null,"Above is an in-game screen from the ProjectX game engine. Players are able to move, pick up and use objects, and attack other players or NPC's. The game can support multiple players through the use of online multiplayer via a dedicated server."),u.a.createElement("br",null),u.a.createElement(j.a,null,"The grid overlay, path making diagrams, and entity borders are all game developer only tools to help create the game.")),u.a.createElement(g.a,{basis:"1/2",pad:"small",overflow:"auto"},u.a.createElement(P.a,{fit:"cover",src:"./projectDesign.png",alignSelf:"start"})," ",u.a.createElement(j.a,null,"Above is the project design overview. We designed our game engine to allow game designers to be as removed from the coding as possible when they want to design a new game."),u.a.createElement("br",null),u.a.createElement(j.a,null,"The modularity of the game engine means that a developer can create a full fledged game with only some 2-D sprites, a .txt file to generate the world from, and some new or modified Enum data.")))),u.a.createElement(A.a,{label:u.a.createElement(j.a,{size:"large"},"Drawme.io - Construction of User Interfaces")},u.a.createElement(j.a,null,"We created an online multiplayer game where players submit an image, and other players try to be the best to redraw that image. I was project leader on this team and divised the core idea and architure of the project, and led the team meetings and communication. We decided a web application was the best way to develop the game, and this was my first exposure to many web technologies. I also gained some experience in leading a team. We used some common industry tools like JavaScript, HTML/HTML generator engines, and Express.js framework server."," ")),u.a.createElement(A.a,{label:u.a.createElement(j.a,{size:"large"},"Realtime Volumetric Analysis - Senior Design")},u.a.createElement(j.a,null,"My senior design team is currently working on creating a UAV capable of using AI to do volumetric analysis of objects, and fly autonomously. My position on the team was chief backend engineer, and I created programs to interface the hardware of the drone with external software programs. This project has taught me about software architecture, project planning, and team work and communication. Some specific technical skills I learned was ROS framework, Linux operating system, and the C++ programming language. I also contributed to the team by reading up on ROS framework and quickly became the team's go to for references and direction within ROS.")),u.a.createElement(A.a,{label:u.a.createElement(u.a.Fragment,null,u.a.createElement(j.a,{size:"large"},"Software Development Internship - Buildertrend"))},u.a.createElement(j.a,null,"During the summer of 2019 I had the opportunity to intern at Buildertrend in Omaha, Nebraska. I learned a lot about organizational structure at technology companies, and the modern Microsoft web app tech stack. As part of a team working on converting existing webpages into React (a JavaScript/TypeScript frontend framework), I learned how to work as part of a team in an agile work environment, with peers, managers, and project planning. Some specific skills I worked on over the summer were C# (specifically .NET Core and Entity framework), TypeScript, and SQL. Buildertrend was a great company to work with and they gave me a lot of opportunity to learn and grow, especially in the area of web development."))))}}]),t}(u.a.Component),z=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={keys:"",direction:r.None},a.componentDidMount=function(){document.addEventListener("keydown",a.logKey)},a.componentWillUnmount=function(){document.removeEventListener("keydown",a.logKey)},a.turnRight=function(){console.log("right")},a.turnLeft=function(){console.log("left")},a.turnBack=function(){console.log("back")},a.turnUp=function(){console.log("up")},a.logKey=function(e){var t=a.state.keys+e.key;a.setState({keys:t}),"ArrowLeft"===e.key||"a"===e.key?a.turnLeft():"ArrowRight"===e.key||"d"===e.key?a.turnRight():"ArrowDown"===e.key||"s"===e.key?a.turnBack():"ArrowUp"!==e.key&&"w"!==e.key||a.turnUp()},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(j.a,null,this.state.keys))}}]),t}(u.a.Component),M=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(S.a,{level:"2"},"Reflections"),u.a.createElement("a",{href:"genEdReflection.pdf"},u.a.createElement(j.a,{size:"large"},"General Education Reflection")),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("a",{href:"cumulativeReflection.pdf"},u.a.createElement(j.a,{size:"large"},"Cumulative Reflection")),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("a",{href:"engineering_ethics.pdf"},u.a.createElement(j.a,{size:"large"},"Engineering Ethics")))}}]),t}(u.a.Component),D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={page:u.a.createElement(C,null)},a.handleHomeClick=function(){a.setState({page:u.a.createElement(C,null),pageState:n.Home}),console.log(a.props.pageState)},a.handleAboutClick=function(){a.setState({page:u.a.createElement(O,null),pageState:n.About})},a.handleContactClick=function(){a.setState({page:u.a.createElement(R,null),pageState:n.Contact})},a.handleProjectsClick=function(){a.setState({page:u.a.createElement(T,null),pageState:n.Projects})},a.handleEtchASketchClick=function(){a.setState({page:u.a.createElement(z,null),pageState:n.EtchASketch})},a.handleReflectionsClick=function(){a.setState({page:u.a.createElement(M,null),pageState:n.Reflections})},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(v,{handleHomeClick:this.handleHomeClick,handleAboutClick:this.handleAboutClick,handleContactClick:this.handleContactClick,handleProjectsClick:this.handleProjectsClick,handleEtchASketchClick:this.handleEtchASketchClick,handleReflectionsClick:this.handleReflectionsClick,pageState:this.state.pageState}),this.state.page)}}]),t}(u.a.Component);d.a.render(u.a.createElement(D,null),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.30b50091.chunk.js.map
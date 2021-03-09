(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{103:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return r})),i.d(t,"metadata",(function(){return l})),i.d(t,"rightToc",(function(){return c})),i.d(t,"default",(function(){return p}));var a=i(159),n=i(160),o=(i(0),i(161)),r={title:"Proposal to Incubate a new React Application",hide_title:!0,slug:"/rfc/active/2055-react-app",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/rfc/active/2055-react-app/README.md"},l={unversionedId:"docs/rfc/active/2055-react-app/README",id:"docs/rfc/active/2055-react-app/README",isDocsHomePage:!1,title:"Proposal to Incubate a new React Application",description:"- Start Date: 1/12/2020",source:"@site/genDocs/docs/rfc/active/2055-react-app/README.md",slug:"/rfc/active/2055-react-app",permalink:"/docs/rfc/active/2055-react-app",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/rfc/active/2055-react-app/README.md",version:"current",sidebar:"overviewSidebar",previous:{title:"GraphQL Frontend (Part 1)",permalink:"/docs/rfc/active/2042-graphql_frontend/queries"},next:{title:"Tags",permalink:"/docs/rfc/active/tags"}},c=[{value:"Proposal",id:"proposal",children:[]},{value:"Goals",id:"goals",children:[]},{value:"Non Goals",id:"non-goals",children:[]},{value:"Motivation",id:"motivation",children:[{value:"Design Principles",id:"design-principles",children:[]},{value:"Functional Requirements",id:"functional-requirements",children:[]},{value:"Architecture",id:"architecture",children:[]}]},{value:"How we teach this",id:"how-we-teach-this",children:[]},{value:"Alternatives",id:"alternatives",children:[{value:"Evolve the Ember App in place",id:"evolve-the-ember-app-in-place",children:[]},{value:"Mixing Ember &amp; React",id:"mixing-ember--react",children:[]}]},{value:"Rollout / Adoption Strategy",id:"rollout--adoption-strategy",children:[]},{value:"Open Questions",id:"open-questions",children:[]}],s={rightToc:c};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Start Date: 1/12/2020"),Object(o.b)("li",{parentName:"ul"},"RFC PR: 2055"),Object(o.b)("li",{parentName:"ul"},"Implementation PR(s): N/A")),Object(o.b)("h1",{id:"proposal-to-incubate-a-new-react-application"},"Proposal to Incubate a new React Application"),Object(o.b)("h2",{id:"proposal"},"Proposal"),Object(o.b)("p",null,"In this document, we propose the incubation of a new React application inside the DataHub repository. \u2018Incubation\u2019 implies iterative development by the community over time, as opposed to a big-bang rewrite, which is impractical given the scope of work."),Object(o.b)("p",null,"We\u2019ll begin by outlining the motivations for this proposal, followed by a characterization of the design principles & functional requirements, and conclude with a look at the proposed architecture. We will largely omit specific implementation details from this RFC, which will be left to subsequent RFCs + PRs."),Object(o.b)("h2",{id:"goals"},"Goals"),Object(o.b)("p",null,"The goal of this RFC is to get community buy-in on the development of a React app that will exist in parallel to the existing Ember app inside the DataHub repository."),Object(o.b)("h2",{id:"non-goals"},"Non Goals"),Object(o.b)("p",null,"The following are omitted from the scope of this RFC"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"GraphQL server-side implementation (Play Server versus separate server)"),Object(o.b)("li",{parentName:"ul"},"Specific React component architecture"),Object(o.b)("li",{parentName:"ul"},"Specific tech / tooling choices within React ecosystem (state mgmt, client, etc)")),Object(o.b)("h2",{id:"motivation"},"Motivation"),Object(o.b)("p",null,"The primary motivation behind developing a new React app is improving the reach & accessibility of DataHub. It\u2019s no secret that React is a much more popular technology than Ember by the numbers:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"React GitHub stars: ~160k"),Object(o.b)("li",{parentName:"ul"},"Ember GitHub stars: ~20k")),Object(o.b)("p",null,"Adopting a more familiar stack will facilitate an active community by lowering the barrier to contribution, in addition to providing access to a richer ecosystem."),Object(o.b)("p",null,"A secondary motivation is that a new client would allow us to address tech debt present in the existing Ember app, including"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Legacy & unused code"),": Special handling logic exists to support legacy versions of DataHub (ie. WhereHows). An example of this can be found in ",Object(o.b)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/datahub-web/@datahub/data-models/addon/entity/dataset/utils/legacy.ts"},"legacy.ts"),". Additionally, there is code that goes unused in the OSS client, such as that pertaining to Dataset ",Object(o.b)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/datahub-web/packages/data-portal/app/utils/datasets/compliance-suggestions.ts"},"compliance"),". A new client will provide legibility benefits, lacking historical baggage.")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Difficulty of extension"),": Given the lack of formal guidance, steep learning curve for Ember (& the addon structure), & presence of legacy / unused code, it is nontrivial to extend the existing web client.")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Difficulty of customization"),": There is a lack of clear customization levers for modifying the Ember application. Because DataHub is deployed in a variety of different organizations, it would be useful to support customization of",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Theme: How it looks (color, ux, assets, copy)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Features: How it behaves (enable / disable features)"),Object(o.b)("p",{parentName:"li"},"out of the box!"))))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Coupling with GMA"),": GMA concepts of ",Object(o.b)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/datahub-web/@datahub/data-models/addon/entity/base-entity.ts"},"entity")," and ",Object(o.b)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/datahub-web/@datahub/data-models/addon/entity/utils/aspects.ts"},"aspect")," are rooted in the Ember client. With the new client, we can revisit the abstractions exposed to the client side & look for opportunities to simplify.")),Object(o.b)("p",null,"A clean slate will allow us to address these items, improving the frontend development experience & making community contribution easier."),Object(o.b)("p",null,"It is important to note that we are not proposing deprecation of the Ember client at this time. Maintenance and feature development should be free to continue on Ember as the React app evolves in isolation."),Object(o.b)("h3",{id:"design-principles"},"Design Principles"),Object(o.b)("p",null,"In developing the new application, it is important that we have an agreed-upon set of design principles to guide our decisions."),Object(o.b)("p",null,"Such principles should promote the health of the community (eg. by increasing the likelihood of contribution) & the value proposition of the DataHub product for organizations (eg. by permitting domain-specific modification of the default deployment)."),Object(o.b)("p",null,"Specifically, the new client should be"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Extensible"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Modular, composable architecture "),Object(o.b)("li",{parentName:"ul"},"Formal guidance on extending the client to support domain-specific needs")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Configurable"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Clear, consistent, & documented levers to alter style & behavior between DataHub deployments"),Object(o.b)("li",{parentName:"ul"},"Support injection of custom \u2018applets\u2019 or \u2018widgets\u2019 where appropriate")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Scalable"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An architecture suited for scale, both along the people & feature dimensions"),Object(o.b)("li",{parentName:"ul"},"Easy to contribute! ")),Object(o.b)("p",null,"These principles should serve as evaluation criteria used by authors & reviewers of application changes."),Object(o.b)("h3",{id:"functional-requirements"},"Functional Requirements"),Object(o.b)("h4",{id:"near-term"},"Near term"),Object(o.b)("p",null,"Initially, our goal is to achieve functional parity with the existing Ember frontend for common use-cases. Specifically, the React app should support"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Authenticating a user"),Object(o.b)("li",{parentName:"ul"},"Displaying metadata entities"),Object(o.b)("li",{parentName:"ul"},"Updating metadata entities  "),Object(o.b)("li",{parentName:"ul"},"Browsing metadata entities"),Object(o.b)("li",{parentName:"ul"},"Searching metadata entities"),Object(o.b)("li",{parentName:"ul"},"Managing a user account")),Object(o.b)("p",null,"The finer details of which entities fall into each feature bucket will be dictated by the needs of the community, with the short-term milestone to achieve parity with entities appearing in the Ember client (Datasets, CorpUsers)."),Object(o.b)("h4",{id:"long-term"},"Long term"),Object(o.b)("p",null,"In the longer term, we will work with the community to define a more extensive functional road map, which may include"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Providing migration pathway from the Ember application to the React application"),Object(o.b)("li",{parentName:"ul"},"New entities, aspects, operations (eg. Dashboards, Charts, etc)"),Object(o.b)("li",{parentName:"ul"},"Custom, server-driven \u2018extensions\u2019 or \u2018applets\u2019 to display in the UI"),Object(o.b)("li",{parentName:"ul"},"Admin Dashboard"),Object(o.b)("li",{parentName:"ul"},"Metrics Collection"),Object(o.b)("li",{parentName:"ul"},"Social features\n& more!")),Object(o.b)("h3",{id:"architecture"},"Architecture"),Object(o.b)("p",null,"The figure below depicts the updated DataHub architecture given this proposal:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"react-architecture",src:i(235).default})),Object(o.b)("p",null,"Where the boxes outlined in green denote newly introduced components."),Object(o.b)("p",null,"Notice that the app will be completely independent of the existing Ember client, meaning there are no compatibility risks for existing deployments. Moreover, the React app will communicate exclusively with a GraphQL server (See ",Object(o.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/pulls?q=is%3Apr+is%3Aclosed"},"RFC 2042")," for proposal). This will improve the frontend development experience by providing "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"a clearly defined API contract"),Object(o.b)("li",{parentName:"ul"},"simplified state management (via Apollo GQL client -- no redux required)"),Object(o.b)("li",{parentName:"ul"},"auto-generated models for queries and data types")),Object(o.b)("p",null,"That\u2019s the extent of the technical specifics we\u2019ll cover for now. Stay tuned for a proof-of-concept PR coming soon that will present an initial React shell."),Object(o.b)("h2",{id:"how-we-teach-this"},"How we teach this"),Object(o.b)("p",null,"A major goal of this initiative is to develop a frontend web client that can be easily extended by the DataHub community. Toward that end, we will provide documentation detailing the process of changing the frontend client to do things like:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add a new entity page"),Object(o.b)("li",{parentName:"ul"},"Extend an existing entity page"),Object(o.b)("li",{parentName:"ul"},"Enable / disable specific features"),Object(o.b)("li",{parentName:"ul"},"Modify configurations"),Object(o.b)("li",{parentName:"ul"},"Test new components\n& more!")),Object(o.b)("h2",{id:"alternatives"},"Alternatives"),Object(o.b)("h3",{id:"evolve-the-ember-app-in-place"},"Evolve the Ember App in place"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"What?"),": Iterate on the existing Ember appclient."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Why not?")," Firstly, we actually do not consider this to be mutually exclusive with introducing a separate React app. Regardless, there are benefits to adopting a more accessible technology like React that do not change with improvements to the existing Ember app."),Object(o.b)("h3",{id:"mixing-ember--react"},"Mixing Ember & React"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"What?"),": Migrate from Ember to React incrementally by incrementally replacing Ember components with React components."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Why not?"),": The intermediate state of a half-react, half-ember app is something we\u2019d rather not think about -- it\u2019s scary & sad. We\u2019d like to avoid degrading client-side developer experience with this type of complexity. Since this migration will take some time, we feel it more productive to iterate independently."),Object(o.b)("h2",{id:"rollout--adoption-strategy"},"Rollout / Adoption Strategy"),Object(o.b)("p",null,"As described above, the rollout of the React frontend will be iterative. In the short term, existing deployments will continue using Ember. In the long term, organizations will be free to validate and migrate to the new client at their own pace."),Object(o.b)("h2",{id:"open-questions"},"Open Questions"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Can we reuse code from the Ember client?")),Object(o.b)("p",null,"Great Question :) Yes -- we should actively try to extract as much common code as possible from Ember (most likely shared UI components), so long as it conforms to the principles laid out above. This will hopefully speed up the development process and allow for improvements across both clients at the same time.  "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Which GMS entities should appear in the new frontend? Which update operations?")),Object(o.b)("p",null,"This is something we\u2019ll look to the community to help define! Initially, we\u2019ll target functional parity with the Ember app, which today supports"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"reading Dataset & CorpUser"),Object(o.b)("li",{parentName:"ul"},"writing certain Dataset aspects (eg. ownership) ")))}p.isMDXComponent=!0},159:function(e,t,i){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}i.d(t,"a",(function(){return a}))},160:function(e,t,i){"use strict";function a(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}i.d(t,"a",(function(){return a}))},161:function(e,t,i){"use strict";i.d(t,"a",(function(){return b})),i.d(t,"b",(function(){return m}));var a=i(0),n=i.n(a);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},b=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(i),d=a,m=b["".concat(r,".").concat(d)]||b[d]||u[d]||o;return i?n.a.createElement(m,l(l({ref:t},s),{},{components:i})):n.a.createElement(m,l({ref:t},s))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=i[s];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},235:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/react-architecture-a613596502fdcbcdc7e1a0b423da5a1b.png"}}]);
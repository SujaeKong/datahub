(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{112:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(159),i=a(160),o=(a(0),a(161)),r={title:"Tags",hide_title:!0,slug:"/rfc/active/tags",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/rfc/active/tags/README.md"},s={unversionedId:"docs/rfc/active/tags/README",id:"docs/rfc/active/tags/README",isDocsHomePage:!1,title:"Tags",description:"- Start Date: 2021-02-17",source:"@site/genDocs/docs/rfc/active/tags/README.md",slug:"/rfc/active/tags",permalink:"/docs/rfc/active/tags",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/rfc/active/tags/README.md",version:"current",sidebar:"overviewSidebar",previous:{title:"Proposal to Incubate a new React Application",permalink:"/docs/rfc/active/2055-react-app"}},l=[{value:"Summary",id:"summary",children:[]},{value:"Motivation",id:"motivation",children:[]},{value:"Requirements",id:"requirements",children:[{value:"Extensibility",id:"extensibility",children:[]}]},{value:"Non-Requirements",id:"non-requirements",children:[]},{value:"Detailed design",id:"detailed-design",children:[{value:"<code>Tag</code> entity",id:"tag-entity",children:[]},{value:"<code>TagAttachment</code>",id:"tagattachment",children:[]},{value:"<code>Tags</code> container",id:"tags-container",children:[]}]},{value:"How we teach this",id:"how-we-teach-this",children:[]},{value:"Drawbacks",id:"drawbacks",children:[]},{value:"Alternatives",id:"alternatives",children:[]},{value:"Rollout / Adoption Strategy",id:"rollout--adoption-strategy",children:[]},{value:"Future Work",id:"future-work",children:[]},{value:"Unresolved questions",id:"unresolved-questions",children:[]}],c={rightToc:l};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Start Date: 2021-02-17"),Object(o.b)("li",{parentName:"ul"},"RFC PR: ",Object(o.b)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/pull/2112"},"https://github.com/linkedin/datahub/pull/2112")),Object(o.b)("li",{parentName:"ul"},"Discussion Issue: (GitHub issue this was discussed in before the RFC, if any)"),Object(o.b)("li",{parentName:"ul"},"Implementation PR(s): (leave this empty)")),Object(o.b)("h1",{id:"tags"},"Tags"),Object(o.b)("h2",{id:"summary"},"Summary"),Object(o.b)("p",null,"We suggest a generic, global tagging solution for Datahub. As the solution is quite generic and flexible, it can also\nhopefully serve as an stepping stone for new, cool features in the future."),Object(o.b)("h2",{id:"motivation"},"Motivation"),Object(o.b)("p",null,"Currently some entities, such as Datasets, can be tagged using strings, but unfortunately this solution is quite\nlimited."),Object(o.b)("p",null,"A general tag implementation will allow us to define and attach a new and simple type of metadata to all type of\nentities. As the tags would be defined globally, tagging multiple objects with the same tag will give us the possibility\nto define and search based on a new kind of relationship, for example which datasets and ML Models that are tagged to\ninclude PII data. This allows for describing relationships between object that would otherwise not have a direct lineage\nrelationship. Moreover, tags would lower that bar to add simple metadata to any object in the Datahub instance and open\nthe door to crowd-sourcing metadata. Remembering that tags themselves are entities, it would also be possible to tag\ntags, enabling a hierarchy of sorts."),Object(o.b)("p",null,"The solution is meant to be quite generic and flexible, and we're not trying to be too opinionated about how a user\nshould use the feature. We hope that this initial generic solution can serve as a stepping stone for cool futures in the\nfuture."),Object(o.b)("h2",{id:"requirements"},"Requirements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Ability to associate tags with any type of entity, even other tags!"),Object(o.b)("li",{parentName:"ul"},"Ability to tag the same entity with multiple tags."),Object(o.b)("li",{parentName:"ul"},"Ability to tag multiple objects with the same tag instance."),Object(o.b)("li",{parentName:"ul"},"To the point above, ability to make easy tag-based searches later on."),Object(o.b)("li",{parentName:"ul"},"Metadata on tags is TBD")),Object(o.b)("h3",{id:"extensibility"},"Extensibility"),Object(o.b)("p",null,"The normal new-entity-onboarding work is obviously required."),Object(o.b)("p",null,"Hopefully this can serve as a stepping stone to work on special cases such as the tag-based privacy tagging mentioned in\nthe roadmap."),Object(o.b)("h2",{id:"non-requirements"},"Non-Requirements"),Object(o.b)("p",null,"Let's leave the UI work required for this to another time."),Object(o.b)("h2",{id:"detailed-design"},"Detailed design"),Object(o.b)("p",null,"We want to introduce some new under ",Object(o.b)("inlineCode",{parentName:"p"},"datahub/metadata-models/src/main/pegasus/com/linkedin/common/"),"."),Object(o.b)("h3",{id:"tag-entity"},Object(o.b)("inlineCode",{parentName:"h3"},"Tag")," entity"),Object(o.b)("p",null,"First we create a ",Object(o.b)("inlineCode",{parentName:"p"},"TagMetadata")," entity, which defines the actual tag-object."),Object(o.b)("p",null,"The edit property defines the edit rights of the tag, as some tags (like sensitivity tags) should be read-only for a\nmajority of users"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"/**\n * Tag information\n */\nrecord TagMetadata {\n   /**\n   * Tag URN, e.g. urn:li:tag:<name>\n   */\n   urn: TagUrn\n\n   /**\n   * Tag value.\n   */\n   value: string\n\n   /**\n   * Optional tag description\n   */\n   description: optional string\n\n   /**\n   * Audit stamp associated with creation of this tag\n   */\n   createStamp: AuditStamp\n}\n")),Object(o.b)("h3",{id:"tagattachment"},Object(o.b)("inlineCode",{parentName:"h3"},"TagAttachment")),Object(o.b)("p",null,"We define a ",Object(o.b)("inlineCode",{parentName:"p"},"TagAttachment"),"-model, which describes the application of a tag to a entity"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"/**\n * Tag information\n */\nrecord TagAttachment {\n\n  /**\n   * Tag in question\n   */\n  tag: TagUrn\n\n  /**\n   * Who has edit rights to this employment.\n   * WIP, pending access-control support in Datahub.\n   * Relevant for privacy tags at least.\n   * We might also want to add view rights?\n   */\n  edit: union[None, any, role-urn]\n\n   /**\n   * Audit stamp associated with employment of this tag to this entity\n   */\n   attachmentStamp: AuditStamp\n}\n")),Object(o.b)("h3",{id:"tags-container"},Object(o.b)("inlineCode",{parentName:"h3"},"Tags")," container"),Object(o.b)("p",null,"Then we define a ",Object(o.b)("inlineCode",{parentName:"p"},"Tags"),"-aspect, which is used as a container for tag employments."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"namespace com.linkedin.common\n\n/**\n * Tags information\n */\nrecord Tags {\n\n   /**\n   * List of tag employments\n   */\n   elements: array[TagAttachment] = [ ]\n}\n")),Object(o.b)("p",null,"This can easily be taken into use with wall entities that we want to be able to use tags, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"Datasets"),". As we see a\nlot of potential in tagging individual dataset fields as well, we can either add a reference to a Tags-object in the\n",Object(o.b)("inlineCode",{parentName:"p"},"SchemaField")," object, or alternative create a new ",Object(o.b)("inlineCode",{parentName:"p"},"DatasetFieldTags"),", similar to ",Object(o.b)("inlineCode",{parentName:"p"},"DatasetFieldMapping"),"."),Object(o.b)("h2",{id:"how-we-teach-this"},"How we teach this"),Object(o.b)("p",null,"We should create/update user guides to educate users for:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Suggestions on how to use tags: low threshold metadata-addition, and the possibility of doing new types of searches")),Object(o.b)("h2",{id:"drawbacks"},"Drawbacks"),Object(o.b)("p",null,"This is definitely more complex than just adding strings to an array."),Object(o.b)("h2",{id:"alternatives"},"Alternatives"),Object(o.b)("p",null,"An array of string is a simple solution but does allow for the same functionality as suggested here."),Object(o.b)("p",null,"Another alternative would be simplify the models by removing some of the metadata in the ",Object(o.b)("inlineCode",{parentName:"p"},"TagMetadata")," and\n",Object(o.b)("inlineCode",{parentName:"p"},"TagAttachment")," entities, such as the the edit/view permission field, the audit stamps, and the descriptions."),Object(o.b)("p",null,'Apache Atlas uses a similar approach. The require you to create a Tag instance before it can be associated with an\n"asset", and the attachment is done using a dropdown list. The tags can also have attributes and a description. See\n',Object(o.b)("a",{parentName:"p",href:"https://docs.cloudera.com/HDPDocuments/HDP2/HDP-2.5.3/bk_data-governance/content/ch_working_with_atlas_tags.html"},"here"),"\nfor an example. The tags are a central piece in the UI and readably searchable, as easily as datasets."),Object(o.b)("p",null,"Atlas also has concept very closely related to tags, called ",Object(o.b)("em",{parentName:"p"},"classification"),". Classifications are similar to tags in\nthat they need to be created separately, can have attributes (but no description?) and are attached to assets is done\nusing a dropdown list. Classifications have the added functionality of propagation, which means that they are\nautomatically applied to downstream assets, unless specifically set to not do so. Any change to a classification (say an\nattribute change) also flows downstream, and in downstream assets you're able to see from where the classification\npropagated from. See\n",Object(o.b)("a",{parentName:"p",href:"https://docs.cloudera.com/HDPDocuments/HDP3/HDP-3.1.5/using-atlas/content/propagate_classifications_to_derived_entities.html"},"here"),"\nfor an example."),Object(o.b)("h2",{id:"rollout--adoption-strategy"},"Rollout / Adoption Strategy"),Object(o.b)("p",null,"Using the functionality is optional and does not break other functionality as is. The solution is generic enough that\nthe users can easily take into use. It can be take into use as any other entity and aspect."),Object(o.b)("h2",{id:"future-work"},"Future Work"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"add ",Object(o.b)("inlineCode",{parentName:"li"},"Tags")," to aspects for entities."),Object(o.b)("li",{parentName:"ul"},"Implement relationship builders as needed."),Object(o.b)("li",{parentName:"ul"},"The implementation of and need for access control to tags is an open question"),Object(o.b)("li",{parentName:"ul"},"As this is first and foremost a tool for discovery, the UI work is extensible:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Creating tags in a way that makes duplication and spelling mistakes difficult."),Object(o.b)("li",{parentName:"ul"},"Attaching tags to entities: autocomplete, dropdown, etc."),Object(o.b)("li",{parentName:"ul"},"Visualizing existing tags, and which are most popular?"))),Object(o.b)("li",{parentName:"ul"},'Explore the idea about a special "classification" type, that propagates downstream, as in Atlas.')),Object(o.b)("h2",{id:"unresolved-questions"},"Unresolved questions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"How do we want to map dataset fields to tags?"),Object(o.b)("li",{parentName:"ul"},"Do we want to implement edit/view rights?")))}d.isMDXComponent=!0},159:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},160:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}a.d(t,"a",(function(){return n}))},161:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),p=n,h=u["".concat(r,".").concat(p)]||u[p]||b[p]||o;return a?i.a.createElement(h,s(s({ref:t},c),{},{components:a})):i.a.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);
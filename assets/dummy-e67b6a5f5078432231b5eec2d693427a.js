define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,a,n,d){"use strict";var r;t["default"].MODEL_FACTORY_INJECTIONS=!0,r=t["default"].Application.extend({modulePrefix:d["default"].modulePrefix,podModulePrefix:d["default"].podModulePrefix,Resolver:a["default"]}),n["default"](r,d["default"].modulePrefix),e["default"]=r}),define("dummy/components/t-add",["exports","ember-cli-transformicons/components/t-add"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/components/t-grid",["exports","ember-cli-transformicons/components/t-grid"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/components/t-loader",["exports","ember-cli-transformicons/components/t-loader"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/components/t-mail",["exports","ember-cli-transformicons/components/t-mail"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/components/t-menu",["exports","ember-cli-transformicons/components/t-menu"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/components/t-remove",["exports","ember-cli-transformicons/components/t-remove"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/components/t-video",["exports","ember-cli-transformicons/components/t-video"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/controllers/add",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller.extend({isAdded:!1,actions:{updateAddControllerProperty:function(e){this.set("isAdded",e)}}})}),define("dummy/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/controllers/grid",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller.extend({isGridOpen:!1,actions:{updateGridControllerProperty:function(e){this.set("isGridOpen",e)}}})}),define("dummy/controllers/mail",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller.extend({hasUnreadMail:!0,actions:{updateMailControllerProperty:function(e){this.set("hasUnreadMail",e)}}})}),define("dummy/controllers/menu",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller.extend({isMenuOpen:!1,actions:{updateMenuControllerProperty:function(e){this.set("isMenuOpen",e)}}})}),define("dummy/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/controllers/remove",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller.extend({isRemoved:!1,actions:{updateRemoveControllerProperty:function(e){this.set("isRemoved",e)}}})}),define("dummy/controllers/video",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller.extend({isVideoPlaying:!1,actions:{updateVideoControllerProperty:function(e){this.set("isVideoPlaying",e)}}})}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,a){"use strict";function n(e,n){var d=t["default"].String.classify(a["default"].modulePrefix);a["default"].exportApplicationGlobal&&!window[d]&&(window[d]=n)}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("dummy/instance-initializers/app-version",["exports","dummy/config/environment","ember"],function(e,t,a){"use strict";var n=a["default"].String.classify,d=!1;e["default"]={name:"App Version",initialize:function(e){if(!d){var r=n(e.toString());a["default"].libraries.register(r,t["default"].APP.version),d=!0}}}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,a){"use strict";var n=t["default"].Router.extend({location:a["default"].locationType});n.map(function(){this.route("menu"),this.route("grid"),this.route("add"),this.route("remove"),this.route("mail"),this.route("video"),this.route("loader")}),e["default"]=n}),define("dummy/routes/index",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({beforeModel:function(){this.transitionTo("menu")}})}),define("dummy/templates/add",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:14,column:0}},moduleName:"dummy/templates/add.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("h2"),n=e.createTextNode("Add");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("h3"),n=e.createTextNode("animation");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode("{{t-add}}");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode('{{t-add a="minus"}}');e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode('{{t-add a="check"}}');e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode('{{t-add a="typo"}}');e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("h3"),n=e.createTextNode("is-added");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode("{{t-add is-added=true}}");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("h3"),n=e.createTextNode("action");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode('{{t-add is-added=isAdded action="updateAddControllerProperty"}}');e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode("isAdded = ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(7);return n[0]=e.createMorphAt(t,6,6,a),n[1]=e.createMorphAt(t,10,10,a),n[2]=e.createMorphAt(t,14,14,a),n[3]=e.createMorphAt(t,18,18,a),n[4]=e.createMorphAt(t,24,24,a),n[5]=e.createMorphAt(t,30,30,a),n[6]=e.createMorphAt(e.childAt(t,[32]),1,1),n},statements:[["inline","t-add",[],["id","add-default"],["loc",[null,[3,24],[3,50]]]],["inline","t-add",[],["a","minus"],["loc",[null,[4,34],[4,53]]]],["inline","t-add",[],["a","check"],["loc",[null,[5,34],[5,53]]]],["inline","t-add",[],["a","typo"],["loc",[null,[6,33],[6,51]]]],["inline","t-add",[],["is-added",!0],["loc",[null,[9,38],[9,61]]]],["inline","t-add",[],["is-added",["subexpr","@mut",[["get","isAdded",["loc",[null,[12,95],[12,102]]]]],[],[]],"action","updateAddControllerProperty"],["loc",[null,[12,78],[12,141]]]],["content","isAdded",["loc",[null,[13,13],[13,24]]]]],locals:[],templates:[]}}())}),define("dummy/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:14,column:0}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("h1");e.setAttribute(a,"id","title");var n=e.createTextNode("ember-cli-transformicons");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("nav");e.setAttribute(a,"class","site-nav");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[2]),d=new Array(8);return d[0]=e.createMorphAt(n,1,1),d[1]=e.createMorphAt(n,3,3),d[2]=e.createMorphAt(n,5,5),d[3]=e.createMorphAt(n,7,7),d[4]=e.createMorphAt(n,9,9),d[5]=e.createMorphAt(n,11,11),d[6]=e.createMorphAt(n,13,13),d[7]=e.createMorphAt(t,4,4,a),d},statements:[["inline","link-to",["Menu","menu"],[],["loc",[null,[4,2],[4,27]]]],["inline","link-to",["Grid","grid"],[],["loc",[null,[5,2],[5,27]]]],["inline","link-to",["Add","add"],[],["loc",[null,[6,2],[6,25]]]],["inline","link-to",["Remove","remove"],[],["loc",[null,[7,2],[7,31]]]],["inline","link-to",["Mail","mail"],[],["loc",[null,[8,2],[8,27]]]],["inline","link-to",["Video","video"],[],["loc",[null,[9,2],[9,29]]]],["inline","link-to",["Loader","loader"],[],["loc",[null,[10,2],[10,31]]]],["content","outlet",["loc",[null,[13,0],[13,10]]]]],locals:[],templates:[]}}())}),define("dummy/templates/components/t-add",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/templates/components/t-add.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("span");e.setAttribute(a,"class","tcon-visuallyhidden");var n=e.createTextNode("add item");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("dummy/templates/components/t-grid",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:3,column:0}},moduleName:"dummy/templates/components/t-grid.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("span");e.setAttribute(a,"class","tcon-grid__item"),e.setAttribute(a,"aria-hidden","true"),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("span");e.setAttribute(a,"class","tcon-visuallyhidden");var n=e.createTextNode("toggle grid");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("dummy/templates/components/t-loader",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/templates/components/t-loader.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("span");e.setAttribute(a,"class","tcon-visuallyhidden");var n=e.createTextNode("loading");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("dummy/templates/components/t-mail",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:3,column:0}},moduleName:"dummy/templates/components/t-mail.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("span");e.setAttribute(a,"class","tcon-mail--envelope__flap"),e.setAttribute(a,"aria-hidden","true"),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("span");e.setAttribute(a,"class","tcon-visuallyhidden");var n=e.createTextNode("open mailbox");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("dummy/templates/components/t-menu",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:3,column:0}},moduleName:"dummy/templates/components/t-menu.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("span");e.setAttribute(a,"class","tcon-menu__lines"),e.setAttribute(a,"aria-hidden","true"),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("span");e.setAttribute(a,"class","tcon-visuallyhidden");var n=e.createTextNode("toggle menu");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("dummy/templates/components/t-remove",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/templates/components/t-remove.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("span");e.setAttribute(a,"class","tcon-visuallyhidden");var n=e.createTextNode("remove item");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("dummy/templates/components/t-video",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/templates/components/t-video.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("span");e.setAttribute(a,"class","tcon-visuallyhidden");var n=e.createTextNode("play video");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("dummy/templates/grid",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:14,column:0}},moduleName:"dummy/templates/grid.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("h2"),n=e.createTextNode("Grid");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("h3"),n=e.createTextNode("animation");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode("{{t-grid}}");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode('{{t-grid a="rearrange"}}');e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode('{{t-grid a="collapse"}}');e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode('{{t-grid a="typo"}}');e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("h3"),n=e.createTextNode("is-open");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode("{{t-grid is-open=true}}");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("h3"),n=e.createTextNode("action");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode('{{t-grid is-open=isGridOpen action="updateGridControllerProperty"}}');e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode("isGridOpen = ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(7);return n[0]=e.createMorphAt(t,6,6,a),n[1]=e.createMorphAt(t,10,10,a),n[2]=e.createMorphAt(t,14,14,a),n[3]=e.createMorphAt(t,18,18,a),n[4]=e.createMorphAt(t,24,24,a),n[5]=e.createMorphAt(t,30,30,a),n[6]=e.createMorphAt(e.childAt(t,[32]),1,1),n},statements:[["inline","t-grid",[],["id","grid-default"],["loc",[null,[3,25],[3,53]]]],["inline","t-grid",[],["a","rearrange"],["loc",[null,[4,39],[4,63]]]],["inline","t-grid",[],["a","collapse"],["loc",[null,[5,38],[5,61]]]],["inline","t-grid",[],["a","typo"],["loc",[null,[6,34],[6,53]]]],["inline","t-grid",[],["is-open",!0],["loc",[null,[9,38],[9,61]]]],["inline","t-grid",[],["is-open",["subexpr","@mut",[["get","isGridOpen",["loc",[null,[12,99],[12,109]]]]],[],[]],"action","updateGridControllerProperty"],["loc",[null,[12,82],[12,149]]]],["content","isGridOpen",["loc",[null,[13,16],[13,30]]]]],locals:[],templates:[]}}())}),define("dummy/templates/loader",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"dummy/templates/loader.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("h2"),n=e.createTextNode("Loader");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode("{{t-loader}}");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(t,4,4,a),n},statements:[["inline","t-loader",[],["id","loader-default"],["loc",[null,[3,27],[3,59]]]]],locals:[],templates:[]}}())}),define("dummy/templates/mail",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:10,column:0}},moduleName:"dummy/templates/mail.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("h2"),n=e.createTextNode("Mail");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code");e.setAttribute(a,"class","mail");var n=e.createTextNode("{{t-mail}}");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("h3"),n=e.createTextNode("is-open");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code");e.setAttribute(a,"class","mail");var n=e.createTextNode("{{t-mail is-open=false}}");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("h3"),n=e.createTextNode("action");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code");e.setAttribute(a,"class","mail");var n=e.createTextNode('{{t-mail is-open=hasUnreadMail action="updateMailControllerProperty"}}');e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode("hasUnreadMail = ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(4);return n[0]=e.createMorphAt(t,4,4,a),n[1]=e.createMorphAt(t,10,10,a),n[2]=e.createMorphAt(t,16,16,a),n[3]=e.createMorphAt(e.childAt(t,[18]),1,1),n},statements:[["inline","t-mail",[],["id","mail-default"],["loc",[null,[2,38],[2,66]]]],["inline","t-mail",[],["is-open",!1],["loc",[null,[5,52],[5,76]]]],["inline","t-mail",[],["is-open",["subexpr","@mut",[["get","hasUnreadMail",["loc",[null,[8,115],[8,128]]]]],[],[]],"action","updateMailControllerProperty"],["loc",[null,[8,98],[8,168]]]],["content","hasUnreadMail",["loc",[null,[9,19],[9,36]]]]],locals:[],templates:[]}}())}),define("dummy/templates/menu",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:18,column:0}},moduleName:"dummy/templates/menu.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("h2"),n=e.createTextNode("Menu");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("h3"),n=e.createTextNode("animation");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode("{{t-menu}}");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode('{{t-menu a="butterfly"}}');e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode('{{t-menu a="minus"}}');e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode('{{t-menu a="x-cross"}}');e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode('{{t-menu a="arrow-up"}}');e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode('{{t-menu a="arrow-360-left"}}');e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode('{{t-menu a="arrow-left"}}');e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode('{{t-menu a="typo"}}');e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("h3"),n=e.createTextNode("is-open");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode("{{t-menu is-open=true}}");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("h3"),n=e.createTextNode("action");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode('{{t-menu is-open=isMenuOpen action="updateMenuControllerProperty"}}');e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode("isMenuOpen = ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(11);return n[0]=e.createMorphAt(t,6,6,a),n[1]=e.createMorphAt(t,10,10,a),n[2]=e.createMorphAt(t,14,14,a),n[3]=e.createMorphAt(t,18,18,a),n[4]=e.createMorphAt(t,22,22,a),n[5]=e.createMorphAt(t,26,26,a),n[6]=e.createMorphAt(t,30,30,a),n[7]=e.createMorphAt(t,34,34,a),n[8]=e.createMorphAt(t,40,40,a),n[9]=e.createMorphAt(t,46,46,a),n[10]=e.createMorphAt(e.childAt(t,[48]),1,1),n},statements:[["inline","t-menu",[],["id","menu-default"],["loc",[null,[3,25],[3,53]]]],["inline","t-menu",[],["a","butterfly"],["loc",[null,[4,39],[4,63]]]],["inline","t-menu",[],["a","minus"],["loc",[null,[5,35],[5,55]]]],["inline","t-menu",[],["a","x-cross"],["loc",[null,[6,37],[6,59]]]],["inline","t-menu",[],["a","arrow-up"],["loc",[null,[7,38],[7,61]]]],["inline","t-menu",[],["a","arrow-360-left"],["loc",[null,[8,44],[8,73]]]],["inline","t-menu",[],["a","arrow-left"],["loc",[null,[9,40],[9,65]]]],["inline","t-menu",[],["a","typo"],["loc",[null,[10,34],[10,53]]]],["inline","t-menu",[],["is-open",!0],["loc",[null,[13,38],[13,61]]]],["inline","t-menu",[],["is-open",["subexpr","@mut",[["get","isMenuOpen",["loc",[null,[16,99],[16,109]]]]],[],[]],"action","updateMenuControllerProperty"],["loc",[null,[16,82],[16,149]]]],["content","isMenuOpen",["loc",[null,[17,16],[17,30]]]]],locals:[],templates:[]}}())}),define("dummy/templates/remove",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:15,column:32}},moduleName:"dummy/templates/remove.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("h2"),n=e.createTextNode("Remove");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode("{{t-remove}}");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode('{{t-remove a="check"}}');e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode('{{t-remove a="chevron-left"}}');e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode('{{t-remove a="chevron-right"}}');e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode('{{t-remove a="chevron-down"}}');e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode('{{t-remove a="chevron-up"}}');e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode('{{t-remove a="typo"}}');e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("h3"),n=e.createTextNode("is-removed");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode("{{t-remove is-removed=true}}");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("h3"),n=e.createTextNode("action");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode('{{t-remove is-removed=isRemoved action="updateRemoveControllerProperty"}}');e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode("isRemoved = ");e.appendChild(a,n);var n=e.createComment("");return e.appendChild(a,n),e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(10);return n[0]=e.createMorphAt(t,4,4,a),n[1]=e.createMorphAt(t,8,8,a),n[2]=e.createMorphAt(t,12,12,a),n[3]=e.createMorphAt(t,16,16,a),n[4]=e.createMorphAt(t,20,20,a),n[5]=e.createMorphAt(t,24,24,a),n[6]=e.createMorphAt(t,28,28,a),n[7]=e.createMorphAt(t,34,34,a),n[8]=e.createMorphAt(t,40,40,a),n[9]=e.createMorphAt(e.childAt(t,[42]),1,1),n},statements:[["inline","t-remove",[],["id","remove-default"],["loc",[null,[2,27],[2,59]]]],["inline","t-remove",[],["a","check"],["loc",[null,[3,37],[3,59]]]],["inline","t-remove",[],["a","chevron-left"],["loc",[null,[4,44],[4,73]]]],["inline","t-remove",[],["a","chevron-right"],["loc",[null,[5,45],[5,75]]]],["inline","t-remove",[],["a","chevron-down"],["loc",[null,[6,44],[6,73]]]],["inline","t-remove",[],["a","chevron-up"],["loc",[null,[7,42],[7,69]]]],["inline","t-remove",[],["a","typo"],["loc",[null,[8,36],[8,57]]]],["inline","t-remove",[],["is-removed",!0],["loc",[null,[11,43],[11,71]]]],["inline","t-remove",[],["is-removed",["subexpr","@mut",[["get","isRemoved",["loc",[null,[14,110],[14,119]]]]],[],[]],"action","updateRemoveControllerProperty"],["loc",[null,[14,88],[14,161]]]],["content","isRemoved",["loc",[null,[15,15],[15,28]]]]],
locals:[],templates:[]}}())}),define("dummy/templates/video",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:10,column:0}},moduleName:"dummy/templates/video.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("h2"),n=e.createTextNode("Video");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode("{{t-video}}");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("h3"),n=e.createTextNode("is-playing");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode("{{t-video is-playing=true}}");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("h3"),n=e.createTextNode("action");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("code"),n=e.createTextNode('{{t-video is-playing=isVideoPlaying action="updateVideoControllerProperty"}}');e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode("isVideoPlaying = ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(4);return n[0]=e.createMorphAt(t,4,4,a),n[1]=e.createMorphAt(t,10,10,a),n[2]=e.createMorphAt(t,16,16,a),n[3]=e.createMorphAt(e.childAt(t,[18]),1,1),n},statements:[["inline","t-video",[],["id","video-default"],["loc",[null,[2,26],[2,56]]]],["inline","t-video",[],["is-playing",!0],["loc",[null,[5,42],[5,69]]]],["inline","t-video",[],["is-playing",["subexpr","@mut",[["get","isVideoPlaying",["loc",[null,[8,112],[8,126]]]]],[],[]],"action","updateVideoControllerProperty"],["loc",[null,[8,91],[8,167]]]],["content","isVideoPlaying",["loc",[null,[9,20],[9,38]]]]],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),d=JSON.parse(unescape(n));return{"default":d}}catch(r){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-cli-transformicons",version:"0.3.0+3a28c4e1"});
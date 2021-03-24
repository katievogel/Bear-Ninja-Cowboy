goog.provide('com.github.katievogel.bear_ninja_cowboy.util.dom');
com.github.katievogel.bear_ninja_cowboy.util.dom.query_select = (function com$github$katievogel$bear_ninja_cowboy$util$dom$query_select(qs){
return document.querySelector(qs);
});
com.github.katievogel.bear_ninja_cowboy.util.dom.attach_click_event_BANG_ = (function com$github$katievogel$bear_ninja_cowboy$util$dom$attach_click_event_BANG_(qs,the_fn){
var el = com.github.katievogel.bear_ninja_cowboy.util.dom.query_select(qs);
return el.addEventListener("click",the_fn);
});

//# sourceMappingURL=com.github.katievogel.bear_ninja_cowboy.util.dom.js.map

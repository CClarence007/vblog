(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{536:function(t,s,a){"use strict";a.r(s);var n=a(6),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"了解javascript函数的参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#了解javascript函数的参数"}},[t._v("#")]),t._v(" 了解Javascript函数的参数")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[t._v("Javascript语言可能是世界上最不关心函数参数的语言。它既不关心传入参数的个数，也不关心这些参数的数据类型。所以，嘲讽一个人时，作为一个前端程序员，大可以用“你对社会的价值，就像JS函数里的参数一样————可有可无”。")])]),a("ol",[a("li",[a("h3",{attrs:{id:"arguments对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments对象"}},[t._v("#")]),t._v(" arguments对象")])])]),t._v(" "),a("p",[t._v("在使用function关键字定义（非箭头）函数时，可以在函数内部访问到arguments对象，从中取得传进来的每个参数值。 arguments对象是一个"),a("font",{attrs:{color:"red"}},[a("b",[t._v("类数组对象")])]),a("br"),t._v("\n那么什么是类对象数组呢？"),a("br"),t._v(" "),a("font",{attrs:{color:"red"}},[a("b",[t._v("类数组对象是指可以通过索引属性访问元素并且拥有length属性的对象")])]),a("br")],1),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arrayLike "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'age'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'job'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    length"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arrayLike"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ['name','age','job']")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("上面例子中的"),a("code",[t._v("arrayLike")]),t._v("就是类数组对象,并且可以通过"),a("code",[t._v("Array.from")]),t._v("方法将类数组对象转成数组；"),a("br")]),t._v(" "),a("p",[t._v("Javascript语言可能是世界上最不关心函数参数的语言。它既不关心传入参数的个数，也不关心这些参数的数据类型。所以，嘲讽一个人时，作为一个前端程序员，大可以用“你对社会的价值，就像JS函数里的参数一样————可有可无”。"),a("br")]),t._v(" "),a("p",[t._v("事实上，定义函数的参数只是为了方便才写出来的，而不是必须写出来的。在调用函数时，所有的参数都会顺序保存在arguments对象里。命名参数与对应位置的arguments中存储的值是同步的，也就是修改两者任意一个值，会自动同步到对应的另一个值。但这并不是说两者两者访问同一个内存地址，它们在内存中还是分开的，只不过会保持同步而已。如果传入的参数比命名参数少了，那么后面的参数就自动设值为undefined，这就是定义了变量而没有初始化。"),a("br")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("h3",{attrs:{id:"es6的默认参数值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6的默认参数值"}},[t._v("#")]),t._v(" ES6的默认参数值")])])]),t._v(" "),a("p",[t._v("在ES6的写法中，只要在函数定义的参数后用=就可以为参数赋一个默认值。"),a("br")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createPeople")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'will'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'29'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("job"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'engineer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Hello, My name is ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(", ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(", and I am a ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("job"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createPeople")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "Hello, My name is will, 29, and I am a engineer."')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h4",{attrs:{id:"默认参数作用域-与-暂时性死区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认参数作用域-与-暂时性死区"}},[t._v("#")]),t._v(" 默认参数作用域 与 暂时性死区")]),t._v(" "),a("ul",[a("li",[t._v("函数的多个参数设置默认参数时类似使用let顺序声明多个变量")]),t._v(" "),a("li",[t._v("如果有参数A的默认值是某一个参数B，那么B的声明必须在前面，否则会出现暂时性死区")])])])}),[],!1,null,null,null);s.default=r.exports}}]);
/*
 *  made by Colin Chen
 *  自己写的一个js框架
 *  begin at 2016-12-01
 *  updating...
 *  end in the future
 */

// 创建命名空间，这么写是为了避免与以前的全局对象冲突
var Colin = Colin || function () { };

Colin.World = function (options) {
    var world = {
        // 第一章、字符串处理
        /**
         * 去掉字符串左端的空格
         */
        LTrim: function (str) {
            while (str.charAt(0) == " ") {
                str = str.substring(1, str.length);
                ltrim(str);
            }
        },
        /**
         * 去掉字符串右端的空格
         */
        RTrim: function (str) {
            while (str.charAt(str.length - 1) == " ") {
                str = str.substring(0, str.length - 1);
                rtrim(str);
            }
            return str
        },







        // 第二章、数字处理
        /**
         * Compute the distance between Cartesian points (x1,y1) and (x2,y2)
         */
        distance: function (x1, y1, x2, y2) {
            var dx = x2 - x1;
            var dy = y2 - y1;
            return Math.sqrt(dx * dx + dy * dy);
        },
        /**
         * A recursive function (one that calls itself) that computes factorials
         * Recall that x! is the product of x and all positive integers less than it.
         */
        factorial: function (x) {
            if (x <= 1) return 1;
            return x * factorial(x - 1);
        },

        // 第三章、对象处理
        /*
         * Copy the enumerable properties of p to o, and return o.
         * If o and p have a property by the same name, o's property is overwritten.
         * This function does not handle getters and setters or copy attributes.
         */
        extend: function (o, p) {
            for (prop in p) { // For all props in p.
                o[prop] = p[prop]; // Add the property to o.
            }
            return o;
        },
        /*
         * Define an extend function that copies the properties of its second and subsequent arguments onto its first argument.
         * We work around an IE bug here: in many versions of IE, the for/in loop won't enumerate an enumerable property of o 
         * if the prototype of o has a nonenumerable property by the same name. 
         * This means that properties like toString are not handled correctly unless we explicitly check for them.
         */
        extendAll: (function () {  // Assign the return value of this function 
            // First check for the presence of the bug before patching it.
            for (var p in { toString: null }) {
                // If we get here, then the for/in loop works correctly and we return a simple version of the extend() function
                return function extend(o) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i];
                        for (var prop in source) o[prop] = source[prop];
                    }
                    return o;
                };
            }
            // If we get here, it means that the for/in loop did not enumerate the toString property of the test object. 
            // So return a version of the extend() function that explicitly tests for the nonenumerable properties of Object.prototype.
            return function patched_extend(o) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    // Copy all the enumerable properties
                    for (var prop in source) o[prop] = source[prop];
                    // And now check the special-case properties
                    for (var j = 0; j < protoprops.length; j++) {
                        prop = protoprops[j];
                        if (source.hasOwnProperty(prop)) o[prop] = source[prop];
                    }
                }
                return o;
            };
            // This is the list of special-case properties we check for
            var protoprops = ["toString", "valueOf", "constructor", "hasOwnProperty",
                "isPrototypeOf", "propertyIsEnumerable", "toLocaleString"];
        }()),
        /*
         * returns a newly created object that inherits properties from the prototype object p.
         * It uses the ECMAScript 5 function Object.create() if it is defined, and otherwise falls back to an older technique.
         */
        inherit: function () {
            if (p == null) throw TypeError(); // p must be a non-null object
            if (Object.create)                // If Object.create() is defined...
                return Object.create(p);      // then just use it.
            var t = typeof p;                 // Otherwise do some more type checking
            if (t !== "object" && t !== "function") throw TypeError();
            function f() { };                 // Define a dummy constructor function.
            f.prototype = p;                  // Set its prototype property to p.
            return new f();                   // Use f() to create an "heir" of p.
        },
        /*
         * Copy the enumerable properties of p to o, and return o.
         * If o and p have a property by the same name, o's property is left alone.
         * This function does not handle getters and setters or copy attributes.
         */
        merge: function (o, p) {
            for (prop in p) { // For all props in p.
                if (o.hasOwnProperty[prop]) continue;// Except those already in o.
                o[prop] = p[prop]; // Add the property to o.
            }
            return o;
        },
        /*
         * Remove properties from o if there is not a property with the same name in p.
         * Return o.
         */
        restrict: function (o, p) {
            for (prop in o) { // For all props in o
                if (!(prop in p)) delete o[prop]; // Delete if not in p
            }
            return o;
        },
        /*
         * For each property of p, delete the property with the same name from o.
         * Return o.
         */
        subtract: function (o, p) {
            for (prop in p) { // For all props in p
                delete o[prop]; // Delete from o (deleting a nonexistent prop is harmless)
            }
            return o;
        },
        /*
         * Return a new object that holds the properties of both o and p.
         * If o and p have properties by the same name, the values from o are used.
         */
        union: function (o, p) {
            return extend(extend({}, o), p);
        },
        /*
         * Return a new object that holds only the properties of o that also appear in p.
         * This is something like the intersection of o and p, but the values of the properties in p are discarded
         */
        intersection: function (o, p) {
            return restrict(extend({}, o), p);
        },
        /**
         * This function adds property accessor methods for a property with the specified name to the object o.
         * The methods are named get<name> and set<name>.
         * If a predicate function is supplied, the setter method uses it to test its argument for validity before storing it.
         * If the predicate returns false, the setter method throws an exception.
         * The unusual thing about this function is that the property value that is manipulated by the getter and setter methods is not stored in the object o.
         * Instead, the value is stored only in a local variable in this function.
         * The getter and setter methods are also defined locally to this function and therefore have access to this local variable.
         * This means that the value is private to the two accessor methods, and it cannot be set or modified except through the setter method.
         */
        addPrivateProperty: function (o, name, predicate) {
            var value;  // This is the property value
            // The getter method simply returns the value.
            o["get" + name] = function () { return value; };
            // The setter method stores the value or throws an exception if the predicate rejects the value.
            o["set" + name] = function (v) {
                if (predicate && !predicate(v))
                    throw Error("set" + name + ": invalid value " + v);
                else
                    value = v;
            };
        },
        /*
         * Return an array that holds the names of the enumerable own properties of o.
         */
        keys: function (o) {
            if (typeof o !== "object") throw TypeError(); // Object argument required
            var result = []; // The array we will return
            for (var prop in o) { // For all enumerable properties
                if (o.hasOwnProperty(prop)) // If it is an own property
                    result.push(prop); // add it to the array.
            }
            return result; // Return the array.
        },
        /**
         * 返回数据类型
         * @param {any} o
         */
        classOf: function (o) {
            if (o === null) return "Null";
            if (o === undefined) return "Undefined";
            return Object.prototype.toString.call(o).slice(8, -1);
        },


        /*
         * 1、创建 XmlHttpRequest 对象
         * 2、接收服务器返回的数据[注册监听]
         *    怎接收？什么时候接收呢？
         *    onreadystatechange事件处理函数由服务器触发，而不是用户
         *    在 Ajax 执行过程中，服务器会通知客户端当前的通信状态。通信状态的改变要激发函数的执行
         *    readyState 属性表示 Ajax 请求的当前状态。它的值用数字代表。
         *               0 代表未初始化。 还没有调用 open 方法
         *               1 代表正在加载。 open 方法已被调用，但 send 方法还没有被调用
         *               2 代表已加载完毕。send 已被调用。请求已经开始
         *               3 代表交互中。服务器正在发送响应
         *               4 代表完成。响应发送完毕
         * 3、打开和服务器的连接
         *    xmlHttp.open("get", "../testServlet", true);
         *    参数1: 请求方法  get post
         *    参数2: 请求的路径
         *    参数3: 表示请求是否要异步传输，默认值为true(异步)
         * 4、发送数据到服务器端
         *    如果请求方法是 get，此时 send 方法不能发送数据到服务器端，即使发送了数据,服务器端也接收不到，该参数设置 null
         *    如果请求方法是 post，此时 send 方法可以发送数据到服务器端，如："a=9&b=8"
         */
        ajaxFunc: function (url, params, callback) {
            var xmlHttpRequest = getXmlHttp();
            xmlHttpRequest.onreadystatechange = function () {
                if (xmlHttpRequest.readyState == 4) {
                    if (xmlHttpRequest.status == 200 || xmlHttpRequest.status == 304) {
                        // 接收服务器端返回的数据
                        // data 从服务器端传递过来时，就是一个普通的字符串，此字符串不能被 javaScript 识别
                        var data = xmlHttpRequest.responseText;
                        // var xmlDoc = xmlHttp.responseXML;
                        // 函数 eval 把字符串转化为 javaScript 可以识别的格式
                        var dataObj = eval("(" + data + ")");
                        if (callback) {
                            callback(dataObj);
                        }
                    }
                }
            }
            xmlHttpRequest.open("post", url, true);
            // 如果请求方法是 post，需要设置 Content-Type 的类型，该方法必须放置在 open 方法的后面
            xmlHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xmlHttpRequest.send(params);

            /**
             * 获取 XmlHttpRequest 对象
             */
            function getXmlHttp() {
                var xmlHttpRequest;
                try {
                    // Firefox, Opera 8.0+, Safari
                    xmlHttpRequest = new XMLHttpRequest();
                }
                catch (e) {
                    try {
                        // Internet Explorer
                        xmlHttpRequest = new ActiveXObject("Msxml2.XMLHTTP");
                    }
                    catch (e) {
                        try {
                            xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
                        }
                        catch (e) {

                        }
                    }
                }
                return xmlHttpRequest;
            }
        },

        // 执行函数(通过参数传入)并处理异常
        execFuncWithExec: function (func) {
            try {
                if (typeof func != 'function') {
                    throw '只能传入一个函数对象！';
                }
                func();
            } catch (exception) {
                console.log(exception);
            }
        },

        // 自动化测试
        assert: function (name, x) {
            if (!x) {
                throw 'Assertion failed: ' + name;
            }
        },

        // 统计数组中某个元素的数量
        itemCountsInArray: function (item, array) {
            /*
            function counter(total, element) {
                return total + (element === item ? 1 : 0);
            }
            return reduce(counter, 0, array);
            */
            function isItem(x, item) {
                return x === item;
            }
            return count(isItem, array, item);
        },

        // 数学方法
        maths: {
            // 相加
            add: function (a, b) {
                return a + b;
            },
            // 求和(已过时)
            sum_old: function (numbers) {
                var total = 0;
                forEach(numbers, function (number) {
                    total += number;
                });
                return total;
            },
            // 求和
            sum: function (numbers) {
                return reduce(this.add, 0, numbers);
            }
        },

        /*
            1)用空行分隔段落
            2)用 % 开头的段落是标题，% 越多，标题越小
            3)在段落里，将某些文本放在星号(*)之间进行强调
            4)脚注写在花括号里
        */
        formatWrite: function (recluseFile) {
            var paragraphs = recluseFile.split('\n\n');

            // 从正常段落里分离出标题段落
            function processParagraph(paragraph) {
                var header = 0;
                while (paragraph.charAt(header) == '%') {
                    header++;
                }
                if (header > 0) {
                    return { type: "h" + header, content: splitParagraph(paragraph.slice(header + 1)) };
                } else {
                    return { type: "p", content: splitParagraph(paragraph) };
                }
            }

            // 强调与脚注
            function splitParagraph(text) {
                // (已过时)通过递归实现，函数式语言方式，js不太适合，递归很慢，有溢出堆栈的风险
                function split_old(pos) {
                    if (pos == text.length) {
                        return [];
                    } else if (text.charAt(pos) == "*") {
                        var end = findClosing("*", pos + 1);
                        var frag = { type: "emphasized", content: text.slice(pos + 1, end) };
                        // 下面这样调用不太好，每次都创建新数组
                        return [frag].concat(split(end + 1));
                    } else if (text.charAt(pos) == "{") {
                        var end = findClosing("}", pos + 1);
                        var frag = { type: "footnote", content: text.slice(pos + 1, end) };
                        return [frag].concat(split(end + 1));
                    } else {
                        var end = findOpeningOrEnd(pos);
                        var frag = { type: "normal", content: text.slice(pos, end) };
                        return [frag].concat(split(end));
                    }
                }

                // 代替上面的方法
                function split() {
                    var pos = 0;
                    var fragments = [];
                    while (pos < text.length) {
                        if (text.charAt(pos) == "*") {
                            var end = findClosing("*", pos + 1);
                            fragments.push({ type: "emphasized", content: text.slice(pos + 1, end) });
                            pos = end + 1;
                        } else if (text.charAt(pos) == "{") {
                            var end = findClosing("}", pos + 1);
                            fragments.push({ type: "footnote", content: text.slice(pos + 1, end) });
                            pos = end + 1;
                        } else {
                            var end = findOpeningOrEnd(pos);
                            fragments.push({ type: "normal", content: text.slice(pos, end) });
                            pos = end;
                        }
                    }
                    return fragments;
                }

                function findClosing(character, from) {
                    var end = text.indexOf(character, from);
                    if (end == -1) throw new Error("Missing closing '" + character + "'");
                    else return end;
                }

                function findOpeningOrEnd(from) {
                    function indexOfEnd(character) {
                        var index = text.indexOf(character, from);
                        return index == -1 ? text.length : index;
                    }
                    return Math.min(indexOfEnd("*"), indexOfEnd("{"));
                }

                return split(0);
            }

            // 移动脚注
            function extractFootnotes(paragraphs) {
                var footnotes = [];
                var currentNote = 0;

                function replaceFootnote(fragment) {
                    if (fragment.type == "footnote") {
                        currentNote++;
                        footnotes.push(fragment);
                        fragment.number = currentNote;
                        return { type: "reference", number: currentNote };
                    } else {
                        return fragment;
                    }
                }

                forEach(paragraphs, function (paragraph) {
                    paragraph.content = map(replaceFootnote, paragraph.content)
                });

                return footnotes;
            }

            // 生成html
            function tag(name, content, attributes) {
                return { name: name, attributes: attributes, content: content };
            }

            function link(target, text) {
                return tag("a", [text], { href: target });
            }

            function htmlDoc(title, bodyContent) {
                return tag("html", [tag("head", [tag("title", [title])]), tag("body", bodyContent)]);
            }

            // 替换特殊字符
            function escapeHTML(text) {
                var replacements = [[/&/g, "&amp;"], [/"/g, "&quot;"], [/</g, "&lt;"], [/>/g, "&gt;"]];
                forEach(replacements, function (replace) {
                    text = text.replace(replace[0], replace[1]);
                });
                return text;
            }

            // 将Html属性转换成字符串
            function renderAttributes() {

            }

            var formatParagraphs = map(processParagraph, paragraphs);
        },

        /**
         * 跨浏览器的解析xml文件的函数
         * @param {Object} xmlFileName
         */
        parseXML: function (xmlFileName) {
            var xmlDoc;
            try {
                //Internet Explorer  创建一个空的xml文档
                xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
            }
            catch (e) {
                try {
                    //Firefox, Mozilla, Opera, 创建一个空的xml文档
                    xmlDoc = document.implementation.createDocument("", "", null);
                }
                catch (e) {

                }
            }
            //关闭异步加载
            xmlDoc.async = false;
            //加载xml文件
            xmlDoc.load(fileXmlName);
            return xmlDoc;
        },

        // 第四章、数组处理

        // 第五章、函数处理

        // 第六章、其它功能
        /**
         * 保存Cookie
         */
        setCookie: function (name, value, expires, path, domain, secure) {
            var curCookie = name + "=" + escape(value) +
                ((expires) ? "; expires=" + expires.toGMTString() : "") +
                ((path) ? "; path=" + path : "") +
                ((domain) ? "; domain=" + domain : "") +
                ((secure) ? "; secure" : "")
            if ((name + "=" + escape(value)).length <= 4000)
                document.cookie = curCookie
            else
                if (confirm("Cookie exceeds 4KB and will be cut!"))
                    document.cookie = curCookie
        },
        /**
         * 获取Cookie
         */
        getCookie: function (name) {
            var prefix = name + "="
            var cookieStartIndex = document.cookie.indexOf(prefix)
            if (cookieStartIndex == -1)
                return null
            var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length)
            if (cookieEndIndex == -1)
                cookieEndIndex = document.cookie.length
            return unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex))
        },
        /**
         * 删除Cookie
         */
        deleteCookie: function (name, path, domain) {
            if (this.getCookie(name)) {
                document.cookie = name + "=" +
                    ((path) ? "; path=" + path : "") +
                    ((domain) ? "; domain=" + domain : "") +
                    "; expires=Thu, 01-Jan-70 00:00:01 GMT"
            }
        },
        /**
         * 获取浏览器信息
         */
        getClientInfo: function () {
            document.write("浏览器名称: " + navigator.appName + "<br>");
            document.write("版本号: " + navigator.appVersion + "<br>");
            document.write("代码名字: " + navigator.appCodeName + "<br>");
        },
        /**
         * 固定元素位置在左上角
         */
        keepIt: function (elemName) {
            function KB_keepItInIE(theName, theWantTop, theWantLeft) {
                var theRealTop = parseInt(document.body.scrollTop)
                var theTrueTop = theWantTop + theRealTop
                document.all[theName].style.top = theTrueTop
                var theRealLeft = parseInt(document.body.scrollLeft)
                var theTrueLeft = theWantLeft + theRealLeft
                document.all[theName].style.left = theTrueLeft
            }
            function KB_keepItInNN(theName, theWantX, theWantY) {
                var theRealLay = document.layers[theName]
                var theBadX = self.pageYOffset
                var theBadY = self.pageXOffset
                var theRealX = theBadX + theWantX
                var theRealY = theBadY + theWantY
                theRealLay.moveTo(theRealY, theRealX)
            }
            var IE4 = (document.all) ? 1 : 0
            var NN4 = (document.layers) ? 1 : 0
            if (IE4)
                setInterval('KB_keepItInIE("' + elemName + '",0,0)', 1);
            if (NN4)
                setInterval('KB_keepItInNN("' + elemName + '",0,0)', 1);
        },
        /*
         * 复制到剪切板
         */
        highlightAll: function (theField) {
            var tempval = eval("document." + theField)
            tempval.focus()
            tempval.select()
            if (document.all) {
                var therange = tempval.createTextRange()
                therange.execCommand("Copy")
                window.status = "Contents highlighted and copied to clipboard!"
                setTimeout("window.status=''", 1800)
            }
        }
    };

    // 附加功能
    /**
     * 继承属性的4个维度（包括writable、enumerable、configurable、value）
     * 使用方法：a.superExtend(b);
     * a中已有的属性保持原状
     */
    if (options.superExtend === true) {
        /*
         * Add a nonenumerable superExtend() method to Object.prototype.
         * This method extends the object on which it is called by copying properties from the object passed as its argument.
         * All property attributes are copied, not just the property value.
         * All own properties (even non-enumerable ones) of the argument object are copied unless a property with the same name already exists in the target object.
         */
        Object.defineProperty(Object.prototype,
            "superExtend", // Define Object.prototype.superExtend
            {
                writable: true,
                enumerable: false, // Make it nonenumerable
                configurable: true,
                value: function (o) { // Its value is this function
                    // Get all own props, even nonenumerable ones
                    var names = Object.getOwnPropertyNames(o);
                    // Loop through them
                    for (var i = 0; i < names.length; i++) {
                        // Skip props already in this object
                        if (names[i] in this) continue;
                        // Get property description from o
                        var desc = Object.getOwnPropertyDescriptor(o, names[i]);
                        // Use it to create property on this
                        Object.defineProperty(this, names[i], desc);
                    }
                }
            }
        );
    }
    /**
     * 
     */
    if (options.bind === true) {
        if (!Function.prototype.bind) {
            Function.prototype.bind = function (o) {
                // Save the this and arguments values into variables so we can use them in the nested function below.
                var self = this, boundArgs = arguments;

                // The return value of the bind() method is a function
                return function () {
                    // Build up an argument list, starting with any args passed to bind after the first one,
                    // and follow those with all args passed to this function.
                    var args = [], i;
                    for (i = 1; i < boundArgs.length; i++) args.push(boundArgs[i]);
                    for (i = 0; i < arguments.length; i++) args.push(arguments[i]);

                    // Now invoke self as a method of o, with those arguments
                    return self.apply(o, args);
                };
            };
        }
    }
    /**
     * 是否在离开页面时，启动收藏
     * IE有效
     */
    if (options.favor === true && options.title) {
        function bookmark() {
            window.external.AddFavorite(location.href, options.title)
        }
        window.onunload = bookmark
    }


    // 使用更为抽象(或更高阶)的构造能够实现更多的信息而受到更少的干扰
    function forEach(array, action) {
        for (var i = 0; i < array.length; i++) {
            action(array[i]);
        }
    }

    // 归约函数示例，重复调用一个函数将数组转化为单一值
    // 函数参数一般写在前面，这既是传统，也有助于分布应用
    function reduce(combine, base, array) {
        forEach(array, function (element) {
            base = combine(base, element);
        });
        return base;
    }

    // 统计数组中某个值出现的次数
    function count(test, array, item) {
        var counted = 0;
        forEach(array, function (element) {
            if (test(element, item))
                counted++;
        });
        return counted;
    }

    // 数组映射
    function map(func, array) {
        var result = [];
        forEach(array, function (element) {
            result.push(func(element));
        });
        return result;
    }

    // 类的构造函数，坐标点
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    // 原型上的方法可以被任何实例使用
    Point.prototype = {
        add: function (other) {
            return new Point(this.x + other.x, this.y + other.y);
        }
    }

    // 棋盘
    function Grid(width, height) {
        this.width = width;
        this.height = height;
        this.cell = new Array(width * height);
    }
    Grid.prototype = {
        valueAt: function (point) {
            return this.cells[point.y * this.width + point.x];
        },
        setValueAt: function (point, value) {
            this.cells[point.y * this.width + point.x] = value;
        },
        isInside: function (point) {
            return point.x >= 0 && point.y >= 0 && point.x < this.width && point.y < this.height;
        },
        moveValue: function (from, to) {
            this.setValueAt(to, this.valueAt(from));
        }
    }

    return world;
};

Colin.World.prototype = {
    construct: Colin.World
};

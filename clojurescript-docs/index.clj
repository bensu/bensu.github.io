{:namespaces
 ({:source-url nil,
   :wiki-url "bootstrap-test.helper-api.html",
   :name "bootstrap-test.helper",
   :doc nil}
  {:source-url nil,
   :wiki-url "bootstrap-test.macros-api.html",
   :name "bootstrap-test.macros",
   :doc nil}
  {:source-url nil,
   :wiki-url "cljs.analyzer-api-tests-api.html",
   :name "cljs.analyzer-api-tests",
   :doc nil}
  {:source-url nil,
   :wiki-url "cljs.analyzer-tests-api.html",
   :name "cljs.analyzer-tests",
   :doc nil}
  {:source-url nil,
   :wiki-url "cljs.analyzer.api-api.html",
   :name "cljs.analyzer.api",
   :doc
   "This is intended to be a stable api for those who need programmatic access\nto the analyzer."}
  {:source-url nil,
   :wiki-url "cljs.analyzer.macros-api.html",
   :name "cljs.analyzer.macros",
   :doc nil}
  {:source-url nil,
   :wiki-url "cljs.analyzer.utils-api.html",
   :name "cljs.analyzer.utils",
   :doc nil}
  {:source-url nil,
   :wiki-url "cljs.build-api-tests-api.html",
   :name "cljs.build-api-tests",
   :doc nil}
  {:source-url nil,
   :wiki-url "cljs.build.api-api.html",
   :name "cljs.build.api",
   :doc
   "This is intended to be a stable api for those who need programmatic access\nto ClojureScript's project building facilities.\n\nFor example: a build script may need to how to invalidate compiled\nfiles so that they will be recompiled."}
  {:source-url nil,
   :wiki-url "cljs.closure-api.html",
   :name "cljs.closure",
   :doc
   "Compile ClojureScript to JavaScript with optimizations from Google\n Closure Compiler producing runnable JavaScript.\n\n The Closure Compiler (compiler.jar) must be on the classpath.\n\n Use the 'build' function for end-to-end compilation.\n\n build = compile -> add-dependencies -> optimize -> output\n\n Two protocols are defined: IJavaScript and Compilable. The\n Compilable protocol is satisfied by something which can return one\n or more IJavaScripts.\n\n With IJavaScript objects in hand, calling add-dependencies will\n produce a sequence of IJavaScript objects which includes all\n required dependencies from the Closure library and ClojureScript,\n in dependency order. This function replaces the closurebuilder\n tool.\n\n The optimize function converts one or more IJavaScripts into a\n single string of JavaScript source code using the Closure Compiler\n API.\n\n The produced output is either a single string of optimized\n JavaScript or a deps file for use during development.\n"}
  {:source-url nil,
   :wiki-url "cljs.closure-tests-api.html",
   :name "cljs.closure-tests",
   :doc nil}
  {:source-url nil,
   :wiki-url "cljs.compiler-tests-api.html",
   :name "cljs.compiler-tests",
   :doc nil}
  {:source-url nil,
   :wiki-url "cljs.compiler.api-api.html",
   :name "cljs.compiler.api",
   :doc
   "This is intended to be a stable api for those who need programmatic access\nto the compiler."}
  {:source-url nil,
   :wiki-url "cljs.compiler.macros-api.html",
   :name "cljs.compiler.macros",
   :doc nil}
  {:source-url nil,
   :wiki-url "cljs.core.macros-api.html",
   :name "cljs.core.macros",
   :doc nil}
  {:source-url nil,
   :wiki-url "cljs.env.macros-api.html",
   :name "cljs.env.macros",
   :doc nil}
  {:source-url nil,
   :wiki-url "cljs.js-api.html",
   :name "cljs.js",
   :doc nil}
  {:source-url nil,
   :wiki-url "cljs.macro-test.macros-api.html",
   :name "cljs.macro-test.macros",
   :doc nil}
  {:source-url nil,
   :wiki-url "cljs.pprint-api.html",
   :name "cljs.pprint",
   :doc nil}
  {:source-url nil,
   :wiki-url "cljs.pprint-test-api.html",
   :name "cljs.pprint-test",
   :doc nil}
  {:source-url nil,
   :wiki-url "cljs.repl-tests-api.html",
   :name "cljs.repl-tests",
   :doc nil}
  {:source-url nil,
   :wiki-url "cljs.repl.browser-api.html",
   :name "cljs.repl.browser",
   :doc nil}
  {:source-url nil,
   :wiki-url "cljs.repl.nashorn-api.html",
   :name "cljs.repl.nashorn",
   :doc nil}
  {:source-url nil,
   :wiki-url "cljs.repl.node-api.html",
   :name "cljs.repl.node",
   :doc nil}
  {:source-url nil,
   :wiki-url "cljs.repl.reflect-api.html",
   :name "cljs.repl.reflect",
   :doc nil}
  {:source-url nil,
   :wiki-url "cljs.repl.rhino-api.html",
   :name "cljs.repl.rhino",
   :doc nil}
  {:source-url nil,
   :wiki-url "cljs.repl.server-api.html",
   :name "cljs.repl.server",
   :doc nil}
  {:source-url nil,
   :wiki-url "cljs.source-map-api.html",
   :name "cljs.source-map",
   :doc nil}
  {:source-url nil,
   :wiki-url "cljs.test-api.html",
   :name "cljs.test",
   :doc nil}),
 :vars
 ({:arglists ([format-in]),
   :name "formatter",
   :namespace "cljs.pprint",
   :source-url nil,
   :raw-source-url nil,
   :wiki-url "/cljs.pprint-api.html#cljs.pprint/formatter",
   :doc
   "Makes a function which can directly run format-in. The function is\nfn [stream & args] ... and returns nil unless the stream is nil (meaning\noutput to a string) in which case it returns the resulting string.\n\nformat-in can be either a control string or a previously compiled format.",
   :var-type "macro",
   :line 117,
   :file "src/main/cljs/cljs/pprint.clj"}
  {:arglists ([format-in]),
   :name "formatter-out",
   :namespace "cljs.pprint",
   :source-url nil,
   :raw-source-url nil,
   :wiki-url "/cljs.pprint-api.html#cljs.pprint/formatter-out",
   :doc
   "Makes a function which can directly run format-in. The function is\nfn [& args] ... and returns nil. This version of the formatter macro is\ndesigned to be used with *out* set to an appropriate Writer. In particular,\nthis is meant to be used as part of a pretty printer dispatch method.\n\nformat-in can be either a control string or a previously compiled format.",
   :var-type "macro",
   :line 133,
   :file "src/main/cljs/cljs/pprint.clj"}
  {:arglists ([sym]),
   :name "getf",
   :namespace "cljs.pprint",
   :source-url nil,
   :raw-source-url nil,
   :wiki-url "/cljs.pprint-api.html#cljs.pprint/getf",
   :doc
   "Get the value of the field a named by the argument (which should be a keyword).",
   :var-type "macro",
   :line 27,
   :file "src/main/cljs/cljs/pprint.clj"}
  {:arglists ([]),
   :name "pp",
   :namespace "cljs.pprint",
   :source-url nil,
   :added "1.2",
   :raw-source-url nil,
   :wiki-url "/cljs.pprint-api.html#cljs.pprint/pp",
   :doc
   "A convenience macro that pretty prints the last thing output. This is\nexactly equivalent to (pprint *1).",
   :var-type "macro",
   :line 153,
   :file "src/main/cljs/cljs/pprint.clj"}
  {:arglists ([& args]),
   :name "pprint-logical-block",
   :namespace "cljs.pprint",
   :source-url nil,
   :raw-source-url nil,
   :wiki-url "/cljs.pprint-api.html#cljs.pprint/pprint-logical-block",
   :doc
   "Execute the body as a pretty printing logical block with output to *out* which\nmust be a pretty printing writer. When used from pprint or cl-format, this can be\nassumed.\n\nThis function is intended for use when writing custom dispatch functions.\n\nBefore the body, the caller can optionally specify options: :prefix, :per-line-prefix\nand :suffix.",
   :var-type "macro",
   :line 57,
   :file "src/main/cljs/cljs/pprint.clj"}
  {:arglists ([bindings & body]),
   :name "print-length-loop",
   :namespace "cljs.pprint",
   :source-url nil,
   :raw-source-url nil,
   :wiki-url "/cljs.pprint-api.html#cljs.pprint/print-length-loop",
   :doc
   "A version of loop that iterates at most *print-length* times. This is designed\nfor use in pretty-printer dispatch functions.",
   :var-type "macro",
   :line 92,
   :file "src/main/cljs/cljs/pprint.clj"}
  {:arglists ([sym new-val]),
   :name "setf",
   :namespace "cljs.pprint",
   :source-url nil,
   :raw-source-url nil,
   :wiki-url "/cljs.pprint-api.html#cljs.pprint/setf",
   :doc "Set the value of the field SYM to NEW-VAL",
   :var-type "macro",
   :line 34,
   :file "src/main/cljs/cljs/pprint.clj"}
  {:arglists ([function & body]),
   :name "with-pprint-dispatch",
   :namespace "cljs.pprint",
   :source-url nil,
   :raw-source-url nil,
   :wiki-url "/cljs.pprint-api.html#cljs.pprint/with-pprint-dispatch",
   :doc
   "Execute body with the pretty print dispatch function bound to function.",
   :var-type "macro",
   :line 147,
   :file "src/main/cljs/cljs/pprint.clj"}
  {:arglists ([]),
   :name "connection",
   :namespace "cljs.repl.server",
   :source-url nil,
   :raw-source-url nil,
   :wiki-url "/cljs.repl.server-api.html#cljs.repl.server/connection",
   :doc
   "Promise to return a connection when one is available. If a\nconnection is not available, store the promise in server/state.",
   :var-type "function",
   :line 10,
   :file "src/main/clojure/cljs/repl/server.clj"}
  {:arglists ([method pred handler] [method {:as m}]),
   :name "dispatch-on",
   :namespace "cljs.repl.server",
   :source-url nil,
   :raw-source-url nil,
   :wiki-url "/cljs.repl.server-api.html#cljs.repl.server/dispatch-on",
   :doc
   "Registers a handler to be dispatched based on a request method and a\npredicate.\n\npred should be a function that accepts an options map, a connection,\nand a request map and returns a boolean value based on whether or not\nthat request should be dispatched to the related handler.",
   :var-type "function",
   :line 41,
   :file "src/main/clojure/cljs/repl/server.clj"}
  {:arglists ([header-lines]),
   :name "parse-headers",
   :namespace "cljs.repl.server",
   :source-url nil,
   :raw-source-url nil,
   :wiki-url
   "/cljs.repl.server-api.html#cljs.repl.server/parse-headers",
   :doc "Parse the headers of an HTTP POST request.",
   :var-type "function",
   :line 56,
   :file "src/main/clojure/cljs/repl/server.clj"}
  {:arglists
   ([conn status form]
    [conn status form content-type]
    [conn status form content-type encoding]),
   :name "send-and-close",
   :namespace "cljs.repl.server",
   :source-url nil,
   :raw-source-url nil,
   :wiki-url
   "/cljs.repl.server-api.html#cljs.repl.server/send-and-close",
   :doc
   "Use the passed connection to send a form to the browser. Send a\nproper HTTP response.",
   :var-type "function",
   :line 106,
   :file "src/main/clojure/cljs/repl/server.clj"}
  {:arglists ([conn]),
   :name "set-connection",
   :namespace "cljs.repl.server",
   :source-url nil,
   :raw-source-url nil,
   :wiki-url
   "/cljs.repl.server-api.html#cljs.repl.server/set-connection",
   :doc
   "Given a new available connection, either use it to deliver the\nconnection which was promised or store the connection for later\nuse.",
   :var-type "function",
   :line 24,
   :file "src/main/clojure/cljs/repl/server.clj"}
  {:arglists ([opts]),
   :name "start",
   :namespace "cljs.repl.server",
   :source-url nil,
   :raw-source-url nil,
   :wiki-url "/cljs.repl.server-api.html#cljs.repl.server/start",
   :doc "Start the server on the specified port.",
   :var-type "function",
   :line 170,
   :file "src/main/clojure/cljs/repl/server.clj"})}

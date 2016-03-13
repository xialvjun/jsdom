let documentation = [
    {
        "name": "Html.Lazy",
        "comment": " Since all Elm functions are pure we have a guarantee that the same input\nwill always result in the same output. This module gives us tools to be lazy\nabout building `Html` that utilize this fact.\n\nRather than immediately applying functions to their arguments, the `lazy`\nfunctions just bundle the function and arguments up for later. When diffing\nthe old and new virtual DOM, it checks to see if all the arguments are equal.\nIf so, it skips calling the function!\n\nThis is a really cheap test and often makes things a lot faster, but definitely\nbenchmark to be sure!\n\n@docs lazy, lazy2, lazy3\n",
        "aliases": [],
        "types": [],
        "values": [
            {
                "name": "lazy",
                "comment": " A performance optimization that delays the building of virtual DOM nodes.\n\nCalling `(view model)` will definitely build some virtual DOM, perhaps a lot of\nit. Calling `(lazy view model)` delays the call until later. During diffing, we\ncan check to see if `model` is referentially equal to the previous value used,\nand if so, we just stop. No need to build up the tree structure and diff it,\nwe know if the input to `view` is the same, the output must be the same!\n",
                "type": "(a -> Html.Html) -> a -> Html.Html"
            },
            {
                "name": "lazy2",
                "comment": " Same as `lazy` but checks on two arguments.\n",
                "type": "(a -> b -> Html.Html) -> a -> b -> Html.Html"
            },
            {
                "name": "lazy3",
                "comment": " Same as `lazy` but checks on three arguments.\n",
                "type": "(a -> b -> c -> Html.Html) -> a -> b -> c -> Html.Html"
            }
        ],
        "generated-with-elm-version": "0.16.0"
    },
    {
        "name": "Html.Events",
        "comment": "\nIt is often helpful to create an [Union Type][] so you can have many different kinds\nof events as seen in the [TodoMVC][] example.\n\n[Union Type]: http://elm-lang.org/learn/Union-Types.elm\n[TodoMVC]: https://github.com/evancz/elm-todomvc/blob/master/Todo.elm\n\n# Focus Helpers\n@docs onBlur, onFocus, onSubmit\n\n# Keyboard Helpers\n@docs onKeyUp, onKeyDown, onKeyPress\n\n# Mouse Helpers\n@docs onClick, onDoubleClick, onMouseMove,\n      onMouseDown, onMouseUp,\n      onMouseEnter, onMouseLeave,\n      onMouseOver, onMouseOut\n\n# Custom Event Handlers\n@docs on, targetValue, targetChecked, keyCode,\n    onWithOptions, Options, defaultOptions\n",
        "aliases": [
            {
                "name": "Options",
                "comment": " Options for an event listener. If `stopPropagation` is true, it means the\nevent stops traveling through the DOM so it will not trigger any other event\nlisteners. If `preventDefault` is true, any built-in browser behavior related\nto the event is prevented. For example, this is used with touch events when you\nwant to treat them as gestures of your own, not as scrolls.\n",
                "args": [],
                "type": "{ stopPropagation : Bool, preventDefault : Bool }"
            }
        ],
        "types": [],
        "values": [
            {
                "name": "defaultOptions",
                "comment": " Everything is `False` by default.\n\n    defaultOptions =\n        { stopPropagation = False\n        , preventDefault = False\n        }\n",
                "type": "Html.Events.Options"
            },
            {
                "name": "keyCode",
                "comment": " A `Json.Decoder` for grabbing `event.keyCode` from the triggered event.\nThis is useful for key events today, though it looks like the spec is moving\ntowards the `event.key` field for this someday.\n\n    onKeyUp : Signal.Address a -> (Int -> a) -> Attribute\n    onKeyUp address handler =\n        on \"keyup\" keyCode (\\code -> Signal.message address (handler code))\n",
                "type": "Json.Decode.Decoder Int"
            },
            {
                "name": "on",
                "comment": " Create a custom event listener.\n\n    import Json.Decode as Json\n\n    onClick : Signal.Address a -> Attribute\n    onClick address =\n        on \"click\" Json.value (\\_ -> Signal.message address ())\n\nYou first specify the name of the event in the same format as with\nJavaScript’s `addEventListener`. Next you give a JSON decoder, which lets\nyou pull information out of the event object. If that decoder is successful,\nthe resulting value is given to a function that creates a `Signal.Message`.\nSo in our example, we will send `()` to the given `address`.\n",
                "type": "String -> Json.Decode.Decoder a -> (a -> Signal.Message) -> Html.Attribute"
            },
            {
                "name": "onBlur",
                "comment": "",
                "type": "Signal.Address a -> a -> Html.Attribute"
            },
            {
                "name": "onClick",
                "comment": "",
                "type": "Signal.Address a -> a -> Html.Attribute"
            },
            {
                "name": "onDoubleClick",
                "comment": "",
                "type": "Signal.Address a -> a -> Html.Attribute"
            },
            {
                "name": "onFocus",
                "comment": "",
                "type": "Signal.Address a -> a -> Html.Attribute"
            },
            {
                "name": "onKeyDown",
                "comment": "",
                "type": "Signal.Address a -> (Int -> a) -> Html.Attribute"
            },
            {
                "name": "onKeyPress",
                "comment": "",
                "type": "Signal.Address a -> (Int -> a) -> Html.Attribute"
            },
            {
                "name": "onKeyUp",
                "comment": "",
                "type": "Signal.Address a -> (Int -> a) -> Html.Attribute"
            },
            {
                "name": "onMouseDown",
                "comment": "",
                "type": "Signal.Address a -> a -> Html.Attribute"
            },
            {
                "name": "onMouseEnter",
                "comment": "",
                "type": "Signal.Address a -> a -> Html.Attribute"
            },
            {
                "name": "onMouseLeave",
                "comment": "",
                "type": "Signal.Address a -> a -> Html.Attribute"
            },
            {
                "name": "onMouseMove",
                "comment": "",
                "type": "Signal.Address a -> a -> Html.Attribute"
            },
            {
                "name": "onMouseOut",
                "comment": "",
                "type": "Signal.Address a -> a -> Html.Attribute"
            },
            {
                "name": "onMouseOver",
                "comment": "",
                "type": "Signal.Address a -> a -> Html.Attribute"
            },
            {
                "name": "onMouseUp",
                "comment": "",
                "type": "Signal.Address a -> a -> Html.Attribute"
            },
            {
                "name": "onSubmit",
                "comment": "",
                "type": "Signal.Address a -> a -> Html.Attribute"
            },
            {
                "name": "onWithOptions",
                "comment": " Same as `on` but you can set a few options.\n",
                "type": "String -> Html.Events.Options -> Json.Decode.Decoder a -> (a -> Signal.Message) -> Html.Attribute"
            },
            {
                "name": "targetChecked",
                "comment": " A `Json.Decoder` for grabbing `event.target.checked` from the triggered\nevent. This is useful for input event on checkboxes.\n\n    onInput : Signal.Address a -> (Bool -> a) -> Attribute\n    onInput address contentToValue =\n        on \"input\" targetChecked (\\bool -> Signal.message address (contentToValue bool))\n",
                "type": "Json.Decode.Decoder Bool"
            },
            {
                "name": "targetValue",
                "comment": " A `Json.Decoder` for grabbing `event.target.value` from the triggered\nevent. This is often useful for input event on text fields.\n\n    onInput : Signal.Address a -> (String -> a) -> Attribute\n    onInput address contentToValue =\n        on \"input\" targetValue (\\str -> Signal.message address (contentToValue str))\n",
                "type": "Json.Decode.Decoder String"
            }
        ],
        "generated-with-elm-version": "0.16.0"
    },
    {
        "name": "Html.Attributes",
        "comment": " Helper functions for HTML attributes. They are organized roughly by\ncategory. Each attribute is labeled with the HTML tags it can be used with, so\njust search the page for `video` if you want video stuff.\n\nIf you cannot find what you are looking for, go to the [Custom\nAttributes](#custom-attributes) section to learn how to create new helpers.\n\n# Special Attributes\n@docs key, style\n\n# Super Common Attributes\n@docs class, classList, id, title, hidden\n\n# Inputs\n@docs type', value, checked, placeholder, selected\n\n## Input Helpers\n@docs accept, acceptCharset, action, autocomplete, autofocus, autosave,\n    disabled, enctype, formaction, list, maxlength, minlength, method, multiple,\n    name, novalidate, pattern, readonly, required, size, for, form\n\n## Input Ranges\n@docs max, min, step\n\n## Input Text Areas\n@docs cols, rows, wrap\n\n\n# Links and Areas\n@docs href, target, download, downloadAs, hreflang, media, ping, rel\n\n## Maps\n@docs ismap, usemap, shape, coords\n\n\n# Embedded Content\n@docs src, height, width, alt\n\n## Audio and Video\n@docs autoplay, controls, loop, preload, poster, default, kind, srclang\n\n## iframes\n@docs sandbox, seamless, srcdoc\n\n# Ordered Lists\n@docs reversed, start\n\n# Tables\n@docs align, colspan, rowspan, headers, scope\n\n# Header Stuff\n@docs async, charset, content, defer, httpEquiv, language, scoped\n\n# Less Common Global Attributes\nAttributes that can be attached to any HTML tag but are less commonly used.\n@docs accesskey, contenteditable, contextmenu, dir, draggable, dropzone,\n      itemprop, lang, spellcheck, tabindex\n\n# Key Generation\n@docs challenge, keytype\n\n# Miscellaneous\n@docs cite, datetime, pubdate, manifest\n\n# Custom Attributes\n\nWhen using HTML and JS, there are two ways to specify parts of a DOM node.\n\n  1. Attributes &mdash; You can set things in HTML itself. So the `class`\n     in `<div class=\"greeting\"></div>` is called an *attribute*.\n\n  2. Properties &mdash; You can also set things in JS. So the `className`\n     in `div.className = 'greeting'` is called a *property*.\n\nSo the `class` attribute corresponds to the `className` property. At first\nglance, perhaps this distinction is defensible, but it gets much crazier.\n*There is not always a one-to-one mapping between attributes and properties!*\nYes, that is a true fact. Sometimes an attribute exists, but there is no\ncorresponding property. Sometimes changing an attribute does not change the\nunderlying property. For example, as of this writing the `webkit-playsinline`\nattribute can be used in HTML, but there is no corresponding property!\n\nPretty much all of the functions in `Html.Attributes` are defined with\n`property` and that is generally the preferred approach.\n\n@docs property, attribute\n\n",
        "aliases": [],
        "types": [],
        "values": [
            {
                "name": "accept",
                "comment": " List of types the server accepts, typically a file type.\nFor `form` and `input`.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "acceptCharset",
                "comment": " List of supported charsets in a `form`.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "accesskey",
                "comment": " Defines a keyboard shortcut to activate or add focus to the element. ",
                "type": "Char -> Html.Attribute"
            },
            {
                "name": "action",
                "comment": " The URI of a program that processes the information submitted via a `form`.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "align",
                "comment": " Specifies the horizontal alignment of a `caption`, `col`, `colgroup`,\n`hr`, `iframe`, `img`, `table`, `tbody`,  `td`,  `tfoot`, `th`, `thead`, or\n`tr`.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "alt",
                "comment": " Alternative text in case an image can't be displayed. Works with `img`,\n`area`, and `input`.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "async",
                "comment": " Indicates that the `script` should be executed asynchronously. ",
                "type": "Bool -> Html.Attribute"
            },
            {
                "name": "attribute",
                "comment": " Create arbitrary HTML *attributes*. Maps onto JavaScript&rsquo;s\n`setAttribute` function under the hood.\n\n    greeting : Html\n    greeting =\n        div [ attribute \"class\" \"greeting\" ] [\n          text \"Hello!\"\n        ]\n\nNotice that you must give the *attribute* name, so we use `class` as it would\nbe in HTML, not `className` as it would appear in JS.\n",
                "type": "String -> String -> Html.Attribute"
            },
            {
                "name": "autocomplete",
                "comment": " Indicates whether a `form` anor `input` can have their values automatically\ncompleted by the browser.\n",
                "type": "Bool -> Html.Attribute"
            },
            {
                "name": "autofocus",
                "comment": " The element should be automatically focused after the page loaded.\nFor `button`, `input`, `keygen`, `select`, and `textarea`.\n",
                "type": "Bool -> Html.Attribute"
            },
            {
                "name": "autoplay",
                "comment": " The `audio` or `video` should play as soon as possible. ",
                "type": "Bool -> Html.Attribute"
            },
            {
                "name": "autosave",
                "comment": " Previous entries into an `input` will be persisted across page loads,\nassociated with a unique ID. The previous entries will be displayed as\nsuggestions when the user types into an `input` that has an autosave attribute\nwith the same unique ID.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "challenge",
                "comment": " A challenge string that is submitted along with the public key in a `keygen`.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "charset",
                "comment": " Declares the character encoding of the page or script. Common values include:\n\n  * UTF-8 - Character encoding for Unicode\n  * ISO-8859-1 - Character encoding for the Latin alphabet\n\nFor `meta` and `script`.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "checked",
                "comment": " Indicates whether an `input` of type checkbox is checked. ",
                "type": "Bool -> Html.Attribute"
            },
            {
                "name": "cite",
                "comment": " Contains a URI which points to the source of the quote or change in a\n`blockquote`, `del`, `ins`, or `q`.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "class",
                "comment": " Often used with CSS to style elements with common properties. ",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "classList",
                "comment": " This function makes it easier to build a space-separated class attribute.\nEach class can easily be added and removed depending on the boolean value it\nis paired with.\n\n    renderMessage : Msg -> Html\n    renderMessage msg =\n      div\n        [\n          classList [\n            (\"message\", True),\n            (\"message-important\", msg.isImportant),\n            (\"message-read\", msg.isRead)\n          ]\n        ]\n        [ text msg.content ]\n",
                "type": "List ( String, Bool ) -> Html.Attribute"
            },
            {
                "name": "cols",
                "comment": " Defines the number of columns in a `textarea`. ",
                "type": "Int -> Html.Attribute"
            },
            {
                "name": "colspan",
                "comment": " The colspan attribute defines the number of columns a cell should span.\nFor `td` and `th`.\n",
                "type": "Int -> Html.Attribute"
            },
            {
                "name": "content",
                "comment": " A value associated with http-equiv or name depending on the context. For\n`meta`.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "contenteditable",
                "comment": " Indicates whether the element's content is editable. ",
                "type": "Bool -> Html.Attribute"
            },
            {
                "name": "contextmenu",
                "comment": " Defines the ID of a `menu` element which will serve as the element's\ncontext menu.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "controls",
                "comment": " Indicates whether the browser should show playback controls for the `audio`\nor `video`.\n",
                "type": "Bool -> Html.Attribute"
            },
            {
                "name": "coords",
                "comment": " A set of values specifying the coordinates of the hot-spot region in an\n`area`. Needs to be paired with a `shape` attribute to be meaningful.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "datetime",
                "comment": " Indicates the date and time associated with the element.\nFor `del`, `ins`, `time`.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "default",
                "comment": " Indicates that the `track` should be enabled unless the user's preferences\nindicate something different.\n",
                "type": "Bool -> Html.Attribute"
            },
            {
                "name": "defer",
                "comment": " Indicates that a `script` should be executed after the page has been\nparsed.\n",
                "type": "Bool -> Html.Attribute"
            },
            {
                "name": "dir",
                "comment": " Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl\n(Right-To-Left).\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "disabled",
                "comment": " Indicates whether the user can interact with a `button`, `fieldset`,\n`input`, `keygen`, `optgroup`, `option`, `select` or `textarea`.\n",
                "type": "Bool -> Html.Attribute"
            },
            {
                "name": "download",
                "comment": " Indicates that clicking an `a` and `area` will download the resource\ndirectly.\n",
                "type": "Bool -> Html.Attribute"
            },
            {
                "name": "downloadAs",
                "comment": " Indicates that clicking an `a` and `area` will download the resource\ndirectly, and that the downloaded resource with have the given filename.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "draggable",
                "comment": " Defines whether the element can be dragged. ",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "dropzone",
                "comment": " Indicates that the element accept the dropping of content on it. ",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "enctype",
                "comment": " How `form` data should be encoded when submitted with the POST method.\nOptions include: application/x-www-form-urlencoded, multipart/form-data, and\ntext/plain.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "for",
                "comment": " The element ID described by this `label` or the element IDs that are used\nfor an `output`.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "form",
                "comment": " Indicates the element ID of the `form` that owns this particular `button`,\n`fieldset`, `input`, `keygen`, `label`, `meter`, `object`, `output`,\n`progress`, `select`, or `textarea`.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "formaction",
                "comment": " Indicates the action of an `input` or `button`. This overrides the action\ndefined in the surrounding `form`.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "headers",
                "comment": " A space separated list of element IDs indicating which `th` elements are\nheaders for this cell. For `td` and `th`.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "height",
                "comment": " Declare the height of a `canvas`, `embed`, `iframe`, `img`, `input`,\n`object`, or `video`.\n",
                "type": "Int -> Html.Attribute"
            },
            {
                "name": "hidden",
                "comment": " Indicates the relevance of an element. ",
                "type": "Bool -> Html.Attribute"
            },
            {
                "name": "href",
                "comment": " The URL of a linked resource, such as `a`, `area`, `base`, or `link`. ",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "hreflang",
                "comment": " Two-letter language code of the linked resource of an `a`, `area`, or `link`.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "httpEquiv",
                "comment": " This attribute is an indicator that is paired with the `content` attribute,\nindicating what that content means. `httpEquiv` can take on three different\nvalues: content-type, default-style, or refresh. For `meta`.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "id",
                "comment": " Often used with CSS to style a specific element. The value of this\nattribute must be unique.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "ismap",
                "comment": " When an `img` is a descendent of an `a` tag, the `ismap` attribute\nindicates that the click location should be added to the parent `a`'s href as\na query string.\n",
                "type": "Bool -> Html.Attribute"
            },
            {
                "name": "itemprop",
                "comment": "",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "key",
                "comment": " A special attribute that uniquely identifies a node during the diffing\nprocess. If you have a list of 20 items and want to remove the 4th one, adding\nkeys ensures that you do not end up doing misaligned diffs on the following 15\nitems.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "keytype",
                "comment": " Specifies the type of key generated by a `keygen`. Possible values are:\nrsa, dsa, and ec.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "kind",
                "comment": " Specifies the kind of text `track`. ",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "lang",
                "comment": " Defines the language used in the element. ",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "language",
                "comment": " Defines the script language used in a `script`. ",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "list",
                "comment": " Associates an `input` with a `datalist` tag. The datalist gives some\npre-defined options to suggest to the user as they interact with an input.\nThe value of the list attribute must match the id of a `datalist` node.\nFor `input`.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "loop",
                "comment": " Indicates whether the `audio` or `video` should start playing from the\nstart when it's finished.\n",
                "type": "Bool -> Html.Attribute"
            },
            {
                "name": "manifest",
                "comment": " Specifies the URL of the cache manifest for an `html` tag. ",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "max",
                "comment": " Indicates the maximum value allowed. When using an input of type number or\ndate, the max value must be a number or date. For `input`, `meter`, and `progress`.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "maxlength",
                "comment": " Defines the maximum number of characters allowed in an `input` or\n`textarea`.\n",
                "type": "Int -> Html.Attribute"
            },
            {
                "name": "media",
                "comment": " Specifies a hint of the target media of a `a`, `area`, `link`, `source`,\nor `style`.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "method",
                "comment": " Defines which HTTP method to use when submitting a `form`. Can be GET\n(default) or POST.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "min",
                "comment": " Indicates the minimum value allowed. When using an input of type number or\ndate, the min value must be a number or date. For `input` and `meter`.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "minlength",
                "comment": " Defines the minimum number of characters allowed in an `input` or\n`textarea`.\n",
                "type": "Int -> Html.Attribute"
            },
            {
                "name": "multiple",
                "comment": " Indicates whether multiple values can be entered in an `input` of type\nemail or file. Can also indicate that you can `select` many options.\n",
                "type": "Bool -> Html.Attribute"
            },
            {
                "name": "name",
                "comment": " Name of the element. For example used by the server to identify the fields\nin form submits. For `button`, `form`, `fieldset`, `iframe`, `input`, `keygen`,\n`object`, `output`, `select`, `textarea`, `map`, `meta`, and `param`.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "novalidate",
                "comment": " This attribute indicates that a `form` shouldn't be validated when\nsubmitted.\n",
                "type": "Bool -> Html.Attribute"
            },
            {
                "name": "pattern",
                "comment": " Defines a regular expression which an `input`'s value will be validated\nagainst.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "ping",
                "comment": " Specify a URL to send a short POST request to when the user clicks on an\n`a` or `area`. Useful for monitoring and tracking.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "placeholder",
                "comment": " Provides a hint to the user of what can be entered into an `input` or\n`textarea`.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "poster",
                "comment": " A URL indicating a poster frame to show until the user plays or seeks the\n`video`.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "preload",
                "comment": " Control how much of an `audio` or `video` resource should be preloaded. ",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "property",
                "comment": " Create arbitrary *properties*.\n\n    import Json.Encode as Json\n\n    greeting : Html\n    greeting =\n        div [ property \"className\" (Json.string \"greeting\") ] [\n          text \"Hello!\"\n        ]\n\nNotice that you must give the *property* name, so we use `className` as it\nwould be in JavaScript, not `class` as it would appear in HTML.\n",
                "type": "String -> Json.Encode.Value -> Html.Attribute"
            },
            {
                "name": "pubdate",
                "comment": " Indicates whether this date and time is the date of the nearest `article`\nancestor element. For `time`.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "readonly",
                "comment": " Indicates whether an `input` or `textarea` can be edited. ",
                "type": "Bool -> Html.Attribute"
            },
            {
                "name": "rel",
                "comment": " Specifies the relationship of the target object to the link object.\nFor `a`, `area`, `link`.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "required",
                "comment": " Indicates whether this element is required to fill out or not.\nFor `input`, `select`, and `textarea`.\n",
                "type": "Bool -> Html.Attribute"
            },
            {
                "name": "reversed",
                "comment": " Indicates whether an ordered list `ol` should be displayed in a descending\norder instead of a ascending.\n",
                "type": "Bool -> Html.Attribute"
            },
            {
                "name": "rows",
                "comment": " Defines the number of rows in a `textarea`. ",
                "type": "Int -> Html.Attribute"
            },
            {
                "name": "rowspan",
                "comment": " Defines the number of rows a table cell should span over.\nFor `td` and `th`.\n",
                "type": "Int -> Html.Attribute"
            },
            {
                "name": "sandbox",
                "comment": " A space separated list of security restrictions you'd like to lift for an\n`iframe`.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "scope",
                "comment": " Specifies the scope of a header cell `th`. Possible values are: col, row,\ncolgroup, rowgroup.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "scoped",
                "comment": " Indicates that a `style` should only apply to its parent and all of the\nparents children.\n",
                "type": "Bool -> Html.Attribute"
            },
            {
                "name": "seamless",
                "comment": "  Make an `iframe` look like part of the containing document. ",
                "type": "Bool -> Html.Attribute"
            },
            {
                "name": "selected",
                "comment": " Defines which `option` will be selected on page load. ",
                "type": "Bool -> Html.Attribute"
            },
            {
                "name": "shape",
                "comment": " Declare the shape of the clickable area in an `a` or `area`. Valid values\ninclude: default, rect, circle, poly. This attribute can be paired with\n`coords` to create more particular shapes.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "size",
                "comment": " For `input` specifies the width of an input in characters.\n\nFor `select` specifies the number of visible options in a drop-down list.\n",
                "type": "Int -> Html.Attribute"
            },
            {
                "name": "spellcheck",
                "comment": " Indicates whether spell checking is allowed for the element. ",
                "type": "Bool -> Html.Attribute"
            },
            {
                "name": "src",
                "comment": " The URL of the embeddable content. For `audio`, `embed`, `iframe`, `img`,\n`input`, `script`, `source`, `track`, and `video`.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "srcdoc",
                "comment": " An HTML document that will be displayed as the body of an `iframe`. It will\noverride the content of the `src` attribute if it has been specified.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "srclang",
                "comment": " A two letter language code indicating the language of the `track` text data.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "start",
                "comment": " Defines the first number of an ordered list if you want it to be something\nbesides 1.\n",
                "type": "Int -> Html.Attribute"
            },
            {
                "name": "step",
                "comment": " Add a step size to an `input`. Use `step \"any\"` to allow any floating-point\nnumber to be used in the input.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "style",
                "comment": " This function makes it easier to specify a set of styles.\n\n    myStyle : Attribute\n    myStyle =\n      style\n        [ (\"backgroundColor\", \"red\")\n        , (\"height\", \"90px\")\n        , (\"width\", \"100%\")\n        ]\n\n    greeting : Html\n    greeting =\n      div [ myStyle ] [ text \"Hello!\" ]\n\nThere is no `Html.Styles` module because best practices for working with HTML\nsuggest that this should primarily be specified in CSS files. So the general\nrecommendation is to use this function lightly.\n",
                "type": "List ( String, String ) -> Html.Attribute"
            },
            {
                "name": "tabindex",
                "comment": " Overrides the browser's default tab order and follows the one specified\ninstead.\n",
                "type": "Int -> Html.Attribute"
            },
            {
                "name": "target",
                "comment": " Specify where the results of clicking an `a`, `area`, `base`, or `form`\nshould appear. Possible special values include:\n\n  * _blank &mdash; a new window or tab\n  * _self &mdash; the same frame (this is default)\n  * _parent &mdash; the parent frame\n  * _top &mdash; the full body of the window\n\nYou can also give the name of any `frame` you have created.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "title",
                "comment": " Text to be displayed in a tooltip when hovering over the element. ",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "type'",
                "comment": " Defines the type of a `button`, `input`, `embed`, `object`, `script`,\n`source`, `style`, or `menu`.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "usemap",
                "comment": " Specify the hash name reference of a `map` that should be used for an `img`\nor `object`. A hash name reference is a hash symbol followed by the element's name or id.\nE.g. `\"#planet-map\"`.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "value",
                "comment": " Defines a default value which will be displayed in a `button`, `option`,\n`input`, `li`, `meter`, `progress`, or `param`.\n",
                "type": "String -> Html.Attribute"
            },
            {
                "name": "width",
                "comment": " Declare the width of a `canvas`, `embed`, `iframe`, `img`, `input`,\n`object`, or `video`.\n",
                "type": "Int -> Html.Attribute"
            },
            {
                "name": "wrap",
                "comment": " Indicates whether the text should be wrapped in a `textarea`. Possible\nvalues are \"hard\" and \"soft\".\n",
                "type": "String -> Html.Attribute"
            }
        ],
        "generated-with-elm-version": "0.16.0"
    },
    {
        "name": "Html",
        "comment": " This file is organized roughly in order of popularity. The tags which you'd\nexpect to use frequently will be closer to the top.\n\n# Custom Nodes\n@docs text, node, Html, Attribute\n\n# Conversions\n@docs toElement, fromElement\n\n# Headers\n@docs h1, h2, h3, h4, h5, h6\n\n# Grouping Content\n@docs div, p, hr, pre, blockquote\n\n# Text\n@docs span, a, code, em, strong, i, b, u, sub, sup, br\n\n# Lists\n@docs ol, ul, li, dl, dt, dd\n\n# Emdedded Content\n@docs img, iframe, canvas, svg, math\n\n# Inputs\n@docs form, input, textarea, button, select, option\n\n# Sections\n@docs section, nav, article, aside, header, footer, address, main', body\n\n# Figures\n@docs figure, figcaption\n\n# Tables\n@docs table, caption, colgroup, col, tbody, thead, tfoot, tr, td, th\n\n\n# Less Common Elements\n\n## Less Common Inputs\n@docs fieldset, legend, label, datalist, optgroup, keygen, output, progress, meter\n\n\n## Audio and Video\n@docs audio, video, source, track\n\n## Embedded Objects\n@docs embed, object, param\n\n## Text Edits\n@docs ins, del\n\n## Semantic Text\n@docs small, cite, dfn, abbr, time, var, samp, kbd, s, q\n\n## Less Common Text Tags\n@docs mark, ruby, rt, rp, bdi, bdo, wbr\n\n# Interactive Elements\n@docs details, summary, menuitem, menu\n\n",
        "aliases": [
            {
                "name": "Attribute",
                "comment": " Set attributes on your `Html`.\n",
                "args": [],
                "type": "VirtualDom.Property"
            },
            {
                "name": "Html",
                "comment": " The core building block used to build up HTML. It is backed by\n`VirtualDom.Node` in `evancz/virtual-dom` but that is not a super crucial\ndetail.\n",
                "args": [],
                "type": "VirtualDom.Node"
            }
        ],
        "types": [],
        "values": [
            {
                "name": "a",
                "comment": " Represents a hyperlink, linking to another resource. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "abbr",
                "comment": " Represents an abbreviation or an acronym; the expansion of the\nabbreviation can be represented in the title attribute.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "address",
                "comment": " Defines a section containing contact information. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "article",
                "comment": " Defines self-contained content that could exist independently of the rest\nof the content.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "aside",
                "comment": " Defines some content loosely related to the page content. If it is removed,\nthe remaining content still makes sense.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "audio",
                "comment": " Represents a sound or audio stream. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "b",
                "comment": " Represents a text which to which attention is drawn for utilitarian\npurposes. It doesn't convey extra importance and doesn't imply an alternate\nvoice.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "bdi",
                "comment": " Represents text that must be isolated from its surrounding for\nbidirectional text formatting. It allows embedding a span of text with a\ndifferent, or unknown, directionality.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "bdo",
                "comment": " Represents the directionality of its children, in order to explicitly\noverride the Unicode bidirectional algorithm.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "blockquote",
                "comment": " Represents a content that is quoted from another source. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "body",
                "comment": " Represents the content of an HTML document. There is only one `body`\nelement in a document.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "br",
                "comment": " Represents a line break. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "button",
                "comment": " Represents a button. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "canvas",
                "comment": " Represents a bitmap area for graphics rendering. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "caption",
                "comment": " Represents the title of a table. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "cite",
                "comment": " Represents the title of a work. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "code",
                "comment": " Represents computer code. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "col",
                "comment": " Represents a column of a table. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "colgroup",
                "comment": " Represents a set of one or more columns of a table. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "datalist",
                "comment": " Represents a set of predefined options for other controls. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "dd",
                "comment": " Represents the definition of the terms immediately listed before it. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "del",
                "comment": " Defines a removal from the document. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "details",
                "comment": " Represents a widget from which the user can obtain additional information\nor controls.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "dfn",
                "comment": " Represents a term whose definition is contained in its nearest ancestor\ncontent.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "div",
                "comment": " Represents a generic container with no special meaning. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "dl",
                "comment": " Defines a definition list, that is, a list of terms and their associated\ndefinitions.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "dt",
                "comment": " Represents a term defined by the next `dd`. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "em",
                "comment": " Represents emphasized text, like a stress accent. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "embed",
                "comment": " Represents a integration point for an external, often non-HTML,\napplication or interactive content.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "fieldset",
                "comment": " Represents a set of controls. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "figcaption",
                "comment": " Represents the legend of a figure. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "figure",
                "comment": " Represents a figure illustrated as part of the document. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "footer",
                "comment": " Defines the footer for a page or section. It often contains a copyright\nnotice, some links to legal information, or addresses to give feedback.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "form",
                "comment": " Represents a form, consisting of controls, that can be submitted to a\nserver for processing.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "fromElement",
                "comment": " Embed Elements in HTML. Useful if you have some component written with\nElements or that uses `collage` that you want to embed in a larger HTML\ncomponent.\n",
                "type": "Graphics.Element.Element -> Html.Html"
            },
            {
                "name": "h1",
                "comment": "",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "h2",
                "comment": "",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "h3",
                "comment": "",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "h4",
                "comment": "",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "h5",
                "comment": "",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "h6",
                "comment": "",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "header",
                "comment": " Defines the header of a page or section. It often contains a logo, the\ntitle of the web site, and a navigational table of content.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "hr",
                "comment": " Represents a thematic break between paragraphs of a section or article or\nany longer content.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "i",
                "comment": " Represents some text in an alternate voice or mood, or at least of\ndifferent quality, such as a taxonomic designation, a technical term, an\nidiomatic phrase, a thought, or a ship name.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "iframe",
                "comment": " Embedded an HTML document. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "img",
                "comment": " Represents an image. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "input",
                "comment": " Represents a typed data field allowing the user to edit the data. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "ins",
                "comment": " Defines an addition to the document. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "kbd",
                "comment": " Represents user input, often from the keyboard, but not necessarily; it\nmay represent other input, like transcribed voice commands.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "keygen",
                "comment": " Represents a key-pair generator control. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "label",
                "comment": " Represents the caption of a form control. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "legend",
                "comment": " Represents the caption for a `fieldset`. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "li",
                "comment": " Defines a item of an enumeration list. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "main'",
                "comment": " Defines the main or important content in the document. There is only one\n`main` element in the document.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "mark",
                "comment": " Represents text highlighted for reference purposes, that is for its\nrelevance in another context.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "math",
                "comment": " Defines a mathematical formula. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "menu",
                "comment": " Represents a list of commands. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "menuitem",
                "comment": " Represents a command that the user can invoke. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "meter",
                "comment": " Represents a scalar measurement (or a fractional value), within a known\nrange.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "nav",
                "comment": " Defines a section that contains only navigation links.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "node",
                "comment": " General way to create HTML nodes. It is used to define all of the helper\nfunctions in this library.\n\n    div : List Attribute -> List Html -> Html\n    div attributes children =\n        node \"div\" attributes children\n\nYou can use this to create custom nodes if you need to create something that\nis not covered by the helper functions in this library.\n",
                "type": "String -> List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "object",
                "comment": " Represents an external resource, which is treated as an image, an HTML\nsub-document, or an external resource to be processed by a plug-in.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "ol",
                "comment": " Defines an ordered list of items. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "optgroup",
                "comment": " Represents a set of options, logically grouped. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "option",
                "comment": " Represents an option in a `select` element or a suggestion of a `datalist`\nelement.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "output",
                "comment": " Represents the result of a calculation. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "p",
                "comment": " Defines a portion that should be displayed as a paragraph. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "param",
                "comment": " Defines parameters for use by plug-ins invoked by `object` elements. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "pre",
                "comment": " Indicates that its content is preformatted and that this format must be\npreserved.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "progress",
                "comment": " Represents the completion progress of a task. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "q",
                "comment": " Represents an inline quotation. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "rp",
                "comment": " Represents parenthesis around a ruby annotation, used to display the\nannotation in an alternate way by browsers not supporting the standard display\nfor annotations.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "rt",
                "comment": " Represents the text of a ruby annotation. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "ruby",
                "comment": " Represents content to be marked with ruby annotations, short runs of text\npresented alongside the text. This is often used in conjunction with East Asian\nlanguage where the annotations act as a guide for pronunciation, like the\nJapanese furigana.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "s",
                "comment": " Represents content that is no longer accurate or relevant. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "samp",
                "comment": " Represents the output of a program or a computer. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "section",
                "comment": " Defines a section in a document.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "select",
                "comment": " Represents a control allowing selection among a set of options. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "small",
                "comment": " Represents a side comment, that is, text like a disclaimer or a\ncopyright, which is not essential to the comprehension of the document.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "source",
                "comment": " Allows authors to specify alternative media resources for media elements\nlike `video` or `audio`.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "span",
                "comment": " Represents text with no specific meaning. This has to be used when no other\ntext-semantic element conveys an adequate meaning, which, in this case, is\noften brought by global attributes like `class`, `lang`, or `dir`.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "strong",
                "comment": " Represents especially important text. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "sub",
                "comment": " Represent a subscript. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "summary",
                "comment": " Represents a summary, caption, or legend for a given `details`. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "sup",
                "comment": " Represent a superscript. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "svg",
                "comment": " Defines an embedded vectorial image. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "table",
                "comment": " Represents data with more than one dimension. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "tbody",
                "comment": " Represents the block of rows that describes the concrete data of a table.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "td",
                "comment": " Represents a data cell in a table. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "text",
                "comment": " Just put plain text in the DOM. It will escape the string so that it appears\nexactly as you specify.\n\n      text \"Hello World!\"\n",
                "type": "String -> Html.Html"
            },
            {
                "name": "textarea",
                "comment": " Represents a multiline text edit control. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "tfoot",
                "comment": " Represents the block of rows that describes the column summaries of a table.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "th",
                "comment": " Represents a header cell in a table. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "thead",
                "comment": " Represents the block of rows that describes the column labels of a table.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "time",
                "comment": " Represents a date and time value; the machine-readable equivalent can be\nrepresented in the datetime attribute.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "toElement",
                "comment": " Embed HTML in Elements. Useful if your app is written primarily with\nElements, but you need to switch over to HTML for some small section.\n",
                "type": "Int -> Int -> Html.Html -> Graphics.Element.Element"
            },
            {
                "name": "tr",
                "comment": " Represents a row of cells in a table. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "track",
                "comment": " Allows authors to specify timed text track for media elements like `video`\nor `audio`.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "u",
                "comment": " Represents a non-textual annoatation for which the conventional\npresentation is underlining, such labeling the text as being misspelt or\nlabeling a proper name in Chinese text.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "ul",
                "comment": " Defines an unordered list of items. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "var",
                "comment": " Represents a variable. Specific cases where it should be used include an\nactual mathematical expression or programming context, an identifier\nrepresenting a constant, a symbol identifying a physical quantity, a function\nparameter, or a mere placeholder in prose.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "video",
                "comment": " Represents a video, the associated audio and captions, and controls. ",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            },
            {
                "name": "wbr",
                "comment": " Represents a line break opportunity, that is a suggested point for\nwrapping text in order to improve readability of text split on several lines.\n",
                "type": "List Html.Attribute -> List Html.Html -> Html.Html"
            }
        ],
        "generated-with-elm-version": "0.16.0"
    }
]

let html: any
// 目前不支持接收限定格式的子节点。。。例如限定格式为 (li>a)[]。。。
// 不过感觉限定格式的子节点本身并没有太大意义。。。因为这种限定格式的html往往仅表示数据，所以js对象作为属性更合适
// 至于子节点不限定格式，但是对子节点做一个包装，例如 margin: 20px，更正常的写法没有区别。。。
// 事实上，这个库仅仅是html的一层抽象，具体的至于限定或包装子节点等都是具体的使用这个库去创建函数，构建组建，由组建内在逻辑去控制。

let classListProcessor = (className: any, value: string = '') => {
    if (className instanceof Array) {
        Array(className).forEach(sub => { value = classListProcessor(sub, value) })
    }
    if (className instanceof Object) {
        for (var name in className) {
            className[name] ? value += ' ' + name.trim().replace(/[A-Z]/g, (match) => '-' + match.toLowerCase()) : null
        }
    }
    if (className instanceof String) {
        value += ' ' + className
    }
    return value
}

let styleListProcessor = (style: any, value: string = '') => {
    if(style instanceof Array) {
        Array(style).forEach(sub => { value = styleListProcessor(sub, value) })
    }
    if (style instanceof Object) {
        for (var name in style) {
            value += ' ' + name.trim().replace(/[A-Z]/g, (match) => '-' + match.toLowerCase()) + '=' + style[name]
        }
    }
    if (style instanceof String) {
        value += ' ' + style
    }
    return value
}

let attrPreprocessor = (name: string, value: any) => {
    name = name.trim()
    switch (name) {
        case 'className':
            return ['class', classListProcessor(value)]
        case 'class':
            return ['class', classListProcessor(value)]
        case 'style':
            return ['style', styleListProcessor(value)]
        case 'async':
        case 'autocomplete':
        case 'autofocus':
        case 'autoplay':
        case 'checked':
        case 'contenteditable':
        case 'controls':
        case 'default':
        case 'defer':
        case 'disabled':
        case 'download':
        case 'hidden':
        case 'ismap':
        case 'loop':
        case 'multiple':
        case 'novalidate':
        case 'readonly':
        case 'required':
        case 'reversed':
        case 'scoped':
        case 'seamless':
        case 'selected':
        case 'spellcheck':
            return value ? [name, true] : ['', '']
        default:
            return [name.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase()), value]
    }
}

// merge with interface HTMLElement
// interface HTMLElement {
//     update: (attrs: Object, children: Node[]) => HTMLElement
// }

let _createElement = (tagName: string) => {
    return document.createElement(tagName)
}
let _updateAttributes = (element: HTMLElement, attrs: Object) => {
    for (var name in attrs) {
        let value = attrs[name]
        if (typeof value === 'function') {
            // 先处理事件名 click, onclick, onClick, mouseOver, onMouseOver, on-click 都可以
            name.slice(0, 2) === 'on' ?
                element[name.toLowerCase().replace('-', '')] = value :
                element['on' + name.toLowerCase().replace('-', '')] = value
        } else {
            // 后处理属性名及属性值
            // class可以属性名是 className, class 值可以是 string, dict<string, bool>, array<string|dict<string, bool>>, 
            // bool属性如 disabled, 当值为 false 时不会被 setAttribute
            let [_name, _value] = attrPreprocessor(name, value)
            _name ? element.setAttribute(_name, _value) : null
        }
    }
    return element
}
let _cleanAttributes = (element: HTMLElement) => {
    for (var i = element.attributes.length - 1; i >= 0; i--) {
        element.removeAttribute(element.attributes[i].name)
    }
    return element
}
let _appendChildNodes = (element: HTMLElement, childNodes: Node[]) => {
    childNodes.forEach(child => element.appendChild(child))
    return element
}
let _cleanChildNodes = (element: HTMLElement) => {
    for (var i = element.childNodes.length - 1; i >= 0; i--) {
        element.removeChild(element.childNodes[i])
    }
    return element
}

let childNodes = (element: HTMLElement) => {
    let nodes: Node[] = []
    for (var i = element.childNodes.length - 1; i >= 0; i--) {
        nodes.push(element.childNodes[i])
    }
    return nodes
}


let createElement = (tagName: string, attrs: Object, childNodes: Node[]) => {
    return _appendChildNodes(_updateAttributes(_createElement(tagName), attrs), childNodes)
}

let updateElement = (element: HTMLElement, attrs: Object, childNodes: Node[]) => {
    return _appendChildNodes(_cleanChildNodes(_updateAttributes(element, attrs)), childNodes)
}

let text = (data: string) => document.createTextNode(data)
let div = (attrs: Object, children: Node[]) => createElement('div', attrs, children)
let img = (attrs: Object) => createElement('img', attrs, [])
let input = (attrs: Object) => createElement('input', attrs, [])
let button = (attr: Object, text: Text) => createElement('button', attr, [text])

// createElement('a', {}, [createElement('div', {}, []), text('adsf')])

// var bb: Text
// let node =
//     div({
//         'class': 'modal fade',
//         dataBackdrop: false,
//         dataKeyboard: false,
//         id: 'buyProductModal',
//         tabindex: -1,
//         role: 'dialog',
//         'aria-labelledby': 'buyProductModalLabel',
//     }, [
//             div({ className: 'modal-dialog', role: 'document' }, [
//                 div({ className: 'modal-content' }, [
//                     div({ className: 'modal-header' }, [
//                         button({ className: 'close', type: 'button', dataMiss: 'modal', ariaLabel: 'Close', click: () => { updateElement(node, { dataMiss: 'jiangui' }, childNodes(node)); bb.textContent += 'abc'; } }, bb = text('nihao'))
//                     ])
//                 ])
//             ])
//         ]
//     )


let benchmark = []
for (var i = 10000 - 1; i >= 0; i--) {
    benchmark.push(i)
}

let appChildren = () => {
    return [
        input({ type: 'text', value: flux.value, change: (e) => {
            flux.setValue(e.currentTarget.value)
        } }),
        div(
            {},
            benchmark.map(v => {
                return div({}, [text(flux.value)])
            })
        )
    ]
}

let app = div({}, [])
document.body.appendChild(app)

let flux = {
    value: '',
    setValue: (v) => {
        flux.value = v
        flux.dispatch()
    },
    // listener: [],
    // subscribe: (fn, params) => {
    //     flux.listener.push([fn, params])
    //     return fn(params)
    // },
    dispatch: () => {
        // flux.listener.forEach(v => v[0](v[1]))
        updateElement(app, {}, appChildren())
    }
}
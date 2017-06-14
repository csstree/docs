(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.csstree = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={"generic":true,"types":{"absolute-size":"xx-small | x-small | small | medium | large | x-large | xx-large","alpha-value":"<number> | <percentage>","angle-percentage":"<angle> | <percentage>","animateable-feature":"scroll-position | contents | <custom-ident>","attachment":"scroll | fixed | local","auto-repeat":"repeat( [ auto-fill | auto-fit ] , [ <line-names>? <fixed-size> ]+ <line-names>? )","auto-track-list":"[ <line-names>? [ <fixed-size> | <fixed-repeat> ] ]* <line-names>? <auto-repeat> [ <line-names>? [ <fixed-size> | <fixed-repeat> ] ]* <line-names>?","basic-shape":"<inset()> | <circle()> | <ellipse()> | <polygon()>","bg-image":"none | <image>","bg-layer":"<bg-image> || <position> [ / <bg-size> ]? || <repeat-style> || <attachment> || <box>{1,2}","bg-size":"[ <length-percentage> | auto ]{1,2} | cover | contain","blur()":"blur( <length> )","blend-mode":"normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity","box":"border-box | padding-box | content-box","br-style":"none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset","br-width":"<length> | thin | medium | thick","brightness()":"brightness( <number-percentage> )","calc()":"calc( <calc-sum> )","calc-sum":"<calc-product> [ [ '+' | '-' ] <calc-product> ]*","calc-product":"<calc-value> [ '*' <calc-value> | '/' <number> ]*","calc-value":"<number> | <dimension> | <percentage> | ( <calc-sum> )","cf-final-image":"<image> | <color>","cf-mixing-image":"<percentage>? && <image>","circle()":"circle( [ <shape-radius> ]? [ at <position> ]? )","clip-source":"<url>","color":"<rgb()> | <rgba()> | <hsl()> | <hsla()> | <hex-color> | <named-color> | currentcolor | <deprecated-system-color>","color-stop":"<color> <length-percentage>?","color-stop-list":"<color-stop>#{2,}","common-lig-values":"[ common-ligatures | no-common-ligatures ]","composite-style":"clear | copy | source-over | source-in | source-out | source-atop | destination-over | destination-in | destination-out | destination-atop | xor","compositing-operator":"add | subtract | intersect | exclude","contextual-alt-values":"[ contextual | no-contextual ]","content-list":"[ <string> | contents | <url> | <quote> | <attr()> | counter( <ident> , <'list-style-type'>? ) ]+","contrast()":"contrast( [ <number-percentage> ] )","counter-style":"<counter-style-name> | symbols()","counter-style-name":"<custom-ident>","cross-fade()":"cross-fade( <cf-mixing-image> , <cf-final-image>? )","deprecated-system-color":"ActiveBorder | ActiveCaption | AppWorkspace | Background | ButtonFace | ButtonHighlight | ButtonShadow | ButtonText | CaptionText | GrayText | Highlight | HighlightText | InactiveBorder | InactiveCaption | InactiveCaptionText | InfoBackground | InfoText | Menu | MenuText | Scrollbar | ThreeDDarkShadow | ThreeDFace | ThreeDHighlight | ThreeDLightShadow | ThreeDShadow | Window | WindowFrame | WindowText","discretionary-lig-values":"[ discretionary-ligatures | no-discretionary-ligatures ]","display-box":"contents | none","display-inside":"flow | flow-root | table | flex | grid | subgrid | ruby","display-internal":"table-row-group | table-header-group | table-footer-group | table-row | table-cell | table-column-group | table-column | table-caption | ruby-base | ruby-text | ruby-base-container | ruby-text-container","display-legacy":"inline-block | inline-list-item | inline-table | inline-flex | inline-grid","display-listitem":"list-item && <display-outside>? && [ flow | flow-root ]?","display-outside":"block | inline | run-in","drop-shadow()":"drop-shadow( <length>{2,3} <color>? )","east-asian-variant-values":"[ jis78 | jis83 | jis90 | jis04 | simplified | traditional ]","east-asian-width-values":"[ full-width | proportional-width ]","element()":"element( <id-selector> )","ellipse()":"ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )","ending-shape":"circle | ellipse","explicit-track-list":"[ <line-names>? <track-size> ]+ <line-names>?","family-name":"<string> | <custom-ident>+","feature-tag-value":"<string> [ <integer> | on | off ]?","feature-value-name":"<custom-ident>","fill-rule":"nonzero | evenodd","filter-function":"<blur()> | <brightness()> | <contrast()> | <drop-shadow()> | <grayscale()> | <hue-rotate()> | <invert()> | <opacity()> | <sepia()> | <saturate()>","filter-function-list":"[ <filter-function> | <url> ]+","final-bg-layer":"<bg-image> || <position> [ / <bg-size> ]? || <repeat-style> || <attachment> || <box> || <box> || <'background-color'>","fit-content()":"fit-content( [ <length> | <percentage> ] )","fixed-breadth":"<length-percentage>","fixed-repeat":"repeat( [ <positive-integer> ] , [ <line-names>? <fixed-size> ]+ <line-names>? )","fixed-size":"<fixed-breadth> | minmax( <fixed-breadth> , <track-breadth> ) | minmax( <inflexible-breadth> , <fixed-breadth> )","font-variant-css21":"[ normal | small-caps ]","frequency-percentage":"<frequency> | <percentage>","generic-family":"serif | sans-serif | cursive | fantasy | monospace | -apple-system","generic-name":"serif | sans-serif | cursive | fantasy | monospace","geometry-box":"<shape-box> | fill-box | stroke-box | view-box","gradient":"<-legacy-gradient()> | <linear-gradient()> | <repeating-linear-gradient()> | <radial-gradient()> | <repeating-radial-gradient()>","grayscale()":"grayscale( <number-percentage> )","grid-line":"auto | <custom-ident> | [ <integer> && <custom-ident>? ] | [ span && [ <integer> || <custom-ident> ] ]","historical-lig-values":"[ historical-ligatures | no-historical-ligatures ]","hsl()":"hsl( [ <hue> <percentage> <percentage> [ / <alpha-value> ]? ] | [ <hue> , <percentage> , <percentage> , <alpha-value>? ] )","hsla()":"hsla( [ <hue> <percentage> <percentage> [ / <alpha-value> ]? ] | [ <hue> , <percentage> , <percentage> , <alpha-value>? ] )","hue":"<number> | <angle>","hue-rotate()":"hue-rotate( <angle> )","image":"<url> | <image()> | <image-set()> | <element()> | <cross-fade()> | <gradient>","image()":"image( [ [ <image> | <string> ]? , <color>? ]! )","image-set()":"image-set( <image-set-option># )","image-set-option":"[ <image> | <string> ] <resolution>","inflexible-breadth":"<length> | <percentage> | min-content | max-content | auto","inset()":"inset( <length-percentage>{1,4} [ round <'border-radius'> ]? )","invert()":"invert( <number-percentage> )","keyframes-name":"<custom-ident> | <string>","keyframe-selector":"from | to | <percentage>","leader()":"leader( dotted | solid | space | <string> )","length-percentage":"<length> | <percentage>","line-names":"'[' <custom-ident>* ']'","line-name-list":"[ <line-names> | <name-repeat> ]+","linear-gradient()":"linear-gradient( [ <angle> | to <side-or-corner> ]? , <color-stop-list> )","mask-layer":"<mask-reference> || <position> [ / <bg-size> ]? || <repeat-style> || <geometry-box> || [ <geometry-box> | no-clip ] || <compositing-operator> || <masking-mode>","mask-position":"[ <length-percentage> | left | center | right ] [ <length-percentage> | top | center | bottom ]?","mask-reference":"none | <image> | <mask-source>","mask-source":"<url>","masking-mode":"alpha | luminance | match-source","matrix()":"matrix( <number> [, <number> ]{5} )","matrix3d()":"matrix3d( <number> [, <number> ]{15} )","media-type":"<ident>","mf-boolean":"<mf-name>","mf-name":"<ident>","named-color":"transparent | aliceblue | antiquewhite | aqua | aquamarine | azure | beige | bisque | black | blanchedalmond | blue | blueviolet | brown | burlywood | cadetblue | chartreuse | chocolate | coral | cornflowerblue | cornsilk | crimson | cyan | darkblue | darkcyan | darkgoldenrod | darkgray | darkgreen | darkgrey | darkkhaki | darkmagenta | darkolivegreen | darkorange | darkorchid | darkred | darksalmon | darkseagreen | darkslateblue | darkslategray | darkslategrey | darkturquoise | darkviolet | deeppink | deepskyblue | dimgray | dimgrey | dodgerblue | firebrick | floralwhite | forestgreen | fuchsia | gainsboro | ghostwhite | gold | goldenrod | gray | green | greenyellow | grey | honeydew | hotpink | indianred | indigo | ivory | khaki | lavender | lavenderblush | lawngreen | lemonchiffon | lightblue | lightcoral | lightcyan | lightgoldenrodyellow | lightgray | lightgreen | lightgrey | lightpink | lightsalmon | lightseagreen | lightskyblue | lightslategray | lightslategrey | lightsteelblue | lightyellow | lime | limegreen | linen | magenta | maroon | mediumaquamarine | mediumblue | mediumorchid | mediumpurple | mediumseagreen | mediumslateblue | mediumspringgreen | mediumturquoise | mediumvioletred | midnightblue | mintcream | mistyrose | moccasin | navajowhite | navy | oldlace | olive | olivedrab | orange | orangered | orchid | palegoldenrod | palegreen | paleturquoise | palevioletred | papayawhip | peachpuff | peru | pink | plum | powderblue | purple | rebeccapurple | red | rosybrown | royalblue | saddlebrown | salmon | sandybrown | seagreen | seashell | sienna | silver | skyblue | slateblue | slategray | slategrey | snow | springgreen | steelblue | tan | teal | thistle | tomato | turquoise | violet | wheat | white | whitesmoke | yellow | yellowgreen | <-non-standart-color>","namespace-prefix":"<ident>","number-percentage":"<number> | <percentage>","numeric-figure-values":"[ lining-nums | oldstyle-nums ]","numeric-fraction-values":"[ diagonal-fractions | stacked-fractions ]","numeric-spacing-values":"[ proportional-nums | tabular-nums ]","opacity()":"opacity( [ <number-percentage> ] )","perspective()":"perspective( <length> )","polygon()":"polygon( <fill-rule>? , [ <length-percentage> <length-percentage> ]# )","position":"[ center && [ left | right | top | bottom ] <length-percentage>? ] | [ [ left | right ] <length-percentage>? ] && [ [ top | bottom ] <length-percentage>? ] | [ [ left | center | right | <length-percentage> ] || [ top | center | bottom | <length-percentage> ] ]","quote":"open-quote | close-quote | no-open-quote | no-close-quote","radial-gradient()":"radial-gradient( [ <ending-shape> || <size> ]? [ at <position> ]? , <color-stop-list> )","relative-size":"larger | smaller","repeat-style":"repeat-x | repeat-y | [ repeat | space | round | no-repeat ]{1,2}","repeating-linear-gradient()":"repeating-linear-gradient( [ <angle> | to <side-or-corner> ]? , <color-stop-list> )","repeating-radial-gradient()":"repeating-radial-gradient( [ <ending-shape> || <size> ]? [ at <position> ]? , <color-stop-list> )","rgb()":"rgb( [ [ <percentage>{3} | <number>{3} ] [ / <alpha-value> ]? ] | [ [ <percentage>#{3} | <number>#{3} ] , <alpha-value>? ] )","rgba()":"rgba( [ [ <percentage>{3} | <number>{3} ] [ / <alpha-value> ]? ] | [ [ <percentage>#{3} | <number>#{3} ] , <alpha-value>? ] )","rotate()":"rotate( <angle> )","rotate3d()":"rotate3d( <number> , <number> , <number> , <angle> )","rotateX()":"rotateX( <angle> )","rotateY()":"rotateY( <angle> )","rotateZ()":"rotateZ( <angle> )","saturate()":"saturate( <number-percentage> )","scale()":"scale( <number> [, <number> ]? )","scale3d()":"scale3d( <number> , <number> , <number> )","scaleX()":"scaleX( <number> )","scaleY()":"scaleY( <number> )","scaleZ()":"scaleZ( <number> )","shape-radius":"<length-percentage> | closest-side | farthest-side","skew()":"skew( <angle> [, <angle> ]? )","skewX()":"skewX( <angle> )","skewY()":"skewY( <angle> )","sepia()":"sepia( <number-percentage> )","shadow":"inset? && <length>{2,4} && <color>?","shadow-t":"[ <length>{2,3} && <color>? ]","shape":"rect( [ [ <top> , <right> , <bottom> , <left> ] | [ <top> <right> <bottom> <left> ] ] )","shape-box":"<box> | margin-box","side-or-corner":"[ left | right ] || [ top | bottom ]","single-animation":"<time> || <single-timing-function> || <time> || <single-animation-iteration-count> || <single-animation-direction> || <single-animation-fill-mode> || <single-animation-play-state> || [ none | <keyframes-name> ]","single-animation-direction":"normal | reverse | alternate | alternate-reverse","single-animation-fill-mode":"none | forwards | backwards | both","single-animation-iteration-count":"infinite | <number>","single-animation-play-state":"running | paused","single-timing-function":"<single-transition-timing-function>","single-transition":"<single-transition-timing-function> || [ none | <single-transition-property> ] || <time> || <time>","single-transition-timing-function":"ease | linear | ease-in | ease-out | ease-in-out | step-start | step-end | steps( <integer> [, [ start | end ] ]? ) | cubic-bezier( <number> , <number> , <number> , <number> )","single-transition-property":"all | <custom-ident>","size":"closest-side | farthest-side | closest-corner | farthest-corner | <length> | <length-percentage>{2}","symbol":"<string> | <image> | <ident>","target":"<target-counter()> | <target-counters()> | <target-text()>","target-counter()":"target-counter( [ <string> | <url> ] , <custom-ident> [, <counter-style> ]? )","target-counters()":"target-counters( [ <string> | <url> ] , <custom-ident> , <string> [, <counter-style> ]? )","target-text()":"target-text( [ <string> | <url> ] [, [ content | before | after | first-letter ] ]? )","time-percentage":"<time> | <percentage>","track-breadth":"<length-percentage> | <flex> | min-content | max-content | auto","track-list":"[ <line-names>? [ <track-size> | <track-repeat> ] ]+ <line-names>?","track-repeat":"repeat( [ <positive-integer> ] , [ <line-names>? <track-size> ]+ <line-names>? )","track-size":"<track-breadth> | minmax( <inflexible-breadth> , <track-breadth> ) | fit-content( [ <length> | <percentage> ] )","transform-function":"[ <matrix()> || <translate()> || <translateX()> || <translateY()> || <scale()> || <scaleX()> || <scaleY()> || <rotate()> || <skew()> || <skewX()> || <skewY()> || <matrix3d()> || <translate3d()> || <translateZ()> || <scale3d()> || <scaleZ()> || <rotate3d()> || <rotateX()> || <rotateY()> || <rotateZ()> || <perspective()> ]+","transform-list":"<transform-function>+","translate()":"translate( <length-percentage> [, <length-percentage> ]? )","translate3d()":"translate3d( <length-percentage> , <length-percentage> , <length> )","translateX()":"translateX( <length-percentage> )","translateY()":"translateY( <length-percentage> )","translateZ()":"translateZ( <length> )","type-or-unit":"string | integer | color | url | integer | number | length | angle | time | frequency | em | ex | px | rem | vw | vh | vmin | vmax | mm | q | cm | in | pt | pc | deg | grad | rad | ms | s | Hz | kHz | %","viewport-length":"auto | <length-percentage>","-legacy-gradient()":"<-webkit-gradient()> | <-legacy-linear-gradient()> | <-legacy-repeating-linear-gradient()> | <-legacy-radial-gradient()> | <-legacy-repeating-radial-gradient()>","-legacy-linear-gradient()":"-moz-linear-gradient( <-legacy-linear-gradient-arguments> ) | -ms-linear-gradient( <-legacy-linear-gradient-arguments> ) | -webkit-linear-gradient( <-legacy-linear-gradient-arguments> ) | -o-linear-gradient( <-legacy-linear-gradient-arguments> )","-legacy-repeating-linear-gradient()":"-moz-repeating-linear-gradient( <-legacy-linear-gradient-arguments> ) | -ms-repeating-linear-gradient( <-legacy-linear-gradient-arguments> ) | -webkit-repeating-linear-gradient( <-legacy-linear-gradient-arguments> ) | -o-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )","-legacy-linear-gradient-arguments":"[ <angle> | <side-or-corner> ]? , <color-stop-list>","-legacy-radial-gradient()":"-moz-radial-gradient( <-legacy-radial-gradient-arguments> ) | -ms-radial-gradient( <-legacy-radial-gradient-arguments> ) | -webkit-radial-gradient( <-legacy-radial-gradient-arguments> ) | -o-radial-gradient( <-legacy-radial-gradient-arguments> )","-legacy-repeating-radial-gradient()":"-moz-repeating-radial-gradient( <-legacy-radial-gradient-arguments> ) | -ms-repeating-radial-gradient( <-legacy-radial-gradient-arguments> ) | -webkit-repeating-radial-gradient( <-legacy-radial-gradient-arguments> ) | -o-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )","-legacy-radial-gradient-arguments":"[ <position> , ]? [ [ [ <-legacy-radial-gradient-shape> || <-legacy-radial-gradient-size> ] | [ <length> | <percentage> ]{2} ] , ]? <color-stop-list>","-legacy-radial-gradient-size":"closest-side | closest-corner | farthest-side | farthest-corner | contain | cover","-legacy-radial-gradient-shape":"circle | ellipse","-non-standart-font":"-apple-system-body | -apple-system-headline | -apple-system-subheadline | -apple-system-caption1 | -apple-system-caption2 | -apple-system-footnote | -apple-system-short-body | -apple-system-short-headline | -apple-system-short-subheadline | -apple-system-short-caption1 | -apple-system-short-footnote | -apple-system-tall-body","-non-standart-color":"-moz-ButtonDefault | -moz-ButtonHoverFace | -moz-ButtonHoverText | -moz-CellHighlight | -moz-CellHighlightText | -moz-Combobox | -moz-ComboboxText | -moz-Dialog | -moz-DialogText | -moz-dragtargetzone | -moz-EvenTreeRow | -moz-Field | -moz-FieldText | -moz-html-CellHighlight | -moz-html-CellHighlightText | -moz-mac-accentdarkestshadow | -moz-mac-accentdarkshadow | -moz-mac-accentface | -moz-mac-accentlightesthighlight | -moz-mac-accentlightshadow | -moz-mac-accentregularhighlight | -moz-mac-accentregularshadow | -moz-mac-chrome-active | -moz-mac-chrome-inactive | -moz-mac-focusring | -moz-mac-menuselect | -moz-mac-menushadow | -moz-mac-menutextselect | -moz-MenuHover | -moz-MenuHoverText | -moz-MenuBarText | -moz-MenuBarHoverText | -moz-nativehyperlinktext | -moz-OddTreeRow | -moz-win-communicationstext | -moz-win-mediatext | -moz-activehyperlinktext | -moz-default-background-color | -moz-default-color | -moz-hyperlinktext | -moz-visitedhyperlinktext | -webkit-activelink | -webkit-focus-ring-color | -webkit-link | -webkit-text","-non-standart-image-rendering":"optimize-contrast | -moz-crisp-edges | -o-crisp-edges | -webkit-optimize-contrast","-non-standart-width":"min-intrinsic | intrinsic | -moz-min-content | -moz-max-content | -webkit-min-content | -webkit-max-content","-non-standart-word-break":"break-word","-webkit-image-set()":"<image-set()>","-webkit-gradient()":"-webkit-gradient( <-webkit-gradient-type> , <-webkit-gradient-point> [ , <-webkit-gradient-point> | , <-webkit-gradient-radius> , <-webkit-gradient-point> ] [, <-webkit-gradient-radius> ]? [, <-webkit-gradient-color-stop()> ]* )","-webkit-gradient-color-stop()":"from( <color> ) | color-stop( [ <number-zero-one> | <percentage> ] , <color> ) | to( <color> )","-webkit-gradient-point":"[ left | center | right | <length-percentage> ] [ top | center | bottom | <length-percentage> ]","-webkit-gradient-radius":"<length> | <percentage>","-webkit-gradient-type":"linear | radial","-webkit-mask-box-repeat":"repeat | stretch | round","-webkit-mask-clip-style":"border | border-box | padding | padding-box | content | content-box | text","-ms-filter":"[ <progid> | FlipH | FlipV ]+","age":"child | young | old","border-radius":"<length-percentage>{1,2}","bottom":"<length> | auto","generic-voice":"[ <age>? <gender> <integer>? ]","gender":"male | female | neutral","left":"<length> | auto","mask-image":"<mask-reference>#","name-repeat":"repeat( [ <positive-integer> | auto-fill ] , <line-names>+ )","outline-radius":"<border-radius>","paint":"none | currentColor | <color> | <url> [ none | currentColor | <color> ]?","path()":"path( <string> )","right":"<length> | auto","svg-length":"<percentage> | <length> | <number>","svg-writing-mode":"lr-tb | rl-tb | tb-rl | lr | rl | tb","top":"<length> | auto","x":"<number>","y":"<number>"},"properties":{"-ms-overflow-style":"auto | none | scrollbar | -ms-autohiding-scrollbar","-moz-appearance":"none | button | button-arrow-down | button-arrow-next | button-arrow-previous | button-arrow-up | button-bevel | button-focus | caret | checkbox | checkbox-container | checkbox-label | checkmenuitem | dualbutton | groupbox | listbox | listitem | menuarrow | menubar | menucheckbox | menuimage | menuitem | menuitemtext | menulist | menulist-button | menulist-text | menulist-textfield | menupopup | menuradio | menuseparator | meterbar | meterchunk | progressbar | progressbar-vertical | progresschunk | progresschunk-vertical | radio | radio-container | radio-label | radiomenuitem | range | range-thumb | resizer | resizerpanel | scale-horizontal | scalethumbend | scalethumb-horizontal | scalethumbstart | scalethumbtick | scalethumb-vertical | scale-vertical | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | separator | sheet | spinner | spinner-downbutton | spinner-textfield | spinner-upbutton | splitter | statusbar | statusbarpanel | tab | tabpanel | tabpanels | tab-scroll-arrow-back | tab-scroll-arrow-forward | textfield | textfield-multiline | toolbar | toolbarbutton | toolbarbutton-dropdown | toolbargripper | toolbox | tooltip | treeheader | treeheadercell | treeheadersortarrow | treeitem | treeline | treetwisty | treetwistyopen | treeview | -moz-mac-unified-toolbar | -moz-win-borderless-glass | -moz-win-browsertabbar-toolbox | -moz-win-communicationstext | -moz-win-communications-toolbox | -moz-win-exclude-glass | -moz-win-glass | -moz-win-mediatext | -moz-win-media-toolbox | -moz-window-button-box | -moz-window-button-box-maximized | -moz-window-button-close | -moz-window-button-maximize | -moz-window-button-minimize | -moz-window-button-restore | -moz-window-frame-bottom | -moz-window-frame-left | -moz-window-frame-right | -moz-window-titlebar | -moz-window-titlebar-maximized","-moz-binding":"<url> | none","-moz-border-bottom-colors":"[ <color> ]* <color> | none","-moz-border-left-colors":"[ <color> ]* <color> | none","-moz-border-right-colors":"[ <color> ]* <color> | none","-moz-border-top-colors":"[ <color> ]* <color> | none","-moz-float-edge":"border-box | content-box | margin-box | padding-box","-moz-force-broken-image-icon":"<integer>","-moz-image-region":"<shape> | auto","-moz-orient":"inline | block | horizontal | vertical","-moz-outline-radius":"<outline-radius>{1,4} [ / <outline-radius>{1,4} ]?","-moz-outline-radius-bottomleft":"<outline-radius>","-moz-outline-radius-bottomright":"<outline-radius>","-moz-outline-radius-topleft":"<outline-radius>","-moz-outline-radius-topright":"<outline-radius>","-moz-stack-sizing":"ignore | stretch-to-fit","-moz-text-blink":"none | blink","-moz-user-focus":"ignore | normal | select-after | select-before | select-menu | select-same | select-all | none","-moz-user-input":"auto | none | enabled | disabled","-moz-user-modify":"read-only | read-write | write-only","-moz-window-shadow":"default | menu | tooltip | sheet | none","-webkit-border-before":"<'border-width'> || <'border-style'> || <'color'>","-webkit-border-before-color":"<'color'>","-webkit-border-before-style":"<'border-style'>","-webkit-border-before-width":"<'border-width'>","-webkit-box-reflect":"[ above | below | right | left ]? <length>? <image>?","-webkit-mask":"<mask-image> [ <'-webkit-mask-repeat'> || <'-webkit-mask-attachment'> || <'-webkit-mask-position'> || <'-webkit-mask-origin'> || <'-webkit-mask-clip'> ]*","-webkit-mask-attachment":"<attachment> [, <attachment> ]*","-webkit-mask-clip":"<-webkit-mask-clip-style> [, <-webkit-mask-clip-style> ]*","-webkit-mask-composite":"<composite-style> [, <composite-style> ]*","-webkit-mask-image":"<mask-image> [, <mask-image> ]*","-webkit-mask-origin":"[ padding | border | content ] [, [ border | padding | content ] ]*","-webkit-mask-position":"<mask-position>#","-webkit-mask-position-x":"[ <length-percentage> | left | center | right ]#","-webkit-mask-position-y":"[ <length-percentage> | top | center | bottom ]#","-webkit-mask-repeat":"<repeat-style> [, <repeat-style> ]*","-webkit-mask-repeat-x":"repeat | no-repeat | space | round","-webkit-mask-repeat-y":"repeat | no-repeat | space | round","-webkit-tap-highlight-color":"<color>","-webkit-text-fill-color":"<color>","-webkit-text-stroke":"<length> || <color>","-webkit-text-stroke-color":"<color>","-webkit-text-stroke-width":"<length>","-webkit-touch-callout":"default | none","align-content":"flex-start | flex-end | center | space-between | space-around | space-evenly | stretch","align-items":"flex-start | flex-end | center | baseline | stretch","align-self":"auto | flex-start | flex-end | center | baseline | stretch","all":"initial | inherit | unset","animation":"<single-animation>#","animation-delay":"<time>#","animation-direction":"<single-animation-direction>#","animation-duration":"<time>#","animation-fill-mode":"<single-animation-fill-mode>#","animation-iteration-count":"<single-animation-iteration-count>#","animation-name":"[ none | <keyframes-name> ]#","animation-play-state":"<single-animation-play-state>#","animation-timing-function":"<single-timing-function>#","appearance":"auto | none","azimuth":"<angle> | [ [ left-side | far-left | left | center-left | center | center-right | right | far-right | right-side ] || behind ] | leftwards | rightwards","backdrop-filter":"none | <filter-function-list>","backface-visibility":"visible | hidden","background":"[ <bg-layer> , ]* <final-bg-layer>","background-attachment":"<attachment>#","background-blend-mode":"<blend-mode>#","background-clip":"<box>#","background-color":"<color>","background-image":"<bg-image>#","background-origin":"<box>#","background-position":"<position>#","background-position-x":"[ center | [ left | right | x-start | x-end ]? <length-percentage>? ]#","background-position-y":"[ center | [ top | bottom | y-start | y-end ]? <length-percentage>? ]#","background-repeat":"<repeat-style>#","background-size":"<bg-size>#","block-size":"<'width'>","border":"<br-width> || <br-style> || <color>","border-block-end":"<'border-width'> || <'border-style'> || <'color'>","border-block-end-color":"<'color'>","border-block-end-style":"<'border-style'>","border-block-end-width":"<'border-width'>","border-block-start":"<'border-width'> || <'border-style'> || <'color'>","border-block-start-color":"<'color'>","border-block-start-style":"<'border-style'>","border-block-start-width":"<'border-width'>","border-bottom":"<br-width> || <br-style> || <color>","border-bottom-color":"<color>","border-bottom-left-radius":"<length-percentage>{1,2}","border-bottom-right-radius":"<length-percentage>{1,2}","border-bottom-style":"<br-style>","border-bottom-width":"<br-width>","border-collapse":"collapse | separate","border-color":"<color>{1,4}","border-image":"<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>","border-image-outset":"[ <length> | <number> ]{1,4}","border-image-repeat":"[ stretch | repeat | round | space ]{1,2}","border-image-slice":"<number-percentage>{1,4} && fill?","border-image-source":"none | <image>","border-image-width":"[ <length-percentage> | <number> | auto ]{1,4}","border-inline-end":"<'border-width'> || <'border-style'> || <'color'>","border-inline-end-color":"<'color'>","border-inline-end-style":"<'border-style'>","border-inline-end-width":"<'border-width'>","border-inline-start":"<'border-width'> || <'border-style'> || <'color'>","border-inline-start-color":"<'color'>","border-inline-start-style":"<'border-style'>","border-inline-start-width":"<'border-width'>","border-left":"<br-width> || <br-style> || <color>","border-left-color":"<color>","border-left-style":"<br-style>","border-left-width":"<br-width>","border-radius":"<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?","border-right":"<br-width> || <br-style> || <color>","border-right-color":"<color>","border-right-style":"<br-style>","border-right-width":"<br-width>","border-spacing":"<length> <length>?","border-style":"<br-style>{1,4}","border-top":"<br-width> || <br-style> || <color>","border-top-color":"<color>","border-top-left-radius":"<length-percentage>{1,2}","border-top-right-radius":"<length-percentage>{1,2}","border-top-style":"<br-style>","border-top-width":"<br-width>","border-width":"<br-width>{1,4}","bottom":"<length> | <percentage> | auto","box-align":"start | center | end | baseline | stretch","box-decoration-break":"slice | clone","box-direction":"normal | reverse | inherit","box-flex":"<number>","box-flex-group":"<integer>","box-lines":"single | multiple","box-ordinal-group":"<integer>","box-orient":"horizontal | vertical | inline-axis | block-axis | inherit","box-pack":"start | center | end | justify","box-shadow":"none | <shadow>#","box-sizing":"content-box | border-box","box-suppress":"show | discard | hide","break-after":"auto | avoid | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region","break-before":"auto | avoid | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region","break-inside":"auto | avoid | avoid-page | avoid-column | avoid-region","caption-side":"top | bottom | block-start | block-end | inline-start | inline-end","caret-color":"auto | <color>","clear":"none | left | right | both | inline-start | inline-end","clip":"<shape> | auto","clip-path":"<clip-source> | [ <basic-shape> || <geometry-box> ] | none","color":"<color>","column-count":"<number> | auto","column-fill":"auto | balance","column-gap":"<length> | normal","column-rule":"<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>","column-rule-color":"<color>","column-rule-style":"<br-style>","column-rule-width":"<br-width>","column-span":"none | all","column-width":"<length> | auto","columns":"<'column-width'> || <'column-count'>","contain":"none | strict | content | [ size || layout || style || paint ]","content":"[ <image> , ]* [ normal | none | <content-list> ] [ / <string> ]?","counter-increment":"[ <custom-ident> <integer>? ]+ | none","counter-reset":"[ <custom-ident> <integer>? ]+ | none","cursor":"[ [ <url> [ <x> <y> ]? , ]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing | hand | -webkit-grab | -webkit-grabbing | -webkit-zoom-in | -webkit-zoom-out | -moz-grab | -moz-grabbing | -moz-zoom-in | -moz-zoom-out ] ]","direction":"ltr | rtl","display":"none | inline | block | list-item | inline-list-item | inline-block | inline-table | table | table-cell | table-column | table-column-group | table-footer-group | table-header-group | table-row | table-row-group | flex | inline-flex | grid | inline-grid | run-in | ruby | ruby-base | ruby-text | ruby-base-container | ruby-text-container | contents | -ms-flexbox | -ms-inline-flexbox | -ms-grid | -ms-inline-grid | -webkit-flex | -webkit-inline-flex | -webkit-box | -webkit-inline-box | -moz-inline-stack | -moz-box | -moz-inline-box","display-inside":"auto | block | table | flex | grid | ruby","display-list":"none | list-item","display-outside":"block-level | inline-level | run-in | contents | none | table-row-group | table-header-group | table-footer-group | table-row | table-cell | table-column-group | table-column | table-caption | ruby-base | ruby-text | ruby-base-container | ruby-text-container","empty-cells":"show | hide","filter":"none | <filter-function-list> | <-ms-filter>","flex":"none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]","flex-basis":"content | <'width'>","flex-direction":"row | row-reverse | column | column-reverse","flex-flow":"<'flex-direction'> || <'flex-wrap'>","flex-grow":"<number>","flex-shrink":"<number>","flex-wrap":"nowrap | wrap | wrap-reverse","float":"left | right | none | inline-start | inline-end","font":"[ [ <'font-style'> || <font-variant-css21> || <'font-weight'> || <'font-stretch'> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ] | caption | icon | menu | message-box | small-caption | status-bar | <-non-standart-font>","font-family":"[ <family-name> | <generic-family> ]#","font-feature-settings":"normal | <feature-tag-value>#","font-kerning":"auto | normal | none","font-language-override":"normal | <string>","font-variation-settings":"normal | [ <string> <number> ]#","font-size":"<absolute-size> | <relative-size> | <length-percentage>","font-size-adjust":"none | <number>","font-stretch":"normal | ultra-condensed | extra-condensed | condensed | semi-condensed | semi-expanded | expanded | extra-expanded | ultra-expanded","font-style":"normal | italic | oblique","font-synthesis":"none | [ weight || style ]","font-variant":"normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> || stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) || [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] || <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero || <east-asian-variant-values> || <east-asian-width-values> || ruby ]","font-variant-alternates":"normal | [ stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) ]","font-variant-caps":"normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps","font-variant-east-asian":"normal | [ <east-asian-variant-values> || <east-asian-width-values> || ruby ]","font-variant-ligatures":"normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]","font-variant-numeric":"normal | [ <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero ]","font-variant-position":"normal | sub | super","font-weight":"normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900","grid":"<'grid-template'> | <'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>? | [ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>","grid-area":"<grid-line> [ / <grid-line> ]{0,3}","grid-auto-columns":"<track-size>+","grid-auto-flow":"[ row | column ] || dense","grid-auto-rows":"<track-size>+","grid-column":"<grid-line> [ / <grid-line> ]?","grid-column-end":"<grid-line>","grid-column-gap":"<length-percentage>","grid-column-start":"<grid-line>","grid-gap":"<'grid-row-gap'> <'grid-column-gap'>?","grid-row":"<grid-line> [ / <grid-line> ]?","grid-row-end":"<grid-line>","grid-row-gap":"<length-percentage>","grid-row-start":"<grid-line>","grid-template":"none | [ <'grid-template-rows'> / <'grid-template-columns'> ] | [ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?","grid-template-areas":"none | <string>+","grid-template-columns":"none | <track-list> | <auto-track-list>","grid-template-rows":"none | <track-list> | <auto-track-list>","height":"[ <length> | <percentage> ] && [ border-box | content-box ]? | available | min-content | max-content | fit-content | auto","hyphens":"none | manual | auto","image-orientation":"from-image | <angle> | [ <angle>? flip ]","image-rendering":"auto | crisp-edges | pixelated | optimizeSpeed | optimizeQuality | <-non-standart-image-rendering>","image-resolution":"[ from-image || <resolution> ] && snap?","ime-mode":"auto | normal | active | inactive | disabled","initial-letter":"normal | [ <number> <integer>? ]","initial-letter-align":"[ auto | alphabetic | hanging | ideographic ]","inline-size":"<'width'>","isolation":"auto | isolate","justify-content":"flex-start | flex-end | center | space-between | space-around | space-evenly","left":"<length> | <percentage> | auto","letter-spacing":"normal | <length-percentage>","line-break":"auto | loose | normal | strict","line-height":"normal | <number> | <length> | <percentage>","list-style":"<'list-style-type'> || <'list-style-position'> || <'list-style-image'>","list-style-image":"<url> | none","list-style-position":"inside | outside","list-style-type":"<counter-style> | <string> | none","margin":"[ <length> | <percentage> | auto ]{1,4}","margin-block-end":"<'margin-left'>","margin-block-start":"<'margin-left'>","margin-bottom":"<length> | <percentage> | auto","margin-inline-end":"<'margin-left'>","margin-inline-start":"<'margin-left'>","margin-left":"<length> | <percentage> | auto","margin-right":"<length> | <percentage> | auto","margin-top":"<length> | <percentage> | auto","marker-offset":"<length> | auto","mask":"<mask-layer>#","mask-clip":"[ <geometry-box> | no-clip ]#","mask-composite":"<compositing-operator>#","mask-image":"<mask-reference>#","mask-mode":"<masking-mode>#","mask-origin":"<geometry-box>#","mask-position":"<position>#","mask-repeat":"<repeat-style>#","mask-size":"<bg-size>#","mask-type":"luminance | alpha","max-block-size":"<'max-width'>","max-height":"<length> | <percentage> | none | max-content | min-content | fit-content | fill-available","max-inline-size":"<'max-width'>","max-width":"<length> | <percentage> | none | max-content | min-content | fit-content | fill-available | <-non-standart-width>","min-block-size":"<'min-width'>","min-height":"<length> | <percentage> | auto | max-content | min-content | fit-content | fill-available","min-inline-size":"<'min-width'>","min-width":"<length> | <percentage> | auto | max-content | min-content | fit-content | fill-available | <-non-standart-width>","mix-blend-mode":"<blend-mode>","object-fit":"fill | contain | cover | none | scale-down","object-position":"<position>","offset":"[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?","offset-anchor":"auto | <position>","offset-block-end":"<'left'>","offset-block-start":"<'left'>","offset-inline-end":"<'left'>","offset-inline-start":"<'left'>","offset-distance":"<length-percentage>","offset-path":"none | ray( [ <angle> && <size>? && contain? ] ) | <path()> | <url> | [ <basic-shape> || <geometry-box> ]","offset-rotate":"[ auto | reverse ] || <angle>","opacity":"<number-zero-one>","order":"<integer>","orphans":"<integer>","outline":"[ <'outline-color'> || <'outline-style'> || <'outline-width'> ]","outline-color":"<color> | invert","outline-offset":"<length>","outline-style":"auto | <br-style>","outline-width":"<br-width>","overflow":"visible | hidden | scroll | auto","overflow-clip-box":"padding-box | content-box","overflow-wrap":"normal | break-word","overflow-x":"visible | hidden | scroll | auto","overflow-y":"visible | hidden | scroll | auto","padding":"[ <length> | <percentage> ]{1,4}","padding-block-end":"<'padding-left'>","padding-block-start":"<'padding-left'>","padding-bottom":"<length> | <percentage>","padding-inline-end":"<'padding-left'>","padding-inline-start":"<'padding-left'>","padding-left":"<length> | <percentage>","padding-right":"<length> | <percentage>","padding-top":"<length> | <percentage>","page-break-after":"auto | always | avoid | left | right","page-break-before":"auto | always | avoid | left | right","page-break-inside":"auto | avoid","perspective":"none | <length>","perspective-origin":"<position>","pointer-events":"auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit","position":"static | relative | absolute | sticky | fixed | -webkit-sticky","quotes":"[ <string> <string> ]+ | none","resize":"none | both | horizontal | vertical","right":"<length> | <percentage> | auto","ruby-align":"start | center | space-between | space-around","ruby-merge":"separate | collapse | auto","ruby-position":"over | under | inter-character","scroll-behavior":"auto | smooth","scroll-snap-coordinate":"none | <position>#","scroll-snap-destination":"<position>","scroll-snap-points-x":"none | repeat( <length-percentage> )","scroll-snap-points-y":"none | repeat( <length-percentage> )","scroll-snap-type":"none | mandatory | proximity","scroll-snap-type-x":"none | mandatory | proximity","scroll-snap-type-y":"none | mandatory | proximity","shape-image-threshold":"<number>","shape-margin":"<length-percentage>","shape-outside":"none | <shape-box> || <basic-shape> | <image>","tab-size":"<integer> | <length>","table-layout":"auto | fixed","text-align":"start | end | left | right | center | justify | match-parent","text-align-last":"auto | start | end | left | right | center | justify","text-combine-upright":"none | all | [ digits <integer>? ]","text-decoration":"<'text-decoration-line'> || <'text-decoration-style'> || <'text-decoration-color'>","text-decoration-color":"<color>","text-decoration-line":"none | [ underline || overline || line-through || blink ]","text-decoration-skip":"none | [ objects || spaces || ink || edges || box-decoration ]","text-decoration-style":"solid | double | dotted | dashed | wavy","text-emphasis":"<'text-emphasis-style'> || <'text-emphasis-color'>","text-emphasis-color":"<color>","text-emphasis-position":"[ over | under ] && [ right | left ]","text-emphasis-style":"none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>","text-indent":"<length-percentage> && hanging? && each-line?","text-orientation":"mixed | upright | sideways","text-overflow":"[ clip | ellipsis | <string> ]{1,2}","text-rendering":"auto | optimizeSpeed | optimizeLegibility | geometricPrecision","text-shadow":"none | <shadow-t>#","text-size-adjust":"none | auto | <percentage>","text-transform":"none | capitalize | uppercase | lowercase | full-width","text-underline-position":"auto | [ under || [ left | right ] ]","top":"<length> | <percentage> | auto","touch-action":"auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation","transform":"none | <transform-list>","transform-box":"border-box | fill-box | view-box","transform-origin":"[ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>? | [ <length-percentage> | left | center | right | top | bottom ]","transform-style":"flat | preserve-3d","transition":"<single-transition>#","transition-delay":"<time>#","transition-duration":"<time>#","transition-property":"none | <single-transition-property>#","transition-timing-function":"<single-transition-timing-function>#","unicode-bidi":"normal | embed | isolate | bidi-override | isolate-override | plaintext | -moz-isolate | -moz-isolate-override | -moz-plaintext | -webkit-isolate","user-select":"auto | text | none | contain | all","vertical-align":"baseline | sub | super | text-top | text-bottom | middle | top | bottom | <percentage> | <length>","visibility":"visible | hidden | collapse","white-space":"normal | pre | nowrap | pre-wrap | pre-line","widows":"<integer>","width":"[ <length> | <percentage> ] && [ border-box | content-box ]? | available | min-content | max-content | fit-content | auto","will-change":"auto | <animateable-feature>#","word-break":"normal | break-all | keep-all | <-non-standart-word-break>","word-spacing":"normal | <length-percentage>","word-wrap":"normal | break-word","writing-mode":"horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr | <svg-writing-mode>","z-index":"auto | <integer>","-moz-background-clip":"padding | border","-moz-border-radius-bottomleft":"<'border-bottom-left-radius'>","-moz-border-radius-bottomright":"<'border-bottom-right-radius'>","-moz-border-radius-topleft":"<'border-top-left-radius'>","-moz-border-radius-topright":"<'border-bottom-right-radius'>","-moz-osx-font-smoothing":"auto | unset | grayscale","-moz-user-select":"none | text | all | -moz-none","-ms-filter":"<string>","-ms-flex-align":"start | end | center | baseline | stretch","-ms-flex-item-align":"auto | start | end | center | baseline | stretch","-ms-flex-line-pack":"start | end | center | justify | distribute | stretch","-ms-flex-negative":"<'flex-shrink'>","-ms-flex-pack":"start | end | center | justify | distribute","-ms-flex-order":"<integer>","-ms-flex-positive":"<'flex-grow'>","-ms-flex-preferred-size":"<'flex-basis'>","-ms-interpolation-mode":"nearest-neighbor | bicubic","-ms-grid-column-align":"start | end | center | stretch","-ms-grid-row-align":"start | end | center | stretch","-ms-high-contrast-adjust":"auto | none","-ms-user-select":"none | element | text","-webkit-appearance":"none | button | button-bevel | caps-lock-indicator | caret | checkbox | default-button | listbox | listitem | media-fullscreen-button | media-mute-button | media-play-button | media-seek-back-button | media-seek-forward-button | media-slider | media-sliderthumb | menulist | menulist-button | menulist-text | menulist-textfield | push-button | radio | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbargripper-horizontal | scrollbargripper-vertical | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | searchfield-cancel-button | searchfield-decoration | searchfield-results-button | searchfield-results-decoration | slider-horizontal | slider-vertical | sliderthumb-horizontal | sliderthumb-vertical | square-button | textarea | textfield","-webkit-background-clip":"[ <box> | border | padding | content | text ]#","-webkit-column-break-after":"always | auto | avoid","-webkit-column-break-before":"always | auto | avoid","-webkit-column-break-inside":"always | auto | avoid","-webkit-font-smoothing":"none | antialiased | subpixel-antialiased","-webkit-line-clamp":"<positive-integer>","-webkit-mask-box-image":"[ <url> | <gradient> | none ] [ <length-percentage>{4} <-webkit-mask-box-repeat>{2} ]?","-webkit-overflow-scrolling":"auto | touch","-webkit-print-color-adjust":"economy | exact","-webkit-text-security":"none | circle | disc | square","-webkit-user-drag":"none | element | auto","-webkit-user-select":"auto | none | text | all","alignment-baseline":"auto | baseline | before-edge | text-before-edge | middle | central | after-edge | text-after-edge | ideographic | alphabetic | hanging | mathematical","baseline-shift":"baseline | sub | super | <svg-length>","behavior":"<url>+","clip-rule":"nonzero | evenodd","cue":"<'cue-before'> <'cue-after'>?","cue-after":"<url> <decibel>? | none","cue-before":"<url> <decibel>? | none","dominant-baseline":"auto | use-script | no-change | reset-size | ideographic | alphabetic | hanging | mathematical | central | middle | text-after-edge | text-before-edge","fill":"<paint>","fill-opacity":"<number-zero-one>","fill-rule":"nonzero | evenodd","glyph-orientation-horizontal":"<angle>","glyph-orientation-vertical":"<angle>","kerning":"auto | <svg-length>","marker":"none | <url>","marker-end":"none | <url>","marker-mid":"none | <url>","marker-start":"none | <url>","offset-position":"auto | <position>","pause":"<'pause-before'> <'pause-after'>?","pause-after":"<time> | none | x-weak | weak | medium | strong | x-strong","pause-before":"<time> | none | x-weak | weak | medium | strong | x-strong","rest":"<'rest-before'> <'rest-after'>?","rest-after":"<time> | none | x-weak | weak | medium | strong | x-strong","rest-before":"<time> | none | x-weak | weak | medium | strong | x-strong","shape-rendering":"auto | optimizeSpeed | crispEdges | geometricPrecision","src":"[ <url> format( <string># )? | local( <family-name> ) ]#","speak":"auto | none | normal","speak-as":"normal | spell-out || digits || [ literal-punctuation | no-punctuation ]","stroke":"<paint>","stroke-dasharray":"none | [ <svg-length>+ ]#","stroke-dashoffset":"<svg-length>","stroke-linecap":"butt | round | square","stroke-linejoin":"miter | round | bevel","stroke-miterlimit":"<number-one-or-greater>","stroke-opacity":"<number-zero-one>","stroke-width":"<svg-length>","text-anchor":"start | middle | end","unicode-range":"<unicode-range>#","voice-balance":"<number> | left | center | right | leftwards | rightwards","voice-duration":"auto | <time>","voice-family":"[ [ <family-name> | <generic-voice> ] , ]* [ <family-name> | <generic-voice> ] | preserve","voice-pitch":"<frequency> && absolute | [ [ x-low | low | medium | high | x-high ] || [ <frequency> | <semitones> | <percentage> ] ]","voice-range":"<frequency> && absolute | [ [ x-low | low | medium | high | x-high ] || [ <frequency> | <semitones> | <percentage> ] ]","voice-rate":"[ normal | x-slow | slow | medium | fast | x-fast ] || <percentage>","voice-stress":"normal | strong | moderate | none | reduced","voice-volume":"silent | [ [ x-soft | soft | medium | loud | x-loud ] || <decibel> ]","zoom":"normal | reset | <number> | <percentage>"}}
},{}],2:[function(require,module,exports){
'use strict';

var hasOwnProperty = Object.prototype.hasOwnProperty;

function each(list) {
    var cursor = list.head;
    var result = [];

    while (cursor !== null) {
        result.push(this.generate(cursor.data, cursor, list));
        cursor = cursor.next;
    }

    return result;
}

function eachComma(list) {
    var cursor = list.head;
    var result = [];

    while (cursor !== null) {
        if (cursor.prev) {
            result.push(',', this.generate(cursor.data));
        } else {
            result.push(this.generate(cursor.data));
        }

        cursor = cursor.next;
    }

    return result;
}

function createGenerator(types) {
    var context = {
        generate: function(node, item, list) {
            if (hasOwnProperty.call(types, node.type)) {
                var ret = types[node.type].call(this, node, item, list);
                return typeof ret === 'string' ? ret : ret.join('');
            } else {
                throw new Error('Unknown node type: ' + node.type);
            }
        },
        each: each,
        eachComma: eachComma
    };

    return function(node) {
        return context.generate(node);
    };
}

function createMarkupGenerator(types) {
    var context = {
        generate: function(node, item, list) {
            if (hasOwnProperty.call(types, node.type)) {
                return {
                    node: node,
                    value: types[node.type].call(this, node, item, list)
                };
            } else {
                throw new Error('Unknown node type: ' + node.type);
            }
        },
        each: each,
        eachComma: eachComma
    };

    return function(node, before, after) {
        function walk(node, buffer) {
            var value = node.value;

            before(node.node, buffer, value);

            if (typeof value === 'string') {
                buffer += value;
            } else {
                for (var i = 0; i < value.length; i++) {
                    if (typeof value[i] === 'string') {
                        buffer += value[i];
                    } else {
                        buffer = walk(value[i], buffer);
                    }
                }
            }

            after(node.node, buffer, value);

            return buffer;
        }

        if (typeof before !== 'function') {
            before = function() {};
        }
        if (typeof after !== 'function') {
            after = function() {};
        }

        return walk(context.generate(node), '');
    };
}

module.exports = {
    createGenerator: createGenerator,
    createMarkupGenerator: createMarkupGenerator,
    sourceMap: require('./sourceMap')
};

},{"./sourceMap":3}],3:[function(require,module,exports){
'use strict';

var SourceMapGenerator = require('source-map').SourceMapGenerator;
var trackNodes = {
    Atrule: true,
    Selector: true,
    Declaration: true
};

module.exports = function generateSourceMap(generator, ast) {
    function updateGeneratedPos(buffer) {
        for (; bufferPos < buffer.length; bufferPos++) {
            if (buffer.charCodeAt(bufferPos) === 10) { // \n
                generated.line++;
                generated.column = 0;
            } else {
                generated.column++;
            }
        }
    }

    var map = new SourceMapGenerator();
    var bufferPos = 0;
    var generated = {
        line: 1,
        column: 0
    };
    var original = {
        line: 0,
        column: 0
    };
    var sourceMappingActive = false;
    var activatedGenerated = {
        line: 1,
        column: 0
    };
    var activatedMapping = {
        generated: activatedGenerated
    };

    var css = generator(ast, function(node, buffer) {
        if (!node.loc ||
            !node.loc.start ||
            !trackNodes.hasOwnProperty(node.type)) {
            return;
        }

        var line = node.loc.start.line;
        var column = node.loc.start.column - 1;

        if (original.line !== line ||
            original.column !== column) {
            original.line = line;
            original.column = column;

            updateGeneratedPos(buffer);

            if (sourceMappingActive) {
                sourceMappingActive = false;
                if (generated.line !== activatedGenerated.line ||
                    generated.column !== activatedGenerated.column) {
                    map.addMapping(activatedMapping);
                }
            }

            sourceMappingActive = true;
            map.addMapping({
                source: node.loc.source,
                original: original,
                generated: generated
            });
        }

    }, function(node, buffer) {
        if (sourceMappingActive && trackNodes.hasOwnProperty(node.type)) {
            updateGeneratedPos(buffer);
            activatedGenerated.line = generated.line;
            activatedGenerated.column = generated.column;
        }
    });

    if (sourceMappingActive) {
        map.addMapping(activatedMapping);
    }

    return {
        css: css,
        map: map
    };
};

},{"source-map":105}],4:[function(require,module,exports){
'use strict';

module.exports = require('./syntax/default');

},{"./syntax/default":22}],5:[function(require,module,exports){
'use strict';

var MatchError = require('./error').MatchError;
var names = require('../utils/names');
var generic = require('./generic');
var parse = require('./grammar/parse');
var translate = require('./grammar/translate');
var walk = require('./grammar/walk');
var match = require('./match');
var cssWideKeywords = parse('inherit | initial | unset');
var cssWideKeywordsWithExpression = parse('inherit | initial | unset | <expression>');

function dumpMapSyntax(map, syntaxAsAst) {
    var result = {};

    for (var name in map) {
        if (map[name].syntax) {
            result[name] = syntaxAsAst ? map[name].syntax : translate(map[name].syntax);
        }
    }

    return result;
}

function unwrapNode(item) {
    return item && item.data;
}

function valueHasVar(value) {
    var hasVar = false;

    this.syntax.walk(value, function(node) {
        if (node.type === 'Function' && node.name.toLowerCase() === 'var') {
            hasVar = true;
        }
    });

    return hasVar;
}

// check node is \0 or \9 hack
function isHack(node) {
    return node.type === 'Identifier' && /^\\[09]/.test(node.name);
}

// white spaces, comments and some hacks can to be ignored at the end of value
function isNextMayToBeIgnored(cursor) {
    while (cursor !== null) {
        if (cursor.data.type !== 'WhiteSpace' &&
            cursor.data.type !== 'Comment' &&
            !isHack(cursor.data)) {
            return false;
        }

        cursor = cursor.next;
    }

    return true;
}

function matchSyntax(lexer, syntax, value) {
    var result;

    if (!value || value.type !== 'Value') {
        return {
            type: 'NoMatch',
            comment: 'Not a Value node'
        };
    }

    if (valueHasVar.call(lexer, value)) {
        return {
            type: 'NoMatch',
            comment: 'Due to matching for value with var() is very complex those values are always valid for now'
        };
    }

    result = match(lexer, lexer.valueCommonSyntax, value.children.head);

    if (!result.match) {
        result = syntax.match(value.children.head);
        if (!result || !result.match) {
            lexer.lastMatchError = new MatchError('Mismatch', lexer, syntax.syntax, value, result.badNode || unwrapNode(result.next));
            return null;
        }
    }

    if (result.next && !isNextMayToBeIgnored(result.next)) {
        lexer.lastMatchError = new MatchError('Uncomplete match', lexer, syntax.syntax, value, result.badNode || unwrapNode(result.next));
        return null;
    }

    lexer.lastMatchError = null;
    return result.match;
}

var Lexer = function(config, syntax, structure) {
    this.valueCommonSyntax = cssWideKeywords;
    this.syntax = syntax;
    this.generic = false;
    this.properties = {};
    this.types = {};
    this.structure = structure;

    if (config) {
        if (config.generic) {
            this.generic = true;
            for (var name in generic) {
                this.addType_(name, generic[name]);
            }
        }

        if (config.types) {
            for (var name in config.types) {
                this.addType_(name, config.types[name]);
            }
        }

        if (config.properties) {
            for (var name in config.properties) {
                this.addProperty_(name, config.properties[name]);
            }
        }
    }
};

Lexer.prototype = {
    structure: {},
    checkStructure: function(ast) {
        var structure = this.structure;
        var warns = [];

        this.syntax.walk(ast, function(node) {
            if (structure.hasOwnProperty(node.type)) {
                structure[node.type].check(node, warns.push.bind(warns));
            } else {
                throw new Error('Unknown node type: ' + node.type);
            }
        });

        return warns.length ? warns : false;
    },

    createDescriptor: function(syntax) {
        var self = this;
        var descriptor = {
            syntax: null,
            match: null
        };

        if (typeof syntax === 'function') {
            syntax = {
                type: 'ASTNode',
                match: syntax
            };

            descriptor.match = function(item) {
                return match(self, syntax, item);
            };
        } else {
            if (typeof syntax === 'string') {
                // lazy parsing on first access
                Object.defineProperty(descriptor, 'syntax', {
                    get: function() {
                        Object.defineProperty(descriptor, 'syntax', {
                            value: parse(syntax)
                        });

                        return descriptor.syntax;
                    }
                });
            } else {
                descriptor.syntax = syntax;
            }

            descriptor.match = function(item) {
                return match(self, descriptor.syntax, item);
            };
        }

        return descriptor;
    },
    addProperty_: function(name, syntax) {
        this.properties[name] = this.createDescriptor(syntax);
    },
    addType_: function(name, syntax) {
        this.types[name] = this.createDescriptor(syntax);

        if (syntax === generic.expression) {
            this.valueCommonSyntax = cssWideKeywordsWithExpression;
        }
    },

    lastMatchError: null,
    matchProperty: function(propertyName, value) {
        var property = names.property(propertyName);

        // don't match syntax for a custom property
        if (property.variable) {
            return {
                type: 'NoMatch',
                comment: 'Lexer matching doesn\'t applicable for custom properties'
            };
        }

        var propertySyntax = property.vendor
            ? this.getProperty(property.vendor + property.name) || this.getProperty(property.name)
            : this.getProperty(property.name);

        if (!propertySyntax) {
            this.lastMatchError = new Error('Unknown property: ' + propertyName);
            return null;
        }

        return matchSyntax(this, propertySyntax, value);
    },
    matchType: function(typeName, value) {
        var typeSyntax = this.getType(typeName);

        if (!typeSyntax) {
            this.lastMatchError = new Error('Unknown type: ' + typeName);
            return null;
        }

        return matchSyntax(this, typeSyntax, value);
    },

    getProperty: function(name) {
        return this.properties.hasOwnProperty(name) ? this.properties[name] : null;
    },
    getType: function(name) {
        return this.types.hasOwnProperty(name) ? this.types[name] : null;
    },

    validate: function() {
        function validate(syntax, name, broken, descriptor) {
            if (broken.hasOwnProperty(name)) {
                return broken[name];
            }

            broken[name] = false;
            if (descriptor.syntax !== null) {
                walk(descriptor.syntax, function(node) {
                    if (node.type !== 'Type' && node.type !== 'Property') {
                        return;
                    }

                    var map = node.type === 'Type' ? syntax.types : syntax.properties;
                    var brokenMap = node.type === 'Type' ? brokenTypes : brokenProperties;

                    if (!map.hasOwnProperty(node.name) || validate(syntax, node.name, brokenMap, map[node.name])) {
                        broken[name] = true;
                    }
                }, this);
            }
        }

        var brokenTypes = {};
        var brokenProperties = {};

        for (var key in this.types) {
            validate(this, key, brokenTypes, this.types[key]);
        }

        for (var key in this.properties) {
            validate(this, key, brokenProperties, this.properties[key]);
        }

        brokenTypes = Object.keys(brokenTypes).filter(function(name) {
            return brokenTypes[name];
        });
        brokenProperties = Object.keys(brokenProperties).filter(function(name) {
            return brokenProperties[name];
        });

        if (brokenTypes.length || brokenProperties.length) {
            return {
                types: brokenTypes,
                properties: brokenProperties
            };
        }

        return null;
    },
    dump: function(syntaxAsAst) {
        return {
            generic: this.generic,
            types: dumpMapSyntax(this.types, syntaxAsAst),
            properties: dumpMapSyntax(this.properties, syntaxAsAst)
        };
    },
    toString: function() {
        return JSON.stringify(this.dump());
    }
};

module.exports = Lexer;

},{"../utils/names":93,"./error":6,"./generic":7,"./grammar/parse":10,"./grammar/translate":11,"./grammar/walk":12,"./match":14}],6:[function(require,module,exports){
'use strict';

var translateGrammar = require('./grammar/translate');

function getLocation(node, point) {
    var loc = node && node.loc && node.loc[point];

    return loc
        ? { offset: loc.offset,
            line: loc.line,
            column: loc.column }
        : null;
}

var MatchError = function(message, lexer, syntax, value, badNode) {
    var errorOffset = -1;
    var error = new SyntaxError(message);
    var start = getLocation(badNode, 'start');
    var end = getLocation(badNode, 'end');
    var css = lexer.syntax.translateMarkup(value, function(node, buffer) {
        if (node === badNode) {
            errorOffset = buffer.length;
        }
    });

    if (errorOffset === -1) {
        errorOffset = css.length;
    }

    error.name = 'SyntaxMatchError';
    error.rawMessage = message;
    error.syntax = syntax ? translateGrammar(syntax) : '<generic>';
    error.css = css;
    error.mismatchOffset = errorOffset;
    error.loc = {
        source: badNode && badNode.loc && badNode.loc.source || '<unknown>',
        start: start,
        end: end
    };
    error.line = start ? start.line : undefined;
    error.column = start ? start.column : undefined;
    error.offset = start ? start.offset : undefined;
    error.message = message + '\n' +
        '  syntax: ' + error.syntax + '\n' +
        '   value: ' + (error.css || '<empty string>') + '\n' +
        '  --------' + new Array(error.mismatchOffset + 1).join('-') + '^';

    return error;
};

module.exports = {
    MatchError: MatchError
};

},{"./grammar/translate":11}],7:[function(require,module,exports){
'use strict';

var names = require('../utils/names.js');

// https://www.w3.org/TR/css-values-3/#lengths
var LENGTH = {
    // absolute length units
    'px': true,
    'mm': true,
    'cm': true,
    'in': true,
    'pt': true,
    'pc': true,
    'q': true,

    // relative length units
    'em': true,
    'ex': true,
    'ch': true,
    'rem': true,

    // viewport-percentage lengths
    'vh': true,
    'vw': true,
    'vmin': true,
    'vmax': true,
    'vm': true
};

var ANGLE = {
    'deg': true,
    'grad': true,
    'rad': true,
    'turn': true
};

var TIME = {
    's': true,
    'ms': true
};

var FREQUENCY = {
    'hz': true,
    'khz': true
};

// https://www.w3.org/TR/css-values-3/#resolution
// https://www.w3.org/TR/css3-images/#resolution-type
var RESOLUTION = {
    'dpi': true,
    'dpcm': true,
    'dppx': true
};

// https://drafts.csswg.org/css-grid/#fr-unit
var FLEX = {
    'fr': true
};

// https://www.w3.org/TR/css3-speech/#mixing-props-voice-volume
var DECIBEL = {
    'db': true
};

// https://www.w3.org/TR/css3-speech/#voice-props-voice-pitch
var SEMITONES = {
    'st': true
};

// can be used wherever <length>, <frequency>, <angle>, <time>, <percentage>, <number>, or <integer> values are allowed
// https://drafts.csswg.org/css-values/#calc-notation
function isCalc(node) {
    if (node.data.type !== 'Function') {
        return false;
    }

    var keyword = names.keyword(node.data.name);

    if (keyword.name !== 'calc') {
        return false;
    }

    // there were some prefixed implementations
    return keyword.vendor === '' ||
           keyword.vendor === '-moz-' ||
           keyword.vendor === '-webkit-';
}

function astNode(type) {
    return function(node) {
        return node.data.type === type;
    };
}

function dimension(type) {
    return function(node) {
        return isCalc(node) ||
               (node.data.type === 'Dimension' && type.hasOwnProperty(node.data.unit.toLowerCase()));
    };
}

function zeroUnitlessDimension(type) {
    return function(node) {
        return isCalc(node) ||
               (node.data.type === 'Dimension' && type.hasOwnProperty(node.data.unit.toLowerCase())) ||
               (node.data.type === 'Number' && Number(node.data.value) === 0);
    };
}

function attr(node) {
    return node.data.type === 'Function' && node.data.name.toLowerCase() === 'attr';
}

function number(node) {
    return isCalc(node) || node.data.type === 'Number';
}

function numberZeroOne(node) {
    if (isCalc(node) || node.data.type === 'Number') {
        var value = Number(node.data.value);

        return value >= 0 && value <= 1;
    }

    return false;
}

function numberOneOrGreater(node) {
    if (isCalc(node) || node.data.type === 'Number') {
        return Number(node.data.value) >= 1;
    }

    return false;
}

// TODO: fail on 10e-2
function integer(node) {
    return isCalc(node) ||
           (node.data.type === 'Number' && node.data.value.indexOf('.') === -1);
}

// TODO: fail on 10e-2
function positiveInteger(node) {
    return isCalc(node) ||
           (node.data.type === 'Number' && node.data.value.indexOf('.') === -1 && node.data.value.charAt(0) !== '-');
}

function percentage(node) {
    return isCalc(node) ||
           node.data.type === 'Percentage';
}

function hexColor(node) {
    if (node.data.type !== 'HexColor') {
        return false;
    }

    var hex = node.data.value;

    return /^[0-9a-fA-F]{3,8}$/.test(hex) &&
           (hex.length === 3 || hex.length === 4 || hex.length === 6 || hex.length === 8);
}

function expression(node) {
    return node.data.type === 'Function' && node.data.name.toLowerCase() === 'expression';
}

// https://developer.mozilla.org/en-US/docs/Web/CSS/custom-ident
function customIdent(node) {
    if (node.data.type !== 'Identifier') {
        return false;
    }

    var name = node.data.name.toLowerCase();

    // can't be a global CSS value
    if (name === 'unset' || name === 'initial' || name === 'inherit') {
        return false;
    }

    // TODO: ignore property specific keywords (as described https://developer.mozilla.org/en-US/docs/Web/CSS/custom-ident)

    return true;
}

module.exports = {
    'angle': zeroUnitlessDimension(ANGLE),
    'attr()': attr,
    'custom-ident': customIdent,
    'decibel': dimension(DECIBEL),
    'dimension': astNode('Dimension'),
    'frequency': dimension(FREQUENCY),
    'flex': dimension(FLEX),
    'hex-color': hexColor,
    'id-selector': astNode('IdSelector'), // element( <id-selector> )
    'ident': astNode('Identifier'),
    'integer': integer,
    'length': zeroUnitlessDimension(LENGTH),
    'number': number,
    'number-zero-one': numberZeroOne,
    'number-one-or-greater': numberOneOrGreater,
    'percentage': percentage,
    'positive-integer': positiveInteger,
    'resolution': dimension(RESOLUTION),
    'semitones': dimension(SEMITONES),
    'string': astNode('String'),
    'time': dimension(TIME),
    'unicode-range': astNode('UnicodeRange'),
    'url': astNode('Url'),

    // old IE stuff
    'progid': astNode('Raw'),
    'expression': expression
};

},{"../utils/names.js":93}],8:[function(require,module,exports){
'use strict';

var SyntaxParseError = function(message, syntaxStr, offset) {
    var error = new SyntaxError();
    error.name = 'SyntaxParseError';
    error.rawMessage = message;
    error.syntax = syntaxStr;
    error.offset = offset;
    error.message = error.rawMessage + '\n' +
        '  ' + error.syntax + '\n' +
        '--' + new Array((error.offset || error.syntax.length) + 1).join('-') + '^';

    return error;
};

module.exports = {
    SyntaxParseError: SyntaxParseError
};

},{}],9:[function(require,module,exports){
module.exports = {
    SyntaxParseError: require('./error').SyntaxParseError,
    parse: require('./parse'),
    translate: require('./translate'),
    walk: require('./walk')
};

},{"./error":8,"./parse":10,"./translate":11,"./walk":12}],10:[function(require,module,exports){
'use strict';

var SyntaxParseError = require('./error').SyntaxParseError;

var TAB = 9;
var N = 10;
var F = 12;
var R = 13;
var SPACE = 32;
var EXCLAMATIONMARK = 33;    // !
var NUMBERSIGN = 35;         // #
var PERCENTSIGN = 37;        // %
var AMPERSAND = 38;          // &
var APOSTROPHE = 39;         // '
var LEFTPARENTHESIS = 40;    // (
var RIGHTPARENTHESIS = 41;   // )
var ASTERISK = 42;           // *
var PLUSSIGN = 43;           // +
var COMMA = 44;              // ,
var SOLIDUS = 47;            // /
var LESSTHANSIGN = 60;       // <
var GREATERTHANSIGN = 62;    // >
var QUESTIONMARK = 63;       // ?
var LEFTSQUAREBRACKET = 91;  // [
var RIGHTSQUAREBRACKET = 93; // ]
var LEFTCURLYBRACKET = 123;  // {
var VERTICALLINE = 124;      // |
var RIGHTCURLYBRACKET = 125; // }
var COMBINATOR_PRECEDENCE = {
    ' ': 1,
    '&&': 2,
    '||': 3,
    '|': 4
};
var MULTIPLIER_DEFAULT = {
    comma: false,
    min: 1,
    max: 1
};
var MULTIPLIER_ZERO_OR_MORE = {
    comma: false,
    min: 0,
    max: 0
};
var MULTIPLIER_ONE_OR_MORE = {
    comma: false,
    min: 1,
    max: 0
};
var MULTIPLIER_ONE_OR_MORE_COMMA_SEPARATED = {
    comma: true,
    min: 1,
    max: 0
};
var MULTIPLIER_ZERO_OR_ONE = {
    comma: false,
    min: 0,
    max: 1
};
var NAME_CHAR = (function() {
    var array = typeof Uint32Array === 'function' ? new Uint32Array(128) : new Array(128);
    for (var i = 0; i < 128; i++) {
        array[i] = /[a-zA-Z0-9\-]/.test(String.fromCharCode(i)) ? 1 : 0;
    }
    return array;
})();

var Tokenizer = function(str) {
    this.str = str;
    this.pos = 0;
};
Tokenizer.prototype = {
    charCode: function() {
        return this.pos < this.str.length ? this.str.charCodeAt(this.pos) : 0;
    },
    nextCharCode: function() {
        return this.pos + 1 < this.str.length ? this.str.charCodeAt(this.pos + 1) : 0;
    },
    substringToPos: function(end) {
        return this.str.substring(this.pos, this.pos = end);
    },
    eat: function(code) {
        if (this.charCode() !== code) {
            error(this, this.pos, 'Expect `' + String.fromCharCode(code) + '`');
        }

        this.pos++;
    }
};

function scanSpaces(tokenizer) {
    var end = tokenizer.pos + 1;

    for (; end < tokenizer.str.length; end++) {
        var code = tokenizer.str.charCodeAt(end);
        if (code !== R && code !== N && code !== F && code !== SPACE && code !== TAB) {
            break;
        }
    }

    return tokenizer.substringToPos(end);
}

function scanWord(tokenizer) {
    var end = tokenizer.pos;

    for (; end < tokenizer.str.length; end++) {
        var code = tokenizer.str.charCodeAt(end);
        if (code >= 128 || NAME_CHAR[code] === 0) {
            break;
        }
    }

    if (tokenizer.pos === end) {
        error(tokenizer, tokenizer.pos, 'Expect a keyword');
    }

    return tokenizer.substringToPos(end);
}

function scanNumber(tokenizer) {
    var end = tokenizer.pos;

    for (; end < tokenizer.str.length; end++) {
        var code = tokenizer.str.charCodeAt(end);
        if (code < 48 || code > 57) {
            break;
        }
    }

    if (tokenizer.pos === end) {
        error(tokenizer, tokenizer.pos, 'Expect a number');
    }

    return tokenizer.substringToPos(end);
}

function scanString(tokenizer) {
    var end = tokenizer.str.indexOf('\'', tokenizer.pos + 1);

    if (end === -1) {
        error(tokenizer, tokenizer.str.length, 'Expect a quote');
    }

    return tokenizer.substringToPos(end + 1);
}

function readMultiplierRange(tokenizer, comma) {
    var min = null;
    var max = null;

    tokenizer.eat(LEFTCURLYBRACKET);

    min = scanNumber(tokenizer);

    if (tokenizer.charCode() === COMMA) {
        tokenizer.pos++;
        if (tokenizer.charCode() !== RIGHTCURLYBRACKET) {
            max = scanNumber(tokenizer);
        }
    } else {
        max = min;
    }

    tokenizer.eat(RIGHTCURLYBRACKET);

    return {
        comma: comma,
        min: Number(min),
        max: max ? Number(max) : 0
    };
}

function readMultiplier(tokenizer) {
    switch (tokenizer.charCode()) {
        case ASTERISK:
            tokenizer.pos++;
            return MULTIPLIER_ZERO_OR_MORE;

        case PLUSSIGN:
            tokenizer.pos++;
            return MULTIPLIER_ONE_OR_MORE;

        case QUESTIONMARK:
            tokenizer.pos++;
            return MULTIPLIER_ZERO_OR_ONE;

        case NUMBERSIGN:
            tokenizer.pos++;

            if (tokenizer.charCode() !== LEFTCURLYBRACKET) {
                return MULTIPLIER_ONE_OR_MORE_COMMA_SEPARATED;
            }

            return readMultiplierRange(tokenizer, true);

        case LEFTCURLYBRACKET:
            return readMultiplierRange(tokenizer, false);
    }

    return MULTIPLIER_DEFAULT;
}

function maybeMultiplied(tokenizer, node) {
    var multiplier = readMultiplier(tokenizer);

    if (multiplier !== MULTIPLIER_DEFAULT) {
        return {
            type: 'Group',
            terms: [node],
            combinator: '|',  // `|` combinator is simplest in implementation (and therefore faster)
            disallowEmpty: false,
            multiplier: multiplier,
            explicit: false
        };
    }

    return node;
}

function readProperty(tokenizer) {
    var name;

    tokenizer.eat(LESSTHANSIGN);
    tokenizer.eat(APOSTROPHE);

    name = scanWord(tokenizer);

    tokenizer.eat(APOSTROPHE);
    tokenizer.eat(GREATERTHANSIGN);

    return maybeMultiplied(tokenizer, {
        type: 'Property',
        name: name
    });
}

function readType(tokenizer) {
    var name;

    tokenizer.eat(LESSTHANSIGN);
    name = scanWord(tokenizer);

    if (tokenizer.charCode() === LEFTPARENTHESIS &&
        tokenizer.nextCharCode() === RIGHTPARENTHESIS) {
        tokenizer.pos += 2;
        name += '()';
    }

    tokenizer.eat(GREATERTHANSIGN);

    return maybeMultiplied(tokenizer, {
        type: 'Type',
        name: name
    });
}

function readKeywordOrFunction(tokenizer) {
    var children = null;
    var name;

    name = scanWord(tokenizer);

    if (tokenizer.charCode() === LEFTPARENTHESIS) {
        tokenizer.pos++;
        children = readImplicitGroup(tokenizer);
        tokenizer.eat(RIGHTPARENTHESIS);

        return maybeMultiplied(tokenizer, {
            type: 'Function',
            name: name,
            children: children
        });
    }

    return maybeMultiplied(tokenizer, {
        type: 'Keyword',
        name: name
    });
}

function regroupTerms(terms, combinators) {
    function createGroup(terms, combinator) {
        return {
            type: 'Group',
            terms: terms,
            combinator: combinator,
            disallowEmpty: false,
            multiplier: MULTIPLIER_DEFAULT,
            explicit: false
        };
    }

    combinators = Object.keys(combinators).sort(function(a, b) {
        return COMBINATOR_PRECEDENCE[a] - COMBINATOR_PRECEDENCE[b];
    });

    while (combinators.length > 0) {
        var combinator = combinators.shift();
        for (var i = 0, subgroupStart = 0; i < terms.length; i++) {
            var term = terms[i];
            if (term.type === 'Combinator') {
                if (term.value === combinator) {
                    if (subgroupStart === -1) {
                        subgroupStart = i - 1;
                    }
                    terms.splice(i, 1);
                    i--;
                } else {
                    if (subgroupStart !== -1 && i - subgroupStart > 1) {
                        terms.splice(
                            subgroupStart,
                            i - subgroupStart,
                            createGroup(terms.slice(subgroupStart, i), combinator)
                        );
                        i = subgroupStart + 1;
                    }
                    subgroupStart = -1;
                }
            }
        }

        if (subgroupStart !== -1 && combinators.length) {
            terms.splice(
                subgroupStart,
                i - subgroupStart,
                createGroup(terms.slice(subgroupStart, i), combinator)
            );
        }
    }

    return combinator;
}

function readImplicitGroup(tokenizer) {
    var terms = [];
    var combinators = {};
    var token;
    var prevToken = null;
    var prevTokenPos = tokenizer.pos;

    while (token = peek(tokenizer)) {
        if (token.type !== 'Spaces') {
            if (token.type === 'Combinator') {
                // check for combinator in group beginning and double combinator sequence
                if (prevToken === null || prevToken.type === 'Combinator') {
                    error(tokenizer, prevTokenPos, 'Unexpected combinator');
                }

                combinators[token.value] = true;
            } else if (prevToken !== null && prevToken.type !== 'Combinator') {
                combinators[' '] = true;  // a b
                terms.push({
                    type: 'Combinator',
                    value: ' '
                });
            }

            terms.push(token);
            prevToken = token;
            prevTokenPos = tokenizer.pos;
        }
    }

    // check for combinator in group ending
    if (prevToken !== null && prevToken.type === 'Combinator') {
        error(tokenizer, tokenizer.pos - prevTokenPos, 'Unexpected combinator');
    }

    return {
        type: 'Group',
        terms: terms,
        combinator: regroupTerms(terms, combinators) || ' ',
        disallowEmpty: false,
        multiplier: MULTIPLIER_DEFAULT,
        explicit: false
    };
}

function readGroup(tokenizer) {
    var result;

    tokenizer.eat(LEFTSQUAREBRACKET);
    result = readImplicitGroup(tokenizer);
    tokenizer.eat(RIGHTSQUAREBRACKET);

    result.explicit = true;
    result.multiplier = readMultiplier(tokenizer);

    if (tokenizer.charCode() === EXCLAMATIONMARK) {
        tokenizer.pos++;
        result.disallowEmpty = true;
    }

    return result;
}

function peek(tokenizer) {
    var code = tokenizer.charCode();

    if (code < 128 && NAME_CHAR[code] === 1) {
        return readKeywordOrFunction(tokenizer);
    }

    switch (code) {
        case LEFTSQUAREBRACKET:
            return readGroup(tokenizer);

        case LESSTHANSIGN:
            if (tokenizer.nextCharCode() === APOSTROPHE) {
                return readProperty(tokenizer);
            } else {
                return readType(tokenizer);
            }

        case VERTICALLINE:
            return {
                type: 'Combinator',
                value: tokenizer.substringToPos(tokenizer.nextCharCode() === VERTICALLINE ? tokenizer.pos + 2 : tokenizer.pos + 1)
            };

        case AMPERSAND:
            tokenizer.pos++;
            tokenizer.eat(AMPERSAND);
            return {
                type: 'Combinator',
                value: '&&'
            };

        case COMMA:
            tokenizer.pos++;
            return {
                type: 'Comma',
                value: ','
            };

        case SOLIDUS:
            tokenizer.pos++;
            return {
                type: 'Slash',
                value: '/'
            };

        case PERCENTSIGN:  // looks like exception, needs for attr()'s <type-or-unit>
            tokenizer.pos++;
            return {
                type: 'Percent',
                value: '%'
            };

        case LEFTPARENTHESIS:
            tokenizer.pos++;
            var children = readImplicitGroup(tokenizer);
            tokenizer.eat(RIGHTPARENTHESIS);

            return {
                type: 'Parentheses',
                children: children
            };

        case APOSTROPHE:
            return {
                type: 'String',
                value: scanString(tokenizer)
            };

        case SPACE:
        case TAB:
        case N:
        case R:
        case F:
            return {
                type: 'Spaces',
                value: scanSpaces(tokenizer)
            };
    }
}

function error(tokenizer, pos, msg) {
    throw new SyntaxParseError(msg || 'Unexpected input', tokenizer.str, pos);
}

function parse(str) {
    var tokenizer = new Tokenizer(str);
    var result = readImplicitGroup(tokenizer);

    if (tokenizer.pos !== str.length) {
        error(tokenizer, tokenizer.pos);
    }

    // reduce redundant groups with single group term
    if (result.terms.length === 1 && result.terms[0].type === 'Group') {
        result = result.terms[0];
    }

    return result;
}

// warm up parse to elimitate code branches that never execute
// fix soft deoptimizations (insufficient type feedback)
parse('[a&&<b>#|<\'c\'>*||e(){2,} f{2} /,(% g#{1,2})]!');

module.exports = parse;

},{"./error":8}],11:[function(require,module,exports){
'use strict';

function isNodeType(node, type) {
    return node && node.type === type;
}

function serializeMultiplier(multiplier) {
    if (multiplier.min === 0 && multiplier.max === 0) {
        return '*';
    }

    if (multiplier.min === 0 && multiplier.max === 1) {
        return '?';
    }

    if (multiplier.min === 1 && multiplier.max === 0) {
        return multiplier.comma ? '#' : '+';
    }

    if (multiplier.min === 1 && multiplier.max === 1) {
        return '';
    }

    return (
        (multiplier.comma ? '#' : '') +
        '{' + multiplier.min + (multiplier.min !== multiplier.max ? ',' + (multiplier.max !== 0 ? multiplier.max : '') : '') + '}'
    );
}

function translateSequence(node, forceBraces, decorate) {
    var result = '';

    if (node.explicit || forceBraces) {
        result += '[' + (!isNodeType(node.terms[0], 'Comma') ? ' ' : '');
    }

    result += node.terms.map(function(term) {
        return translate(term, forceBraces, decorate);
    }).join(node.combinator === ' ' ? ' ' : ' ' + node.combinator + ' ');

    if (node.explicit || forceBraces) {
        result += ' ]';
    }

    return result;
}

function translateParentheses(group, forceBraces, decorate) {
    if (!group.terms.length) {
        return '()';
    }

    return '( ' + translateSequence(group, forceBraces, decorate) + ' )';
}

function translate(node, forceBraces, decorate) {
    if (Array.isArray(node)) {
        return node.map(function(item) {
            return translate(item, forceBraces, decorate);
        }).join('');
    }

    var result;

    switch (node.type) {
        case 'Group':
            result =
                translateSequence(node, forceBraces, decorate) +
                (node.disallowEmpty ? '!' : '') +
                serializeMultiplier(node.multiplier);
            break;

        case 'Keyword':
            result = node.name;
            break;

        case 'Function':
            result = node.name + translateParentheses(node.children, forceBraces, decorate);
            break;

        case 'Parentheses': // replace for seq('(' seq(...node.children) ')')
            result = translateParentheses(node.children, forceBraces, decorate);
            break;

        case 'Type':
            result = '<' + node.name + '>';
            break;

        case 'Property':
            result = '<\'' + node.name + '\'>';
            break;

        case 'Combinator': // remove?
        case 'Slash':      // replace for String? '/'
        case 'Percent':    // replace for String? '%'
        case 'String':
        case 'Comma':
            result = node.value;
            break;

        default:
            throw new Error('Unknown node type: ' + node.type);
    }

    if (typeof decorate === 'function') {
        result = decorate(result, node);
    }

    return result;
}

module.exports = translate;

},{}],12:[function(require,module,exports){
'use strict';

module.exports = function walk(node, fn, context) {
    switch (node.type) {
        case 'Group':
            node.terms.forEach(function(term) {
                walk(term, fn, context);
            });
            break;

        case 'Function':
        case 'Parentheses':
            walk(node.children, fn, context);
            break;

        case 'Keyword':
        case 'Type':
        case 'Property':
        case 'Combinator':
        case 'Comma':
        case 'Slash':
        case 'String':
        case 'Percent':
            break;

        default:
            throw new Error('Unknown type: ' + node.type);
    }

    fn.call(context, node);
};

},{}],13:[function(require,module,exports){
'use strict';

module.exports = {
    Lexer: require('./Lexer'),
    grammar: require('./grammar')
};

},{"./Lexer":5,"./grammar":9}],14:[function(require,module,exports){
'use strict';

var names = require('../utils/names');
var MULTIPLIER_DEFAULT = {
    comma: false,
    min: 1,
    max: 1
};

function skipSpaces(node) {
    while (node !== null && (node.data.type === 'WhiteSpace' || node.data.type === 'Comment')) {
        node = node.next;
    }

    return node;
}

function putResult(buffer, match) {
    var type = match.type || match.syntax.type;

    // ignore groups
    if (type === 'Group') {
        buffer.push.apply(buffer, match.match);
    } else {
        buffer.push(match);
    }
}

function matchToJSON() {
    return {
        type: this.syntax.type,
        name: this.syntax.name,
        match: this.match,
        node: this.node
    };
}

function buildMatchNode(badNode, lastNode, next, match) {
    if (badNode) {
        return {
            badNode: badNode,
            lastNode: null,
            next: null,
            match: null
        };
    }

    return {
        badNode: null,
        lastNode: lastNode,
        next: next,
        match: match
    };
}

function matchGroup(lexer, syntaxNode, node) {
    var result = [];
    var buffer;
    var multiplier = syntaxNode.multiplier || MULTIPLIER_DEFAULT;
    var min = multiplier.min;
    var max = multiplier.max === 0 ? Infinity : multiplier.max;
    var lastCommaTermCount;
    var lastComma;
    var matchCount = 0;
    var lastNode = null;
    var badNode = null;

    mismatch:
    while (matchCount < max) {
        node = skipSpaces(node);
        buffer = [];

        switch (syntaxNode.combinator) {
            case '|':
                for (var i = 0; i < syntaxNode.terms.length; i++) {
                    var term = syntaxNode.terms[i];
                    var res = matchSyntax(lexer, term, node);

                    if (res.match) {
                        putResult(buffer, res.match);
                        node = res.next;
                        break;  // continue matching
                    } else if (res.badNode) {
                        badNode = res.badNode;
                        break mismatch;
                    } else if (res.lastNode) {
                        lastNode = res.lastNode;
                    }
                }

                if (buffer.length === 0) {
                    break mismatch; // nothing found -> stop matching
                }

                break;

            case ' ':
                var beforeMatchNode = node;
                var lastMatchedTerm = null;
                var hasTailMatch = false;
                var commaMissed = false;

                for (var i = 0; i < syntaxNode.terms.length; i++) {
                    var term = syntaxNode.terms[i];
                    var res = matchSyntax(lexer, term, node);

                    if (res.match) {
                        if (term.type === 'Comma' && i !== 0 && !hasTailMatch) {
                            // recover cursor to state before last match and stop matching
                            lastNode = node && node.data;
                            node = beforeMatchNode;
                            break mismatch;
                        }

                        // non-empty match (res.next will refer to another node)
                        if (res.next !== node) {
                            // match should be preceded by a comma
                            if (commaMissed) {
                                lastNode = node && node.data;
                                node = beforeMatchNode;
                                break mismatch;
                            }

                            hasTailMatch = term.type !== 'Comma';
                            lastMatchedTerm = term;
                        }

                        putResult(buffer, res.match);
                        node = skipSpaces(res.next);
                    } else if (res.badNode) {
                        badNode = res.badNode;
                        break mismatch;
                    } else {
                        if (res.lastNode) {
                            lastNode = res.lastNode;
                        }

                        // it's ok when comma doesn't match when no matches yet
                        // but only if comma is not first or last term
                        if (term.type === 'Comma' && i !== 0 && i !== syntaxNode.terms.length - 1) {
                            if (hasTailMatch) {
                                commaMissed = true;
                            }
                            continue;
                        }

                        // recover cursor to state before last match and stop matching
                        lastNode = res.lastNode || (node && node.data);
                        node = beforeMatchNode;
                        break mismatch;
                    }
                }

                // don't allow empty match when [ ]!
                if (!lastMatchedTerm && syntaxNode.disallowEmpty) {
                    // empty match but shouldn't
                    // recover cursor to state before last match and stop matching
                    lastNode = node && node.data;
                    node = beforeMatchNode;
                    break mismatch;
                }

                // don't allow comma at the end but only if last term isn't a comma
                if (lastMatchedTerm && lastMatchedTerm.type === 'Comma' && term.type !== 'Comma') {
                    lastNode = node && node.data;
                    node = beforeMatchNode;
                    break mismatch;
                }

                break;

            case '&&':
                var beforeMatchNode = node;
                var lastMatchedTerm = null;
                var terms = syntaxNode.terms.slice();

                while (terms.length) {
                    var wasMatch = false;
                    var emptyMatched = 0;

                    for (var i = 0; i < terms.length; i++) {
                        var term = terms[i];
                        var res = matchSyntax(lexer, term, node);

                        if (res.match) {
                            // non-empty match (res.next will refer to another node)
                            if (res.next !== node) {
                                lastMatchedTerm = term;
                            } else {
                                emptyMatched++;
                                continue;
                            }

                            wasMatch = true;
                            terms.splice(i--, 1);
                            putResult(buffer, res.match);
                            node = skipSpaces(res.next);
                            break;
                        } else if (res.badNode) {
                            badNode = res.badNode;
                            break mismatch;
                        } else if (res.lastNode) {
                            lastNode = res.lastNode;
                        }
                    }

                    if (!wasMatch) {
                        // terms left, but they all are optional
                        if (emptyMatched === terms.length) {
                            break;
                        }

                        // not ok
                        lastNode = node && node.data;
                        node = beforeMatchNode;
                        break mismatch;
                    }
                }

                if (!lastMatchedTerm && syntaxNode.disallowEmpty) { // don't allow empty match when [ ]!
                    // empty match but shouldn't
                    // recover cursor to state before last match and stop matching
                    lastNode = node && node.data;
                    node = beforeMatchNode;
                    break mismatch;
                }

                break;

            case '||':
                var beforeMatchNode = node;
                var lastMatchedTerm = null;
                var terms = syntaxNode.terms.slice();

                while (terms.length) {
                    var wasMatch = false;
                    var emptyMatched = 0;

                    for (var i = 0; i < terms.length; i++) {
                        var term = terms[i];
                        var res = matchSyntax(lexer, term, node);

                        if (res.match) {
                            // non-empty match (res.next will refer to another node)
                            if (res.next !== node) {
                                lastMatchedTerm = term;
                            } else {
                                emptyMatched++;
                                continue;
                            }

                            wasMatch = true;
                            terms.splice(i--, 1);
                            putResult(buffer, res.match);
                            node = skipSpaces(res.next);
                            break;
                        } else if (res.badNode) {
                            badNode = res.badNode;
                            break mismatch;
                        } else if (res.lastNode) {
                            lastNode = res.lastNode;
                        }
                    }

                    if (!wasMatch) {
                        break;
                    }
                }

                // don't allow empty match
                if (!lastMatchedTerm && (emptyMatched !== terms.length || syntaxNode.disallowEmpty)) {
                    // empty match but shouldn't
                    // recover cursor to state before last match and stop matching
                    lastNode = node && node.data;
                    node = beforeMatchNode;
                    break mismatch;
                }

                break;
        }

        // flush buffer
        result.push.apply(result, buffer);
        matchCount++;

        if (!node) {
            break;
        }

        if (multiplier.comma) {
            if (lastComma && lastCommaTermCount === result.length) {
                // nothing match after comma
                break mismatch;
            }

            node = skipSpaces(node);
            if (node !== null && node.data.type === 'Operator' && node.data.value === ',') {
                result.push({
                    syntax: syntaxNode,
                    match: [{
                        type: 'ASTNode',
                        node: node.data
                    }]
                });
                lastCommaTermCount = result.length;
                lastComma = node;
                node = node.next;
            } else {
                lastNode = node !== null ? node.data : null;
                break mismatch;
            }
        }
    }

    // console.log(syntaxNode.type, badNode, lastNode);

    if (lastComma && lastCommaTermCount === result.length) {
        // nothing match after comma
        node = lastComma;
        result.pop();
    }

    return buildMatchNode(badNode, lastNode, node, matchCount < min ? null : {
        syntax: syntaxNode,
        match: result,
        toJSON: matchToJSON
    });
}

function matchSyntax(lexer, syntaxNode, node) {
    var badNode = null;
    var lastNode = null;
    var match = null;

    switch (syntaxNode.type) {
        case 'Group':
            return matchGroup(lexer, syntaxNode, node);

        case 'Function':
            // expect a function node
            if (!node || node.data.type !== 'Function') {
                break;
            }

            var keyword = names.keyword(node.data.name);
            var name = syntaxNode.name.toLowerCase();

            // check function name with vendor consideration
            if (name !== keyword.vendor + keyword.name) {
                break;
            }

            var res = matchSyntax(lexer, syntaxNode.children, node.data.children.head);
            if (!res.match || res.next) {
                badNode = res.badNode || res.lastNode || (res.next ? res.next.data : null) || node.data;
                break;
            }

            match = [{
                type: 'ASTNode',
                node: node.data,
                childrenMatch: res.match.match
            }];

            // Use node.next instead of res.next here since syntax is matching
            // for internal list and it should be completelly matched (res.next is null at this point).
            // Therefore function is matched and we are going to next node
            node = node.next;
            break;

        case 'Parentheses':
            if (!node || node.data.type !== 'Parentheses') {
                break;
            }

            var res = matchSyntax(lexer, syntaxNode.children, node.data.children.head);
            if (!res.match || res.next) {
                badNode = res.badNode || res.lastNode || (res.next ? res.next.data : null) || node.data;  // TODO: case when res.next === null
                break;
            }

            match = [{
                type: 'ASTNode',
                node: node.data,
                childrenMatch: res.match.match
            }];

            node = res.next;
            break;

        case 'Type':
            var typeSyntax = lexer.getType(syntaxNode.name);
            if (!typeSyntax) {
                throw new Error('Unknown syntax type `' + syntaxNode.name + '`');
            }

            var res = typeSyntax.match(node);
            if (!res.match) {
                badNode = res && res.badNode; // TODO: case when res.next === null
                lastNode = (res && res.lastNode) || (node && node.data);
                break;
            }

            node = res.next;
            putResult(match = [], res.match);
            if (match.length === 0) {
                match = null;
            }
            break;

        case 'Property':
            var propertySyntax = lexer.getProperty(syntaxNode.name);
            if (!propertySyntax) {
                throw new Error('Unknown property `' + syntaxNode.name + '`');
            }

            var res = propertySyntax.match(node);
            if (!res.match) {
                badNode = res && res.badNode; // TODO: case when res.next === null
                lastNode = (res && res.lastNode) || (node && node.data);
                break;
            }

            node = res.next;
            putResult(match = [], res.match);
            if (match.length === 0) {
                match = null;
            }
            break;

        case 'Keyword':
            if (!node) {
                break;
            }

            if (node.data.type === 'Identifier') {
                var keyword = names.keyword(node.data.name);
                var keywordName = keyword.name;
                var name = syntaxNode.name.toLowerCase();

                // drop \0 and \9 hack from keyword name
                if (keywordName.indexOf('\\') !== -1) {
                    keywordName = keywordName.replace(/\\[09].*$/, '');
                }

                if (name !== keyword.vendor + keywordName) {
                    break;
                }
            } else {
                // keyword may to be a number (e.g. font-weight: 400 )
                if (node.data.type !== 'Number' || node.data.value !== syntaxNode.name) {
                    break;
                }
            }

            match = [{
                type: 'ASTNode',
                node: node.data
            }];
            node = node.next;
            break;

        case 'Slash':
        case 'Comma':
            if (!node || node.data.type !== 'Operator' || node.data.value !== syntaxNode.value) {
                break;
            }

            match = [{
                type: 'ASTNode',
                node: node.data
            }];
            node = node.next;
            break;

        case 'String':
            if (!node || node.data.type !== 'String') {
                break;
            }

            match = [{
                type: 'ASTNode',
                node: node.data
            }];
            node = node.next;
            break;

        case 'ASTNode':
            if (node && syntaxNode.match(node)) {
                match = {
                    type: 'ASTNode',
                    node: node.data
                };
                node = node.next;
            }
            return buildMatchNode(badNode, lastNode, node, match);

        default:
            throw new Error('Not implemented yet node type: ' + syntaxNode.type);
    }

    return buildMatchNode(badNode, lastNode, node, match === null ? null : {
        syntax: syntaxNode,
        match: match,
        toJSON: matchToJSON
    });

};

module.exports = matchSyntax;

},{"../utils/names":93}],15:[function(require,module,exports){
'use strict';

var Tokenizer = require('../tokenizer');
var sequence = require('./sequence');

module.exports = function createParser(config) {
    var parser = {
        scanner: new Tokenizer(),
        filename: '<unknown>',
        needPositions: false,
        parseAtruleExpression: true,
        parseSelector: true,
        parseValue: true,
        parseCustomProperty: false,

        readSequence: sequence,

        getLocation: function(start, end) {
            if (this.needPositions) {
                return this.scanner.getLocationRange(
                    start,
                    end,
                    this.filename
                );
            }

            return null;
        },
        getLocationFromList: function(list) {
            if (this.needPositions) {
                return this.scanner.getLocationRange(
                    list.head !== null ? list.first().loc.start.offset - this.scanner.startOffset : this.scanner.tokenStart,
                    list.head !== null ? list.last().loc.end.offset - this.scanner.startOffset : this.scanner.tokenStart,
                    this.filename
                );
            }

            return null;
        },

        parse: function(source, options) {
            options = options || {};

            var context = options.context || 'default';
            var ast;

            this.scanner.setSource(source, options.offset, options.line, options.column);
            this.filename = options.filename || '<unknown>';
            this.needPositions = Boolean(options.positions);
            this.parseAtruleExpression = 'parseAtruleExpression' in options ? Boolean(options.parseAtruleExpression) : true;
            this.parseSelector = 'parseSelector' in options ? Boolean(options.parseSelector) : true;
            this.parseValue = 'parseValue' in options ? Boolean(options.parseValue) : true;
            this.parseCustomProperty = 'parseCustomProperty' in options ? Boolean(options.parseCustomProperty) : false;

            if (!this.context.hasOwnProperty(context)) {
                throw new Error('Unknown context `' + context + '`');
            }

            ast = this.context[context].call(this, options);

            if (!this.scanner.eof) {
                this.scanner.error();
            }

            // console.log(JSON.stringify(ast, null, 4));
            return ast;
        }
    };

    for (var key in config) {
        parser[key] = config[key];
    }

    return parser.parse.bind(parser);
};

},{"../tokenizer":88,"./sequence":16}],16:[function(require,module,exports){
var List = require('../utils/list');
var TYPE = require('../tokenizer').TYPE;
var WHITESPACE = TYPE.Whitespace;
var COMMENT = TYPE.Comment;

module.exports = function readSequence(recognizer) {
    var children = new List();
    var child = null;
    var context = {
        recognizer: recognizer,
        space: null,
        ignoreWS: false,
        ignoreWSAfter: false
    };

    this.scanner.skipSC();

    while (!this.scanner.eof) {
        switch (this.scanner.tokenType) {
            case COMMENT:
                this.scanner.next();
                continue;

            case WHITESPACE:
                if (context.ignoreWS) {
                    this.scanner.next();
                } else {
                    context.space = this.WhiteSpace();
                }
                continue;
        }

        child = recognizer.getNode.call(this, context);

        if (child === undefined) {
            break;
        }

        if (context.space !== null) {
            children.appendData(context.space);
            context.space = null;
        }

        children.appendData(child);

        if (context.ignoreWSAfter) {
            context.ignoreWSAfter = false;
            context.ignoreWS = true;
        } else {
            context.ignoreWS = false;
        }
    }

    return children;
};

},{"../tokenizer":88,"../utils/list":92}],17:[function(require,module,exports){
module.exports = {
    parse: {
        expression: null,
        block: function() {
            return this.Block(this.Declaration);
        }
    }
};

},{}],18:[function(require,module,exports){
var List = require('../../utils/list');
var TYPE = require('../../tokenizer').TYPE;

var STRING = TYPE.String;
var IDENTIFIER = TYPE.Identifier;
var LEFTPARENTHESIS = TYPE.LeftParenthesis;

module.exports = {
    parse: {
        expression: function() {
            var children = new List();

            this.scanner.skipSC();

            switch (this.scanner.tokenType) {
                case STRING:
                    children.appendData(this.String());
                    break;

                case IDENTIFIER:
                    children.appendData(this.Url());
                    break;

                default:
                    this.scanner.error('String or url() is expected');
            }

            if (this.scanner.lookupNonWSType(0) === IDENTIFIER ||
                this.scanner.lookupNonWSType(0) === LEFTPARENTHESIS) {
                children.appendData(this.WhiteSpace());
                children.appendData(this.MediaQueryList());
            }

            return children;
        },
        block: false
    }
};

},{"../../tokenizer":88,"../../utils/list":92}],19:[function(require,module,exports){
module.exports = {
    parse: {
        expression: function() {
            return this.MediaQueryList();
        },
        block: function() {
            return this.Block(this.Rule);
        }
    }
};

},{}],20:[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;
var LEFTCURLYBRACKET = TYPE.LeftCurlyBracket;

module.exports = {
    parse: {
        expression: function() {
            if (this.scanner.lookupNonWSType(0) === LEFTCURLYBRACKET) {
                return null;
            }

            return this.SelectorList();
        },
        block: function() {
            return this.Block(this.Declaration);
        }
    }
};

},{"../../tokenizer":88}],21:[function(require,module,exports){
var List = require('../../utils/list');
var TYPE = require('../../tokenizer').TYPE;

var WHITESPACE = TYPE.Whitespace;
var COMMENT = TYPE.Comment;
var IDENTIFIER = TYPE.Identifier;
var LEFTPARENTHESIS = TYPE.LeftParenthesis;
var HYPHENMINUS = TYPE.HyphenMinus;
var COLON = TYPE.Colon;
var BALANCED = true;

function readRaw() {
    return new List().appendData(
        this.Raw(BALANCED, 0, 0)
    );
}

function parentheses() {
    var index = 0;

    this.scanner.skipSC();

    // TODO: make it simplier
    if (this.scanner.tokenType === IDENTIFIER) {
        index = 1;
    } else if (this.scanner.tokenType === HYPHENMINUS &&
               this.scanner.lookupType(1) === IDENTIFIER) {
        index = 2;
    }

    if (index !== 0 && this.scanner.lookupNonWSType(index) === COLON) {
        return new List().appendData(
            this.Declaration()
        );
    }

    return readSequence.call(this);
}

function readSequence() {
    var children = new List();
    var space = null;
    var child;

    this.scanner.skipSC();

    scan:
    while (!this.scanner.eof) {
        switch (this.scanner.tokenType) {
            case WHITESPACE:
                space = this.WhiteSpace();
                continue;

            case COMMENT:
                this.scanner.next();
                continue;

            case IDENTIFIER:
                if (this.scanner.lookupType(1) === LEFTPARENTHESIS) {
                    child = this.Function(readRaw, this.scope.AtruleExpression);
                } else {
                    child = this.Identifier();
                }

                break;

            case LEFTPARENTHESIS:
                child = this.Parentheses(parentheses, this.scope.AtruleExpression);
                break;

            default:
                break scan;
        }

        if (space !== null) {
            children.appendData(space);
            space = null;
        }

        children.appendData(child);
    }

    return children;
}

module.exports = {
    parse: {
        expression: function() {
            var children = readSequence.call(this);

            if (children.isEmpty()) {
                this.scanner.error('Condition is expected');
            }

            return children;
        },
        block: function() {
            return this.Block(this.Rule);
        }
    }
};

},{"../../tokenizer":88,"../../utils/list":92}],22:[function(require,module,exports){
var data = require('../../data');

module.exports = require('./index.js').create({
    generic: true,
    types: data.types,
    properties: data.properties,

    parseContext: {
        default: 'StyleSheet',
        stylesheet: 'StyleSheet',
        atrule: 'Atrule',
        atruleExpression: function(options) {
            return this.AtruleExpression(options.atrule ? String(options.atrule) : null);
        },
        mediaQueryList: 'MediaQueryList',
        mediaQuery: 'MediaQuery',
        rule: 'Rule',
        selectorList: 'SelectorList',
        selector: 'Selector',
        block: function() {
            return this.Block(this.Declaration);
        },
        declarationList: 'DeclarationList',
        declaration: 'Declaration',
        value: function(options) {
            return this.Value(options.property ? String(options.property) : null);
        }
    },
    scope: {
        AtruleExpression: require('./scope/atruleExpression'),
        Selector: require('./scope/selector'),
        Value: require('./scope/value')
    },
    atrule: {
        'font-face': require('./atrule/font-face'),
        'import': require('./atrule/import'),
        'media': require('./atrule/media'),
        'page': require('./atrule/page'),
        'supports': require('./atrule/supports')
    },
    pseudo: {
        'dir': require('./pseudo/dir'),
        'has': require('./pseudo/has'),
        'lang': require('./pseudo/lang'),
        'matches': require('./pseudo/matches'),
        'not': require('./pseudo/not'),
        'nth-child': require('./pseudo/nth-child'),
        'nth-last-child': require('./pseudo/nth-last-child'),
        'nth-last-of-type': require('./pseudo/nth-last-of-type'),
        'nth-of-type': require('./pseudo/nth-of-type'),
        'slotted': require('./pseudo/slotted')
    },
    node: {
        AnPlusB: require('./node/AnPlusB'),
        Atrule: require('./node/Atrule'),
        AtruleExpression: require('./node/AtruleExpression'),
        AttributeSelector: require('./node/AttributeSelector'),
        Block: require('./node/Block'),
        Brackets: require('./node/Brackets'),
        CDC: require('./node/CDC'),
        CDO: require('./node/CDO'),
        ClassSelector: require('./node/ClassSelector'),
        Combinator: require('./node/Combinator'),
        Comment: require('./node/Comment'),
        Declaration: require('./node/Declaration'),
        DeclarationList: require('./node/DeclarationList'),
        Dimension: require('./node/Dimension'),
        Function: require('./node/Function'),
        HexColor: require('./node/HexColor'),
        Identifier: require('./node/Identifier'),
        IdSelector: require('./node/IdSelector'),
        MediaFeature: require('./node/MediaFeature'),
        MediaQuery: require('./node/MediaQuery'),
        MediaQueryList: require('./node/MediaQueryList'),
        Nth: require('./node/Nth'),
        Number: require('./node/Number'),
        Operator: require('./node/Operator'),
        Parentheses: require('./node/Parentheses'),
        Percentage: require('./node/Percentage'),
        PseudoClassSelector: require('./node/PseudoClassSelector'),
        PseudoElementSelector: require('./node/PseudoElementSelector'),
        Ratio: require('./node/Ratio'),
        Raw: require('./node/Raw'),
        Rule: require('./node/Rule'),
        Selector: require('./node/Selector'),
        SelectorList: require('./node/SelectorList'),
        String: require('./node/String'),
        StyleSheet: require('./node/StyleSheet'),
        TypeSelector: require('./node/TypeSelector'),
        UnicodeRange: require('./node/UnicodeRange'),
        Url: require('./node/Url'),
        Value: require('./node/Value'),
        WhiteSpace: require('./node/WhiteSpace')
    }
});

},{"../../data":1,"./atrule/font-face":17,"./atrule/import":18,"./atrule/media":19,"./atrule/page":20,"./atrule/supports":21,"./index.js":26,"./node/AnPlusB":28,"./node/Atrule":29,"./node/AtruleExpression":30,"./node/AttributeSelector":31,"./node/Block":32,"./node/Brackets":33,"./node/CDC":34,"./node/CDO":35,"./node/ClassSelector":36,"./node/Combinator":37,"./node/Comment":38,"./node/Declaration":39,"./node/DeclarationList":40,"./node/Dimension":41,"./node/Function":42,"./node/HexColor":43,"./node/IdSelector":44,"./node/Identifier":45,"./node/MediaFeature":46,"./node/MediaQuery":47,"./node/MediaQueryList":48,"./node/Nth":49,"./node/Number":50,"./node/Operator":51,"./node/Parentheses":52,"./node/Percentage":53,"./node/PseudoClassSelector":54,"./node/PseudoElementSelector":55,"./node/Ratio":56,"./node/Raw":57,"./node/Rule":58,"./node/Selector":59,"./node/SelectorList":60,"./node/String":61,"./node/StyleSheet":62,"./node/TypeSelector":63,"./node/UnicodeRange":64,"./node/Url":65,"./node/Value":66,"./node/WhiteSpace":67,"./pseudo/dir":71,"./pseudo/has":72,"./pseudo/lang":73,"./pseudo/matches":74,"./pseudo/not":75,"./pseudo/nth-child":76,"./pseudo/nth-last-child":77,"./pseudo/nth-last-of-type":78,"./pseudo/nth-of-type":79,"./pseudo/slotted":80,"./scope/atruleExpression":81,"./scope/selector":83,"./scope/value":84}],23:[function(require,module,exports){
var List = require('../../utils/list');

// https://drafts.csswg.org/css-images-4/#element-notation
// https://developer.mozilla.org/en-US/docs/Web/CSS/element
module.exports = function() {
    this.scanner.skipSC();

    var id = this.IdSelector();

    this.scanner.skipSC();

    return new List().appendData(
        id
    );
};

},{"../../utils/list":92}],24:[function(require,module,exports){
var List = require('../../utils/list');
var BALANCED = true;

// legacy IE function
// expression '(' raw ')'
module.exports = function() {
    return new List().appendData(
        this.Raw(BALANCED, 0, 0)
    );
};

},{"../../utils/list":92}],25:[function(require,module,exports){
var List = require('../../utils/list');
var TYPE = require('../../tokenizer').TYPE;

var IDENTIFIER = TYPE.Identifier;
var COMMA = TYPE.Comma;
var HYPHENMINUS = TYPE.HyphenMinus;
var EXCLAMATIONMARK = TYPE.ExclamationMark;
var BALANCED = true;

// var '(' ident (',' <value>? )? ')'
module.exports = function() {
    var children = new List();

    this.scanner.skipSC();

    var identStart = this.scanner.tokenStart;

    this.scanner.eat(HYPHENMINUS);
    if (this.scanner.source.charCodeAt(this.scanner.tokenStart) !== HYPHENMINUS) {
        this.scanner.error('HyphenMinus is expected');
    }
    this.scanner.eat(IDENTIFIER);

    children.appendData({
        type: 'Identifier',
        loc: this.getLocation(identStart, this.scanner.tokenStart),
        name: this.scanner.substrToCursor(identStart)
    });

    this.scanner.skipSC();

    if (this.scanner.tokenType === COMMA) {
        children.appendData(this.Operator());
        children.appendData(this.parseCustomProperty
            ? this.Value(null)
            : this.Raw(BALANCED, HYPHENMINUS, EXCLAMATIONMARK)
        );
    }

    return children;
};

},{"../../tokenizer":88,"../../utils/list":92}],26:[function(require,module,exports){
var hasOwnProperty = Object.prototype.hasOwnProperty;
var List = require('../utils/list');
var createParser = require('../parser');
var createGenerator = require('../generator').createGenerator;
var createMarkupGenerator = require('../generator').createMarkupGenerator;
var sourceMapGenerator = require('../generator').sourceMap;
var createConvertors = require('../utils/convert');
var createWalker = require('../walker');
var names = require('../utils/names');
var mix = require('./mix');

function assign(dest, src) {
    for (var key in src) {
        dest[key] = src[key];
    }

    return dest;
}

function createParseContext(name) {
    return function() {
        return this[name]();
    };
}

function isValidNumber(value) {
    // Number.isInteger(value) && value >= 0
    return (
        typeof value === 'number' &&
        isFinite(value) &&
        Math.floor(value) === value &&
        value >= 0
    );
}

function isValidLocation(loc) {
    return (
        Boolean(loc) &&
        isValidNumber(loc.offset) &&
        isValidNumber(loc.line) &&
        isValidNumber(loc.column)
    );
}

function createNodeStructureChecker(type, fields) {
    return function checkNode(node, warn) {
        if (!node || node.constructor !== Object) {
            return warn('Type of node should be an object');
        }

        for (var key in node) {
            if (key === 'type') {
                if (node.type !== type) {
                    warn('Wrong node type `' + node.type + '` but expected `' + type + '`');
                }
            } else if (key === 'loc') {
                if (node.loc === null) {
                    continue;
                } else if (node.loc && node.loc.constructor === Object) {
                    if (typeof node.loc.source === 'string' &&
                        isValidLocation(node.loc.start) &&
                        isValidLocation(node.loc.end)) {
                        continue;
                    }
                }
                warn('Wrong value for `' + type + '.' + key + '` field');
            } else if (fields.hasOwnProperty(key)) {
                for (var i = 0, valid = false; !valid && i < fields[key].length; i++) {
                    var fieldType = fields[key][i];

                    switch (fieldType) {
                        case String:
                            valid = typeof node[key] === 'string';
                            break;

                        case Boolean:
                            valid = typeof node[key] === 'boolean';
                            break;

                        case null:
                            valid = node[key] === null;
                            break;

                        default:
                            if (typeof fieldType === 'string') {
                                valid = node[key] && node[key].type === fieldType;
                            } else if (Array.isArray(fieldType)) {
                                valid = node[key] instanceof List;
                            }
                    }
                }
                if (!valid) {
                    warn('Wrong value for `' + type + '.' + key + '` field');
                }
            } else {
                warn('Unknown field `' + key + '` for ' + type);
            }
        }

        for (var key in fields) {
            if (hasOwnProperty.call(node, key) === false) {
                warn('Field `' + type + '.' + key + '` is missed');
            }
        }
    };
}

function processStructure(name, nodeType) {
    var structure = nodeType.structure;
    var fields = {
        type: String,
        loc: true
    };
    var walkers = [];
    var docs = {
        type: '"' + name + '"'
    };

    for (var key in structure) {
        var walker = {
            name: key,
            type: false,
            nullable: false
        };
        var docsTypes = [];
        var fieldTypes = fields[key] = Array.isArray(structure[key])
            ? structure[key].slice()
            : [structure[key]];

        for (var i = 0; i < fieldTypes.length; i++) {
            var fieldType = fieldTypes[i];
            if (fieldType === String || fieldType === Boolean) {
                docsTypes.push(fieldType.name);
            } else if (fieldType === null) {
                walker.nullable = true;
                docsTypes.push('null');
            } else if (typeof fieldType === 'string') {
                walker.type = 'node';
                docsTypes.push('<' + fieldType + '>');
            } else if (Array.isArray(fieldType)) {
                walker.type = 'list';
                docsTypes.push('List'); // TODO: use type enum
            } else {
                throw new Error('Wrong value in `' + name + '` structure definition');
            }
        }

        docs[key] = docsTypes.join(' | ');

        if (walker.type) {
            walkers.push(walker);
        }
    }

    return {
        docs: docs,
        check: createNodeStructureChecker(name, fields),
        walk: walkers.length ? {
            context: nodeType.walkContext,
            fields: walkers
        } : null
    };
}

function createSyntax(config) {
    var parser = { context: {}, scope: {}, atrule: {}, pseudo: {} };
    var walker = { type: {} };
    var generator = {};
    var lexer = { structure: {} };

    if (config.parseContext) {
        for (var name in config.parseContext) {
            switch (typeof config.parseContext[name]) {
                case 'function':
                    parser.context[name] = config.parseContext[name];
                    break;

                case 'string':
                    parser.context[name] = createParseContext(config.parseContext[name]);
                    break;
            }
        }
    }

    if (config.scope) {
        for (var name in config.scope) {
            parser.scope[name] = config.scope[name];
        }
    }

    if (config.atrule) {
        for (var name in config.atrule) {
            var atrule = config.atrule[name];

            if (atrule.parse) {
                parser.atrule[name] = atrule.parse;
            }
        }
    }

    if (config.pseudo) {
        for (var name in config.pseudo) {
            var pseudo = config.pseudo[name];

            if (pseudo.parse) {
                parser.pseudo[name] = pseudo.parse;
            }
        }
    }

    if (config.node) {
        for (var name in config.node) {
            var nodeType = config.node[name];

            parser[name] = nodeType.parse;
            generator[name] = nodeType.generate;

            if (nodeType.structure) {
                var structure = processStructure(name, nodeType);
                lexer.structure[name] = {
                    docs: structure.docs,
                    check: structure.check
                };
                if (structure.walk) {
                    walker.type[name] = structure.walk;
                }
            } else {
                throw new Error('Missed `structure` field in `' + name + '` node type definition');
            }
        }
    }

    var parse = createParser(parser);
    var Lexer = require('../lexer/Lexer');
    var walker = createWalker(walker.type);
    var convertors = createConvertors(walker);
    var markupGenerator = createMarkupGenerator(generator);

    var syntax = {
        List: require('../utils/list'),
        Tokenizer: require('../tokenizer'),
        Lexer: require('../lexer/Lexer'),

        property: names.property,
        keyword: names.keyword,

        lexer: null,
        syntax: require('../lexer'),
        createLexer: function(config) {
            return new Lexer(config, syntax, lexer.structure);
        },

        parse: parse,

        walk: walker.all,
        walkUp: walker.allUp,
        walkRules: walker.rules,
        walkRulesRight: walker.rulesRight,
        walkDeclarations: walker.declarations,

        translate: createGenerator(generator),
        translateWithSourceMap: function(node) {
            return sourceMapGenerator(markupGenerator, node);
        },
        translateMarkup: markupGenerator,

        clone: require('../utils/clone'),
        fromPlainObject: convertors.fromPlainObject,
        toPlainObject: convertors.toPlainObject,

        createSyntax: function(config) {
            return createSyntax(mix({}, config));
        },
        fork: function(extension) {
            var base = mix({}, config); // copy of config
            return createSyntax(
                typeof extension === 'function'
                    ? extension(base, assign)
                    : mix(base, extension)
            );
        }
    };

    syntax.lexer = new Lexer({
        generic: true,
        types: config.types,
        properties: config.properties
    }, syntax, lexer.structure);

    return syntax;
};

exports.create = function(config) {
    return createSyntax(mix({}, config));
};

},{"../generator":2,"../lexer":13,"../lexer/Lexer":5,"../parser":15,"../tokenizer":88,"../utils/clone":90,"../utils/convert":91,"../utils/list":92,"../utils/names":93,"../walker":94,"./mix":27}],27:[function(require,module,exports){
var shape = {
    generic: true,
    types: {},
    properties: {},
    parseContext: {},
    scope: {},
    atrule: ['parse'],
    pseudo: ['parse'],
    node: ['name', 'structure', 'parse', 'generate', 'walkContext']
};

function mix(dest, src, shape) {
    for (var key in shape) {
        if (shape[key] === true) {
            if (key in src) {
                dest[key] = src[key];
            }
        } else if (shape[key]) {
            if (shape[key].constructor === Object) {
                var res = {};
                for (var name in dest[key]) {
                    res[name] = dest[key][name];
                }
                for (var name in src[key]) {
                    res[name] = src[key][name];
                }
                dest[key] = res;
            } else if (Array.isArray(shape[key])) {
                var res = {};
                var innerShape = shape[key].reduce(function(s, k) {
                    s[k] = true;
                    return s;
                }, {});
                for (var name in dest[key]) {
                    res[name] = {};
                    if (dest[key] && dest[key][name]) {
                        mix(res[name], dest[key][name], innerShape);
                    }
                }
                for (var name in src[key]) {
                    if (!res[name]) {
                        res[name] = {};
                    }
                    if (src[key] && src[key][name]) {
                        mix(res[name], src[key][name], innerShape);
                    }
                }
                dest[key] = res;
            }
        }
    }
    return dest;
}

module.exports = function(dest, src) {
    return mix(dest, src, shape);
};

},{}],28:[function(require,module,exports){
var cmpChar = require('../../tokenizer').cmpChar;
var isNumber = require('../../tokenizer').isNumber;
var TYPE = require('../../tokenizer').TYPE;

var IDENTIFIER = TYPE.Identifier;
var NUMBER = TYPE.Number;
var PLUSSIGN = TYPE.PlusSign;
var HYPHENMINUS = TYPE.HyphenMinus;
var N = 110; // 'n'.charCodeAt(0)
var DISALLOW_SIGN = true;
var ALLOW_SIGN = false;

function checkTokenIsInteger(scanner, disallowSign) {
    var pos = scanner.tokenStart;

    if (scanner.source.charCodeAt(pos) === PLUSSIGN ||
        scanner.source.charCodeAt(pos) === HYPHENMINUS) {
        if (disallowSign) {
            scanner.error();
        }
        pos++;
    }

    for (; pos < scanner.tokenEnd; pos++) {
        if (!isNumber(scanner.source.charCodeAt(pos))) {
            scanner.error('Unexpected input', pos);
        }
    }
}

// An+B microsyntax https://www.w3.org/TR/css-syntax-3/#anb
module.exports = {
    name: 'AnPlusB',
    structure: {
        a: [String, null],
        b: [String, null]
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var end = start;
        var prefix = '';
        var a = null;
        var b = null;

        if (this.scanner.tokenType === NUMBER ||
            this.scanner.tokenType === PLUSSIGN) {
            checkTokenIsInteger(this.scanner, ALLOW_SIGN);
            prefix = this.scanner.getTokenValue();
            this.scanner.next();
            end = this.scanner.tokenStart;
        }

        if (this.scanner.tokenType === IDENTIFIER) {
            var bStart = this.scanner.tokenStart;

            if (cmpChar(this.scanner.source, bStart, HYPHENMINUS)) {
                if (prefix === '') {
                    prefix = '-';
                    bStart++;
                } else {
                    this.scanner.error('Unexpected hyphen minus');
                }
            }

            if (!cmpChar(this.scanner.source, bStart, N)) {
                this.scanner.error();
            }

            a = prefix === ''  ? '1'  :
                prefix === '+' ? '+1' :
                prefix === '-' ? '-1' :
                prefix;

            var len = this.scanner.tokenEnd - bStart;
            if (len > 1) {
                // ..n-..
                if (this.scanner.source.charCodeAt(bStart + 1) !== HYPHENMINUS) {
                    this.scanner.error('Unexpected input', bStart + 1);
                }

                if (len > 2) {
                    // ..n-{number}..
                    this.scanner.tokenStart = bStart + 2;
                } else {
                    // ..n- {number}
                    this.scanner.next();
                    this.scanner.skipSC();
                }

                checkTokenIsInteger(this.scanner, DISALLOW_SIGN);
                b = '-' + this.scanner.getTokenValue();
                this.scanner.next();
                end = this.scanner.tokenStart;
            } else {
                prefix = '';
                this.scanner.next();
                end = this.scanner.tokenStart;
                this.scanner.skipSC();

                if (this.scanner.tokenType === HYPHENMINUS ||
                    this.scanner.tokenType === PLUSSIGN) {
                    prefix = this.scanner.getTokenValue();
                    this.scanner.next();
                    this.scanner.skipSC();
                }

                if (this.scanner.tokenType === NUMBER) {
                    checkTokenIsInteger(this.scanner, prefix !== '');

                    if (!isNumber(this.scanner.source.charCodeAt(this.scanner.tokenStart))) {
                        prefix = this.scanner.source.charAt(this.scanner.tokenStart);
                        this.scanner.tokenStart++;
                    }

                    if (prefix === '') {
                        // should be an operator before number
                        this.scanner.error();
                    } else if (prefix === '+') {
                        // plus is using by default
                        prefix = '';
                    }

                    b = prefix + this.scanner.getTokenValue();

                    this.scanner.next();
                    end = this.scanner.tokenStart;
                } else {
                    if (prefix) {
                        this.scanner.eat(NUMBER);
                    }
                }
            }
        } else {
            if (prefix === '' || prefix === '+') { // no number
                this.scanner.error(
                    'Number or identifier is expected',
                    this.scanner.tokenStart + (
                        this.scanner.tokenType === PLUSSIGN ||
                        this.scanner.tokenType === HYPHENMINUS
                    )
                );
            }

            b = prefix;
        }

        return {
            type: 'AnPlusB',
            loc: this.getLocation(start, end),
            a: a,
            b: b
        };
    },
    generate: function(node) {
        var a = node.a !== null && node.a !== undefined;
        var b = node.b !== null && node.b !== undefined;
        var result;

        if (a) {
            result =
                node.a === '+1' || node.a === '1' ? 'n' :
                node.a === '-1' ? '-n' :
                node.a + 'n';

            if (b) {
                b = String(node.b);
                if (b.charAt(0) === '-' || b.charAt(0) === '+') {
                    result = [result, b.charAt(0), b.substr(1)];
                } else {
                    result = [result, '+', b];
                }
            }
        } else {
            result = String(node.b);
        }

        return result;
    }
};

},{"../../tokenizer":88}],29:[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;

var IDENTIFIER = TYPE.Identifier;
var SEMICOLON = TYPE.Semicolon;
var COMMERCIALAT = TYPE.CommercialAt;
var LEFTCURLYBRACKET = TYPE.LeftCurlyBracket;
var RIGHTCURLYBRACKET = TYPE.RightCurlyBracket;
var BALANCED = true;

function isBlockAtrule() {
    for (var offset = 1, type; type = this.scanner.lookupType(offset); offset++) {
        if (type === RIGHTCURLYBRACKET) {
            return true;
        }

        if (type === LEFTCURLYBRACKET ||
            type === COMMERCIALAT) {
            return false;
        }
    }

    this.scanner.skip(offset);
    this.scanner.eat(RIGHTCURLYBRACKET);
}

module.exports = {
    name: 'Atrule',
    structure: {
        name: String,
        expression: ['AtruleExpression', 'MediaQueryList', 'SelectorList', 'Raw', null],
        block: ['Block', null]
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var name;
        var nameLowerCase;
        var expression = null;
        var block = null;

        this.scanner.eat(COMMERCIALAT);

        name = this.scanner.consume(IDENTIFIER);
        nameLowerCase = name.toLowerCase();
        this.scanner.skipSC();

        if (this.parseAtruleExpression) {
            expression = this.AtruleExpression(name);
            this.scanner.skipSC();
        } else {
            expression = this.Raw(BALANCED, SEMICOLON, LEFTCURLYBRACKET);
        }

        if (this.atrule.hasOwnProperty(nameLowerCase)) {
            if (typeof this.atrule[nameLowerCase].block === 'function') {
                if (this.scanner.tokenType !== LEFTCURLYBRACKET) {
                    this.scanner.error('Curly bracket is expected');
                }

                block = this.atrule[nameLowerCase].block.call(this);
            } else {
                this.scanner.eat(SEMICOLON);
            }
        } else {
            switch (this.scanner.tokenType) {
                case SEMICOLON:
                    this.scanner.next();
                    break;

                case LEFTCURLYBRACKET:
                    block = this.Block(isBlockAtrule.call(this) ? this.Declaration : this.Rule);
                    break;

                default:
                    this.scanner.error('Semicolon or block is expected');
            }
        }

        return {
            type: 'Atrule',
            loc: this.getLocation(start, this.scanner.tokenStart),
            name: name,
            expression: expression,
            block: block
        };
    },
    generate: function(node) {
        var result = ['@', node.name];

        if (node.expression !== null) {
            result.push(' ', this.generate(node.expression));
        }

        result.push(node.block ? this.generate(node.block) : ';');

        return result;
    },
    walkContext: 'atrule'
};

},{"../../tokenizer":88}],30:[function(require,module,exports){
var List = require('../../utils/list');

module.exports = {
    name: 'AtruleExpression',
    structure: {
        children: [[]]
    },
    parse: function(name) {
        var children = null;

        if (name !== null) {
            name = name.toLowerCase();
        }

        // custom consumer
        if (this.atrule.hasOwnProperty(name)) {
            if (typeof this.atrule[name].expression === 'function') {
                children = this.atrule[name].expression.call(this);

                if (children instanceof List === false) {
                    return children;
                }
            }
        } else {
            // default consumer
            this.scanner.skipSC();
            children = this.readSequence(this.scope.AtruleExpression);
        }

        if (children === null || children.isEmpty()) {
            return null;
        }

        return {
            type: 'AtruleExpression',
            loc: this.getLocationFromList(children),
            children: children
        };
    },
    generate: function(node) {
        return this.each(node.children);
    },
    walkContext: 'atruleExpression'
};

},{"../../utils/list":92}],31:[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;

var IDENTIFIER = TYPE.Identifier;
var STRING = TYPE.String;
var DOLLARSIGN = TYPE.DollarSign;
var ASTERISK = TYPE.Asterisk;
var COLON = TYPE.Colon;
var EQUALSSIGN = TYPE.EqualsSign;
var LEFTSQUAREBRACKET = TYPE.LeftSquareBracket;
var RIGHTSQUAREBRACKET = TYPE.RightSquareBracket;
var CIRCUMFLEXACCENT = TYPE.CircumflexAccent;
var VERTICALLINE = TYPE.VerticalLine;
var TILDE = TYPE.Tilde;

function getAttributeName() {
    if (this.scanner.eof) {
        this.scanner.error('Unexpected end of input');
    }

    var start = this.scanner.tokenStart;
    var expectIdentifier = false;
    var checkColon = true;

    if (this.scanner.tokenType === ASTERISK) {
        expectIdentifier = true;
        checkColon = false;
        this.scanner.next();
    } else if (this.scanner.tokenType !== VERTICALLINE) {
        this.scanner.eat(IDENTIFIER);
    }

    if (this.scanner.tokenType === VERTICALLINE) {
        if (this.scanner.lookupType(1) !== EQUALSSIGN) {
            this.scanner.next();
            this.scanner.eat(IDENTIFIER);
        } else if (expectIdentifier) {
            this.scanner.error('Identifier is expected', this.scanner.tokenEnd);
        }
    } else if (expectIdentifier) {
        this.scanner.error('Vertical line is expected');
    }

    if (checkColon && this.scanner.tokenType === COLON) {
        this.scanner.next();
        this.scanner.eat(IDENTIFIER);
    }

    return {
        type: 'Identifier',
        loc: this.getLocation(start, this.scanner.tokenStart),
        name: this.scanner.substrToCursor(start)
    };
}

function getOperator() {
    var start = this.scanner.tokenStart;
    var tokenType = this.scanner.tokenType;

    if (tokenType !== EQUALSSIGN &&        // =
        tokenType !== TILDE &&             // ~=
        tokenType !== CIRCUMFLEXACCENT &&  // ^=
        tokenType !== DOLLARSIGN &&        // $=
        tokenType !== ASTERISK &&          // *=
        tokenType !== VERTICALLINE         // |=
    ) {
        this.scanner.error('Attribute selector (=, ~=, ^=, $=, *=, |=) is expected');
    }

    if (tokenType === EQUALSSIGN) {
        this.scanner.next();
    } else {
        this.scanner.next();
        this.scanner.eat(EQUALSSIGN);
    }

    return this.scanner.substrToCursor(start);
}

// '[' S* attrib_name ']'
// '[' S* attrib_name S* attrib_match S* [ IDENT | STRING ] S* attrib_flags? S* ']'
module.exports = {
    name: 'AttributeSelector',
    structure: {
        name: 'Identifier',
        operator: [String, null],
        value: ['String', 'Identifier', null],
        flags: [String, null]
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var name;
        var operator = null;
        var value = null;
        var flags = null;

        this.scanner.eat(LEFTSQUAREBRACKET);
        this.scanner.skipSC();

        name = getAttributeName.call(this);
        this.scanner.skipSC();

        if (this.scanner.tokenType !== RIGHTSQUAREBRACKET) {
            // avoid case `[name i]`
            if (this.scanner.tokenType !== IDENTIFIER) {
                operator = getOperator.call(this);

                this.scanner.skipSC();

                value = this.scanner.tokenType === STRING
                    ? this.String()
                    : this.Identifier();

                this.scanner.skipSC();
            }

            // attribute flags
            if (this.scanner.tokenType === IDENTIFIER) {
                flags = this.scanner.getTokenValue();
                this.scanner.next();

                this.scanner.skipSC();
            }
        }

        this.scanner.eat(RIGHTSQUAREBRACKET);

        return {
            type: 'AttributeSelector',
            loc: this.getLocation(start, this.scanner.tokenStart),
            name: name,
            operator: operator,
            value: value,
            flags: flags
        };
    },
    generate: function(node) {
        var result = ['[', this.generate(node.name)];
        var flagsPrefix = ' ';

        if (node.operator !== null) {
            result.push(node.operator);

            if (node.value !== null) {
                result.push(this.generate(node.value));

                // space between string and flags is not required
                if (node.value.type === 'String') {
                    flagsPrefix = '';
                }
            }
        }

        if (node.flags !== null) {
            result.push(flagsPrefix, node.flags);
        }

        result.push(']');

        return result;
    }
};

},{"../../tokenizer":88}],32:[function(require,module,exports){
var List = require('../../utils/list');
var TYPE = require('../../tokenizer').TYPE;

var WHITESPACE = TYPE.Whitespace;
var COMMENT = TYPE.Comment;
var SEMICOLON = TYPE.Semicolon;
var COMMERCIALAT = TYPE.CommercialAt;
var LEFTCURLYBRACKET = TYPE.LeftCurlyBracket;
var RIGHTCURLYBRACKET = TYPE.RightCurlyBracket;

module.exports = {
    name: 'Block',
    structure: {
        children: [['Atrule', 'Rule', 'Declaration']]
    },
    parse: function(defaultConsumer) {
        defaultConsumer = defaultConsumer || this.Declaration;

        var start = this.scanner.tokenStart;
        var children = new List();

        this.scanner.eat(LEFTCURLYBRACKET);

        scan:
        while (!this.scanner.eof) {
            switch (this.scanner.tokenType) {
                case RIGHTCURLYBRACKET:
                    break scan;

                case WHITESPACE:
                case COMMENT:
                case SEMICOLON:
                    this.scanner.next();
                    break;

                case COMMERCIALAT:
                    children.appendData(this.Atrule());
                    break;

                default:
                    children.appendData(defaultConsumer.call(this));
            }
        }

        this.scanner.eat(RIGHTCURLYBRACKET);

        return {
            type: 'Block',
            loc: this.getLocation(start, this.scanner.tokenStart),
            children: children
        };
    },
    generate: function(node) {
        return [].concat('{', this.each(node.children), '}');
    },
    walkContext: 'block'
};

},{"../../tokenizer":88,"../../utils/list":92}],33:[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;
var LEFTSQUAREBRACKET = TYPE.LeftSquareBracket;
var RIGHTSQUAREBRACKET = TYPE.RightSquareBracket;

// currently only Grid Layout uses square brackets, but left it universal
// https://drafts.csswg.org/css-grid/#track-sizing
// [ ident* ]
module.exports = {
    name: 'Brackets',
    structure: {
        children: [[]]
    },
    parse: function(readSequence, recognizer) {
        var start = this.scanner.tokenStart;
        var children = null;

        this.scanner.eat(LEFTSQUAREBRACKET);
        children = readSequence.call(this, recognizer);
        this.scanner.eat(RIGHTSQUAREBRACKET);

        return {
            type: 'Brackets',
            loc: this.getLocation(start, this.scanner.tokenStart),
            children: children
        };
    },
    generate: function(node) {
        return [].concat('[', this.each(node.children), ']');
    }
};

},{"../../tokenizer":88}],34:[function(require,module,exports){
var CDC = require('../../tokenizer').TYPE.CDC;

module.exports = {
    name: 'CDC',
    structure: [],
    parse: function() {
        var start = this.scanner.tokenStart;

        this.scanner.eat(CDC); // -->

        return {
            type: 'CDC',
            loc: this.getLocation(start, this.scanner.tokenStart)
        };
    },
    generate: function() {
        return '-->';
    }
};

},{"../../tokenizer":88}],35:[function(require,module,exports){
var CDO = require('../../tokenizer').TYPE.CDO;

module.exports = {
    name: 'CDO',
    structure: [],
    parse: function() {
        var start = this.scanner.tokenStart;

        this.scanner.eat(CDO); // <!--

        return {
            type: 'CDO',
            loc: this.getLocation(start, this.scanner.tokenStart)
        };
    },
    generate: function() {
        return '<!--';
    }
};

},{"../../tokenizer":88}],36:[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;
var IDENTIFIER = TYPE.Identifier;
var FULLSTOP = TYPE.FullStop;

// '.' ident
module.exports = {
    name: 'ClassSelector',
    structure: {
        name: String
    },
    parse: function() {
        this.scanner.eat(FULLSTOP);

        return {
            type: 'ClassSelector',
            loc: this.getLocation(this.scanner.tokenStart - 1, this.scanner.tokenEnd),
            name: this.scanner.consume(IDENTIFIER)
        };
    },
    generate: function(node) {
        return '.' + node.name;
    }
};

},{"../../tokenizer":88}],37:[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;

var PLUSSIGN = TYPE.PlusSign;
var SOLIDUS = TYPE.Solidus;
var GREATERTHANSIGN = TYPE.GreaterThanSign;
var TILDE = TYPE.Tilde;

// + | > | ~ | /deep/
module.exports = {
    name: 'Combinator',
    structure: {
        name: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;

        switch (this.scanner.tokenType) {
            case GREATERTHANSIGN:
            case PLUSSIGN:
            case TILDE:
                this.scanner.next();
                break;

            case SOLIDUS:
                this.scanner.next();
                this.scanner.expectIdentifier('deep');
                this.scanner.eat(SOLIDUS);
                break;

            default:
                this.scanner.error('Combinator is expected');
        }

        return {
            type: 'Combinator',
            loc: this.getLocation(start, this.scanner.tokenStart),
            name: this.scanner.substrToCursor(start)
        };
    },
    generate: function(node) {
        return node.name;
    }
};

},{"../../tokenizer":88}],38:[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;

var ASTERISK = TYPE.Asterisk;
var SOLIDUS = TYPE.Solidus;

// '/*' .* '*/'
module.exports = {
    name: 'Comment',
    structure: {
        value: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var end = this.scanner.tokenEnd;

        if ((end - start + 2) >= 2 &&
            this.scanner.source.charCodeAt(end - 2) === ASTERISK &&
            this.scanner.source.charCodeAt(end - 1) === SOLIDUS) {
            end -= 2;
        }

        this.scanner.next();

        return {
            type: 'Comment',
            loc: this.getLocation(start, this.scanner.tokenStart),
            value: this.scanner.source.substring(start + 2, end)
        };
    },
    generate: function(node) {
        return '/*' + node.value + '*/';
    }
};

},{"../../tokenizer":88}],39:[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;

var IDENTIFIER = TYPE.Identifier;
var COLON = TYPE.Colon;
var EXCLAMATIONMARK = TYPE.ExclamationMark;
var SOLIDUS = TYPE.Solidus;
var ASTERISK = TYPE.Asterisk;
var DOLLARSIGN = TYPE.DollarSign;
var HYPHENMINUS = TYPE.HyphenMinus;
var SEMICOLON = TYPE.Semicolon;
var RIGHTCURLYBRACKET = TYPE.RightCurlyBracket;
var RIGHTPARENTHESIS = TYPE.RightParenthesis;
var PLUSSIGN = TYPE.PlusSign;
var NUMBERSIGN = TYPE.NumberSign;
var BALANCED = true;

module.exports = {
    name: 'Declaration',
    structure: {
        important: [Boolean, String],
        property: String,
        value: ['Value', 'Raw']
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var property = readProperty.call(this);
        var important = false;
        var value;

        this.scanner.skipSC();
        this.scanner.eat(COLON);

        if (isCustomProperty(property) ? this.parseCustomProperty : this.parseValue) {
            value = this.Value(property);
        } else {
            value = this.Raw(BALANCED, SEMICOLON, EXCLAMATIONMARK);
        }

        if (this.scanner.tokenType === EXCLAMATIONMARK) {
            important = getImportant(this.scanner);
            this.scanner.skipSC();
        }

        // TODO: include or not to include semicolon to range?
        // if (this.scanner.tokenType === SEMICOLON) {
        //     this.scanner.next();
        // }

        if (!this.scanner.eof &&
            this.scanner.tokenType !== SEMICOLON &&
            this.scanner.tokenType !== RIGHTPARENTHESIS &&
            this.scanner.tokenType !== RIGHTCURLYBRACKET) {
            this.scanner.error();
        }

        return {
            type: 'Declaration',
            loc: this.getLocation(start, this.scanner.tokenStart),
            important: important,
            property: property,
            value: value
        };
    },
    generate: function(node, item) {
        var result = [node.property, ':', this.generate(node.value)];

        if (node.important) {
            result.push(node.important === true ? '!important' : '!' + node.important);
        }

        if (item && item.next) {
            result.push(';');
        }

        return result;
    },
    walkContext: 'declaration'
};

function isCustomProperty(name) {
    return name.length >= 2 &&
           name.charCodeAt(0) === HYPHENMINUS &&
           name.charCodeAt(1) === HYPHENMINUS;
}

function readProperty() {
    var start = this.scanner.tokenStart;
    var prefix = 0;

    // hacks
    switch (this.scanner.tokenType) {
        case ASTERISK:
        case DOLLARSIGN:
        case PLUSSIGN:
        case NUMBERSIGN:
            prefix = 1;
            break;

        // TODO: not sure we should support this hack
        case SOLIDUS:
            prefix = this.scanner.lookupType(1) === SOLIDUS ? 2 : 1;
            break;
    }

    if (this.scanner.lookupType(prefix) === HYPHENMINUS) {
        prefix++;
    }

    if (prefix) {
        this.scanner.skip(prefix);
    }

    this.scanner.eat(IDENTIFIER);

    return this.scanner.substrToCursor(start);
}

// ! ws* important
function getImportant(scanner) {
    scanner.eat(EXCLAMATIONMARK);
    scanner.skipSC();

    var important = scanner.consume(IDENTIFIER);

    // store original value in case it differ from `important`
    // for better original source restoring and hacks like `!ie` support
    return important === 'important' ? true : important;
}

},{"../../tokenizer":88}],40:[function(require,module,exports){
var List = require('../../utils/list');
var TYPE = require('../../tokenizer').TYPE;

var WHITESPACE = TYPE.Whitespace;
var COMMENT = TYPE.Comment;
var SEMICOLON = TYPE.Semicolon;

module.exports = {
    name: 'DeclarationList',
    structure: {
        children: [['Declaration']]
    },
    parse: function() {
        var children = new List();

        scan:
        while (!this.scanner.eof) {
            switch (this.scanner.tokenType) {
                case WHITESPACE:
                case COMMENT:
                case SEMICOLON:
                    this.scanner.next();
                    break;

                default:
                    children.appendData(this.Declaration());
            }
        }

        return {
            type: 'DeclarationList',
            loc: this.getLocationFromList(children),
            children: children
        };
    },
    generate: function(node) {
        return this.each(node.children);
    }
};

},{"../../tokenizer":88,"../../utils/list":92}],41:[function(require,module,exports){
var NUMBER = require('../../tokenizer').TYPE.Number;

// special reader for units to avoid adjoined IE hacks (i.e. '1px\9')
function readUnit(scanner) {
    var unit = scanner.getTokenValue();
    var backSlashPos = unit.indexOf('\\');

    if (backSlashPos > 0) {
        // patch token offset
        scanner.tokenStart += backSlashPos;

        // return part before backslash
        return unit.substring(0, backSlashPos);
    }

    // no backslash in unit name
    scanner.next();

    return unit;
}

// number ident
module.exports = {
    name: 'Dimension',
    structure: {
        value: String,
        unit: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var value = this.scanner.consume(NUMBER);
        var unit = readUnit(this.scanner);

        return {
            type: 'Dimension',
            loc: this.getLocation(start, this.scanner.tokenStart),
            value: value,
            unit: unit
        };
    },
    generate: function(node) {
        return node.value + node.unit;
    }
};

},{"../../tokenizer":88}],42:[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;

var IDENTIFIER = TYPE.Identifier;
var LEFTPARENTHESIS = TYPE.LeftParenthesis;
var RIGHTPARENTHESIS = TYPE.RightParenthesis;

// ident '(' <sequence> ')'
module.exports = {
    name: 'Function',
    structure: {
        name: String,
        children: [[]]
    },
    parse: function(readSequence, recognizer) {
        var start = this.scanner.tokenStart;
        var name = this.scanner.consume(IDENTIFIER);
        var nameLowerCase = name.toLowerCase();
        var children;

        this.scanner.eat(LEFTPARENTHESIS);

        children = recognizer.hasOwnProperty(nameLowerCase)
            ? recognizer[nameLowerCase].call(this, recognizer)
            : readSequence.call(this, recognizer);

        this.scanner.eat(RIGHTPARENTHESIS);

        return {
            type: 'Function',
            loc: this.getLocation(start, this.scanner.tokenStart),
            name: name,
            children: children
        };
    },
    generate: function(node) {
        return [].concat(node.name + '(', this.each(node.children), ')');
    },
    walkContext: 'function'
};

},{"../../tokenizer":88}],43:[function(require,module,exports){
var isHex = require('../../tokenizer').isHex;
var TYPE = require('../../tokenizer').TYPE;

var IDENTIFIER = TYPE.Identifier;
var NUMBER = TYPE.Number;
var NUMBERSIGN = TYPE.NumberSign;

function consumeHexSequence(scanner, required) {
    if (!isHex(scanner.source.charCodeAt(scanner.tokenStart))) {
        if (required) {
            scanner.error('Unexpected input', scanner.tokenStart);
        } else {
            return;
        }
    }

    for (var pos = scanner.tokenStart + 1; pos < scanner.tokenEnd; pos++) {
        var code = scanner.source.charCodeAt(pos);

        // break on non-hex char
        if (!isHex(code)) {
            // break token, exclude symbol
            scanner.tokenStart = pos;
            return;
        }
    }

    // token is full hex sequence, go to next token
    scanner.next();
}

// # ident
module.exports = {
    name: 'HexColor',
    structure: {
        value: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;

        this.scanner.eat(NUMBERSIGN);

        scan:
        switch (this.scanner.tokenType) {
            case NUMBER:
                consumeHexSequence(this.scanner, true);

                // if token is identifier then number consists of hex only,
                // try to add identifier to result
                if (this.scanner.tokenType === IDENTIFIER) {
                    consumeHexSequence(this.scanner, false);
                }

                break;

            case IDENTIFIER:
                consumeHexSequence(this.scanner, true);
                break;

            default:
                this.scanner.error('Number or identifier is expected');
        }

        return {
            type: 'HexColor',
            loc: this.getLocation(start, this.scanner.tokenStart),
            value: this.scanner.substrToCursor(start + 1) // skip #
        };
    },
    generate: function(node) {
        return '#' + node.value;
    }
};

},{"../../tokenizer":88}],44:[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;
var IDENTIFIER = TYPE.Identifier;
var NUMBERSIGN = TYPE.NumberSign;

// '#' ident
module.exports = {
    name: 'IdSelector',
    structure: {
        name: String
    },
    parse: function() {
        this.scanner.eat(NUMBERSIGN);

        return {
            type: 'IdSelector',
            loc: this.getLocation(this.scanner.tokenStart - 1, this.scanner.tokenEnd),
            name: this.scanner.consume(IDENTIFIER)
        };
    },
    generate: function(node) {
        return '#' + node.name;
    }
};

},{"../../tokenizer":88}],45:[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;
var IDENTIFIER = TYPE.Identifier;

module.exports = {
    name: 'Identifier',
    structure: {
        name: String
    },
    parse: function() {
        return {
            type: 'Identifier',
            loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
            name: this.scanner.consume(IDENTIFIER)
        };
    },
    generate: function(node) {
        return node.name;
    }
};

},{"../../tokenizer":88}],46:[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;

var IDENTIFIER = TYPE.Identifier;
var NUMBER = TYPE.Number;
var LEFTPARENTHESIS = TYPE.LeftParenthesis;
var RIGHTPARENTHESIS = TYPE.RightParenthesis;
var COLON = TYPE.Colon;
var SOLIDUS = TYPE.Solidus;

module.exports = {
    name: 'MediaFeature',
    structure: {
        name: String,
        value: ['Identifier', 'Number', 'Dimension', 'Ratio', null]
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var name;
        var value = null;

        this.scanner.eat(LEFTPARENTHESIS);
        this.scanner.skipSC();

        name = this.scanner.consume(IDENTIFIER);
        this.scanner.skipSC();

        if (this.scanner.tokenType !== RIGHTPARENTHESIS) {
            this.scanner.eat(COLON);
            this.scanner.skipSC();

            switch (this.scanner.tokenType) {
                case NUMBER:
                    if (this.scanner.lookupType(1) === IDENTIFIER) {
                        value = this.Dimension();
                    } else if (this.scanner.lookupNonWSType(1) === SOLIDUS) {
                        value = this.Ratio();
                    } else {
                        value = this.Number();
                    }

                    break;

                case IDENTIFIER:
                    value = this.Identifier();

                    break;

                default:
                    this.scanner.error('Number, dimension, ratio or identifier is expected');
            }

            this.scanner.skipSC();
        }

        this.scanner.eat(RIGHTPARENTHESIS);

        return {
            type: 'MediaFeature',
            loc: this.getLocation(start, this.scanner.tokenStart),
            name: name,
            value: value
        };
    },
    generate: function(node) {
        return node.value !== null
            ? ['(', node.name, ':', this.generate(node.value), ')']
            : ['(', node.name, ')'];
    }
};

},{"../../tokenizer":88}],47:[function(require,module,exports){
var List = require('../../utils/list');
var TYPE = require('../../tokenizer').TYPE;

var WHITESPACE = TYPE.Whitespace;
var COMMENT = TYPE.Comment;
var IDENTIFIER = TYPE.Identifier;
var LEFTPARENTHESIS = TYPE.LeftParenthesis;

module.exports = {
    name: 'MediaQuery',
    structure: {
        children: [['Identifier', 'MediaFeature', 'WhiteSpace']]
    },
    parse: function() {
        this.scanner.skipSC();

        var children = new List();
        var child = null;
        var space = null;

        scan:
        while (!this.scanner.eof) {
            switch (this.scanner.tokenType) {
                case COMMENT:
                    this.scanner.next();
                    continue;

                case WHITESPACE:
                    space = this.WhiteSpace();
                    continue;

                case IDENTIFIER:
                    child = this.Identifier();
                    break;

                case LEFTPARENTHESIS:
                    child = this.MediaFeature();
                    break;

                default:
                    break scan;
            }

            if (space !== null) {
                children.appendData(space);
                space = null;
            }

            children.appendData(child);
        }

        if (child === null) {
            this.scanner.error('Identifier or parenthesis is expected');
        }

        return {
            type: 'MediaQuery',
            loc: this.getLocationFromList(children),
            children: children
        };
    },
    generate: function(node) {
        return this.each(node.children);
    }
};

},{"../../tokenizer":88,"../../utils/list":92}],48:[function(require,module,exports){
var List = require('../../utils/list');
var COMMA = require('../../tokenizer').TYPE.Comma;

module.exports = {
    name: 'MediaQueryList',
    structure: {
        children: [['MediaQuery']]
    },
    parse: function(relative) {
        var children = new List();

        this.scanner.skipSC();

        while (!this.scanner.eof) {
            children.appendData(this.MediaQuery(relative));

            if (this.scanner.tokenType !== COMMA) {
                break;
            }

            this.scanner.next();
        }

        return {
            type: 'MediaQueryList',
            loc: this.getLocationFromList(children),
            children: children
        };
    },
    generate: function(node) {
        return this.eachComma(node.children);
    }
};

},{"../../tokenizer":88,"../../utils/list":92}],49:[function(require,module,exports){
// https://drafts.csswg.org/css-syntax-3/#the-anb-type
module.exports = {
    name: 'Nth',
    structure: {
        nth: ['AnPlusB', 'Identifier'],
        selector: ['SelectorList', null]
    },
    parse: function(allowOfClause) {
        this.scanner.skipSC();

        var start = this.scanner.tokenStart;
        var end = start;
        var selector = null;
        var query;

        if (this.scanner.lookupValue(0, 'odd') || this.scanner.lookupValue(0, 'even')) {
            query = this.Identifier();
        } else {
            query = this.AnPlusB();
        }

        this.scanner.skipSC();

        if (allowOfClause && this.scanner.lookupValue(0, 'of')) {
            this.scanner.next();

            selector = this.SelectorList();

            if (this.needPositions) {
                end = selector.children.last().loc.end.offset;
            }
        } else {
            if (this.needPositions) {
                end = query.loc.end.offset;
            }
        }

        return {
            type: 'Nth',
            loc: this.getLocation(start, end),
            nth: query,
            selector: selector
        };
    },
    generate: function(node) {
        return node.selector !== null
            ? [this.generate(node.nth), ' of ', this.generate(node.selector)]
            : [this.generate(node.nth)];
    }
};

},{}],50:[function(require,module,exports){
var NUMBER = require('../../tokenizer').TYPE.Number;

module.exports = {
    name: 'Number',
    structure: {
        value: String
    },
    parse: function() {
        return {
            type: 'Number',
            loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
            value: this.scanner.consume(NUMBER)
        };
    },
    generate: function(node) {
        return node.value;
    }
};

},{"../../tokenizer":88}],51:[function(require,module,exports){
// '/' | '*' | ',' | ':' | '+' | '-'
module.exports = {
    name: 'Operator',
    structure: {
        value: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;

        this.scanner.next();

        return {
            type: 'Operator',
            loc: this.getLocation(start, this.scanner.tokenStart),
            value: this.scanner.substrToCursor(start)
        };
    },
    generate: function(node) {
        return node.value;
    }
};

},{}],52:[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;
var LEFTPARENTHESIS = TYPE.LeftParenthesis;
var RIGHTPARENTHESIS = TYPE.RightParenthesis;

module.exports = {
    name: 'Parentheses',
    structure: {
        children: [[]]
    },
    parse: function(readSequence, recognizer) {
        var start = this.scanner.tokenStart;
        var children = null;

        this.scanner.eat(LEFTPARENTHESIS);
        children = readSequence.call(this, recognizer);
        this.scanner.eat(RIGHTPARENTHESIS);

        return {
            type: 'Parentheses',
            loc: this.getLocation(start, this.scanner.tokenStart),
            children: children
        };
    },
    generate: function(node) {
        return [].concat('(', this.each(node.children), ')');
    }
};

},{"../../tokenizer":88}],53:[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;

var NUMBER = TYPE.Number;
var PERCENTSIGN = TYPE.PercentSign;

module.exports = {
    name: 'Percentage',
    structure: {
        value: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var number = this.scanner.consume(NUMBER);

        this.scanner.eat(PERCENTSIGN);

        return {
            type: 'Percentage',
            loc: this.getLocation(start, this.scanner.tokenStart),
            value: number
        };
    },
    generate: function(node) {
        return node.value + '%';
    }
};

},{"../../tokenizer":88}],54:[function(require,module,exports){
var List = require('../../utils/list');
var TYPE = require('../../tokenizer').TYPE;

var IDENTIFIER = TYPE.Identifier;
var COLON = TYPE.Colon;
var LEFTPARENTHESIS = TYPE.LeftParenthesis;
var RIGHTPARENTHESIS = TYPE.RightParenthesis;
var BALANCED = true;

// : ident [ '(' .. ')' ]?
module.exports = {
    name: 'PseudoClassSelector',
    structure: {
        name: String,
        children: [['Raw'], null]
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var name;
        var children = null;

        this.scanner.eat(COLON);

        name = this.scanner.consume(IDENTIFIER);

        if (this.scanner.tokenType === LEFTPARENTHESIS) {
            var nameLowerCase = name.toLowerCase();

            this.scanner.next();

            if (this.pseudo.hasOwnProperty(nameLowerCase)) {
                this.scanner.skipSC();
                children = this.pseudo[nameLowerCase].call(this);
                this.scanner.skipSC();
            } else {
                children = new List().appendData(this.Raw(BALANCED, 0, 0));
            }

            this.scanner.eat(RIGHTPARENTHESIS);
        }

        return {
            type: 'PseudoClassSelector',
            loc: this.getLocation(start, this.scanner.tokenStart),
            name: name,
            children: children
        };
    },
    generate: function(node) {
        return node.children !== null
            ? [].concat(':' + node.name + '(', this.each(node.children), ')')
            : ':' + node.name;
    },
    walkContext: 'function'
};

},{"../../tokenizer":88,"../../utils/list":92}],55:[function(require,module,exports){
var List = require('../../utils/list');
var TYPE = require('../../tokenizer').TYPE;

var IDENTIFIER = TYPE.Identifier;
var COLON = TYPE.Colon;
var LEFTPARENTHESIS = TYPE.LeftParenthesis;
var RIGHTPARENTHESIS = TYPE.RightParenthesis;
var BALANCED = true;

// :: ident [ '(' .. ')' ]?
module.exports = {
    name: 'PseudoElementSelector',
    structure: {
        name: String,
        children: [['Raw'], null]
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var name;
        var children = null;

        this.scanner.eat(COLON);
        this.scanner.eat(COLON);

        name = this.scanner.consume(IDENTIFIER);

        if (this.scanner.tokenType === LEFTPARENTHESIS) {
            var nameLowerCase = name.toLowerCase();

            this.scanner.next();

            if (this.pseudo.hasOwnProperty(nameLowerCase)) {
                this.scanner.skipSC();
                children = this.pseudo[nameLowerCase].call(this);
                this.scanner.skipSC();
            } else {
                children = new List().appendData(this.Raw(BALANCED, 0, 0));
            }

            this.scanner.eat(RIGHTPARENTHESIS);
        }

        return {
            type: 'PseudoElementSelector',
            loc: this.getLocation(start, this.scanner.tokenStart),
            name: name,
            children: children
        };
    },
    generate: function(node) {
        return node.children !== null
            ? [].concat('::' + node.name + '(', this.each(node.children), ')')
            : '::' + node.name;
    },
    walkContext: 'function'
};

},{"../../tokenizer":88,"../../utils/list":92}],56:[function(require,module,exports){
var isNumber = require('../../tokenizer').isNumber;
var TYPE = require('../../tokenizer').TYPE;
var NUMBER = TYPE.Number;
var SOLIDUS = TYPE.Solidus;
var FULLSTOP = TYPE.FullStop;

// Terms of <ratio> should to be a positive number (not zero or negative)
// (see https://drafts.csswg.org/mediaqueries-3/#values)
// However, -o-min-device-pixel-ratio takes fractional values as a ratio's term
// and this is using by various sites. Therefore we relax checking on parse
// to test a term is unsigned number without exponent part.
// Additional checks may to be applied on lexer validation.
function consumeNumber(scanner) {
    var value = scanner.consumeNonWS(NUMBER);

    for (var i = 0; i < value.length; i++) {
        var code = value.charCodeAt(i);
        if (!isNumber(code) && code !== FULLSTOP) {
            scanner.error('Unsigned number is expected', scanner.tokenStart - value.length + i);
        }
    }

    if (Number(value) === 0) {
        scanner.error('Zero number is not allowed', scanner.tokenStart - value.length);
    }

    return value;
}

// <positive-integer> S* '/' S* <positive-integer>
module.exports = {
    name: 'Ratio',
    structure: {
        left: String,
        right: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var left = consumeNumber(this.scanner);
        var right;

        this.scanner.eatNonWS(SOLIDUS);
        right = consumeNumber(this.scanner);

        return {
            type: 'Ratio',
            loc: this.getLocation(start, this.scanner.tokenStart),
            left: left,
            right: right
        };
    },
    generate: function(node) {
        return [node.left, '/', node.right];
    }
};

},{"../../tokenizer":88}],57:[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;

var WHITESPACE = TYPE.Whitespace;
var LEFTPARENTHESIS = TYPE.LeftParenthesis;
var RIGHTPARENTHESIS = TYPE.RightParenthesis;
var LEFTCURLYBRACKET = TYPE.LeftCurlyBracket;
var RIGHTCURLYBRACKET = TYPE.RightCurlyBracket;
var LEFTSQUAREBRACKET = TYPE.LeftSquareBracket;
var RIGHTSQUAREBRACKET = TYPE.RightSquareBracket;

module.exports = {
    name: 'Raw',
    structure: {
        value: String
    },
    parse: function(balanced, endTokenType1, endTokenType2) {
        var start = this.scanner.tokenStart;
        var stack = [];
        var popType = 0;
        var type = 0;

        if (balanced) {
            scan:
            for (var i = 0; type = this.scanner.lookupType(i); i++) {
                if (popType === 0) {
                    if (type === endTokenType1 ||
                        type === endTokenType2) {
                        break scan;
                    }
                }

                switch (type) {
                    case popType:
                        popType = stack.pop();
                        break;

                    case RIGHTPARENTHESIS:
                    case RIGHTCURLYBRACKET:
                    case RIGHTSQUAREBRACKET:
                        if (popType !== 0) {
                            this.scanner.skip(i);
                            this.scanner.error();
                        }
                        break scan;

                    case LEFTPARENTHESIS:
                        stack.push(popType);
                        popType = RIGHTPARENTHESIS;
                        break;

                    case LEFTCURLYBRACKET:
                        stack.push(popType);
                        popType = RIGHTCURLYBRACKET;
                        break;

                    case LEFTSQUAREBRACKET:
                        stack.push(popType);
                        popType = RIGHTSQUAREBRACKET;
                        break;
                }
            }
        } else {
            for (var i = 0; type = this.scanner.lookupType(i); i++) {
                if (type === WHITESPACE ||
                    type === endTokenType1 ||
                    type === endTokenType2) {
                    break;
                }
            }
        }

        this.scanner.skip(i);

        if (popType !== 0) {
            this.scanner.eat(popType);
        }

        return {
            type: 'Raw',
            loc: this.getLocation(start, this.scanner.tokenStart),
            value: this.scanner.substrToCursor(start)
        };
    },
    generate: function(node) {
        return node.value;
    }
};

},{"../../tokenizer":88}],58:[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;
var LEFTCURLYBRACKET = TYPE.LeftCurlyBracket;
var BALANCED = true;

module.exports = {
    name: 'Rule',
    structure: {
        selector: ['SelectorList', 'Raw'],
        block: ['Block']
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var selector = this.parseSelector ? this.SelectorList() : this.Raw(BALANCED, LEFTCURLYBRACKET, 0);
        var block = this.Block(this.Declaration);

        return {
            type: 'Rule',
            loc: this.getLocation(start, this.scanner.tokenStart),
            selector: selector,
            block: block
        };
    },
    generate: function(node) {
        return [
            this.generate(node.selector),
            this.generate(node.block)
        ];
    },
    walkContext: 'rule'
};

},{"../../tokenizer":88}],59:[function(require,module,exports){
module.exports = {
    name: 'Selector',
    structure: {
        children: [[
            'TypeSelector',
            'IdSelector',
            'ClassSelector',
            'AttributeSelector',
            'PseudoClassSelector',
            'PseudoElementSelector',
            'Combinator',
            'WhiteSpace'
        ]]
    },
    parse: function() {
        var children = this.readSequence(this.scope.Selector);

        // nothing were consumed
        if (children.isEmpty()) {
            this.scanner.error('Selector is expected');
        }

        return {
            type: 'Selector',
            loc: this.getLocationFromList(children),
            children: children
        };
    },
    generate: function(node) {
        return this.each(node.children);
    }
};

},{}],60:[function(require,module,exports){
var List = require('../../utils/list');
var TYPE = require('../../tokenizer').TYPE;

var COMMA = TYPE.Comma;
var LEFTCURLYBRACKET = TYPE.LeftCurlyBracket;
var BALANCED = true;

module.exports = {
    name: 'SelectorList',
    structure: {
        children: [['Selector']]
    },
    parse: function() {
        var children = new List();

        while (!this.scanner.eof) {
            children.appendData(this.parseSelector
                ? this.Selector()
                : this.Raw(BALANCED, COMMA, LEFTCURLYBRACKET)
            );

            if (this.scanner.tokenType === COMMA) {
                this.scanner.next();
                continue;
            }

            break;
        }

        return {
            type: 'SelectorList',
            loc: this.getLocationFromList(children),
            children: children
        };
    },
    generate: function(node) {
        return this.eachComma(node.children);
    },
    walkContext: 'selector'
};

},{"../../tokenizer":88,"../../utils/list":92}],61:[function(require,module,exports){
var STRING = require('../../tokenizer').TYPE.String;

module.exports = {
    name: 'String',
    structure: {
        value: String
    },
    parse: function() {
        return {
            type: 'String',
            loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
            value: this.scanner.consume(STRING)
        };
    },
    generate: function(node) {
        return node.value;
    }
};

},{"../../tokenizer":88}],62:[function(require,module,exports){
var List = require('../../utils/list');
var TYPE = require('../../tokenizer').TYPE;

var WHITESPACE = TYPE.Whitespace;
var COMMENT = TYPE.Comment;
var EXCLAMATIONMARK = TYPE.ExclamationMark;
var COMMERCIALAT = TYPE.CommercialAt;
var CDO = TYPE.CDO;
var CDC = TYPE.CDC;

module.exports = {
    name: 'StyleSheet',
    structure: {
        children: [['Comment', 'Atrule', 'Rule']]
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var children = new List();
        var child;

        scan:
        while (!this.scanner.eof) {
            switch (this.scanner.tokenType) {
                case WHITESPACE:
                    this.scanner.next();
                    continue;

                case COMMENT:
                    // ignore comments except exclamation comments (i.e. /*! .. */) on top level
                    if (this.scanner.source.charCodeAt(this.scanner.tokenStart + 2) !== EXCLAMATIONMARK) {
                        this.scanner.next();
                        continue;
                    }

                    child = this.Comment();
                    break;

                case COMMERCIALAT:
                    child = this.Atrule();
                    break;

                case CDO: // <!--
                    child = this.CDO();
                    break;

                case CDC: // -->
                    child = this.CDC();
                    break;

                default:
                    child = this.Rule();
            }

            children.appendData(child);
        }

        return {
            type: 'StyleSheet',
            loc: this.getLocation(start, this.scanner.tokenStart),
            children: children
        };
    },
    generate: function(node) {
        return this.each(node.children);
    },
    walkContext: 'stylesheet'
};

},{"../../tokenizer":88,"../../utils/list":92}],63:[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;

var IDENTIFIER = TYPE.Identifier;
var ASTERISK = TYPE.Asterisk;
var VERTICALLINE = TYPE.VerticalLine;

function eatIdentifierOrAsterisk() {
    if (this.scanner.tokenType !== IDENTIFIER &&
        this.scanner.tokenType !== ASTERISK) {
        this.scanner.error('Identifier or asterisk is expected');
    }

    this.scanner.next();
}

// ident
// ident|ident
// ident|*
// *
// *|ident
// *|*
// |ident
// |*
module.exports = {
    name: 'TypeSelector',
    structure: {
        name: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;

        if (this.scanner.tokenType === VERTICALLINE) {
            this.scanner.next();
            eatIdentifierOrAsterisk.call(this);
        } else {
            eatIdentifierOrAsterisk.call(this);

            if (this.scanner.tokenType === VERTICALLINE) {
                this.scanner.next();
                eatIdentifierOrAsterisk.call(this);
            }
        }

        return {
            type: 'TypeSelector',
            loc: this.getLocation(start, this.scanner.tokenStart),
            name: this.scanner.substrToCursor(start)
        };
    },
    generate: function(node) {
        return node.name;
    }
};

},{"../../tokenizer":88}],64:[function(require,module,exports){
var isHex = require('../../tokenizer').isHex;
var TYPE = require('../../tokenizer').TYPE;

var IDENTIFIER = TYPE.Identifier;
var NUMBER = TYPE.Number;
var PLUSSIGN = TYPE.PlusSign;
var HYPHENMINUS = TYPE.HyphenMinus;
var FULLSTOP = TYPE.FullStop;
var QUESTIONMARK = TYPE.QuestionMark;

function scanUnicodeNumber(scanner) {
    for (var pos = scanner.tokenStart + 1; pos < scanner.tokenEnd; pos++) {
        var code = scanner.source.charCodeAt(pos);

        // break on fullstop or hyperminus/plussign after exponent
        if (code === FULLSTOP || code === PLUSSIGN) {
            // break token, exclude symbol
            scanner.tokenStart = pos;
            return false;
        }
    }

    return true;
}

// https://drafts.csswg.org/css-syntax-3/#urange
function scanUnicodeRange(scanner) {
    var hexStart = scanner.tokenStart + 1; // skip +
    var hexLength = 0;

    scan: {
        if (scanner.tokenType === NUMBER) {
            if (scanner.source.charCodeAt(scanner.tokenStart) !== FULLSTOP && scanUnicodeNumber(scanner)) {
                scanner.next();
            } else if (scanner.source.charCodeAt(scanner.tokenStart) !== HYPHENMINUS) {
                break scan;
            }
        } else {
            scanner.next(); // PLUSSIGN
        }

        if (scanner.tokenType === HYPHENMINUS) {
            scanner.next();
        }

        if (scanner.tokenType === NUMBER) {
            scanner.next();
        }

        if (scanner.tokenType === IDENTIFIER) {
            scanner.next();
        }

        if (scanner.tokenStart === hexStart) {
            scanner.error('Unexpected input', hexStart);
        }
    }

    // validate for U+x{1,6} or U+x{1,6}-x{1,6}
    // where x is [0-9a-fA-F]
    for (var i = hexStart, wasHyphenMinus = false; i < scanner.tokenStart; i++) {
        var code = scanner.source.charCodeAt(i);

        if (isHex(code) === false && (code !== HYPHENMINUS || wasHyphenMinus)) {
            scanner.error('Unexpected input', i);
        }

        if (code === HYPHENMINUS) {
            // hex sequence shouldn't be an empty
            if (hexLength === 0) {
                scanner.error('Unexpected input', i);
            }

            wasHyphenMinus = true;
            hexLength = 0;
        } else {
            hexLength++;

            // too long hex sequence
            if (hexLength > 6) {
                scanner.error('Too long hex sequence', i);
            }
        }

    }

    // check we have a non-zero sequence
    if (hexLength === 0) {
        scanner.error('Unexpected input', i - 1);
    }

    // U+abc???
    if (!wasHyphenMinus) {
        // consume as many U+003F QUESTION MARK (?) code points as possible
        for (; hexLength < 6 && !scanner.eof; scanner.next()) {
            if (scanner.tokenType !== QUESTIONMARK) {
                break;
            }

            hexLength++;
        }
    }
}

module.exports = {
    name: 'UnicodeRange',
    structure: {
        value: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;

        this.scanner.next(); // U or u
        scanUnicodeRange(this.scanner);

        return {
            type: 'UnicodeRange',
            loc: this.getLocation(start, this.scanner.tokenStart),
            value: this.scanner.substrToCursor(start)
        };
    },
    generate: function(node) {
        return node.value;
    }
};

},{"../../tokenizer":88}],65:[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;

var STRING = TYPE.String;
var LEFTPARENTHESIS = TYPE.LeftParenthesis;
var RIGHTPARENTHESIS = TYPE.RightParenthesis;
var NONBALANCED = false;

// url '(' S* (string | raw) S* ')'
module.exports = {
    name: 'Url',
    structure: {
        value: ['String', 'Raw']
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var value;

        this.scanner.expectIdentifier('url');
        this.scanner.eat(LEFTPARENTHESIS);
        this.scanner.skipSC();

        if (this.scanner.tokenType === STRING) {
            value = this.String();
        } else {
            value = this.Raw(NONBALANCED, LEFTPARENTHESIS, RIGHTPARENTHESIS);
        }

        this.scanner.skipSC();
        this.scanner.eat(RIGHTPARENTHESIS);

        return {
            type: 'Url',
            loc: this.getLocation(start, this.scanner.tokenStart),
            value: value
        };
    },
    generate: function(node) {
        return ['url(', this.generate(node.value), ')'];
    }
};

},{"../../tokenizer":88}],66:[function(require,module,exports){
var endsWith = require('../../tokenizer').endsWith;
var TYPE = require('../../tokenizer').TYPE;

var WHITESPACE = TYPE.Whitespace;
var COMMENT = TYPE.Comment;
var LEFTPARENTHESIS = TYPE.LeftParenthesis;
var COLON = TYPE.Colon;
var SEMICOLON = TYPE.Semicolon;
var EXCLAMATIONMARK = TYPE.ExclamationMark;
var BALANCED = true;

// 'progid:' ws* 'DXImageTransform.Microsoft.' ident ws* '(' .* ')'
function checkProgid(scanner) {
    var offset = 0;

    for (var type; type = scanner.lookupType(offset); offset++) {
        if (type !== WHITESPACE && type !== COMMENT) {
            break;
        }
    }

    if (scanner.lookupValue(offset, 'alpha') ||
        scanner.lookupValue(offset, 'chroma') ||
        scanner.lookupValue(offset, 'dropshadow')) {
        if (scanner.lookupType(offset + 1) !== LEFTPARENTHESIS) {
            return false;
        }
    } else {
        if (scanner.lookupValue(offset, 'progid') === false ||
            scanner.lookupType(offset + 1) !== COLON) {
            return false;
        }
    }

    return true;
}

module.exports = {
    name: 'Value',
    structure: {
        children: [[]]
    },
    parse: function(property) {
        // special parser for filter property since it can contains non-standart syntax for old IE
        if (property !== null && endsWith(property, 'filter') && checkProgid(this.scanner)) {
            this.scanner.skipSC();
            return this.Raw(BALANCED, SEMICOLON, EXCLAMATIONMARK);
        }

        var start = this.scanner.tokenStart;
        var children = this.readSequence(this.scope.Value);

        return {
            type: 'Value',
            loc: this.getLocation(start, this.scanner.tokenStart),
            children: children
        };
    },
    generate: function(node) {
        return this.each(node.children);
    }
};

},{"../../tokenizer":88}],67:[function(require,module,exports){
var WHITESPACE = require('../../tokenizer').TYPE.Whitespace;
var SPACE = Object.freeze({
    type: 'WhiteSpace',
    loc: null,
    value: ' '
});

module.exports = {
    name: 'WhiteSpace',
    structure: {
        value: String
    },
    parse: function() {
        this.scanner.eat(WHITESPACE);
        return SPACE;

        // return {
        //     type: 'WhiteSpace',
        //     loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
        //     value: this.scanner.consume(WHITESPACE)
        // };
    },
    generate: function(node) {
        return node.value;
    }
};

},{"../../tokenizer":88}],68:[function(require,module,exports){
var List = require('../../../utils/list');
var DISALLOW_OF_CLAUSE = false;

module.exports = {
    parse: function nth() {
        return new List().appendData(
            this.Nth(DISALLOW_OF_CLAUSE)
        );
    }
};

},{"../../../utils/list":92}],69:[function(require,module,exports){
var List = require('../../../utils/list');
var ALLOW_OF_CLAUSE = true;

module.exports = {
    parse: function() {
        return new List().appendData(
            this.Nth(ALLOW_OF_CLAUSE)
        );
    }
};

},{"../../../utils/list":92}],70:[function(require,module,exports){
var List = require('../../../utils/list');

module.exports = {
    parse: function selectorList() {
        return new List().appendData(
            this.SelectorList()
        );
    }
};

},{"../../../utils/list":92}],71:[function(require,module,exports){
var List = require('../../utils/list');

module.exports = {
    parse: function() {
        return new List().appendData(
            this.Identifier()
        );
    }
};

},{"../../utils/list":92}],72:[function(require,module,exports){
var List = require('../../utils/list');

module.exports = {
    parse: function() {
        return new List().appendData(
            this.SelectorList()
        );
    }
};

},{"../../utils/list":92}],73:[function(require,module,exports){
arguments[4][71][0].apply(exports,arguments)
},{"../../utils/list":92,"dup":71}],74:[function(require,module,exports){
module.exports = require('./common/selectorList');

},{"./common/selectorList":70}],75:[function(require,module,exports){
arguments[4][74][0].apply(exports,arguments)
},{"./common/selectorList":70,"dup":74}],76:[function(require,module,exports){
module.exports = require('./common/nthWithOfClause');

},{"./common/nthWithOfClause":69}],77:[function(require,module,exports){
arguments[4][76][0].apply(exports,arguments)
},{"./common/nthWithOfClause":69,"dup":76}],78:[function(require,module,exports){
module.exports = require('./common/nth');

},{"./common/nth":68}],79:[function(require,module,exports){
arguments[4][78][0].apply(exports,arguments)
},{"./common/nth":68,"dup":78}],80:[function(require,module,exports){
var List = require('../../utils/list');

module.exports = {
    parse: function compoundSelector() {
        return new List().appendData(
            this.Selector()
        );
    }
};

},{"../../utils/list":92}],81:[function(require,module,exports){
module.exports = {
    getNode: require('./default')
};

},{"./default":82}],82:[function(require,module,exports){
var cmpChar = require('../../tokenizer').cmpChar;
var TYPE = require('../../tokenizer').TYPE;

var IDENTIFIER = TYPE.Identifier;
var STRING = TYPE.String;
var NUMBER = TYPE.Number;
var NUMBERSIGN = TYPE.NumberSign;
var LEFTPARENTHESIS = TYPE.LeftParenthesis;
var LEFTSQUAREBRACKET = TYPE.LeftSquareBracket;
var PLUSSIGN = TYPE.PlusSign;
var HYPHENMINUS = TYPE.HyphenMinus;
var COMMA = TYPE.Comma;
var SOLIDUS = TYPE.Solidus;
var ASTERISK = TYPE.Asterisk;
var PERCENTSIGN = TYPE.PercentSign;
var BACKSLASH = TYPE.Backslash;
var U = 117; // 'u'.charCodeAt(0)

module.exports = function defaultRecognizer(context) {
    switch (this.scanner.tokenType) {
        case NUMBERSIGN:
            return this.HexColor();

        case COMMA:
            context.space = null;
            context.ignoreWSAfter = true;
            return this.Operator();

        case SOLIDUS:
        case ASTERISK:
        case PLUSSIGN:
        case HYPHENMINUS:
            return this.Operator();

        case LEFTPARENTHESIS:
            return this.Parentheses(this.readSequence, context.recognizer);

        case LEFTSQUAREBRACKET:
            return this.Brackets(this.readSequence, context.recognizer);

        case STRING:
            return this.String();

        case NUMBER:
            switch (this.scanner.lookupType(1)) {
                case PERCENTSIGN:
                    return this.Percentage();

                case IDENTIFIER:
                    // edge case: number with folowing \0 and \9 hack shouldn't to be a Dimension
                    if (cmpChar(this.scanner.source, this.scanner.tokenEnd, BACKSLASH)) {
                        return this.Number();
                    } else {
                        return this.Dimension();
                    }

                default:
                    return this.Number();
            }

        case IDENTIFIER:
            // check for unicode range, it should start with u+ or U+
            if (cmpChar(this.scanner.source, this.scanner.tokenStart, U) &&
                cmpChar(this.scanner.source, this.scanner.tokenStart + 1, PLUSSIGN)) {
                return this.UnicodeRange();
            } else if (this.scanner.lookupType(1) === LEFTPARENTHESIS) {
                if (this.scanner.lookupValue(0, 'url')) {
                    return this.Url();
                } else {
                    return this.Function(this.readSequence, context.recognizer);
                }
            } else {
                return this.Identifier();
            }
    }
};

},{"../../tokenizer":88}],83:[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;

var IDENTIFIER = TYPE.Identifier;
var NUMBER = TYPE.Number;
var NUMBERSIGN = TYPE.NumberSign;
var LEFTSQUAREBRACKET = TYPE.LeftSquareBracket;
var PLUSSIGN = TYPE.PlusSign;
var SOLIDUS = TYPE.Solidus;
var ASTERISK = TYPE.Asterisk;
var FULLSTOP = TYPE.FullStop;
var COLON = TYPE.Colon;
var GREATERTHANSIGN = TYPE.GreaterThanSign;
var VERTICALLINE = TYPE.VerticalLine;
var TILDE = TYPE.Tilde;

function getNode(context) {
    switch (this.scanner.tokenType) {
        case PLUSSIGN:
        case GREATERTHANSIGN:
        case TILDE:
            context.space = null;
            context.ignoreWSAfter = true;
            return this.Combinator();

        case SOLIDUS:  // /deep/
            return this.Combinator();

        case FULLSTOP:
            return this.ClassSelector();

        case LEFTSQUAREBRACKET:
            return this.AttributeSelector();

        case NUMBERSIGN:
            return this.IdSelector();

        case COLON:
            if (this.scanner.lookupType(1) === COLON) {
                return this.PseudoElementSelector();
            } else {
                return this.PseudoClassSelector();
            }

        case IDENTIFIER:
        case ASTERISK:
        case VERTICALLINE:
            return this.TypeSelector();

        case NUMBER:
            return this.Percentage();
    }
};

module.exports = {
    getNode: getNode
};

},{"../../tokenizer":88}],84:[function(require,module,exports){
module.exports = {
    getNode: require('./default'),
    '-moz-element': require('../function/element'),
    'element': require('../function/element'),
    'expression': require('../function/expression'),
    'var': require('../function/var')
};

},{"../function/element":23,"../function/expression":24,"../function/var":25,"./default":82}],85:[function(require,module,exports){
'use strict';

var CssSyntaxError = require('./error');

var constants = require('./const');
var TYPE = constants.TYPE;
var NAME = constants.NAME;
var SYMBOL_TYPE = constants.SYMBOL_TYPE;
var SYMBOL_TYPE_LENGTH = SYMBOL_TYPE.length;

var utils = require('./utils');
var firstCharOffset = utils.firstCharOffset;
var cmpStr = utils.cmpStr;
var isNumber = utils.isNumber;
var findLastNonSpaceLocation = utils.findLastNonSpaceLocation;
var findWhitespaceEnd = utils.findWhitespaceEnd;
var findCommentEnd = utils.findCommentEnd;
var findStringEnd = utils.findStringEnd;
var findNumberEnd = utils.findNumberEnd;
var findIdentifierEnd = utils.findIdentifierEnd;

var NULL = 0;
var WHITESPACE = TYPE.Whitespace;
var IDENTIFIER = TYPE.Identifier;
var NUMBER = TYPE.Number;
var STRING = TYPE.String;
var COMMENT = TYPE.Comment;
var PUNCTUATOR = TYPE.Punctuator;
var CDO = TYPE.CDO;
var CDC = TYPE.CDC;

var N = 10;
var F = 12;
var R = 13;
var STAR = TYPE.Asterisk;
var SLASH = TYPE.Solidus;
var FULLSTOP = TYPE.FullStop;
var PLUSSIGN = TYPE.PlusSign;
var HYPHENMINUS = TYPE.HyphenMinus;
var GREATERTHANSIGN = TYPE.GreaterThanSign;
var LESSTHANSIGN = TYPE.LessThanSign;
var EXCLAMATIONMARK = TYPE.ExclamationMark;

var MIN_BUFFER_SIZE = 16 * 1024;
var OFFSET_MASK = 0x00FFFFFF;
var TYPE_OFFSET = 24;
var SafeUint32Array = typeof Uint32Array !== 'undefined' ? Uint32Array : Array; // fallback on Array when TypedArray is not supported

function computeLinesAndColumns(tokenizer, source) {
    var sourceLength = source.length;
    var start = firstCharOffset(source);
    var lines = tokenizer.lines;
    var line = tokenizer.startLine;
    var columns = tokenizer.columns;
    var column = tokenizer.startColumn;

    if (lines === null || lines.length < sourceLength + 1) {
        lines = new SafeUint32Array(Math.max(sourceLength + 1024, MIN_BUFFER_SIZE));
        columns = new SafeUint32Array(lines.length);
    }

    for (var i = start; i < sourceLength; i++) {
        var code = source.charCodeAt(i);

        lines[i] = line;
        columns[i] = column++;

        if (code === N || code === R || code === F) {
            if (code === R && i + 1 < sourceLength && source.charCodeAt(i + 1) === N) {
                i++;
                lines[i] = line;
                columns[i] = column;
            }

            line++;
            column = 1;
        }
    }

    lines[i] = line;
    columns[i] = column;

    tokenizer.linesAnsColumnsComputed = true;
    tokenizer.lines = lines;
    tokenizer.columns = columns;
}

function tokenLayout(tokenizer, source, startPos) {
    var sourceLength = source.length;
    var offsetAndType = tokenizer.offsetAndType;
    var tokenCount = 0;
    var prevType = 0;
    var offset = startPos;

    if (offsetAndType === null || offsetAndType.length < sourceLength + 1) {
        offsetAndType = new SafeUint32Array(sourceLength + 1024);
    }

    while (offset < sourceLength) {
        var code = source.charCodeAt(offset);
        var type = code < SYMBOL_TYPE_LENGTH ? SYMBOL_TYPE[code] : IDENTIFIER;

        switch (type) {
            case WHITESPACE:
                offset = findWhitespaceEnd(source, offset + 1);
                break;

            case PUNCTUATOR:
                // /*
                if (code === STAR && prevType === SLASH) {
                    type = COMMENT;
                    offset = findCommentEnd(source, offset + 1);
                    tokenCount--; // rewrite prev token
                    break;
                }

                // edge case for -.123 and +.123
                if (code === FULLSTOP && (prevType === PLUSSIGN || prevType === HYPHENMINUS)) {
                    if (offset + 1 < sourceLength && isNumber(source.charCodeAt(offset + 1))) {
                        type = NUMBER;
                        offset = findNumberEnd(source, offset + 2, false);
                        tokenCount--; // rewrite prev token
                        break;
                    }
                }

                // <!--
                if (code === EXCLAMATIONMARK && prevType === LESSTHANSIGN) {
                    if (offset + 2 < sourceLength &&
                        source.charCodeAt(offset + 1) === HYPHENMINUS &&
                        source.charCodeAt(offset + 2) === HYPHENMINUS) {
                        type = CDO;
                        offset = offset + 3;
                        tokenCount--; // rewrite prev token
                        break;
                    }
                }

                // -->
                if (code === HYPHENMINUS && prevType === HYPHENMINUS) {
                    if (offset + 1 < sourceLength && source.charCodeAt(offset + 1) === GREATERTHANSIGN) {
                        type = CDC;
                        offset = offset + 2;
                        tokenCount--; // rewrite prev token
                        break;
                    }
                }

                type = code;
                offset = offset + 1;
                break;

            case NUMBER:
                offset = findNumberEnd(source, offset + 1, prevType !== FULLSTOP);

                // merge number with a preceding dot, dash or plus
                if (prevType === FULLSTOP ||
                    prevType === HYPHENMINUS ||
                    prevType === PLUSSIGN) {
                    tokenCount--; // rewrite prev token
                }

                break;

            case STRING:
                offset = findStringEnd(source, offset + 1, code);
                break;

            default:
                offset = findIdentifierEnd(source, offset);

                // merge identifier with a preceding dash
                if (prevType === HYPHENMINUS) {
                    tokenCount--; // rewrite prev token
                }
        }

        offsetAndType[tokenCount++] = (type << TYPE_OFFSET) | offset;
        prevType = type;
    }

    offsetAndType[tokenCount] = offset;

    tokenizer.offsetAndType = offsetAndType;
    tokenizer.tokenCount = tokenCount;
}

//
// tokenizer
//

var Tokenizer = function(source, startOffset, startLine, startColumn) {
    this.offsetAndType = null;
    this.lines = null;
    this.columns = null;

    this.setSource(source, startOffset, startLine, startColumn);
};

Tokenizer.prototype = {
    setSource: function(source, startOffset, startLine, startColumn) {
        var safeSource = String(source || '');
        var start = firstCharOffset(safeSource);

        this.source = safeSource;
        this.startOffset = typeof startOffset === 'undefined' ? 0 : startOffset;
        this.startLine = typeof startLine === 'undefined' ? 1 : startLine;
        this.startColumn = typeof startColumn === 'undefined' ? 1 : startColumn;
        this.linesAnsColumnsComputed = false;

        this.eof = false;
        this.currentToken = -1;
        this.tokenType = 0;
        this.tokenStart = start;
        this.tokenEnd = start;

        tokenLayout(this, safeSource, start);
        this.next();
    },

    lookupType: function(offset) {
        offset += this.currentToken;

        if (offset < this.tokenCount) {
            return this.offsetAndType[offset] >> TYPE_OFFSET;
        }

        return NULL;
    },
    lookupNonWSType: function(offset) {
        offset += this.currentToken;

        for (var type; offset < this.tokenCount; offset++) {
            type = this.offsetAndType[offset] >> TYPE_OFFSET;

            if (type !== WHITESPACE) {
                return type;
            }
        }

        return NULL;
    },
    lookupValue: function(offset, referenceStr) {
        offset += this.currentToken;

        if (offset < this.tokenCount) {
            return cmpStr(
                this.source,
                this.offsetAndType[offset - 1] & OFFSET_MASK,
                this.offsetAndType[offset] & OFFSET_MASK,
                referenceStr
            );
        }

        return false;
    },

    getTokenValue: function() {
        return this.source.substring(this.tokenStart, this.tokenEnd);
    },
    substrToCursor: function(start) {
        return this.source.substring(start, this.tokenStart);
    },

    skipWS: function() {
        for (var i = this.currentToken, skipTokenCount = 0; i < this.tokenCount; i++, skipTokenCount++) {
            if ((this.offsetAndType[i] >> TYPE_OFFSET) !== WHITESPACE) {
                break;
            }
        }

        if (skipTokenCount > 0) {
            this.skip(skipTokenCount);
        }
    },
    skipSC: function() {
        while (this.tokenType === WHITESPACE || this.tokenType === COMMENT) {
            this.next();
        }
    },
    skip: function(tokenCount) {
        var next = this.currentToken + tokenCount;

        if (next < this.tokenCount) {
            this.currentToken = next;
            this.tokenStart = this.offsetAndType[next - 1] & OFFSET_MASK;
            next = this.offsetAndType[next];
            this.tokenType = next >> TYPE_OFFSET;
            this.tokenEnd = next & OFFSET_MASK;
        } else {
            this.currentToken = this.tokenCount;
            this.next();
        }
    },
    next: function() {
        var next = this.currentToken + 1;

        if (next < this.tokenCount) {
            this.currentToken = next;
            this.tokenStart = this.tokenEnd;
            next = this.offsetAndType[next];
            this.tokenType = next >> TYPE_OFFSET;
            this.tokenEnd = next & OFFSET_MASK;
        } else {
            this.currentToken = this.tokenCount;
            this.eof = true;
            this.tokenType = NULL;
            this.tokenStart = this.tokenEnd = this.source.length;
        }
    },

    eat: function(tokenType) {
        if (this.tokenType !== tokenType) {
            this.error(
                NAME[tokenType] + ' is expected',
                // when test type is part of another token show error for current position + 1
                // e.g. eat(HYPHENMINUS) will fail on "-foo", but pointing on "-" is odd
                this.tokenStart + (this.source.charCodeAt(this.tokenStart) === tokenType ? 1 : 0)
            );
        }

        this.next();
    },
    eatNonWS: function(tokenType) {
        this.skipWS();
        this.eat(tokenType);
    },

    consume: function(tokenType) {
        var start = this.tokenStart;

        this.eat(tokenType);

        return this.substrToCursor(start);
    },
    consumeNonWS: function(tokenType) {
        this.skipWS();

        return this.consume(tokenType);
    },

    expectIdentifier: function(name) {
        if (this.tokenType !== IDENTIFIER || cmpStr(this.source, this.tokenStart, this.tokenEnd, name) === false) {
            this.error('Identifier `' + name + '` is expected');
        }

        this.next();
    },

    getLocation: function(offset, filename) {
        if (!this.linesAnsColumnsComputed) {
            computeLinesAndColumns(this, this.source);
        }

        return {
            source: filename,
            offset: this.startOffset + offset,
            line: this.lines[offset],
            column: this.columns[offset]
        };
    },

    getLocationRange: function(start, end, filename) {
        if (!this.linesAnsColumnsComputed) {
            computeLinesAndColumns(this, this.source);
        }

        return {
            source: filename,
            start: {
                offset: this.startOffset + start,
                line: this.lines[start],
                column: this.columns[start]
            },
            end: {
                offset: this.startOffset + end,
                line: this.lines[end],
                column: this.columns[end]
            }
        };
    },

    error: function(message, offset) {
        var location = typeof offset !== 'undefined' && offset < this.source.length
            ? this.getLocation(offset)
            : this.eof
                ? findLastNonSpaceLocation(this)
                : this.getLocation(this.tokenStart);

        throw new CssSyntaxError(
            message || 'Unexpected input',
            this.source,
            location.offset,
            location.line,
            location.column
        );
    },

    getTypes: function() {
        return Array.prototype.slice.call(this.offsetAndType, 0, this.tokenCount).map(function(item) {
            return NAME[item >> TYPE_OFFSET];
        });
    }
};

// extend with error class
Tokenizer.CssSyntaxError = CssSyntaxError;

// extend tokenizer with constants
Object.keys(constants).forEach(function(key) {
    Tokenizer[key] = constants[key];
});

// extend tokenizer with static methods from utils
Object.keys(utils).forEach(function(key) {
    Tokenizer[key] = utils[key];
});

// warm up tokenizer to elimitate code branches that never execute
// fix soft deoptimizations (insufficient type feedback)
new Tokenizer('\n\r\r\n\f<!---->//""\'\'/*\r\n\f*/1a;.\\31\t\+2{url(a);+1.2e3 -.4e-5 .6e+7}').getLocation();

module.exports = Tokenizer;

},{"./const":86,"./error":87,"./utils":89}],86:[function(require,module,exports){
'use strict';

// token types (note: value shouldn't intersect with used char codes)
var WHITESPACE = 1;
var IDENTIFIER = 2;
var NUMBER = 3;
var STRING = 4;
var COMMENT = 5;
var PUNCTUATOR = 6;
var CDO = 7;
var CDC = 8;

var TAB = 9;
var N = 10;
var F = 12;
var R = 13;
var SPACE = 32;

var TYPE = {
    Whitespace:   WHITESPACE,
    Identifier:   IDENTIFIER,
    Number:           NUMBER,
    String:           STRING,
    Comment:         COMMENT,
    Punctuator:   PUNCTUATOR,
    CDO:                 CDO,
    CDC:                 CDC,

    ExclamationMark:      33,  // !
    QuotationMark:        34,  // "
    NumberSign:           35,  // #
    DollarSign:           36,  // $
    PercentSign:          37,  // %
    Ampersand:            38,  // &
    Apostrophe:           39,  // '
    LeftParenthesis:      40,  // (
    RightParenthesis:     41,  // )
    Asterisk:             42,  // *
    PlusSign:             43,  // +
    Comma:                44,  // ,
    HyphenMinus:          45,  // -
    FullStop:             46,  // .
    Solidus:              47,  // /
    Colon:                58,  // :
    Semicolon:            59,  // ;
    LessThanSign:         60,  // <
    EqualsSign:           61,  // =
    GreaterThanSign:      62,  // >
    QuestionMark:         63,  // ?
    CommercialAt:         64,  // @
    LeftSquareBracket:    91,  // [
    Backslash:            92,  // \
    RightSquareBracket:   93,  // ]
    CircumflexAccent:     94,  // ^
    LowLine:              95,  // _
    GraveAccent:          96,  // `
    LeftCurlyBracket:    123,  // {
    VerticalLine:        124,  // |
    RightCurlyBracket:   125,  // }
    Tilde:               126   // ~
};

var NAME = Object.keys(TYPE).reduce(function(result, key) {
    result[TYPE[key]] = key;
    return result;
}, {});

var SafeUint32Array = typeof Uint32Array !== 'undefined' ? Uint32Array : Array; // fallback on Array when TypedArray is not supported
var SYMBOL_TYPE = new SafeUint32Array(Math.max.apply(null, Object.keys(NAME).map(Number)) + 1);
var PUNCTUATION = new SafeUint32Array(SYMBOL_TYPE.length);

for (var i = 0; i < SYMBOL_TYPE.length; i++) {
    SYMBOL_TYPE[i] = IDENTIFIER;
}

// fill categories
[
    TYPE.ExclamationMark,    // !
    TYPE.QuotationMark,      // "
    TYPE.NumberSign,         // #
    TYPE.DollarSign,         // $
    TYPE.PercentSign,        // %
    TYPE.Ampersand,          // &
    TYPE.Apostrophe,         // '
    TYPE.LeftParenthesis,    // (
    TYPE.RightParenthesis,   // )
    TYPE.Asterisk,           // *
    TYPE.PlusSign,           // +
    TYPE.Comma,              // ,
    TYPE.HyphenMinus,        // -
    TYPE.FullStop,           // .
    TYPE.Solidus,            // /
    TYPE.Colon,              // :
    TYPE.Semicolon,          // ;
    TYPE.LessThanSign,       // <
    TYPE.EqualsSign,         // =
    TYPE.GreaterThanSign,    // >
    TYPE.QuestionMark,       // ?
    TYPE.CommercialAt,       // @
    TYPE.LeftSquareBracket,  // [
    // TYPE.Backslash,          // \
    TYPE.RightSquareBracket, // ]
    TYPE.CircumflexAccent,   // ^
    // TYPE.LowLine,            // _
    TYPE.GraveAccent,        // `
    TYPE.LeftCurlyBracket,   // {
    TYPE.VerticalLine,       // |
    TYPE.RightCurlyBracket,  // }
    TYPE.Tilde               // ~
].forEach(function(key) {
    SYMBOL_TYPE[Number(key)] = PUNCTUATOR;
    PUNCTUATION[Number(key)] = PUNCTUATOR;
}, SYMBOL_TYPE);

for (var i = 48; i <= 57; i++) {
    SYMBOL_TYPE[i] = NUMBER;
}

SYMBOL_TYPE[SPACE] = WHITESPACE;
SYMBOL_TYPE[TAB] = WHITESPACE;
SYMBOL_TYPE[N] = WHITESPACE;
SYMBOL_TYPE[R] = WHITESPACE;
SYMBOL_TYPE[F] = WHITESPACE;

SYMBOL_TYPE[TYPE.Apostrophe] = STRING;
SYMBOL_TYPE[TYPE.QuotationMark] = STRING;

// whitespace is punctuation ...
PUNCTUATION[SPACE] = PUNCTUATOR;
PUNCTUATION[TAB] = PUNCTUATOR;
PUNCTUATION[N] = PUNCTUATOR;
PUNCTUATION[R] = PUNCTUATOR;
PUNCTUATION[F] = PUNCTUATOR;
// ... hyper minus is not
PUNCTUATION[TYPE.HyphenMinus] = 0;

module.exports = {
    TYPE: TYPE,
    NAME: NAME,

    SYMBOL_TYPE: SYMBOL_TYPE,
    PUNCTUATION: PUNCTUATION
};

},{}],87:[function(require,module,exports){
'use strict';

var MAX_LINE_LENGTH = 100;
var OFFSET_CORRECTION = 60;
var TAB_REPLACEMENT = '    ';

function sourceFragment(error, extraLines) {
    function processLines(start, end) {
        return lines.slice(start, end).map(function(line, idx) {
            var num = String(start + idx + 1);

            while (num.length < maxNumLength) {
                num = ' ' + num;
            }

            return num + ' |' + line;
        }).join('\n');
    }

    var lines = error.source.split(/\n|\r\n?|\f/);
    var line = error.line;
    var column = error.column;
    var startLine = Math.max(1, line - extraLines) - 1;
    var endLine = Math.min(line + extraLines, lines.length + 1);
    var maxNumLength = Math.max(4, String(endLine).length) + 1;
    var cutLeft = 0;

    // correct column according to replaced tab before column
    column += (TAB_REPLACEMENT.length - 1) * (lines[line - 1].substr(0, column - 1).match(/\t/g) || []).length;

    if (column > MAX_LINE_LENGTH) {
        cutLeft = column - OFFSET_CORRECTION + 3;
        column = OFFSET_CORRECTION - 2;
    }

    for (var i = startLine; i <= endLine; i++) {
        if (i >= 0 && i < lines.length) {
            lines[i] = lines[i].replace(/\t/g, TAB_REPLACEMENT);
            lines[i] =
                (cutLeft > 0 && lines[i].length > cutLeft ? '\u2026' : '') +
                lines[i].substr(cutLeft, MAX_LINE_LENGTH - 2) +
                (lines[i].length > cutLeft + MAX_LINE_LENGTH - 1 ? '\u2026' : '');
        }
    }

    return [
        processLines(startLine, line),
        new Array(column + maxNumLength + 2).join('-') + '^',
        processLines(line, endLine)
    ].join('\n');
}

var CssSyntaxError = function(message, source, offset, line, column) {
    var error = new SyntaxError();
    error.name = 'CssSyntaxError';
    error.message = message;
    error.source = source;
    error.offset = offset;
    error.line = line;
    error.column = column;

    error.sourceFragment = function(extraLines) {
        return sourceFragment(error, isNaN(extraLines) ? 0 : extraLines);
    };
    Object.defineProperty(error, 'formattedMessage', {
        get: function() {
            return (
                'Parse error: ' + error.message + '\n' +
                sourceFragment(error, 2)
            );
        }
    });

    // for backward capability
    error.parseError = {
        offset: offset,
        line: line,
        column: column
    };

    return error;
};

module.exports = CssSyntaxError;

},{}],88:[function(require,module,exports){
module.exports = require('./Tokenizer');

},{"./Tokenizer":85}],89:[function(require,module,exports){
'use strict';

var constants = require('./const');
var PUNCTUATION = constants.PUNCTUATION;
var SYMBOL_TYPE = constants.SYMBOL_TYPE;
var SYMBOL_TYPE_LENGTH = SYMBOL_TYPE.length;
var TYPE = constants.TYPE;
var FULLSTOP = TYPE.FullStop;
var PLUSSIGN = TYPE.PlusSign;
var HYPHENMINUS = TYPE.HyphenMinus;
var PUNCTUATOR = TYPE.Punctuator;
var TAB = 9;
var N = 10;
var F = 12;
var R = 13;
var SPACE = 32;
var BACK_SLASH = 92;
var E = 101; // 'e'.charCodeAt(0)

function firstCharOffset(source) {
    // detect BOM (https://en.wikipedia.org/wiki/Byte_order_mark)
    if (source.charCodeAt(0) === 0xFEFF ||  // UTF-16BE
        source.charCodeAt(0) === 0xFFFE) {  // UTF-16LE
        return 1;
    }

    return 0;
}

function isHex(code) {
    return (code >= 48 && code <= 57) || // 0 .. 9
           (code >= 65 && code <= 70) || // A .. F
           (code >= 97 && code <= 102);  // a .. f
}

function isNumber(code) {
    return code >= 48 && code <= 57;
}

function isNewline(source, offset, code) {
    if (code === N || code === F || code === R) {
        if (code === R && offset + 1 < source.length && source.charCodeAt(offset + 1) === N) {
            return 2;
        }

        return 1;
    }

    return 0;
}

function cmpChar(testStr, offset, referenceCode) {
    var code = testStr.charCodeAt(offset);

    // code.toLowerCase()
    if (code >= 65 && code <= 90) {
        code = code | 32;
    }

    return code === referenceCode;
}

function cmpStr(testStr, start, end, referenceStr) {
    if (end - start !== referenceStr.length) {
        return false;
    }

    if (start < 0 || end > testStr.length) {
        return false;
    }

    for (var i = start; i < end; i++) {
        var testCode = testStr.charCodeAt(i);
        var refCode = referenceStr.charCodeAt(i - start);

        // testStr[i].toLowerCase()
        if (testCode >= 65 && testCode <= 90) {
            testCode = testCode | 32;
        }

        if (testCode !== refCode) {
            return false;
        }
    }

    return true;
}

function endsWith(testStr, referenceStr) {
    return cmpStr(testStr, testStr.length - referenceStr.length, testStr.length, referenceStr);
}

function findLastNonSpaceLocation(scanner) {
    for (var i = scanner.source.length - 1; i >= 0; i--) {
        var code = scanner.source.charCodeAt(i);

        if (code !== SPACE && code !== TAB && code !== R && code !== N && code !== F) {
            break;
        }
    }

    return scanner.getLocation(i + 1);
}

function findWhitespaceEnd(source, offset) {
    for (; offset < source.length; offset++) {
        var code = source.charCodeAt(offset);

        if (code !== SPACE && code !== TAB && code !== R && code !== N && code !== F) {
            break;
        }
    }

    return offset;
}

function findCommentEnd(source, offset) {
    var commentEnd = source.indexOf('*/', offset);

    if (commentEnd === -1) {
        return source.length;
    }

    return commentEnd + 2;
}

function findStringEnd(source, offset, quote) {
    for (; offset < source.length; offset++) {
        var code = source.charCodeAt(offset);

        // TODO: bad string
        if (code === BACK_SLASH) {
            offset++;
        } else if (code === quote) {
            offset++;
            break;
        }
    }

    return offset;
}

function findDecimalNumberEnd(source, offset) {
    for (; offset < source.length; offset++) {
        var code = source.charCodeAt(offset);

        if (code < 48 || code > 57) {  // not a 0 .. 9
            break;
        }
    }

    return offset;
}

function findNumberEnd(source, offset, allowFraction) {
    var code;

    offset = findDecimalNumberEnd(source, offset);

    // fraction: .\d+
    if (allowFraction && offset + 1 < source.length && source.charCodeAt(offset) === FULLSTOP) {
        code = source.charCodeAt(offset + 1);

        if (isNumber(code)) {
            offset = findDecimalNumberEnd(source, offset + 1);
        }
    }

    // exponent: e[+-]\d+
    if (offset + 1 < source.length) {
        if ((source.charCodeAt(offset) | 32) === E) { // case insensitive check for `e`
            code = source.charCodeAt(offset + 1);

            if (code === PLUSSIGN || code === HYPHENMINUS) {
                if (offset + 2 < source.length) {
                    code = source.charCodeAt(offset + 2);
                }
            }

            if (isNumber(code)) {
                offset = findDecimalNumberEnd(source, offset + 2);
            }
        }
    }

    return offset;
}

// skip escaped unicode sequence that can ends with space
// [0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?
function findEscaseEnd(source, offset) {
    for (var i = 0; i < 7 && offset + i < source.length; i++) {
        var code = source.charCodeAt(offset + i);

        if (i !== 6 && isHex(code)) {
            continue;
        }

        if (i > 0) {
            offset += i - 1 + isNewline(source, offset + i, code);
            if (code === SPACE || code === TAB) {
                offset++;
            }
        }

        break;
    }

    return offset;
}

function findIdentifierEnd(source, offset) {
    for (; offset < source.length; offset++) {
        var code = source.charCodeAt(offset);

        if (code === BACK_SLASH) {
            offset = findEscaseEnd(source, offset + 1);
        } else if (code < SYMBOL_TYPE_LENGTH && PUNCTUATION[code] === PUNCTUATOR) {
            break;
        }
    }

    return offset;
}

module.exports = {
    firstCharOffset: firstCharOffset,

    isHex: isHex,
    isNumber: isNumber,
    isNewline: isNewline,

    cmpChar: cmpChar,
    cmpStr: cmpStr,
    endsWith: endsWith,

    findLastNonSpaceLocation: findLastNonSpaceLocation,
    findWhitespaceEnd: findWhitespaceEnd,
    findCommentEnd: findCommentEnd,
    findStringEnd: findStringEnd,
    findDecimalNumberEnd: findDecimalNumberEnd,
    findNumberEnd: findNumberEnd,
    findEscaseEnd: findEscaseEnd,
    findIdentifierEnd: findIdentifierEnd
};

},{"./const":86}],90:[function(require,module,exports){
'use strict';

var List = require('./list');

module.exports = function clone(node) {
    var result = {};

    for (var key in node) {
        var value = node[key];

        if (value) {
            if (Array.isArray(value)) {
                value = value.slice(0);
            } else if (value instanceof List) {
                value = new List().fromArray(value.map(clone));
            } else if (value.constructor === Object) {
                value = clone(value);
            }
        }

        result[key] = value;
    }

    return result;
};

},{"./list":92}],91:[function(require,module,exports){
var List = require('./list');

module.exports = function createConvertors(walker) {
    var walk = walker.all;
    var walkUp = walker.allUp;

    return {
        fromPlainObject: function(ast) {
            walk(ast, function(node) {
                if (node.children && node.children instanceof List === false) {
                    node.children = new List().fromArray(node.children);
                }
            });

            return ast;
        },
        toPlainObject: function(ast) {
            walkUp(ast, function(node) {
                if (node.children && node.children instanceof List) {
                    node.children = node.children.toArray();
                }
            });

            return ast;
        }
    };
};

},{"./list":92}],92:[function(require,module,exports){
'use strict';

//
//            item        item        item        item
//          /------\    /------\    /------\    /------\
//          | data |    | data |    | data |    | data |
//  null <--+-prev |<---+-prev |<---+-prev |<---+-prev |
//          | next-+--->| next-+--->| next-+--->| next-+--> null
//          \------/    \------/    \------/    \------/
//             ^                                    ^
//             |                list                |
//             |              /------\              |
//             \--------------+-head |              |
//                            | tail-+--------------/
//                            \------/
//

function createItem(data) {
    return {
        prev: null,
        next: null,
        data: data
    };
}

var cursors = null;
var List = function() {
    this.cursor = null;
    this.head = null;
    this.tail = null;
};

List.createItem = createItem;
List.prototype.createItem = createItem;

List.prototype.getSize = function() {
    var size = 0;
    var cursor = this.head;

    while (cursor) {
        size++;
        cursor = cursor.next;
    }

    return size;
};

List.prototype.fromArray = function(array) {
    var cursor = null;

    this.head = null;

    for (var i = 0; i < array.length; i++) {
        var item = createItem(array[i]);

        if (cursor !== null) {
            cursor.next = item;
        } else {
            this.head = item;
        }

        item.prev = cursor;
        cursor = item;
    }

    this.tail = cursor;

    return this;
};

List.prototype.toArray = function() {
    var cursor = this.head;
    var result = [];

    while (cursor) {
        result.push(cursor.data);
        cursor = cursor.next;
    }

    return result;
};

List.prototype.toJSON = List.prototype.toArray;

List.prototype.isEmpty = function() {
    return this.head === null;
};

List.prototype.first = function() {
    return this.head && this.head.data;
};

List.prototype.last = function() {
    return this.tail && this.tail.data;
};

function allocateCursor(node, prev, next) {
    var cursor;

    if (cursors !== null) {
        cursor = cursors;
        cursors = cursors.cursor;
        cursor.prev = prev;
        cursor.next = next;
        cursor.cursor = node.cursor;
    } else {
        cursor = {
            prev: prev,
            next: next,
            cursor: node.cursor
        };
    }

    node.cursor = cursor;

    return cursor;
}

function releaseCursor(node) {
    var cursor = node.cursor;

    node.cursor = cursor.cursor;
    cursor.prev = null;
    cursor.next = null;
    cursor.cursor = cursors;
    cursors = cursor;
}

List.prototype.each = function(fn, context) {
    var item;

    if (context === undefined) {
        context = this;
    }

    // push cursor
    var cursor = allocateCursor(this, null, this.head);

    while (cursor.next !== null) {
        item = cursor.next;
        cursor.next = item.next;

        fn.call(context, item.data, item, this);
    }

    // pop cursor
    releaseCursor(this);
};

List.prototype.eachRight = function(fn, context) {
    var item;

    if (context === undefined) {
        context = this;
    }

    // push cursor
    var cursor = allocateCursor(this, this.tail, null);

    while (cursor.prev !== null) {
        item = cursor.prev;
        cursor.prev = item.prev;

        fn.call(context, item.data, item, this);
    }

    // pop cursor
    releaseCursor(this);
};

List.prototype.nextUntil = function(start, fn, context) {
    if (start === null) {
        return;
    }

    var item;

    if (context === undefined) {
        context = this;
    }

    // push cursor
    var cursor = allocateCursor(this, null, start);

    while (cursor.next !== null) {
        item = cursor.next;
        cursor.next = item.next;

        if (fn.call(context, item.data, item, this)) {
            break;
        }
    }

    // pop cursor
    releaseCursor(this);
};

List.prototype.prevUntil = function(start, fn, context) {
    if (start === null) {
        return;
    }

    var item;

    if (context === undefined) {
        context = this;
    }

    // push cursor
    var cursor = allocateCursor(this, start, null);

    while (cursor.prev !== null) {
        item = cursor.prev;
        cursor.prev = item.prev;

        if (fn.call(context, item.data, item, this)) {
            break;
        }
    }

    // pop cursor
    releaseCursor(this);
};

List.prototype.some = function(fn, context) {
    var cursor = this.head;

    if (context === undefined) {
        context = this;
    }

    while (cursor !== null) {
        if (fn.call(context, cursor.data, cursor, this)) {
            return true;
        }

        cursor = cursor.next;
    }

    return false;
};

List.prototype.map = function(fn, context) {
    var result = [];
    var cursor = this.head;

    if (context === undefined) {
        context = this;
    }

    while (cursor !== null) {
        result.push(fn.call(context, cursor.data, cursor, this));
        cursor = cursor.next;
    }

    return result;
};

List.prototype.clear = function() {
    this.head = null;
    this.tail = null;
};

List.prototype.copy = function() {
    var result = new List();
    var cursor = this.head;

    while (cursor !== null) {
        result.insert(createItem(cursor.data));
        cursor = cursor.next;
    }

    return result;
};

List.prototype.updateCursors = function(prevOld, prevNew, nextOld, nextNew) {
    var cursor = this.cursor;

    while (cursor !== null) {
        if (cursor.prev === prevOld) {
            cursor.prev = prevNew;
        }

        if (cursor.next === nextOld) {
            cursor.next = nextNew;
        }

        cursor = cursor.cursor;
    }
};

List.prototype.prepend = function(item) {
    //      head
    //    ^
    // item
    this.updateCursors(null, item, this.head, item);

    // insert to the beginning of the list
    if (this.head !== null) {
        // new item <- first item
        this.head.prev = item;

        // new item -> first item
        item.next = this.head;
    } else {
        // if list has no head, then it also has no tail
        // in this case tail points to the new item
        this.tail = item;
    }

    // head always points to new item
    this.head = item;

    return this;
};

List.prototype.prependData = function(data) {
    return this.prepend(createItem(data));
};

List.prototype.append = function(item) {
    // tail
    //      ^
    //      item
    this.updateCursors(this.tail, item, null, item);

    // insert to the ending of the list
    if (this.tail !== null) {
        // last item -> new item
        this.tail.next = item;

        // last item <- new item
        item.prev = this.tail;
    } else {
        // if list has no tail, then it also has no head
        // in this case head points to new item
        this.head = item;
    }

    // tail always points to new item
    this.tail = item;

    return this;
};

List.prototype.appendData = function(data) {
    return this.append(createItem(data));
};

List.prototype.insert = function(item, before) {
    if (before !== undefined && before !== null) {
        // prev   before
        //      ^
        //     item
        this.updateCursors(before.prev, item, before, item);

        if (before.prev === null) {
            // insert to the beginning of list
            if (this.head !== before) {
                throw new Error('before doesn\'t belong to list');
            }

            // since head points to before therefore list doesn't empty
            // no need to check tail
            this.head = item;
            before.prev = item;
            item.next = before;

            this.updateCursors(null, item);
        } else {

            // insert between two items
            before.prev.next = item;
            item.prev = before.prev;

            before.prev = item;
            item.next = before;
        }
    } else {
        this.append(item);
    }
};

List.prototype.insertData = function(data, before) {
    this.insert(createItem(data), before);
};

List.prototype.remove = function(item) {
    //      item
    //       ^
    // prev     next
    this.updateCursors(item, item.prev, item, item.next);

    if (item.prev !== null) {
        item.prev.next = item.next;
    } else {
        if (this.head !== item) {
            throw new Error('item doesn\'t belong to list');
        }

        this.head = item.next;
    }

    if (item.next !== null) {
        item.next.prev = item.prev;
    } else {
        if (this.tail !== item) {
            throw new Error('item doesn\'t belong to list');
        }

        this.tail = item.prev;
    }

    item.prev = null;
    item.next = null;

    return item;
};

List.prototype.appendList = function(list) {
    // ignore empty lists
    if (list.head === null) {
        return;
    }

    this.updateCursors(this.tail, list.tail, null, list.head);

    // insert to end of the list
    if (this.tail !== null) {
        // if destination list has a tail, then it also has a head,
        // but head doesn't change

        // dest tail -> source head
        this.tail.next = list.head;

        // dest tail <- source head
        list.head.prev = this.tail;
    } else {
        // if list has no a tail, then it also has no a head
        // in this case points head to new item
        this.head = list.head;
    }

    // tail always start point to new item
    this.tail = list.tail;

    list.head = null;
    list.tail = null;
};

List.prototype.insertList = function(list, before) {
    if (before !== undefined && before !== null) {
        // ignore empty lists
        if (list.head === null) {
            return;
        }

        this.updateCursors(before.prev, list.tail, before, list.head);

        // insert in the middle of dist list
        if (before.prev !== null) {
            // before.prev <-> list.head
            before.prev.next = list.head;
            list.head.prev = before.prev;
        } else {
            this.head = list.head;
        }

        before.prev = list.tail;
        list.tail.next = before;

        list.head = null;
        list.tail = null;
    } else {
        this.appendList(list);
    }
};

List.prototype.replace = function(oldItem, newItemOrList) {
    if ('head' in newItemOrList) {
        this.insertList(newItemOrList, oldItem);
    } else {
        this.insert(newItemOrList, oldItem);
    }
    this.remove(oldItem);
};

module.exports = List;

},{}],93:[function(require,module,exports){
'use strict';

var hasOwnProperty = Object.prototype.hasOwnProperty;
var keywords = Object.create(null);
var properties = Object.create(null);
var HYPHENMINUS = 45; // '-'.charCodeAt()

function isVariable(str, offset) {
    return str.charCodeAt(offset) === HYPHENMINUS &&
           str.charCodeAt(offset + 1) === HYPHENMINUS;
}

function getVendorPrefix(str, offset) {
    if (str.charCodeAt(offset) === HYPHENMINUS) {
        // vendor should contain at least one letter
        var secondDashIndex = str.indexOf('-', offset + 2);

        if (secondDashIndex !== -1) {
            return str.substring(offset, secondDashIndex + 1);
        }
    }

    return '';
}

function getKeywordInfo(keyword) {
    if (hasOwnProperty.call(keywords, keyword)) {
        return keywords[keyword];
    }

    var name = keyword.toLowerCase();

    if (hasOwnProperty.call(keywords, name)) {
        return keywords[keyword] = keywords[name];
    }

    var vendor = !isVariable(name, 0) ? getVendorPrefix(name, 0) : '';

    return keywords[keyword] = Object.freeze({
        vendor: vendor,
        prefix: vendor,
        name: name.substr(vendor.length)
    });
}

function getPropertyInfo(property) {
    if (hasOwnProperty.call(properties, property)) {
        return properties[property];
    }

    var name = property;
    var hack = property[0];

    if (hack === '/' && property[1] === '/') {
        hack = '//';
    } else if (hack !== '_' &&
               hack !== '*' &&
               hack !== '$' &&
               hack !== '#' &&
               hack !== '+') {
        hack = '';
    }

    var variable = isVariable(name, hack.length);

    if (!variable) {
        name = name.toLowerCase();
        if (hasOwnProperty.call(properties, name)) {
            return properties[property] = properties[name];
        }
    }

    var vendor = !variable ? getVendorPrefix(name, hack.length) : '';

    return properties[property] = Object.freeze({
        hack: hack,
        vendor: vendor,
        prefix: hack + vendor,
        name: name.substr(hack.length + vendor.length),
        variable: variable
    });
}

module.exports = {
    keyword: getKeywordInfo,
    property: getPropertyInfo
};

},{}],94:[function(require,module,exports){
'use strict';

function walkRules(node, item, list) {
    switch (node.type) {
        case 'StyleSheet':
            var oldStylesheet = this.stylesheet;
            this.stylesheet = node;

            node.children.each(walkRules, this);

            this.stylesheet = oldStylesheet;
            break;

        case 'Atrule':
            if (node.block !== null) {
                var oldAtrule = this.atrule;
                this.atrule = node;

                walkRules.call(this, node.block);

                this.atrule = oldAtrule;
            }

            this.fn(node, item, list);
            break;

        case 'Rule':
            this.fn(node, item, list);

            var oldRule = this.rule;
            this.rule = node;

            walkRules.call(this, node.block);

            this.rule = oldRule;
            break;

        case 'Block':
            var oldBlock = this.block;
            this.block = node;

            node.children.each(walkRules, this);

            this.block = oldBlock;
            break;
    }
}

function walkRulesRight(node, item, list) {
    switch (node.type) {
        case 'StyleSheet':
            var oldStylesheet = this.stylesheet;
            this.stylesheet = node;

            node.children.eachRight(walkRulesRight, this);

            this.stylesheet = oldStylesheet;
            break;

        case 'Atrule':
            if (node.block !== null) {
                var oldAtrule = this.atrule;
                this.atrule = node;

                walkRulesRight.call(this, node.block);

                this.atrule = oldAtrule;
            }

            this.fn(node, item, list);
            break;

        case 'Rule':
            var oldRule = this.rule;
            this.rule = node;

            walkRulesRight.call(this, node.block);

            this.rule = oldRule;

            this.fn(node, item, list);
            break;

        case 'Block':
            var oldBlock = this.block;
            this.block = node;

            node.children.eachRight(walkRulesRight, this);

            this.block = oldBlock;
            break;
    }
}

function walkDeclarations(node) {
    switch (node.type) {
        case 'StyleSheet':
            var oldStylesheet = this.stylesheet;
            this.stylesheet = node;

            node.children.each(walkDeclarations, this);

            this.stylesheet = oldStylesheet;
            break;

        case 'Atrule':
            if (node.block !== null) {
                var oldAtrule = this.atrule;
                this.atrule = node;

                walkDeclarations.call(this, node.block);

                this.atrule = oldAtrule;
            }
            break;

        case 'Rule':
            var oldRule = this.rule;
            this.rule = node;

            if (node.block !== null) {
                walkDeclarations.call(this, node.block);
            }

            this.rule = oldRule;
            break;

        case 'Block':
            node.children.each(function(node, item, list) {
                if (node.type === 'Declaration') {
                    this.fn(node, item, list);
                } else {
                    walkDeclarations.call(this, node);
                }
            }, this);
            break;
    }
}

function createContext(root, fn) {
    var context = {
        fn: fn,
        root: root,
        stylesheet: null,
        atrule: null,
        atruleExpression: null,
        rule: null,
        selector: null,
        block: null,
        declaration: null,
        function: null
    };

    return context;
}

module.exports = function createWalker(types) {
    var walkers = {};

    for (var name in types) {
        var config = types[name];
        walkers[name] = Function('node', 'context', 'walk',
            (config.context ? 'var old = context.' + config.context + ';\ncontext.' + config.context + ' = node;\n' : '') +
            config.fields.map(function(field) {
                var line = field.type === 'list'
                    ? 'node.' + field.name + '.each(walk);'
                    : 'walk(node.' + field.name + ');';

                if (field.nullable) {
                    line = 'if (node.' + field.name + ') {\n    ' + line + '}';
                }

                return line;
            }).join('\n') +
            (config.context ? '\ncontext.' + config.context + ' = old;' : '')
        );
    }

    return {
        all: function(root, fn) {
            function walk(node, item, list) {
                fn.call(context, node, item, list);
                if (walkers.hasOwnProperty(node.type)) {
                    walkers[node.type](node, context, walk);
                }
            }

            var context = createContext(root, fn);

            walk(root);
        },
        allUp: function(root, fn) {
            function walk(node, item, list) {
                if (walkers.hasOwnProperty(node.type)) {
                    walkers[node.type](node, context, walk);
                }
                fn.call(context, node, item, list);
            }

            var context = createContext(root, fn);

            walk(root);
        },
        rules: function(root, fn) {
            walkRules.call(createContext(root, fn), root);
        },
        rulesRight: function(root, fn) {
            walkRulesRight.call(createContext(root, fn), root);
        },
        declarations: function(root, fn) {
            walkDeclarations.call(createContext(root, fn), root);
        }
    };
};

},{}],95:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = require('./util');
var has = Object.prototype.hasOwnProperty;

/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */
function ArraySet() {
  this._array = [];
  this._set = Object.create(null);
}

/**
 * Static method for creating ArraySet instances from an existing array.
 */
ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }
  return set;
};

/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */
ArraySet.prototype.size = function ArraySet_size() {
  return Object.getOwnPropertyNames(this._set).length;
};

/**
 * Add the given string to this set.
 *
 * @param String aStr
 */
ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = util.toSetString(aStr);
  var isDuplicate = has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    this._set[sStr] = idx;
  }
};

/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */
ArraySet.prototype.has = function ArraySet_has(aStr) {
  var sStr = util.toSetString(aStr);
  return has.call(this._set, sStr);
};

/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */
ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  var sStr = util.toSetString(aStr);
  if (has.call(this._set, sStr)) {
    return this._set[sStr];
  }
  throw new Error('"' + aStr + '" is not in the set.');
};

/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */
ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error('No element indexed by ' + aIdx);
};

/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */
ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

exports.ArraySet = ArraySet;

},{"./util":104}],96:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var base64 = require('./base64');

// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011

var VLQ_BASE_SHIFT = 5;

// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;

// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;

/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */
function toVLQSigned(aValue) {
  return aValue < 0
    ? ((-aValue) << 1) + 1
    : (aValue << 1) + 0;
}

/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative
    ? -shifted
    : shifted;
}

/**
 * Returns the base 64 VLQ encoded value.
 */
exports.encode = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;

  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};

/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */
exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};

},{"./base64":97}],97:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */
exports.encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};

/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */
exports.decode = function (charCode) {
  var bigA = 65;     // 'A'
  var bigZ = 90;     // 'Z'

  var littleA = 97;  // 'a'
  var littleZ = 122; // 'z'

  var zero = 48;     // '0'
  var nine = 57;     // '9'

  var plus = 43;     // '+'
  var slash = 47;    // '/'

  var littleOffset = 26;
  var numberOffset = 52;

  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
  if (bigA <= charCode && charCode <= bigZ) {
    return (charCode - bigA);
  }

  // 26 - 51: abcdefghijklmnopqrstuvwxyz
  if (littleA <= charCode && charCode <= littleZ) {
    return (charCode - littleA + littleOffset);
  }

  // 52 - 61: 0123456789
  if (zero <= charCode && charCode <= nine) {
    return (charCode - zero + numberOffset);
  }

  // 62: +
  if (charCode == plus) {
    return 62;
  }

  // 63: /
  if (charCode == slash) {
    return 63;
  }

  // Invalid base64 digit.
  return -1;
};

},{}],98:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;

/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */
function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);
  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  }
  else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    }

    // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  }
  else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    }

    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}

/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */
exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
  if (index < 0) {
    return -1;
  }

  // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.
  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }
    --index;
  }

  return index;
};

},{}],99:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = require('./util');

/**
 * Determine whether mappingB is after mappingA with respect to generated
 * position.
 */
function generatedPositionAfter(mappingA, mappingB) {
  // Optimized for most common case
  var lineA = mappingA.generatedLine;
  var lineB = mappingB.generatedLine;
  var columnA = mappingA.generatedColumn;
  var columnB = mappingB.generatedColumn;
  return lineB > lineA || lineB == lineA && columnB >= columnA ||
         util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}

/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a neglibable overhead in general
 * case for a large speedup in case of mappings being added in order.
 */
function MappingList() {
  this._array = [];
  this._sorted = true;
  // Serves as infimum
  this._last = {generatedLine: -1, generatedColumn: 0};
}

/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */
MappingList.prototype.unsortedForEach =
  function MappingList_forEach(aCallback, aThisArg) {
    this._array.forEach(aCallback, aThisArg);
  };

/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */
MappingList.prototype.add = function MappingList_add(aMapping) {
  if (generatedPositionAfter(this._last, aMapping)) {
    this._last = aMapping;
    this._array.push(aMapping);
  } else {
    this._sorted = false;
    this._array.push(aMapping);
  }
};

/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */
MappingList.prototype.toArray = function MappingList_toArray() {
  if (!this._sorted) {
    this._array.sort(util.compareByGeneratedPositionsInflated);
    this._sorted = true;
  }
  return this._array;
};

exports.MappingList = MappingList;

},{"./util":104}],100:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.

/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}

/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */
function randomIntInRange(low, high) {
  return Math.round(low + (Math.random() * (high - low)));
}

/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */
function doQuickSort(ary, comparator, p, r) {
  // If our lower bound is less than our upper bound, we (1) partition the
  // array into two pieces and (2) recurse on each half. If it is not, this is
  // the empty array and our base case.

  if (p < r) {
    // (1) Partitioning.
    //
    // The partitioning chooses a pivot between `p` and `r` and moves all
    // elements that are less than or equal to the pivot to the before it, and
    // all the elements that are greater than it after it. The effect is that
    // once partition is done, the pivot is in the exact place it will be when
    // the array is put in sorted order, and it will not need to be moved
    // again. This runs in O(n) time.

    // Always choose a random pivot so that an input array which is reverse
    // sorted does not cause O(n^2) running time.
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;

    swap(ary, pivotIndex, r);
    var pivot = ary[r];

    // Immediately after `j` is incremented in this loop, the following hold
    // true:
    //
    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
    //
    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }

    swap(ary, i + 1, j);
    var q = i + 1;

    // (2) Recurse on each half.

    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}

/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */
exports.quickSort = function (ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};

},{}],101:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = require('./util');
var binarySearch = require('./binary-search');
var ArraySet = require('./array-set').ArraySet;
var base64VLQ = require('./base64-vlq');
var quickSort = require('./quick-sort').quickSort;

function SourceMapConsumer(aSourceMap) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
  }

  return sourceMap.sections != null
    ? new IndexedSourceMapConsumer(sourceMap)
    : new BasicSourceMapConsumer(sourceMap);
}

SourceMapConsumer.fromSourceMap = function(aSourceMap) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap);
}

/**
 * The version of the source mapping spec that we are consuming.
 */
SourceMapConsumer.prototype._version = 3;

// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
  get: function () {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappings;
  }
});

SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
  get: function () {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappings;
  }
});

SourceMapConsumer.prototype._charIsMappingSeparator =
  function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
SourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
  };

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;

SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;

/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */
SourceMapConsumer.prototype.eachMapping =
  function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

    var mappings;
    switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;
    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
    }

    var sourceRoot = this.sourceRoot;
    mappings.map(function (mapping) {
      var source = mapping.source === null ? null : this._sources.at(mapping.source);
      if (source != null && sourceRoot != null) {
        source = util.join(sourceRoot, source);
      }
      return {
        source: source,
        generatedLine: mapping.generatedLine,
        generatedColumn: mapping.generatedColumn,
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: mapping.name === null ? null : this._names.at(mapping.name)
      };
    }, this).forEach(aCallback, context);
  };

/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.
 *   - column: Optional. the column number in the original source.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.
 *   - column: The column number in the generated source, or null.
 */
SourceMapConsumer.prototype.allGeneratedPositionsFor =
  function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, 'line');

    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
      source: util.getArg(aArgs, 'source'),
      originalLine: line,
      originalColumn: util.getArg(aArgs, 'column', 0)
    };

    if (this.sourceRoot != null) {
      needle.source = util.relative(this.sourceRoot, needle.source);
    }
    if (!this._sources.has(needle.source)) {
      return [];
    }
    needle.source = this._sources.indexOf(needle.source);

    var mappings = [];

    var index = this._findMapping(needle,
                                  this._originalMappings,
                                  "originalLine",
                                  "originalColumn",
                                  util.compareByOriginalPositions,
                                  binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (aArgs.column === undefined) {
        var originalLine = mapping.originalLine;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we found. Since
        // mappings are sorted, this is guaranteed to find all mappings for
        // the line we found.
        while (mapping && mapping.originalLine === originalLine) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      } else {
        var originalColumn = mapping.originalColumn;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we were searching for.
        // Since mappings are sorted, this is guaranteed to find all mappings for
        // the line we are searching for.
        while (mapping &&
               mapping.originalLine === line &&
               mapping.originalColumn == originalColumn) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      }
    }

    return mappings;
  };

exports.SourceMapConsumer = SourceMapConsumer;

/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The only parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */
function BasicSourceMapConsumer(aSourceMap) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources');
  // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.
  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null);

  // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.
  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  sources = sources
    .map(String)
    // Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)
    // Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function (source) {
      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
        ? util.relative(sourceRoot, source)
        : source;
    });

  // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.
  this._names = ArraySet.fromArray(names.map(String), true);
  this._sources = ArraySet.fromArray(sources, true);

  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this.file = file;
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @returns BasicSourceMapConsumer
 */
BasicSourceMapConsumer.fromSourceMap =
  function SourceMapConsumer_fromSourceMap(aSourceMap) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);

    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
                                                            smc.sourceRoot);
    smc.file = aSourceMap._file;

    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.

    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];

    for (var i = 0, length = generatedMappings.length; i < length; i++) {
      var srcMapping = generatedMappings[i];
      var destMapping = new Mapping;
      destMapping.generatedLine = srcMapping.generatedLine;
      destMapping.generatedColumn = srcMapping.generatedColumn;

      if (srcMapping.source) {
        destMapping.source = sources.indexOf(srcMapping.source);
        destMapping.originalLine = srcMapping.originalLine;
        destMapping.originalColumn = srcMapping.originalColumn;

        if (srcMapping.name) {
          destMapping.name = names.indexOf(srcMapping.name);
        }

        destOriginalMappings.push(destMapping);
      }

      destGeneratedMappings.push(destMapping);
    }

    quickSort(smc.__originalMappings, util.compareByOriginalPositions);

    return smc;
  };

/**
 * The version of the source mapping spec that we are consuming.
 */
BasicSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function () {
    return this._sources.toArray().map(function (s) {
      return this.sourceRoot != null ? util.join(this.sourceRoot, s) : s;
    }, this);
  }
});

/**
 * Provide the JIT with a nice shape / hidden class.
 */
function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
BasicSourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;

    while (index < length) {
      if (aStr.charAt(index) === ';') {
        generatedLine++;
        index++;
        previousGeneratedColumn = 0;
      }
      else if (aStr.charAt(index) === ',') {
        index++;
      }
      else {
        mapping = new Mapping();
        mapping.generatedLine = generatedLine;

        // Because each offset is encoded relative to the previous one,
        // many segments often have the same encoding. We can exploit this
        // fact by caching the parsed variable length fields of each segment,
        // allowing us to avoid a second parse if we encounter the same
        // segment again.
        for (end = index; end < length; end++) {
          if (this._charIsMappingSeparator(aStr, end)) {
            break;
          }
        }
        str = aStr.slice(index, end);

        segment = cachedSegments[str];
        if (segment) {
          index += str.length;
        } else {
          segment = [];
          while (index < end) {
            base64VLQ.decode(aStr, index, temp);
            value = temp.value;
            index = temp.rest;
            segment.push(value);
          }

          if (segment.length === 2) {
            throw new Error('Found a source, but no line and column');
          }

          if (segment.length === 3) {
            throw new Error('Found a source and line, but no column');
          }

          cachedSegments[str] = segment;
        }

        // Generated column.
        mapping.generatedColumn = previousGeneratedColumn + segment[0];
        previousGeneratedColumn = mapping.generatedColumn;

        if (segment.length > 1) {
          // Original source.
          mapping.source = previousSource + segment[1];
          previousSource += segment[1];

          // Original line.
          mapping.originalLine = previousOriginalLine + segment[2];
          previousOriginalLine = mapping.originalLine;
          // Lines are stored 0-based
          mapping.originalLine += 1;

          // Original column.
          mapping.originalColumn = previousOriginalColumn + segment[3];
          previousOriginalColumn = mapping.originalColumn;

          if (segment.length > 4) {
            // Original name.
            mapping.name = previousName + segment[4];
            previousName += segment[4];
          }
        }

        generatedMappings.push(mapping);
        if (typeof mapping.originalLine === 'number') {
          originalMappings.push(mapping);
        }
      }
    }

    quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;

    quickSort(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
  };

/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */
BasicSourceMapConsumer.prototype._findMapping =
  function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
                                         aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.

    if (aNeedle[aLineName] <= 0) {
      throw new TypeError('Line must be greater than or equal to 1, got '
                          + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
      throw new TypeError('Column must be greater than or equal to 0, got '
                          + aNeedle[aColumnName]);
    }

    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
  };

/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */
BasicSourceMapConsumer.prototype.computeColumnSpans =
  function SourceMapConsumer_computeColumnSpans() {
    for (var index = 0; index < this._generatedMappings.length; ++index) {
      var mapping = this._generatedMappings[index];

      // Mappings do not contain a field for the last generated columnt. We
      // can come up with an optimistic estimate, however, by assuming that
      // mappings are contiguous (i.e. given two consecutive mappings, the
      // first mapping ends where the second one starts).
      if (index + 1 < this._generatedMappings.length) {
        var nextMapping = this._generatedMappings[index + 1];

        if (mapping.generatedLine === nextMapping.generatedLine) {
          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
          continue;
        }
      }

      // The last mapping for each line spans the entire line.
      mapping.lastGeneratedColumn = Infinity;
    }
  };

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.
 *   - column: The column number in the generated source.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.
 *   - column: The column number in the original source, or null.
 *   - name: The original identifier, or null.
 */
BasicSourceMapConsumer.prototype.originalPositionFor =
  function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      util.compareByGeneratedPositionsDeflated,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._generatedMappings[index];

      if (mapping.generatedLine === needle.generatedLine) {
        var source = util.getArg(mapping, 'source', null);
        if (source !== null) {
          source = this._sources.at(source);
          if (this.sourceRoot != null) {
            source = util.join(this.sourceRoot, source);
          }
        }
        var name = util.getArg(mapping, 'name', null);
        if (name !== null) {
          name = this._names.at(name);
        }
        return {
          source: source,
          line: util.getArg(mapping, 'originalLine', null),
          column: util.getArg(mapping, 'originalColumn', null),
          name: name
        };
      }
    }

    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
  function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
      return false;
    }
    return this.sourcesContent.length >= this._sources.size() &&
      !this.sourcesContent.some(function (sc) { return sc == null; });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
BasicSourceMapConsumer.prototype.sourceContentFor =
  function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
      return null;
    }

    if (this.sourceRoot != null) {
      aSource = util.relative(this.sourceRoot, aSource);
    }

    if (this._sources.has(aSource)) {
      return this.sourcesContent[this._sources.indexOf(aSource)];
    }

    var url;
    if (this.sourceRoot != null
        && (url = util.urlParse(this.sourceRoot))) {
      // XXX: file:// URIs and absolute paths lead to unexpected behavior for
      // many users. We can help them out when they expect file:// URIs to
      // behave like it would if they were running a local HTTP server. See
      // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
      var fileUriAbsPath = aSource.replace(/^file:\/\//, "");
      if (url.scheme == "file"
          && this._sources.has(fileUriAbsPath)) {
        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
      }

      if ((!url.path || url.path == "/")
          && this._sources.has("/" + aSource)) {
        return this.sourcesContent[this._sources.indexOf("/" + aSource)];
      }
    }

    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.
 *   - column: The column number in the original source.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.
 *   - column: The column number in the generated source, or null.
 */
BasicSourceMapConsumer.prototype.generatedPositionFor =
  function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, 'source');
    if (this.sourceRoot != null) {
      source = util.relative(this.sourceRoot, source);
    }
    if (!this._sources.has(source)) {
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }
    source = this._sources.indexOf(source);

    var needle = {
      source: source,
      originalLine: util.getArg(aArgs, 'line'),
      originalColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      util.compareByOriginalPositions,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (mapping.source === needle.source) {
        return {
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        };
      }
    }

    return {
      line: null,
      column: null,
      lastColumn: null
    };
  };

exports.BasicSourceMapConsumer = BasicSourceMapConsumer;

/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The only parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */
function IndexedSourceMapConsumer(aSourceMap) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet();
  this._names = new ArraySet();

  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function (s) {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }
    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line ||
        (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }
    lastOffset = offset;

    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, 'map'))
    }
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

/**
 * The version of the source mapping spec that we are consuming.
 */
IndexedSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function () {
    var sources = [];
    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }
    return sources;
  }
});

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.
 *   - column: The column number in the generated source.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.
 *   - column: The column number in the original source, or null.
 *   - name: The original identifier, or null.
 */
IndexedSourceMapConsumer.prototype.originalPositionFor =
  function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle, this._sections,
      function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }

        return (needle.generatedColumn -
                section.generatedOffset.generatedColumn);
      });
    var section = this._sections[sectionIndex];

    if (!section) {
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }

    return section.consumer.originalPositionFor({
      line: needle.generatedLine -
        (section.generatedOffset.generatedLine - 1),
      column: needle.generatedColumn -
        (section.generatedOffset.generatedLine === needle.generatedLine
         ? section.generatedOffset.generatedColumn - 1
         : 0),
      bias: aArgs.bias
    });
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
  function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function (s) {
      return s.consumer.hasContentsOfAllSources();
    });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
IndexedSourceMapConsumer.prototype.sourceContentFor =
  function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      var content = section.consumer.sourceContentFor(aSource, true);
      if (content) {
        return content;
      }
    }
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.
 *   - column: The column number in the original source.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.
 *   - column: The column number in the generated source, or null.
 */
IndexedSourceMapConsumer.prototype.generatedPositionFor =
  function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      // Only consider this section if the requested source is in the list of
      // sources of the consumer.
      if (section.consumer.sources.indexOf(util.getArg(aArgs, 'source')) === -1) {
        continue;
      }
      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
      if (generatedPosition) {
        var ret = {
          line: generatedPosition.line +
            (section.generatedOffset.generatedLine - 1),
          column: generatedPosition.column +
            (section.generatedOffset.generatedLine === generatedPosition.line
             ? section.generatedOffset.generatedColumn - 1
             : 0)
        };
        return ret;
      }
    }

    return {
      line: null,
      column: null
    };
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
IndexedSourceMapConsumer.prototype._parseMappings =
  function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var sectionMappings = section.consumer._generatedMappings;
      for (var j = 0; j < sectionMappings.length; j++) {
        var mapping = sectionMappings[j];

        var source = section.consumer._sources.at(mapping.source);
        if (section.consumer.sourceRoot !== null) {
          source = util.join(section.consumer.sourceRoot, source);
        }
        this._sources.add(source);
        source = this._sources.indexOf(source);

        var name = section.consumer._names.at(mapping.name);
        this._names.add(name);
        name = this._names.indexOf(name);

        // The mappings coming from the consumer for the section have
        // generated positions relative to the start of the section, so we
        // need to offset them to be relative to the start of the concatenated
        // generated file.
        var adjustedMapping = {
          source: source,
          generatedLine: mapping.generatedLine +
            (section.generatedOffset.generatedLine - 1),
          generatedColumn: mapping.generatedColumn +
            (section.generatedOffset.generatedLine === mapping.generatedLine
            ? section.generatedOffset.generatedColumn - 1
            : 0),
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: name
        };

        this.__generatedMappings.push(adjustedMapping);
        if (typeof adjustedMapping.originalLine === 'number') {
          this.__originalMappings.push(adjustedMapping);
        }
      }
    }

    quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort(this.__originalMappings, util.compareByOriginalPositions);
  };

exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;

},{"./array-set":95,"./base64-vlq":96,"./binary-search":98,"./quick-sort":100,"./util":104}],102:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var base64VLQ = require('./base64-vlq');
var util = require('./util');
var ArraySet = require('./array-set').ArraySet;
var MappingList = require('./mapping-list').MappingList;

/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */
function SourceMapGenerator(aArgs) {
  if (!aArgs) {
    aArgs = {};
  }
  this._file = util.getArg(aArgs, 'file', null);
  this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
  this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
  this._sources = new ArraySet();
  this._names = new ArraySet();
  this._mappings = new MappingList();
  this._sourcesContents = null;
}

SourceMapGenerator.prototype._version = 3;

/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */
SourceMapGenerator.fromSourceMap =
  function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new SourceMapGenerator({
      file: aSourceMapConsumer.file,
      sourceRoot: sourceRoot
    });
    aSourceMapConsumer.eachMapping(function (mapping) {
      var newMapping = {
        generated: {
          line: mapping.generatedLine,
          column: mapping.generatedColumn
        }
      };

      if (mapping.source != null) {
        newMapping.source = mapping.source;
        if (sourceRoot != null) {
          newMapping.source = util.relative(sourceRoot, newMapping.source);
        }

        newMapping.original = {
          line: mapping.originalLine,
          column: mapping.originalColumn
        };

        if (mapping.name != null) {
          newMapping.name = mapping.name;
        }
      }

      generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        generator.setSourceContent(sourceFile, content);
      }
    });
    return generator;
  };

/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */
SourceMapGenerator.prototype.addMapping =
  function SourceMapGenerator_addMapping(aArgs) {
    var generated = util.getArg(aArgs, 'generated');
    var original = util.getArg(aArgs, 'original', null);
    var source = util.getArg(aArgs, 'source', null);
    var name = util.getArg(aArgs, 'name', null);

    if (!this._skipValidation) {
      this._validateMapping(generated, original, source, name);
    }

    if (source != null) {
      source = String(source);
      if (!this._sources.has(source)) {
        this._sources.add(source);
      }
    }

    if (name != null) {
      name = String(name);
      if (!this._names.has(name)) {
        this._names.add(name);
      }
    }

    this._mappings.add({
      generatedLine: generated.line,
      generatedColumn: generated.column,
      originalLine: original != null && original.line,
      originalColumn: original != null && original.column,
      source: source,
      name: name
    });
  };

/**
 * Set the source content for a source file.
 */
SourceMapGenerator.prototype.setSourceContent =
  function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
    var source = aSourceFile;
    if (this._sourceRoot != null) {
      source = util.relative(this._sourceRoot, source);
    }

    if (aSourceContent != null) {
      // Add the source content to the _sourcesContents map.
      // Create a new _sourcesContents map if the property is null.
      if (!this._sourcesContents) {
        this._sourcesContents = Object.create(null);
      }
      this._sourcesContents[util.toSetString(source)] = aSourceContent;
    } else if (this._sourcesContents) {
      // Remove the source file from the _sourcesContents map.
      // If the _sourcesContents map is empty, set the property to null.
      delete this._sourcesContents[util.toSetString(source)];
      if (Object.keys(this._sourcesContents).length === 0) {
        this._sourcesContents = null;
      }
    }
  };

/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */
SourceMapGenerator.prototype.applySourceMap =
  function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
    var sourceFile = aSourceFile;
    // If aSourceFile is omitted, we will use the file property of the SourceMap
    if (aSourceFile == null) {
      if (aSourceMapConsumer.file == null) {
        throw new Error(
          'SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' +
          'or the source map\'s "file" property. Both were omitted.'
        );
      }
      sourceFile = aSourceMapConsumer.file;
    }
    var sourceRoot = this._sourceRoot;
    // Make "sourceFile" relative if an absolute Url is passed.
    if (sourceRoot != null) {
      sourceFile = util.relative(sourceRoot, sourceFile);
    }
    // Applying the SourceMap can add and remove items from the sources and
    // the names array.
    var newSources = new ArraySet();
    var newNames = new ArraySet();

    // Find mappings for the "sourceFile"
    this._mappings.unsortedForEach(function (mapping) {
      if (mapping.source === sourceFile && mapping.originalLine != null) {
        // Check if it can be mapped by the source map, then update the mapping.
        var original = aSourceMapConsumer.originalPositionFor({
          line: mapping.originalLine,
          column: mapping.originalColumn
        });
        if (original.source != null) {
          // Copy mapping
          mapping.source = original.source;
          if (aSourceMapPath != null) {
            mapping.source = util.join(aSourceMapPath, mapping.source)
          }
          if (sourceRoot != null) {
            mapping.source = util.relative(sourceRoot, mapping.source);
          }
          mapping.originalLine = original.line;
          mapping.originalColumn = original.column;
          if (original.name != null) {
            mapping.name = original.name;
          }
        }
      }

      var source = mapping.source;
      if (source != null && !newSources.has(source)) {
        newSources.add(source);
      }

      var name = mapping.name;
      if (name != null && !newNames.has(name)) {
        newNames.add(name);
      }

    }, this);
    this._sources = newSources;
    this._names = newNames;

    // Copy sourcesContents of applied map.
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aSourceMapPath != null) {
          sourceFile = util.join(aSourceMapPath, sourceFile);
        }
        if (sourceRoot != null) {
          sourceFile = util.relative(sourceRoot, sourceFile);
        }
        this.setSourceContent(sourceFile, content);
      }
    }, this);
  };

/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */
SourceMapGenerator.prototype._validateMapping =
  function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource,
                                              aName) {
    if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
        && aGenerated.line > 0 && aGenerated.column >= 0
        && !aOriginal && !aSource && !aName) {
      // Case 1.
      return;
    }
    else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
             && aOriginal && 'line' in aOriginal && 'column' in aOriginal
             && aGenerated.line > 0 && aGenerated.column >= 0
             && aOriginal.line > 0 && aOriginal.column >= 0
             && aSource) {
      // Cases 2 and 3.
      return;
    }
    else {
      throw new Error('Invalid mapping: ' + JSON.stringify({
        generated: aGenerated,
        source: aSource,
        original: aOriginal,
        name: aName
      }));
    }
  };

/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */
SourceMapGenerator.prototype._serializeMappings =
  function SourceMapGenerator_serializeMappings() {
    var previousGeneratedColumn = 0;
    var previousGeneratedLine = 1;
    var previousOriginalColumn = 0;
    var previousOriginalLine = 0;
    var previousName = 0;
    var previousSource = 0;
    var result = '';
    var next;
    var mapping;
    var nameIdx;
    var sourceIdx;

    var mappings = this._mappings.toArray();
    for (var i = 0, len = mappings.length; i < len; i++) {
      mapping = mappings[i];
      next = ''

      if (mapping.generatedLine !== previousGeneratedLine) {
        previousGeneratedColumn = 0;
        while (mapping.generatedLine !== previousGeneratedLine) {
          next += ';';
          previousGeneratedLine++;
        }
      }
      else {
        if (i > 0) {
          if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
            continue;
          }
          next += ',';
        }
      }

      next += base64VLQ.encode(mapping.generatedColumn
                                 - previousGeneratedColumn);
      previousGeneratedColumn = mapping.generatedColumn;

      if (mapping.source != null) {
        sourceIdx = this._sources.indexOf(mapping.source);
        next += base64VLQ.encode(sourceIdx - previousSource);
        previousSource = sourceIdx;

        // lines are stored 0-based in SourceMap spec version 3
        next += base64VLQ.encode(mapping.originalLine - 1
                                   - previousOriginalLine);
        previousOriginalLine = mapping.originalLine - 1;

        next += base64VLQ.encode(mapping.originalColumn
                                   - previousOriginalColumn);
        previousOriginalColumn = mapping.originalColumn;

        if (mapping.name != null) {
          nameIdx = this._names.indexOf(mapping.name);
          next += base64VLQ.encode(nameIdx - previousName);
          previousName = nameIdx;
        }
      }

      result += next;
    }

    return result;
  };

SourceMapGenerator.prototype._generateSourcesContent =
  function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
    return aSources.map(function (source) {
      if (!this._sourcesContents) {
        return null;
      }
      if (aSourceRoot != null) {
        source = util.relative(aSourceRoot, source);
      }
      var key = util.toSetString(source);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, key)
        ? this._sourcesContents[key]
        : null;
    }, this);
  };

/**
 * Externalize the source map.
 */
SourceMapGenerator.prototype.toJSON =
  function SourceMapGenerator_toJSON() {
    var map = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    if (this._file != null) {
      map.file = this._file;
    }
    if (this._sourceRoot != null) {
      map.sourceRoot = this._sourceRoot;
    }
    if (this._sourcesContents) {
      map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
    }

    return map;
  };

/**
 * Render the source map being generated to a string.
 */
SourceMapGenerator.prototype.toString =
  function SourceMapGenerator_toString() {
    return JSON.stringify(this.toJSON());
  };

exports.SourceMapGenerator = SourceMapGenerator;

},{"./array-set":95,"./base64-vlq":96,"./mapping-list":99,"./util":104}],103:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var SourceMapGenerator = require('./source-map-generator').SourceMapGenerator;
var util = require('./util');

// Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
// operating systems these days (capturing the result).
var REGEX_NEWLINE = /(\r?\n)/;

// Newline character code for charCodeAt() comparisons
var NEWLINE_CODE = 10;

// Private symbol for identifying `SourceNode`s when multiple versions of
// the source-map library are loaded. This MUST NOT CHANGE across
// versions!
var isSourceNode = "$$$isSourceNode$$$";

/**
 * SourceNodes provide a way to abstract over interpolating/concatenating
 * snippets of generated JavaScript source code while maintaining the line and
 * column information associated with the original source code.
 *
 * @param aLine The original line number.
 * @param aColumn The original column number.
 * @param aSource The original source's filename.
 * @param aChunks Optional. An array of strings which are snippets of
 *        generated JS, or other SourceNodes.
 * @param aName The original identifier.
 */
function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
  this.children = [];
  this.sourceContents = {};
  this.line = aLine == null ? null : aLine;
  this.column = aColumn == null ? null : aColumn;
  this.source = aSource == null ? null : aSource;
  this.name = aName == null ? null : aName;
  this[isSourceNode] = true;
  if (aChunks != null) this.add(aChunks);
}

/**
 * Creates a SourceNode from generated code and a SourceMapConsumer.
 *
 * @param aGeneratedCode The generated code
 * @param aSourceMapConsumer The SourceMap for the generated code
 * @param aRelativePath Optional. The path that relative sources in the
 *        SourceMapConsumer should be relative to.
 */
SourceNode.fromStringWithSourceMap =
  function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
    // The SourceNode we want to fill with the generated code
    // and the SourceMap
    var node = new SourceNode();

    // All even indices of this array are one line of the generated code,
    // while all odd indices are the newlines between two adjacent lines
    // (since `REGEX_NEWLINE` captures its match).
    // Processed fragments are removed from this array, by calling `shiftNextLine`.
    var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
    var shiftNextLine = function() {
      var lineContents = remainingLines.shift();
      // The last line of a file might not have a newline.
      var newLine = remainingLines.shift() || "";
      return lineContents + newLine;
    };

    // We need to remember the position of "remainingLines"
    var lastGeneratedLine = 1, lastGeneratedColumn = 0;

    // The generate SourceNodes we need a code range.
    // To extract it current and last mapping is used.
    // Here we store the last mapping.
    var lastMapping = null;

    aSourceMapConsumer.eachMapping(function (mapping) {
      if (lastMapping !== null) {
        // We add the code from "lastMapping" to "mapping":
        // First check if there is a new line in between.
        if (lastGeneratedLine < mapping.generatedLine) {
          // Associate first line with "lastMapping"
          addMappingWithCode(lastMapping, shiftNextLine());
          lastGeneratedLine++;
          lastGeneratedColumn = 0;
          // The remaining code is added without mapping
        } else {
          // There is no new line in between.
          // Associate the code between "lastGeneratedColumn" and
          // "mapping.generatedColumn" with "lastMapping"
          var nextLine = remainingLines[0];
          var code = nextLine.substr(0, mapping.generatedColumn -
                                        lastGeneratedColumn);
          remainingLines[0] = nextLine.substr(mapping.generatedColumn -
                                              lastGeneratedColumn);
          lastGeneratedColumn = mapping.generatedColumn;
          addMappingWithCode(lastMapping, code);
          // No more remaining code, continue
          lastMapping = mapping;
          return;
        }
      }
      // We add the generated code until the first mapping
      // to the SourceNode without any mapping.
      // Each line is added as separate string.
      while (lastGeneratedLine < mapping.generatedLine) {
        node.add(shiftNextLine());
        lastGeneratedLine++;
      }
      if (lastGeneratedColumn < mapping.generatedColumn) {
        var nextLine = remainingLines[0];
        node.add(nextLine.substr(0, mapping.generatedColumn));
        remainingLines[0] = nextLine.substr(mapping.generatedColumn);
        lastGeneratedColumn = mapping.generatedColumn;
      }
      lastMapping = mapping;
    }, this);
    // We have processed all mappings.
    if (remainingLines.length > 0) {
      if (lastMapping) {
        // Associate the remaining code in the current line with "lastMapping"
        addMappingWithCode(lastMapping, shiftNextLine());
      }
      // and add the remaining lines without any mapping
      node.add(remainingLines.join(""));
    }

    // Copy sourcesContent into SourceNode
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aRelativePath != null) {
          sourceFile = util.join(aRelativePath, sourceFile);
        }
        node.setSourceContent(sourceFile, content);
      }
    });

    return node;

    function addMappingWithCode(mapping, code) {
      if (mapping === null || mapping.source === undefined) {
        node.add(code);
      } else {
        var source = aRelativePath
          ? util.join(aRelativePath, mapping.source)
          : mapping.source;
        node.add(new SourceNode(mapping.originalLine,
                                mapping.originalColumn,
                                source,
                                code,
                                mapping.name));
      }
    }
  };

/**
 * Add a chunk of generated JS to this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.add = function SourceNode_add(aChunk) {
  if (Array.isArray(aChunk)) {
    aChunk.forEach(function (chunk) {
      this.add(chunk);
    }, this);
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    if (aChunk) {
      this.children.push(aChunk);
    }
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Add a chunk of generated JS to the beginning of this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
  if (Array.isArray(aChunk)) {
    for (var i = aChunk.length-1; i >= 0; i--) {
      this.prepend(aChunk[i]);
    }
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    this.children.unshift(aChunk);
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Walk over the tree of JS snippets in this node and its children. The
 * walking function is called once for each snippet of JS and is passed that
 * snippet and the its original associated source's line/column location.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walk = function SourceNode_walk(aFn) {
  var chunk;
  for (var i = 0, len = this.children.length; i < len; i++) {
    chunk = this.children[i];
    if (chunk[isSourceNode]) {
      chunk.walk(aFn);
    }
    else {
      if (chunk !== '') {
        aFn(chunk, { source: this.source,
                     line: this.line,
                     column: this.column,
                     name: this.name });
      }
    }
  }
};

/**
 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
 * each of `this.children`.
 *
 * @param aSep The separator.
 */
SourceNode.prototype.join = function SourceNode_join(aSep) {
  var newChildren;
  var i;
  var len = this.children.length;
  if (len > 0) {
    newChildren = [];
    for (i = 0; i < len-1; i++) {
      newChildren.push(this.children[i]);
      newChildren.push(aSep);
    }
    newChildren.push(this.children[i]);
    this.children = newChildren;
  }
  return this;
};

/**
 * Call String.prototype.replace on the very right-most source snippet. Useful
 * for trimming whitespace from the end of a source node, etc.
 *
 * @param aPattern The pattern to replace.
 * @param aReplacement The thing to replace the pattern with.
 */
SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
  var lastChild = this.children[this.children.length - 1];
  if (lastChild[isSourceNode]) {
    lastChild.replaceRight(aPattern, aReplacement);
  }
  else if (typeof lastChild === 'string') {
    this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
  }
  else {
    this.children.push(''.replace(aPattern, aReplacement));
  }
  return this;
};

/**
 * Set the source content for a source file. This will be added to the SourceMapGenerator
 * in the sourcesContent field.
 *
 * @param aSourceFile The filename of the source file
 * @param aSourceContent The content of the source file
 */
SourceNode.prototype.setSourceContent =
  function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
    this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
  };

/**
 * Walk over the tree of SourceNodes. The walking function is called for each
 * source file content and is passed the filename and source content.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walkSourceContents =
  function SourceNode_walkSourceContents(aFn) {
    for (var i = 0, len = this.children.length; i < len; i++) {
      if (this.children[i][isSourceNode]) {
        this.children[i].walkSourceContents(aFn);
      }
    }

    var sources = Object.keys(this.sourceContents);
    for (var i = 0, len = sources.length; i < len; i++) {
      aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
    }
  };

/**
 * Return the string representation of this source node. Walks over the tree
 * and concatenates all the various snippets together to one string.
 */
SourceNode.prototype.toString = function SourceNode_toString() {
  var str = "";
  this.walk(function (chunk) {
    str += chunk;
  });
  return str;
};

/**
 * Returns the string representation of this source node along with a source
 * map.
 */
SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
  var generated = {
    code: "",
    line: 1,
    column: 0
  };
  var map = new SourceMapGenerator(aArgs);
  var sourceMappingActive = false;
  var lastOriginalSource = null;
  var lastOriginalLine = null;
  var lastOriginalColumn = null;
  var lastOriginalName = null;
  this.walk(function (chunk, original) {
    generated.code += chunk;
    if (original.source !== null
        && original.line !== null
        && original.column !== null) {
      if(lastOriginalSource !== original.source
         || lastOriginalLine !== original.line
         || lastOriginalColumn !== original.column
         || lastOriginalName !== original.name) {
        map.addMapping({
          source: original.source,
          original: {
            line: original.line,
            column: original.column
          },
          generated: {
            line: generated.line,
            column: generated.column
          },
          name: original.name
        });
      }
      lastOriginalSource = original.source;
      lastOriginalLine = original.line;
      lastOriginalColumn = original.column;
      lastOriginalName = original.name;
      sourceMappingActive = true;
    } else if (sourceMappingActive) {
      map.addMapping({
        generated: {
          line: generated.line,
          column: generated.column
        }
      });
      lastOriginalSource = null;
      sourceMappingActive = false;
    }
    for (var idx = 0, length = chunk.length; idx < length; idx++) {
      if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
        generated.line++;
        generated.column = 0;
        // Mappings end at eol
        if (idx + 1 === length) {
          lastOriginalSource = null;
          sourceMappingActive = false;
        } else if (sourceMappingActive) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
      } else {
        generated.column++;
      }
    }
  });
  this.walkSourceContents(function (sourceFile, sourceContent) {
    map.setSourceContent(sourceFile, sourceContent);
  });

  return { code: generated.code, map: map };
};

exports.SourceNode = SourceNode;

},{"./source-map-generator":102,"./util":104}],104:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}
exports.getArg = getArg;

var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);
  if (!match) {
    return null;
  }
  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}
exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';
  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }
  url += '//';
  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }
  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }
  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port
  }
  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }
  return url;
}
exports.urlGenerate = urlGenerate;

/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */
function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);
  if (url) {
    if (!url.path) {
      return aPath;
    }
    path = url.path;
  }
  var isAbsolute = exports.isAbsolute(path);

  var parts = path.split(/\/+/);
  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];
    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }
  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }
  return path;
}
exports.normalize = normalize;

/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */
function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }
  if (aPath === "") {
    aPath = ".";
  }
  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);
  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  }

  // `join(foo, '//www.example.org')`
  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }
    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  }

  // `join('http://', 'www.example.com')`
  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/'
    ? aPath
    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }
  return joined;
}
exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || !!aPath.match(urlRegexp);
};

/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */
function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, '');

  // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.
  var level = 0;
  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");
    if (index < 0) {
      return aPath;
    }

    // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.
    aRoot = aRoot.slice(0, index);
    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  }

  // Make sure we add a "../" for each component we removed from the root.
  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;

var supportsNullProto = (function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}());

function identity (s) {
  return s;
}

/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */
function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9 /* "__proto__".length */) {
    return false;
  }

  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
      s.charCodeAt(length - 9) !== 95  /* '_' */) {
    return false;
  }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36 /* '$' */) {
      return false;
    }
  }

  return true;
}

/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */
function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = mappingA.source - mappingB.source;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  return mappingA.name - mappingB.name;
}
exports.compareByOriginalPositions = compareByOriginalPositions;

/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */
function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = mappingA.source - mappingB.source;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return mappingA.name - mappingB.name;
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}

/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */
function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;

},{}],105:[function(require,module,exports){
/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
exports.SourceMapGenerator = require('./lib/source-map-generator').SourceMapGenerator;
exports.SourceMapConsumer = require('./lib/source-map-consumer').SourceMapConsumer;
exports.SourceNode = require('./lib/source-node').SourceNode;

},{"./lib/source-map-consumer":101,"./lib/source-map-generator":102,"./lib/source-node":103}]},{},[4])(4)
});
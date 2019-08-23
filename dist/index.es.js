import { createElement, Fragment, useEffect as useEffect$2, useReducer, useRef as useRef$1, useMemo as useMemo$1 } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

var EQuarters;
(function (EQuarters) {
    EQuarters["TOP_LEFT"] = "top_left";
    EQuarters["TOP_RIGHT"] = "top_right";
    EQuarters["BOTTOM_LEFT"] = "bottom_left";
    EQuarters["BOTTOM_RIGHT"] = "bottom_right";
})(EQuarters || (EQuarters = {}));
var EMountHandlers;
(function (EMountHandlers) {
    EMountHandlers["MOUNT"] = "mount";
    EMountHandlers["UNMOUNT"] = "unmount";
})(EMountHandlers || (EMountHandlers = {}));

var isMobile = function () {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        return true;
    }
    return false;
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".Tooltip_Wrapper__3vDwq {\n  position: relative;\n  display: inline-table;\n}\n\n.Tooltip_Wrapper__3vDwq svg {\n  cursor: pointer;\n}\n";
var classes = {"Wrapper":"Tooltip_Wrapper__3vDwq"};
styleInject(css);

var questionMark = function (props) {
    return (createElement("svg", { x: '0px', y: '0px', width: props.width ? props.width : '21px', height: props.height ? props.height : '21px', viewBox: '0 0 496.158 496.158' },
        createElement("path", { fill: props.background || '#007791', d: 'M496.158,248.085c0-137.022-111.069-248.082-248.075-248.082C111.07,0.003,0,111.063,0,248.085  c0,137.001,111.07,248.07,248.083,248.07C385.089,496.155,496.158,385.086,496.158,248.085z' }),
        createElement("path", { fill: props.fill ? props.fill : '#FFFFFF', d: 'M138.216,173.592c0-13.915,4.467-28.015,13.403-42.297c8.933-14.282,21.973-26.11,39.111-35.486  c17.139-9.373,37.134-14.062,59.985-14.062c21.238,0,39.99,3.921,56.25,11.755c16.26,7.838,28.818,18.495,37.683,31.97  c8.861,13.479,13.293,28.125,13.293,43.945c0,12.452-2.527,23.367-7.581,32.739c-5.054,9.376-11.062,17.469-18.018,24.279  c-6.959,6.812-19.446,18.275-37.463,34.388c-4.981,4.542-8.975,8.535-11.975,11.976c-3.004,3.443-5.239,6.592-6.702,9.447  c-1.466,2.857-2.603,5.713-3.406,8.57c-0.807,2.855-2.015,7.875-3.625,15.051c-2.784,15.236-11.501,22.852-26.147,22.852  c-7.618,0-14.028-2.489-19.226-7.471c-5.201-4.979-7.8-12.377-7.8-22.192c0-12.305,1.902-22.962,5.713-31.97  c3.808-9.01,8.861-16.92,15.161-23.73c6.296-6.812,14.794-14.904,25.488-24.28c9.373-8.202,16.15-14.392,20.325-18.567  c4.175-4.175,7.69-8.823,10.547-13.953c2.856-5.126,4.285-10.691,4.285-16.699c0-11.718-4.36-21.605-13.074-29.663  c-8.717-8.054-19.961-12.085-33.728-12.085c-16.116,0-27.981,4.065-35.596,12.195c-7.618,8.13-14.062,20.105-19.336,35.925  c-4.981,16.555-14.43,24.829-28.345,24.829c-8.206,0-15.127-2.891-20.764-8.679C141.035,186.593,138.216,180.331,138.216,173.592z   M245.442,414.412c-8.937,0-16.737-2.895-23.401-8.68c-6.667-5.784-9.998-13.877-9.998-24.279c0-9.229,3.22-16.991,9.668-23.291  c6.444-6.297,14.354-9.448,23.73-9.448c9.229,0,16.991,3.151,23.291,9.448c6.296,6.3,9.448,14.062,9.448,23.291  c0,10.255-3.296,18.312-9.888,24.17C261.7,411.481,254.084,414.412,245.442,414.412z' })));
};

var css$1 = ".Content_Wrapper__2WwXG {\n  display: table-cell;\n  vertical-align: middle;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 10;\n  animation: Content_fade-in__2ek1T ease 350ms;\n}\n\n.Content_Default__aDuci {\n  background-color: #FFFFFF;\n  border-color: rgb(235, 235, 235);\n  color: #484848;\n  fill: #484848;\n}\n\n.Content_Wrapper__2WwXG:focus,\n.Content_Wrapper__2WwXG .Content_Triangler__1juaT:focus,\n.Content_Wrapper__2WwXG .Content_Container__1SYqL:focus {\n  outline: none;\n}\n\n.Content_Container__1SYqL {\n  position: absolute;\n  z-index: 5;\n  padding: 12px 32px 12px 12px;\n  display: block;\n  width: 380px;\n  max-width: 80vw;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px;\n  border: 1px solid inherit;\n  border-radius: 5px;\n  background: inherit;\n  color: inherit;\n  border-image: initial;\n}\n\n.Content_Cancel__2N-af {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n}\n\n.Content_Cancel__2N-af svg {\n  width: 12px;\n  height: 12px;\n}\n\n.Content_Content__bdBCh {\n  overflow-wrap: break-word;\n  font-size: 15px;\n  font-weight: 400;\n  line-height: 1.25em;\n  color: inherit;\n  margin: 0px;\n  cursor: auto;\n}\n\n.Content_Content__bdBCh * {\n  max-width: 100%;\n}\n\n.Content_Triangle__FOkEA {\n  position: absolute;\n  width: auto!important;\n  height: auto!important;\n  z-index: 10;\n  fill: inherit;\n}\n\n@keyframes Content_fade-in__2ek1T {\n  0% {\n    opacity: 0;\n  }\n  66% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}";
var classes$1 = {"Wrapper":"Content_Wrapper__2WwXG","fade-in":"Content_fade-in__2ek1T","Default":"Content_Default__aDuci","Triangler":"Content_Triangler__1juaT","Container":"Content_Container__1SYqL","Cancel":"Content_Cancel__2N-af","Content":"Content_Content__bdBCh","Triangle":"Content_Triangle__FOkEA"};
styleInject(css$1);

var cancel = function (props) {
    return (createElement("svg", { viewBox: '0 0 64 64', height: '16px', width: '16px', role: 'img', "aria-label": 'Close', focusable: 'false' },
        createElement("path", { fill: props.fill || 'currentColor', d: 'M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z' })));
};

var useEffect = useEffect$2;
var content = function (props) {
    useEffect(function () {
        // Calculates position and adds event listeners after mounting.
        if (props.setTooltip) {
            props.setTooltip(EMountHandlers.MOUNT);
        }
        // Removes event listeners before unmounting.
        return function () {
            if (props.setTooltip) {
                props.setTooltip(EMountHandlers.UNMOUNT);
            }
        };
    }, []);
    var wrapperClasses = [classes$1.Wrapper, props.className || classes$1.Default];
    var contentRef = props.contentReference;
    if (!contentRef) {
        return null;
    } // Avoid errors.
    return (createElement(Fragment, null,
        createElement("div", { tabIndex: 1, ref: props.reference, className: wrapperClasses.join(' '), style: props.style },
            createElement("div", { ref: contentRef, className: classes$1.Container },
                createElement(Triangle, { reference: props.triangleReference }),
                props.bIsClickingDisabled ?
                    null
                    : props.bIsOpenedByClick && createElement("button", { onClick: props.closeTooltip, type: 'button', className: classes$1.Cancel },
                        createElement(cancel, null)),
                createElement("div", { onMouseDown: function (event) { return event.preventDefault(); }, className: classes$1.Content }, props.children)))));
};
var Triangle = function (props) {
    return (createElement("svg", { ref: props.reference, className: classes$1.Triangle, x: '0px', y: '0px', width: '24px', height: '24px', viewBox: '0 0 20 20' },
        createElement("path", { fill: 'inherit', d: 'M0,0 20,0 10,10z' }),
        createElement("path", { fill: 'transparent', stroke: '#E6E6E6', d: 'M0,0 10,10 20,0' })));
};

var useRef = useRef$1, useMemo = useMemo$1, useEffect$1 = useEffect$2;
var ETooltipHandlers;
(function (ETooltipHandlers) {
    ETooltipHandlers[ETooltipHandlers["CLEARTIMEOUT"] = 0] = "CLEARTIMEOUT";
    ETooltipHandlers[ETooltipHandlers["SETTIMEOUT"] = 1] = "SETTIMEOUT";
    ETooltipHandlers[ETooltipHandlers["CLOSETOOLTIP"] = 2] = "CLOSETOOLTIP";
    ETooltipHandlers[ETooltipHandlers["HIDDEN"] = 3] = "HIDDEN";
    ETooltipHandlers[ETooltipHandlers["HOVERED"] = 4] = "HOVERED";
})(ETooltipHandlers || (ETooltipHandlers = {}));
var EEventListenersHandlers;
(function (EEventListenersHandlers) {
    EEventListenersHandlers[EEventListenersHandlers["ADD"] = 0] = "ADD";
    EEventListenersHandlers[EEventListenersHandlers["REMOVE"] = 1] = "REMOVE";
})(EEventListenersHandlers || (EEventListenersHandlers = {}));
var reducer = function (state, action) {
    var handler = action.handler, newState = __rest(action, ["handler"]);
    switch (handler) {
        case ETooltipHandlers.CLEARTIMEOUT:
            state.onMouseLeaveTimeout && clearTimeout(state.onMouseLeaveTimeout);
            return __assign({}, state, { onMouseLeaveTimeout: undefined });
        case ETooltipHandlers.SETTIMEOUT:
            setTimeout(function () {
                return __assign({}, state, { bIsNotHovered: newState.bIsNotHovered });
            }, state.timeoutDelay);
        case ETooltipHandlers.CLOSETOOLTIP:
            return __assign({}, state, { bIsHidden: true, bIsNotHovered: true });
        case ETooltipHandlers.HIDDEN:
            return __assign({}, state, { bIsHidden: newState.bIsHidden });
        case ETooltipHandlers.HOVERED:
            return __assign({}, state, { bIsNotHovered: newState.bIsNotHovered });
        default:
            throw new Error();
    }
};
var initialState = {
    isMobile: isMobile(),
    onMouseLeaveTimeout: undefined,
    timeoutDelay: 100,
    bIsHidden: true,
    bIsNotHovered: true
};
var tooltip = function (props) {
    initialState.timeoutDelay = props.timeoutDelay || 100;
    // References, needed to calculate initial position when rendering.
    var myTooltip = useRef(null);
    var myWrapper = useRef(null);
    var myContent = useRef(null);
    var myTriangle = useRef(null);
    var _a = useReducer(reducer, initialState), state = _a[0], dispatch = _a[1];
    /**
     * Calculates in which quarter of the screen the element is at.
     */
    var calculateQuarter = function (rect, viewportX, viewportY) {
        var response = [];
        if (rect.top >= viewportY / 2) {
            response.push('bottom');
        }
        else {
            response.push('top');
        }
        if (rect.left >= viewportX / 2) {
            response.push('right');
        }
        else {
            response.push('left');
        }
        return response.join('_');
    };
    /**
     * Depending of which quarter of the screen the element is at (calculated in calculateQuarter), then
     * assings CSS style properties to the tooltip container (and triangle) respective to the quarter
     * to ensure the tooltip will be completely shown in the screen.
     */
    var smartPositioning = function (quarter) {
        if (myContent.current && myTriangle.current) {
            // Content spacing.
            var contentVertical = [24, 'px'].join('');
            var contentHorizontal = [-18, 'px'].join('');
            // Triangle SVG spacing.
            var triangleVertical = [100, '%'].join('');
            var triangleHorizontal = [6, 'px'].join('');
            switch (quarter) {
                case EQuarters.TOP_LEFT:
                    // Container position
                    myContent.current.style.top = contentVertical;
                    myContent.current.style.left = contentHorizontal;
                    // Triangle position
                    myTriangle.current.style.bottom = triangleVertical;
                    myTriangle.current.style.left = triangleHorizontal;
                    myTriangle.current.style.transform = 'rotate(180deg)';
                    break;
                case EQuarters.TOP_RIGHT:
                    // Container position
                    myContent.current.style.top = contentVertical;
                    myContent.current.style.right = contentHorizontal;
                    // Triangle position
                    myTriangle.current.style.bottom = triangleVertical;
                    myTriangle.current.style.right = triangleHorizontal;
                    myTriangle.current.style.transform = 'rotate(180deg)';
                    break;
                case EQuarters.BOTTOM_LEFT:
                    // Container position
                    myContent.current.style.bottom = contentVertical;
                    myContent.current.style.left = contentHorizontal;
                    // Triangle position
                    myTriangle.current.style.top = triangleVertical;
                    myTriangle.current.style.left = triangleHorizontal;
                    myTriangle.current.style.transform = 'none';
                    break;
                case EQuarters.BOTTOM_RIGHT:
                    // Container position
                    myContent.current.style.bottom = contentVertical;
                    myContent.current.style.right = contentHorizontal;
                    // Triangle position
                    myTriangle.current.style.top = triangleVertical;
                    myTriangle.current.style.right = triangleHorizontal;
                    myTriangle.current.style.transform = 'none';
                    break;
            }
        }
    };
    /**
     * watchOverflow will determine if the element is overflown (outside of viewport).
     * If it's overflown, then transform the element to the left so that it'll be inside the viewport,
     * and the tooltip will be legible.
     */
    var watchOverflow = function () {
        if (!myContent.current || !myTriangle.current || !myTooltip.current) {
            return;
        } // Avoid crashes
        var viewportX = Math.max(document.documentElement.clientWidth || 0);
        var contentRect = myContent.current.getBoundingClientRect();
        var overflowX = (contentRect.width + contentRect.left) - viewportX;
        var transformArray = [''];
        var bIsOverflownX = false;
        var bIsOverflownY = false;
        if (overflowX >= 0) { // Right Side
            transformArray.push("translateX(-" + (overflowX + 12) + "px)");
            myTriangle.current.style.left = "(-" + 12 + "px)";
            bIsOverflownX = true;
        }
        else if (contentRect.left < 0) { // Left Side
            transformArray.push("translateX(" + (Math.abs(contentRect.left) + 12) + "px)");
            bIsOverflownX = true;
        }
        /**
         * If overflown from the top, then move the tooltip down until it's inside the viewport.
         * The triangle SVG will be hidden since it won't point to the tooltip.
         */
        if (contentRect.top < 0) {
            bIsOverflownY = true;
            transformArray.push("translateY(" + (Math.abs(contentRect.top) + 12) + "px)");
            myTriangle.current.style.visibility = 'hidden';
        }
        /**
         * Apply transform styling.
         */
        if (bIsOverflownX || bIsOverflownY) {
            myContent.current.style.transform = transformArray.join(' ');
        }
        /**
         * If overflown on the X axis, then move the triangle so that it'll point
         * to the tootip, while keeping the transform rotate property if it exists.
         */
        if (bIsOverflownX) {
            var tooltipRect = myTooltip.current.getBoundingClientRect();
            var triangleRect = myTriangle.current.getBoundingClientRect();
            /**
             * We need the middle point of the tooltip and the triangle, to make sure
             * that we will be translating the triangle to the center of the tooltip,
             * so that it will align perfectly.
             */
            var tooltipXMidPoint = tooltipRect.left + ((tooltipRect.right - tooltipRect.left) / 2);
            var triangleXMidPoint = triangleRect.left + ((triangleRect.right - triangleRect.left) / 2);
            var distance = tooltipXMidPoint - triangleXMidPoint;
            if (String(myTriangle.current.style.cssText).includes('rotate')) {
                myTriangle.current.style.transform = "translateX(" + distance + "px) rotate(180deg)";
            }
            else {
                myTriangle.current.style.transform = "translateX(" + distance + "px)";
            }
        }
    };
    /**
     * Determines the positioning of the Tooltips based on the position inside the viewport WHEN OPENED,
     * and watches if it's overflowing the viewport. If it's overflowing, then it will translate the tooltip
     * to the left.
     */
    var calculatePosition = function () {
        if (myContent.current && myTriangle.current) {
            var viewportX = Math.max(document.documentElement.clientWidth || 0);
            var viewportY = Math.max(document.documentElement.clientHeight || 0);
            var rect = myContent.current.getBoundingClientRect();
            var quarter = calculateQuarter(rect, viewportX, viewportY);
            smartPositioning(quarter);
            watchOverflow();
            /**
             * Finally although not having to do anything with positioning, we set the triangle SVG fill EQUAL
             * to the background color of the content window of the tooltip.
             */
            var contentBackgroundColor = window.getComputedStyle(myContent.current).backgroundColor;
            myTriangle.current.style.fill = contentBackgroundColor;
        }
    };
    /**
     * When on mobile, if an orientation change event happens, close the modal to avoid bugs.
     */
    useEffect$1(function () {
        window.addEventListener('resize', closeTooltip);
        if (state.isMobile) {
            window.addEventListener('orientationchange', closeTooltip);
        }
        // on Unmount
        return function () {
            // Remove any event listener that might be active.
            if (state.isMobile) {
                window.removeEventListener('orientationchange', closeTooltip);
            }
            window.removeEventListener('resize', closeTooltip);
            // Document event listeners.
            eventListenersHandler(EEventListenersHandlers.REMOVE);
            // Clearing timeout on mouse leave event.
            dispatch({ handler: ETooltipHandlers.CLEARTIMEOUT });
        };
    }, []);
    /**
     * Adds or removes event listeners, depending if on a mobile or on a desktop.
     */
    var eventListenersHandler = function (handler) {
        switch (handler) {
            case EEventListenersHandlers.ADD:
                if (state.isMobile) {
                    document.addEventListener('touchend', outsideClickListener);
                }
                else if (!state.isMobile) {
                    document.addEventListener('click', outsideClickListener);
                    document.addEventListener('keydown', escFunction, false);
                }
                break;
            case EEventListenersHandlers.REMOVE:
                if (state.isMobile) {
                    document.removeEventListener('touchend', outsideClickListener);
                }
                else if (!state.isMobile) {
                    document.removeEventListener('click', outsideClickListener);
                    document.removeEventListener('keydown', escFunction, false);
                }
                break;
        }
    };
    var setVisibility = function (handler) {
        if (!myContent.current || !myTooltip.current) {
            return;
        } // Protection
        switch (handler) {
            case EMountHandlers.MOUNT:
                myTooltip.current.style.overflow = null;
                myContent.current.style.visibility = null;
                break;
            case EMountHandlers.UNMOUNT:
                myTooltip.current.style.overflow = 'hidden';
                myContent.current.style.visibility = 'hidden';
                break;
        }
    };
    var setTooltip = function (handler) {
        switch (handler) {
            case EMountHandlers.MOUNT:
                /**
                 * The tooltip should only calculate on mount.
                 */
                /**
                 * If the tooltip is active, then calculate then:
                 * 1. Set the wrapper overflow and the tooltip's visibility as hidden to avoid parasitic page jumps.
                 * 2. Calculate then .focus() the wrapper element to open the tooltip.
                 * 3. Calculate the position (position: absolute coordinates).
                 * 4. Applies or removes event listeners that manage the tooltip.
                 * 5. Reset the wrapper's overflow and tooltip visibility as null to show the tooltip.
                 */
                if (!myWrapper.current || !myTooltip.current) {
                    return;
                } // Protection
                setVisibility(EMountHandlers.UNMOUNT); // To avoid parasitic page jumps
                calculatePosition();
                eventListenersHandler(EEventListenersHandlers.ADD);
                myWrapper.current.focus();
                setVisibility(handler);
                break;
            // Removes the event listener if the tooltip is being hidden.
            case EMountHandlers.UNMOUNT:
                setVisibility(handler);
                eventListenersHandler(EEventListenersHandlers.REMOVE);
                break;
        }
    };
    /**
     * If the user is hovering the tooltip then open it, otherwise close it UNLESS the user clicked on the tooltip.
     */
    var onHoverHandler = function (handler, event) {
        // Disabled on mobile devices (no hover) or if the shouldDisableHover prop is true.
        if (state.isMobile || props.shouldDisableHover) {
            return;
        }
        if (!handler) {
            // Clearing timeout on mouse leave event.
            dispatch({ handler: ETooltipHandlers.CLEARTIMEOUT });
            dispatch({ handler: ETooltipHandlers.HOVERED, bIsNotHovered: handler });
            /**
             * Only dismount if the tooltip is not opened by a click.
             */
        }
        else if (state.bIsHidden) {
            /**
             * Event persist is called to avoid receiving null events if the component dismounts.
             * We declare X and Y positions to know where is the mouse pointer hovering. The result of this
             * boolean will be stored in bIsHoveringTooltip. Next, onMouseLeaveTimeout will fire within
             * 100ms, these 100ms will let the user have some time to hover the tooltip. IF the user hovers
             * over the tooltip bIsHoveringTooltip will be true and the tooltip won't be dismounted, however
             * if the user pulls the mouse away from the tooltip the tooltip will be dismounted.
             */
            if (event && myTooltip.current) {
                event.persist();
                var x = event.clientX;
                var y = event.clientY;
                var bIsHoveringTooltip = myTooltip.current.contains(document.elementFromPoint(x, y));
                if (!bIsHoveringTooltip) {
                    dispatch({ handler: ETooltipHandlers.SETTIMEOUT, bIsNotHovered: handler });
                }
            }
        }
    };
    var toggleTooltip = function () {
        // Disabled if the shouldDisableHover prop is true.
        if (props.shouldDisableClick) {
            return;
        }
        dispatch({ handler: ETooltipHandlers.HIDDEN, bIsHidden: !state.bIsHidden });
    };
    var closeTooltip = function () {
        // Disabled if the shouldDisableHover prop is true.
        if (props.shouldDisableClick) {
            return;
        }
        dispatch({ handler: ETooltipHandlers.CLOSETOOLTIP });
    };
    /**
     * Closes the tooltip as long as the click was made outside of the tooltip wrapper.
     * The wrapper contains:
     * 1. The tooltip button.
     * 2. The tooltip window.
     */
    var outsideClickListener = function (event) {
        if (myTooltip.current) {
            var element = myTooltip.current;
            if (!element.contains(event.target)) {
                closeTooltip();
            }
        }
    };
    // Close the tooltip when the ESC key is pressed.
    var escFunction = function (event) {
        if (event.keyCode === 27) {
            closeTooltip();
        }
    };
    /**
     * The tooltip content will render if bIsHidden if false or if the tooltip is not hovered.
     * This means that bIsHidden being true will have priority, which means if the user clicks the tooltip,
     * then it won't be unmounted when unhovering the tooltip.
     */
    var shouldRender = false;
    if (!state.bIsHidden) {
        shouldRender = true;
    }
    else if (!state.bIsNotHovered) {
        shouldRender = true;
    }
    return (
    /**
     * Optimization, only update virtual DOM if there is a change in bIsHidden or bIsNotHovered.
     */
    useMemo(function () { return (createElement("span", { 
        /**
        * DO NOT REMOVE THE INITIAL OVERFLOW: HIDDEN.
        * It helps smoothing the initial tooltip mount.
        */
        style: { overflow: 'hidden' }, ref: myTooltip, className: props.wrapperClassName ? props.wrapperClassName : classes.Wrapper, 
        // On mouse hover handlers.
        onMouseOver: function () { return onHoverHandler(false); }, onMouseLeave: function (event) { return onHoverHandler(true, event); }, onClick: toggleTooltip },
        props.tooltip ? props.tooltip
            : createElement(questionMark, { fill: props.fill, background: props.background }),
        shouldRender ? (createElement(content, { bIsOpenedByClick: !state.bIsHidden, bIsClickingDisabled: props.shouldDisableClick, className: props.className, setTooltip: setTooltip, reference: myWrapper, contentReference: myContent, triangleReference: myTriangle, closeTooltip: closeTooltip }, props.children))
            : null)); }, [state.bIsHidden, state.bIsNotHovered]));
};

export default tooltip;
//# sourceMappingURL=index.es.js.map

/**
 * Copyright 2014 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @fileoverview A polyfill to unify fullscreen APIs.
 *
 * @see http://enwp.org/polyfill
 */

goog.provide('shaka.polyfill.Fullscreen');


/**
 * @namespace shaka.polyfill.Fullscreen
 * @export
 *
 * @summary A polyfill to unify fullscreen APIs across browsers.
 * Many browsers have a prefixed fullscreen method on HTMLMediaElement.
 * See {@link http://goo.gl/n7TYl0 Using fullscreen mode} on MDN for more
 * information.
 */


/**
 * Install the polyfill if needed.
 * @export
 */
shaka.polyfill.Fullscreen.install = function() {
  var proto = HTMLMediaElement.prototype;
  proto.requestFullscreen = proto.requestFullscreen ||
                            proto.mozRequestFullscreen ||
                            proto.msRequestFullscreen ||
                            proto.webkitRequestFullscreen;
};


## 1.1 (2015-01-14)

Maintenance release.

Bugfixes:
  - The enabled flag for text tracks is now preserved when switching tracks.
    Player.enableTextTrack() is no longer required after selectTextTrack().
    - https://github.com/google/shaka-player/issues/1
  - The documentation for Player methods enableTextTrack, setPreferredLanguage,
    and getCurrentResolution has been corrected.
    - https://github.com/google/shaka-player/issues/3
    - https://github.com/google/shaka-player/issues/4
    - https://github.com/google/shaka-player/issues/6
  - The AbrManager class is now correctly destroyed.
    - https://github.com/google/shaka-player/issues/5
  - Clearkey support for Chrome 41+ has been fixed.
    - https://github.com/google/shaka-player/issues/8
  - A new polyfill has been added to compensate for Chrome 41+'s removal of
    MediaKeys.isTypeSupported.
    - https://github.com/google/shaka-player/issues/7
  - Several unused internal methods have been removed from the codebase.
  - Fixed a failing assertion in one of the MediaKeys polyfills.
  - Fixed failing code coverage analysis and related parse errors in several
    tests.
  - Fixed support for MPDs with SegmentTemplate@duration and
    MPD@mediaPresentationDuration, but no Period@duration attribute.
    - https://github.com/google/shaka-player/issues/9

Features:
  - Tests are now checked for style.
  - Tests have been expanded to increase coverage and exercise more Player
    features:
    - playback rate
    - stats
    - language preference
    - license restrictions
    - WebM/VP9
    - error events
  - Integration tests now run much faster.
  - MediaKeys polyfills have received minor updates to improve compatibility
    with Chrome 41.
  - New sample assets and code in app.js to demonstrate how to use a PSSH from
    an MPD to override what's in the content itself.

Broken Compatibility:
  - None!


## 1.0 (2014-12-19)

First public release.

Bugfixes:
  - Text tracks are no longer ignored in MPD manifests.
  - Adaptation decisions are now quicker and more reliable.
    - (This bug was more noticeable on faster internet connections.)
  - Playback no longer gets "stuck" on certain content.
  - Playback no longer gets "stuck" after certain seek patterns.
  - Player get/select/enable methods can now be called without a video source.
  - A \<video\> tag's "videoWidth"/"videoHeight" attributes now update
    correctly on Chrome >= 40.
  - Manual adaptation while paused no longer unpauses the video.
  - Credentials can now be used on cross-domain license requests.
  - Range headers are no longer sent for all segment requests.
    - (This fixes issues with IIS.)
  - A missing declaration of getVideoPlaybackQuality() has been added.
  - The compiled code no longer pollutes the global namespace.
  - DASH manifests using \<SegmentList\> are now parsed correctly.
  - Formatting has been fixed in the "Shaka Player Development" tutorial.

Features:
  - The Player is now reusable.  You can call load() multiple times without
    calling destroy().
  - The JS linter is now included in sources, fixing compatibility issues
    between versions.
  - The test suite now includes playback integration tests.
  - The Player has been updated to support the 01 Dec 2014 draft of the EME
    specification.
  - The loader in load.js no longer makes assumptions about app.js.  You can
    now use load.js to bootstrap other applications.
  - The test app now uses less screen real estate.
  - All custom events have been documented, and a new tutorial has been added
    to demonstrate how they can be used.
  - The Player now has a support-check API to determine if the browser has all
    necessary features for playback.
  - Sample code in the tutorials is now marked up to highlight changes from the
    previous sample.
  - Code coverage in unit tests has been increased.
  - Flakiness in unit tests has been reduced.
  - DASH manifests using \<SegmentTemplate\> without a segment index or segment
    timeline are now supported.
  - The DASH "presentationTimeOffset" attribute is now supported.

Broken Compatibility:
  - ContentProtectionCallback no longer takes a "mimeType" argument.
  - DrmSchemeInfo constructor no longer takes a "mimeType" argument.
  - DrmSchemeInfo constructor's "initData" argument is now an object with
    fields instead of a Uint8Array.
  - DrmSchemeInfo now takes a "withCredentials" argument.
  - lib.js has been renamed to shaka-player.compiled.js.


## 0.1b (2014-11-21)

Private beta release.


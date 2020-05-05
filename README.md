# simpleBrowserFingerPrint

This is a simbple package which can be used as browser fingerprint for those cases you want to use browser specific key at client side,
like encrypting the localstorage.

Note: please Consider that thsis not a golden key to your problem, but have sth for security is better than not to have anything.

npmjs: https://www.npmjs.com/package/simple-browser-fingerprint

</pre>

<pre>
import simpleBrowserFingerprint from "simple-browser-fingerprint";
const fingerprint = simpleBrowserFingerprint();
/*output:  //fingerprint:
"vendorSub:,productSub:20030107,vendor:Google Inc.,maxTouchPoints:0,hardwareConcurrency:8,cookieEna..."
*/
</pre>

I should note, for specific task you can also get the value as an array if you pass true to the function:

<pre>
import simpleBrowserFingerprint from "simple-browser-fingerprint";
const fingerprint = simpleBrowserFingerprint(true);
/*output:  //fingerprint:
(52) ["vendorSub:", "productSub:20030107", "vendor:Google Inc.", "maxTouchPoints:0", "hardwareConcurrency:8", "cookieEnabled:true", "appCodeName:Mozilla", "appName:Netscape", "appVersion:5...]
*/
</pre>


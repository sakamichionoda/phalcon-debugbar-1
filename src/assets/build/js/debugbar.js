
/**
 * |-------------------------------------|
 * | MilanKyncl\PhalconDebugbar v. 1.0.0 |
 * |-------------------------------------|
 */

console.log('MilanKyncl/PhalconDebugbar version 1.0.0');

var head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

var css = '.mk-phalcon-debugbar{display:none;position:fixed;bottom:0;right:0;color:#222;border:1px solid #ddd;background:hsla(46,24%,89%,.81);border-radius:4px}.mk-phalcon-debugbar .panel-row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;list-style:none;margin:0;padding:0}.mk-phalcon-debugbar .panel-row li{-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex}.mk-phalcon-debugbar .panel-row li a{min-height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0 4px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;text-decoration:none;color:#222}.mk-phalcon-debugbar .panel-row li a:hover{background-color:hsla(46,11%,76%,.81)}.mk-phalcon-debugbar .phalcon-logo{margin:2px 8px;height:20px;width:20px;display:inline-block}.mk-phalcon-debugbar .close-icon{height:7px;width:7px;margin:0 4px}.mk-phalcon-debugbar .debugbar-icon{display:inline-block;margin-right:4px;vertical-align:middle}.mk-phalcon-debugbar .debugbar-icon svg{height:14px;width:14px;display:block}.mk-phalcon-debugbar .debugbar-label{display:inline-block;font-size:12px;font-family:Verdana,sans-serif;vertical-align:middle;font-weight:500}';

style.type = 'text/css';

if(style.styleSheet)
    style.styleSheet.cssText = css;
else
    style.appendChild(document.createTextNode(css));

head.appendChild(style);

/**
 * Head loaded
 */

var debugBar = document.getElementById('mk-phalcon-debugbar'),
    closeDebugbar = document.getElementById('close-mk-phalcon-debugbar');


debugBar.style.display = 'block';

closeDebugbar.onclick = function() {

    debugBar.style.display = 'none';

    return false;

};
cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.bxl.service.phonegap.bxl_service",
        "file": "plugins/com.bxl.service.phonegap/www/bxl_service.js",
        "pluginId": "com.bxl.service.phonegap",
        "clobbers": [
            "bxl_service"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.1",
    "com.bxl.service.phonegap": "1.0.0"
};
// BOTTOM OF METADATA
});
/*!
 *
 * Jquery Mapael - Dynamic maps jQuery plugin (based on raphael.js)
 * Requires jQuery and Mapael >=2.0.0
 *
 * Map of simple houses5
 * 
 * @author author name
 */
(function (factory) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('jquery'), require('mapael'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery', 'mapael'], factory);
    } else {
        // Browser globals
        factory(jQuery, jQuery.mapael);
    }
}(function ($, Mapael) {

    "use strict";
    
    $.extend(true, Mapael,
        {
            maps :  {
                simple_houses5 : {
                    //width : 1490.604,
                    //height : 585.21198,
                    width : 2000,
                    height : 2000,
                    getCoords : function (lat, lon) {
                        // todo
                        return {"x" : lat, "y" : lon};
                    },
                    'elems': {
                        "lowell" : "m 1490.33,587.54 0.74,-33.8 1.06,0 0.86,-38.75 -2.9,-0.1 0.53,-23.85 -17.48,-0.43 0.14,-6.98 -66.01,-1.64 0.08,-2.59 -15.76,-0.41 -0.04,1.3 -62.3,-1.59 -0.01,1.36 -13.69,-0.33 -0.32,14.58 2.26,0.01 -0.54,25.21 -1.6,-0.05 -0.44,19.52 1.36,0.01 -0.92,42.61 2.13,0.05 -0.01,1.89 20.6,0.5 0.04,-1.82 25.33,0.64 -0.11,4.64 -0.19,1.13 -0.01,0.68 0.05,0.65 0.15,0.68 0.21,0.66 0.34,0.61 0.4,0.58 0.44,0.49 0.5,0.47 0.53,0.37 0.6,0.34 0.63,0.26 14.99,0.37 0.89,0.14 0.65,-0.06 0.62,-0.11 0.67,-0.22 0.57,-0.25 0.52,-0.37 0.49,-0.44 0.4,-0.47 0.34,-0.61 0.26,-0.63 0.16,-0.67 0.1,-0.65 0.01,-0.68 -0.15,-0.69 -0.19,-0.59 0.08,-4.85 14.83,0.36 0.02,-1.51 11.09,0.25 -0.07,4.01 14.76,0.4 0.08,-4.17 45.87,1.17 -0.09,2.74 16.21,0.44 0.24,0.19 z m -78.03,-20.23 -10.41,-0.24 0.04,-1.3 -50.26,-1.23 -0.01,1.73 -12.94,-0.35 0.08,-3.12 -3.89,-0.12 0.12,-4.94 -6.08,-0.16 0.18,-6.02 2.87,0.04 1.1,-49.52 -3.12,-0.08 0.09,-5 83.81,2.09 -0.21,9.8 -2.66,-0.06 -0.98,45.79 2.72,0.03 -0.24,12.67 -0.23,0.02 z m 62.56,2.53 -44.33,-1.08 0.05,-3.04 -4.88,-0.14 0.17,-6.92 2.97,0.08 1.14,-51.5 -2.74,-0.09 0.22,-10.48 49.06,1.22 -0.38,17.39 -2.35,-0.04 -0.82,37.97 2.29,0.07 -0.4,16.49 0.02,0.06 z",
                        "adams" : "m 1542.06,341.97 -27.11,2.38 -2.92,-31.99 27.11,-2.38 2.92,31.99 z m -70.86,-58.46 -23.26,1.18 -1.01,-19.57 23.27,-1.18 1.01,19.57 z m 27.22,62.8 -70.54,6.85 -4.69,-47.4 12.35,-1.2 3.33,33.47 17.04,-1.64 -0.43,-4.48 13.81,-1.31 0.4,4.04 14.36,-1.39 -6.34,-63.24 13,-1.25 7.73,77.61 -0.04,-0.06 z m 115.25,-12.04 -3.94,-43.58 14.49,-1.3 -1.05,-11.13 -61.52,5.44 0.18,1.81 -50.64,4.51 1.43,15.85 31.65,-2.84 3.62,39.37 15.29,-1.34 -3.73,-40.67 4.29,-0.35 3.54,39.02 19.43,-1.7 -0.44,-4.48 9.8,-0.85 0.34,3.92 17.26,-1.51 0,-0.16 z m -18.42,-13.55 -19,1.66 -2.42,-26.34 18.99,-1.66 2.43,26.33 z m -184.01,33.1 -5.67,0.27 -0.16,-2.27 -22.67,1.15 0.17,3.69 -8.84,0.43 -1.35,-26.28 10.39,-0.5 -2.23,-43.27 26.8,-1.36 3.58,68.2 -0.02,-0.06 z",
                        "quincy" : "m 1612.35,565.06 -31.08,0.05 0.26,-129.97 -64.01,-0.56 0.05,-21.99 95.06,0.45 -0.32,151.96 0.04,0.07 z m -53.66,10.24 -26.39,1.78 -0.03,2.2 -12.91,-0.28 0.72,-34.02 -1.36,-0.01 0.76,-36.37 1.45,0.05 0.76,-34.63 11.8,0.32 -0.07,2.29 25.4,0.61 -0.37,15.36 -25.26,-0.67 -0.31,13.22 3.95,0.09 -0.91,40.72 -2.44,-0.08 -0.37,16.57 25.71,-2.84 -0.36,15.88 0.23,-0.17 z",
                        "mather" : "m 1902.66,800.43 -1.15,-4.93 -51.58,4.61 -0.41,-0.35 3.05,20.12 0.03,-0.01 4.31,18.67 4.45,-1.02 1.22,5.27 43.57,-3.94 -5.03,-21.97 7.33,-1.66 1.37,5.95 35.75,-8.15 -4.84,-21.31 -38.06,8.72 z m -11.18,14.16 -22.23,2.01 -0.77,-8.77 22.23,-2.01 0.77,8.77 z m 64.09,2.78 -11.54,-25.48 21.32,-9.67 14.87,29.53 -24.59,5.59 -0.06,0.03 z m 4.58,-37.64 -24.08,10.25 -7.09,-16.57 8.5,-3.67 -21.74,-51.02 -18.42,4.05 -33.67,3.04 3.28,53.57 40.09,-3.18 0.98,16.21 -57.61,6.46 -5.56,-89.99 50.76,-3.88 0.65,1.52 28.12,-10.49 35.7,83.66 0.09,0.02 z",
                        "dunster" : "m 1848.45,800.24 3.05,20.12 -12.03,2.72 -11.89,14.09 2.72,2.29 -10.31,12.2 -18.67,-15.86 9.97,-11.75 -14.76,-12.58 -12.16,14.36 -13.2,-11.23 31.76,-37.57 -10.28,-8.81 10.43,-12.41 -28.69,-24.46 -9.51,11.25 -10.25,-8.74 -19.11,22.63 -13.45,15.89 -12.26,-10.43 17.02,-20.15 -15.7,-13.37 -13.74,16.25 -8.92,-7.58 3.1,-3.61 -15.47,-13.18 7.62,-9.01 14.59,12.35 12.59,-14.92 25.58,21.75 14.44,-17.08 0.43,-0.41 0.52,-0.37 0.54,-0.31 0.57,-0.25 0.59,-0.19 0.65,-0.05 0.62,0.04 0.64,0.1 0.61,0.19 0.57,0.28 0.65,0.47 8.18,6.92 6.56,-7.8 0.43,-0.41 0.52,-0.37 0.54,-0.31 0.58,-0.25 0.6,-0.18 0.65,-0.06 0.62,0.04 0.58,0.13 0.61,0.19 0.58,0.28 0.65,0.47 16.8,14.33 14.34,-16.95 0.43,-0.41 0.52,-0.38 0.55,-0.31 0.58,-0.25 0.62,-0.11 0.65,-0.06 0.62,0.04 0.65,0.1 0.6,0.19 0.58,0.28 0.65,0.47 4.31,3.71 0.47,0.4 0.37,0.52 0.31,0.54 0.25,0.57 0.11,0.62 0.06,0.66 -0.03,0.61 -0.1,0.65 -0.19,0.61 -0.28,0.57 -0.47,0.65 -14.14,16.72 13.7,11.69 0.41,0.43 0.38,0.52 0.31,0.54 0.25,0.57 0.11,0.62 0.05,0.66 -0.03,0.61 -0.1,0.65 -0.19,0.61 -0.28,0.58 -0.47,0.65 -6.73,7.94 10.99,9.4 0.43,0.49 0.38,0.51 0.31,0.55 0.25,0.57 0.12,0.62 0.05,0.65 -0.04,0.62 -0.13,0.58 -0.19,0.61 -0.28,0.58 -0.47,0.65 -1.75,2.03 24.69,20.99 z",
                        "leverett" : "m 1617.11,660.35 -16.4,1.22 -3.01,-39.18 -2.55,0.2 -1.99,-26.38 24.64,-1.84 1.97,26 -3.58,0.26 0.94,39.77 -0.03,-0.07 z m 100.69,-22.59 -45.43,3.68 -1.74,-20.92 45.46,-3.62 1.72,20.86 z m -123.02,24.34 -15.07,2.9 -9.41,-48.22 -42.13,2.63 0,50.48 -15.16,-0.07 0.02,-66.14 12.51,-0.82 -0.14,-1.9 49.42,-3.15 0.13,1.68 12.94,-0.85 1.08,16.76 -3.23,0.19 9.01,46.44 0.02,0.05 z m 167.01,17.74 -21.94,1.8 -3.77,-45.46 21.97,-1.74 3.77,45.47 -0.03,-0.07 z m -90.08,12.82 -19.11,1.56 -2.8,-34 19.11,-1.57 2.8,34 z",
                        "winthrop" : "m 1256.16,743.09 -37,-58.64 18.21,-11.48 1.62,2.54 35.21,-22.29 -1.61,-2.53 15.26,-9.61 36.52,57.88 -13.94,8.81 -27.45,-43.51 -39.95,25.24 27.96,44.34 -14.78,9.32 -0.02,-0.05 z m 234.82,-95.48 -11.59,0.87 -0.72,-9.7 11.59,-0.87 0.73,9.7 z m 1.54,29.66 -11.21,0.86 -0.37,-4.51 -6.49,0.47 -1.28,-16.37 17.71,-1.33 1.64,20.88 0,0 z m -36.69,4.41 -17.12,1.31 -3.88,-50.08 -69.02,5.15 3.97,50.95 -16.68,1.27 -5.49,-71.21 16.78,-1.22 0.23,2.98 69,-5.21 -0.26,-3.58 17.05,-1.27 5.51,70.89 -0.07,0.02 z",
                        "kirkland" : "m 1160.72,689.87 0.11,-0.95 0.06,-0.92 10.55,1.61 14.14,-91.95 -100.7,-15.77 -14.2,92.51 53.66,8.41 -0.92,5.89 25.91,4.08 11.33,-2.87 0.07,-0.03 z m -4.32,-19.04 -68.69,-10.8 2.15,-14.17 2.86,0.5 5.26,-34.48 -2.6,-0.46 1.99,-12.82 68.26,10.68 -1.96,12.88 3.31,0.53 -5.26,34.32 -3.07,-0.48 -2.15,14.17 -0.11,0.12 z m 38.65,-89.53 -15.22,-1.09 0.67,-10.3 -75.18,-5.29 1.04,-15.5 90.41,6.38 -1.75,25.73 0.02,0.06 z",
                        "eliot" : "m 1142.16,706.31 9.2,9.11 9.39,6.25 0.31,0.54 0.25,0.57 0.19,0.59 0.12,0.62 0.03,0.59 -0.22,1.07 -5.15,7.42 7.45,5.21 1.3,-1.84 15.72,10.96 18.07,-9.53 -7.86,-14.89 14.21,-7.5 3.92,7.49 2.14,-1.15 13.51,25.68 1.66,-0.86 1.6,3 4.46,-2.38 6.13,11.57 -2.27,1.2 1.96,3.67 -17.81,9.43 -2.02,-3.79 -2.45,1.29 -9.85,-18.62 -22.04,10.8 13.27,25.12 -24.34,13.67 -1.26,-2.39 -14.69,7.78 -6.38,-12.14 14.95,-7.88 -0.84,-1.59 11.09,-5.85 -6.65,-12.62 -54.75,-38.26 -1.28,-0.87 -12.06,-8.41 0.29,-1.93 -18.95,-2.94 -2.2,14.42 -1.78,-0.28 -1.27,8.37 2.08,0.3 -8.45,54.97 -2.02,-0.33 -1.45,9.35 2.26,0.37 -2.24,14.66 18.88,13.21 12.56,-6.63 1.04,1.88 18.2,-9.59 5.48,10.42 -18.01,9.51 1.07,1.94 -23.65,12.47 -35.21,-24.73 4.47,-29.17 2.33,0.34 1.66,-10.94 -2.26,-0.37 7.67,-49.96 1.75,0.22 1.4,-9.11 -1.62,-0.28 4.47,-29.17 45.65,6.76 13.82,7.42 -0.91,1.37 1.73,1.21 4.18,-6.01 0.4,-0.47 0.43,-0.41 0.52,-0.37 0.57,-0.25 0.59,-0.19 0.62,-0.12 0.59,-0.03 0.62,0.04 0.79,0.26 3.34,2.32 0.82,-0.88 0.85,-0.82 -0.11,0.11 z",
                        "cabot" : "m 718.59,680.84 0.54,-44.77 -17.6,-0.13 0.34,-30.07 17.51,0.16 0.81,-66.59 19.66,0.17 -1.72,141.47 -19.51,-0.15 -0.04,-0.09 z m -35.03,46.63 0.25,-20.41 43.61,0.35 -0.25,20.41 -43.66,-0.39 0.05,0.04 z m -87.7,-0.95 0.27,-20.94 14.64,0.16 -0.1,5.03 18.44,0.19 0.07,-4.49 13.47,0.13 -0.29,20.47 -46.52,-0.38 0.02,-0.16 z m -8.61,-46.28 1.7,-137.57 22.97,0.2 -1.71,137.58 -22.97,-0.21 z",
                        "pforzheimer" : "m 729.54,429.3 0.11,-24.08 13.24,-0.02 -0.08,24.02 -13.24,0.01 -0.04,0.06 z m -103.01,99.91 0.06,-17.1 22,-0.01 0.13,-35.62 -30.77,0.01 -0.02,3.65 -16.9,-0.01 0.22,-62.41 18.71,0.04 -0.15,42.77 81.17,0.06 0.17,-53.21 18.74,-0.02 -0.28,74.26 -16.36,0.03 0.05,-4.83 -29.56,-0.01 -0.14,36.01 20.69,0.04 -0.08,16.52 -23.03,0 -0.02,3.89 -18.64,-0.01 0.03,-3.8 -26.05,-0.01 -0.01,-0.24 z m -2.85,-104.14 0.03,-13.69 5.89,0 0.01,-7.64 9.1,-0.02 -0.04,9.06 7.8,0.02 0.02,-6.04 9.1,-0.02 -0.05,7.7 6.62,-0.01 0.04,-8.18 9.25,0 -0.05,6.58 5.56,0.03 0.04,-5.07 18.74,-0.02 -0.1,17.3 -72.11,-0.02 0.16,0.02 z m 80.24,106.88 0.11,-32.21 44.79,-0.01 -0.11,32.2 -44.78,0.01 z",
                        "currier" : "m 527.76,499.86 0.38,-19.12 29.06,0.41 0.08,-4.89 15.23,0.22 -0.13,7.72 5.37,0.07 -0.23,13 -5.03,-0.1 -0.16,7.39 -15.14,-0.25 0.1,-4.16 -29.4,-0.38 -0.12,0.08 z m 236.3,191.06 0.29,-17.35 34.28,0.48 -0.29,17.35 -34.28,-0.48 z m -0.7,53.27 0.56,-30.41 35.6,0.53 -0.55,30.4 -35.55,-0.49 -0.06,-0.04 z m -273.74,-199.21 0.05,-17.98 10.61,-0.01 0.12,-24.71 11.24,-0.01 0.01,-4.53 7.95,0.04 0.03,3.21 12.36,-0.02 -0.08,25.3 -11.87,0 -0.02,6.53 10.72,0.06 -0.06,12.23 -41.04,-0.01 -0.02,-0.1 z m 64.12,-100.69 0.04,-10.82 -16.25,0.01 0.07,-11.5 -5.26,0 0.04,-8.83 5.56,0.04 0.03,-11.06 19.04,0.01 -0.04,10.33 16.95,0.04 -0.1,31.81 -19.97,-0.05 -0.11,0.02 z m -23.3,131.71 0.41,-22.69 22.57,0.35 0.22,-11.74 17.14,0.24 -0.14,9.23 4.98,0.07 -0.16,9.77 -3.71,-0.05 -0.14,6.85 -16.36,-0.22 -0.14,8.6 -24.62,-0.38 -0.06,-0.04 z m -26.54,-96.11 0.09,-25.29 -10.13,0.01 0.07,-21 33.36,0.05 -0.1,19.06 10.66,0.02 -0.14,27.25 -33.85,-0.04 0.04,-0.06 z"
                    }
                }
            }
        }
    );

    return Mapael;

}));
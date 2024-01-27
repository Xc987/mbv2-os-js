
> Open this page at [https://xc987.github.io/mbv2-os-js/](https://xc987.github.io/mbv2-os-js/)

# Microbit V2 OS

How to use:
 Use LOGO to select the program / game.
 At any time select the back option to exit the current sub menu.
 Press Pin 1 if you dont know what is the selected option.

Features:
* Games
  * Space ivaders `A / B - move` `AB - shoot`
  * Flappy bird `A - move down` `B - move up`
  * Ping pong `A - B - move`
  * Cars game `A - B - move`
  * Dinosaur game `A - jump` `B - duck down`
  * Jumping rope `A - reset game` `B - jump`
  * Pac man `Use accelerometer to move`
  * Tetris `A - B - move block`
  * Tic Tac Toe `AB - start game` `Use accelerometer to move` `A - player 1` `B - player 2`
  * Snake `AB - start game` `A - move to the left` `B - move to the right`
* Tools
  * Temperature `use LOGO to switch between numbers and bar graph`
  * Light level `use LOGO to switch between numbers and bar graph`
  * Sound level `use LOGO to switch between numbers and bar graph`
  * Compass `Just a compass`
  * Acceleration X `use LOGO to switch between numbers and bar graph`
  * Acceleration Y `use LOGO to switch between numbers and bar graph`
  * Acceleration Z `use LOGO to switch between numbers and bar graph`
  * Audio recording
    * Record audio
    * Play audio
    * Change sample rate `Chane sample rate by 4400 (4400 - 22000)`
    * Change gain `Change gain from Low to High`
  * Calculator `use LOGO to add the number and PIN 2 to finish selecting` `after ANY INPUT - answer`
    * plus
    * minus
    * times
    * divide
    * exponent
    * square root
    * sin
    * cos
    * tan
    * PI `Show the PI`
    * Random from x to y 
  * Clock `use LOGO to add the number and PIN 2 to finish selecting`
    * Alarm `Set the current Hour / Minute` `after select the alarm Hour / Minute` `after timer ends ANY INPUT - stop alarm`
    * Chronometer `A - strart / stop chronometer`
    * Timer `Set the Hours / Minutes / Seconds and the timer wil begin` `after timer ends ANY INPUT - stop timer`
    * Time `Set the current Hour / Minute / Second` `ANY INPUT - show time`
* Turtle `A - left` `B - right` `LOGO - forward` `P2 - Backward` `AB - pen up / down`
* Bluetooth
  * Media `A - volume down` `B - volume up` `P2 - mute` `LOGO - start / pause` `HOLD AB - previous track`
  * Mouse `Use accelerometer to move` `A - left click` `B - right click`
  * Gamepad `A B P2 LOGO - buttons` `AB - start` `P0 - left shoulder` `P1 - right shoulder` `accelerometer - x y`
  * Keyboard
    * Letter keys `use LOGO to send selected letter`
    * Number keys `use LOGO to send selected number`
    * Arrow keys `A B LOGO P2 as arrow keys`
    * Map A/B/LOGO to x/y/z letter keys `Map A B LOGO buttons to x y z letters`
* Create
  * Number `use LOGO to select letter` `P2 finish selecting`
  * Text `use LOGO to select number` `P2 finish selecting`
  * Audio
    * Built in audio `Makecode built-in audio / sFX` `use LOGO to play sound`
    * Create
      * Note `use LOGO to add note` `P2 to hear the note / beat`
      * Rest `use LOGO to add rest` `P2 to hear the rest`
      * Delete previous note / rest
      * Play
  * Image via turtle `Same controls as turtle` `P1 - finish drawing` `after ANY INPUT - draw image`
* Billy TTS
  * Text `use LOGO to add letter` `P2 finish selecting` `after ANY INPUT - hear the text`
  * Change voice preset `Change the voice preset`
* Serial / Bluetooth
  * Send `Send the selected input via serial or UART`
    * A/B/LOGO buttons
    * Temperature
    * Light level
    * Sound level
    * Compass
    * Acceleration X
    * Acceleration Y
    * Acceleration Z
    * Number `use LOGO to send the selected number`
    * Text `use LOGO to send the selected letter`
  * Receive
* Data logging `Data log the selected input every 1ms/1s/1m/1h`
  * Every 1ms/1s/1m/1h
    * Temperature
    * Light level
    * Sound level
    * Compass `....`
    * Acceleration X
    * Acceleration Y
    * Acceleration Z
* Settings
  * Enable/Disable audio `Enable / disable sound for games` `SETTING WILL BE SAVED`
  * Volume `Change the volume from 50 to 255` `SETTING WILL BE SAVED`
  * Brightness `Change the brightness from 50 to 255` `SETTING WILL BE SAVED`
  * Data logging `Enable data logging for games` `SETTING WILL BE SAVED`
  * Calibrate compass `Calibrate the compass`
  * Test input `Test all inputs` `REMOVED IN 8.3.0`
  * Rotate display `Rotate the display` `SETTING WILL BE SAVED`
  * Disable/Enable animation `Disable / Enable the scrolling moving animation` `REMOVED IN 8.3.0`
  * Custom bar graphs `Change the custom bar graphs` `moving bar graph change speed by presing A B buttons`
  * Use Pin 2 in settins `Use the P2 to decrease the volume / brightness / Bar graph value`

Notes:
 Stock bar graph is broken in 8.3.0, change the bar graph in settings or once showing the selected input bar graph - Press Pin 2 to change bar graphs.
 Some sent serial data will be corrupted / broken in 8.3.0

## Use this as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/xc987/mbv2-os-js** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/xc987/mbv2-os-js** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>

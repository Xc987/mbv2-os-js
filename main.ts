function loading_animation() { //Draw loading animation.
    led.plot(2, 0)
    basic.pause(30)
    led.unplot(2, 0)
    led.plot(3, 0)
    basic.pause(30)
    led.unplot(3, 0)
    led.plot(4, 1)
    basic.pause(30)
    led.unplot(4, 1)
    led.plot(4, 2)
    basic.pause(30)
    led.unplot(4, 2)
    led.plot(4, 3)
    basic.pause(30)
    led.unplot(4, 3)
    led.plot(3, 4)
    basic.pause(30)
    led.unplot(3, 4)
    led.plot(2, 4)
    basic.pause(30)
    led.unplot(2, 4)
    led.plot(1, 4)
    basic.pause(30)
    led.unplot(1, 4)
    led.plot(0, 3)
    basic.pause(30)
    led.unplot(0, 3)
    led.plot(0, 2)
    basic.pause(30)
    led.unplot(0, 2)
    led.plot(0, 1)
    basic.pause(30)
    led.unplot(0, 1)
    led.plot(1, 0)
    basic.pause(30)
    led.unplot(1, 0)}
function draw_menu() { //Draw navigation bar at the top.
    led.plotBrightness(0, 0, 20)
    led.plotBrightness(1, 0, 20)
    led.plotBrightness(2, 0, 20)
    led.plotBrightness(3, 0, 20)
    led.plotBrightness(4, 0, 20)}
function waiting_for_connection() { //Waiting for the bluetooth connection.
    waiting_for_input = true
    if (bluetooth_type == 1) {
        media.startMediaService()
    } else if (bluetooth_type == 2) {
        mouse.startMouseService()
    } else if (bluetooth_type == 3) {
        gamepad.startGamepadService()
    } else {
        keyboard.startKeyboardService()
    }
    while (waiting_for_input == true) {
        if (bluetooth_online == true) {
            waiting_for_input = false
            basic.showIcon(IconNames.Yes)
            basic.clearScreen()
            if (bluetooth_type == 1) {
                bluetooth_media()
            } else if (bluetooth_type == 2) {
                bluetooth_mouse()
            } else if (bluetooth_type == 3) {
                bluetooth_gamepad()
            }
            if (bluetooth_keyboard_type == 1) {
                bluetooth_keyboard()
            } else if (bluetooth_keyboard_type == 2) {
                bluetooth_keyboard_number()
            } else if (bluetooth_keyboard_type == 3) {
                bluetooth_keyboard_arrows()
            } else if (bluetooth_keyboard_type == 4) {
                bluetooth_keyboard_custom()
            }
        } else {
            loading_animation()
        }
    }}
function unid_if_0_9() { //Function to draw numbers from 0 to 9
    unid = num
    if (unid == 0) {
        images.createImage(`
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .`).scrollImage(1, scroll_interval)
    } else if (unid == 1) {
        images.createImage(`
            . . . # .
            . . # # .
            . . . # .
            . . . # .
            . . . # .`).scrollImage(1, scroll_interval)
    } else if (unid == 2) {
        images.createImage(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .`).scrollImage(1, scroll_interval)
    } else if (unid == 3) {
        images.createImage(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .`).scrollImage(1, scroll_interval)
    } else if (unid == 4) {
        images.createImage(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .`).scrollImage(1, scroll_interval)
    } else if (unid == 5) {
        images.createImage(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .`).scrollImage(1, scroll_interval)
    } else if (unid == 6) {
        images.createImage(`
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .`).scrollImage(1, scroll_interval)
    } else if (unid == 7) {
        images.createImage(`
            . # # # .
            . . . # .
            . . . # .
            . . . # .
            . . . # .`).scrollImage(1, scroll_interval)
    } else if (unid == 8) {
        images.createImage(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .`).scrollImage(1, scroll_interval)
    } else if (unid == 9) {
        images.createImage(`
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . # # # .`).scrollImage(1, scroll_interval)
    }}
function unid_if_1_23() { //Function to draw numbers from 0 to 55 (1-23)
    if (unid_type == 1) {
        unid = num
    } else if (unid_type == 2) {
        unid = hour
    } else if (unid_type == 3) {
        unid = minute
    } else if (unid_type == 4) {
        unid = second
    } else if (unid_type == 5) {
        unid = signal_hour
    } else if (unid_type == 6) {
        unid = signal_minute
    }
    if (unid == 1) {
        images.createImage(`
            . . . # .
            . . # # .
            . . . # .
            . . . # .
            . . . # .`).scrollImage(1, scroll_interval)
    } else if (unid == 2) {
        images.createImage(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .`).scrollImage(1, scroll_interval)
    } else if (unid == 3) {
        images.createImage(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .`).scrollImage(1, scroll_interval)
    } else if (unid == 4) {
        images.createImage(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .`).scrollImage(1, scroll_interval)
    } else if (unid == 5) {
        images.createImage(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .`).scrollImage(1, scroll_interval)
    } else if (unid == 6) {
        images.createImage(`
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .`).scrollImage(1, scroll_interval)
    } else if (unid == 7) {
        images.createImage(`
            . # # # .
            . . . # .
            . . . # .
            . . . # .
            . . . # .`).scrollImage(1, scroll_interval)
    } else if (unid == 8) {
        images.createImage(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .`).scrollImage(1, scroll_interval)
    } else if (unid == 9) {
        images.createImage(`
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . # # # .`).scrollImage(1, scroll_interval)
    } else if (unid == 10) {
        images.createImage(`
            # . # # #
            # . # . #
            # . # . #
            # . # . #
            # . # # #`).scrollImage(1, scroll_interval)
    } else if (unid == 11) {
        images.createImage(`
            # . . . #
            # . . # #
            # . . . #
            # . . . #
            # . . . #`).scrollImage(1, scroll_interval)
    } else if (unid == 12) {
        images.createImage(`
            # . # # #
            # . . . #
            # . # # #
            # . # . .
            # . # # #`).scrollImage(1, scroll_interval)
    } else if (unid == 13) {
        images.createImage(`
            # . # # #
            # . . . #
            # . # # #
            # . . . #
            # . # # #`).scrollImage(1, scroll_interval)
    } else if (unid == 14) {
        images.createImage(`
            # . # . #
            # . # . #
            # . # # #
            # . . . #
            # . . . #`).scrollImage(1, scroll_interval)
    } else if (unid == 15) {
        images.createImage(`
            # . # # #
            # . # . .
            # . # # #
            # . . . #
            # . # # #`).scrollImage(1, scroll_interval)
    } else if (unid == 16) {
        images.createImage(`
            # . # # #
            # . # . .
            # . # # #
            # . # . #
            # . # # #`).scrollImage(1, scroll_interval)
    } else if (unid == 17) {
        images.createImage(`
            # . # # #
            # . . . #
            # . . . #
            # . . . #
            # . . . #`).scrollImage(1, scroll_interval)
    } else if (unid == 18) {
        images.createImage(`
            # . # # #
            # . # . #
            # . # # #
            # . # . #
            # . # # #`).scrollImage(1, scroll_interval)
    } else if (unid == 19) {
        images.createImage(`
            # . # # #
            # . # . #
            # . # # #
            # . . . #
            # . # # #`).scrollImage(1, scroll_interval)
    } else if (unid == 20) {
        images.createImage(`
            # # # # #
            . # # . #
            # # # . #
            # . # . #
            # # # # #`).scrollImage(1, scroll_interval)
    } else if (unid == 0) {
        images.createImage(`
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .`).scrollImage(1, scroll_interval)
    } else if (unid == 25) {
        images.createImage(`
            # # . # #
            . # . # .
            # # . # #
            # . . . #
            # # . # #`).scrollImage(1, scroll_interval)
    } else if (unid == 30) {
        images.createImage(`
            # # # # #
            . # # . #
            # # # . #
            . # # . #
            # # # # #`).scrollImage(1, scroll_interval)
    } else if (unid == 35) {
        images.createImage(`
            # # . # #
            . # . # .
            # # . # #
            . # . . #
            # # . # #`).scrollImage(1, scroll_interval)
    } else if (unid == 40) {
        images.createImage(`
            # . # # #
            # . # . #
            # # # . #
            . # # . #
            . # # # #`).scrollImage(1, scroll_interval)
    } else if (unid == 45) {
        images.createImage(`
            # . . # #
            # . . # .
            # # . # #
            . # . . #
            . # . # #`).scrollImage(1, scroll_interval)
    } else if (unid == 50) {
        images.createImage(`
            # # # # #
            # . # . #
            # # # . #
            . # # . #
            # # # # #`).scrollImage(1, scroll_interval)
    } else if (unid == 55) {
        images.createImage(`
            # # . # #
            # . . # .
            # # . # #
            . # . . #
            # # . # #`).scrollImage(1, scroll_interval)
    } else if (unid == 21) {
        images.createImage(`
            # # . . #
            . # . # #
            # # . . #
            # . . . #
            # # . . #`).scrollImage(1, scroll_interval)
    } else if (unid == 22) {
        images.createImage(`
            # # . # #
            . # . . #
            # # . # #
            # . . # .
            # # . # #`).scrollImage(1, scroll_interval)
    } else if (unid == 23) {
        images.createImage(`
            # # . # #
            . # . . #
            # # . # #
            # . . . #
            # # . # #`).scrollImage(1, scroll_interval)
    }}
function unid_if_1_4() { //Function to draw numbers from 1 to 4
    if (num == 1) {
        images.createImage(`
            . . . # .
            . . # # .
            . . . # .
            . . . # .
            . . . # .`).scrollImage(1, scroll_interval)
    } else if (num == 2) {
        images.createImage(`
            # . . # #
            # . . . #
            # . . # #
            # . . # .
            # . . # #`).scrollImage(1, scroll_interval)
    } else if (num == 3) {
        images.createImage(`
            # . # . #
            # . # . #
            # . # # #
            # . . . #
            # . . . #`).scrollImage(1, scroll_interval)
    } else if (num == 4) {
        images.createImage(`
            # . # # #
            # . # . #
            # . # # #
            # . # . #
            # . # # #`).scrollImage(1, scroll_interval)
    } else if (num == 5) {
        images.createImage(`
            # . # # #
            # . # . .
            # . # # #
            # . # . #
            # . # # #`).scrollImage(1, scroll_interval)
    } else if (num == 6) {
        images.createImage(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .`).scrollImage(1, scroll_interval)
    } else if (num == 7) {
        images.createImage(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .`).scrollImage(1, scroll_interval)
    }}
function usid_if() { //Function to draw letters from a to "?"
    usid = abc_id
    if (usid == 1) {
        images.createImage(`
                . . . . .
                . # # # .
                # . . # .
                # . . # .
                . # # # #`).scrollImage(1, scroll_interval)
    } else if (usid == 2) {
        images.createImage(`
                . # # # .
                . . . . .
                . # # # .
                # . . # .
                . # # # #`).scrollImage(1, scroll_interval)
    } else if (usid == 3) {
        images.createImage(`
                # . . . .
                # . . . .
                # # # . .
                # . . # .
                # # # . .`).scrollImage(1, scroll_interval)
    } else if (usid == 4) {
        images.createImage(`
                . . . . .
                . # # . .
                # . . . .
                # . . . .
                . # # . .`).scrollImage(1, scroll_interval)
    } else if (usid == 5) {
        images.createImage(`
                . # . . .
                . . . . .
                . # # . .
                # . . . .
                . # # . .`).scrollImage(1, scroll_interval)
    } else if (usid == 6) {
        images.createImage(`
                . . . # .
                . . . # .
                . # # # .
                # . . # .
                . # # # .`).scrollImage(1, scroll_interval)
    } else if (usid == 7) {
        images.createImage(`
                . # # . .
                # . . # .
                # # # . .
                # . . . .
                . # # # .`).scrollImage(1, scroll_interval)
    } else if (usid == 8) {
        images.createImage(`
                # # # . #
                # . . . #
                # # # . #
                # . . . .
                # # # . .`).scrollImage(1, scroll_interval)
    } else if (usid == 9) {
        images.createImage(`
                . . # # .
                . # . . .
                # # # . .
                . # . . .
                . # . . .`).scrollImage(1, scroll_interval)
    } else if (usid == 10) {
        images.createImage(`
                . # # # .
                # . . # .
                . # # # .
                . . . # .
                . # # . .`).scrollImage(1, scroll_interval)
    } else if (usid == 11) {
        images.createImage(`
                # # # . #
                # . . . .
                # . # # .
                # . . # .
                # # # # .`).scrollImage(1, scroll_interval)
    } else if (usid == 12) {
        images.createImage(`
                # . . . .
                # . . . .
                # # # . .
                # . . # .
                # . . # .`).scrollImage(1, scroll_interval)
    } else if (usid == 13) {
        images.createImage(`
                . . # . .
                . . . . .
                . . # . .
                . . # . .
                . . # . .`).scrollImage(1, scroll_interval)
    } else if (usid == 14) {
        images.createImage(`
                . # # # .
                . . . . .
                . . # . .
                . . # . .
                . . # . .`).scrollImage(1, scroll_interval)
    } else if (usid == 15) {
        images.createImage(`
                . . # . .
                . . . . .
                . . # . .
                . . # . .
                # # . . .`).scrollImage(1, scroll_interval)
    } else if (usid == 16) {
        images.createImage(`
                # . . . .
                # . # . .
                # # . . .
                # . # . .
                # . . # .`).scrollImage(1, scroll_interval)
    } else if (usid == 17) {
        images.createImage(`
                # . . . .
                # . # . .
                # # . . #
                # . # . .
                # . . # .`).scrollImage(1, scroll_interval)
    } else if (usid == 18) {
        images.createImage(`
                . # . . .
                . # . . .
                . # . . .
                . # . . .
                . # # # .`).scrollImage(1, scroll_interval)
    } else if (usid == 19) {
        images.createImage(`
                . # . . #
                . # . . .
                . # . . .
                . # . . .
                . # # # .`).scrollImage(1, scroll_interval)
    } else if (usid == 20) {
        images.createImage(`
                . . . . .
                # # . # #
                # . # . #
                # . . . #
                # . . . #`).scrollImage(1, scroll_interval)
    } else if (usid == 21) {
        images.createImage(`
                . . . . .
                # # # . .
                # . . # .
                # . . # .
                # . . # .`).scrollImage(1, scroll_interval)
    } else if (usid == 22) {
        images.createImage(`
                . . . . #
                # # # . .
                # . . # .
                # . . # .
                # . . # .`).scrollImage(1, scroll_interval)
    } else if (usid == 23) {
        images.createImage(`
                . . . . .
                . # # . .
                # . . # .
                # . . # .
                . # # . .`).scrollImage(1, scroll_interval)
    } else if (usid == 24) {
        images.createImage(`
                . . . . .
                # # # . .
                # . . # .
                # # # . .
                # . . . .`).scrollImage(1, scroll_interval)
    } else if (usid == 25) {
        images.createImage(`
                . . . . .
                # . # # .
                # # . . .
                # . . . .
                # . . . .`).scrollImage(1, scroll_interval)
    } else if (usid == 26) {
        images.createImage(`
                . . . . .
                . . # # .
                . # . . .
                . . # . .
                # # . . .`).scrollImage(1, scroll_interval)
    } else if (usid == 27) {
        images.createImage(`
                # . . . .
                . . # # .
                . # . . .
                . . # . .
                # # . . .`).scrollImage(1, scroll_interval)
    } else if (usid == 28) {
        images.createImage(`
                . # . . .
                . # . . .
                . # # # .
                . # . . .
                . . # # .`).scrollImage(1, scroll_interval)
    } else if (usid == 29) {
        images.createImage(`
                . . . . .
                # . . # .
                # . . # .
                # . . # .
                . # # # #`).scrollImage(1, scroll_interval)
    } else if (usid == 30) {
        images.createImage(`
                . # # . .
                . . . . .
                # . . # .
                # . . # .
                . # # # #`).scrollImage(1, scroll_interval)
    } else if (usid == 31) {
        images.createImage(`
                . . . . .
                # . . . #
                # . . . #
                . # . # .
                . . # . .`).scrollImage(1, scroll_interval)
    } else if (usid == 32) {
        images.createImage(`
                . . . . .
                # # # # .
                . . # . .
                . # . . .
                # # # # .`).scrollImage(1, scroll_interval)
    } else if (usid == 33) {
        images.createImage(`
                . . . . #
                # # # # .
                . . # . .
                . # . . .
                # # # # .`).scrollImage(1, scroll_interval)
    } else if (usid == 34) {
        images.createImage(`
                . . . . .
                . . . . .
                # . . . #
                # # # # #
                . . . . .`).scrollImage(1, scroll_interval)
    } else if (usid == 35) {
        images.createImage(`
                . . . . .
                . . . . .
                . . . . .
                . . # . .
                . . . . .`).scrollImage(1, scroll_interval)
    } else if (usid == 36) {
        images.createImage(`
                . . . . .
                . . . . .
                . . . . .
                . . # . .
                . # . . .`).scrollImage(1, scroll_interval)
    } else if (usid == 37) {
        images.createImage(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . # . .`).scrollImage(1, scroll_interval)
    } else {
        images.createImage(`
                . # # # .
                # . . . #
                . . # # .
                . . . . .
                . . # . .`).scrollImage(1, scroll_interval)
    }}
function uckb_if() { //Function to map keyboard buttons to input buttons.
    let kblist = ["NUL","a", "a", "b", "c", "c", "d", "e", "e", "f", "g", "g", "h", "i", "i", "j", "k", "k", "l", "l", "m", "n", "n", "o", "p", "r", "s", "s", "t", "u", "u", "v", "z", "z", " ", ".", ",", "!", "?"]
    let kbshiftlist = ["NUL","A", "A", "B", "C", "C", "D", "E", "E", "F", "G", "G", "H", "I", "I", "J", "K", "K", "L", "L", "M", "N", "N", "O", "P", "R", "S", "S", "T", "U", "U", "V", "Z", "Z"]
    if (shift == true) {
        uckb = kbshiftlist[abc_id]
        shift = false
    } else {
        uckb = kblist[abc_id]
    }}

function ckeck_hold_a() { //Check if button A is held.
    while (input.buttonIsPressed(Button.A)) {
        basic.pause(1)
        if (!(input.buttonIsPressed(Button.A))) {
            break;
        }
    }}
function ckeck_hold_b() { //Check if button B is held.
    while (input.buttonIsPressed(Button.B)) {
        basic.pause(1)
        if (!(input.buttonIsPressed(Button.B))) {
            break;
        }
    }}
function plot_graph() { //Plot a bar graph system/custom.
    if (custom_graph == 1) {
        led.plotBarGraph(graph_var1, graph_var2)
    } else {
        if (custom_graph != 12) {
            meter.show(graph_var1)
        }
        if (custom_graph == 2) {
            meter.use(meter.Styles.Bar, 0, graph_var2)
        } else if (custom_graph == 3) {
            meter.use(meter.Styles.Blob, 0, graph_var2)
        } else if (custom_graph == 4) {
            meter.use(meter.Styles.Spiral, 0, graph_var2)
        } else if (custom_graph == 5) {
            meter.use(meter.Styles.Dial, 0, graph_var2)
        } else if (custom_graph == 6) {
            meter.use(meter.Styles.Needle, 0, graph_var2)
        } else if (custom_graph == 7) {
            meter.use(meter.Styles.Tidal, 0, graph_var2)
        } else if (custom_graph == 8) {
            meter.use2(meter.Styles2.Speedometer, 0, graph_var2)
        } else if (custom_graph == 9) {
            meter.use2(meter.Styles2.Needlerev, 0, graph_var2)
        } else if (custom_graph == 10) {
            meter.use2(meter.Styles2.Signal, 0, graph_var2)
        } else if (custom_graph == 11) {
            meter.use2(meter.Styles2.Water, 0, graph_var2)
        } else if (custom_graph == 12) {
            if (input.buttonIsPressed(Button.A)) {
                inter += -5
            }
            if (input.buttonIsPressed(Button.B)) {
                inter += 5
            }
            meter.animateduse(graph_var1, graph_var2, inter)
        }
    }}

function menu_select_menu() { //Menu selection at the start.
    while (true) {
        if (selected_menu == 1) {
            led.unplot(4, 0)
        } else if (selected_menu == 2) {
            led.unplot(0, 0)
        } else if (selected_menu == 3) {
            led.unplot(1, 0)
        } else if (selected_menu == 4) {
            led.unplot(2, 0)
        } else if (selected_menu == 8) {
            led.unplot(3, 0)
        } else {
            led.unplot(2, 0)
        }
        if (selected_menu == 1) {
            image_games.scrollImage(1, scroll_interval)
            ckeck_hold_a()
        } else if (selected_menu == 2) {
            image_tools.scrollImage(1, scroll_interval)
        } else if (selected_menu == 3) {
            image_turtle.scrollImage(1, scroll_interval)
        } else if (selected_menu == 4) {
            image_radio.scrollImage(1, scroll_interval)
        } else if (selected_menu == 5) {
            image_create.scrollImage(1, scroll_interval)
        } else if (selected_menu == 6) {
            image_send.scrollImage(1, scroll_interval)
        } else if (selected_menu == 7) {
            image_uart.scrollImage(1, scroll_interval)
        } else if (selected_menu == 8) {
            image_log.scrollImage(1, scroll_interval)
        } else if (selected_menu == 9) {
            image_settings.scrollImage(1, scroll_interval)
            ckeck_hold_b()
        }
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        draw_menu()
        if (selected_menu == 1) {
            led.plot(0, 0)
        } else if (selected_menu == 2) {
            led.plot(1, 0)
        } else if (selected_menu == 8) {
            led.plot(3, 0)
        } else if (selected_menu == 9) {
            led.plot(4, 0)
        } else {
            led.plot(2, 0)
        }
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                if (selected_menu == 1) {
                    selected_menu = 9
                } else {
                    selected_menu += -1
                }
                scroll_interval = 1
                break;
            } else if (input.buttonIsPressed(Button.B)) {
                if (animation_scroll == 1) {
                    scroll_interval = 45
                } else {
                    scroll_interval = 1
                }
                if (selected_menu == 9) {
                    selected_menu = 1
                    scroll_interval = 1
                } else {
                    selected_menu += 1
                }
                break;
            } else if (input.logoIsPressed()) {
                break;
            }
        }
        if (input.logoIsPressed()) {
            break;
        }
    }
    scroll_interval = 1
    led.fadeOut(fade_int)
    led.fadeIn(fade_int)
    if (selected_menu == 1) {
        game_select_menu()
    } else if (selected_menu == 2) {
        tool_select_menu()
    } else if (selected_menu == 3) {
        turtle_main()
    } else if (selected_menu == 4) {
        bluetooth_select_menu()
    } else if (selected_menu == 5) {
        create_select_menu()
    } else if (selected_menu == 6) {
        selected_serial_if = true
        send_select_menu()
    } else if (selected_menu == 7) {
        selected_uart = true
        send_select_menu()
    } else if (selected_menu == 8) {
        data_logging_freq_menu()
    } else if (selected_menu == 9) {
        settings_select_menu()
    }}
function game_select_menu() { //Game selection.
    while (true) {
        if (game_mode == 0) {
            led.unplot(4, 0)
        } else if (game_mode == 1) {
            led.unplot(0, 0)
        } else if (game_mode == 2) {
            led.unplot(1, 0)
        } else if (game_mode == 9) {
            led.unplot(3, 0)
        } else {
            led.unplot(2, 0)
        }
        if (game_mode == 0) {
            image_back.scrollImage(1, scroll_interval)
            ckeck_hold_a()
            } else if (game_mode == 1) {
            image_space_invaders.scrollImage(1, scroll_interval)
            } else if (game_mode == 2) {
            image_flappy_bird.scrollImage(1, scroll_interval)
            } else if (game_mode == 3) {
            image_pong.scrollImage(1, scroll_interval)
            } else if (game_mode == 4) {
            image_cars_game.scrollImage(1, scroll_interval)
            } else if (game_mode == 5) {
            image_dino_game.scrollImage(1, scroll_interval)
            } else if (game_mode == 6) {
            image_jumping_rope.scrollImage(1, scroll_interval)
            } else if (game_mode == 7) {
            image_pac_man.scrollImage(1, scroll_interval)
            } else if (game_mode == 8) {
            image_tetris.scrollImage(1, scroll_interval)
            } else if (game_mode == 9) {
            image_ttt.scrollImage(1, scroll_interval)
            ckeck_hold_b()
            }
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        draw_menu()
        if (game_mode == 0) {
            led.plot(0, 0)
        } else if (game_mode == 1) {
            led.plot(1, 0)
        } else if (game_mode == 8) {
            led.plot(3, 0)
        } else if (game_mode == 9) {
            led.plot(4, 0)
        } else {
            led.plot(2, 0)
        }
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                if (game_mode == 0) {
                    game_mode = 9
                } else {
                    game_mode += -1
                }
                scroll_interval = 1
                break;
            } else if (input.buttonIsPressed(Button.B)) {
                if (animation_scroll == 1) {
                    scroll_interval = 45
                } else {
                    scroll_interval = 1
                }
                if (game_mode == 9) {
                    game_mode = 0
                    scroll_interval = 1
                } else {
                    game_mode += 1
                }
                break;
            } else if (input.logoIsPressed()) {
                break;
            }
        }
        if (input.logoIsPressed()) {
            break;
        }
    }
    scroll_interval = 1
    led.fadeOut(fade_int)
    led.fadeIn(fade_int)
    if (game_mode == 0) {
        menu_select_menu()
    } else if (game_mode == 1) {
        for (let index2 = 0; index2 <= 4; index2++) {
            enemyX_1[index2] = randint(0, 4)
            enemyY_1[index2] = index2 * -1
            killed_1[index2] = 0
        }
        basic.clearScreen()
    } else if (game_mode == 2) {
        bird_2 = game.createSprite(0, 2)
        bird_2.set(LedSpriteProperty.Blink, 150)
        bird_move_2 = true
        obstacles_2 = []
        let index_2 = 0
        game_mode_2()
    } else if (game_mode == 3) {
        game_mode_3()
    } else if (game_mode == 5) {
        player_5 = [game.createSprite(0, 3), game.createSprite(0, 4)]
        obstacles_5 = []
        is_game_over_5 = false
        player_move_5 = true
    } else if (game_mode == 6) {
        basic.clearScreen()
        game_mode_6()
    } else if (game_mode == 7) {
        basic.clearScreen()
        ghost_7 = game.createSprite(0, 0)
        pac_man_7 = game.createSprite(2, 2)
        food_7 = game.createSprite(4, 4)
        ghost_7.set(LedSpriteProperty.Blink, 200)
        food_7.set(LedSpriteProperty.Brightness, 20)
        game_mode_7()
    } else if (game_mode == 8) {
        gameon_8 = true
        basic.clearScreen()
        canFall_8 = true
        while (!(gameOver_8)) {
            y_8 = 0
            x_8 = randint(0, 4)
            canFall_8 = true
            led.plot(x_8, y_8)
            while (canFall_8) {
                basic.pause(delay_8)
                tryFall()
            }
        }
        basic.clearScreen()
        basic.showString("S:")
        basic.showNumber(score_8)
        control.reset()
    } else if (game_mode == 9) {
        game_mode_9()
    }}

function tool_select_menu() { //Tool selection.
    while (true) {
        if (selected_tool == 0) {
            led.unplot(4, 0)
        } else if (selected_tool == 1) {
            led.unplot(0, 0)
        } else if (selected_tool == 2) {
            led.unplot(1, 0)
        } else if (selected_tool == 10) {
            led.unplot(3, 0)
        } else {
            led.unplot(2, 0)
        }
            if (selected_tool == 0) {
                image_back.scrollImage(1, scroll_interval)
                ckeck_hold_a()
            } else if (selected_tool == 1) {
                image_tempereture.scrollImage(1, scroll_interval)
            } else if (selected_tool == 2) {
                image_light.scrollImage(1, scroll_interval)
            } else if (selected_tool == 3) {
                image_sound.scrollImage(1, scroll_interval)
            } else if (selected_tool == 4) {
                image_north.scrollImage(1, scroll_interval)
            } else if (selected_tool == 5) {
                image_x.scrollImage(1, scroll_interval)
            } else if (selected_tool == 6) {
                image_y.scrollImage(1, scroll_interval)
            } else if (selected_tool == 7) {
                image_z.scrollImage(1, scroll_interval)
            } else if (selected_tool == 8) {
                image_note.scrollImage(1, scroll_interval)
            } else if (selected_tool == 9) {
                image_calculator.scrollImage(1, scroll_interval)
            } else if (selected_tool == 10) {
                image_clock.scrollImage(1, scroll_interval)
                ckeck_hold_b()
            }
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        draw_menu()
        if (selected_tool == 0) {
            led.plot(0, 0)
        } else if (selected_tool == 1) {
            led.plot(1, 0)
        } else if (selected_tool == 9) {
            led.plot(3, 0)
        } else if (selected_tool == 10) {
            led.plot(4, 0)
        } else {
            led.plot(2, 0)
        }
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                if (selected_tool == 0) {
                    selected_tool = 10
                } else {
                    selected_tool += -1
                }
                scroll_interval = 1
                break;
            } else if (input.buttonIsPressed(Button.B)) {
                if (animation_scroll == 1) {
                    scroll_interval = 45
                } else {
                    scroll_interval = 1
                }
                if (selected_tool == 10) {
                    selected_tool = 0
                    scroll_interval = 1
                } else {
                    selected_tool += 1
                }
                break;
            } else if (input.logoIsPressed()) {
                break;
            }
        }
        if (input.logoIsPressed()) {
            break;
        }
    }
    scroll_interval = 1
    led.fadeOut(fade_int)
    led.fadeIn(fade_int)
    basic.clearScreen()
    let tool_type = 1
    if (selected_tool == 0) {
        menu_select_menu()
    } else if (selected_tool == 4) {
        tool_compass()
    } else if (selected_tool == 8) {
        tool_record()
    } else if (selected_tool == 9) {
        tool_calculator_menu()
    } else if (selected_tool == 10) {
        tool_clock_menu()
    } else {
        if (selected_tool == 1) {
            graph_var2 = 50
        } else if (selected_tool == 2) {
            graph_var2 = 255
        } else if (selected_tool == 3) {
            graph_var2 = 255
        } else if (selected_tool == 5) {
            graph_var2 = 1023
        } else if (selected_tool == 6) {
            graph_var2 = 1023
        } else if (selected_tool == 7) {
            graph_var2 = 1023
        }
        while (true) {
            if (tool_type == 1) {
                if (selected_tool == 1) {
                    basic.showNumber(input.temperature())
                } else if (selected_tool == 2) {
                    basic.showNumber(input.lightLevel())
                } else if (selected_tool == 3) {
                    basic.showNumber(input.soundLevel())
                } else if (selected_tool == 5) {
                    basic.showNumber(input.acceleration(Dimension.X))
                } else if (selected_tool == 6) {
                    basic.showNumber(input.acceleration(Dimension.Y))
                } else if (selected_tool == 7) {
                    basic.showNumber(input.acceleration(Dimension.Z))
                }
                if (input.logoIsPressed()) {
                    basic.clearScreen()
                    tool_type = 2
                    game.addScore(1)
                    basic.pause(500)
                }
            }
            if (tool_type == 2) {
                if (selected_tool == 1) {
                    graph_var1 = input.temperature()
                } else if (selected_tool == 2) {
                    graph_var1 = input.lightLevel()
                } else if (selected_tool == 3) {
                    graph_var1 = input.soundLevel()
                } else if (selected_tool == 5) {
                    graph_var1 = input.acceleration(Dimension.X)
                } else if (selected_tool == 6) {
                    graph_var1 = input.acceleration(Dimension.Y)
                } else if (selected_tool == 7) {
                    graph_var1 = input.acceleration(Dimension.Z)
                }
                plot_graph()
                if (custom_graph != 12) {
                    basic.pause(50)
                }
                basic.clearScreen()
                if (input.logoIsPressed()) {
                    basic.clearScreen()
                    tool_type = 1
                    game.addScore(1)
                    basic.pause(500)
                }
            }
        }
    }}
function tool_calculator_menu() { //Calculator type selection.
    while (true) {
        if (selected_math == 0) {
            led.unplot(0, 0)
        } else if (selected_math == 1) {
            led.unplot(1, 0)
        } else if (selected_math == 11) {
            led.unplot(3, 0)
        } else {
            led.unplot(2, 0)
        }
            if (selected_math == 0) {
            image_back.scrollImage(1, scroll_interval)
            ckeck_hold_a()
            } else if (selected_math == 1){
            image_plus.scrollImage(1, scroll_interval)
            } else if (selected_math == 2) {
                image_minus.scrollImage(1, scroll_interval)
            } else if (selected_math == 3) {
                image_times.scrollImage(1, scroll_interval)
            } else if (selected_math == 4) {
                image_divide.scrollImage(1, scroll_interval)
            } else if (selected_math == 5) {
                image_caret.scrollImage(1, scroll_interval)
            } else if (selected_math == 6) {
                image_sqr.scrollImage(1, scroll_interval)
            } else if (selected_math == 7) {
                image_sin.scrollImage(1, scroll_interval)
            } else if (selected_math == 8) {
                image_cosin.scrollImage(1, scroll_interval)
            } else if (selected_math == 9) {
                image_tangent.scrollImage(1, scroll_interval)
            } else if (selected_math == 10) {
                image_pi.scrollImage(1, scroll_interval)
            } else if (selected_math == 11) {
                image_random.scrollImage(1, scroll_interval)
                ckeck_hold_b()
            }
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        draw_menu()
        if (selected_math == 0) {
            led.plot(0, 0)
        } else if (selected_math == 1) {
            led.plot(1, 0)
        } else if (selected_math == 10) {
            led.plot(3, 0)
        } else if (selected_math == 11) {
            led.plot(4, 0)
        } else {
            led.plot(2, 0)
        }
        while (waiting_for_input == true) {
            if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                if (selected_math == 0) {
                    selected_math = 11
                } else {
                    selected_math += -1
                }
                scroll_interval = 1
                break;
            } else if (input.buttonIsPressed(Button.B)) {
                if (animation_scroll == 1) {
                    scroll_interval = 45
                } else {
                    scroll_interval = 1
                }
                if (selected_math == 11) {
                    selected_math = 0
                    scroll_interval = 1
                } else {
                    selected_math += 1
                }
                break;
            } else if (input.logoIsPressed()) {
                break;
            }
        }
        if (input.logoIsPressed()) {
            break;
        }
    }
    led.fadeOut(fade_int)
    led.fadeIn(fade_int)
    if (selected_math == 1 || selected_math == 2 || selected_math == 3 || selected_math == 4 || selected_math == 5 || selected_math == 11) {
        math_xy()
    } else if (selected_math == 6 || selected_math == 7 || selected_math == 8 || selected_math == 9) {
        math_x()
    } else if (selected_math == 10) {
        basic.clearScreen()
        basic.showNumber(Math.PI)
        tool_calculator_menu()
    } else if (selected_math == 0) {
        tool_select_menu()
    }}
function tool_clock_menu() { //Clock type selection.
    while (true) {
        if (selected_clock == 0) {
            led.unplot(4, 0)
        } else if (selected_clock == 1) {
            led.unplot(0, 0)
        } else if (selected_clock == 2) {
            led.unplot(1, 0)
        } else if (selected_clock == 4) {
            led.unplot(3, 0)
        } else {
            led.unplot(2, 0)
        }
        if (selected_clock == 0) {
            image_back.scrollImage(1, scroll_interval)
            ckeck_hold_a()
        } else if (selected_clock == 1) {
            image_signal.scrollImage(1, scroll_interval)
            ckeck_hold_a()
        } else if (selected_clock == 2) {
            image_chronometer.scrollImage(1, scroll_interval)
        } else if (selected_clock == 3) {
            image_timer.scrollImage(1, scroll_interval)
        } else if (selected_clock == 4) {
            image_clock.scrollImage(1, scroll_interval)
            ckeck_hold_b()
        }
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        draw_menu()
        if (selected_clock == 0) {
            led.plot(0, 0)
        } else if (selected_clock == 1) {
            led.plot(1, 0)
        } else if (selected_clock == 3) {
            led.plot(3, 0)
        } else if (selected_clock == 4) {
            led.plot(4, 0)
        } else {
            led.plot(2, 0)
        }
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                if (selected_clock == 0) {
                    selected_clock = 4
                } else {
                    selected_clock += -1
                }
                scroll_interval = 1
                break;
            } else if (input.buttonIsPressed(Button.B)) {
                if (animation_scroll == 1) {
                    scroll_interval = 45
                } else {
                    scroll_interval = 1
                }
                if (selected_clock == 4) {
                    selected_clock = 0
                    scroll_interval = 1
                } else {
                    selected_clock += 1
                }
                break;
            } else if (input.logoIsPressed()) {
                break;
            }
        }
        if (input.logoIsPressed()) {
            break;
        }
    }
    led.fadeOut(fade_int)
    led.fadeIn(fade_int)
    if (selected_clock == 1) {
        signal()
    } else if (selected_clock == 2) {
        chronometer()
    } else if (selected_clock == 3) {
        timer()
    } else if (selected_clock == 4) {
        clock()
    } else if (selected_clock == 0) {
        tool_select_menu()
    }}
function turtle_main() { //Turtle extension.
    music.setBuiltInSpeakerEnabled(true)
    let pen_up = false
    turtle.setPosition(2, 2)
    turtle.setBrightness(20)
    turtle.pen(TurtlePenMode.Down)
    turtle.home()
    while (true) {
        if (input.buttonIsPressed(Button.A)) {
            turtle.turnLeft()
            music.play(music.tonePlayable(220, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
        }
        if (input.buttonIsPressed(Button.B)) {
            turtle.turnRight()
            music.play(music.tonePlayable(220, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
        }
        if (input.buttonIsPressed(Button.AB)) {
            if (pen_up == false) {
                music.play(music.tonePlayable(880, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                pen_up = true
                turtle.pen(TurtlePenMode.Up)
            } else {
                music.play(music.tonePlayable(880, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                pen_up = false
                turtle.pen(TurtlePenMode.Down)
            }
        }
        if (input.logoIsPressed()) {
            turtle.forward(1)
        }
        if (input.isGesture(Gesture.Shake)) {
            turtle.back(1)
        }
        basic.pause(200)
    }}
function bluetooth_select_menu() { //Bluetooth send type selection.
    while (true) {
        if (bluetooth_type == 0) {
            led.unplot(4, 0)
        } else if (bluetooth_type == 1) {
            led.unplot(0, 0)
        } else if (bluetooth_type == 2) {
            led.unplot(1, 0)
        } else if (bluetooth_type == 3) {
            led.unplot(2, 0)
        } else if (bluetooth_type == 4) {
            led.unplot(3, 0)
        }
        if (bluetooth_type == 0) {
            image_back.scrollImage(1, scroll_interval)
            ckeck_hold_a()
            } else if (bluetooth_type == 1) {
                image_note.scrollImage(1, scroll_interval)
            } else if (bluetooth_type == 2) {
            image_mouse.scrollImage(1, scroll_interval)
            } else if (bluetooth_type == 3) {
            image_gamepad.scrollImage(1, scroll_interval)
            } else if (bluetooth_type == 4) {
            image_keyboard.scrollImage(1, scroll_interval)
            ckeck_hold_b()
            }
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        draw_menu()
        if (bluetooth_type == 0) {
            led.plot(0, 0)
        } else if (bluetooth_type == 1) {
            led.plot(1, 0)
        } else if (bluetooth_type == 2) {
            led.plot(2, 0)
        } else if (bluetooth_type == 3) {
            led.plot(3, 0)
        } else if (bluetooth_type == 4) {
            led.plot(4, 0)
        }
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                if (bluetooth_type == 0) {
                    bluetooth_type = 4
                } else {
                    bluetooth_type += -1
                }
                scroll_interval = 1
                break;
            }
            if (input.buttonIsPressed(Button.B)) {
                if (animation_scroll == 1) {
                    scroll_interval = 45
                } else {
                    scroll_interval = 1
                }
                if (bluetooth_type == 4) {
                    bluetooth_type = 0
                    scroll_interval = 1
                } else {
                    bluetooth_type += 1
                }
                break;
            }
            if (input.logoIsPressed()) {
                break;
            }
        }
        if (input.logoIsPressed()) {
            break;
        }
    }
    scroll_interval = 1
    led.fadeOut(fade_int)
    led.fadeIn(fade_int)
    basic.clearScreen()
    if (bluetooth_type == 0) {
        menu_select_menu()
    } else if (bluetooth_type == 4) {
        bluetooth_keyboard_menu()
    } else {
        waiting_for_connection()
    }}
function bluetooth_keyboard_menu() { //Bluetooth keyboard type selection.
    while (true) {
        if (bluetooth_keyboard_type == 0) {
            led.unplot(4, 0)
        } else if (bluetooth_keyboard_type == 1) {
            led.unplot(0, 0)
        } else if (bluetooth_keyboard_type == 2) {
            led.unplot(1, 0)
        } else if (bluetooth_keyboard_type == 3) {
            led.unplot(2, 0)
        } else if (bluetooth_keyboard_type == 4) {
            led.unplot(3, 0)
        }
        if (bluetooth_keyboard_type == 0) {
            image_back.scrollImage(1, scroll_interval)
            ckeck_hold_a()
            } else if (bluetooth_keyboard_type == 1) {
            image_keyboard.scrollImage(1, scroll_interval)
            } else if (bluetooth_keyboard_type == 2) {
            image_numbers.scrollImage(1, scroll_interval)
            } else if (bluetooth_keyboard_type == 3) {
            image_arrows.scrollImage(1, scroll_interval)
            } else if (bluetooth_keyboard_type == 4) {
            image_cosin.scrollImage(1, scroll_interval)
            ckeck_hold_b()
            }
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        draw_menu()
        if (bluetooth_keyboard_type == 0) {
            led.plot(0, 0)
        } else if (bluetooth_keyboard_type == 1) {
            led.plot(1, 0)
        } else if (bluetooth_keyboard_type == 2) {
            led.plot(2, 0)
        } else if (bluetooth_keyboard_type == 3) {
            led.plot(3, 0)
        } else if (bluetooth_keyboard_type == 4) {
            led.plot(4, 0)
        }
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                if (bluetooth_keyboard_type == 0) {
                    bluetooth_keyboard_type = 4
                } else {
                    bluetooth_keyboard_type += -1
                }
                scroll_interval = 1
                break;
            }
            if (input.buttonIsPressed(Button.B)) {
                if (animation_scroll == 1) {
                    scroll_interval = 45
                } else {
                    scroll_interval = 1
                }
                if (bluetooth_keyboard_type == 4) {
                    bluetooth_keyboard_type = 0
                    scroll_interval = 1
                } else {
                    bluetooth_keyboard_type += 1
                }
                break;
            }
            if (input.logoIsPressed()) {
                break;
            }
        }
        if (input.logoIsPressed()) {
            break;
        }
    }
    led.fadeOut(fade_int)
    led.fadeIn(fade_int)
    basic.clearScreen()
    if (bluetooth_keyboard_type == 0) {
        scroll_interval = 1
        bluetooth_select_menu()
    } else {
        waiting_for_connection()
    }}
function create_select_menu() { //Create type selection.
    while (true) {
        if (create_type == 0) {
            led.unplot(4, 0)
        } else if (create_type == 1) {
            led.unplot(0, 0)
        } else if (create_type == 2) {
            led.unplot(1, 0)
        } else if (create_type == 3) {
            led.unplot(2, 0)
        } else if (create_type == 4) {
            led.unplot(3, 0)
        }
        if (create_type == 0) {
            image_back.scrollImage(1, scroll_interval)
            ckeck_hold_a()
            } else if (create_type == 1) {
            image_numberone.scrollImage(1, scroll_interval)
            } else if (create_type == 2) {
                image_text.scrollImage(1, scroll_interval)
            } else if (create_type == 3) {
                image_note.scrollImage(1, scroll_interval)
            } else if (create_type == 4) {
            image_image.scrollImage(1, scroll_interval)
            ckeck_hold_b()
            }
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        draw_menu()
        if (create_type == 0) {
            led.plot(0, 0)
        } else if (create_type == 1) {
            led.plot(1, 0)
        } else if (create_type == 2) {
            led.plot(2, 0)
        } else if (create_type == 3) {
            led.plot(3, 0)
        } else if (create_type == 4) {
            led.plot(4, 0)
        }
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                if (create_type == 0) {
                    create_type = 4
                } else {
                    create_type += -1
                }
                scroll_interval = 1
                break;
            } else if (input.buttonIsPressed(Button.B)) {
                if (animation_scroll == 1) {
                    scroll_interval = 45
                } else {
                    scroll_interval = 1
                }
                if (create_type == 4) {
                    create_type = 0
                    scroll_interval = 1
                } else {
                    create_type += 1
                }
                break;
            } else if (input.logoIsPressed()) {
                break;
            }
        }
        if (input.logoIsPressed()) {
            break;
        }
    }
    scroll_interval = 1
    led.fadeOut(fade_int)
    led.fadeIn(fade_int)
    if (create_type == 1) {
        create_number()
    } else if (create_type == 2) {
        create_strig()
    } else if (create_type == 3) {
        create_music_menu()
    } else if (create_type == 4) {
        create_image()
    } else {
        menu_select_menu()
    }}
function custom_music_selection() { //Custom music selection.
    while (true) {
        if (selected_create_music == 1) {
            led.unplot(3, 0)
            led.unplot(4, 0)
        } else if (selected_create_music == 2) {
            led.unplot(1, 0)
            led.unplot(0, 0)
        } else if (selected_create_music == 3) {
            led.unplot(2, 0)
        }
        if (selected_create_music == 1) {
            image_note.scrollImage(1, scroll_interval)
            ckeck_hold_a()
            } else if (selected_create_music == 2) {
            image_rest.scrollImage(1, scroll_interval)
            } else if (selected_create_music == 3) {
            image_play.scrollImage(1, scroll_interval)
            ckeck_hold_b()
            }
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        draw_menu()
        if (selected_create_music == 1) {
            led.plot(0, 0)
            led.plot(1, 0)
        } else if (selected_create_music == 2) {
            led.plot(2, 0)
        } else if (selected_create_music == 3) {
            led.plot(3, 0)
            led.plot(4, 0)
        }
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                if (selected_create_music == 1) {
                    selected_create_music = 3
                } else {
                    selected_create_music += -1
                }
                scroll_interval = 1
                break;
            } else if (input.buttonIsPressed(Button.B)) {
                if (animation_scroll == 1) {
                    scroll_interval = 45
                } else {
                    scroll_interval = 1
                }
                if (selected_create_music == 3) {
                    selected_create_music = 1
                    scroll_interval = 1
                } else {
                    selected_create_music += 1
                }
                break;
            } else if (input.logoIsPressed()) {
                break;
            }
        }
        if (input.logoIsPressed()) {
            break;
        }
    }
    led.fadeOut(fade_int)
    led.fadeIn(fade_int)
    if (selected_create_music == 1) {
        tune()
    } else if (selected_create_music == 2) {
        rest()
    } else {
        melody_play()
    }}
function create_music_menu() { //Built-in music selection.
    while (true) {
        if (selected_music == 1) {
            led.unplot(4, 0)
        } else if (selected_music == 2) {
            led.unplot(0, 0)
        } else if (selected_music == 3) {
            led.unplot(1, 0)
        } else if (selected_music == 4) {
            led.unplot(2, 0)
        } else if (selected_music == 5) {
            led.unplot(3, 0)
        }
        if (selected_music == 1) {
            image_music8.scrollImage(1, scroll_interval)
            ckeck_hold_a()
            } else if (selected_music == 2) {
            image_note.scrollImage(1, scroll_interval)
            } else if (selected_music == 3) {
            image_musicv2.scrollImage(1, scroll_interval)
            } else if (selected_music == 4) {
            image_musicfx.scrollImage(1, scroll_interval)
            } else if (selected_music == 5) {
            image_create.scrollImage(1, scroll_interval)
            ckeck_hold_b()
            }
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        draw_menu()
        if (selected_music == 1) {
            led.plot(0, 0)
        } else if (selected_music == 2) {
            led.plot(1, 0)
        } else if (selected_music == 3) {
            led.plot(2, 0)
        } else if (selected_music == 4) {
            led.plot(3, 0)
        } else if (selected_music == 5) {
            led.plot(4, 0)
        }
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                if (selected_music == 1) {
                    selected_music = 5
                } else {
                    selected_music += -1
                }
                scroll_interval = 1
                break;
            } else if (input.buttonIsPressed(Button.B)) {
                if (animation_scroll == 1) {
                    scroll_interval = 45
                } else {
                    scroll_interval = 1
                }
                if (selected_music == 5) {
                    selected_music = 1
                    scroll_interval = 1
                } else {
                    selected_music += 1
                }
                break;
            } else if (input.logoIsPressed()) {
                break;
            }
        }
        if (input.logoIsPressed()) {
            break;
        }
    }
    led.fadeOut(fade_int)
    led.fadeIn(fade_int)
    if (selected_music == 1) {
        music_melody8()
    } else if (selected_music == 2) {
        music_melody()
    } else if (selected_music == 3) {
        music_melodyV2()
    } else if (selected_music == 4) {
        music_sFX()
    } else {
        scroll_interval = 1
        custom_music_selection()
    }}

function send_select_menu() { //Send selection.
    while (true) {
        if (selected_serial == 0) {
            led.unplot(3, 0)
            led.unplot(4, 0)
        } else if (selected_serial == 1) {
            led.unplot(1, 0)
            led.unplot(0, 0)
        } else if (selected_serial == 2) {
            led.unplot(2, 0)
        }
        if (selected_serial == 0) {
            image_back.scrollImage(1, scroll_interval)
            ckeck_hold_a()
            } else if (selected_serial == 1) {
                image_north.scrollImage(1, scroll_interval)
            } else if (selected_serial == 2) {
            image_send.scrollImage(1, scroll_interval)
            ckeck_hold_b()
            }
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        draw_menu()
        if (selected_serial == 0) {
            led.plot(0, 0)
            led.plot(1, 0)
        } else if (selected_serial == 1) {
            led.plot(2, 0)
        } else if (selected_serial == 2) {
            led.plot(3, 0)
            led.plot(4, 0)
        }
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                if (selected_serial == 0) {
                    selected_serial = 2
                } else {
                    selected_serial += -1
                }
                scroll_interval = 1
                break;
            } else if (input.buttonIsPressed(Button.B)) {
                if (animation_scroll == 1) {
                    scroll_interval = 45
                } else {
                    scroll_interval = 1
                }
                if (selected_serial == 2) {
                    selected_serial = 0
                    scroll_interval = 1
                } else {
                    selected_serial += 1
                }
                break;
            } else if (input.logoIsPressed()) {
                break;
            }
        }
        if (input.logoIsPressed()) {
            break;
        }
    }
    led.fadeOut(fade_int)
    led.fadeIn(fade_int)
    basic.clearScreen()
    scroll_interval = 1
    if (selected_serial == 0) {
        menu_select_menu()
    } else if (selected_serial == 1) {
        send_type_select_menu()
    } else if (selected_serial == 2) {
        line_sent = true
    }}
function send_type_select_menu() { //Send types selection.
    while (true) {
        if (selected_serial_send == 0) {
            led.unplot(4, 0)
        } else if (selected_serial_send == 1) {
            led.unplot(0, 0)
        } else if (selected_serial_send == 2) {
            led.unplot(1, 0)
        } else if (selected_serial_send == 10) {
            led.unplot(3, 0)
        } else {
            led.unplot(2, 0)
        }
        if (selected_serial_send == 0) {
            image_back.scrollImage(1, scroll_interval)
            ckeck_hold_a()
            } else if (selected_serial_send == 1) {
                image_arrows.scrollImage(1, scroll_interval)
            } else if (selected_serial_send == 2) {
                image_tempereture.scrollImage(1, scroll_interval)
            } else if (selected_serial_send == 3) {
                image_light.scrollImage(1, scroll_interval)
            } else if (selected_serial_send == 4) {
            image_sound.scrollImage(1, scroll_interval)
            } else if (selected_serial_send == 5) {
            image_north.scrollImage(1, scroll_interval)
            } else if (selected_serial_send == 6) {
                image_x.scrollImage(1, scroll_interval)
            } else if (selected_serial_send == 7) {
                image_y.scrollImage(1, scroll_interval)
            } else if (selected_serial_send == 8) {
                image_z.scrollImage(1, scroll_interval)
            } else if (selected_serial_send == 9) {
                image_numberone.scrollImage(1, scroll_interval)
            } else if (selected_serial_send == 10) {
            image_text.scrollImage(1, scroll_interval)
            ckeck_hold_b()
            }
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        draw_menu()
        if (selected_serial_send == 0) {
            led.plot(0, 0)
        } else if (selected_serial_send == 1) {
            led.plot(1, 0)
        } else if (selected_serial_send == 9) {
            led.plot(3, 0)
        } else if (selected_serial_send == 10) {
            led.plot(4, 0)
        } else {
            led.plot(2, 0)
        }
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                if (selected_serial_send == 0) {
                    selected_serial_send = 10
                } else {
                    selected_serial_send += -1
                }
                scroll_interval = 1
                break;
            } else if (input.buttonIsPressed(Button.B)) {
                if (animation_scroll == 1) {
                    scroll_interval = 45
                } else {
                    scroll_interval = 1
                }
                if (selected_serial_send == 10) {
                    selected_serial_send = 0
                    scroll_interval = 1
                } else {
                    selected_serial_send += 1
                }
                break;
            } else if (input.logoIsPressed()) {
                break;
            }
        }
        if (input.logoIsPressed()) {
            break;
        }
    }
    led.fadeOut(fade_int)
    led.fadeIn(fade_int)
    basic.clearScreen()
    if (selected_serial_send == 0) {
        scroll_interval = 1
        send_select_menu()
    } else if (selected_serial_send == 1) {
        send_input()
    } else if (selected_serial_send == 9) {
        send_number()
    } else if (selected_serial_send == 10) {
        send_string()
    } else {
        let send_id = 0
        while (true) {
            if (selected_serial_send == 2) {
                send_id = input.temperature()
            } else if (selected_serial_send == 3) {
                send_id = input.lightLevel()
            } else if (selected_serial_send == 4) {
                send_id = input.soundLevel()
            } else if (selected_serial_send == 5) {
                send_id = input.compassHeading()
            } else if (selected_serial_send == 6) {
                send_id = input.acceleration(Dimension.X)
            } else if (selected_serial_send == 7) {
                send_id = input.acceleration(Dimension.Y)
            } else if (selected_serial_send == 8) {
                send_id = input.acceleration(Dimension.Z)
            }
            if (selected_uart == true) {
                uart_send = "" + send_id
                bluetooth.uartWriteLine(uart_send)
            } else if (selected_serial_if == true) {
                serial.writeLine("" + (send_id))
            }
        }
    }}
function data_logging_freq_menu() { //Data logging freq selection
    while (true) {
        if (logging_freq == 0) {
            led.unplot(4, 0)
        } else if (logging_freq == 1) {
            led.unplot(0, 0)
        } else if (logging_freq == 2) {
            led.unplot(1, 0)
        } else if (logging_freq == 3) {
            led.unplot(2, 0)
        } else if (logging_freq == 4) {
            led.unplot(3, 0)
        }
        if (logging_freq == 0) {
            image_back.scrollImage(1, scroll_interval)
            ckeck_hold_a()
        } else if (logging_freq == 1) {
            image_milisecond.scrollImage(1, scroll_interval)
        } else if (logging_freq == 2) {
            image_second.scrollImage(1, scroll_interval)
        } else if (logging_freq == 3) {
            image_minute.scrollImage(1, scroll_interval)
        } else if (logging_freq == 4) {
            image_hour.scrollImage(1, scroll_interval)
            ckeck_hold_b()
        }
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        draw_menu()
        if (logging_freq == 0) {
            led.plot(0, 0)
        } else if (logging_freq == 1) {
            led.plot(1, 0)
        } else if (logging_freq == 2) {
            led.plot(2, 0)
        } else if (logging_freq == 3) {
            led.plot(3, 0)
        } else if (logging_freq == 4) {
            led.plot(4, 0)
        }
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                if (logging_freq == 0) {
                    logging_freq = 4
                } else {
                    logging_freq += -1
                }
                scroll_interval = 1
                break;
            }
            if (input.buttonIsPressed(Button.B)) {
                if (animation_scroll == 1) {
                    scroll_interval = 45
                } else {
                    scroll_interval = 1
                }
                if (logging_freq == 4) {
                    logging_freq = 0
                    scroll_interval = 1
                } else {
                    logging_freq += 1
                }
                break;
            }
            if (input.logoIsPressed()) {
                break;
            }
        }
        if (input.logoIsPressed()) {
            break;
        }
    }
    datalogger.deleteLog(datalogger.DeleteType.Full)
    scroll_interval = 1
    led.fadeOut(fade_int)
    led.fadeIn(fade_int)
    basic.clearScreen()
    if (logging_freq == 1) {
        datalogger.includeTimestamp(FlashLogTimeStampFormat.Milliseconds)
        datalogger.setColumnTitles("Temperature", "Light level", "Sound level", "Compass heading", "Acceleration X", "Acceleration Y", "Acceleration Z")
        data_logger_menu()
    }
    if (logging_freq == 2) {
        datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)
        datalogger.setColumnTitles("Temperature", "Light level", "Sound level", "Compass heading", "Acceleration X", "Acceleration Y", "Acceleration Z")
        data_logger_menu()
    }
    if (logging_freq == 3) {
        datalogger.includeTimestamp(FlashLogTimeStampFormat.Minutes)
        datalogger.setColumnTitles("Temperature", "Light level", "Sound level", "Compass heading", "Acceleration X", "Acceleration Y", "Acceleration Z")
        data_logger_menu()
    }
    if (logging_freq == 4) {
        datalogger.includeTimestamp(FlashLogTimeStampFormat.Hours)
        datalogger.setColumnTitles("Temperature", "Light level", "Sound level", "Compass heading", "Acceleration X", "Acceleration Y", "Acceleration Z")
        data_logger_menu()
    }
    if (logging_freq == 0) {
        menu_select_menu()
    }}
function data_logger_menu() {  //Log input data.
    while (true) {
        if (selected_log_tool == 0) {
            led.unplot(4, 0)
        } else if (selected_log_tool == 1) {
            led.unplot(0, 0)
        } else if (selected_log_tool == 2) {
            led.unplot(1, 0)
        } else if (selected_log_tool == 7) {
            led.unplot(3, 0)
        } else {
            led.unplot(2, 0)
        }
        if (selected_log_tool == 0) {
            image_back.scrollImage(1, scroll_interval)
            ckeck_hold_a()
        } else if (selected_log_tool == 1) {
            image_tempereture.scrollImage(1, scroll_interval)
        } else if (selected_log_tool == 2) {
            image_light.scrollImage(1, scroll_interval)
        } else if (selected_log_tool == 3) {
            image_sound.scrollImage(1, scroll_interval)
        } else if (selected_log_tool == 4) {
            image_north.scrollImage(1, scroll_interval)
        } else if (selected_log_tool == 5) {
            image_x.scrollImage(1, scroll_interval)
        } else if (selected_log_tool == 6) {
            image_y.scrollImage(1, scroll_interval)
        } else if (selected_log_tool == 7) {
            image_z.scrollImage(1, scroll_interval)
            ckeck_hold_b()
        }
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        draw_menu()
        if (selected_log_tool == 0) {
            led.plot(0, 0)
        } else if (selected_log_tool == 1) {
            led.plot(1, 0)
        } else if (selected_log_tool == 6) {
            led.plot(3, 0)
        } else if (selected_log_tool == 7) {
            led.plot(4, 0)
        } else {
            led.plot(2, 0)
        }
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                if (selected_log_tool == 0) {
                    selected_log_tool = 7
                } else {
                    selected_log_tool += -1
                }
                scroll_interval = 1
                break;
            } else if (input.buttonIsPressed(Button.B)) {
                if (animation_scroll == 1) {
                    scroll_interval = 45
                } else {
                    scroll_interval = 1
                }
                if (selected_log_tool == 7) {
                    selected_log_tool = 0
                    scroll_interval = 1
                } else {
                    selected_log_tool += 1
                }
                break;
            } else if (input.logoIsPressed()) {
                break;
            }
        }
        if (input.logoIsPressed()) {
            break;
        }
    }
    basic.clearScreen()
    led.fadeOut(fade_int)
    led.fadeIn(fade_int)
    let tool_type = 1
    if (selected_log_tool == 0) {
        menu_select_menu()
    } else {
        while (true) {
            if (selected_log_tool == 1) {
                datalogger.log(datalogger.createCV("Temperature", input.temperature()))
            } else if (selected_log_tool == 2) {
                datalogger.log(datalogger.createCV("Light level", input.lightLevel()))
            } else if (selected_log_tool == 3) {
                datalogger.log(datalogger.createCV("Sound level", input.soundLevel()))
            } else if (selected_log_tool == 4) {
                datalogger.log(datalogger.createCV("Compass heading", input.compassHeading()))
            } else if (selected_log_tool == 5) {
                datalogger.log(datalogger.createCV("Acceleration X", input.acceleration(Dimension.X)))
            } else if (selected_log_tool == 6) {
                datalogger.log(datalogger.createCV("Acceleration Y", input.acceleration(Dimension.Y)))
            } else if (selected_log_tool == 7) {
                datalogger.log(datalogger.createCV("Acceleration Z", input.acceleration(Dimension.Z)))
            }
            if (logging_freq == 1) {
                basic.pause(100)
            } else if (logging_freq == 2) {
                basic.pause(990)
            } else if (logging_freq == 1) {
                basic.pause(60000)
            } else if (logging_freq == 2) {
                basic.pause(3600000)
            }
        }
    }}
function settings_select_menu() { //Settings selection.
    while (true) {
        if (selected_setting == 0) {
            led.unplot(4, 0)
        } else if (selected_setting == 1) {
            led.unplot(0, 0)
        } else if (selected_setting == 2) {
            led.unplot(1, 0)
        } else if (selected_setting == 10) {
            led.unplot(3, 0)
        } else {
            led.unplot(2, 0)
        }
        if (selected_setting == 0) {
            image_back.scrollImage(1, scroll_interval)
            ckeck_hold_a()
        } else if (selected_setting == 1) {
            image_note.scrollImage(1, scroll_interval)
        } else if (selected_setting == 2) {
            if (settings_volume == 1) {
                image_volume.scrollImage(1, scroll_interval)
                led.plotBrightness(2, 1, 20)
                music.setVolume(50)
            } else if(settings_volume == 2) {
                image_volume.scrollImage(1, scroll_interval)
                led.plotBrightness(2, 1, 20)
                led.plotBrightness(3, 2, 20)
                music.setVolume(100)
            } else if (settings_volume == 3) {
                image_volume.scrollImage(1, scroll_interval)
                led.plotBrightness(2, 1, 20)
                led.plotBrightness(3, 2, 20)
                led.plotBrightness(3, 3, 20)
                music.setVolume(150)
            } else if (settings_volume == 4) {
                image_volume.scrollImage(1, scroll_interval)
                led.plotBrightness(2, 1, 20)
                led.plotBrightness(3, 2, 20)
                led.plotBrightness(3, 3, 20)
                led.plotBrightness(2, 4, 20)
                music.setVolume(200)
            } else {
                image_volume_full.scrollImage(1, scroll_interval)
                music.setVolume(255)
            }
        } else if (selected_setting == 3) {
            if (settings_brightness == 1) {
                led.setBrightness(50)
                image_brightness1.scrollImage(1, scroll_interval)
            } else if (settings_brightness == 2) {
                led.setBrightness(100)
                image_brightness2.scrollImage(1, scroll_interval)
            } else if (settings_brightness == 3) {
                led.setBrightness(150)
                image_brightness3.scrollImage(1, scroll_interval)
            } else if (settings_brightness == 4) {
                led.setBrightness(200)
                image_brightness4.scrollImage(1, scroll_interval)
            } else if (settings_brightness == 5) {
                led.setBrightness(255)
                image_brightness5.scrollImage(1, scroll_interval)
            }
        } else if (selected_setting == 4) {
            if (logged_data == 0) {
                image_log.scrollImage(1, scroll_interval)
            } else {
                image_yes.scrollImage(1, scroll_interval)
            }
        } else if (selected_setting == 5) {
            image_compass.scrollImage(1, scroll_interval)
        } else if (selected_setting == 6) {
            image_input.scrollImage(1, scroll_interval)
        } else if (selected_setting == 7) {
            image_rotate.scrollImage(1, scroll_interval)
        } else if (selected_setting == 8) {
            image_play.scrollImage(1, scroll_interval)
        } else if (selected_setting == 9) {
            if (custom_graph == 1) {
                image_bar.scrollImage(1, scroll_interval)
            } else if (custom_graph == 2) {
                image_bar_custom.scrollImage(1, scroll_interval)
            } else if (custom_graph == 3) {
                image_create.scrollImage(1, scroll_interval)
            } else if (custom_graph == 4) {
                image_spiral.scrollImage(1, scroll_interval)
            } else if (custom_graph == 5) {
                image_dial.scrollImage(1, scroll_interval)
            } else if (custom_graph == 6) {
                image_needle.scrollImage(1, scroll_interval)
            } else if (custom_graph == 7) {
                image_wave.scrollImage(1, scroll_interval)
            } else if (custom_graph == 8) {
                image_speedometer.scrollImage(1, scroll_interval)
            } else if (custom_graph == 9) {
                image_needle_c.scrollImage(1, scroll_interval)
            } else if (custom_graph == 10) {
                image_radio.scrollImage(1, scroll_interval)
            } else if (custom_graph == 11) {
                image_water.scrollImage(1, scroll_interval)
            } else if (custom_graph == 12) {
                image_procbar.scrollImage(1, scroll_interval)
            }
        } else if (selected_setting == 10) {
            image_send.scrollImage(1, scroll_interval)
            ckeck_hold_b()
        }
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        draw_menu()
        if (selected_setting == 0) {
            led.plot(0, 0)
        } else if (selected_setting == 1) {
            led.plot(1, 0)
        } else if (selected_setting == 9) {
            led.plot(3, 0)
        } else if (selected_setting == 10) {
            led.plot(4, 0)
        } else {
            led.plot(2, 0)
        }
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                if (selected_setting == 0) {
                    selected_setting = 10
                } else {
                    selected_setting += -1
                }
                scroll_interval = 1
                break;
            } else if (input.buttonIsPressed(Button.B)) {
                if (animation_scroll == 1) {
                    scroll_interval = 45
                } else {
                    scroll_interval = 1
                }
                if (selected_setting == 10) {
                    selected_setting = 0
                    scroll_interval = 1
                } else {
                    selected_setting += 1
                }
                break;
            } else if (input.logoIsPressed()) {
                scroll_interval = 1
                if (selected_setting == 1) {
                    if (settings_music == 0) {
                        music.setBuiltInSpeakerEnabled(true)
                        music.play(music.tonePlayable(294, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
                        music.play(music.tonePlayable(494, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
                        settings_music = 1
                        flashstorage.put("music", convertToText(settings_music))
                    } else {
                        music.play(music.tonePlayable(494, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
                        music.play(music.tonePlayable(294, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
                        music.setBuiltInSpeakerEnabled(false)
                        settings_music = 0
                        flashstorage.put("music", convertToText(settings_music))
                    }
                } else if (selected_setting == 2) {
                    if (settings_volume == 5) {
                        settings_volume = 1
                    } else {
                        settings_volume += 1
                    }
                    flashstorage.put("volume", convertToText(settings_volume))
                } else if (selected_setting == 3) {
                    if (settings_brightness == 5) {
                        settings_brightness = 1
                    } else {
                        settings_brightness += 1
                    }
                    flashstorage.put("brightness", convertToText(settings_brightness))
                } else if (selected_setting == 4) {
                    if (logged_data == 0) {
                        logged_data = 1
                        image_yes.scrollImage(1, scroll_interval)
                        datalogger.deleteLog(datalogger.DeleteType.Full)
                        datalogger.includeTimestamp(FlashLogTimeStampFormat.Minutes)
                        datalogger.setColumnTitles("Space Invaders", "Flappy Bird", "Pong", "Cars Game", "Dinasour Game", "Jumping Rope", "Pac-Man")
                    } else {
                        basic.showIcon(IconNames.No)
                    }
                    flashstorage.put("log", convertToText(logged_data))
                } else if (selected_setting == 5) {
                    input.calibrateCompass()
                } else if (selected_setting == 7) {
                    if (rotate_display == 1) {
                        rotate_display = 2
                        display.rotateTo(display.Direction.LogoToLeft)
                    } else if (rotate_display == 2){
                        rotate_display = 3
                        display.rotateTo(display.Direction.UpsideDown)
                    } else if (rotate_display == 3) {
                        rotate_display = 4
                        display.rotateTo(display.Direction.LogoToRight)
                    } else if (rotate_display == 4) {
                        rotate_display = 1
                        display.rotateTo(display.Direction.Normal)
                    }
                    flashstorage.put("display", convertToText(rotate_display))
                } else if (selected_setting == 8) {
                    if (animation_scroll == 1) {
                        animation_scroll = 0
                    } else {
                        animation_scroll = 1
                    }
                    flashstorage.put("scroll", convertToText(animation_scroll))
                } else if (selected_setting == 9) {
                    if (custom_graph == 12) {
                        custom_graph = 1
                    } else {
                        custom_graph += 1
                    }
                    flashstorage.put("graph", convertToText(custom_graph))
                } else if (selected_setting == 10) {
                    if (p2press == 0) {
                        pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Capacitive)
                        p2press = 1
                    } else {
                        p2press = 0
                        pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Resistive)
                    }
                    flashstorage.put("p2p", convertToText(p2press))
                } else {
                    break;
                }
                break;
            } else if (input.pinIsPressed(TouchPin.P2)) {
                if (p2press == 1) {
                    scroll_interval = 1
                    if (selected_setting == 2) {
                        if (settings_volume == 1) {
                            settings_volume = 5
                        } else {
                            settings_volume += -1
                        }
                        flashstorage.put("volume", convertToText(settings_volume))
                    } else if (selected_setting == 3) {
                        if (settings_brightness == 1) {
                            settings_brightness = 5
                        } else {
                            settings_brightness += -1
                        }
                        flashstorage.put("brightness", convertToText(settings_brightness))
                    } else if (selected_setting == 7) {
                        if (rotate_display == 1) {
                            rotate_display = 4
                            display.rotateTo(display.Direction.LogoToRight)
                        } else if (rotate_display == 2) {
                            rotate_display = 1
                            display.rotateTo(display.Direction.Normal)
                            
                        } else if (rotate_display == 3) {
                            rotate_display = 2
                            display.rotateTo(display.Direction.LogoToLeft)
                        } else if (rotate_display == 4) {
                            rotate_display = 3
                            display.rotateTo(display.Direction.UpsideDown)
                        }
                        flashstorage.put("display", convertToText(rotate_display))
                     }else if (selected_setting == 9) {
                        if (custom_graph == 1) {
                            custom_graph = 9
                        } else {
                            custom_graph += -1
                        }
                        flashstorage.put("graph", convertToText(custom_graph))
                    } else {
                        break;
                    }
                    break;
                }
            }
        }
        if (input.logoIsPressed()) {
            if (selected_setting == 0) {
                break;
            } else if (selected_setting == 6) {
                break;
            }
    }}
    if (selected_setting == 0) {
        menu_select_menu()
    }
    if (selected_setting == 6) {
        basic.clearScreen()
        settings_test_input()
    }}
input.onButtonPressed(Button.A, function () { //On button A pressed.
    if (game_mode == 1) {
        if (px_1 > 0) {
            led.unplot(px_1, py_1)
            px_1 += -1
        }
    }
    if (game_mode == 2) {
        if (bird_move_2 == true) {
            bird_2.change(LedSpriteProperty.Y, 1)
            music.play(music.createSoundExpression(
                WaveShape.Sawtooth,
                891,
                1198,
                255,
                0,
                200,
                SoundExpressionEffect.None,
                InterpolationCurve.Linear
            ), music.PlaybackMode.InBackground)
        }
    }
    if (game_mode == 3) {
        if (bar_x_3 > 0) {
            led.unplot(bar_x_3 + 1, 4)
            bar_x_3 = bar_x_3 - 1
            led.plot(bar_x_3, 4)
        }
    }
    if (game_mode == 4) {
        if (car_move_4 == true) {
            if (playerCar_4.get(LedSpriteProperty.X) > 0) {
                playerCar_4.change(LedSpriteProperty.X, -1)
            }
        }
    }
    if (game_mode == 5) {
        if (player_move_5 == true) {
            if (!(is_game_over_5)) {
                if (!(is_game_over_5)) {
                    player_5[1].change(LedSpriteProperty.Y, -1)
                    player_5[0].change(LedSpriteProperty.Y, -1)
                }
                basic.pause(215)
                if (!(is_game_over_5)) {
                    player_5[1].change(LedSpriteProperty.Y, -1)
                    player_5[0].change(LedSpriteProperty.Y, -1)
                }
                basic.pause(215)
                if (!(is_game_over_5)) {
                    player_5[1].change(LedSpriteProperty.Y, -1)
                    player_5[0].change(LedSpriteProperty.Y, -1)
                }
                basic.pause(215)
                if (!(is_game_over_5)) {
                    player_5[1].change(LedSpriteProperty.Y, 1)
                    player_5[0].change(LedSpriteProperty.Y, 1)
                }
                basic.pause(215)
                if (!(is_game_over_5)) {
                    player_5[1].change(LedSpriteProperty.Y, 1)
                    player_5[0].change(LedSpriteProperty.Y, 1)
                }
                basic.pause(215)
                if (!(is_game_over_5)) {
                    player_5[1].change(LedSpriteProperty.Y, 1)
                    player_5[0].change(LedSpriteProperty.Y, 1)
                }
            }
        }
    }
    if (game_mode == 6) {
        l_6 = 0
        s_6 = 0
    }
    if (game_mode == 8) {
        if (gameon_8 == true) {
            led.unplot(x_8, y_8)
            if (x_8 > 0 && !(led.point(x_8 - 1, y_8))) {
                x_8 = x_8 - 1
            }
            led.plot(x_8, y_8)
        }
    }
    if (crhonometer_run == true) {
        running = !(running)
        if (running) {
            timeanddate.set24HourTime(0, 0, 0)
        } else {
            captured = timeanddate.time(timeanddate.TimeFormat.HHMMSS24hr)
            basic.showString(captured)
        }
    }
    if (game_mode == 9) {
        if (user_9 == 0) {
            ax_9[stepA_9] = currX_9
            ay_9[stepA_9] = currY_9
            stepA_9 += 1
            user_9 = 1
            currX_9 = 2
            currY_9 = 2
        }
    }})
input.onButtonPressed(Button.B, function () { //On button B pressed.
    if (game_mode == 1) {
        if (px_1 < 4) {
            led.unplot(px_1, py_1)
            px_1 += 1
        }
    }
    if (game_mode == 2) {
        if (bird_move_2 == true) {
            bird_2.change(LedSpriteProperty.Y, -1)
            music.play(music.createSoundExpression(
                WaveShape.Sawtooth,
                891,
                1198,
                255,
                0,
                200,
                SoundExpressionEffect.None,
                InterpolationCurve.Linear
            ), music.PlaybackMode.InBackground)
        }
    }
    if (game_mode == 3) {
        if (bar_x_3 < 3) {
            led.unplot(bar_x_3, 4)
            bar_x_3 = bar_x_3 + 1
            led.plot(bar_x_3 + 1, 4)
        }
    }
    if (game_mode == 4) {
        if (car_move_4 == true) {
            if (playerCar_4.get(LedSpriteProperty.X) < 4) {
                playerCar_4.change(LedSpriteProperty.X, 1)
            }
        }
    }
    if (game_mode == 5) {
        if (player_move_5 == true) {
            if (!(is_game_over_5)) {
                player_5[0].change(LedSpriteProperty.Y, 1)
                basic.pause(750)
                player_5[0].change(LedSpriteProperty.Y, -1)
            }
        }
    }
    if (game_mode == 8) {
        if (gameon_8 == true) {
            led.unplot(x_8, y_8)
            if (x_8 < 4 && !(led.point(x_8 + 1, y_8))) {
                x_8 = x_8 + 1
            }
            led.plot(x_8, y_8)
        }
    }
    if (crhonometer_run == true) {
        if (!(running)) {
            basic.showString(captured)
        }
    }
    if (game_mode == 9) {
        if (user_9 == 1) {
            bx_9[stepB_9] = currX_9
            by_9[stepB_9] = currY_9
            stepB_9 += 1
            user_9 = 0
            currX_9 = 2
            currY_9 = 2
        }
    }})
input.onButtonPressed(Button.AB, function () { //On button AB pressed.
    if (game_mode == 1) {
        shoot_1 = 1
        music.play(music.createSoundExpression(
            WaveShape.Sawtooth,
            4707,
            1,
            255,
            0,
            150,
            SoundExpressionEffect.None,
            InterpolationCurve.Linear
        ), music.PlaybackMode.InBackground)
    }
    if (game_mode == 9) {
        state_9 = 1
    }})

bluetooth.onBluetoothConnected(function () { //On bluetooth connected.
    bluetooth_online = true})
bluetooth.onBluetoothDisconnected(function () { //On bluetooth disconnected.
    bluetooth_online = false})
music.onEvent(MusicEvent.MelodyStarted, function () { //On melody playing.
    while (music_playing == true) {
        loading_animation()
    }})
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () { //On serial data received
    if (line_sent = true) {
        basic.showString(serial.readLine())
    }})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function on_uart_data_received() { //On bluetooth data received
    if (line_sent = true) {
        basic.showString(bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine)))
    }})

music.setBuiltInSpeakerEnabled(false)
pins.setAudioPinEnabled(false)
pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Capacitive)
serial.setBaudRate(BaudRate.BaudRate115200)
bluetooth.startUartService()
let selected_menu = 1
let scroll_interval = 1
let game_mode = 0
let selected_tool = 0
let selected_setting = 0
let selected_math = 0
let selected_clock = 0
let tool_type = 1
let bluetooth_type = 0
let bluetooth_keyboard_type = 0
let create_type = 0
let selected_create_music = 1
let selected_serial = 0
let selected_uart = false
let selected_serial_if = false
let selected_log_tool = 0
let selected_serial_send = 0
let selected_music = 1
let settings_brightness = parseFloat(flashstorage.getOrDefault("brightness", "5"))
if (settings_brightness == 1) {
    led.setBrightness(50)
} else if (settings_brightness == 2) {
    led.setBrightness(100)
} else if (settings_brightness == 3) {
    led.setBrightness(150)
} else if (settings_brightness == 4) {
    led.setBrightness(200)
} else if (settings_brightness == 5) {
    led.setBrightness(255)}
let settings_auto_brigthness = false
let settings_music = parseFloat(flashstorage.getOrDefault("music", "0"))
if (settings_music == 1) {
    music.setBuiltInSpeakerEnabled(true)
} else {
    music.setBuiltInSpeakerEnabled(false)}
let settings_volume = parseFloat(flashstorage.getOrDefault("volume", "5"))
if (settings_volume == 1) {
    music.setVolume(50)
} else if (settings_volume == 2) {
    music.setVolume(100)
} else if (settings_volume == 3) {
    music.setVolume(150)
} else if (settings_volume == 4) {
    music.setVolume(200)
} else {
    music.setVolume(255)}
let logged_data = parseFloat(flashstorage.getOrDefault("log", "0"))
let abc_id = 1
let abc = ["NUL", "a", "A", "b", "c", "C", "d", "e", "E", "f", "g", "G", "h", "i", "I", "j", "k", "K", "l", "L", "m", "n", "N", "o", "p", "r", "s", "S", "t", "u", "U", "v", "z", "Z", " ", ".", ",", "!", "?"]
let numberlist = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let inputlist: string[] = []
let text = ""
let list: number[] = []
let numberx: number[] = []
let numbery: number[] = []
let mathx = 0
let mathy = 0
let waiting_for_input = true
let running = false
let captured = ""
let crhonometer_run = false
let animation_scroll = 1
let unid = 0
let usid = 0
let num = 0
let hour = 0
let minute = 0
let second = 0
let signal_hour = 0
let signal_minute = 0
let unid_type = 0
let bluetooth_online = false
let x = 0
let y = 0
let newx = 0
let newy = 0
let shift = false
let custom_a_button = ""
let custom_b_button = ""
let custom_logo_button = ""
let uckb = ""
let custom_music: number[] = []
let custom_music_tune: number[] = []
let custom_music_beat: number[] = []
let custom_beat: number[] = []
let tune_music = 131
let tonelist = [0, 131, 147, 165, 175, 196, 220, 247, 262, 294, 330, 349, 392, 440, 494, 523, 587, 659, 698, 784, 880, 998]
let music_playing = false
let line_sent = false
let uart_send = ""
let pin_music_mode = false
let logging_freq = 0
let rotate_display = parseFloat(flashstorage.getOrDefault("display", "1"))
if (rotate_display == 1) {
    display.rotateTo(display.Direction.Normal)
} else if (rotate_display == 2) {
    display.rotateTo(display.Direction.LogoToLeft)
} else if (rotate_display == 3) {
    display.rotateTo(display.Direction.UpsideDown)
} else if (rotate_display == 4) {
    display.rotateTo(display.Direction.LogoToRight)}
let custom_graph = parseFloat(flashstorage.getOrDefault("graph", "1"))
let graph_var1 = 50
let graph_var2 = 50
let poslist = [4, 4, 4, 4, 4]
let stage = 0
let startpos = 0
let p2press = parseFloat(flashstorage.getOrDefault("p2p", "1"))
let num_list = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let symb_list = [")", "!", "@", "#", "$", "%", "^", "&", "*", "("]
let fade_int = 100
let inter = 50
let image_games = images.createImage(`
    . . . . .
    . . # . .
    . # # # .
    # # # # #
    # . . . #`)
let image_tools = images.createImage(`
    . . . . .
    . # . . .
    # . . . .
    . # . # .
    # . # . .`)
let image_turtle = images.createImage(`
    . . . . .
    . . # . .
    # # # # #
    . # # # .
    # . # . #`)
let image_radio = images.createImage(`
    . . . . .
    . . . . #
    . . . . #
    . . # . #
    # . # . #`)
let image_create = images.createImage(`
    . . . . .
    . . # . .
    . # # # .
    . . # . .
    . . . . .`)
let image_pins = images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    # . # . #`)
let image_send = images.createImage(`
    . . . . .
    . . # . .
    # . # . #
    . # # # .
    . . # . .`)
let image_uart = images.createImage(`
    . . . . .
    . . # . .
    # . # # .
    . # # . #
    # . # # .`)
let image_settings = images.createImage(`
    . . . . .
    . . . . .
    # # . # #
    . # # # .
    # # . # #`)
let image_back = images.createImage(`
    . . . . .
    . # . . .
    # # # # #
    . # . . #
    . . . # #`)
let image_space_invaders = images.createImage(`
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    . . # . .`)
let image_flappy_bird = images.createImage(`
    . . . . .
    . . . # .
    . . . # .
    . # . . .
    . . . # .`)
let image_pong = images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . # # . .`)
let image_cars_game = images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . # . .`)
let image_dino_game = images.createImage(`
    . . . . .
    . . . . .
    . . . # .
    # . . . .
    # . . . .`)
let image_jumping_rope = images.createImage(`
    . . . . .
    . . . . #
    . . . . .
    . . . . .
    . . # . .`)
let image_pac_man = images.createImage(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    # . . . .`)
let image_tetris = images.createImage(`
    . . . . .
    . . . . .
    # . . . .
    # # . . #
    # # . # #`)
let image_ttt = images.createImage(`
    . . . . .
    . . . . .
    # # # . #
    . # . . #
    . # . . #`)
let image_cards = images.createImage(`
    . . . . .
    # # # . .
    # . # # #
    # # # . #
    . . # # #`)
let image_tempereture = images.createImage(`
    . . . . .
    . # # . #
    # . . . .
    # . . . .
    . # # . .`)
let image_light = images.createImage(`
    . . . . .
    . # # # .
    # . . . #
    . # . # .
    . # # # .`)
let image_sound = images.createImage(`
    . . . . .
    . # . # .
    . # . . .
    # # # . .
    . # . . .`)
let image_north = images.createImage(`
    . . . . .
    . . # . .
    . # # # .
    # . # . #
    . . # . .`)
let image_x = images.createImage(`
    . . . . .
    . . . . .
    # . # . .
    . # . . .
    # . # . .`)
let image_y = images.createImage(`
    . . . . .
    # . # . .
    # . # . .
    . # . . .
    # # . . .`)
let image_z = images.createImage(`
    . . . . .
    # # # . .
    . # . . .
    # . . . .
    # # # . .`)
let image_note = images.createImage(`
    . . . . .
    . . # # .
    . . # . #
    # # # . .
    # # # . .`)
let image_calculator = images.createImage(`
    . . . . .
    . # . . .
    # # # . .
    . # . . .
    . . . # #`)
let image_clock = images.createImage(`
    . . . . .
    # . # . #
    # . # # #
    # . . . #
    . # # # .`)
let image_plus = images.createImage(`
    . . . . .
    . . . . .
    . # . . .
    # # # . .
    . # . . .`)
let image_minus = images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    # # # . .
    . . . . .`)
let image_times = images.createImage(`
    . . . . .
    . . . . .
    # . # . .
    . # . . .
    # . # . .`)
let image_divide = images.createImage(`
    . . . . .
    . . . . .
    . . # . .
    . # . . .
    # . . . .`)
let image_caret = images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . # . . .
    # . # . .`)
let image_sqr = images.createImage(`
    . . . . .
    . # # # #
    . # . . #
    # # . . .
    . # . . .`)
let image_sin = images.createImage(`
    . . . . .
    . . # # .
    . # . . .
    . . # . .
    # # . . .`)
let image_cosin = images.createImage(`
    . . . . .
    . # # . .
    # . . . .
    # . . . .
    . # # . .`)
let image_tangent = images.createImage(`
    . . . . .
    . # . . .
    # # # . .
    . # . . .
    . # . . .`)
let image_pi = images.createImage(`
    . . . . .
    # # # . #
    # . # . #
    # # # . #
    # . . . #`)
let image_random = images.createImage(`
    . . . . .
    . # # # .
    # . . . #
    . . # # .
    . . # . .`)
let image_signal = images.createImage(`
    . . . . .
    # # . # #
    # # # # #
    . # . # .
    . # # # .`)
let image_chronometer = images.createImage(`
    . . . . .
    . . # . .
    . . # # #
    . . . . .
    . . . . .`)
let image_timer = images.createImage(`
    . . . . .
    . . . . .
    # # . # #
    # . # . #
    # # . # #`)
let image_mouse = images.createImage(`
    . . . . .
    # # # . .
    # . . # .
    # . # . .
    . # . # .`)
let image_gamepad = images.createImage(`
    . . . . .
    . . . # #
    . # . . .
    # # # . .
    . # . . .`)
let image_keyboard = images.createImage(`
    . . . . .
    . # . # .
    # . # . #
    . . . . .
    . # # # .`)
let image_numbers = images.createImage(`
    . . . . .
    # . # # #
    # . # . #
    # . # . #
    # . # # #`)
let image_arrows = images.createImage(`
    . . . . .
    . # . # .
    # # # # #
    . # . # .
    . . . . .`)
let image_numberone = images.createImage(`
    . . . . .
    . . # . .
    . # # . .
    . . # . .
    . . # . .`)
let image_text = images.createImage(`
    . . . . .
    . . . . .
    # . . . #
    # # # # #
    . . . . .`)
let image_image = images.createImage(`
    . . . . .
    # # # # #
    # # . . #
    # . . # #
    # # # # #`)
let image_music8 = images.createImage(`
    . . . . .
    . # . . .
    . . # . #
    # . . . .
    . . . # .`)
let image_musicv2 = images.createImage(`
    . . . . .
    # . # . .
    # . # . .
    . # . . #
    . . . . #`)
let image_musicfx = images.createImage(`
    . . . . .
    # # . . .
    # . # . #
    # # . # .
    # . # . #`)
let image_zero = images.createImage(`
    . . . . .
    . # # # .
    . # . # .
    . # . # .
    . # # # .`)
let image_two = images.createImage(`
    . . . . .
    . # # # .
    . . . # .
    . . # . .
    . # # # .`)
let image_3v = images.createImage(`
    . . . . .
    . # . . .
    # # # . #
    . # # . #
    # # . # .`)
let image_volume = images.createImage(`
    . . . . .
    . . . . .
    # . . . .
    # . . . .
    . . . . .`)

let image_volume_full = images.createImage(`
    . . . . .
    . . # . .
    # . . # .
    # . . # .
    . . # . .`)
let image_brightness1 = images.createImage(`
    . . . . .
    . . . . .
    # . . . .
    . # . # .
    . # # # .`)
let image_brightness2 = images.createImage(`
    . . . . .
    . # . . .
    # . . . .
    . # . # .
    . # # # .`)
let image_brightness3 = images.createImage(`
    . . . . .
    . # # . .
    # . . . .
    . # . # .
    . # # # .`)
let image_brightness4 = images.createImage(`
    . . . . .
    . # # # .
    # . . . .
    . # . # .
    . # # # .`)
let image_brightness5 = images.createImage(`
    . . . . .
    . # # # .
    # . . . #
    . # . # .
    . # # # .`)

let image_log = images.createImage(`
    . . . . .
    # . # . #
    # # # # #
    # . # . #
    # # # # #`)
let image_compass = images.createImage(`
    . . . . .
    . # # . #
    # . . # .
    # . . # .
    . # # . .`)
let image_input = images.createImage(`
    . . . . .
    . # # # .
    . # . # .
    . # # # .
    . . . . .`)
let image_play = images.createImage(`
    . . . . .
    . . . # .
    # # # # #
    . . . # .
    . . . . .`)
let image_rest = images.createImage(`
    . . . . .
    . . . . .
    . # # # .
    # . . . #
    # . . . #`)
let image_analog = images.createImage(`
    . . . . .
    . # . . .
    # . # . #
    . . # . #
    . . . # .`)
let image_digital = images.createImage(`
    . . . . .
    # # # . .
    # . # . #
    . . # . #
    . . # # #`)
let image_capacitive = images.createImage(`
    . . . . .
    . # # # .
    # . . . #
    # . . . #
    . # # # .`)
let image_milisecond = images.createImage(`
    . . . . .
    # . . # #
    . . # . .
    . . . # .
    . # # . .`)
let image_second = images.createImage(`
    . . . . .
    . . # # .
    . # . . .
    . . # . .
    # # . . .`)
let image_minute = images.createImage(`
    . . . . .
    # # . # #
    # . # . #
    # . . . #
    # . . . #`)
let image_hour = images.createImage(`
    . . . . .
    . # . # .
    . # # # .
    . # . # .
    . # . # .`)
let image_rotate = images.createImage(`
    . . . . .
    . . . # .
    # # # # #
    # . . # .
    # . . . .`)
let image_bar = images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . # . . .
    # # # . .`)
let image_bar_custom = images.createImage(`
    . . . . .
    . . . # #
    . . . # .
    . # . # #
    # # # . .`)
let image_spiral = images.createImage(`
    . . . . .
    # . # # #
    # . # . #
    # . . . #
    # # # # #`)
let image_speedometer = images.createImage(`
    . . . . .
    . . . . .
    . . # . .
    . # . . .
    . # . . .`)
let image_wave = images.createImage(`
    . . . . .
    # . . . .
    # # . . .
    # # # . .
    # # # # .`)
let image_signal_small = images.createImage(`
    . . . . .
    . . . . #
    . . . # #
    . . # # #
    . # # # #`)
let image_needle = images.createImage(`
    . . . . .
    . # . . .
    . . # . .
    . . . # .
    . . . . #`)
let image_needle_c = images.createImage(`
    . . . . .
    . # . . .
    . # . # #
    . # . # .
    # . . # #`)
let image_procbar = images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . # # . #
    # . . # .`)
let image_dial = images.createImage(`
    . . . . .
    . . . # #
    . . # . .
    . . . . .
    . . . . .`)
let image_water = images.createImage(`
    . . . . .
    . . . . .
    # # . . .
    # # # # #
    # # # # #`)
let image_yes = images.createImage(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .`)
let image_blank = images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .`)
let acc_1 = 0
let time_1 = 0
let killed_1: number[] = []
let enemyX_1: number[] = []
let enemyY_1: number[] = []
let speed_1 = 50
let shoot_1 = 0
let my_1 = 3
let px_1 = 2
let py_1 = 4
let bird_move_2 = false
let obstacles_2: game.LedSprite[] = []
let bird_2: game.LedSprite = null
let interval_2 = 1200
let ticks_2 = 0
let score_2 = 0
let empty_obstacle_2 = 0
let bar_x_3 = 0
let playerCar_4: game.LedSprite = null
let var_4: number
let gameOn_4 = false
let car_move_4 = false
let generate_obstacles_5 = 0
let dummy_variable_5: game.LedSprite[] = []
let is_game_over_5 = false
let obstacles_5: game.LedSprite[][] = []
let player_5: game.LedSprite[] = []
let score_5 = 0
let player_move_5 = false
let i_6 = 90
let s_6 = 0
let j_6 = 0
let l_6 = 0
let h_6 = [4, 4, 2, 1, 2]
let x_6 = [2, 3, 4, 4, 4, 3, 2, 1, 0, 0, 0, 1]
let y_6 = [0, 0, 1, 2, 3, 4, 4, 4, 3, 2, 1, 0]
let interval_7 = 1000
let ghost_7: game.LedSprite = null
let pac_man_7: game.LedSprite = null
let food_7: game.LedSprite = null
let rowFull_8 = false
let x_8 = 0
let y_8 = 0
let gameOver_8 = false
let canFall_8 = false
let delay_8 = 500
let score_8 = 0
let gameon_8 = false
let i_9 = 0
let by_9: number[] = []
let bx_9: number[] = []
let brightnessB_9 = 0
let brightnessA_9 = 0
let brightness_9 = 0
let stepB_9 = 0
let show_9 = 0
let winner_9 = 0
let currY_9 = 0
let ay_9: number[] = []
let currX_9 = 0
let stepA_9 = 0
let ax_9: number[] = []
let user_9 = 0
let winY_9: number[] = []
let winX_9: number[] = []
let state_9 = 0
state_9 = -1
winX_9 = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 1, 1, 2, 2, 2, 3, 3, 3, 1, 2, 3, 1, 2, 3]
winY_9 = [1, 1, 1, 2, 2, 2, 3, 3, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 3, 2, 1]
let bj_dealer_hand = 0
let bj_my_hand = 0
let bj_dealer_card = 0
let random_card = 0
let score_10 = 0
loading_animation()
menu_select_menu()
basic.forever(function () { //Space Invaders game. // game_Mode = 1
    if (game_mode == 1) {
            led.plotBrightness(px_1, py_1, 255)
            for (let index2 = 0; index2 <= 4; index2++) {
                if (killed_1[index2] == 0) {
                    led.unplot(enemyX_1[index2], enemyY_1[index2] - 1)
                    led.plot(enemyX_1[index2], enemyY_1[index2])
                }
            }
            if (shoot_1 == 1) {
                led.plotBrightness(px_1, my_1, 20)
                for (let index3 = 0; index3 <= 4; index3++) {
                    if (killed_1[index3] == 0 && (px_1 == enemyX_1[index3] && my_1 == enemyY_1[index3])) {
                        killed_1[index3] = 1
                        music.play(music.createSoundExpression(WaveShape.Noise, 2294, 2294, 238, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                    }
                }
                basic.pause(25)
                led.unplot(px_1, my_1)
                my_1 += -1
            }
            if (time_1 > speed_1) {
                time_1 = 0
                acc_1 += 1
                for (let index4 = 0; index4 <= 4; index4++) {
                    enemyY_1[index4] = enemyY_1[index4] + 1
                }
            }
            if (my_1 < 0) {
                shoot_1 = 0
                my_1 = 5
            }
            for (let index5 = 0; index5 <= 4; index5++) {
                if (killed_1[index5] == 0) {
                    if (enemyY_1[index5] > 4) {
                        basic.clearScreen()
                        music.play(music.createSoundExpression(WaveShape.Sawtooth, 321, 0, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                        datalogger.log(datalogger.createCV("Space Invaders", acc_1))
                        basic.showString("S:")
                        basic.showNumber(acc_1)
                        control.reset()
                    }
                }
            }
            time_1 += 1
            if (acc_1 % 5 == 0) {
                speed_1 += -3
                acc_1 += 1
            }
            for (let index6 = 0; index6 <= 4; index6++) {
                if (enemyY_1[index6] > 4) {
                    enemyY_1[index6] = -1
                    enemyX_1[index6] = randint(0, 4)
                    killed_1[index6] = 0
                }
            }
    }})
function game_mode_2() { //Flappy Bird game. // game_mode = 2
    while (obstacles_2.length > 0 && obstacles_2[0].get(LedSpriteProperty.X) == 0) {
        obstacles_2.removeAt(0).delete()
    }
    for (let obstacle_2 of obstacles_2) {
        obstacle_2.change(LedSpriteProperty.X, -1)
    }
    if (ticks_2 % 3 == 0) {
        empty_obstacle_2 = randint(0, 4)
        for (let index_2 = 0; index_2 <= 4; index_2++) {
            if (index_2 != empty_obstacle_2) {
                obstacles_2.push(game.createSprite(4, index_2))
            }
        }
    }
    for (let obstacle_2 of obstacles_2) {
        if (obstacle_2.get(LedSpriteProperty.X) == bird_2.get(LedSpriteProperty.X) && obstacle_2.get(LedSpriteProperty.Y) == bird_2.get(LedSpriteProperty.Y)) {
            game.pause()
            basic.clearScreen()
            music.play(music.createSoundExpression(WaveShape.Sawtooth,321,0,255,0,100,SoundExpressionEffect.None,InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            datalogger.log(datalogger.createCV("Flappy Bird", score_2))
            basic.showString("S:")
            basic.showNumber(score_2)
            control.reset()
        }
    }
    ticks_2 += 1
    score_2 += 0.25
    interval_2 += -0.2
    basic.pause(interval_2)
    game_mode_2()}
function game_mode_3() { //Ping-Pong game. // game_mode = 3
    basic.clearScreen()
    let point_3 = 0
    let interval_step_3 = 1
    let interval_3 = 400
    let ball_x_3 = 3
    let ball_y_3 = 4
    let ball_dx_3 = -1
    let ball_dy_3 = -1
    bar_x_3 = 0
    led.plot(ball_x_3, ball_y_3)
    led.plot(bar_x_3, 4)
    led.plot(bar_x_3 + 1, 4)
    let in_game_3 = true
    while (in_game_3 == true) {
        if (ball_x_3 + ball_dx_3 > 4) {
            ball_dx_3 = ball_dx_3 * -1
        } else if (ball_x_3 + ball_dx_3 < 0) {
            ball_dx_3 = ball_dx_3 * -1
        }
        if (ball_y_3 + ball_dy_3 < 0) {
            ball_dy_3 = ball_dy_3 * -1
        } else if (ball_y_3 + ball_dy_3 > 3) {
            if (led.point(ball_x_3 + ball_dx_3, ball_y_3 + ball_dy_3)) {
                ball_dy_3 = ball_dy_3 * -1
                point_3 = point_3 + 1
                music.play(music.createSoundExpression(WaveShape.Square,223,1,79,39,150,SoundExpressionEffect.None,InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                if (interval_3 - interval_step_3 >= 0) {
                    interval_3 = interval_3 - interval_step_3
                }
            } else {
                in_game_3 = false
            }
        }
        if (in_game_3 == true) {
            led.plot(ball_x_3 + ball_dx_3, ball_y_3 + ball_dy_3)
            led.unplot(ball_x_3, ball_y_3)
            ball_x_3 = ball_x_3 + ball_dx_3
            ball_y_3 = ball_y_3 + ball_dy_3
            basic.pause(interval_3)
        } else {
            music.play(music.createSoundExpression(
                WaveShape.Sawtooth,
                321,
                0,
                255,
                0,
                100,
                SoundExpressionEffect.None,
                InterpolationCurve.Linear
            ), music.PlaybackMode.InBackground)
            datalogger.log(datalogger.createCV("Pong", point_3))
            basic.clearScreen()
            basic.showString("S:")
            basic.showNumber(point_3)
            control.reset()
        }
    }}
basic.forever(function () { //Cars game. // game_mode = 4
    if (game_mode == 4) {
        var_4 = 5000
        game.setScore(0)
        playerCar_4 = game.createSprite(2, 4)
        car_move_4 = true
        gameOn_4 = true
        while (gameOn_4 == true) {
            basic.pause(100)
        }
        game.pause()
        music.play(music.createSoundExpression(WaveShape.Sawtooth,321,0,255,0,100,SoundExpressionEffect.None,InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        datalogger.log(datalogger.createCV("Cars Game", game.score()))
        basic.clearScreen()
        basic.showString("S:")
        basic.showNumber(game.score())
        control.reset()
    }})
function game_mode_4(car_4: game.LedSprite) { //Cars game. //Control 0-4 cars // game_mode = 4
    basic.pause(randint(0, var_4))
    while (gameOn_4 == true) {
        if (car_4.get(LedSpriteProperty.Y) == 4) {
            if (playerCar_4.isTouching(car_4)) {
                gameOn_4 = false
            } else {
                music.play(music.createSoundExpression(WaveShape.Noise,2294,2294,238,0,200,SoundExpressionEffect.None,InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                game.setScore(game.score() + 1)
                var_4 += -1
                car_4.set(LedSpriteProperty.Y, 0)
                basic.pause(randint(0, var_4))
            }
        } else {
            car_4.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
    }
    game_mode_4(car_4)}
basic.forever(function () { //Cars game. // Car 0 // game_mode = 4
    if (game_mode == 4) {
        basic.pause(100)
        if (gameOn_4 == true) {
            let car0_4 = game.createSprite(0, 0)
            car0_4.set(LedSpriteProperty.Brightness, 20)
            game_mode_4(car0_4)
        }
    }})
basic.forever(function () { //Cars game. // Car 1 // game_mode = 4
    if (game_mode == 4) {
        basic.pause(100)
        if (gameOn_4 == true) {
            let car1_4 = game.createSprite(1, 0)
            car1_4.set(LedSpriteProperty.Brightness, 20)
            game_mode_4(car1_4)
        }
    }})
basic.forever(function () { //Cars game. // Car 2 // game_mode = 4
    if (game_mode == 4) {
        basic.pause(100)
        if (gameOn_4 == true) {
            let car2_4 = game.createSprite(2, 0)
            car2_4.set(LedSpriteProperty.Brightness, 20)
            game_mode_4(car2_4)
        }
    }})
basic.forever(function () { //Cars game. // Car 3 // game_mode = 4
    if (game_mode == 4) {
        basic.pause(100)
        if (gameOn_4 == true) {
            let car3_4 = game.createSprite(3, 0)
            car3_4.set(LedSpriteProperty.Brightness, 20)
            game_mode_4(car3_4)
        }
    }})
basic.forever(function () { //Cars game. // Car 4 // game_mode = 4
    if (game_mode == 4) {
        basic.pause(100)
        if (gameOn_4 == true) {
            let car4_4 = game.createSprite(4, 0)
            car4_4.set(LedSpriteProperty.Brightness, 20)
            game_mode_4(car4_4)
        }
    }})
function gameOver() { //Dinasour game // gameOver function// game_mode = 5
    is_game_over_5 = true
    for (let obstacle_group_3 of obstacles_5) {
        for (let an_obstacle_sprite_3 of obstacle_group_3) {
            obstacle_group_3.removeAt(obstacle_group_3.indexOf(an_obstacle_sprite_3)).delete()
        }
        dummy_variable_5 = obstacles_5.removeAt(obstacles_5.indexOf(obstacle_group_3))
    }
    for (let player_sprite_2 of player_5) {
        player_5.removeAt(player_5.indexOf(player_sprite_2)).delete()
    }
    basic.clearScreen()
    datalogger.log(datalogger.createCV("Dinasour Game", score_5))
    basic.showString("S:")
    basic.showNumber(score_5)
    control.reset()}
basic.forever(function () { //Dinasour game // Score function // game_mode = 5
    if (game_mode == 5) {
        if (!(is_game_over_5)) {
            basic.pause(225)
            for (let obstacle_group_1 of obstacles_5) {
                for (let an_obstacle_sprite_1 of obstacle_group_1) {
                    if (an_obstacle_sprite_1.get(LedSpriteProperty.X) == 0) {
                        obstacle_group_1.removeAt(obstacle_group_1.indexOf(an_obstacle_sprite_1)).delete()
                        score_5 += 1
                        music.play(music.createSoundExpression(WaveShape.Noise,2294,2294,238,0,200,SoundExpressionEffect.None,InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                    } else {
                        an_obstacle_sprite_1.change(LedSpriteProperty.X, -1)
                    }
                }
                if (obstacle_group_1.length == 0) {
                    dummy_variable_5 = obstacles_5.removeAt(obstacles_5.indexOf(obstacle_group_1))
                }
            }
        }
    }})
basic.forever(function () { //Dinasour game // generate obstacles // game_mode = 5
    if (game_mode == 5) {
        if (!(is_game_over_5)) {
            basic.pause(1750)
            generate_obstacles_5 = randint(0, 4)
            if (generate_obstacles_5 == 0) {
                obstacles_5.push([game.createSprite(4, 3), game.createSprite(4, 4)])
            } else if (generate_obstacles_5 == 1) {
                obstacles_5.push([game.createSprite(4, 4)])
            } else if (generate_obstacles_5 == 2) {
                obstacles_5.push([game.createSprite(4, 3)])
            } else if (generate_obstacles_5 == 3) {
                obstacles_5.push([game.createSprite(4, 2)])
            } else {
                obstacles_5.push([game.createSprite(4, 1)])
            }
        }
    }})
basic.forever(function () { //Dinasour game // call gameOver function // game_mode = 5
    if (game_mode == 5) {
        if (!(is_game_over_5)) {
            for (let obstacle_group_2 of obstacles_5) {
                for (let an_obstacle_sprite_2 of obstacle_group_2) {
                    for (let player_sprite_1 of player_5) {
                        if (an_obstacle_sprite_2.isTouching(player_sprite_1)) {
                            music.play(music.createSoundExpression(WaveShape.Sawtooth,321,0,255,0,100,SoundExpressionEffect.None,InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                            gameOver()
                        }
                    }
                }
            }
        }
    }})
function game_mode_6() { //Jumping rope game // game_mode = 6
    while (!(j_6 == 0 && l_6 == 6)) {
        let w = 0
        basic.pause(i_6)
        if (j_6) {
            led.unplot(2, h_6[j_6])
            j_6 += 1
            if (j_6 > 3) {
                j_6 = 0
            }
        }
        led.plot(2, h_6[j_6])
        if (w == 0) {
            led.unplot(x_6[l_6], y_6[l_6])
            l_6 += 1
            if (l_6 == 12) {
                l_6 = 0
            }
            led.plot(x_6[l_6], y_6[l_6])
        }
        if (!(j_6) && input.buttonIsPressed(Button.B)) {
            j_6 = 1
        }
        if (l_6 == 6) {
            music.play(music.createSoundExpression(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            s_6 += 1
            i_6 += -0.5
        }
    }
    datalogger.log(datalogger.createCV("Jumping Rope", s_6))
    basic.showNumber(s_6)
    basic.clearScreen()
    game_mode_6()}
function game_mode_7() { //Pac-Man game // game_mode = 7
    while (true) {
        basic.pause(interval_7)
        if (ghost_7.get(LedSpriteProperty.X) < pac_man_7.get(LedSpriteProperty.X)) {
            ghost_7.change(LedSpriteProperty.X, 1)
        } else if (ghost_7.get(LedSpriteProperty.X) > pac_man_7.get(LedSpriteProperty.X)) {
            ghost_7.change(LedSpriteProperty.X, -1)
        }
        if (ghost_7.get(LedSpriteProperty.Y) < pac_man_7.get(LedSpriteProperty.Y)) {
            ghost_7.change(LedSpriteProperty.Y, 1)
        } else if (ghost_7.get(LedSpriteProperty.Y) > pac_man_7.get(LedSpriteProperty.Y)) {
            ghost_7.change(LedSpriteProperty.Y, -1)
        }
        if (input.acceleration(Dimension.X) > 200) {
            pac_man_7.change(LedSpriteProperty.X, 1)
        } else if (input.acceleration(Dimension.X) < -200) {
            pac_man_7.change(LedSpriteProperty.X, -1)
        }
        if (input.acceleration(Dimension.Y) > 200) {
            pac_man_7.change(LedSpriteProperty.Y, 1)
        } else if (input.acceleration(Dimension.Y) < -200) {
            pac_man_7.change(LedSpriteProperty.Y, -1)
        }
        if (pac_man_7.isTouching(food_7)) {
            music.play(music.createSoundExpression(WaveShape.Noise,2294,2294,255,0,200,SoundExpressionEffect.None,InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            game.addScore(1)
            interval_7 += -10
            food_7.set(LedSpriteProperty.X, randint(0, 4))
            food_7.set(LedSpriteProperty.Y, randint(0, 4))
            if (food_7.get(LedSpriteProperty.X) > 2 && food_7.get(LedSpriteProperty.Y) > 2) {
                ghost_7.set(LedSpriteProperty.X, 0)
                ghost_7.set(LedSpriteProperty.Y, 0)
            } else if (food_7.get(LedSpriteProperty.X) < 2 && food_7.get(LedSpriteProperty.Y) < 2) {
                ghost_7.set(LedSpriteProperty.X, 4)
                ghost_7.set(LedSpriteProperty.Y, 4)
            } else if (food_7.get(LedSpriteProperty.X) > 2 && food_7.get(LedSpriteProperty.Y) < 2) {
                ghost_7.set(LedSpriteProperty.X, 0)
                ghost_7.set(LedSpriteProperty.Y, 4)
            } else {
                ghost_7.set(LedSpriteProperty.X, 4)
                ghost_7.set(LedSpriteProperty.Y, 0)
            }
        }
        if (ghost_7.isTouching(pac_man_7)) {
            game.pause()
            music.play(music.createSoundExpression(
                WaveShape.Sawtooth,
                321,
                0,
                255,
                0,
                100,
                SoundExpressionEffect.None,
                InterpolationCurve.Linear
            ), music.PlaybackMode.UntilDone)
            datalogger.log(datalogger.createCV("Pac-Man", game.score()))
            basic.clearScreen()
            basic.showString("S:")
            basic.showNumber(game.score())
            control.reset()
        }
    }
    game_mode_7()}
function tryFall() { //Tetris. // game_mode = 8
    canFall_8 = y_8 < 4 && !(led.point(x_8, y_8 + 1))
    if (canFall_8) {
        led.unplot(x_8, y_8)
        y_8 = y_8 + 1
        led.plot(x_8, y_8)
    } else {
        gameOver_8 = y_8 == 0
    }
    checkFullRow()}
function checkFullRow() { //Tetris. // game_mode = 8
    rowFull_8 = true
    for (let xx = 0; xx <= 5 - 1; xx++) {
        if (!(led.point(xx, 4))) {
            rowFull_8 = false
        }
    }
    if (rowFull_8) {
        delay_8 += -20
        score_8 += 1
        for (let xx2 = 0; xx2 <= 5 - 1; xx2++) {
            led.unplot(xx2, 4)
        }
        for (let yy = 3; yy > 0; yy--) {
            for (let xx3 = 0; xx3 < 5; xx3++) {
                if (led.point(xx3, yy)) {
                    led.unplot(xx3, yy)
                    led.plot(xx3, yy + 1)
                }
            }
        }
    }}
function game_mode_9() { //Tic-Tac-Toe // game_mode = 9
    if (state_9 == 0) {
        basic.showLeds(`
            . # . # .
            # # # # #
            . # . # .
            # # # # #
            . # . # .
            `)
    } else if (state_9 == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        for (let i = 0; i <= 4; i++) {
            led.plotBrightness(i, 0, 1)
        }
        for (let i = 0; i <= 4; i++) {
            led.plotBrightness(i, 4, 1)
        }
        for (let i = 0; i <= 4; i++) {
            led.plotBrightness(0, i, 1)
        }
        for (let i = 0; i <= 4; i++) {
            led.plotBrightness(4, i, 1)
        }
        state_9 = 2
        currX_9 = 2
        currY_9 = 2
    } else if (state_9 == 2) {
        if (input.isGesture(Gesture.LogoUp)) {
            if (currY_9 < 3) {
                currY_9 += 1
            }
        } else if (input.isGesture(Gesture.LogoDown)) {
            if (currY_9 > 1) {
                currY_9 += -1
            }
        } else if (input.isGesture(Gesture.TiltLeft)) {
            if (currX_9 > 1) {
                currX_9 += -1
            }
        } else if (input.isGesture(Gesture.TiltRight)) {
            if (currX_9 < 3) {
                currX_9 += 1
            }
        }
        if (show_9 == 0) {
            brightness_9 = 0
            show_9 = 1
        } else {
            if (user_9 == 0) {
                brightness_9 = brightnessA_9
            } else {
                brightness_9 = brightnessB_9
            }
            show_9 = 0
        }
        clearall()
        led.plotBrightness(currX_9, currY_9, brightness_9)
        showall()
        winner_check()
    } else {
        init()
    }
    basic.pause(500)
    game_mode_9()}
function init() { //Tic-Tac-Toe // game_mode = 9
    state_9 = 0
    user_9 = 0
    winner_9 = -1
    show_9 = 0
    stepA_9 = 0
    stepB_9 = 0
    brightness_9 = 0
    brightnessA_9 = 255
    brightnessB_9 = 5
    ax_9 = [-1,-1,-1,-1,-1]
    ay_9 = [-1,-1,-1,-1,-1]
    bx_9 = [-1,-1,-1,-1,-1
    ]
    by_9 = [-1,-1,-1,-1,-1]}
function clearall() { //Tic-Tac-Toe // game_mode = 9
    for (let i = 0; i <= 2; i++) {
        led.plotBrightness(i + 1, 1, 0)
        led.plotBrightness(i + 1, 2, 0)
        led.plotBrightness(i + 1, 3, 0)
    }}
function winner_check() { //Tic-Tac-Toe // game_mode = 9
    for (let index = 0; index <= 7; index++) {
        i_9 = index
        winner_case()
        if (winner_9 != -1) {
            break;
        }
    }
    if (winner_9 != -1) {
        state_9 = -1
        led.setBrightness(255)
        basic.showString("WINNER")
        for (let index = 0; index < 3; index++) {
            if (winner_9 == 0) {
                basic.showString("A")
            } else {
                basic.showString("B")
            }
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(100)
        }
    } else {
        if (stepA_9 == 5) {
            state_9 = -1
            led.setBrightness(255)
            basic.showString("TIE")
        }
    }}
function winner_case() { //Tic-Tac-Toe // game_mode = 9
    for (let check1 = 0; check1 <= 4; check1++) {
        if (ax_9[check1] == winX_9[i_9 * 3 + 0] && ay_9[check1] == winY_9[i_9 * 3 + 0]) {
            for (let check2 = 0; check2 <= 4; check2++) {
                if (ax_9[check2] == winX_9[i_9 * 3 + 1] && ay_9[check2] == winY_9[i_9 * 3 + 1]) {
                    for (let check3 = 0; check3 <= 4; check3++) {
                        if (ax_9[check3] == winX_9[i_9 * 3 + 2] && ay_9[check3] == winY_9[i_9 * 3 + 2]) {
                            check3 = 5
                            winner_9 = 0
                            return 1
                        }
                    }
                    check2 = 5
                }
            }
            check1 = 5
        }
    }
    for (let check1 = 0; check1 <= 4; check1++) {
        if (bx_9[check1] == winX_9[i_9 * 3 + 0] && by_9[check1] == winY_9[i_9 * 3 + 0]) {
            for (let check2 = 0; check2 <= 4; check2++) {
                if (bx_9[check2] == winX_9[i_9 * 3 + 1] && by_9[check2] == winY_9[i_9 * 3 + 1]) {
                    for (let check3 = 0; check3 <= 4; check3++) {
                        if (bx_9[check3] == winX_9[i_9 * 3 + 2] && by_9[check3] == winY_9[i_9 * 3 + 2]) {
                            check3 = 5
                            winner_9 = 1
                            return 1
                        }
                    }
                    check2 = 5
                }
            }
            check1 = 5
        }
    }
    return 0}
function showall() { //Tic-Tac-Toe // game_mode = 9
    for (let i = 0; i <= 4; i++) {
        led.plotBrightness(ax_9[i], ay_9[i], brightnessA_9)
        led.plotBrightness(bx_9[i], by_9[i], brightnessB_9)
    }}
function tool_compass() { //Compass // Selected_tool = 4
    while (true) {
        if (input.compassHeading() <= 45 && input.compassHeading() <= 46){
            images.arrowImage(ArrowNames.North).showImage(0)
        }else if (input.compassHeading() <= 90 && input.compassHeading() <= 91) {
            images.arrowImage(ArrowNames.NorthEast).showImage(0)
        } else if (input.compassHeading() <= 135 && input.compassHeading() <= 136) {
            images.arrowImage(ArrowNames.East).showImage(0)
        } else if (input.compassHeading() <= 180 && input.compassHeading() <= 181) {
            images.arrowImage(ArrowNames.SouthEast).showImage(0)
        } else if (input.compassHeading() <= 225 && input.compassHeading() <= 226) {
            images.arrowImage(ArrowNames.South).showImage(0)
        } else if (input.compassHeading() <= 270 && input.compassHeading() <= 271) {
            images.arrowImage(ArrowNames.SouthWest).showImage(0)
        } else if (input.compassHeading() <= 315 && input.compassHeading() <= 316) {
            images.arrowImage(ArrowNames.West).showImage(0)
        } else if (input.compassHeading() <= 350 && input.compassHeading() <= 351) {
            images.arrowImage(ArrowNames.NorthWest).showImage(0)
        }
    }}

function tool_record() { //Record and play sound files // Selected_tool = 8
    let tool_record_volume = 5
    record.setSampleRate(22000)
    while (true) {
        if (tool_type == 1) {
            led.unplot(3, 0)
            led.unplot(4, 0)
        } else if (tool_type == 2) {
            led.unplot(1, 0)
            led.unplot(0, 0)
        } else if (tool_type == 3) {
            led.unplot(2, 0)
        }
        if (tool_type == 1) {
            image_sound.scrollImage(1, scroll_interval)
        } else if (tool_type == 2) {
            image_note.scrollImage(1, scroll_interval)
        } else if (tool_type == 3) {
            if (tool_record_volume == 1) {
                image_volume.scrollImage(1, scroll_interval)
                record.setSampleRate(4400)
                led.plotBrightness(2, 1, 20)
            } else if (tool_record_volume == 2) {
                image_volume.scrollImage(1, scroll_interval)
                record.setSampleRate(8800)
                led.plotBrightness(2, 1, 20)
                led.plotBrightness(3, 2, 20)
            } else if (tool_record_volume == 3) {
                image_volume.scrollImage(1, scroll_interval)
                record.setSampleRate(13200)
                led.plotBrightness(2, 1, 20)
                led.plotBrightness(3, 2, 20)
                led.plotBrightness(3, 3, 20)
            } else if (tool_record_volume == 4) {
                image_volume.scrollImage(1, scroll_interval)
                record.setSampleRate(17600)
                led.plotBrightness(2, 1, 20)
                led.plotBrightness(3, 2, 20)
                led.plotBrightness(3, 3, 20)
                led.plotBrightness(2, 4, 20)
            } else {
                image_volume_full.scrollImage(1, scroll_interval)
                record.setSampleRate(22000)
            }
        }
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        draw_menu()
        if (tool_type == 1) {
            led.plot(0, 0)
            led.plot(1, 0)
        } else if (tool_type == 2) {
            led.plot(2, 0)
        } else if (tool_type == 3) {
            led.plot(3, 0)
            led.plot(4, 0)
        }
        waiting_for_input = true
        while (waiting_for_input == true) {
            if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                scroll_interval = 1
                if (tool_type == 1) {
                    tool_type = 3
                    waiting_for_input = false
                } else {
                    tool_type += -1
                    waiting_for_input = false
                }
            }
            if (input.buttonIsPressed(Button.B)) {
                scroll_interval = 45
                if (tool_type == 3) {
                    tool_type = 1
                    scroll_interval = 1
                    waiting_for_input = false
                } else {
                    tool_type += 1
                    waiting_for_input = false
                }
            }
            if (input.logoIsPressed()) {
                scroll_interval = 1
                if (tool_type == 1) {
                    record.startRecording(record.BlockingState.Nonblocking)
                    basic.clearScreen()
                    while (record.audioStatus(record.AudioStatus.Recording)) {
                        loading_animation()
                    }
                }
                if (tool_type == 2) {
                    record.playAudio(record.BlockingState.Nonblocking)
                    basic.clearScreen()
                    while (record.audioStatus(record.AudioStatus.Playing)) {
                        loading_animation()
                    }
                }
                if (tool_type == 3) {
                    if (tool_record_volume == 5) {
                        tool_record_volume = 1
                    } else {
                        tool_record_volume += 1
                    }
                }
                waiting_for_input = false
            }
        }
    }}
function math_xy() { //Calculator with 2 variables // Selected_tool = 9
    basic.pause(200)
    mathx = 0
    mathy = 0
    num = 0
    while (true) {
        if (input.pinIsPressed(TouchPin.P2)) {
            break;
        }
        unid_if_0_9()
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        while(true){
            scroll_interval = 1
            if (input.pinIsPressed(TouchPin.P2)) {
                if (numberx.length == 1) {
                    mathx = numberx[0]
                } else if (numberx.length == 2) {
                    mathx = numberx[0] * 10 + numberx[1]
                } else if (numberx.length == 3) {
                    mathx = numberx[0] * 100 + numberx[1] * 10 + numberx[2]
                } else if (numberx.length == 4) {
                    mathx = numberx[0] * 1000 + numberx[1] * 100 + numberx[2] * 10 + numberx[3]
                } else if (numberx.length == 5) {
                    mathx = numberx[0] * 10000 + numberx[1] * 1000 + numberx[2] * 100 + numberx[3] * 10 + numberx[4]
                } else if (numberx.length == 6) {
                    mathx = numberx[0] * 100000 + numberx[1] * 10000 + numberx[2] * 1000 + numberx[3] * 100 + numberx[4] * 10 + numberx[5]
                } else if (numberx.length == 7) {
                    mathx = numberx[0] * 1000000 + numberx[1] * 100000 + numberx[2] * 10000 + numberx[3] * 1000 + numberx[4] * 100 + numberx[5] * 10 + numberx[6]
                } else if (numberx.length == 8) {
                    mathx = numberx[0] * 10000000 + numberx[1] * 1000000 + numberx[2] * 100000 + numberx[3] * 10000 + numberx[4] * 1000 + numberx[5] * 100 + numberx[6] * 10 + numberx[7]
                } else {
                    basic.showIcon(IconNames.No)
                }
                break;
                basic.clearScreen()
            } else if (input.buttonIsPressed(Button.A)){
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                if (num == 0) {
                    num = 9
                } else {
                    num += -1
                }
                break;
            } else if (input.buttonIsPressed(Button.B)) {
                scroll_interval = 45
                if (num == 9) {
                    num = 0
                } else {
                    num += 1
                }
                break;
            } else if (input.logoIsPressed()) {
                music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                numberx.push(numberlist[num])
                basic.showIcon(IconNames.Yes)
                break;
            } 
        }
        
    }
    game.addScore(1)
    basic.pause(500)
    num = 0
    while (true) {
        if (input.pinIsPressed(TouchPin.P2)) {
            break;
        }
        unid_if_0_9()
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        while(true){
            scroll_interval = 1
            if (input.pinIsPressed(TouchPin.P2)) {
                if (numbery.length == 1) {
                    mathy = numbery[0]
                } else if (numbery.length == 2) {
                    mathy = numbery[0] * 10 + numbery[1]
                } else if (numbery.length == 3) {
                    mathy = numbery[0] * 100 + numbery[1] * 10 + numbery[2]
                } else if (numbery.length == 4) {
                    mathy = numbery[0] * 1000 + numbery[1] * 100 + numbery[2] * 10 + numbery[3]
                } else if (numbery.length == 5) {
                    mathy = numbery[0] * 10000 + numbery[1] * 1000 + numbery[2] * 100 + numbery[3] * 10 + numbery[4]
                } else if (numbery.length == 6) {
                    mathy = numbery[0] * 100000 + numbery[1] * 10000 + numbery[2] * 1000 + numbery[3] * 100 + numbery[4] * 10 + numbery[5]
                } else if (numbery.length == 7) {
                    mathy = numbery[0] * 1000000 + numbery[1] * 100000 + numbery[2] * 10000 + numbery[3] * 1000 + numbery[4] * 100 + numbery[5] * 10 + numbery[6]
                } else if (numbery.length == 8) {
                    mathy = numbery[0] * 10000000 + numbery[1] * 1000000 + numbery[2] * 100000 + numbery[3] * 10000 + numbery[4] * 1000 + numbery[5] * 100 + numberx[6] * 10 + numbery[7]
                } else {
                    basic.showIcon(IconNames.No)
                }
                basic.clearScreen()
                break;
            } else if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                if (num == 0) {
                    num = 9
                } else {
                    num += -1
                }
                break;
            } else if (input.buttonIsPressed(Button.B)) {
                scroll_interval = 45
                if (num == 9) {
                    num = 0
                } else {
                    num += 1
                }
                break;
            } else if (input.logoIsPressed()) {
                basic.showIcon(IconNames.Yes)
                music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                numbery.push(numberlist[num])
                break;
            }
        }
    }
    game.addScore(1)
    basic.pause(400)
    if (selected_math == 1) {
        basic.showNumber(mathx + mathy)
    } else if (selected_math == 2) {
        basic.showNumber(mathx - mathy)
    } else if (selected_math == 3) {
        basic.showNumber(mathx * mathy)
    } else if (selected_math == 4) {
        basic.showNumber(mathx / mathy)
    } else if (selected_math == 5) {
        basic.showNumber(mathx ** mathy)
    } else if (selected_math == 11) {
        while (true) {
            if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B) || input.logoIsPressed()) {
                basic.showNumber(randint(mathx, mathy))
            }
            basic.clearScreen()
        }
    }}
function math_x() { //Calculator with 1 variable // Selected_tool = 9
    basic.clearScreen()
    basic.pause(100)
    mathx = 0
    mathy = 0
    num = 0
    while (true) {
        if (input.pinIsPressed(TouchPin.P2)) {
            break;
        }
        unid_if_0_9()
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        while(true){
            scroll_interval = 1
            if (input.pinIsPressed(TouchPin.P2)) {
                if (numberx.length == 1) {
                    mathx = numberx[0]
                } else if (numberx.length == 2) {
                    mathx = numberx[0] * 10 + numberx[1]
                } else if (numberx.length == 3) {
                    mathx = numberx[0] * 100 + numberx[1] * 10 + numberx[2]
                } else if (numberx.length == 4) {
                    mathx = numberx[0] * 1000 + numberx[1] * 100 + numberx[2] * 10 + numberx[3]
                } else if (numberx.length == 5) {
                    mathx = numberx[0] * 10000 + numberx[1] * 1000 + numberx[2] * 100 + numberx[3] * 10 + numberx[4]
                } else if (numberx.length == 6) {
                    mathx = numberx[0] * 100000 + numberx[1] * 10000 + numberx[2] * 1000 + numberx[3] * 100 + numberx[4] * 10 + numberx[5]
                } else if (numberx.length == 7) {
                    mathx = numberx[0] * 1000000 + numberx[1] * 100000 + numberx[2] * 10000 + numberx[3] * 1000 + numberx[4] * 100 + numberx[5] * 10 + numberx[6]
                } else if (numberx.length == 8) {
                    mathx = numberx[0] * 10000000 + numberx[1] * 1000000 + numberx[2] * 100000 + numberx[3] * 10000 + numberx[4] * 1000 + numberx[5] * 100 + numberx[6] * 10 + numberx[7]
                } else {
                    basic.showIcon(IconNames.No)
                }
                basic.clearScreen()
                break;
            } else if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                if (num == 0) {
                    num = 9
                } else {
                    num += -1
                }
                break;
            } else if (input.buttonIsPressed(Button.B)) {
                scroll_interval = 45
                if (num == 9) {
                    num = 0
                } else {
                    num += 1
                }
                break;
            } else if (input.logoIsPressed()) {
                music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                numberx.push(numberlist[num])
                basic.showIcon(IconNames.Yes)
                break;
            }
        }
    }
    game.addScore(1)
    basic.pause(500)
    num = 0

    if (selected_math == 6) {
        basic.showNumber(Math.sqrt(mathx))
    } else if (selected_math == 7) {
        basic.showNumber(Math.sin(mathx * Math.PI / 180))
    } else if (selected_math == 8) {
        basic.showNumber(Math.cos(mathx * Math.PI / 180))
    } else if (selected_math == 9) {
        basic.showNumber(Math.tan(mathx * Math.PI / 180))
    }}
function signal() { //Signal / Alarm clock // Selected_tool = 10
    basic.clearScreen()
    music.setBuiltInSpeakerEnabled(true)
    basic.pause(200)
    basic.showString("H")
    basic.clearScreen()
    hour = 0
    minute = 0
    second = 0
    unid_type = 2
    signal_hour = 0
    signal_minute = 0
    while (true) {
        if (input.logoIsPressed()) {
            break;
        }
        unid_if_1_23()
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        while(true){
            scroll_interval = 1
            if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                if (hour == 0) {
                    hour = 23
                } else {
                    hour += -1
                }
                break;
            } else if (input.buttonIsPressed(Button.B)) {
                scroll_interval = 45
                if (hour == 23) {
                    hour = 0
                } else {
                    hour += 1
                }
                break;
            } else if (input.logoIsPressed()) {
                music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                basic.showIcon(IconNames.Yes)
                break;
            }
        }
    }
    basic.clearScreen()
    basic.pause(200)
    basic.showString("M")
    basic.clearScreen()
    unid_type = 3
    while (true) {
        if (input.logoIsPressed()) {
            break;
        }
        unid_if_1_23()
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        while(true){
            scroll_interval = 1
            if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                if (minute == 0) {
                    minute = 55
                } else {
                    minute += -5
                }
                break;
            } else if (input.buttonIsPressed(Button.B)) {
                scroll_interval = 45
                if (minute == 55) {
                    minute = 0
                } else {
                    minute += 5
                }
                break;
            }else if (input.logoIsPressed()) {
                music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                basic.showIcon(IconNames.Yes)
                break;
            }
        }
    }
    basic.clearScreen()
    basic.pause(200)
    basic.showString("SIG-H")
    basic.clearScreen()
    unid_type = 5
    while (true) {
        if (input.logoIsPressed()) {
            break;
        }
        unid_if_1_23()
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        while(true){
            scroll_interval = 1
            if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                if (signal_hour == 0) {
                    signal_hour = 23
                } else {
                    signal_hour += -1
                }
                break;
            } else if (input.buttonIsPressed(Button.B)) {
                scroll_interval = 45
                if (signal_hour == 23) {
                    signal_hour = 0
                } else {
                    signal_hour += 1
                }
                break;
            } else if (input.logoIsPressed()) {
                music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                basic.showIcon(IconNames.Yes)
            }
        }
    }
    basic.clearScreen()
    basic.pause(200)
    basic.showString("SIG-M")
    basic.clearScreen()
    unid_type = 6
    while (true) {
        if (input.logoIsPressed()) {
            break;
        }
        unid_if_1_23()
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        while(true){
            scroll_interval = 1
            if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                if (signal_minute == 0) {
                    signal_minute = 55
                } else {
                    signal_minute += -5
                }
                break;
            } else if (input.buttonIsPressed(Button.B)) {
                scroll_interval = 45
                if (signal_minute == 55) {
                    signal_minute = 0
                } else {
                    signal_minute += 5
                }
                break;
            } else if (input.logoIsPressed()) {
                music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                basic.showIcon(IconNames.Yes)
                break;
            }
        }
    }
    basic.clearScreen()
    while (true) {
        if (hour == signal_hour) {
            if (minute == signal_minute) {
                while (true) {
                    basic.showIcon(IconNames.Yes)
                    music.play(music.stringPlayable("E - E - - E E E ", 1000), music.PlaybackMode.UntilDone)
                    music.play(music.stringPlayable("- E - E E E - - ", 1000), music.PlaybackMode.UntilDone)
                    if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B) || input.logoIsPressed()) {
                        control.reset()
                    }
                    if (input.logoIsPressed()) {
                        control.reset()
                    }
                }
            }
        }
        basic.pause(1000)
        if (second == 59) {
            second = 0
            if (minute == 59) {
                minute = 0
                if (hour == 23) {
                    hour = 0
                } else {
                    hour += 1
                }
            } else {
                minute += 1
            }
        } else {
            second += 1
        }
    }}
function chronometer() { // Chronometer // Selected_tool = 10
    running = false
    crhonometer_run = true
    let dotLocation = 0
    let xy = 0
    let coords = [
        11,
        21,
        31,
        32,
        33,
        23,
        13,
        12
    ]
    while (true) {
        if (running) {
            basic.clearScreen()
            xy = coords[dotLocation]
            led.toggle(Math.idiv(xy, 10), xy % 10)
            basic.pause(1000 / 8)
            dotLocation = (dotLocation + 1) % 8
        } else {
            basic.showIcon(IconNames.No)
        }
    }}
function timer() { // Timer // Selected_tool = 10LAST
    basic.clearScreen()
    music.setBuiltInSpeakerEnabled(true)
    basic.pause(200)
    basic.showString("H")
    basic.clearScreen()
    hour = 0
    minute = 0
    second = 0
    num = 0
    while (true) {
        if (input.pinIsPressed(TouchPin.P2)) {
            break;
        }
        unid_if_0_9()
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        while(true){
            scroll_interval = 1
            if (input.pinIsPressed(TouchPin.P2)) {
                if (list.length == 1) {
                    hour = list[0]
                } else if (list.length == 2) {
                    hour = list[0] * 10 + list[1]
                } else {
                    basic.showIcon(IconNames.No)
                }
                break;
            } else if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                if (num == 0) {
                    num = 9
                } else {
                    num += -1
                }
                break;
            } else if (input.buttonIsPressed(Button.B)) {
                scroll_interval = 45
                if (num == 9) {
                    num = 0
                } else {
                    num += 1
                }
                break;
            } else if (input.logoIsPressed()) {
                music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                list.push(numberlist[num])
                basic.showIcon(IconNames.Yes)
                break;
            }
        }
    }
    basic.clearScreen()
    basic.pause(200)
    basic.showString("M")
    basic.clearScreen()
    num = 0
    list = []
    while (true) {
        if (input.pinIsPressed(TouchPin.P2)) {
            break;
        }
        unid_if_0_9()
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        while(true){
            scroll_interval = 1
            if (input.pinIsPressed(TouchPin.P2)) {
                if (list.length == 1) {
                    minute = list[0]
                } else if (list.length == 2) {
                    minute = list[0] * 10 + list[1]
                } else {
                    basic.showIcon(IconNames.No)
                }
                break;
            } else if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                if (num == 0) {
                    num = 9
                } else {
                    num += -1
                }
                break;
            } else if (input.buttonIsPressed(Button.B)) {
                scroll_interval = 45
                if (num == 9) {
                    num = 0
                } else {
                    num += 1
                }
                break;
            } else if (input.logoIsPressed()) {
                music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                list.push(numberlist[num])
                basic.showIcon(IconNames.Yes)
            }
        }
    }
    basic.clearScreen()
    basic.pause(200)
    basic.showString("S")
    basic.clearScreen()
    num = 0
    list = []
    while (true) {
        if (input.pinIsPressed(TouchPin.P2)) {
            break;
        }
        unid_if_0_9()
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        while(true){
            scroll_interval = 1
            if (input.pinIsPressed(TouchPin.P2)) {
                if (list.length == 1) {
                    second = list[0]
                } else if (list.length == 2) {
                    second = list[0] * 10 + list[1]
                } else {
                    basic.showIcon(IconNames.No)
                }
                break;
            } else if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                if (num == 0) {
                    num = 9
                } else {
                    num += -1
                }
                break;
            } else if (input.buttonIsPressed(Button.B)) {
                scroll_interval = 45
                if (num == 9) {
                    num = 0
                } else {
                    num += 1
                }
                break;
            } else if (input.logoIsPressed()) {
                music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                list.push(numberlist[num])
                basic.showIcon(IconNames.Yes)
            }
        }
    }
    basic.clearScreen()
    while (true) {
        if (hour == 0) {
            if (minute == 0) {
                if (second == 0) {
                    while (true) {
                        basic.showIcon(IconNames.Yes)
                        music.play(music.stringPlayable("E - E - - E E E ", 1000), music.PlaybackMode.UntilDone)
                        music.play(music.stringPlayable("- E - E E E - - ", 1000), music.PlaybackMode.UntilDone)
                        if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B) || input.logoIsPressed()) {
                            control.reset()
                        }
                        if (input.logoIsPressed()) {
                            control.reset()
                        }
                    }
                }
            }
        }
        basic.pause(1000)
        if (second == 0) {
            second = 59
            if (minute == 0) {
                minute = 59
                if (hour == 0) {
                    hour = 23
                } else {
                    hour += -1
                }
            } else {
                minute += -1
            }
        } else {
            second += -1
        }
    }}
function clock() { // Clock // Selected_tool = 10
    basic.clearScreen()
    music.setBuiltInSpeakerEnabled(true)
    basic.pause(200)
    basic.showString("H")
    basic.clearScreen()
    hour = 0
    minute = 0
    second = 0
    num = 0
    while (true) {
        if (input.pinIsPressed(TouchPin.P2)) {
            break;
        }
        unid_if_0_9()
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        while(true){
            if (input.pinIsPressed(TouchPin.P2)) {
                scroll_interval = 1
                if (list.length == 1) {
                    hour = list[0]
                } else if (list.length == 2) {
                    hour = list[0] * 10 + list[1]
                } else {
                    basic.showIcon(IconNames.No)
                }
                break;
            }
            if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                scroll_interval = 1
                if (num == 0) {
                    num = 9
                } else {
                    num += -1
                }
                break;
            }
            if (input.buttonIsPressed(Button.B)) {
                scroll_interval = 45
                if (num == 9) {
                    num = 0
                } else {
                    num += 1
                }
                break;
            }
            if (input.logoIsPressed()) {
                scroll_interval = 1
                music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                list.push(numberlist[num])
                basic.showIcon(IconNames.Yes)
                break;
            }
        }
    }
    basic.clearScreen()
    basic.pause(200)
    basic.showString("M")
    basic.clearScreen()
    num = 0
    list = []
    while (true) {
        if (input.pinIsPressed(TouchPin.P2)) {
            break;
        }
        unid_if_0_9()
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        while(true){
            if (input.pinIsPressed(TouchPin.P2)) {
                scroll_interval = 1
                if (list.length == 1) {
                    minute = list[0]
                } else if (list.length == 2) {
                    minute = list[0] * 10 + list[1]
                } else {
                    basic.showIcon(IconNames.No)
                }
                break;
            }
            if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                scroll_interval = 1
                if (num == 0) {
                    num = 9
                } else {
                    num += -1
                }
                break;
            }
            if (input.buttonIsPressed(Button.B)) {
                scroll_interval = 45
                if (num == 9) {
                    num = 0
                } else {
                    num += 1
                }
                break;
            }
            if (input.logoIsPressed()) {
                scroll_interval = 1
                music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                list.push(numberlist[num])
                basic.showIcon(IconNames.Yes)
                break;
            }
        }
    }
    basic.clearScreen()
    basic.pause(200)
    basic.showString("S")
    basic.clearScreen()
    num = 0
    list = []
    while (true) {
        if (input.pinIsPressed(TouchPin.P2)) {
            break;
        }
        unid_if_0_9()
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        while(true){
            if (input.pinIsPressed(TouchPin.P2)) {
                scroll_interval = 1
                if (list.length == 1) {
                    second = list[0]
                } else if (list.length == 2) {
                    second = list[0] * 10 + list[1]
                } else {
                    basic.showIcon(IconNames.No)
                }
                break;
            }
            if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                scroll_interval = 1
                if (num == 0) {
                    num = 9
                } else {
                    num += -1
                }
                break;
            }
            if (input.buttonIsPressed(Button.B)) {
                scroll_interval = 45
                if (num == 9) {
                    num = 0
                } else {
                    num += 1
                }
                break;
            }
            if (input.logoIsPressed()) {
                scroll_interval = 1
                music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                list.push(numberlist[num])
                basic.showIcon(IconNames.Yes)
                break;
            }
        }
    }
    basic.clearScreen()
    timeanddate.set24HourTime(hour, minute, second)
    while (true) {
        timeanddate.advanceBy(100, timeanddate.TimeUnit.Milliseconds)
        basic.pause(100)
        if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B) || input.logoIsPressed()) {
            basic.showString(timeanddate.time(timeanddate.TimeFormat.HHMMSS24hr))
            for (let index = 0; index < 8; index++) {
                timeanddate.advanceBy(100, timeanddate.TimeUnit.Milliseconds)
                timeanddate.advanceBy(100, timeanddate.TimeUnit.Milliseconds)
                timeanddate.advanceBy(100, timeanddate.TimeUnit.Milliseconds)
                timeanddate.advanceBy(100, timeanddate.TimeUnit.Milliseconds)
                timeanddate.advanceBy(100, timeanddate.TimeUnit.Milliseconds)
                timeanddate.advanceBy(100, timeanddate.TimeUnit.Milliseconds)
                timeanddate.advanceBy(100, timeanddate.TimeUnit.Milliseconds)
                timeanddate.advanceBy(100, timeanddate.TimeUnit.Milliseconds)
                timeanddate.advanceBy(100, timeanddate.TimeUnit.Milliseconds)
                timeanddate.advanceBy(100, timeanddate.TimeUnit.Milliseconds)
            }
        }
    }}
function bluetooth_media() { //Control media via bluetooth.
    while (bluetooth_online == true) {
        if (input.pinIsPressed(TouchPin.P2)) {
            media.sendCode(media.keys(media._MediaKey.mute))
            basic.showLeds(`
            . # . . .
            # . # . #
            # . . # .
            # . # . #
            . # . . .
            `)
        }
        if (input.buttonIsPressed(Button.A)) {
            basic.pause(200)
            if (input.buttonIsPressed(Button.A)) {
                media.sendCode(media.keys(media._MediaKey.previous))
                basic.showLeds(`
                . . # . #
                . # . # .
                # # # # #
                . # . # .
                . . # . #
                `)
            } else {
                media.sendCode(media.keys(media._MediaKey.vol_down))
                basic.showLeds(`
                . . . . .
                . . . . .
                . # # # .
                . . . . .
                . . . . .
                `)
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            basic.pause(200)
            if (input.buttonIsPressed(Button.B)) {
                media.sendCode(media.keys(media._MediaKey.next))
                basic.showLeds(`
                # . # . .
                . # . # .
                # # # # #
                . # . # .
                # . # . .
                `)
            } else {
                media.sendCode(media.keys(media._MediaKey.vol_up))
                basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . . . .
                `)
            }
        }
        if (input.logoIsPressed()) {
            media.sendCode(media.keys(media._MediaKey.playPause))
            basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            `)
        }
        basic.pause(150)
        basic.clearScreen()
    }
    loading_animation()
    bluetooth_media()}
function bluetooth_mouse() { //Control the mouse via bluetooth.
    while (bluetooth_online == true) {
        newx = input.acceleration(Dimension.X)
        newy = input.acceleration(Dimension.Y)
        mouse.send(
            0.5 * (newx - x),
            0.5 * (newy - y),
            input.buttonIsPressed(Button.A),
            input.logoIsPressed(),
            input.buttonIsPressed(Button.B),
            0,
            false
        )
        x = 0.4 * x + 0.4 * newx
        y = 0.4 * y + 0.4 * newx
    }
    loading_animation()
    bluetooth_mouse()}
function bluetooth_gamepad() { //Control the gamepad via bluetooth.
    while (bluetooth_online == true) {
        gamepad.send(
            gamepad._buttons(GameButton.A, input.buttonIsPressed(Button.B)),
            Math.map(input.acceleration(Dimension.X), -1023, 1023, -126, 126),
            Math.map(input.acceleration(Dimension.Y), -1023, 1023, -126, 126),
            gamepad._dpad(GameDirection.up),
            0,
            0
        )
        if (input.buttonIsPressed(Button.AB)) {
            gamepad.send(
                gamepad._buttons(GameButton.start, true),
                Math.map(input.acceleration(Dimension.X), -1023, 1023, -126, 126),
                Math.map(input.acceleration(Dimension.Y), -1023, 1023, -126, 126),
                gamepad._dpad(GameDirection.up),
                0,
                0
            )
        }
        if (input.buttonIsPressed(Button.A)) {
            gamepad.send(
                gamepad._buttons(GameButton.Y, true),
                Math.map(input.acceleration(Dimension.X), -1023, 1023, -126, 126),
                Math.map(input.acceleration(Dimension.Y), -1023, 1023, -126, 126),
                gamepad._dpad(GameDirection.up),
                0,
                0
            )
        }
        if (input.buttonIsPressed(Button.B)) {
            gamepad.send(
                gamepad._buttons(GameButton.A, true),
                Math.map(input.acceleration(Dimension.X), -1023, 1023, -126, 126),
                Math.map(input.acceleration(Dimension.Y), -1023, 1023, -126, 126),
                gamepad._dpad(GameDirection.up),
                0,
                0
            )
        }
        if (input.logoIsPressed()) {
            gamepad.send(
                gamepad._buttons(GameButton.X, true),
                Math.map(input.acceleration(Dimension.X), -1023, 1023, -126, 126),
                Math.map(input.acceleration(Dimension.Y), -1023, 1023, -126, 126),
                gamepad._dpad(GameDirection.up),
                0,
                0
            )
        }
        if (input.pinIsPressed(TouchPin.P2)) {
            gamepad.send(
                gamepad._buttons(GameButton.B, true),
                Math.map(input.acceleration(Dimension.X), -1023, 1023, -126, 126),
                Math.map(input.acceleration(Dimension.Y), -1023, 1023, -126, 126),
                gamepad._dpad(GameDirection.up),
                0,
                0
            )
        }
        if (input.pinIsPressed(TouchPin.P0)) {
            gamepad.send(
                gamepad._buttons(GameButton.leftShoulder, true),
                Math.map(input.acceleration(Dimension.X), -1023, 1023, -126, 126),
                Math.map(input.acceleration(Dimension.Y), -1023, 1023, -126, 126),
                gamepad._dpad(GameDirection.up),
                0,
                0
            )
        }
        if (input.pinIsPressed(TouchPin.P1)) {
            gamepad.send(
                gamepad._buttons(GameButton.rightShoulder, true),
                Math.map(input.acceleration(Dimension.X), -1023, 1023, -126, 126),
                Math.map(input.acceleration(Dimension.Y), -1023, 1023, -126, 126),
                gamepad._dpad(GameDirection.up),
                0,
                0
            )
        }
        basic.pause(150)
    }
    loading_animation()
    bluetooth_gamepad()}
function bluetooth_keyboard() { //Send any keyboard input via bluetooth
    while (bluetooth_online == true) {
        basic.clearScreen()
        basic.pause(500)
        while (true) {
            usid_if()
            if (scroll_interval == 1) {
                basic.pause(300)
            }
            while(true){
                if (input.pinIsPressed(TouchPin.P2)) {
                    scroll_interval = 1
                    shift = true
                    music.play(music.tonePlayable(220, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                    break;
                }
                if (input.buttonIsPressed(Button.A)) {
                    led.fadeOut(fade_int)
                    led.fadeIn(fade_int)
                    scroll_interval = 1
                    if (abc_id == 1) {
                        abc_id = 38
                    } else {
                        abc_id += -1
                    }
                    break;
                }
                if (input.buttonIsPressed(Button.B)) {
                    scroll_interval = 45
                    if (abc_id == 38) {
                        abc_id = 1
                    } else {
                        abc_id += 1
                    }
                    break;
                }
                if (input.logoIsPressed()) {
                    scroll_interval = 1
                    basic.showIcon(IconNames.Yes)
                    uckb_if()
                    keyboard.sendString(uckb)
                    music.play(music.tonePlayable(523, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                    basic.pause(100)
                    break;
                }
            }
        }
    }
    loading_animation()
    bluetooth_keyboard()}
function bluetooth_keyboard_number() { //Send keyboard numbers via bluetooth.
    while (bluetooth_online == true) {
        basic.clearScreen()
        basic.pause(500)
        num = 0
        while (true) {
            if (scroll_interval == 1) {
                basic.pause(300)
            }
            unid_if_0_9()
            while(true){
                if (input.pinIsPressed(TouchPin.P2)) {
                    scroll_interval = 1
                    shift = true
                    music.play(music.tonePlayable(220, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                    break;
                }
                if (input.buttonIsPressed(Button.A)) {
                    led.fadeOut(fade_int)
                    led.fadeIn(fade_int)
                    scroll_interval = 1
                    if (num == 0) {
                        num = 9
                    } else {
                        num += -1
                    }
                    break;
                }
                if (input.buttonIsPressed(Button.B)) {
                    scroll_interval = 45
                    if (num == 9) {
                        num = 0
                    } else {
                        num += 1
                    }
                    break;
                }
                if (input.logoIsPressed()) {
                    scroll_interval = 1
                    basic.showIcon(IconNames.Yes)
                    if (shift == true) {
                        keyboard.sendString(symb_list[num])
                        shift = false
                    } else {
                        keyboard.sendString(num_list[num])
                    }
                    music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                    break;
                }
            }
        }
    }
    loading_animation()
    bluetooth_keyboard_number()}
function bluetooth_keyboard_arrows() { // Control arrow keys via bluetooth.
    while (bluetooth_online == true) {
        if (input.buttonIsPressed(Button.A)) {
            keyboard.sendString(keyboard.keys(keyboard._Key.left))
            basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
            basic.pause(150)
        }
        if (input.buttonIsPressed(Button.B)) {
            keyboard.sendString(keyboard.keys(keyboard._Key.right))
            basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
            basic.pause(150)
        }
        if (input.logoIsPressed()) {
            keyboard.sendString(keyboard.keys(keyboard._Key.up))
            basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
            basic.pause(150)
        }
        if (input.pinIsPressed(TouchPin.P2)) {
            keyboard.sendString(keyboard.keys(keyboard._Key.down))
            basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
            basic.pause(150)
        }
        basic.clearScreen()
    }
    loading_animation()
    bluetooth_keyboard_arrows()}
function bluetooth_keyboard_custom() { // Custom keyboard input.
    while (bluetooth_online == true) {
        basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
        basic.pause(500)
        basic.clearScreen()
        while (true) {
            if (input.logoIsPressed()) {
                break;
            }
            usid_if()
            if (scroll_interval == 1) {
                basic.pause(300)
            }
            while(true){
                if (input.pinIsPressed(TouchPin.P2)) {
                    scroll_interval = 1
                    shift = true
                    music.play(music.tonePlayable(220, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                    break;
                }
                if (input.buttonIsPressed(Button.A)) {
                    led.fadeOut(fade_int)
                    led.fadeIn(fade_int)
                    scroll_interval = 1
                    if (abc_id == 1) {
                        abc_id = 38
                    } else {
                        abc_id += -1
                    }
                    break;
                }
                if (input.buttonIsPressed(Button.B)) {
                    scroll_interval = 45
                    if (abc_id == 38) {
                        abc_id = 1
                    } else {
                        abc_id += 1
                    }
                    break;
                }
                
                if (input.logoIsPressed()) {
                    scroll_interval = 1
                    basic.showIcon(IconNames.Yes)
                    uckb_if()
                    custom_a_button = uckb
                    music.play(music.tonePlayable(523, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                    break;
                }
            }
        }
        basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
        basic.pause(500)
        basic.clearScreen()
        abc_id = 1
        while (true) {
            if (input.logoIsPressed()) {
                break;
            }
            usid_if()
            if (scroll_interval == 1) {
                basic.pause(300)
            }
            while(true){
                if (input.pinIsPressed(TouchPin.P2)) {
                    scroll_interval = 1
                    shift = true
                    music.play(music.tonePlayable(220, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                    break;
                }
                if (input.buttonIsPressed(Button.A)) {
                    led.fadeOut(fade_int)
                    led.fadeIn(fade_int)
                    scroll_interval = 1
                    if (abc_id == 1) {
                        abc_id = 38
                    } else {
                        abc_id += -1
                    }
                    break;
                }
                if (input.buttonIsPressed(Button.B)) {
                    scroll_interval = 45
                    if (abc_id == 38) {
                        abc_id = 1
                    } else {
                        abc_id += 1
                    }
                    break;
                }                if (input.logoIsPressed()) {
                    scroll_interval = 1
                    basic.showIcon(IconNames.Yes)
                    uckb_if()
                    custom_logo_button = uckb
                    music.play(music.tonePlayable(523, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                    break;
                }
            }
        }
        basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
        basic.pause(500)
        basic.clearScreen()
        abc_id = 1
        while (true) {
            if (input.logoIsPressed()) {
                break;
            }
            usid_if()
            if (scroll_interval == 1) {
                basic.pause(300)
            }
            while(true){
                if (input.pinIsPressed(TouchPin.P2)) {
                    scroll_interval = 1
                    shift = true
                    music.play(music.tonePlayable(220, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                    break;
                }
                if (input.buttonIsPressed(Button.A)) {
                    led.fadeOut(fade_int)
                    led.fadeIn(fade_int)
                    scroll_interval = 1
                    if (abc_id == 1) {
                        abc_id = 38
                    } else {
                        abc_id += -1
                    }
                    break;
                }
                if (input.buttonIsPressed(Button.B)) {
                    scroll_interval = 45
                    if (abc_id == 38) {
                        abc_id = 1
                    } else {
                        abc_id += 1
                    }
                    break;
                }
                if (input.logoIsPressed()) {
                    scroll_interval = 1
                    basic.showIcon(IconNames.Yes)
                    uckb_if()
                    custom_b_button = uckb
                    music.play(music.tonePlayable(523, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                    break;
                }
            }
        }
        basic.pause(200)
        basic.clearScreen()
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
                keyboard.sendString(custom_a_button)
            }
            if (input.buttonIsPressed(Button.B)) {
                basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
                keyboard.sendString(custom_b_button)
            }
            if (input.logoIsPressed()) {
                basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
                keyboard.sendString(custom_logo_button)
            }
            basic.pause(150)
            basic.clearScreen()
        }
    }
    loading_animation()
    bluetooth_keyboard_custom()}
function create_strig() { //Create a temp-saved string.
    basic.clearScreen()
    basic.pause(500)
    while (true) {
        if (input.pinIsPressed(TouchPin.P2)) {
            break;
        }
        usid_if()
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        while(true){
            if (input.pinIsPressed(TouchPin.P2)) {
                break;
            }
            if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                scroll_interval = 1
                if (abc_id == 1) {
                    abc_id = 38
                } else {
                    abc_id += -1
                }
                break;
            }
            if (input.buttonIsPressed(Button.B)) {
                scroll_interval = 45
                if (abc_id == 38) {
                    abc_id = 1
                } else {
                    abc_id += 1
                }
                break;
            }
            if (input.logoIsPressed()) {
                scroll_interval = 1
                basic.showIcon(IconNames.Yes)
                inputlist.push(abc[abc_id])
                music.play(music.tonePlayable(523, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                basic.pause(100)
                break;
            }
        }
    }
    while (inputlist.length != 0) {
        text = "" + text + inputlist[0]
        inputlist.shift()
    }
    while (true) {
        basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
        if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B) || input.logoIsPressed()) {
            basic.showString(text)
        }
    }}
function create_number() { //Create a temp-saved number.
    basic.clearScreen()
    basic.pause(500)
    num = 0
    let number_send = 0
    while (true) {
        if (input.pinIsPressed(TouchPin.P2)) {
            break;
        }
        unid_if_0_9()
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        while(true){
            if (input.pinIsPressed(TouchPin.P2)) {
                scroll_interval = 1
                if (list.length == 1) {
                    number_send = list[0]
                } else if (list.length == 2) {
                    number_send = list[0] * 10 + list[1]
                } else if (list.length == 3) {
                    number_send = list[0] * 100 + list[1] * 10 + list[2]
                } else if (list.length == 4) {
                    number_send = list[0] * 1000 + list[1] * 100 + list[2] * 10 + list[3]
                } else if (list.length == 5) {
                    number_send = list[0] * 10000 + list[1] * 1000 + list[2] * 100 + list[3] * 10 + list[4]
                } else if (list.length == 6) {
                    number_send = list[0] * 100000 + list[1] * 10000 + list[2] * 1000 + list[3] * 100 + list[4] * 10 + list[5]
                } else if (list.length == 7) {
                    number_send = list[0] * 1000000 + list[1] * 100000 + list[2] * 10000 + list[3] * 1000 + list[4] * 100 + list[5] * 10 + list[6]
                } else if (list.length == 8) {
                    number_send = list[0] * 10000000 + list[1] * 1000000 + list[2] * 100000 + list[3] * 10000 + list[4] * 1000 + list[5] * 100 + list[6] * 10 + list[7]
                } else {
                    basic.showIcon(IconNames.No)
                }
                break;
            }
            if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                scroll_interval = 1
                if (num == 0) {
                    num = 9
                } else {
                    num += -1
                }
                break;
            }
            if (input.buttonIsPressed(Button.B)) {
                scroll_interval = 45
                if (num == 9) {
                    num = 0
                } else {
                    num += 1
                }
                break;
            }
            if (input.logoIsPressed()) {
                scroll_interval = 1
                basic.showIcon(IconNames.Yes)
                music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                list.push(numberlist[num])
                break;
            }
        }
    }
    while (true) {
        basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
        if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B) || input.logoIsPressed()) {
            basic.showNumber(number_send)
        }
    }}
function create_image() { //Create a temp-saved image.
    let pen_up = false
    turtle.setPosition(2, 2)
    turtle.setBrightness(20)
    turtle.pen(TurtlePenMode.Down)
    turtle.home()
    let turtle_input: number[] = []
    while (true) {
        if (input.buttonIsPressed(Button.AB)) {
            basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            # . . . .
            # # . . .
            `)
            turtle_input.push(2)
            if (pen_up == false) {
                music.play(music.tonePlayable(880, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
            } else {
                music.play(music.tonePlayable(880, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
            }
        }
        if (input.buttonIsPressed(Button.A)) {
            turtle_input.push(0)
            basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
            music.play(music.tonePlayable(220, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
        }
        if (input.buttonIsPressed(Button.B)) {
            turtle_input.push(1)
            basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
            music.play(music.tonePlayable(220, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
        }
        if (input.logoIsPressed()) {
            turtle_input.push(3)
            basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
            music.play(music.tonePlayable(220, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
        }
        if (input.isGesture(Gesture.Shake)) {
            turtle_input.push(4)
            basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
            music.play(music.tonePlayable(220, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
        }
        if (input.pinIsPressed(TouchPin.P2)) {
            break;
        }
        basic.clearScreen()
        basic.pause(200)
    }
    basic.clearScreen()
    turtle.setPosition(2, 2)
    while (true) {
        basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
        if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B) || input.logoIsPressed()) {
            while (true) {
                if (turtle_input[0] == 0) {
                    turtle.turnLeft()
                }
                if (turtle_input[0] == 1) {
                    turtle.turnRight()
                }
                if (turtle_input[0] == 2) {
                    if (pen_up == false) {
                        pen_up = true
                        turtle.pen(TurtlePenMode.Up)
                    } else {
                        pen_up = false
                        turtle.pen(TurtlePenMode.Down)
                    }
                }
                if (turtle_input[0] == 3) {
                    turtle.forward(1)
                }
                if (turtle_input[0] == 4) {
                    turtle.back(1)
                }
                turtle_input.removeAt(0)
            }
        }
    }}
function music_melody8() { //Built in mucic 8.
    music.setBuiltInSpeakerEnabled(true)
    basic.clearScreen()
    basic.pause(300)
    num = 1
    unid_type = 1
    while (true) {
        if (input.logoIsPressed()) {
            break;
        }
        unid_if_1_23()
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        while(true){
            if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                scroll_interval = 1
                if (num == 1) {
                    num = 10
                } else {
                    num += -1
                }
                break;
            }
            if (input.buttonIsPressed(Button.B)) {
                scroll_interval = 45
                if (num == 10) {
                    num = 1
                } else {
                    num += 1
                }
                break;
            }
            if (input.logoIsPressed()) {
                scroll_interval = 1
                basic.showIcon(IconNames.Yes)
                basic.clearScreen()
                music_playing = true
                if (num == 1) {
                    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
                } else if (num == 2) {
                    music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
                } else if (num == 3) {
                    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
                } else if (num == 4) {
                    music.play(music.stringPlayable("A F E F D G E F ", 120), music.PlaybackMode.UntilDone)
                } else if (num == 5) {
                    music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.UntilDone)
                } else if (num == 6) {
                    music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.UntilDone)
                } else if (num == 7) {
                    music.play(music.stringPlayable("B A G A G F A C5 ", 120), music.PlaybackMode.UntilDone)
                } else if (num == 8) {
                    music.play(music.stringPlayable("G F G A - F E D ", 120), music.PlaybackMode.UntilDone)
                } else if (num == 9) {
                    music.play(music.stringPlayable("E D G F B A C5 B ", 120), music.PlaybackMode.UntilDone)
                } else {
                    music.play(music.stringPlayable("C5 G B A F A C5 B ", 120), music.PlaybackMode.UntilDone)
                }
                music_playing = false
                break;
            }
        }
    }}
function music_melody() { //Built in music.
    music.setBuiltInSpeakerEnabled(true)
    basic.clearScreen()
    basic.pause(300)
    num = 1
    unid_type = 1
    while (true) {
        if (input.logoIsPressed()) {
            break;
        }
        unid_if_1_23()
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        while(true){
            if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                scroll_interval = 1
                if (num == 1) {
                    num = 20
                } else {
                    num += -1
                }
                break;
            }
            if (input.buttonIsPressed(Button.B)) {
                scroll_interval = 45
                if (num == 20) {
                    num = 1
                } else {
                    num += 1
                }
                break;
            }
            if (input.logoIsPressed()) {
                scroll_interval = 1
                basic.showIcon(IconNames.Yes)
                basic.clearScreen()
                music_playing = true
                if (num == 1) {
                    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
                } else if (num == 2) {
                    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.UntilDone)
                } else if (num == 3) {
                    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Prelude), music.PlaybackMode.UntilDone)
                } else if (num == 4) {
                    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ode), music.PlaybackMode.UntilDone)
                } else if (num == 5) {
                    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.UntilDone)
                } else if (num == 6) {
                    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ringtone), music.PlaybackMode.UntilDone)
                } else if (num == 7) {
                    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funk), music.PlaybackMode.UntilDone)
                } else if (num == 8) {
                    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Blues), music.PlaybackMode.UntilDone)
                } else if (num == 9) {
                    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.UntilDone)
                } else if (num == 10) {
                    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wedding), music.PlaybackMode.UntilDone)
                } else if (num == 11) {
                    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funeral), music.PlaybackMode.UntilDone)
                } else if (num == 12) {
                    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Punchline), music.PlaybackMode.UntilDone)
                } else if (num == 13) {
                    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Baddy), music.PlaybackMode.UntilDone)
                } else if (num == 14) {
                    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Chase), music.PlaybackMode.UntilDone)
                } else if (num == 15) {
                    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.UntilDone)
                } else if (num == 16) {
                    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.UntilDone)
                } else if (num == 17) {
                    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.UntilDone)
                } else if (num == 18) {
                    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpDown), music.PlaybackMode.UntilDone)
                } else if (num == 19) {
                    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.UntilDone)
                } else {
                    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpDown), music.PlaybackMode.UntilDone)
                }
                music_playing = false
                break;
            }
        }
    }}
function music_melodyV2() { //Built in music V2.
    music.setBuiltInSpeakerEnabled(true)
    basic.clearScreen()
    basic.pause(300)
    num = 1
    unid_type = 1
    while (true) {
        if (input.logoIsPressed()) {
            break;
        }
        unid_if_1_23()
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        while(true){
            if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                scroll_interval = 1
                if (num == 1) {
                    num = 10
                } else {
                    num += -1
                }
                break;
            }
            if (input.buttonIsPressed(Button.B)) {
                scroll_interval = 45
                if (num == 10) {
                    num = 1
                } else {
                    num += 1
                }
                break;
            }
            if (input.logoIsPressed()) {
                scroll_interval = 1
                basic.showIcon(IconNames.Yes)
                if (num == 1) {
                    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
                } else if (num == 2) {
                    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
                } else if (num == 3) {
                    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
                } else if (num == 4) {
                    music.play(music.builtinPlayableSoundEffect(soundExpression.mysterious), music.PlaybackMode.UntilDone)
                } else if (num == 5) {
                    music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
                } else if (num == 6) {
                    music.play(music.builtinPlayableSoundEffect(soundExpression.slide), music.PlaybackMode.UntilDone)
                } else if (num == 7) {
                    music.play(music.builtinPlayableSoundEffect(soundExpression.soaring), music.PlaybackMode.UntilDone)
                } else if (num == 8) {
                    music.play(music.builtinPlayableSoundEffect(soundExpression.spring), music.PlaybackMode.UntilDone)
                } else if (num == 9) {
                    music.play(music.builtinPlayableSoundEffect(soundExpression.twinkle), music.PlaybackMode.UntilDone)
                } else {
                    music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.UntilDone)
                }
                break;
            }
        }
    }}
function music_sFX() { //Built in sFX.
    music.setBuiltInSpeakerEnabled(true)
    basic.clearScreen()
    basic.pause(300)
    num = 1
    unid_type = 1
    while (true) {
        if (input.logoIsPressed()) {
            break;
        }
        unid_if_1_23()
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        while(true){
            if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                scroll_interval = 1
                if (num == 1) {
                    num = 10
                } else {
                    num += -1
                }
                break;
            }
            if (input.buttonIsPressed(Button.B)) {
                scroll_interval = 45
                if (num == 10) {
                    num = 1
                } else {
                    num += 1
                }
                break;
            }
            if (input.logoIsPressed()) {
                scroll_interval = 1
                basic.showIcon(IconNames.Yes)
                if (num == 1) {
                    music.play(music.createSoundExpression(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                } else if (num == 2) {
                    music.play(music.createSoundExpression(WaveShape.Noise, 500, 499, 255, 0, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                } else if (num == 3) {
                    music.play(music.createSoundExpression(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                } else if (num == 4) {
                    music.play(music.createSoundExpression(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                } else if (num == 5) {
                    music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                } else if (num == 6) {
                    music.play(music.createSoundExpression(WaveShape.Triangle, 300, 200, 255, 0, 75, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                } else if (num == 7) {
                    music.play(music.createSoundExpression(WaveShape.Noise, 523, 1, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
                } else if (num == 8) {
                    music.play(music.createSoundExpression(WaveShape.Noise, 500, 1, 255, 0, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                } else if (num == 9) {
                    music.play(music.createSoundExpression(WaveShape.Sine, 500, 500, 255, 0, 50, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                } else {
                    music.play(music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                }
                break;
            }
        }
    }}

function tune() { //Tune selection.
    music.setBuiltInSpeakerEnabled(true)
    basic.clearScreen()
    basic.pause(300)
    custom_music.push(1)
    num = 1
    unid_type = 1
    while (true) {
        if (input.pinIsPressed(TouchPin.P2)) {
            music.play(music.tonePlayable(tonelist[num], music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
        if (input.buttonIsPressed(Button.A)) {
            led.fadeOut(fade_int)
            led.fadeIn(fade_int)
            if (num == 1) {
                num = 21
            } else {
                num += -1
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            if (num == 21) {
                num = 1
            } else {
                num += 1
            }
        }
        if (input.logoIsPressed()) {
            custom_music_tune.push(num)
            tune_music = tonelist[num]
            break;
        }
        if (num == 1) {
            basic.showLeds(`
            . . # # #
            . . # . .
            . . # . .
            . . # . .
            # . # # #`)
        } else if (num == 2) {
            basic.showLeds(`
            . . # # .
            . . # . #
            . . # . #
            . . # . #
            # . # # .`)
        } else if (num == 3) {
            basic.showLeds(`
            . . # # #
            . . # . .
            . . # # #
            . . # . .
            # . # # #`)
        } else if (num == 4) {
            basic.showLeds(`
            . . # # #
            . . # . .
            . . # # #
            . . # . .
            # . # . .`)
        } else if (num == 5) {
            basic.showLeds(`
            . . # # #
            . . # . .
            . . # # #
            . . # . #
            # . # # #`)
        } else if (num == 6) {
            basic.showLeds(`
            . . # # #
            . . # . #
            . . # # #
            . . # . #
            # . # . #`)
        } else if (num == 7) {
            basic.showLeds(`
            . . # # #
            . . # . #
            . . # # .
            . . # . #
            # . # # #`)
        } else if (num == 8) {
            basic.showLeds(`
            . . # # #
            . . # . .
            . . # . .
            # . # . .
            # . # # #`)
        } else if (num == 9) {
            basic.showLeds(`
            . . # # .
            . . # . #
            . . # . #
            # . # . #
            # . # # .`)
        } else if (num == 10) {
            basic.showLeds(`
            . . # # #
            . . # . .
            . . # # #
            # . # . .
            # . # # #`)
        } else if (num == 11) {
            basic.showLeds(`
            . . # # #
            . . # . .
            . . # # #
            # . # . .
            # . # . .`)
        } else if (num == 12) {
            basic.showLeds(`
            . . # # #
            . . # . .
            . . # # #
            # . # . #
            # . # # #`)
        } else if (num == 13) {
            basic.showLeds(`
            . . # # #
            . . # . #
            . . # # #
            # . # . #
            # . # . #`)
        } else if (num == 14) {
            basic.showLeds(`
            . . # # #
            . . # . #
            . . # # .
            # . # . #
            # . # # #`)
        } else if (num == 15) {
            basic.showLeds(`
            . . # # #
            . . # . .
            # . # . .
            # . # . .
            # . # # #`)
        } else if (num == 16) {
            basic.showLeds(`
            . . # # .
            . . # . #
            # . # . #
            # . # . #
            # . # # .`)
        } else if (num == 17) {
            basic.showLeds(`
            . . # # #
            . . # . .
            # . # # #
            # . # . .
            # . # # #`)
        } else if (num == 18) {
            basic.showLeds(`
            . . # # #
            . . # . .
            # . # # #
            # . # . .
            # . # . .`)
        } else if (num == 19) {
            basic.showLeds(`
            . . # # #
            . . # . .
            # . # # #
            # . # . #
            # . # # #`)
        } else if (num == 20) {
            basic.showLeds(`
            . . # # #
            . . # . #
            # . # # #
            # . # . #
            # . # . #`)
        } else if (num == 21) {
            basic.showLeds(`
            . . # # #
            . . # . #
            # . # # .
            # . # . #
            # . # # #`)
        }
    }
    beat()}
function beat() { //Beat selection.
    music.setBuiltInSpeakerEnabled(true)
    basic.clearScreen()
    basic.pause(300)
    num = 1
    unid_type = 1
    while (true) {
        if (input.logoIsPressed()) {
            break;
        }
        unid_if_1_4()
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        while(true){
            if (input.pinIsPressed(TouchPin.P2)) {
                scroll_interval = 1
                if (num == 1) {
                    music.play(music.tonePlayable(tune_music, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
                } else if (num == 2) {
                    music.play(music.tonePlayable(tune_music, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
                } else if (num == 3) {
                    music.play(music.tonePlayable(tune_music, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
                } else if (num == 4) {
                    music.play(music.tonePlayable(tune_music, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
                } else if (num == 5) {
                    music.play(music.tonePlayable(tune_music, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
                } else if (num == 6) {
                    music.play(music.tonePlayable(tune_music, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
                } else if (num == 7) {
                    music.play(music.tonePlayable(tune_music, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
                }
                break;
            }
            if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                scroll_interval = 1
                if (num == 1) {
                    num = 7
                } else {
                    num += -1
                }
                break;
            }
            if (input.buttonIsPressed(Button.B)) {
                scroll_interval = 45
                if (num == 7) {
                    num = 1
                } else {
                    num += 1
                }
                break;
            }
            if (input.logoIsPressed()) {
                scroll_interval = 1
                custom_music_beat.push(num)
                break;
            }
        }
    }
    basic.pause(200)
    custom_music_selection()}
function rest() { //Rest selection.
    music.setBuiltInSpeakerEnabled(true)
    basic.clearScreen()
    custom_music.push(2)
    basic.pause(300)
    num = 1
    unid_type = 1
    while (true) {
        if (input.logoIsPressed()) {
            break;
        }
        unid_if_1_4()
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        while(true){
            if (input.pinIsPressed(TouchPin.P2)) {
                scroll_interval = 1
                if (num == 1) {
                    music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
                } else if (num == 2) {
                    music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
                } else if (num == 3) {
                    music.play(music.tonePlayable(330, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
                } else if (num == 4) {
                    music.play(music.tonePlayable(330, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
                } else if (num == 5) {
                    music.play(music.tonePlayable(330, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
                } else if (num == 6) {
                    music.play(music.tonePlayable(330, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
                } else if (num == 7) {
                    music.play(music.tonePlayable(330, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
                }
                break;
            }
            if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                scroll_interval = 1
                if (num == 1) {
                    num = 7
                } else {
                    num += -1
                }
                break;
            }
            if (input.buttonIsPressed(Button.B)) {
                scroll_interval = 45
                if (num == 7) {
                    num = 1
                } else {
                    num += 1
                }
                break;
            }
            if (input.logoIsPressed()) {
                scroll_interval = 1
                custom_beat.push(num)
                break;
            }
        }
    }
    basic.pause(200)
    custom_music_selection()}
function melody_play() { //Play the created melody.
    while (true) {
        if (custom_music[0] == 1) {
            if (custom_music_beat[0] == 1) {
                music.play(music.tonePlayable(tonelist[custom_music_tune[0]], music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            } else if (custom_music_beat[0] == 2) {
                music.play(music.tonePlayable(tonelist[custom_music_tune[0]], music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            } else if (custom_music_beat[0] == 3) {
                music.play(music.tonePlayable(tonelist[custom_music_tune[0]], music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            } else if (custom_music_beat[0] == 4) {
                music.play(music.tonePlayable(tonelist[custom_music_tune[0]], music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
            } else if (custom_music_beat[0] == 5) {
                music.play(music.tonePlayable(tonelist[custom_music_tune[0]], music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
            } else if (custom_music_beat[0] == 6) {
                music.play(music.tonePlayable(tonelist[custom_music_tune[0]], music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
            } else if (custom_music_beat[0] == 7) {
                music.play(music.tonePlayable(tonelist[custom_music_tune[0]], music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
            }
            custom_music_tune.removeAt(0)
        }
        if (custom_music[0] == 2) {
            if (custom_beat[0] == 1) {
                music.rest(music.beat(BeatFraction.Whole))
            } else if (custom_beat[0] == 2) {
                music.rest(music.beat(BeatFraction.Half))
            } else if (custom_beat[0] == 3) {
                music.rest(music.beat(BeatFraction.Quarter))
            } else if (custom_beat[0] == 4) {
                music.rest(music.beat(BeatFraction.Eighth))
            } else if (custom_beat[0] == 5) {
                music.rest(music.beat(BeatFraction.Sixteenth))
            } else if (custom_beat[0] == 6) {
                music.rest(music.beat(BeatFraction.Double))
            } else if (custom_beat[0] == 7) {
                music.rest(music.beat(BeatFraction.Breve))
            }
            custom_beat.removeAt(0)
        }
        custom_music.removeAt(0)
    }}

function send_input() { //Send input via serial or bluetooth.
    basic.clearScreen()
    while (true) {
        if (input.buttonIsPressed(Button.A)) {
            if (selected_uart == true) {
                bluetooth.uartWriteLine("a")
            } else {
                serial.writeLine("a")
            }
        }
        if (input.logoIsPressed()) {
            if (selected_uart == true) {
                bluetooth.uartWriteLine("logo")
            } else {
                serial.writeLine("logo")
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            if (selected_uart == true) {
                bluetooth.uartWriteLine("b")
            } else {
                serial.writeLine("b")
            }
        }
        basic.pause(10)
    }}

function send_compass() { //Send compass heading via serial or bluetooth.
    graph_var2 = 360
    while (true) {
        if (tool_type == 1) {
            basic.showNumber(input.compassHeading())
            if (selected_uart == true) {
                uart_send = "" + input.compassHeading()
                bluetooth.uartWriteLine(uart_send)
            } else {
                serial.writeLine("" + (input.compassHeading()))
            }
            if (input.logoIsPressed()) {
                basic.clearScreen()
                tool_type = 2
                game.addScore(1)
                basic.pause(500)
            }
        }
        if (tool_type == 2) {
            graph_var1 = input.compassHeading()
            plot_graph()
            if (custom_graph != 12) {
                basic.pause(50)
            }
            basic.clearScreen()
            if (selected_uart == true) {
                uart_send = "" + input.compassHeading()
                bluetooth.uartWriteLine(uart_send)
            } else {
                serial.writeLine("" + (input.compassHeading()))
            }
            if (input.logoIsPressed()) {
                basic.clearScreen()
                tool_type = 1
                game.addScore(1)
                basic.pause(500)
            }
        }
    }}
function send_string() { //Send string via serial or bluetooth.
    basic.clearScreen()
    basic.pause(200)
    while (true) {
        usid_if()
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        while(true){
            if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                scroll_interval = 1
                if (abc_id == 1) {
                    abc_id = 38
                } else {
                    abc_id += -1
                }
                break;
            }
            if (input.buttonIsPressed(Button.B)) {
                scroll_interval = 45
                if (abc_id == 38) {
                    abc_id = 1
                } else {
                    abc_id += 1
                }
                break;
            }
            if (input.logoIsPressed()) {
                scroll_interval = 1
                basic.showIcon(IconNames.Yes)
                if (selected_uart == true) {
                    uckb_if()
                    bluetooth.uartWriteString(uckb)
                } else {
                    uckb_if()
                    serial.writeString(uckb)
                }
                music.play(music.tonePlayable(523, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                basic.pause(100)
                break;
            }
        }
    }}
function send_number() { //Send number via serial or bluetooth.
    basic.clearScreen()
    basic.pause(500)
    num = 0
    while (true) {
        unid_if_0_9()
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        while(true){
            if (input.buttonIsPressed(Button.A)) {
                led.fadeOut(fade_int)
                led.fadeIn(fade_int)
                scroll_interval = 1
                if (num == 0) {
                    num = 9
                } else {
                    num += -1
                }
                break;
            }
            if (input.buttonIsPressed(Button.B)) {
                scroll_interval = 45
                if (num == 9) {
                    num = 0
                } else {
                    num += 1
                }
                break;
            }
            if (input.logoIsPressed()) {
                scroll_interval = 1
                basic.showIcon(IconNames.Yes)
                if (selected_uart == true) {
                    bluetooth.uartWriteNumber(num)
                } else {
                    serial.writeNumber(num)
                }
                music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                break;
            }
        }
    }}

function settings_test_input() { //Test all inputs.7239
    while (true) {
        if (input.buttonIsPressed(Button.A)) {
            led.plot(0, 2)
        }
        if (input.buttonIsPressed(Button.B)) {
            led.plot(4, 2)
        }
        if (input.logoIsPressed()) {
            led.plot(2, 0)
        }
        if (input.buttonIsPressed(Button.AB)) {
            led.plot(0, 2)
            led.plot(4, 2)
        }
        if (input.pinIsPressed(TouchPin.P0)) {
            led.plot(0, 4)
        }
        if (input.pinIsPressed(TouchPin.P1)) {
            led.plot(2, 4)
        }
        if (input.pinIsPressed(TouchPin.P2)) {
            led.plot(4, 4)
        }
        if (input.lightLevel() <= 50) {
            led.plotBrightness(0, 0, 20)
        } else if (input.lightLevel() <= 100) {
            led.plotBrightness(0, 0, 100)
        } else if (input.lightLevel() <= 150) {
            led.plotBrightness(0, 0, 150)
        } else if (input.lightLevel() <= 200) {
            led.plotBrightness(0, 0, 200)
        } else {
            led.plotBrightness(0, 0, 255)
        }
        if (input.soundLevel() <= 50) {
            led.plotBrightness(4, 0, 20)
        } else if (input.soundLevel() <= 100) {
            led.plotBrightness(4, 0, 100)
        } else if (input.soundLevel() <= 150) {
            led.plotBrightness(4, 0, 150)
        } else if (input.soundLevel() <= 200) {
            led.plotBrightness(4, 0, 200)
        } else {
            led.plotBrightness(4, 0, 255)
        }
        if (input.acceleration(Dimension.X) >= 0) {
            if (input.acceleration(Dimension.X) <= 300) {
                led.plot(1, 3)
                led.unplot(1, 2)
                led.unplot(1, 1)
            } else if (input.acceleration(Dimension.X) <= 600) {
                led.plot(1, 2)
                led.unplot(1, 3)
                led.unplot(1, 1)
            } else {
                led.plot(1, 1)
                led.unplot(1, 3)
                led.unplot(1, 2)
            }
        } else {
            if (input.acceleration(Dimension.X) >= -300) {
                led.plot(1, 3)
                led.unplot(1, 2)
                led.unplot(1, 1)
            } else if (input.acceleration(Dimension.X) >= -600) {
                led.plot(1, 2)
                led.unplot(1, 3)
                led.unplot(1, 1)
            } else {
                led.plot(1, 1)
                led.unplot(1, 3)
                led.unplot(1, 2)
            }
        }
        if (input.acceleration(Dimension.Y) >= 0) {
            if (input.acceleration(Dimension.Y) <= 300) {
                led.plot(2, 3)
                led.unplot(2, 2)
                led.unplot(2, 1)
            } else if (input.acceleration(Dimension.Y) <= 600) {
                led.plot(2, 2)
                led.unplot(2, 3)
                led.unplot(2, 1)
            } else {
                led.plot(2, 1)
                led.unplot(2, 3)
                led.unplot(2, 2)
            }
        } else {
            if (input.acceleration(Dimension.Y) >= -300) {
                led.plot(2, 3)
                led.unplot(2, 2)
                led.unplot(2, 1)
            } else if (input.acceleration(Dimension.Y) >= -600) {
                led.plot(2, 2)
                led.unplot(2, 3)
                led.unplot(2, 1)
            } else {
                led.plot(2, 1)
                led.unplot(2, 3)
                led.unplot(2, 2)
            }
        }
        if (input.acceleration(Dimension.Z) >= 0) {
            if (input.acceleration(Dimension.Z) <= 300) {
                led.plot(3, 3)
                led.unplot(3, 2)
                led.unplot(3, 1)
            } else if (input.acceleration(Dimension.Z) <= 600) {
                led.plot(3, 2)
                led.unplot(3, 3)
                led.unplot(3, 1)
            } else {
                led.plot(3, 1)
                led.unplot(3, 3)
                led.unplot(3, 2)
            }
        } else {
            if (input.acceleration(Dimension.Z) >= -300) {
                led.plot(3, 3)
                led.unplot(3, 2)
                led.unplot(3, 1)
            } else if (input.acceleration(Dimension.Z) >= -600) {
                led.plot(3, 2)
                led.unplot(3, 3)
                led.unplot(3, 1)
            } else {
                led.plot(3, 1)
                led.unplot(3, 3)
                led.unplot(3, 2)
            }
        }
        basic.pause(100)
        led.unplot(2, 0)
        led.unplot(0, 2)
        led.unplot(4, 2)
        led.unplot(0, 4)
        led.unplot(2, 4)
        led.unplot(4, 4)
    }}
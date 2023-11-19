function loading_animation() {
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
    led.unplot(1, 0)
} //Draw loading animation.
function loading_animation_rev() {
    led.plot(2, 0)
    basic.pause(30)
    led.unplot(2, 0)
    led.plot(1, 0)
    basic.pause(30)
    led.unplot(1, 0)
    led.plot(0, 1)
    basic.pause(30)
    led.unplot(0, 1)
    led.plot(0, 2)
    basic.pause(30)
    led.unplot(0, 2)
    led.plot(0, 3)
    basic.pause(30)
    led.unplot(0, 3)
    led.plot(1, 4)
    basic.pause(30)
    led.unplot(1, 4)
    led.plot(2, 4)
    basic.pause(30)
    led.unplot(2, 4)
    led.plot(3, 4)
    basic.pause(30)
    led.unplot(3, 4)
    led.plot(4, 3)
    basic.pause(30)
    led.unplot(4, 3)
    led.plot(4, 2)
    basic.pause(30)
    led.unplot(4, 2)
    led.plot(4, 1)
    basic.pause(30)
    led.unplot(4, 1)
    led.plot(3, 0)
    basic.pause(30)
    led.unplot(3, 0)

} //Draw loading animation reversed.

function draw_menu() {
    led.plotBrightness(0, 0, 20)
    led.plotBrightness(1, 0, 20)
    led.plotBrightness(2, 0, 20)
    led.plotBrightness(3, 0, 20)
    led.plotBrightness(4, 0, 20)
} //Draw navigation bar at the top.
function draw_mini_menu() {
    led.plotBrightness(1, 0, 20)
    led.plotBrightness(2, 0, 20)
    led.plotBrightness(3, 0, 20)
} //Draw mini navigation bar at the top.

function waiting_for_connection() {
    waiting_for_input = true
    if (bluetooth_type == 1) {
        media.startMediaService()
    } else if (bluetooth_type == 2) {
        mouse.startMouseService()
    } else if (bluetooth_type == 3) {
        gamepad.startGamepadService()
    }
    if (bluetooth_keyboard_type == 1) {
        keyboard.startKeyboardService()
    } else if (bluetooth_keyboard_type == 2) {
        keyboard.startKeyboardService()
    } else if (bluetooth_keyboard_type == 3) {
        keyboard.startKeyboardService()
    } else if (bluetooth_keyboard_type == 4) {
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
    }
} //Waiting for the bluetooth connection.

function unid_if_0_9() {
    unid = num
    if (unid == 0) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
    } else if (unid == 1) {
        basic.showLeds(`
            . . . # .
            . . # # .
            . . . # .
            . . . # .
            . . . # .
            `)
    } else if (unid == 2) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
    } else if (unid == 3) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (unid == 4) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    } else if (unid == 5) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (unid == 6) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
    } else if (unid == 7) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            `)
    } else if (unid == 8) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            `)
    } else if (unid == 9) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
} //Function to draw numbers from 0 to 9
function unid_if_1_23() {
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
        basic.showLeds(`
            . . . # .
            . . # # .
            . . . # .
            . . . # .
            . . . # .
            `)
    } else if (unid == 2) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
    } else if (unid == 3) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (unid == 4) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    } else if (unid == 5) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (unid == 6) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
    } else if (unid == 7) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            `)
    } else if (unid == 8) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            `)
    } else if (unid == 9) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (unid == 10) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # . #
            # . # . #
            # . # # #
            `)
    } else if (unid == 11) {
        basic.showLeds(`
            # . . . #
            # . . # #
            # . . . #
            # . . . #
            # . . . #
            `)
    } else if (unid == 12) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . # # #
            # . # . .
            # . # # #
            `)
    } else if (unid == 13) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . # # #
            # . . . #
            # . # # #
            `)
    } else if (unid == 14) {
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # # #
            # . . . #
            # . . . #
            `)
    } else if (unid == 15) {
        basic.showLeds(`
            # . # # #
            # . # . .
            # . # # #
            # . . . #
            # . # # #
            `)
    } else if (unid == 16) {
        basic.showLeds(`
            # . # # #
            # . # . .
            # . # # #
            # . # . #
            # . # # #
            `)
    } else if (unid == 17) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            `)
    } else if (unid == 18) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # # #
            # . # . #
            # . # # #
            `)
    } else if (unid == 19) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # # #
            # . . . #
            # . # # #
            `)
    } else if (unid == 20) {
        basic.showLeds(`
            # # # # #
            . # # . #
            # # # . #
            # . # . #
            # # # # #
            `)
    } else if (unid == 0) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
    } else if (unid == 5) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (unid == 10) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # . #
            # . # . #
            # . # # #
            `)
    } else if (unid == 15) {
        basic.showLeds(`
            # . . # #
            # . . # .
            # . . # #
            # . . . #
            # . . # #
            `)
    } else if (unid == 20) {
        basic.showLeds(`
            # # # # #
            . # # . #
            # # # . #
            # . # . #
            # # # # #
            `)
    } else if (unid == 25) {
        basic.showLeds(`
            # # . # #
            . # . # .
            # # . # #
            # . . . #
            # # . # #
            `)
    } else if (unid == 30) {
        basic.showLeds(`
            # # # # #
            . # # . #
            # # # . #
            . # # . #
            # # # # #
            `)
    } else if (unid == 35) {
        basic.showLeds(`
            # # . # #
            . # . # .
            # # . # #
            . # . . #
            # # . # #
            `)
    } else if (unid == 40) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # # # . #
            . # # . #
            . # # # #
            `)
    } else if (unid == 45) {
        basic.showLeds(`
            # . . # #
            # . . # .
            # # . # #
            . # . . #
            . # . # #
            `)
    } else if (unid == 50) {
        basic.showLeds(`
            # # # # #
            # . # . #
            # # # . #
            . # # . #
            # # # # #
            `)
    } else if (unid == 55) {
        basic.showLeds(`
            # # . # #
            # . . # .
            # # . # #
            . # . . #
            # # . # #
            `)
    } else if (unid == 21) {
        basic.showLeds(`
            # # . . #
            . # . # #
            # # . . #
            # . . . #
            # # . . #
            `)
    } else if (unid == 22) {
        basic.showLeds(`
            # # . # #
            . # . . #
            # # . # #
            # . . # .
            # # . # #
            `)
    } else if (unid == 23) {
        basic.showLeds(`
            # # . # #
            . # . . #
            # # . # #
            # . . . #
            # # . # #
            `)
    }
} //Function to draw numbers from 0 to 55
function usid_if() {
    usid = abc_id
    if (usid == 1) {
        basic.showLeds(`
                . . . . .
                . # # # .
                # . . # .
                # . . # .
                . # # # #
                `)
    } else if (usid == 2) {
        basic.showLeds(`
                . # # # .
                . . . . .
                . # # # .
                # . . # .
                . # # # #
                `)
    } else if (usid == 3) {
        basic.showLeds(`
                # . . . .
                # . . . .
                # # # . .
                # . . # .
                # # # . .
                `)
    } else if (usid == 4) {
        basic.showLeds(`
                . . . . .
                . # # . .
                # . . . .
                # . . . .
                . # # . .
                `)
    } else if (usid == 5) {
        basic.showLeds(`
                . # . . .
                . . . . .
                . # # . .
                # . . . .
                . # # . .
                `)
    } else if (usid == 6) {
        basic.showLeds(`
                . . . # .
                . . . # .
                . # # # .
                # . . # .
                . # # # .
                `)
    } else if (usid == 7) {
        basic.showLeds(`
                . # # . .
                # . . # .
                # # # . .
                # . . . .
                . # # # .
                `)
    } else if (usid == 8) {
        basic.showLeds(`
                # # # . #
                # . . . #
                # # # . #
                # . . . .
                # # # . .
                `)
    } else if (usid == 9) {
        basic.showLeds(`
                . . # # .
                . # . . .
                # # # . .
                . # . . .
                . # . . .
                `)
    } else if (usid == 10) {
        basic.showLeds(`
                . # # # .
                # . . # .
                . # # # .
                . . . # .
                . # # . .
                `)
    } else if (usid == 11) {
        basic.showLeds(`
                # # # . #
                # . . . .
                # . # # .
                # . . # .
                # # # # .
                `)
    } else if (usid == 12) {
        basic.showLeds(`
                # . . . .
                # . . . .
                # # # . .
                # . . # .
                # . . # .
                `)
    } else if (usid == 13) {
        basic.showLeds(`
                . . # . .
                . . . . .
                . . # . .
                . . # . .
                . . # . .
                `)
    } else if (usid == 14) {
        basic.showLeds(`
                . # # # .
                . . . . .
                . . # . .
                . . # . .
                . . # . .
                `)
    } else if (usid == 15) {
        basic.showLeds(`
                . . # . .
                . . . . .
                . . # . .
                . . # . .
                # # . . .
                `)
    } else if (usid == 16) {
        basic.showLeds(`
                # . . . .
                # . # . .
                # # . . .
                # . # . .
                # . . # .
                `)
    } else if (usid == 17) {
        basic.showLeds(`
                # . . . .
                # . # . .
                # # . . #
                # . # . .
                # . . # .
                `)
    } else if (usid == 18) {
        basic.showLeds(`
                . # . . .
                . # . . .
                . # . . .
                . # . . .
                . # # # .
                `)
    } else if (usid == 19) {
        basic.showLeds(`
                . # . . #
                . # . . .
                . # . . .
                . # . . .
                . # # # .
                `)
    } else if (usid == 20) {
        basic.showLeds(`
                . . . . .
                # # . # #
                # . # . #
                # . . . #
                # . . . #
                `)
    } else if (usid == 21) {
        basic.showLeds(`
                . . . . .
                # # # . .
                # . . # .
                # . . # .
                # . . # .
                `)
    } else if (usid == 22) {
        basic.showLeds(`
                . . . . #
                # # # . .
                # . . # .
                # . . # .
                # . . # .
                `)
    } else if (usid == 23) {
        basic.showLeds(`
                . . . . .
                . # # . .
                # . . # .
                # . . # .
                . # # . .
                `)
    } else if (usid == 24) {
        basic.showLeds(`
                . . . . .
                # # # . .
                # . . # .
                # # # . .
                # . . . .
                `)
    } else if (usid == 25) {
        basic.showLeds(`
                . . . . .
                # . # # .
                # # . . .
                # . . . .
                # . . . .
                `)
    } else if (usid == 26) {
        basic.showLeds(`
                . . . . .
                . . # # .
                . # . . .
                . . # . .
                # # . . .
                `)
    } else if (usid == 27) {
        basic.showLeds(`
                # . . . .
                . . # # .
                . # . . .
                . . # . .
                # # . . .
                `)
    } else if (usid == 28) {
        basic.showLeds(`
                . # . . .
                . # . . .
                . # # # .
                . # . . .
                . . # # .
                `)
    } else if (usid == 29) {
        basic.showLeds(`
                . . . . .
                # . . # .
                # . . # .
                # . . # .
                . # # # #
                `)
    } else if (usid == 30) {
        basic.showLeds(`
                . # # . .
                . . . . .
                # . . # .
                # . . # .
                . # # # #
                `)
    } else if (usid == 31) {
        basic.showLeds(`
                . . . . .
                # . . . #
                # . . . #
                . # . # .
                . . # . .
                `)
    } else if (usid == 32) {
        basic.showLeds(`
                . . . . .
                # # # # .
                . . # . .
                . # . . .
                # # # # .
                `)
    } else if (usid == 33) {
        basic.showLeds(`
                . . . . #
                # # # # .
                . . # . .
                . # . . .
                # # # # .
                `)
    } else if (usid == 34) {
        basic.showLeds(`
                . . . . .
                . . . . .
                # . . . #
                # # # # #
                . . . . .
                `)
    } else if (usid == 35) {
        basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                `)
    } else if (usid == 36) {
        basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . # . .
                . # . . .
                `)
    } else if (usid == 37) {
        basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . # . .
                `)
    } else {
        basic.showLeds(`
                . # # # .
                # . . . #
                . . # # .
                . . . . .
                . . # . .
                `)
    }
} //Function to draw letters from a to "?"

function settings_music_draw() {
    led.plotBrightness(0, 3, 20)
    led.plotBrightness(0, 4, 20)
    led.plotBrightness(1, 3, 20)
    led.plotBrightness(1, 4, 20)
    led.plotBrightness(2, 1, 20)
    led.plotBrightness(2, 2, 20)
    led.plotBrightness(2, 3, 20)
    led.plotBrightness(2, 4, 20)
    led.plotBrightness(3, 1, 20)
    led.plotBrightness(4, 2, 20)
} //Draw the music logo.
function settings_pinlock_draw() {
    led.plotBrightness(0, 4, 20)
    led.plotBrightness(0, 3, 20)
    led.plotBrightness(1, 3, 20)
    led.plotBrightness(2, 3, 20)
    led.plotBrightness(2, 4, 20)
    led.plotBrightness(3, 3, 20)
    led.plotBrightness(4, 3, 20)
    led.plotBrightness(4, 4, 20)
} //Draw the pin-lock.

function menu_select_menu() {
    while (menu_select == true) {
        if (selected_menu == 1) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(4, 0)
                    images.createImage(`
                    . . . . .
                    . . # . .
                    . # # # .
                    # # # # #
                    # . . . #
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(4, 0)
                    images.createImage(`
                    . . . . .
                    . . # . .
                    . # # # .
                    # # # # #
                    # . . . #
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        # # # # #
        # . . . #
        `)
                draw_menu()
            }
            led.plot(0, 0)
        } else if (selected_menu == 2) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(0, 0)
                    images.createImage(`
                    . . . . .
                    . # . . .
                    # . . . .
                    . # . # .
                    # . # . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(0, 0)
                    images.createImage(`
                    . . . . .
                    . # . . .
                    # . . . .
                    . # . # .
                    # . # . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
        . . . . .
        . # . . .
        # . . . .
        . # . # .
        # . # . .
        `)
                draw_menu()
            }
            led.plot(1, 0)
        } else if (selected_menu == 3) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(1, 0)
                    images.createImage(`
                    . . . . .
                    . . # . .
                    # # # # #
                    . # # # .
                    # . # . #
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(1, 0)
                    images.createImage(`
                    . . . . .
                    . . # . .
                    # # # # #
                    . # # # .
                    # . # . #
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
        . . . . .
        . . # . .
        # # # # #
        . # # # .
        # . # . #
        `)
                draw_menu()
            }
            led.plot(2, 0)
        } else if (selected_menu == 4) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . . . #
                    . . . . #
                    . . # . #
                    # . # . #
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . . . #
                    . . . . #
                    . . # . #
                    # . # . #
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
        . . . . .
        . . . . #
        . . . . #
        . . # . #
        # . # . #
        `)
                draw_menu()
            }
            led.plot(2, 0)
        } else if (selected_menu == 5) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . # . .
                    . # # # .
                    . . # . .
                    . . . . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . # . .
                    . # # # .
                    . . # . .
                    . . . . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
        `)
                draw_menu()
            }
            led.plot(2, 0)
        } else if (selected_menu == 6) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    . . . . .
                    # # # # #
                    # . # . #
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    . . . . .
                    # # # # #
                    # . # . #
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    # # # # #
                    # . # . #
        `)
                draw_menu()
            }
            led.plot(2, 0)
        } else if (selected_menu == 7) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . # . .
                    # . # . #
                    . # # # .
                    . . # . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . # . .
                    # . # . #
                    . # # # .
                    . . # . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                    . . . . .
                    . . # . .
                    # . # . #
                    . # # # .
                    . . # . .
        `)
                draw_menu()
            }
            led.plot(3, 0)
        } else {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(3, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    # # . # #
                    . # # # .
                    # # . # #
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(3, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    # # . # #
                    . # # # .
                    # # . # #
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
            . . . . .
            . . . . .
            # # . # #
            . # # # .
            # # . # #
        `)
                draw_menu()
            }
            led.plot(4, 0)
        }

        waiting_for_input = true
        while (waiting_for_input == true) {
            if (input.buttonIsPressed(Button.A)) {
                abuttonpressed = true
                if (selected_menu == 1) {
                    selected_menu = 1
                    waiting_for_input = false
                } else {
                    selected_menu += -1
                    waiting_for_input = false
                }
            } else if (input.buttonIsPressed(Button.B)) {
                if (selected_menu == 8) {
                    selected_menu = 8
                    abuttonpressed = true
                    waiting_for_input = false
                } else {
                    selected_menu += 1
                    waiting_for_input = false
                }
            } else if (input.logoIsPressed()) {
                waiting_for_input = false
                menu_select = false
            }
        }
    }
    if (selected_menu == 1) {
        abuttonpressed = true
        menu_select = true
        game_select_menu()
    } else if (selected_menu == 2) {
        abuttonpressed = true
        menu_select = true
        tool_select_menu()
    } else if (selected_menu == 3) {
        turtle_main()
    } else if (selected_menu == 4) {
        abuttonpressed = true
        menu_select = true
        bluetooth_select_menu()
    } else if (selected_menu == 5) {
        abuttonpressed = true
        menu_select = true
        create_select_menu()
    } else if (selected_menu == 6) {
        abuttonpressed = true
        menu_select = true
        pins_select_menu()
    } else if (selected_menu == 7) {
        abuttonpressed = true
        menu_select = true
        serial_select_menu()
    } else if (selected_menu == 8) {
        abuttonpressed = true
        menu_select = true
        settings_select_menu()
    }
} //Menu selection at the start.
function game_select_menu() {
    while (menu_select == true) {
        if (game_mode == 0) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(4, 0)
                    images.createImage(`
                    . . . . .
                    . # . . .
                    # # # # #
                    . # . . #
                    . . . # #
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(4, 0)
                    images.createImage(`
                    . . . . .
                    . # . . .
                    # # # # #
                    . # . . #
                    . . . # #
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . # . . .
                # # # # #
                . # . . #
                . . . # #
                `)
                draw_menu()
            }
            led.plot(0, 0)
        } else if (game_mode == 1) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(0, 0)
                    images.createImage(`
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . .
                    . . # . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(0, 0)
                    images.createImage(`
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . .
                    . . # . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                . . # . .
                `)
                draw_menu()
            }
            led.plot(1, 0)
            led.plotBrightness(2, 3, 20)
        } else if (game_mode == 2) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(1, 0)
                    images.createImage(`
                    . . . . .
                    . . . # .
                    . . . # .
                    . . . . .
                    . . . # .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(1, 0)
                    images.createImage(`
                    . . . . .
                    . . . # .
                    . . . # .
                    . . . . .
                    . . . # .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . . . # .
                . . . # .
                . . . . .
                . . . # .
                `)
                draw_menu()
            }
            led.plot(2, 0)
            led.plotBrightness(1, 3, 20)
        } else if (game_mode == 3) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . # # . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . # # . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . # # . .
                `)
                draw_menu()
            }
            led.plot(2, 0)
            led.plotBrightness(3, 3, 20)
        } else if (game_mode == 4) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . # . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . # . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . # . .
                `)
                draw_menu()
            }
            led.plot(2, 0)
        } else if (game_mode == 5) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    . . . # .
                    # . . . .
                    # . . . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    . . . # .
                    # . . . .
                    # . . . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . . . . .
                . . . # .
                # . . . .
                # . . . .
                `)
                draw_menu()
            }
            led.plot(2, 0)
        } else if (game_mode == 6) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    . . . . #
                    . . . . .
                    . . # . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    . . . . #
                    . . . . .
                    . . # . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . . . . .
                . . . . #
                . . . . .
                . . # . .
                `)
                draw_menu()
            }
            led.plot(2, 0)
        } else if (game_mode == 7) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    # . . . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    # . . . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                # . . . .
                `)
                draw_menu()
            }
            led.plot(2, 0)
            led.plotBrightness(4, 4, 20)
        } else if (game_mode == 8) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    # . . . .
                    # # . . #
                    # # . # #
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    # . . . .
                    # # . . #
                    # # . # #
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                # # . . #
                # # . # #
                `)
                draw_menu()
            }
            led.plot(2, 0)
        } else if (game_mode == 9) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    # # # . #
                    . # . . #
                    . # . . #
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    # # # . #
                    . # . . #
                    . # . . #
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . . . . .
                # # # . #
                . # . . #
                . # . . #
                `)
                draw_menu()
            }
            led.plot(3, 0)
        } else {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(3, 0)
                    images.createImage(`
                    . . . . .
                    # # # . .
                    # . # # #
                    # # # . #
                    . . # # #
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(3, 0)
                    images.createImage(`
                    . . . . .
                    # # # . .
                    # . # # #
                    # # # . #
                    . . # # #
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                    # # # . .
                    # . # # #
                    # # # . #
                    . . # # #
                `)
                draw_menu()
            }
            led.plot(4, 0)
        }
        waiting_for_input = true
        while (waiting_for_input == true) {
            if (input.buttonIsPressed(Button.A)) {
                abuttonpressed = true
                if (game_mode == 0) {
                    game_mode = 0
                    waiting_for_input = false
                } else {
                    game_mode += -1
                    waiting_for_input = false
                }
            } else if (input.buttonIsPressed(Button.B)) {
                if (game_mode == 10) {
                    game_mode = 10
                    abuttonpressed = true
                    waiting_for_input = false
                } else {
                    game_mode += 1
                    waiting_for_input = false
                }
            } else if (input.logoIsPressed()) {
                waiting_for_input = false
                menu_select = false
            }
        }
    }
    if (game_mode == 0) {
        menu_select = true
        abuttonpressed = true
        menu_select_menu()
    } else if (game_mode == 1) {
        px_1 = 2
        py_1 = 4
        my_1 = 3
        shoot_1 = 0
        speed_1 = 50
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
        interval_2 = 1200
        game_mode_2()
    } else if (game_mode == 3) {
        game_mode_3()
    } else if (game_mode == 5) {
        player_5 = [game.createSprite(0, 3), game.createSprite(0, 4)]
        score_5 = 0
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
    } else if (game_mode == 10) {
        menu_select = true
        abuttonpressed = true
        game_card_select_menu()
    }
} //Game selection.
function game_card_select_menu() {
    while (menu_select == true) {
        if (selected_card_game == 0) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(4, 0)
                    images.createImage(`
                    . . . . .
                    . # . . .
                    # # # # #
                    . # . . #
                    . . . # #
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(4, 0)
                    images.createImage(`
                    . . . . .
                    . # . . .
                    # # # # #
                    . # . . #
                    . . . # #
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . # . . .
                # # # # #
                . # . . #
                . . . # #
                `)
                draw_menu()
            }
            led.plot(0, 0)
        } else if (selected_card_game == 1) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(0, 0)
                    images.createImage(`
                    . . . . .
                    # . . . #
                    # # . . .
                    # . # . #
                    # # . # #
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(0, 0)
                    images.createImage(`
                    . . . . .
                    # . . . #
                    # # . . .
                    # . # . #
                    # # . # #
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                    # . . . #
                    # # . . .
                    # . # . #
                    # # . # #
                `)
                draw_menu()
            }
            led.plot(1, 0)
        } else if (selected_card_game == 2) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(1, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(1, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
                draw_menu()
            }
            led.plot(2, 0)
        } else if (selected_card_game == 3) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
                draw_menu()
            }
            led.plot(3, 0)
        } else {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(3, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(3, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
                draw_menu()
            }
            led.plot(4, 0)
        }
        waiting_for_input = true
        while (waiting_for_input == true) {
            if (input.buttonIsPressed(Button.A)) {
                abuttonpressed = true
                if (selected_card_game == 0) {
                    selected_card_game = 0
                    waiting_for_input = false
                } else {
                    selected_card_game += -1
                    waiting_for_input = false
                }
            }
            if (input.buttonIsPressed(Button.B)) {
                if (selected_card_game == 4) {
                    selected_card_game = 4
                    abuttonpressed = true
                    waiting_for_input = false
                } else {
                    selected_card_game += 1
                    waiting_for_input = false
                }
            }
            if (input.logoIsPressed()) {
                menu_select = false
                waiting_for_input = false
            }
        }
    }
    basic.clearScreen()
    if (selected_card_game == 1) {
        blackjack()
    }
    if (selected_card_game == 2) {
        
    }
    if (selected_card_game == 3) {
        
    }
    if (selected_card_game == 4) {

    }
    if (selected_card_game == 0) {
        menu_select = true
        abuttonpressed = true
        game_select_menu()
    }
} //Bluetooth send type selection.
function tool_select_menu() {
    while (menu_select == true) {
        if (selected_tool == 0) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(4, 0)
                    images.createImage(`
                    . . . . .
                    . # . . .
                    # # # # #
                    . # . . #
                    . . . # #
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(4, 0)
                    images.createImage(`
                    . . . . .
                    . # . . .
                    # # # # #
                    . # . . #
                    . . . # #
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . # . . .
                # # # # #
                . # . . #
                . . . # #
                `)
                draw_menu()
            }
            led.plot(0, 0)
        } else if (selected_tool == 1) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(0, 0)
                    images.createImage(`
                    . . . . .
                    . # # . #
                    # . . . .
                    # . . . .
                    . # # . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(0, 0)
                    images.createImage(`
                    . . . . .
                    . # # . #
                    # . . . .
                    # . . . .
                    . # # . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . # # . .
                # . . . .
                # . . . .
                . # # . .
                `)
                draw_menu()
            }
            led.plot(1, 0)
        } else if (selected_tool == 2) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(1, 0)
                    images.createImage(`
                    . . . . .
                    . # # # .
                    # . . . #
                    . # . # .
                    . # # # .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(1, 0)
                    images.createImage(`
                    . . . . .
                    . # # # .
                    # . . . #
                    . # . # .
                    . # # # .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . # # # .
                # . . . #
                . # . # .
                . # # # .
                `)
                draw_menu()
            }
            led.plot(2, 0)
        } else if (selected_tool == 3) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . # . # .
                    . # . . .
                    # # # . .
                    . # . . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . # . # .
                    . # . . .
                    # # # . .
                    . # . . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . # . # .
                . # . . .
                # # # . .
                . # . . .
                `)
                draw_menu()
            }
            led.plot(2, 0)
        } else if (selected_tool == 4) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . # . .
                    . # # # .
                    # . # . #
                    . . # . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . # . .
                    . # # # .
                    # . # . #
                    . . # . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                `)
                draw_menu()
            }
            led.plot(2, 0)
        } else if (selected_tool == 5) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    # . # . .
                    . # . . .
                    # . # . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    # . # . .
                    . # . . .
                    # . # . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . . . . .
                # . # . .
                . # . . .
                # . # . .
                `)
                draw_menu()
            }
            led.plot(2, 0)
        } else if (selected_tool == 6) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    # . # . .
                    # . # . .
                    . # . . .
                    # # . . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    # . # . .
                    # . # . .
                    . # . . .
                    # # . . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                # . # . .
                # . # . .
                . # . . .
                # # . . .
                `)
                draw_menu()
            }
            led.plot(2, 0)
        } else if (selected_tool == 7) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    # # # . .
                    . # . . .
                    # . . . .
                    # # # . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    # # # . .
                    . # . . .
                    # . . . .
                    # # # . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                # # # . .
                . # . . .
                # . . . .
                # # # . .
                `)
                draw_menu()
            }
            led.plot(2, 0)
        } else if (selected_tool == 8) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . # # .
                    . . # . #
                    # # # . .
                    # # # . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . # # .
                    . . # . #
                    # # # . .
                    # # # . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . . # # .
                . . # . #
                # # # . .
                # # # . .
                `)
                draw_menu()
            }
            led.plot(2, 0)
        } else if (selected_tool == 9) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . # . . .
                    # # # . .
                    . # . . .
                    . . . # #
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . # . . .
                    # # # . .
                    . # . . .
                    . . . # #
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . # . . .
                # # # . .
                . # . . .
                . . . # #
                `)
                draw_menu()
            }
            led.plot(3, 0)
        } else {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(3, 0)
                    images.createImage(`
                    . . . . .
                    # . # . #
                    # . # # #
                    # . . . #
                    . # # # .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(3, 0)
                    images.createImage(`
                    . . . . .
                    # . # . #
                    # . # # #
                    # . . . #
                    . # # # .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                # . # . #
                # . # # #
                # . . . #
                . # # # .
                `)
                draw_menu()
            }
            led.plot(4, 0)
        }
        waiting_for_input = true
        while (waiting_for_input == true) {
            if (input.buttonIsPressed(Button.A)) {
                abuttonpressed = true
                if (selected_tool == 0) {
                    selected_tool = 0
                    waiting_for_input = false
                } else {
                    selected_tool += -1
                    waiting_for_input = false
                }
            } else if (input.buttonIsPressed(Button.B)) {
                if (selected_tool == 10) {
                    selected_tool = 10
                    abuttonpressed = true
                    waiting_for_input = false
                } else {
                    selected_tool += 1
                    waiting_for_input = false
                }
            } else if (input.logoIsPressed()) {
                waiting_for_input = false
                menu_select = false
            }
        }
    }
    basic.clearScreen()
    let tool_type = 1
    if (selected_tool == 0) {
        abuttonpressed = true
        menu_select = true
        menu_select_menu()
    } else if (selected_tool == 1) {
        tool_temparature()
    } else if (selected_tool == 2) {
        tool_light_level()
    } else if (selected_tool == 3) {
        tool_sound_level()
    } else if (selected_tool == 4) {
        tool_compass()
    } else if (selected_tool == 5) {
        tool_accX()
    } else if (selected_tool == 6) {
        tool_accY()
    } else if (selected_tool == 7) {
        tool_accZ()
    } else if (selected_tool == 8) {
        abuttonpressed = true
        tool_record()
    } else if (selected_tool == 9) {
        abuttonpressed = true
        menu_select = true
        tool_calculator_menu()
    } else {
        abuttonpressed = true
        menu_select = true
        tool_clock_menu()
    }
} //Tool selection.
function tool_calculator_menu() {
    while (menu_select == true) {
        if (selected_math == 1) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(4, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    . # . . .
                    # # # . .
                    . # . . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(4, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    . # . . .
                    # # # . .
                    . # . . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . . . . .
                . # . . .
                # # # . .
                . # . . .
                `)
                draw_menu()
            }
            led.plot(0, 0)
        } else if (selected_math == 2) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(0, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    . . . . .
                    # # # . .
                    . . . . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(0, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    . . . . .
                    # # # . .
                    . . . . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # # # . .
                . . . . .
                `)
                draw_menu()
            }
            led.plot(1, 0)
        } else if (selected_math == 3) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(1, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    # . # . .
                    . # . . .
                    # . # . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(1, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    # . # . .
                    . # . . .
                    # . # . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . . . . .
                # . # . .
                . # . . .
                # . # . .
                `)
                draw_menu()
            }
            led.plot(2, 0)
        } else if (selected_math == 4) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . # . . .
                    # . . . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . # . . .
                    # . . . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . # . . .
                # . . . .
                `)
                draw_menu()
            }
            led.plot(2, 0)
        } else if (selected_math == 5) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . # . . .
                    # . # . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . # . . .
                    # . # . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . # . . .
                # . # . .
                `)
                draw_menu()
            }
            led.plot(2, 0)
        } else if (selected_math == 6) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . # # # .
                    . # . . .
                    # # . . .
                    . # . . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . # # # .
                    . # . . .
                    # # . . .
                    . # . . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . # # # .
                . # . . .
                # # . . .
                . # . . .
                `)
                draw_menu()
            }
            led.plot(2, 0)
        } else if (selected_math == 7) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . # # .
                    . # . . .
                    . . # . .
                    # # . . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . # # .
                    . # . . .
                    . . # . .
                    # # . . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . . # # .
                . # . . .
                . . # . .
                # # . . .
                `)
                draw_menu()
            }
            led.plot(2, 0)
        } else if (selected_math == 8) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . # # . .
                    # . . . .
                    # . . . .
                    . # # . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . # # . .
                    # . . . .
                    # . . . .
                    . # # . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . # # . .
                # . . . .
                # . . . .
                . # # . .
                `)
                draw_menu()
            }
            led.plot(2, 0)
        } else if (selected_math == 9) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . # . . .
                    # # # . .
                    . # . . .
                    . # . . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . # . . .
                    # # # . .
                    . # . . .
                    . # . . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . # . . .
                # # # . .
                . # . . .
                . # . . .
                `)
                draw_menu()
            }
            led.plot(2, 0)
        } else if (selected_math == 10) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    # # # . #
                    # . # . #
                    # # # . #
                    # . . . #
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    # # # . #
                    # . # . #
                    # # # . #
                    # . . . #
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                # # # . #
                # . # . #
                # # # . #
                # . . . #
                `)
                draw_menu()
            }
            led.plot(3, 0)
        } else {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(3, 0)
                    images.createImage(`
                    . . . . .
                    . # # # .
                    # . . . #
                    . . # # .
                    . . # . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(3, 0)
                    images.createImage(`
                    . . . . .
                    . # # # .
                    # . . . #
                    . . # # .
                    . . # . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . # # # .
                # . . . #
                . . # # .
                . . # . .
                `)
                draw_menu()
            }
            led.plot(4, 0)
        }
        waiting_for_input = true
        while (waiting_for_input == true) {
            if (input.buttonIsPressed(Button.A)) {
                abuttonpressed = true
                if (selected_math == 1) {
                    selected_math = 1
                    waiting_for_input = false
                } else {
                    selected_math += -1
                    waiting_for_input = false
                }
            } else if (input.buttonIsPressed(Button.B)) {
                if (selected_math == 11) {
                    selected_math = 11
                    abuttonpressed = true
                    waiting_for_input = false
                } else {
                    selected_math += 1
                    waiting_for_input = false
                }
            } else if (input.logoIsPressed()) {
                waiting_for_input = false
                menu_select = false
            }
        }
    }
    if (selected_math == 1) {
        math_xy()
    } else if (selected_math == 2) {
        math_xy()
    } else if (selected_math == 3) {
        math_xy()
    } else if (selected_math == 4) {
        math_xy()
    } else if (selected_math == 5) {
        math_xy()
    } else if (selected_math == 6) {
        math_x()
    } else if (selected_math == 7) {
        math_x()
    } else if (selected_math == 8) {
        math_x()
    } else if (selected_math == 9) {
        math_x()
    } else if (selected_math == 10) {
        basic.clearScreen()
        basic.showNumber(Math.PI)
        menu_select = true
        tool_calculator_menu()
    } else {
        math_xy()
    }
} //Calculator type selection.
function tool_clock_menu() {
    while (menu_select == true) {
        if (selected_clock == 1) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(3, 0)
                    images.createImage(`
                    . . . . .
                    # # . # #
                    # # # # #
                    . # . # .
                    . # # # .
                    `).showImage(0)
                    draw_mini_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(3, 0)
                    images.createImage(`
                    . . . . .
                    # # . # #
                    # # # # #
                    . # . # .
                    . # # # .
                    `).scrollImage(1, 45)
                    draw_mini_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                # # . # #
                # # # # #
                . # . # .
                . # # # .
                `)
                draw_mini_menu()
            }
            led.plot(1, 0)
        } else if (selected_clock == 2) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(1, 0)
                    images.createImage(`
                    . . . . .
                    . . # . .
                    . . # # #
                    . . . . .
                    . . . . .
                    `).showImage(0)
                    draw_mini_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(1, 0)
                    images.createImage(`
                    . . . . .
                    . . # . .
                    . . # # #
                    . . . . .
                    . . . . .
                    `).scrollImage(1, 45)
                    draw_mini_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . . # . .
                . . # # #
                . . . . .
                . . . . .
                `)
                draw_mini_menu()
            }
            led.plot(2, 0)
        } else {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    # # . # #
                    # . # . #
                    # # . # #
                    . . . . .
                    `).showImage(0)
                    draw_mini_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    # # . # #
                    # . # . #
                    # # . # #
                    . . . . .
                    `).scrollImage(1, 45)
                    draw_mini_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                # # . # #
                # . # . #
                # # . # #
                . . . . .
                `)
                draw_mini_menu()
            }
            led.plot(3, 0)
        }
        waiting_for_input = true
        while (waiting_for_input == true) {
            if (input.buttonIsPressed(Button.A)) {
                abuttonpressed = true
                if (selected_clock == 1) {
                    selected_clock = 1
                    waiting_for_input = false
                } else {
                    selected_clock += -1
                    waiting_for_input = false
                }
            } else if (input.buttonIsPressed(Button.B)) {
                if (selected_clock == 3) {
                    selected_clock = 3
                    abuttonpressed = true
                    waiting_for_input = false
                } else {
                    selected_clock += 1
                    waiting_for_input = false
                }
            } else if (input.logoIsPressed()) {
                waiting_for_input = false
                menu_select = false
            }
        }
    }
    if (selected_clock == 1) {
        signal()
    } else if (selected_clock == 2) {
        chronometer()
    } else {
        timer()
    }
} //Clock type selection.
function turtle_main() {
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
    }
} //Turtle extension.
function bluetooth_select_menu() {
    while (menu_select == true) {
        if (bluetooth_type == 0) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(4, 0)
                    images.createImage(`
                    . . . . .
                    . # . . .
                    # # # # #
                    . # . . #
                    . . . # #
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(4, 0)
                    images.createImage(`
                    . . . . .
                    . # . . .
                    # # # # #
                    . # . . #
                    . . . # #
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . # . . .
                # # # # #
                . # . . #
                . . . # #
                `)
                draw_menu()
            }
            led.plot(0, 0)
        } else if (bluetooth_type == 1) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(0, 0)
                    images.createImage(`
                    . . . . .
                    . . # # .
                    . . # . #
                    # # # . .
                    # # # . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(0, 0)
                    images.createImage(`
                    . . . . .
                    . . # # .
                    . . # . #
                    # # # . .
                    # # # . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . . # # .
                . . # . #
                # # # . .
                # # # . .
                `)
                draw_menu()
            }
            led.plot(1, 0)
        } else if (bluetooth_type == 2) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(1, 0)
                    images.createImage(`
                    . . . . .
                    # # # . .
                    # . . # .
                    # . # . .
                    . # . # .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(1, 0)
                    images.createImage(`
                    . . . . .
                    # # # . .
                    # . . # .
                    # . # . .
                    . # . # .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                # # # . .
                # . . # .
                # . # . .
                . # . # .
                `)
                draw_menu()
            }
            led.plot(2, 0)
        } else if (bluetooth_type == 3) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . . # #
                    . # . . .
                    # # # . .
                    . # . . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . . # #
                    . # . . .
                    # # # . .
                    . # . . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . . . # #
                . # . . .
                # # # . .
                . # . . .
                `)
                draw_menu()
            }
            led.plot(3, 0)
        } else {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(3, 0)
                    images.createImage(`
                    . . . . .
                    . # . # .
                    # . # . #
                    . . . . .
                    . # # # .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(3, 0)
                    images.createImage(`
                    . . . . .
                    . # . # .
                    # . # . #
                    . . . . .
                    . # # # .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . # . # .
                # . # . #
                . . . . .
                . # # # .
                `)
                draw_menu()
            }
            led.plot(4, 0)
        }
        waiting_for_input = true
        while (waiting_for_input == true) {
            if (input.buttonIsPressed(Button.A)) {
                abuttonpressed = true
                if (bluetooth_type == 0) {
                    bluetooth_type = 0
                    waiting_for_input = false
                } else {
                    bluetooth_type += -1
                    waiting_for_input = false
                }
            }
            if (input.buttonIsPressed(Button.B)) {
                if (bluetooth_type == 4) {
                    bluetooth_type = 4
                    abuttonpressed = true
                    waiting_for_input = false
                } else {
                    bluetooth_type += 1
                    waiting_for_input = false
                }
            }
            if (input.logoIsPressed()) {
                menu_select = false
                waiting_for_input = false
            }
        }
    }
    basic.clearScreen()
    if (bluetooth_type == 1) {
        waiting_for_connection()
    }
    if (bluetooth_type == 2) {
        waiting_for_connection()
    }
    if (bluetooth_type == 3) {
        waiting_for_connection()
    }
    if (bluetooth_type == 4) {
        menu_select = true
        abuttonpressed = true
        bluetooth_keyboard_menu()
    }
    if (bluetooth_type == 0) {
        menu_select = true
        abuttonpressed = true
        menu_select_menu()
    }
} //Bluetooth send type selection.
function bluetooth_keyboard_menu() {
    while (menu_select == true) {
        if (bluetooth_keyboard_type == 0) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(4, 0)
                    images.createImage(`
                    . . . . .
                    . # . . .
                    # # # # #
                    . # . . #
                    . . . # #
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(4, 0)
                    images.createImage(`
                    . . . . .
                    . # . . .
                    # # # # #
                    . # . . #
                    . . . # #
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . # . . .
                # # # # #
                . # . . #
                . . . # #
                `)
                draw_menu()
            }
            led.plot(0, 0)
        } else if (bluetooth_keyboard_type == 1) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(0, 0)
                    images.createImage(`
                    . . . . .
                    . # . # .
                    # . # . #
                    . . . . .
                    . # # # .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(0, 0)
                    images.createImage(`
                    . . . . .
                    . # . # .
                    # . # . #
                    . . . . .
                    . # # # .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . # . # .
                # . # . #
                . . . . .
                . # # # .
                `)
                draw_menu()
            }
            led.plot(1, 0)
        } else if (bluetooth_keyboard_type == 2) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(1, 0)
                    images.createImage(`
                    . . . . .
                    # . # # #
                    # . # . #
                    # . # . #
                    # . # # #
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(1, 0)
                    images.createImage(`
                    . . . . .
                    # . # # #
                    # . # . #
                    # . # . #
                    # . # # #
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                # . # # #
                # . # . #
                # . # . #
                # . # # #
                `)
                draw_menu()
            }
            led.plot(2, 0)
        } else if (bluetooth_keyboard_type == 3) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . # . # .
                    # # # # #
                    . # . # .
                    . . . . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . # . # .
                    # # # # #
                    . # . # .
                    . . . . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . # . # .
                # # # # #
                . # . # .
                . . . . .
                `)
                draw_menu()
            }
            led.plot(3, 0)
        } else {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(3, 0)
                    images.createImage(`
                    . . . . .
                    . # # . .
                    # . . . .
                    # . . . .
                    . # # . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(3, 0)
                    images.createImage(`
                    . . . . .
                    . # # . .
                    # . . . .
                    # . . . .
                    . # # . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . # # . .
                # . . . .
                # . . . .
                . # # . .
                `)
                draw_menu()
            }
            led.plot(4, 0)
        }
        waiting_for_input = true
        while (waiting_for_input == true) {
            if (input.buttonIsPressed(Button.A)) {
                abuttonpressed = true
                if (bluetooth_keyboard_type == 0) {
                    bluetooth_keyboard_type = 0
                    waiting_for_input = false
                } else {
                    bluetooth_keyboard_type += -1
                    waiting_for_input = false
                }
            }
            if (input.buttonIsPressed(Button.B)) {
                if (bluetooth_keyboard_type == 4) {
                    bluetooth_keyboard_type = 4
                    abuttonpressed = true
                    waiting_for_input = false
                } else {
                    bluetooth_keyboard_type += 1
                    waiting_for_input = false
                }
            }
            if (input.logoIsPressed()) {
                menu_select = false
                waiting_for_input = false
            }
        }
    }
    basic.clearScreen()
    if (bluetooth_keyboard_type == 1) {
        waiting_for_connection()
    }
    if (bluetooth_keyboard_type == 2) {
        waiting_for_connection()
    }
    if (bluetooth_keyboard_type == 3) {
        waiting_for_connection()
    }
    if (bluetooth_keyboard_type == 4) {
        waiting_for_connection()
    }
    if (bluetooth_keyboard_type == 0) {
        menu_select = true
        abuttonpressed = true
        bluetooth_select_menu()
    }
} //Bluetooth keyboard type selection.
function create_select_menu() {
    while (menu_select == true) {
        if (create_type == 0) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(4, 0)
                    images.createImage(`
                    . . . . .
                    . # . . .
                    # # # # #
                    . # . . #
                    . . . # #
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(4, 0)
                    images.createImage(`
                    . . . . .
                    . # . . .
                    # # # # #
                    . # . . #
                    . . . # #
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . # . . .
                # # # # #
                . # . . #
                . . . # #
                `)
                draw_menu()
            }
            led.plot(0, 0)
        } else if (create_type == 1) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(4, 0)
                    images.createImage(`
                    . . . . .
                    . . # . .
                    . # # . .
                    . . # . .
                    . . # . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(4, 0)
                    images.createImage(`
                    . . . . .
                    . . # . .
                    . # # . .
                    . . # . .
                    . . # . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . . # . .
                . # # . .
                . . # . .
                . . # . .
                `)
                draw_menu()
            }
            led.plot(1, 0)
        } else if (create_type == 2) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(1, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    # . . . #
                    # # # # #
                    . . . . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(1, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    # . . . #
                    # # # # #
                    . . . . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . . . . .
                # . . . #
                # # # # #
                . . . . .
                `)
                draw_menu()
            }
            led.plot(2, 0)
        } else if (create_type == 3) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . # # .
                    . . # . #
                    # # # . .
                    # # # . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . # # .
                    . . # . #
                    # # # . .
                    # # # . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . . # # .
                . . # . #
                # # # . .
                # # # . .
                `)
                draw_menu()
            }
            led.plot(3, 0)
        } else {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(3, 0)
                    images.createImage(`
                    . . . . .
                    # # # # #
                    # # . . #
                    # . . # #
                    # # # # #
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(3, 0)
                    images.createImage(`
                    . . . . .
                    # # # # #
                    # # . . #
                    # . . # #
                    # # # # #
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                # # # # #
                # # . . #
                # . . # #
                # # # # #
                `)
                draw_menu()
            }
            led.plot(4, 0)
        }
        waiting_for_input = true
        while (waiting_for_input == true) {
            if (input.buttonIsPressed(Button.A)) {
                abuttonpressed = true
                if (create_type == 0) {
                    create_type = 0
                    waiting_for_input = false
                } else {
                    create_type += -1
                    waiting_for_input = false
                }
            } else if (input.buttonIsPressed(Button.B)) {
                if (create_type == 4) {
                    create_type = 4
                    abuttonpressed = true
                    waiting_for_input = false
                } else {
                    create_type += 1
                    waiting_for_input = false
                }
            } else if (input.logoIsPressed()) {
                waiting_for_input = false
                menu_select = false
            }
        }
    }
    if (create_type == 1) {
        create_number()
    } else if (create_type == 2) {
        create_strig()
    } else if (create_type == 3) {
        menu_select = true
        abuttonpressed = true
        create_music_menu()
    } else if (create_type == 4) {
        create_image()
    } else {
        menu_select = true
        abuttonpressed = true
        menu_select_menu()
    }
} //Create type selection.
function create_music_menu() {
    while (menu_select == true) {
        if (selected_music == 1) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(4, 0)
                    images.createImage(`
                    . . . . .
                    . # . . .
                    . . # . #
                    # . . . .
                    . . . # .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(4, 0)
                    images.createImage(`
                    . . . . .
                    . # . . .
                    . . # . #
                    # . . . .
                    . . . # .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
        . . . . .
        . # . . .
        . . # . #
        # . . . .
        . . . # .
        `)
                draw_menu()
            }
            led.plot(0, 0)
        } else if (selected_music == 2) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(0, 0)
                    images.createImage(`
                    . . . . .
                    . . # # .
                    . . # . #
                    # # # . .
                    # # # . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(0, 0)
                    images.createImage(`
                    . . . . .
                    . . # # .
                    . . # . #
                    # # # . .
                    # # # . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
        . . . . .
        . . # # .
        . . # . #
        # # # . .
        # # # . .
        `)
                draw_menu()
            }
            led.plot(1, 0)
        } else if (selected_music == 3) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(1, 0)
                    images.createImage(`
                    . . . . .
                    # . # . .
                    # . # . .
                    . # . . #
                    . . . . #
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(1, 0)
                    images.createImage(`
                    . . . . .
                    # . # . .
                    # . # . .
                    . # . . #
                    . . . . #
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
        . . . . .
        # . # . .
        # . # . .
        . # . . #
        . . . . #
        `)
                draw_menu()
            }
            led.plot(2, 0)
        } else if (selected_music == 4) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    # # . . .
                    # . # . #
                    # # . # .
                    # . # . #
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    # # . . .
                    # . # . #
                    # # . # .
                    # . # . #
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
        . . . . .
        # # . . .
        # . # . #
        # # . # .
        # . # . #
        `)
                draw_menu()
            }
            led.plot(3, 0)
        } else if (selected_music == 5) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(3, 0)
                    images.createImage(`
                    . . . . .
                    . . # . .
                    . # # # .
                    . . # . .
                    . . . . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(3, 0)
                    images.createImage(`
                    . . . . .
                    . . # . .
                    . # # # .
                    . . # . .
                    . . . . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
        `)
                draw_menu()
            }
            led.plot(4, 0)
        }
        waiting_for_input = true
        while (waiting_for_input == true) {
            if (input.buttonIsPressed(Button.A)) {
                abuttonpressed = true
                if (selected_music == 1) {
                    selected_music = 1
                    waiting_for_input = false
                } else {
                    selected_music += -1
                    waiting_for_input = false
                }
            } else if (input.buttonIsPressed(Button.B)) {
                if (selected_music == 6) {
                    selected_music = 6
                    abuttonpressed = true
                    waiting_for_input = false
                } else {
                    selected_music += 1
                    waiting_for_input = false
                }
            } else if (input.logoIsPressed()) {
                waiting_for_input = false
                menu_select = false
            }
        }
    }
    if (selected_music == 1) {
        music_melody8()
    } else if (selected_music == 2) {
        music_melody()
    } else if (selected_music == 3) {
        music_melodyV2()
    } else if (selected_music == 4) {
        music_sFX()
    } else {
        menu_select = true
        abuttonpressed = true
        custom_music_selection()
    }
} //Menu selection at the start.
function pins_select_menu() {
    while (menu_select == true) {
        if (selected_pins == 0) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(4, 0)
                    images.createImage(`
                    . . . . .
                    . # . . .
                    # # # # #
                    . # . . #
                    . . . # #
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(4, 0)
                    images.createImage(`
                    . . . . .
                    . # . . .
                    # # # # #
                    . # . . #
                    . . . # #
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . # . . .
                # # # # #
                . # . . #
                . . . # #
        `)
                draw_menu()
            }
            led.plot(0, 0)
        } else if (selected_pins == 1) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(0, 0)
                    images.createImage(`
                    . . . . .
                    . # # # .
                    . # . # .
                    . # . # .
                    . # # # .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(0, 0)
                    images.createImage(`
                    . . . . .
                    . # # # .
                    . # . # .
                    . # . # .
                    . # # # .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                    . . . . .
                    . # # # .
                    . # . # .
                    . # . # .
                    . # # # .
        `)
                draw_menu()
            }
            led.plot(1, 0)
        } else if (selected_pins == 2) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(1, 0)
                    images.createImage(`
                    . . . . .
                    . . . # .
                    . . # # .
                    . . . # .
                    . . . # .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(1, 0)
                    images.createImage(`
                    . . . . .
                    . . . # .
                    . . # # .
                    . . . # .
                    . . . # .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                    . . . . .
                    . . . # .
                    . . # # .
                    . . . # .
                    . . . # .
        `)
                draw_menu()
            }
            led.plot(2, 0)
        } else if (selected_pins == 3) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . # # # .
                    . . . # .
                    . . # . .
                    . # # # .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . # # # .
                    . . . # .
                    . . # . .
                    . # # # .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                    . . . . .
                    . # # # .
                    . . . # .
                    . . # . .
                    . # # # .
                    `)
                draw_menu()
            }
            led.plot(3, 0)
        } else if (selected_pins == 4) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(3, 0)
                    images.createImage(`
                    # # . . .
                    . # . . .
                    # # # . #
                    . # # . #
                    # # . # .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(3, 0)
                    images.createImage(`
                    # # . . .
                    . # . . .
                    # # # . #
                    . # # . #
                    # # . # .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                    # # . . .
                    . # . . .
                    # # # . #
                    . # # . #
                    # # . # .
        `)
                draw_menu()
            }
            led.plot(4, 0)
        }
        waiting_for_input = true
        while (waiting_for_input == true) {
            if (input.buttonIsPressed(Button.A)) {
                abuttonpressed = true
                if (selected_pins == 0) {
                    selected_pins = 0
                    waiting_for_input = false
                } else {
                    selected_pins += -1
                    waiting_for_input = false
                }
            } else if (input.buttonIsPressed(Button.B)) {
                if (selected_pins == 4) {
                    selected_pins = 4
                    abuttonpressed = true
                    waiting_for_input = false
                } else {
                    selected_pins += 1
                    waiting_for_input = false
                }
            } else if (input.logoIsPressed()) {
                waiting_for_input = false
                menu_select = false
            }
        }
    }
    if (selected_pins == 0) {
        menu_select = true
        abuttonpressed = true
        menu_select_menu()
    } else if (selected_pins == 1) {

    } else if (selected_pins == 2) {

    } else if (selected_pins == 3) {

    } else {

    }
} //Pin selection.
function serial_select_menu() {
    while (menu_select == true) {
        if (selected_serial == 0) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(3, 0)
                    images.createImage(`
                    . . . . .
                    . # . . .
                    # # # # #
                    . # . . #
                    . . . # #
                    `).showImage(0)
                    draw_mini_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(3, 0)
                    images.createImage(`
                    . . . . .
                    . # . . .
                    # # # # #
                    . # . . #
                    . . . # #
                    `).scrollImage(1, 45)
                    draw_mini_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . # . . .
                # # # # #
                . # . . #
                . . . # #
                `)
                draw_mini_menu()
            }
            led.plot(1, 0)
        } else if (selected_serial == 1) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(1, 0)
                    images.createImage(`
                    . . . . .
                    . . # . .
                    . # # # .
                    # . # . #
                    . . # . .
                    `).showImage(0)
                    draw_mini_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(1, 0)
                    images.createImage(`
                    . . . . .
                    . . # . .
                    . # # # .
                    # . # . #
                    . . # . .
                    `).scrollImage(1, 45)
                    draw_mini_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                    . . # . .
                    . # # # .
                    # . # . #
                    . . # . .
                `)
                draw_mini_menu()
            }
            led.plot(2, 0)
        } else {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . # . .
                    # . # . #
                    . # # # .
                    . . # . .
                    `).showImage(0)
                    draw_mini_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . # . .
                    # . # . #
                    . # # # .
                    . . # . .
                    `).scrollImage(1, 45)
                    draw_mini_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
                draw_mini_menu()
            }
            led.plot(3, 0)
        }
        waiting_for_input = true
        while (waiting_for_input == true) {
            if (input.buttonIsPressed(Button.A)) {
                abuttonpressed = true
                if (selected_serial == 0) {
                    selected_serial = 0
                    waiting_for_input = false
                } else {
                    selected_serial += -1
                    waiting_for_input = false
                }
            } else if (input.buttonIsPressed(Button.B)) {
                if (selected_serial == 2) {
                    selected_serial = 2
                    abuttonpressed = true
                    waiting_for_input = false
                } else {
                    selected_serial += 1
                    waiting_for_input = false
                }
            } else if (input.logoIsPressed()) {
                waiting_for_input = false
                menu_select = false
            }
        }
    }
    if (selected_serial == 0) {
        menu_select = true
        abuttonpressed = true
        menu_select_menu()
    } else if (selected_serial == 1) {

    } else {

    }
} //Serial selection.
function settings_select_menu() {
    while (menu_select == true) {
        if (selected_setting == 0) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(4, 0)
                    images.createImage(`
                    . . . . .
                    . # . . .
                    # # # # #
                    . # . . #
                    . . . # #
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(4, 0)
                    images.createImage(`
                    . . . . .
                    . # . . .
                    # # # # #
                    . # . . #
                    . . . # #
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . # . . .
                # # # # #
                . # . . #
                . . . # #
                `)
                draw_menu()
            }
            led.plot(0, 0)
        } else if (selected_setting == 1) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(0, 0)
                    if (settings_music == false) {
                        images.createImage(`
                        . . . . .
                        . . # # .
                        . . # . #
                        # # # . .
                        # # # . .
                        `).showImage(0)
                        settings_music_draw()
                    } else {
                        images.createImage(`
                        . . . . .
                        . . # # .
                        . . # . #
                        # # # . .
                        # # # . .
                        `).showImage(0)
                    }
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(0, 0)
                    if (settings_music == false) {
                        images.createImage(`
                        . . . . .
                        . . # # .
                        . . # . #
                        # # # . .
                        # # # . .
                        `).scrollImage(1, 45)
                        settings_music_draw()
                    } else {
                        images.createImage(`
                        . . . . .
                        . . # # .
                        . . # . #
                        # # # . .
                        # # # . .
                        `).scrollImage(1, 45)
                    }
                    draw_menu()
                }
            } else {
                if (settings_music == false) {
                    basic.showLeds(`
                    . . . . .
                    . . # # .
                    . . # . #
                    # # # . .
                    # # # . .
                    `)
                    settings_music_draw()
                } else {
                    basic.showLeds(`
                . . . . .
                . . # # .
                . . # . #
                # # # . .
                # # # . .
                `)
                }
                draw_menu()
            }
            led.plot(1, 0)
        } else if (selected_setting == 2) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(1, 0)
                    if (settings_volume == 1) {
                        images.createImage(`
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                . . . . .
                `).showImage(0)
                        music.setVolume(50)
                        led.plotBrightness(2, 1, 20)
                    } else if (settings_volume == 2) {
                        images.createImage(`
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                . . . . .
                `).showImage(0)
                        music.setVolume(100)
                        led.plotBrightness(2, 1, 20)
                        led.plotBrightness(3, 2, 20)
                    } else if (settings_volume == 3) {
                        images.createImage(`
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                . . . . .
                `).showImage(0)
                        music.setVolume(150)
                        led.plotBrightness(2, 1, 20)
                        led.plotBrightness(3, 2, 20)
                        led.plotBrightness(3, 3, 20)
                    } else if (settings_volume == 4) {
                        images.createImage(`
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                . . . . .
                `).showImage(0)
                        music.setVolume(200)
                        led.plotBrightness(2, 1, 20)
                        led.plotBrightness(3, 2, 20)
                        led.plotBrightness(3, 3, 20)
                        led.plotBrightness(2, 4, 20)
                    } else {
                        images.createImage(`
                . . . . .
                . . # . .
                # . . # .
                # . . # .
                . . # . .
                `).showImage(0)
                        music.setVolume(255)
                    }
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(1, 0)
                    if (settings_volume == 1) {
                        images.createImage(`
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                . . . . .
                `).scrollImage(1, 45)
                        music.setVolume(50)
                        led.plotBrightness(2, 1, 20)
                    } else if (settings_volume == 2) {
                        images.createImage(`
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                . . . . .
                `).scrollImage(1, 45)
                        music.setVolume(100)
                        led.plotBrightness(2, 1, 20)
                        led.plotBrightness(3, 2, 20)
                    } else if (settings_volume == 3) {
                        images.createImage(`
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                . . . . .
                `).scrollImage(1, 45)
                        music.setVolume(150)
                        led.plotBrightness(2, 1, 20)
                        led.plotBrightness(3, 2, 20)
                        led.plotBrightness(3, 3, 20)
                    } else if (settings_volume == 4) {
                        images.createImage(`
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                . . . . .
                `).scrollImage(1, 45)
                        music.setVolume(200)
                        led.plotBrightness(2, 1, 20)
                        led.plotBrightness(3, 2, 20)
                        led.plotBrightness(3, 3, 20)
                        led.plotBrightness(2, 4, 20)
                    } else {
                        images.createImage(`
                . . . . .
                . . # . .
                # . . # .
                # . . # .
                . . # . .
                `).scrollImage(1, 45)
                        music.setVolume(255)
                    }
                    draw_menu()
                }
            } else {
                if (settings_volume == 1) {
                    basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                . . . . .
                `)
                    music.setVolume(50)
                    led.plotBrightness(2, 1, 20)
                } else if (settings_volume == 2) {
                    basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                . . . . .
                `)
                    music.setVolume(100)
                    led.plotBrightness(2, 1, 20)
                    led.plotBrightness(3, 2, 20)
                } else if (settings_volume == 3) {
                    basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                . . . . .
                `)
                    music.setVolume(150)
                    led.plotBrightness(2, 1, 20)
                    led.plotBrightness(3, 2, 20)
                    led.plotBrightness(3, 3, 20)
                } else if (settings_volume == 4) {
                    basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                . . . . .
                `)
                    music.setVolume(200)
                    led.plotBrightness(2, 1, 20)
                    led.plotBrightness(3, 2, 20)
                    led.plotBrightness(3, 3, 20)
                    led.plotBrightness(2, 4, 20)
                } else {
                    basic.showLeds(`
                . . . . .
                . . # . .
                # . . # .
                # . . # .
                . . # . .
                `)
                    music.setVolume(255)
                }
                draw_menu()
            }
            led.plot(2, 0)
        } else if (selected_setting == 3) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    if (settings_brightness == 1) {
                        led.setBrightness(50)
                        images.createImage(`
                . . . . .
                . . . . .
                # . . . .
                . # . # .
                . # # # .
                `).showImage(0)
                    } else if (settings_brightness == 2) {
                        led.setBrightness(100)
                        images.createImage(`
                . . . . .
                . # . . .
                # . . . .
                . # . # .
                . # # # .
                `).showImage(0)
                    } else if (settings_brightness == 3) {
                        led.setBrightness(150)
                        images.createImage(`
                . . . . .
                . # # . .
                # . . . .
                . # . # .
                . # # # .
                `).showImage(0)
                    } else if (settings_brightness == 4) {
                        led.setBrightness(200)
                        images.createImage(`
                . . . . .
                . # # # .
                # . . . .
                . # . # .
                . # # # .
                `).showImage(0)
                    } else if (settings_brightness == 5) {
                        led.setBrightness(255)
                        images.createImage(`
                . . . . .
                . # # # .
                # . . . #
                . # . # .
                . # # # .
                `).showImage(0)
                    }
                    if (settings_auto_brigthness == true) {
                        images.createImage(`
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                . # . # .
                `).showImage(0)
                    }
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    if (settings_brightness == 1) {
                        led.setBrightness(50)
                        images.createImage(`
                . . . . .
                . . . . .
                # . . . .
                . # . # .
                . # # # .
                `).scrollImage(1, 45)
                    } else if (settings_brightness == 2) {
                        led.setBrightness(100)
                        images.createImage(`
                . . . . .
                . # . . .
                # . . . .
                . # . # .
                . # # # .
                `).scrollImage(1, 45)
                    } else if (settings_brightness == 3) {
                        led.setBrightness(150)
                        images.createImage(`
                . . . . .
                . # # . .
                # . . . .
                . # . # .
                . # # # .
                `).scrollImage(1, 45)
                    } else if (settings_brightness == 4) {
                        led.setBrightness(200)
                        images.createImage(`
                . . . . .
                . # # # .
                # . . . .
                . # . # .
                . # # # .
                `).scrollImage(1, 45)
                    } else if (settings_brightness == 5) {
                        led.setBrightness(255)
                        images.createImage(`
                . . . . .
                . # # # .
                # . . . #
                . # . # .
                . # # # .
                `).scrollImage(1, 45)
                    }
                    if (settings_auto_brigthness == true) {
                        images.createImage(`
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                . # . # .
                `).scrollImage(1, 45)
                    }
                    draw_menu()
                }
            } else {
                if (settings_brightness == 1) {
                    led.setBrightness(50)
                    basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                . # . # .
                . # # # .
                `)
                } else if (settings_brightness == 2) {
                    led.setBrightness(100)
                    basic.showLeds(`
                . . . . .
                . # . . .
                # . . . .
                . # . # .
                . # # # .
                `)
                } else if (settings_brightness == 3) {
                    led.setBrightness(150)
                    basic.showLeds(`
                . . . . .
                . # # . .
                # . . . .
                . # . # .
                . # # # .
                `)
                } else if (settings_brightness == 4) {
                    led.setBrightness(200)
                    basic.showLeds(`
                . . . . .
                . # # # .
                # . . . .
                . # . # .
                . # # # .
                `)
                } else if (settings_brightness == 5) {
                    led.setBrightness(255)
                    basic.showLeds(`
                . . . . .
                . # # # .
                # . . . #
                . # . # .
                . # # # .
                `)
                }
                if (settings_auto_brigthness == true) {
                    basic.showLeds(`
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                . # . # .
                `)
                }
                draw_menu()
            }
            led.plot(2, 0)
        } else if (selected_setting == 4) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    if (logged_data == false) {
                        images.createImage(`
                . . . . .
                # . # . #
                # # # # #
                # . # . #
                # # # # #
                `).showImage(0)
                    } else {
                        basic.showIcon(IconNames.Yes)
                    }
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    if (logged_data == false) {
                        images.createImage(`
                . . . . .
                # . # . #
                # # # # #
                # . # . #
                # # # # #
                `).scrollImage(1, 45)
                    } else {
                        basic.showIcon(IconNames.Yes)
                    }
                    draw_menu()
                }
            } else {
                if (logged_data == false) {
                    basic.showLeds(`
                . . . . .
                # . # . #
                # # # # #
                # . # . #
                # # # # #
                `)
                } else {
                    basic.showIcon(IconNames.Yes)
                }
                draw_menu()
            }
            led.plot(2, 0)
        } else if (selected_setting == 5) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . # # . #
                    # . . # .
                    # . . # .
                    . # # . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . # # . #
                    # . . # .
                    # . . # .
                    . # # . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . # # . #
                # . . # .
                # . . # .
                . # # . .
                `)
                draw_menu()
            }
            led.plot(2, 0)
        } else if (selected_setting == 6) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . # # # .
                    . # . # .
                    . # # # .
                    . . . . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . # # # .
                    . # . # .
                    . # # # .
                    . . . . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
                `)
                draw_menu()
            }
            led.plot(2, 0)
        } else if (selected_setting == 7) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    if (pin_lock == false) {
                        images.createImage(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # . # . #
            `).showImage(0)
                    } else {
                        images.createImage(`
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                # . # . #
                `).showImage(0)
                        settings_pinlock_draw()
                    }
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    if (pin_lock == false) {
                        images.createImage(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # . # . #
            `).scrollImage(1, 45)
                    } else {
                        images.createImage(`
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                # . # . #
                `).scrollImage(1, 45)
                        settings_pinlock_draw()
                    }
                    draw_menu()
                }
            } else {
                if (pin_lock == false) {
                    basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # . # . #
            `)
                } else {
                    basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                # . # . #
                `)
                    settings_pinlock_draw()
                }
                draw_menu()
            }
            led.plot(3, 0)
        } else {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(3, 0)
                    images.createImage(`
                    . . . . .
                    . . . # .
                    # # # # #
                    . . . # .
                    . . . . .
                    `).showImage(0)
                    draw_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(3, 0)
                    images.createImage(`
                    . . . . .
                    . . . # .
                    # # # # #
                    . . . # .
                    . . . . .
                    `).scrollImage(1, 45)
                    draw_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . . . # .
                # # # # #
                . . . # .
                . . . . .
                `)
                draw_menu()
            }
            led.plot(4, 0)
        }
        waiting_for_input = true
        while (waiting_for_input == true) {
            if (input.isGesture(Gesture.Shake)) {
                abuttonpressed = true
                if (selected_setting == 3) {
                    if (settings_auto_brigthness == false) {
                        settings_auto_brigthness = true
                        settings_brightness += 1
                        waiting_for_input = false
                    } else {
                        settings_auto_brigthness = false
                        waiting_for_input = false
                        settings_brightness += -1
                    }
                }
            }
            if (input.buttonIsPressed(Button.A)) {
                abuttonpressed = true
                if (selected_setting == 0) {
                    selected_setting = 0
                    waiting_for_input = false
                } else {
                    selected_setting += -1
                    waiting_for_input = false
                }
            } else if (input.buttonIsPressed(Button.B)) {
                if (selected_setting == 8) {
                    selected_setting = 8
                    abuttonpressed = true
                    waiting_for_input = false
                } else {
                    selected_setting += 1
                    waiting_for_input = false
                }
            } else if (input.logoIsPressed()) {
                if (selected_setting == 1) {
                    abuttonpressed = true
                    if (settings_music == false) {
                        music.setBuiltInSpeakerEnabled(true)
                        music.play(music.tonePlayable(294, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
                        music.play(music.tonePlayable(494, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
                        settings_music = true
                    } else {
                        music.play(music.tonePlayable(494, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
                        music.play(music.tonePlayable(294, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
                        music.setBuiltInSpeakerEnabled(false)
                        settings_music = false
                    }
                } else if (selected_setting == 2) {
                    abuttonpressed = true
                    if (settings_volume == 5) {
                        settings_volume = 1
                    } else {
                        settings_volume += 1
                    }
                } else if (selected_setting == 3) {
                    abuttonpressed = true
                    if (settings_brightness == 5) {
                        settings_brightness = 1
                    } else {
                        settings_brightness += 1
                    }
                } else if (selected_setting == 4) {
                    abuttonpressed = false
                    if (logged_data == false) {
                        logged_data = true
                        basic.showIcon(IconNames.Yes)
                        datalogger.deleteLog
                        datalogger.includeTimestamp(FlashLogTimeStampFormat.Minutes)
                        datalogger.setColumnTitles("Space Invaders", "Flappy Bird", "Pong", "Cars Game", "Dinasour Game", "Jumping Rope", "Pac-Man")
                    } else {
                        basic.showIcon(IconNames.No)
                    }
                } else if (selected_setting == 5) {
                    abuttonpressed = true
                    input.calibrateCompass()
                } else if (selected_setting == 7) {
                    abuttonpressed = true
                    if (pin_lock == false) {
                        pin_lock = true
                    } else {
                        pin_lock = false
                    }
                } else if (selected_setting == 8) {
                    abuttonpressed = true
                    if (animation_scroll == true) {
                        animation_scroll = false
                    } else {
                        animation_scroll = true
                    }
                } else {
                    menu_select = false
                }
                waiting_for_input = false
            }
        }
    }
    if (selected_setting == 0) {
        abuttonpressed = true
        menu_select = true
        menu_select_menu()
    }
    if (selected_setting == 6) {
        basic.clearScreen()
        settings_test_input()
    }
} //Settings selection.


input.onButtonPressed(Button.A, function () {
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
    }
}) //On button A pressed.
input.onButtonPressed(Button.B, function () {
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
    }
}) //On button B pressed.
input.onButtonPressed(Button.AB, function () {
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
    }
}) //On button AB pressed.

input.onPinPressed(TouchPin.P0, function () {
    if (pin_lock == false) {
        if (settings_music == false) {
            music.setBuiltInSpeakerEnabled(true)
            music.play(music.tonePlayable(294, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(494, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            settings_music = true
        } else if (settings_music == true) {
            music.play(music.tonePlayable(494, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(294, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            music.setBuiltInSpeakerEnabled(false)
            settings_music = false
        }
    }
}) //On Pin0 pressed.
input.onPinPressed(TouchPin.P1, function () {
    if (pin_lock == false) {
        if (settings_volume == 1) {
            music.setVolume(50)
            music.play(music.tonePlayable(220, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
            basic.pause(20)
            music.play(music.tonePlayable(220, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
            settings_volume = 2
        } else if (settings_volume == 2) {
            music.setVolume(100)
            music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
            settings_volume = 3
        } else if (settings_volume == 3) {
            music.setVolume(150)
            music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
            settings_volume = 4
        } else if (settings_volume == 4) {
            music.setVolume(200)
            music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
            settings_volume = 5
        } else {
            music.setVolume(255)
            settings_volume = 1
            music.play(music.tonePlayable(523, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
            basic.pause(20)
            music.play(music.tonePlayable(523, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        }
    }
}) //On pin1 pressed.
input.onPinPressed(TouchPin.P2, function () {
    if (pin_lock == false) {
        if (settings_brightness == 1) {
            led.setBrightness(50)
            music.play(music.tonePlayable(220, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
            basic.pause(20)
            music.play(music.tonePlayable(220, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
            settings_brightness = 2
        } else if (settings_brightness == 2) {
            led.setBrightness(100)
            music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
            settings_brightness = 3
        } else if (settings_brightness == 3) {
            led.setBrightness(150)
            music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
            settings_brightness = 4
        } else if (settings_brightness == 4) {
            led.setBrightness(200)
            music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
            settings_brightness = 5
        } else {
            led.setBrightness(255)
            music.play(music.tonePlayable(523, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
            basic.pause(20)
            music.play(music.tonePlayable(523, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
            settings_brightness = 1
        }
    }
}) //On pin2 pressed.

bluetooth.onBluetoothConnected(function () {
    bluetooth_online = true
}) //On bluetooth connected.
bluetooth.onBluetoothDisconnected(function () {
    bluetooth_online = false
}) //On bluetooth disconnected.
music.onEvent(MusicEvent.MelodyStarted, function () {
    while (music_playing == true) {
        loading_animation()
    }
}) //On melody playing.


let pin_lock = true
if (input.logoIsPressed()) {
    loading_animation_rev()
    pin_lock = false
} else {
    loading_animation()
    pin_lock = true
}
music.setBuiltInSpeakerEnabled(false)
pins.setAudioPinEnabled(false)
let selected_menu = 1
let game_mode = 0
let selected_card_game = 0
let selected_tool = 0
let selected_setting = 0
let selected_math = 1
let selected_clock = 1
let tool_type = 1
let bluetooth_type = 0
let bluetooth_keyboard_type = 0
let create_type = 0
let selected_create_music = 1
let selected_pins = 0
let selected_serial = 0
let selected_music = 1
let settings_brightness = 5
let settings_auto_brigthness = false
let settings_music = false
let settings_volume = 5
let logged_data = false
let menu_select = true
let abc_loop = false
let number_loop = false
let abc_id = 1
let abc: string[] = []
let inputlist: string[] = []
let text = ""
let list: number[] = []
let numberx: number[] = []
let numbery: number[] = []
let mathx = 0
let mathy = 0
let waiting_for_input = true
let number_select = false
let running = false
let captured = ""
let crhonometer_run = false
let animation_scroll = true
let abuttonpressed = true
let unid = 0
let usid = 0
let num = 0
let hour = 0
let minute = 0
let second = 0
let signal_hour = 0
let signal_minute = 0
let unid_type = 0
let vrs = input.lightLevel()
let bluetooth_online = false
let x = 0
let y = 0
let newx = 0
let newy = 0
let shift = false
let custom_a_button = ""
let custom_b_button = ""
let custom_logo_button = ""
let custom_music: number[] = []
let custom_music_tune: number[] = []
let custom_music_beat: number[] = []
let custom_beat: number[] = []
let tune_music = 131
let music_playing = false


let acc_1 = 0
let time_1 = 0
let killed_1: number[] = []
let enemyX_1: number[] = []
let enemyY_1: number[] = []
let speed_1: number
let shoot_1: number
let my_1: number
let px_1: number
let py_1: number

let bird_move_2 = false
let obstacles_2: game.LedSprite[] = []
let bird_2: game.LedSprite = null
let interval_2: number
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
let score_5: number
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
winX_9 = [
    1,
    2,
    3,
    1,
    2,
    3,
    1,
    2,
    3,
    1,
    1,
    1,
    2,
    2,
    2,
    3,
    3,
    3,
    1,
    2,
    3,
    1,
    2,
    3
]
winY_9 = [
    1,
    1,
    1,
    2,
    2,
    2,
    3,
    3,
    3,
    1,
    2,
    3,
    1,
    2,
    3,
    1,
    2,
    3,
    1,
    2,
    3,
    3,
    2,
    1
]

let bj_dealer_hand = 0
let bj_my_hand = 0
let bj_dealer_card = 0
let random_card = 0

menu_select_menu()

basic.forever(function () {
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
                    music.play(music.createSoundExpression(
                        WaveShape.Noise,
                        2294,
                        2294,
                        238,
                        0,
                        200,
                        SoundExpressionEffect.None,
                        InterpolationCurve.Linear
                    ), music.PlaybackMode.InBackground)
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

    }
}) //Space Invaders game. // game_Mode = 1
function game_mode_2() {
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
    game_mode_2()
} //Flappy Bird game. // game_mode = 2
function game_mode_3() {
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
                music.play(music.createSoundExpression(
                    WaveShape.Square,
                    223,
                    1,
                    79,
                    39,
                    150,
                    SoundExpressionEffect.None,
                    InterpolationCurve.Linear
                ), music.PlaybackMode.InBackground)
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
    }
} //Ping-Pong game. // game_mode = 3
basic.forever(function () {
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
        datalogger.log(datalogger.createCV("Cars Game", game.score()))
        basic.clearScreen()
        basic.showString("S:")
        basic.showNumber(game.score())
        control.reset()
    }
}) //Cars game. // game_mode = 4
function game_mode_4(car_4: game.LedSprite) {
    basic.pause(randint(0, var_4))
    while (gameOn_4 == true) {
        if (car_4.get(LedSpriteProperty.Y) == 4) {
            if (playerCar_4.isTouching(car_4)) {
                gameOn_4 = false
            } else {
                music.play(music.createSoundExpression(
                    WaveShape.Noise,
                    2294,
                    2294,
                    238,
                    0,
                    200,
                    SoundExpressionEffect.None,
                    InterpolationCurve.Linear
                ), music.PlaybackMode.InBackground)
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
    game_mode_4(car_4)
} //Cars game. //Control 0-4 cars // game_mode = 4
basic.forever(function () {
    if (game_mode == 4) {
        basic.pause(100)
        if (gameOn_4 == true) {
            let car0_4 = game.createSprite(0, 0)
            car0_4.set(LedSpriteProperty.Brightness, 20)
            game_mode_4(car0_4)
        }
    }
}) //Cars game. // Car 0 // game_mode = 4
basic.forever(function () {
    if (game_mode == 4) {
        basic.pause(100)
        if (gameOn_4 == true) {
            let car1_4 = game.createSprite(1, 0)
            car1_4.set(LedSpriteProperty.Brightness, 20)
            game_mode_4(car1_4)
        }
    }
}) //Cars game. // Car 1 // game_mode = 4
basic.forever(function () {
    if (game_mode == 4) {
        basic.pause(100)
        if (gameOn_4 == true) {
            let car2_4 = game.createSprite(2, 0)
            car2_4.set(LedSpriteProperty.Brightness, 20)
            game_mode_4(car2_4)
        }
    }
}) //Cars game. // Car 2 // game_mode = 4
basic.forever(function () {
    if (game_mode == 4) {
        basic.pause(100)
        if (gameOn_4 == true) {
            let car3_4 = game.createSprite(3, 0)
            car3_4.set(LedSpriteProperty.Brightness, 20)
            game_mode_4(car3_4)
        }
    }
}) //Cars game. // Car 3 // game_mode = 4
basic.forever(function () {
    if (game_mode == 4) {
        basic.pause(100)
        if (gameOn_4 == true) {
            let car4_4 = game.createSprite(4, 0)
            car4_4.set(LedSpriteProperty.Brightness, 20)
            game_mode_4(car4_4)
        }
    }
}) //Cars game. // Car 4 // game_mode = 4
function gameOver() {
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
    control.reset()
} //Dinasour game // gameOver function// game_mode = 5
basic.forever(function () {
    if (game_mode == 5) {
        if (!(is_game_over_5)) {
            basic.pause(225)
            for (let obstacle_group_1 of obstacles_5) {
                for (let an_obstacle_sprite_1 of obstacle_group_1) {
                    if (an_obstacle_sprite_1.get(LedSpriteProperty.X) == 0) {
                        obstacle_group_1.removeAt(obstacle_group_1.indexOf(an_obstacle_sprite_1)).delete()
                        score_5 += 1
                        music.play(music.createSoundExpression(
                            WaveShape.Noise,
                            2294,
                            2294,
                            238,
                            0,
                            200,
                            SoundExpressionEffect.None,
                            InterpolationCurve.Linear
                        ), music.PlaybackMode.UntilDone)
                    } else {
                        an_obstacle_sprite_1.change(LedSpriteProperty.X, -1)
                    }
                }
                if (obstacle_group_1.length == 0) {
                    dummy_variable_5 = obstacles_5.removeAt(obstacles_5.indexOf(obstacle_group_1))
                }
            }
        }
    }
}) //Dinasour game // Score function // game_mode = 5
basic.forever(function () {
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
    }
}) //Dinasour game // generate obstacles // game_mode = 5
basic.forever(function () {
    if (game_mode == 5) {
        if (!(is_game_over_5)) {
            for (let obstacle_group_2 of obstacles_5) {
                for (let an_obstacle_sprite_2 of obstacle_group_2) {
                    for (let player_sprite_1 of player_5) {
                        if (an_obstacle_sprite_2.isTouching(player_sprite_1)) {
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
                            gameOver()
                        }
                    }
                }
            }
        }
    }
}) //Dinasour game // call gameOver function // game_mode = 5
function game_mode_6() {
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
    game_mode_6()
} //Jumping rope game // game_mode = 6
function game_mode_7() {
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
            music.play(music.createSoundExpression(
                WaveShape.Noise,
                2294,
                2294,
                255,
                0,
                200,
                SoundExpressionEffect.None,
                InterpolationCurve.Linear
            ), music.PlaybackMode.InBackground)
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
    game_mode_7()
} //Pac-Man game // game_mode = 7
function tryFall() {
    canFall_8 = y_8 < 4 && !(led.point(x_8, y_8 + 1))
    if (canFall_8) {
        led.unplot(x_8, y_8)
        y_8 = y_8 + 1
        led.plot(x_8, y_8)
    } else {
        gameOver_8 = y_8 == 0
    }
    checkFullRow()
} //Tetris. // game_mode = 8
function checkFullRow() {
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
    }
} //Tetris. // game_mode = 8
function game_mode_9() {
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
    game_mode_9()
} //Tic-Tac-Toe // game_mode = 9
function init() {
    state_9 = 0
    user_9 = 0
    winner_9 = -1
    show_9 = 0
    stepA_9 = 0
    stepB_9 = 0
    brightness_9 = 0
    brightnessA_9 = 255
    brightnessB_9 = 5
    ax_9 = [
        -1,
        -1,
        -1,
        -1,
        -1
    ]
    ay_9 = [
        -1,
        -1,
        -1,
        -1,
        -1
    ]
    bx_9 = [
        -1,
        -1,
        -1,
        -1,
        -1
    ]
    by_9 = [
        -1,
        -1,
        -1,
        -1,
        -1
    ]
} //Tic-Tac-Toe // game_mode = 9
function clearall() {
    for (let i = 0; i <= 2; i++) {
        led.plotBrightness(i + 1, 1, 0)
        led.plotBrightness(i + 1, 2, 0)
        led.plotBrightness(i + 1, 3, 0)
    }
} //Tic-Tac-Toe // game_mode = 9
function winner_check() {
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
    }
} //Tic-Tac-Toe // game_mode = 9
function winner_case() {
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
    return 0
} //Tic-Tac-Toe // game_mode = 9
function showall() {
    for (let i = 0; i <= 4; i++) {
        led.plotBrightness(ax_9[i], ay_9[i], brightnessA_9)
        led.plotBrightness(bx_9[i], by_9[i], brightnessB_9)
    }
} //Tic-Tac-Toe // game_mode = 9
function blackjack() {
    basic.pause(200)
    basic.clearScreen()
    bj_dealer_hand = 0
    bj_my_hand = 0
    bj_dealer_card = 0
    unid_type = 1
    random_card = randint(1,14)
    if (random_card == 1) {
        bj_dealer_card = 1
    } else if (random_card == 2) {
        bj_dealer_card = 2
    } else if(random_card == 3) {
        bj_dealer_card = 3
    } else if (random_card == 4) {
        bj_dealer_card = 4
    } else if (random_card == 5) {
        bj_dealer_card = 5
    } else if (random_card == 6) {
        bj_dealer_card = 6
    } else if(random_card == 7) {
        bj_dealer_card = 7
    } else if(random_card == 8) {
        bj_dealer_card = 8
    } else if(random_card == 9) {
        bj_dealer_card = 9
    } else if (random_card == 10) {
        bj_dealer_card = 10
    } else if (random_card == 11) {
        bj_dealer_card = 10
    } else if (random_card == 12) {
        bj_dealer_card = 10
    } else if (random_card == 13) {
        bj_dealer_card = 10
    } else if (random_card == 14) {
        bj_dealer_card = 10
    }
    random_card = randint(1, 14)
    if (random_card == 1) {
        bj_dealer_hand = bj_dealer_card + 1
    } else if (random_card == 2) {
        bj_dealer_hand = bj_dealer_card + 2
    } else if (random_card == 3) {
        bj_dealer_hand = bj_dealer_card + 3
    } else if (random_card == 4) {
        bj_dealer_hand = bj_dealer_card + 4
    } else if (random_card == 5) {
        bj_dealer_hand = bj_dealer_card + 5
    } else if (random_card == 6) {
        bj_dealer_hand = bj_dealer_card + 6
    } else if (random_card == 7) {
        bj_dealer_hand = bj_dealer_card + 7
    } else if (random_card == 8) {
        bj_dealer_hand = bj_dealer_card + 8
    } else if (random_card == 9) {
        bj_dealer_hand = bj_dealer_card + 9
    } else if (random_card == 10) {
        bj_dealer_hand = bj_dealer_card + 10
    } else if (random_card == 11) {
        bj_dealer_hand = bj_dealer_card + 10
    } else if (random_card == 12) {
        bj_dealer_hand = bj_dealer_card + 10
    } else if (random_card == 13) {
        bj_dealer_hand = bj_dealer_card + 10
    } else if (random_card == 14) {
        bj_dealer_hand = bj_dealer_card + 10
    }
    for (let index = 0; index < 2; index++) {
        random_card = randint(1, 14)
        if (random_card == 1) {
            bj_my_hand += 1
        } else if (random_card == 2) {
            bj_my_hand += 2
        } else if (random_card == 3) {
            bj_my_hand += 3
        } else if (random_card == 4) {
            bj_my_hand += 4
        } else if (random_card == 5) {
            bj_my_hand += 5
        } else if (random_card == 6) {
            bj_my_hand += 6
        } else if (random_card == 7) {
            bj_my_hand += 7
        } else if (random_card == 8) {
            bj_my_hand += 8
        } else if (random_card == 9) {
            bj_my_hand += 9
        } else if (random_card == 10) {
            bj_my_hand += 10
        } else if (random_card == 11) {
            bj_my_hand += 10
        } else if (random_card == 12) {
            bj_my_hand += 10
        } else if (random_card == 13) {
            bj_my_hand += 10
        } else if (random_card == 14) {
            bj_my_hand += 10
        }
    }
    while (true) {
        num = bj_dealer_card
        if (input.buttonIsPressed(Button.AB)) {
            basic.showNumber(game.score())
        }
        if (input.buttonIsPressed(Button.A)){
            break;
        }
        if (input.buttonIsPressed(Button.B)) {
            basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
            basic.clearScreen()
            random_card = randint(1, 14)
            if (random_card == 1) {
                bj_my_hand += 1
            } else if (random_card == 2) {
                bj_my_hand += 2
            } else if (random_card == 3) {
                bj_my_hand += 3
            } else if (random_card == 4) {
                bj_my_hand += 4
            } else if (random_card == 5) {
                bj_my_hand += 5
            } else if (random_card == 6) {
                bj_my_hand += 6
            } else if (random_card == 7) {
                bj_my_hand += 7
            } else if (random_card == 8) {
                bj_my_hand += 8
            } else if (random_card == 9) {
                bj_my_hand += 9
            } else if (random_card == 10) {
                bj_my_hand += 10
            } else if (random_card == 11) {
                bj_my_hand += 10
            } else if (random_card == 12) {
                bj_my_hand += 10
            } else if (random_card == 13) {
                bj_my_hand += 10
            } else if (random_card == 14) {
                bj_my_hand += 10
            }
            if (bj_my_hand == 21) {
                break;
            }
            if (bj_my_hand >= 22)  {
                break;
            }
        }
        if (input.logoIsPressed()) {
            num = bj_my_hand
        }
        unid_if_1_23()
    }
    while (true) {
        if (bj_dealer_hand <= 15) {
            random_card = randint(1, 14)
            if (random_card == 1) {
                bj_dealer_hand += 1
            } else if (random_card == 2) {
                bj_dealer_hand += 2
            } else if (random_card == 3) {
                bj_dealer_hand += 3
            } else if (random_card == 4) {
                bj_dealer_hand += 4
            } else if (random_card == 5) {
                bj_dealer_hand += 5
            } else if (random_card == 6) {
                bj_dealer_hand += 6
            } else if (random_card == 7) {
                bj_dealer_hand += 7
            } else if (random_card == 8) {
                bj_dealer_hand += 8
            } else if (random_card == 9) {
                bj_dealer_hand += 9
            } else if (random_card == 10) {
                bj_dealer_hand += 10
            } else if (random_card == 11) {
                bj_dealer_hand += 10
            } else if (random_card == 12) {
                bj_dealer_hand += 10
            } else if (random_card == 13) {
                bj_dealer_hand += 10
            } else if (random_card == 14) {
                bj_dealer_hand += 10
            }
        } else {
            break;
        }
    }
    basic.clearScreen()
    while (true) {
        if (bj_my_hand == bj_dealer_hand) {
            basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            `)
            basic.showNumber(bj_dealer_hand)
            basic.showString("=")
            basic.showNumber(bj_my_hand)
            game.addScore(0)
            break;
        }
        if (bj_my_hand < bj_dealer_hand && bj_dealer_hand <= 21) {
            basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
            basic.showNumber(bj_dealer_hand)
            basic.showString(">")
            basic.showNumber(bj_my_hand)
            game.addScore(-1)
            break;
        }
        if (bj_my_hand == 21) {
            basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
            basic.showNumber(bj_dealer_hand)
            basic.showString("<")
            basic.showNumber(bj_my_hand)
            game.addScore(1)
            break;
        }
        if (bj_my_hand > bj_dealer_hand && bj_my_hand <= 21 || bj_my_hand <= 21) {
            basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
            basic.showNumber(bj_dealer_hand)
            basic.showString("<")
            basic.showNumber(bj_my_hand)
            game.addScore(1)
            break;
        }
        game.addScore(0)
        break;
    }
    blackjack()
}

function tool_temparature() {
    while (true) {
        if (tool_type == 1) {
            basic.showNumber(input.temperature())
            if (input.logoIsPressed()) {
                basic.clearScreen()
                tool_type = 2
                game.addScore(1)
                basic.pause(500)
            }
        }
        if (tool_type == 2) {
            led.plotBarGraph(input.temperature(), 50)
            if (input.logoIsPressed()) {
                basic.clearScreen()
                tool_type = 1
                game.addScore(1)
                basic.pause(500)
            }
        }
    }
} //Show temperature // Selected_tool = 1
function tool_light_level() {
    while (true) {
        if (tool_type == 1) {
            basic.showNumber(input.lightLevel())
            if (input.logoIsPressed()) {
                basic.clearScreen()
                tool_type = 2
                game.addScore(1)
                basic.pause(500)
            }
        }
        if (tool_type == 2) {
            led.plotBarGraph(input.lightLevel(), 255)
            if (input.logoIsPressed()) {
                basic.clearScreen()
                tool_type = 1
                game.addScore(1)
                basic.pause(500)
            }
        }
    }
} //Show light level // Selected_tool = 2
function tool_sound_level() {
    while (true) {
        if (tool_type == 1) {
            basic.showNumber(input.soundLevel())
        }
        if (tool_type == 2) {
            led.plotBarGraph(
                input.soundLevel(),
                0
            )
        }
        if (input.logoIsPressed()) {
            basic.pause(100)
            if (tool_type == 1) {
                basic.clearScreen()
                tool_type = 2
            }
            basic.pause(100)
            if (tool_type == 1) {
                basic.clearScreen()
                tool_type = 1
            }
        }
    }
} //Show sound level // Selected_tool = 3
function tool_compass() {
    while (true) {
        if (input.compassHeading() <= 90 && input.compassHeading() >= 45) {
            basic.showArrow(ArrowNames.NorthEast)
        } else if (input.compassHeading() <= 135 && input.compassHeading() >= 90) {
            basic.showArrow(ArrowNames.East)
        } else if (input.compassHeading() <= 180 && input.compassHeading() >= 135) {
            basic.showArrow(ArrowNames.SouthEast)
        } else if (input.compassHeading() <= 225 && input.compassHeading() >= 180) {
            basic.showArrow(ArrowNames.South)
        } else if (input.compassHeading() <= 270 && input.compassHeading() >= 225) {
            basic.showArrow(ArrowNames.SouthWest)
        } else if (input.compassHeading() <= 315 && input.compassHeading() >= 270) {
            basic.showArrow(ArrowNames.West)
        } else if (input.compassHeading() <= 360 && input.compassHeading() >= 315) {
            basic.showArrow(ArrowNames.NorthWest)
        } else {
            basic.showArrow(ArrowNames.North)
        }
    }
} //Compass // Selected_tool = 4
function tool_accX() {
    while (true) {
        if (tool_type == 1) {
            basic.showNumber(input.acceleration(Dimension.X))
            if (input.logoIsPressed()) {
                basic.clearScreen()
                tool_type = 2
                game.addScore(1)
                basic.pause(500)
            }
        }
        if (tool_type == 2) {
            led.plotBarGraph(input.acceleration(Dimension.X), 0)
            if (input.logoIsPressed()) {
                basic.clearScreen()
                tool_type = 1
                game.addScore(1)
                basic.pause(500)
            }
        }
    }
} //Show acceleration(mg) X // Selected_tool = 5
function tool_accY() {
    while (true) {
        if (tool_type == 1) {
            basic.showNumber(input.acceleration(Dimension.Y))
            if (input.logoIsPressed()) {
                basic.clearScreen()
                tool_type = 2
                game.addScore(1)
                basic.pause(500)
            }
        }
        if (tool_type == 2) {
            led.plotBarGraph(input.acceleration(Dimension.Y), 0)
            if (input.logoIsPressed()) {
                basic.clearScreen()
                tool_type = 1
                game.addScore(1)
                basic.pause(500)
            }
        }
    }
} //Show acceleration(mg) Y // Selected_tool = 6
function tool_accZ() {
    while (true) {
        if (tool_type == 1) {
            basic.showNumber(input.acceleration(Dimension.Z))
            if (input.logoIsPressed()) {
                basic.clearScreen()
                tool_type = 2
                game.addScore(1)
                basic.pause(500)
            }
        }
        if (tool_type == 2) {
            led.plotBarGraph(input.acceleration(Dimension.Z), 0)
            if (input.logoIsPressed()) {
                basic.clearScreen()
                tool_type = 1
                game.addScore(1)
                basic.pause(500)
            }
        }
    }
} //Show acceleration(mg) Z // Selected_tool = 7
function tool_record() {
    let tool_record_volume = 5
    record.setSampleRate(22000)
    while (true) {
        if (tool_type == 1) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(3, 0)
                    images.createImage(`
                    . . . . .
                    . # . # .
                    . # . . .
                    # # # . .
                    . # . . .
                    `).showImage(0)
                    draw_mini_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(3, 0)
                    images.createImage(`
                    . . . . .
                    . # . # .
                    . # . . .
                    # # # . .
                    . # . . .
                    `).scrollImage(1, 45)
                    draw_mini_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . # . # .
                . # . . .
                # # # . .
                . # . . .
                `)
                draw_mini_menu()
            }
            led.plot(1, 0)
        } else if (tool_type == 2) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(1, 0)
                    images.createImage(`
                    . . . . .
                    . . # # .
                    . . # . #
                    # # # . .
                    # # # . .
                    `).showImage(0)
                    draw_mini_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(1, 0)
                    images.createImage(`
                    . . . . .
                    . . # # .
                    . . # . #
                    # # # . .
                    # # # . .
                    `).scrollImage(1, 45)
                    draw_mini_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                    . . # # .
                    . . # . #
                    # # # . .
                    # # # . .
                `)
                draw_mini_menu()
            }
            led.plot(2, 0)
        } else if (tool_type == 3) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(1, 0)
                    if (tool_record_volume == 1) {
                        images.createImage(`
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                . . . . .
                `).showImage(0)
                        led.plotBrightness(2, 1, 20)
                        record.setSampleRate(4400)
                    } else if (tool_record_volume == 2) {
                        images.createImage(`
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                . . . . .
                `).showImage(0)
                        led.plotBrightness(2, 1, 20)
                        led.plotBrightness(3, 2, 20)
                        record.setSampleRate(8800)
                    } else if (tool_record_volume == 3) {
                        images.createImage(`
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                . . . . .
                `).showImage(0)
                        led.plotBrightness(2, 1, 20)
                        led.plotBrightness(3, 2, 20)
                        led.plotBrightness(3, 3, 20)
                        record.setSampleRate(13200)
                    } else if (tool_record_volume == 4) {
                        images.createImage(`
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                . . . . .
                `).showImage(0)
                        led.plotBrightness(2, 1, 20)
                        led.plotBrightness(3, 2, 20)
                        led.plotBrightness(3, 3, 20)
                        led.plotBrightness(2, 4, 20)
                        record.setSampleRate(17600)
                    } else {
                        images.createImage(`
                . . . . .
                . . # . .
                # . . # .
                # . . # .
                . . # . .
                `).showImage(0)
                        record.setSampleRate(22000)
                    }
                    draw_mini_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(1, 0)
                    if (tool_record_volume == 1) {
                        images.createImage(`
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                . . . . .
                `).scrollImage(1, 45)
                        led.plotBrightness(2, 1, 20)
                        record.setSampleRate(4400)
                    } else if (tool_record_volume == 2) {
                        images.createImage(`
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                . . . . .
                `).scrollImage(1, 45)
                        led.plotBrightness(2, 1, 20)
                        led.plotBrightness(3, 2, 20)
                        record.setSampleRate(8800)
                    } else if (tool_record_volume == 3) {
                        images.createImage(`
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                . . . . .
                `).scrollImage(1, 45)
                        led.plotBrightness(2, 1, 20)
                        led.plotBrightness(3, 2, 20)
                        led.plotBrightness(3, 3, 20)
                        record.setSampleRate(13200)
                    } else if (tool_record_volume == 4) {
                        images.createImage(`
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                . . . . .
                `).scrollImage(1, 45)
                        led.plotBrightness(2, 1, 20)
                        led.plotBrightness(3, 2, 20)
                        led.plotBrightness(3, 3, 20)
                        led.plotBrightness(2, 4, 20)
                        record.setSampleRate(17600)
                    } else {
                        images.createImage(`
                . . . . .
                . . # . .
                # . . # .
                # . . # .
                . . # . .
                `).scrollImage(1, 45)
                        record.setSampleRate(22000)
                    }
                    draw_mini_menu()
                }
            } else {
                if (tool_record_volume == 1) {
                    basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                . . . . .
                `)
                    led.plotBrightness(2, 1, 20)
                    record.setSampleRate(4400)
                } else if (tool_record_volume == 2) {
                    basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                . . . . .
                `)
                    led.plotBrightness(2, 1, 20)
                    led.plotBrightness(3, 2, 20)
                    record.setSampleRate(8800)
                } else if (tool_record_volume == 3) {
                    basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                . . . . .
                `)
                    led.plotBrightness(2, 1, 20)
                    led.plotBrightness(3, 2, 20)
                    led.plotBrightness(3, 3, 20)
                    record.setSampleRate(13200)
                } else if (tool_record_volume == 4) {
                    basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                . . . . .
                `)
                    led.plotBrightness(2, 1, 20)
                    led.plotBrightness(3, 2, 20)
                    led.plotBrightness(3, 3, 20)
                    led.plotBrightness(2, 4, 20)
                    record.setSampleRate(17600)
                } else {
                    basic.showLeds(`
                . . . . .
                . . # . .
                # . . # .
                # . . # .
                . . # . .
                `)
                    record.setSampleRate(22000)
                }
                draw_mini_menu()
            }
            led.plot(3, 0)
        }
        waiting_for_input = true
        while (waiting_for_input == true) {
            if (input.buttonIsPressed(Button.A)) {
                abuttonpressed = true
                if (tool_type == 1) {
                    tool_type = 1
                    waiting_for_input = false
                } else {
                    tool_type += -1
                    waiting_for_input = false
                }
            }
            if (input.buttonIsPressed(Button.B)) {
                if (tool_type == 3) {
                    tool_type = 3
                    abuttonpressed = true
                    waiting_for_input = false
                } else {
                    tool_type += 1
                    waiting_for_input = false
                }
            }
            if (input.logoIsPressed()) {
                if (tool_type == 1) {
                    record.startRecording(record.BlockingState.Nonblocking)
                    basic.clearScreen()
                    abuttonpressed = true
                    while (record.audioStatus(record.AudioStatus.Recording)) {
                        loading_animation()
                    }
                }
                if (tool_type == 2) {
                    record.playAudio(record.BlockingState.Nonblocking)
                    basic.clearScreen()
                    abuttonpressed = true
                    while (record.audioStatus(record.AudioStatus.Playing)) {
                        loading_animation()
                    }
                }
                if (tool_type == 3) {
                    abuttonpressed = true
                    if (tool_record_volume == 5) {
                        tool_record_volume = 1
                    } else {
                        tool_record_volume += 1
                    }
                }
                waiting_for_input = false
            }
        }
    }
} //Record and play sound files // Selected_tool = 8
function math_xy() {
    basic.pause(200)
    let numberlist = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
    ]
    mathx = 0
    mathy = 0
    num = 0
    number_select = true
    while (number_select == true) {
        if (input.buttonIsPressed(Button.A)) {
            if (num == 0) {
                num = 9
            } else {
                num += -1
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            if (num == 9) {
                num = 0
            } else {
                num += 1
            }
        }
        if (input.logoIsPressed()) {
            music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
            numberx.push(numberlist[num])
            basic.showIcon(IconNames.Yes)
        }
        if (input.buttonIsPressed(Button.AB)) {
            if (numberx.length == 1) {
                mathx = numberx[0]
            } else if (numberx.length == 2) {
                mathx = numberx[0] * 10 + numberx[1]
            } else if (numberx.length == 3) {
                mathx = numberx[0] * 100
                mathx += numberx[1] * 10 + numberx[2]
            } else if (numberx.length == 4) {
                mathx = numberx[0] * 1000
                mathx += numberx[1] * 100
                mathx += numberx[2] * 10 + numberx[3]
            } else if (numberx.length == 5) {
                mathx = numberx[0] * 10000
                mathx += numberx[1] * 1000
                mathx += numberx[2] * 100
                mathx += numberx[3] * 10 + numberx[4]
            } else if (numberx.length == 6) {
                mathx = numberx[0] * 100000
                mathx += numberx[1] * 10000
                mathx += numberx[2] * 1000
                mathx += numberx[3] * 100
                mathx += numberx[4] * 10 + numberx[5]
            } else if (numberx.length == 7) {
                mathx = numberx[0] * 1000000
                mathx += numberx[1] * 100000
                mathx += numberx[2] * 10000
                mathx += numberx[3] * 1000
                mathx += numberx[4] * 100
                mathx += numberx[5] * 10 + numberx[6]
            } else if (numberx.length == 8) {
                mathx = numberx[0] * 10000000
                mathx += numberx[1] * 1000000
                mathx += numberx[2] * 100000
                mathx += numberx[3] * 10000
                mathx += numberx[4] * 1000
                mathx += numberx[5] * 100
                mathx += numberx[6] * 10 + numberx[7]
            } else {
                basic.showIcon(IconNames.No)
            }
            basic.clearScreen()
            number_select = false
        }
        unid_if_0_9()
    }
    game.addScore(1)
    basic.pause(500)
    num = 0
    number_select = true
    while (number_select == true) {
        if (input.buttonIsPressed(Button.A)) {
            if (num == 0) {
                num = 9
            } else {
                num += -1
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            if (num == 9) {
                num = 0
            } else {
                num += 1
            }
        }
        if (input.logoIsPressed()) {
            basic.showIcon(IconNames.Yes)
            music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
            numbery.push(numberlist[num])
        }
        if (input.buttonIsPressed(Button.AB)) {
            if (numbery.length == 1) {
                mathy = numbery[0]
            } else if (numbery.length == 2) {
                mathy = numbery[0] * 10 + numbery[1]
            } else if (numbery.length == 3) {
                mathy = numbery[0] * 100
                mathy += numbery[1] * 10 + numbery[2]
            } else if (numbery.length == 4) {
                mathy = numbery[0] * 1000
                mathy += numbery[1] * 100
                mathy += numbery[2] * 10 + numbery[3]
            } else if (numbery.length == 5) {
                mathy = numbery[0] * 10000
                mathy += numbery[1] * 1000
                mathy += numbery[2] * 100
                mathy += numbery[3] * 10 + numbery[4]
            } else if (numbery.length == 6) {
                mathy = numbery[0] * 100000
                mathy += numbery[1] * 10000
                mathy += numbery[2] * 1000
                mathy += numbery[3] * 100
                mathy += numbery[4] * 10 + numbery[5]
            } else if (numbery.length == 7) {
                mathy = numbery[0] * 1000000
                mathy += numbery[1] * 100000
                mathy += numbery[2] * 10000
                mathy += numbery[3] * 1000
                mathy += numbery[4] * 100
                mathy += numbery[5] * 10 + numbery[6]
            } else if (numbery.length == 8) {
                mathy = numbery[0] * 10000000
                mathy += numbery[1] * 1000000
                mathy += numbery[2] * 100000
                mathy += numbery[3] * 10000
                mathy += numbery[4] * 1000
                mathy += numbery[5] * 100
                mathy += numberx[6] * 10 + numbery[7]
            } else {
                basic.showIcon(IconNames.No)
            }
            basic.clearScreen()
            number_select = false
        }
        unid_if_0_9()
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
        basic.showNumber(randint(mathx, mathy))
    }
} //Calculator with 2 variables // Selected_tool = 9
function math_x() {
    basic.clearScreen()
    basic.pause(100)
    let numberlist = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
    ]
    mathx = 0
    mathy = 0
    num = 0
    number_select = true
    while (number_select == true) {
        if (input.buttonIsPressed(Button.A)) {
            if (num == 0) {
                num = 9
            } else {
                num += -1
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            if (num == 9) {
                num = 0
            } else {
                num += 1
            }
        }
        if (input.logoIsPressed()) {
            music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
            numberx.push(numberlist[num])
            basic.showIcon(IconNames.Yes)
        }
        if (input.buttonIsPressed(Button.AB)) {
            if (numberx.length == 1) {
                mathx = numberx[0]
            } else if (numberx.length == 2) {
                mathx = numberx[0] * 10 + numberx[1]
            } else if (numberx.length == 3) {
                mathx = numberx[0] * 100
                mathx += numberx[1] * 10 + numberx[2]
            } else if (numberx.length == 4) {
                mathx = numberx[0] * 1000
                mathx += numberx[1] * 100
                mathx += numberx[2] * 10 + numberx[3]
            } else if (numberx.length == 5) {
                mathx = numberx[0] * 10000
                mathx += numberx[1] * 1000
                mathx += numberx[2] * 100
                mathx += numberx[3] * 10 + numberx[4]
            } else if (numberx.length == 6) {
                mathx = numberx[0] * 100000
                mathx += numberx[1] * 10000
                mathx += numberx[2] * 1000
                mathx += numberx[3] * 100
                mathx += numberx[4] * 10 + numberx[5]
            } else if (numberx.length == 7) {
                mathx = numberx[0] * 1000000
                mathx += numberx[1] * 100000
                mathx += numberx[2] * 10000
                mathx += numberx[3] * 1000
                mathx += numberx[4] * 100
                mathx += numberx[5] * 10 + numberx[6]
            } else if (numberx.length == 8) {
                mathx = numberx[0] * 10000000
                mathx += numberx[1] * 1000000
                mathx += numberx[2] * 100000
                mathx += numberx[3] * 10000
                mathx += numberx[4] * 1000
                mathx += numberx[5] * 100
                mathx += numberx[6] * 10 + numberx[7]
            } else {
                basic.showIcon(IconNames.No)
            }
            basic.clearScreen()
            number_select = false
        }
        unid_if_0_9()
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
    }
} //Calculator with 1 variable // Selected_tool = 9
function signal() {
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
    let number_select = true
    while (number_select == true) {
        if (input.buttonIsPressed(Button.A)) {
            if (hour == 0) {
                hour = 23
            } else {
                hour += -1
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            if (hour == 23) {
                hour = 0
            } else {
                hour += 1
            }
        }
        if (input.logoIsPressed()) {
            music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
            number_select = false
            basic.showIcon(IconNames.Yes)
        }
        unid_if_1_23()
    }
    basic.clearScreen()
    basic.pause(200)
    basic.showString("M")
    basic.clearScreen()
    unid_type = 3
    number_select = true
    while (number_select == true) {
        if (input.buttonIsPressed(Button.A)) {
            if (minute == 0) {
                minute = 55
            } else {
                minute += -5
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            if (minute == 55) {
                minute = 0
            } else {
                minute += 5
            }
        }
        if (input.logoIsPressed()) {
            music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
            number_select = false
            basic.showIcon(IconNames.Yes)
        }
        unid_if_1_23()
    }
    basic.clearScreen()
    basic.pause(200)
    basic.showString("HS")
    basic.clearScreen()
    unid_type = 5
    number_select = true
    while (number_select == true) {
        if (input.buttonIsPressed(Button.A)) {
            if (signal_hour == 0) {
                signal_hour = 23
            } else {
                signal_hour += -1
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            if (signal_hour == 23) {
                signal_hour = 0
            } else {
                signal_hour += 1
            }
        }
        if (input.logoIsPressed()) {
            music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
            number_select = false
            basic.showIcon(IconNames.Yes)
        }
        unid_if_1_23()
    }
    basic.clearScreen()
    basic.pause(200)
    basic.showString("MS")
    basic.clearScreen()
    unid_type = 6
    number_select = true
    while (number_select == true) {
        if (input.buttonIsPressed(Button.A)) {
            if (signal_minute == 0) {
                signal_minute = 55
            } else {
                signal_minute += -5
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            if (signal_minute == 55) {
                signal_minute = 0
            } else {
                signal_minute += 5
            }
        }
        if (input.logoIsPressed()) {
            music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
            number_select = false
            basic.showIcon(IconNames.Yes)
        }
        unid_if_1_23()
    }
    basic.clearScreen()
    while (true) {
        if (hour == signal_hour) {
            if (minute == signal_minute) {
                while (true) {
                    basic.showIcon(IconNames.Yes)
                    music.play(music.stringPlayable("E - E - - E E E ", 1000), music.PlaybackMode.UntilDone)
                    music.play(music.stringPlayable("- E - E E E - - ", 1000), music.PlaybackMode.UntilDone)
                    if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
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
    }
} //Signal / Alarm clock // Selected_tool = 10
function chronometer() {
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
    }
} // Chronometer // Selected_tool = 10
function timer() {
    basic.clearScreen()
    music.setBuiltInSpeakerEnabled(true)
    basic.pause(200)
    basic.showString("H")
    basic.clearScreen()
    hour = 0
    minute = 0
    second = 0
    let numberlist = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
    ]
    num = 0
    number_select = true
    while (number_select == true) {
        if (input.buttonIsPressed(Button.A)) {
            if (num == 0) {
                num = 9
            } else {
                num += -1
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            if (num == 9) {
                num = 0
            } else {
                num += 1
            }
        }
        if (input.logoIsPressed()) {
            music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
            list.push(numberlist[num])
            basic.showIcon(IconNames.Yes)
        }
        if (input.buttonIsPressed(Button.AB)) {
            if (list.length == 1) {
                hour = list[0]
            } else if (list.length == 2) {
                hour = list[0] * 10 + list[1]
            } else {
                basic.showIcon(IconNames.No)
            }
            number_select = false
        }
        unid_if_0_9()
    }
    basic.clearScreen()
    basic.pause(200)
    basic.showString("M")
    basic.clearScreen()
    num = 0
    list = []
    number_select = true
    while (number_select == true) {
        if (input.buttonIsPressed(Button.A)) {
            if (num == 0) {
                num = 9
            } else {
                num += -1
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            if (num == 9) {
                num = 0
            } else {
                num += 1
            }
        }
        if (input.logoIsPressed()) {
            music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
            list.push(numberlist[num])
            basic.showIcon(IconNames.Yes)
        }
        if (input.buttonIsPressed(Button.AB)) {
            if (list.length == 1) {
                minute = list[0]
            } else if (list.length == 2) {
                minute = list[0] * 10 + list[1]
            } else {
                basic.showIcon(IconNames.No)
            }
            number_select = false
        }
        unid_if_0_9()
    }
    basic.clearScreen()
    basic.pause(200)
    basic.showString("S")
    basic.clearScreen()
    num = 0
    list = []
    number_select = true
    while (number_select == true) {
        if (input.buttonIsPressed(Button.A)) {
            if (num == 0) {
                num = 9
            } else {
                num += -1
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            if (num == 9) {
                num = 0
            } else {
                num += 1
            }
        }
        if (input.logoIsPressed()) {
            music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
            list.push(numberlist[num])
            basic.showIcon(IconNames.Yes)
        }
        if (input.buttonIsPressed(Button.AB)) {
            if (list.length == 1) {
                second = list[0]
            } else if (list.length == 2) {
                second = list[0] * 10 + list[1]
            } else {
                basic.showIcon(IconNames.No)
            }
            number_select = false
        }
        unid_if_0_9()
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
                        if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
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
    }
} // Timer // Selected_tool = 10


function bluetooth_media() {
    while (bluetooth_online == true) {
        if (input.buttonIsPressed(Button.AB)) {
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
    bluetooth_media()
} //Control media via bluetooth.
function bluetooth_mouse() {
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
    bluetooth_mouse()
} //Control the mouse via bluetooth.
function bluetooth_gamepad() {
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
    bluetooth_gamepad()
} //Control the gamepad via bluetooth.
function bluetooth_keyboard() {
    while (bluetooth_online == true) {
        basic.clearScreen()
        abc = [
            "NUL",
            "a",
            "A",
            "b",
            "c",
            "C",
            "d",
            "e",
            "E",
            "f",
            "g",
            "G",
            "h",
            "i",
            "I",
            "j",
            "k",
            "K",
            "l",
            "L",
            "m",
            "n",
            "N",
            "o",
            "p",
            "r",
            "s",
            "S",
            "t",
            "u",
            "U",
            "v",
            "z",
            "Z",
            " ",
            ".",
            ",",
            "!",
            "?"]
        abc_loop = true
        basic.pause(500)
        while (abc_loop == true) {
            if (input.buttonIsPressed(Button.A)) {
                if (abc_id == 1) {
                    abc_id = 38
                } else {
                    abc_id += -1
                }
            }
            if (input.buttonIsPressed(Button.B)) {
                if (abc_id == 38) {
                    abc_id = 1
                } else {
                    abc_id += 1
                }
            }
            if (input.buttonIsPressed(Button.AB)) {
                shift = true
                music.play(music.tonePlayable(220, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
            }
            if (input.logoIsPressed()) {
                basic.showIcon(IconNames.Yes)
                if (abc_id == 1) {
                    if (shift == true) {
                        keyboard.sendString("A")
                        shift = false
                    } else {
                        keyboard.sendString("a")
                    }
                } else if (abc_id == 2) {
                    if (shift == true) {
                        keyboard.sendString("A")
                        shift = false
                    } else {
                        keyboard.sendString("a")
                    }
                } else if (abc_id == 3) {
                    if (shift == true) {
                        keyboard.sendString("B")
                        shift = false
                    } else {
                        keyboard.sendString("b")
                    }
                } else if (abc_id == 4) {
                    if (shift == true) {
                        keyboard.sendString("C")
                        shift = false
                    } else {
                        keyboard.sendString("c")
                    }
                } else if (abc_id == 5) {
                    if (shift == true) {
                        keyboard.sendString("C")
                        shift = false
                    } else {
                        keyboard.sendString("c")
                    }
                } else if (abc_id == 6) {
                    if (shift == true) {
                        keyboard.sendString("D")
                        shift = false
                    } else {
                        keyboard.sendString("d")
                    }
                } else if (abc_id == 7) {
                    if (shift == true) {
                        keyboard.sendString("E")
                        shift = false
                    } else {
                        keyboard.sendString("e")
                    }
                } else if (abc_id == 8) {
                    if (shift == true) {
                        keyboard.sendString("E")
                        shift = false
                    } else {
                        keyboard.sendString("e")
                    }
                } else if (abc_id == 9) {
                    if (shift == true) {
                        keyboard.sendString("F")
                        shift = false
                    } else {
                        keyboard.sendString("f")
                    }
                } else if (abc_id == 10) {
                    if (shift == true) {
                        keyboard.sendString("G")
                        shift = false
                    } else {
                        keyboard.sendString("g")
                    }
                } else if (abc_id == 11) {
                    if (shift == true) {
                        keyboard.sendString("G")
                        shift = false
                    } else {
                        keyboard.sendString("g")
                    }
                } else if (abc_id == 12) {
                    if (shift == true) {
                        keyboard.sendString("H")
                        shift = false
                    } else {
                        keyboard.sendString("h")
                    }
                } else if (abc_id == 13) {
                    if (shift == true) {
                        keyboard.sendString("I")
                        shift = false
                    } else {
                        keyboard.sendString("i")
                    }
                } else if (abc_id == 14) {
                    if (shift == true) {
                        keyboard.sendString("I")
                        shift = false
                    } else {
                        keyboard.sendString("i")
                    }
                } else if (abc_id == 15) {
                    if (shift == true) {
                        keyboard.sendString("J")
                        shift = false
                    } else {
                        keyboard.sendString("j")
                    }
                } else if (abc_id == 16) {
                    if (shift == true) {
                        keyboard.sendString("K")
                        shift = false
                    } else {
                        keyboard.sendString("k")
                    }
                } else if (abc_id == 17) {
                    if (shift == true) {
                        keyboard.sendString("K")
                        shift = false
                    } else {
                        keyboard.sendString("k")
                    }
                } else if (abc_id == 18) {
                    if (shift == true) {
                        keyboard.sendString("L")
                        shift = false
                    } else {
                        keyboard.sendString("l")
                    }
                } else if (abc_id == 19) {
                    if (shift == true) {
                        keyboard.sendString("L")
                        shift = false
                    } else {
                        keyboard.sendString("l")
                    }
                } else if (abc_id == 20) {
                    if (shift == true) {
                        keyboard.sendString("M")
                        shift = false
                    } else {
                        keyboard.sendString("m")
                    }
                } else if (abc_id == 21) {
                    if (shift == true) {
                        keyboard.sendString("N")
                        shift = false
                    } else {
                        keyboard.sendString("n")
                    }
                } else if (abc_id == 22) {
                    if (shift == true) {
                        keyboard.sendString("N")
                        shift = false
                    } else {
                        keyboard.sendString("n")
                    }
                } else if (abc_id == 23) {
                    if (shift == true) {
                        keyboard.sendString("O")
                        shift = false
                    } else {
                        keyboard.sendString("o")
                    }
                } else if (abc_id == 24) {
                    if (shift == true) {
                        keyboard.sendString("P")
                        shift = false
                    } else {
                        keyboard.sendString("p")
                    }
                } else if (abc_id == 25) {
                    if (shift == true) {
                        keyboard.sendString("R")
                        shift = false
                    } else {
                        keyboard.sendString("r")
                    }
                } else if (abc_id == 26) {
                    if (shift == true) {
                        keyboard.sendString("S")
                        shift = false
                    } else {
                        keyboard.sendString("s")
                    }
                } else if (abc_id == 27) {
                    if (shift == true) {
                        keyboard.sendString("S")
                        shift = false
                    } else {
                        keyboard.sendString("s")
                    }
                } else if (abc_id == 28) {
                    if (shift == true) {
                        keyboard.sendString("T")
                        shift = false
                    } else {
                        keyboard.sendString("t")
                    }
                } else if (abc_id == 29) {
                    if (shift == true) {
                        keyboard.sendString("U")
                        shift = false
                    } else {
                        keyboard.sendString("u")
                    }
                } else if (abc_id == 30) {
                    if (shift == true) {
                        keyboard.sendString("U")
                        shift = false
                    } else {
                        keyboard.sendString("u")
                    }
                } else if (abc_id == 31) {
                    if (shift == true) {
                        keyboard.sendString("V")
                        shift = false
                    } else {
                        keyboard.sendString("v")
                    }
                } else if (abc_id == 32) {
                    if (shift == true) {
                        keyboard.sendString("Z")
                        shift = false
                    } else {
                        keyboard.sendString("z")
                    }
                } else if (abc_id == 33) {
                    if (shift == true) {
                        keyboard.sendString("Z")
                        shift = false
                    } else {
                        keyboard.sendString("z")
                    }
                } else if (abc_id == 34) {
                    keyboard.sendString(" ")
                } else if (abc_id == 35) {
                    keyboard.sendString(".")
                } else if (abc_id == 36) {
                    keyboard.sendString(",")
                } else if (abc_id == 37) {
                    keyboard.sendString("!")
                } else if (abc_id == 38) {
                    keyboard.sendString("?")
                }
                music.play(music.tonePlayable(523, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                basic.pause(100)
            }
            usid_if()
        }
    }
    loading_animation()
    bluetooth_keyboard()
} //Send any keyboard input via bluetooth
function bluetooth_keyboard_number() {
    while (bluetooth_online == true) {
        basic.clearScreen()
        basic.pause(500)
        let numberlist = [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
        ]
        num = 0
        let number_send = 0
        number_loop = true
        while (number_loop == true) {
            if (input.buttonIsPressed(Button.A)) {
                if (num == 0) {
                    num = 9
                } else {
                    num += -1
                }
            }
            if (input.buttonIsPressed(Button.B)) {
                if (num == 9) {
                    num = 0
                } else {
                    num += 1
                }
            }
            if (input.logoIsPressed()) {
                basic.showIcon(IconNames.Yes)
                if (num == 1) {
                    if (shift == true) {
                        keyboard.sendString("!")
                        shift = false
                    } else {
                        keyboard.sendString("1")
                    }
                } else if (num == 2) {
                    if (shift == true) {
                        keyboard.sendString("@")
                        shift = false
                    } else {
                        keyboard.sendString("2")
                    }
                } else if (num == 3) {
                    if (shift == true) {
                        keyboard.sendString("#")
                        shift = false
                    } else {
                        keyboard.sendString("3")
                    }
                } else if (num == 4) {
                    if (shift == true) {
                        keyboard.sendString("$")
                        shift = false
                    } else {
                        keyboard.sendString("4")
                    }
                } else if (num == 5) {
                    if (shift == true) {
                        keyboard.sendString("%")
                        shift = false
                    } else {
                        keyboard.sendString("5")
                    }
                } else if (num == 6) {
                    if (shift == true) {
                        keyboard.sendString("^")
                        shift = false
                    } else {
                        keyboard.sendString("6")
                    }
                } else if (num == 7) {
                    if (shift == true) {
                        keyboard.sendString("&")
                        shift = false
                    } else {
                        keyboard.sendString("7")
                    }
                } else if (num == 8) {
                    if (shift == true) {
                        keyboard.sendString("*")
                        shift = false
                    } else {
                        keyboard.sendString("8")
                    }
                } else if (num == 9) {
                    if (shift == true) {
                        keyboard.sendString("(")
                        shift = false
                    } else {
                        keyboard.sendString("9")
                    }
                } else if (num == 0) {
                    if (shift == true) {
                        keyboard.sendString(")")
                        shift = false
                    } else {
                        keyboard.sendString("0")
                    }
                }
                music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
            }
            if (input.buttonIsPressed(Button.AB)) {
                shift = true
                music.play(music.tonePlayable(220, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
            }
            unid_if_0_9()
        }
    }
    loading_animation()
    bluetooth_keyboard_number()
} //Send keyboard numbers via bluetooth.
function bluetooth_keyboard_arrows() {
    while (bluetooth_online == true) {
        if (input.buttonIsPressed(Button.A)) {
            keyboard.sendString(keyboard.keys(keyboard._Key.left))
            basic.pause(100)
        }
        if (input.buttonIsPressed(Button.B)) {
            keyboard.sendString(keyboard.keys(keyboard._Key.right))
            basic.pause(100)
        }
        if (input.logoIsPressed()) {
            keyboard.sendString(keyboard.keys(keyboard._Key.up))
            basic.pause(50)
        }
        if (input.pinIsPressed(TouchPin.P2)) {
            keyboard.sendString(keyboard.keys(keyboard._Key.down))
            basic.pause(50)
        }
        basic.clearScreen()
    }
    loading_animation()
    bluetooth_keyboard_arrows()
} // Control arrow keys via bluetooth.
function bluetooth_keyboard_custom() {
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
        abc = [
            "NUL",
            "a",
            "A",
            "b",
            "c",
            "C",
            "d",
            "e",
            "E",
            "f",
            "g",
            "G",
            "h",
            "i",
            "I",
            "j",
            "k",
            "K",
            "l",
            "L",
            "m",
            "n",
            "N",
            "o",
            "p",
            "r",
            "s",
            "S",
            "t",
            "u",
            "U",
            "v",
            "z",
            "Z",
            " ",
            ".",
            ",",
            "!",
            "?"]
        abc_loop = true
        while (abc_loop == true) {
            if (input.buttonIsPressed(Button.A)) {
                if (abc_id == 1) {
                    abc_id = 38
                } else {
                    abc_id += -1
                }
            }
            if (input.buttonIsPressed(Button.B)) {
                if (abc_id == 38) {
                    abc_id = 1
                } else {
                    abc_id += 1
                }
            }
            if (input.buttonIsPressed(Button.AB)) {
                shift = true
                music.play(music.tonePlayable(220, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
            }
            if (input.logoIsPressed()) {
                basic.showIcon(IconNames.Yes)
                if (abc_id == 1) {
                    if (shift == true) {
                        custom_a_button = "A"
                        shift = false
                    } else {
                        custom_a_button = "a"
                    }
                } else if (abc_id == 2) {
                    if (shift == true) {
                        custom_a_button = "A"
                        shift = false
                    } else {
                        custom_a_button = "a"
                    }
                } else if (abc_id == 3) {
                    if (shift == true) {
                        custom_a_button = "B"
                        shift = false
                    } else {
                        custom_a_button = "b"
                    }
                } else if (abc_id == 4) {
                    if (shift == true) {
                        custom_a_button = "C"
                        shift = false
                    } else {
                        custom_a_button = "c"
                    }
                } else if (abc_id == 5) {
                    if (shift == true) {
                        custom_a_button = "C"
                        shift = false
                    } else {
                        custom_a_button = "c"
                    }
                } else if (abc_id == 6) {
                    if (shift == true) {
                        custom_a_button = "D"
                        shift = false
                    } else {
                        custom_a_button = "d"
                    }
                } else if (abc_id == 7) {
                    if (shift == true) {
                        custom_a_button = "E"
                        shift = false
                    } else {
                        custom_a_button = "e"
                    }
                } else if (abc_id == 8) {
                    if (shift == true) {
                        custom_a_button = "E"
                        shift = false
                    } else {
                        custom_a_button = "e"
                    }
                } else if (abc_id == 9) {
                    if (shift == true) {
                        custom_a_button = "F"
                        shift = false
                    } else {
                        custom_a_button = "f"
                    }
                } else if (abc_id == 10) {
                    if (shift == true) {
                        custom_a_button = "G"
                        shift = false
                    } else {
                        custom_a_button = "g"
                    }
                } else if (abc_id == 11) {
                    if (shift == true) {
                        custom_a_button = "G"
                        shift = false
                    } else {
                        custom_a_button = "g"
                    }
                } else if (abc_id == 12) {
                    if (shift == true) {
                        custom_a_button = "H"
                        shift = false
                    } else {
                        custom_a_button = "h"
                    }
                } else if (abc_id == 13) {
                    if (shift == true) {
                        custom_a_button = "I"
                        shift = false
                    } else {
                        custom_a_button = "i"
                    }
                } else if (abc_id == 14) {
                    if (shift == true) {
                        custom_a_button = "I"
                        shift = false
                    } else {
                        custom_a_button = "i"
                    }
                } else if (abc_id == 15) {
                    if (shift == true) {
                        custom_a_button = "J"
                        shift = false
                    } else {
                        custom_a_button = "j"
                    }
                } else if (abc_id == 16) {
                    if (shift == true) {
                        custom_a_button = "K"
                        shift = false
                    } else {
                        custom_a_button = "k"
                    }
                } else if (abc_id == 17) {
                    if (shift == true) {
                        custom_a_button = "K"
                        shift = false
                    } else {
                        custom_a_button = "k"
                    }
                } else if (abc_id == 18) {
                    if (shift == true) {
                        custom_a_button = "L"
                        shift = false
                    } else {
                        custom_a_button = "l"
                    }
                } else if (abc_id == 19) {
                    if (shift == true) {
                        custom_a_button = "L"
                        shift = false
                    } else {
                        custom_a_button = "l"
                    }
                } else if (abc_id == 20) {
                    if (shift == true) {
                        custom_a_button = "M"
                        shift = false
                    } else {
                        custom_a_button = "m"
                    }
                } else if (abc_id == 21) {
                    if (shift == true) {
                        custom_a_button = "N"
                        shift = false
                    } else {
                        custom_a_button = "n"
                    }
                } else if (abc_id == 22) {
                    if (shift == true) {
                        custom_a_button = "N"
                        shift = false
                    } else {
                        custom_a_button = "n"
                    }
                } else if (abc_id == 23) {
                    if (shift == true) {
                        custom_a_button = "O"
                        shift = false
                    } else {
                        custom_a_button = "o"
                    }
                } else if (abc_id == 24) {
                    if (shift == true) {
                        custom_a_button = "P"
                        shift = false
                    } else {
                        custom_a_button = "p"
                    }
                } else if (abc_id == 25) {
                    if (shift == true) {
                        custom_a_button = "R"
                        shift = false
                    } else {
                        custom_a_button = "r"
                    }
                } else if (abc_id == 26) {
                    if (shift == true) {
                        custom_a_button = "S"
                        shift = false
                    } else {
                        custom_a_button = "s"
                    }
                } else if (abc_id == 27) {
                    if (shift == true) {
                        custom_a_button = "S"
                        shift = false
                    } else {
                        custom_a_button = "s"
                    }
                } else if (abc_id == 28) {
                    if (shift == true) {
                        custom_a_button = "T"
                        shift = false
                    } else {
                        custom_a_button = "t"
                    }
                } else if (abc_id == 29) {
                    if (shift == true) {
                        custom_a_button = "U"
                        shift = false
                    } else {
                        custom_a_button = "u"
                    }
                } else if (abc_id == 30) {
                    if (shift == true) {
                        custom_a_button = "U"
                        shift = false
                    } else {
                        custom_a_button = "u"
                    }
                } else if (abc_id == 31) {
                    if (shift == true) {
                        custom_a_button = "V"
                        shift = false
                    } else {
                        custom_a_button = "v"
                    }
                } else if (abc_id == 32) {
                    if (shift == true) {
                        custom_a_button = "Z"
                        shift = false
                    } else {
                        custom_a_button = "z"
                    }
                } else if (abc_id == 33) {
                    if (shift == true) {
                        custom_a_button = "Z"
                        shift = false
                    } else {
                        custom_a_button = "z"
                    }
                } else if (abc_id == 34) {
                    custom_a_button = " "
                } else if (abc_id == 35) {
                    custom_a_button = "."
                } else if (abc_id == 36) {
                    custom_a_button = ","
                } else if (abc_id == 37) {
                    custom_a_button = "!"
                } else if (abc_id == 38) {
                    custom_a_button = "?"
                }
                music.play(music.tonePlayable(523, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                abc_loop = false
            }
            usid_if()
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
        abc_loop = true
        while (abc_loop == true) {
            if (input.buttonIsPressed(Button.A)) {
                if (abc_id == 1) {
                    abc_id = 38
                } else {
                    abc_id += -1
                }
            }
            if (input.buttonIsPressed(Button.B)) {
                if (abc_id == 38) {
                    abc_id = 1
                } else {
                    abc_id += 1
                }
            }
            if (input.buttonIsPressed(Button.AB)) {
                shift = true
                music.play(music.tonePlayable(220, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
            }
            if (input.logoIsPressed()) {
                basic.showIcon(IconNames.Yes)
                if (abc_id == 1) {
                    if (shift == true) {
                        custom_logo_button = "A"
                        shift = false
                    } else {
                        custom_logo_button = "a"
                    }
                } else if (abc_id == 2) {
                    if (shift == true) {
                        custom_logo_button = "A"
                        shift = false
                    } else {
                        custom_logo_button = "a"
                    }
                } else if (abc_id == 3) {
                    if (shift == true) {
                        custom_logo_button = "B"
                        shift = false
                    } else {
                        custom_logo_button = "b"
                    }
                } else if (abc_id == 4) {
                    if (shift == true) {
                        custom_logo_button = "C"
                        shift = false
                    } else {
                        custom_logo_button = "c"
                    }
                } else if (abc_id == 5) {
                    if (shift == true) {
                        custom_logo_button = "C"
                        shift = false
                    } else {
                        custom_logo_button = "c"
                    }
                } else if (abc_id == 6) {
                    if (shift == true) {
                        custom_logo_button = "D"
                        shift = false
                    } else {
                        custom_logo_button = "d"
                    }
                } else if (abc_id == 7) {
                    if (shift == true) {
                        custom_logo_button = "E"
                        shift = false
                    } else {
                        custom_logo_button = "e"
                    }
                } else if (abc_id == 8) {
                    if (shift == true) {
                        custom_logo_button = "E"
                        shift = false
                    } else {
                        custom_logo_button = "e"
                    }
                } else if (abc_id == 9) {
                    if (shift == true) {
                        custom_logo_button = "F"
                        shift = false
                    } else {
                        custom_logo_button = "f"
                    }
                } else if (abc_id == 10) {
                    if (shift == true) {
                        custom_logo_button = "G"
                        shift = false
                    } else {
                        custom_logo_button = "g"
                    }
                } else if (abc_id == 11) {
                    if (shift == true) {
                        custom_logo_button = "G"
                        shift = false
                    } else {
                        custom_logo_button = "g"
                    }
                } else if (abc_id == 12) {
                    if (shift == true) {
                        custom_logo_button = "H"
                        shift = false
                    } else {
                        custom_logo_button = "h"
                    }
                } else if (abc_id == 13) {
                    if (shift == true) {
                        custom_logo_button = "I"
                        shift = false
                    } else {
                        custom_logo_button = "i"
                    }
                } else if (abc_id == 14) {
                    if (shift == true) {
                        custom_logo_button = "I"
                        shift = false
                    } else {
                        custom_logo_button = "i"
                    }
                } else if (abc_id == 15) {
                    if (shift == true) {
                        custom_logo_button = "J"
                        shift = false
                    } else {
                        custom_logo_button = "j"
                    }
                } else if (abc_id == 16) {
                    if (shift == true) {
                        custom_logo_button = "K"
                        shift = false
                    } else {
                        custom_logo_button = "k"
                    }
                } else if (abc_id == 17) {
                    if (shift == true) {
                        custom_logo_button = "K"
                        shift = false
                    } else {
                        custom_logo_button = "k"
                    }
                } else if (abc_id == 18) {
                    if (shift == true) {
                        custom_logo_button = "L"
                        shift = false
                    } else {
                        custom_logo_button = "l"
                    }
                } else if (abc_id == 19) {
                    if (shift == true) {
                        custom_logo_button = "L"
                        shift = false
                    } else {
                        custom_logo_button = "l"
                    }
                } else if (abc_id == 20) {
                    if (shift == true) {
                        custom_logo_button = "M"
                        shift = false
                    } else {
                        custom_logo_button = "m"
                    }
                } else if (abc_id == 21) {
                    if (shift == true) {
                        custom_logo_button = "N"
                        shift = false
                    } else {
                        custom_logo_button = "n"
                    }
                } else if (abc_id == 22) {
                    if (shift == true) {
                        custom_logo_button = "N"
                        shift = false
                    } else {
                        custom_logo_button = "n"
                    }
                } else if (abc_id == 23) {
                    if (shift == true) {
                        custom_logo_button = "O"
                        shift = false
                    } else {
                        custom_logo_button = "o"
                    }
                } else if (abc_id == 24) {
                    if (shift == true) {
                        custom_logo_button = "P"
                        shift = false
                    } else {
                        custom_logo_button = "p"
                    }
                } else if (abc_id == 25) {
                    if (shift == true) {
                        custom_logo_button = "R"
                        shift = false
                    } else {
                        custom_logo_button = "r"
                    }
                } else if (abc_id == 26) {
                    if (shift == true) {
                        custom_logo_button = "S"
                        shift = false
                    } else {
                        custom_logo_button = "s"
                    }
                } else if (abc_id == 27) {
                    if (shift == true) {
                        custom_logo_button = "S"
                        shift = false
                    } else {
                        custom_logo_button = "s"
                    }
                } else if (abc_id == 28) {
                    if (shift == true) {
                        custom_logo_button = "T"
                        shift = false
                    } else {
                        custom_logo_button = "t"
                    }
                } else if (abc_id == 29) {
                    if (shift == true) {
                        custom_logo_button = "U"
                        shift = false
                    } else {
                        custom_logo_button = "u"
                    }
                } else if (abc_id == 30) {
                    if (shift == true) {
                        custom_logo_button = "U"
                        shift = false
                    } else {
                        custom_logo_button = "u"
                    }
                } else if (abc_id == 31) {
                    if (shift == true) {
                        custom_logo_button = "V"
                        shift = false
                    } else {
                        custom_logo_button = "v"
                    }
                } else if (abc_id == 32) {
                    if (shift == true) {
                        custom_logo_button = "Z"
                        shift = false
                    } else {
                        custom_logo_button = "z"
                    }
                } else if (abc_id == 33) {
                    if (shift == true) {
                        custom_logo_button = "Z"
                        shift = false
                    } else {
                        custom_logo_button = "z"
                    }
                } else if (abc_id == 34) {
                    custom_logo_button = " "
                } else if (abc_id == 35) {
                    custom_logo_button = "."
                } else if (abc_id == 36) {
                    custom_logo_button = ","
                } else if (abc_id == 37) {
                    custom_logo_button = "!"
                } else if (abc_id == 38) {
                    custom_logo_button = "?"
                }
                music.play(music.tonePlayable(523, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                abc_loop = false
            }
            usid_if()
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
        abc_loop = true
        while (abc_loop == true) {
            if (input.buttonIsPressed(Button.A)) {
                if (abc_id == 1) {
                    abc_id = 38
                } else {
                    abc_id += -1
                }
            }
            if (input.buttonIsPressed(Button.B)) {
                if (abc_id == 38) {
                    abc_id = 1
                } else {
                    abc_id += 1
                }
            }
            if (input.buttonIsPressed(Button.AB)) {
                shift = true
                music.play(music.tonePlayable(220, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
            }
            if (input.logoIsPressed()) {
                basic.showIcon(IconNames.Yes)
                if (abc_id == 1) {
                    if (shift == true) {
                        custom_b_button = "A"
                        shift = false
                    } else {
                        custom_b_button = "a"
                    }
                } else if (abc_id == 2) {
                    if (shift == true) {
                        custom_b_button = "A"
                        shift = false
                    } else {
                        custom_b_button = "a"
                    }
                } else if (abc_id == 3) {
                    if (shift == true) {
                        custom_b_button = "B"
                        shift = false
                    } else {
                        custom_b_button = "b"
                    }
                } else if (abc_id == 4) {
                    if (shift == true) {
                        custom_b_button = "C"
                        shift = false
                    } else {
                        custom_b_button = "c"
                    }
                } else if (abc_id == 5) {
                    if (shift == true) {
                        custom_b_button = "C"
                        shift = false
                    } else {
                        custom_b_button = "c"
                    }
                } else if (abc_id == 6) {
                    if (shift == true) {
                        custom_b_button = "D"
                        shift = false
                    } else {
                        custom_b_button = "d"
                    }
                } else if (abc_id == 7) {
                    if (shift == true) {
                        custom_b_button = "E"
                        shift = false
                    } else {
                        custom_b_button = "e"
                    }
                } else if (abc_id == 8) {
                    if (shift == true) {
                        custom_b_button = "E"
                        shift = false
                    } else {
                        custom_b_button = "e"
                    }
                } else if (abc_id == 9) {
                    if (shift == true) {
                        custom_b_button = "F"
                        shift = false
                    } else {
                        custom_b_button = "f"
                    }
                } else if (abc_id == 10) {
                    if (shift == true) {
                        custom_b_button = "G"
                        shift = false
                    } else {
                        custom_b_button = "g"
                    }
                } else if (abc_id == 11) {
                    if (shift == true) {
                        custom_b_button = "G"
                        shift = false
                    } else {
                        custom_b_button = "g"
                    }
                } else if (abc_id == 12) {
                    if (shift == true) {
                        custom_b_button = "H"
                        shift = false
                    } else {
                        custom_b_button = "h"
                    }
                } else if (abc_id == 13) {
                    if (shift == true) {
                        custom_b_button = "I"
                        shift = false
                    } else {
                        custom_b_button = "i"
                    }
                } else if (abc_id == 14) {
                    if (shift == true) {
                        custom_b_button = "I"
                        shift = false
                    } else {
                        custom_b_button = "i"
                    }
                } else if (abc_id == 15) {
                    if (shift == true) {
                        custom_b_button = "J"
                        shift = false
                    } else {
                        custom_b_button = "j"
                    }
                } else if (abc_id == 16) {
                    if (shift == true) {
                        custom_b_button = "K"
                        shift = false
                    } else {
                        custom_b_button = "k"
                    }
                } else if (abc_id == 17) {
                    if (shift == true) {
                        custom_b_button = "K"
                        shift = false
                    } else {
                        custom_b_button = "k"
                    }
                } else if (abc_id == 18) {
                    if (shift == true) {
                        custom_b_button = "L"
                        shift = false
                    } else {
                        custom_b_button = "l"
                    }
                } else if (abc_id == 19) {
                    if (shift == true) {
                        custom_b_button = "L"
                        shift = false
                    } else {
                        custom_b_button = "l"
                    }
                } else if (abc_id == 20) {
                    if (shift == true) {
                        custom_b_button = "M"
                        shift = false
                    } else {
                        custom_b_button = "m"
                    }
                } else if (abc_id == 21) {
                    if (shift == true) {
                        custom_b_button = "N"
                        shift = false
                    } else {
                        custom_b_button = "n"
                    }
                } else if (abc_id == 22) {
                    if (shift == true) {
                        custom_b_button = "N"
                        shift = false
                    } else {
                        custom_b_button = "n"
                    }
                } else if (abc_id == 23) {
                    if (shift == true) {
                        custom_b_button = "O"
                        shift = false
                    } else {
                        custom_b_button = "o"
                    }
                } else if (abc_id == 24) {
                    if (shift == true) {
                        custom_b_button = "P"
                        shift = false
                    } else {
                        custom_b_button = "p"
                    }
                } else if (abc_id == 25) {
                    if (shift == true) {
                        custom_b_button = "R"
                        shift = false
                    } else {
                        custom_b_button = "r"
                    }
                } else if (abc_id == 26) {
                    if (shift == true) {
                        custom_b_button = "S"
                        shift = false
                    } else {
                        custom_b_button = "s"
                    }
                } else if (abc_id == 27) {
                    if (shift == true) {
                        custom_b_button = "S"
                        shift = false
                    } else {
                        custom_b_button = "s"
                    }
                } else if (abc_id == 28) {
                    if (shift == true) {
                        custom_b_button = "T"
                        shift = false
                    } else {
                        custom_b_button = "t"
                    }
                } else if (abc_id == 29) {
                    if (shift == true) {
                        custom_b_button = "U"
                        shift = false
                    } else {
                        custom_b_button = "u"
                    }
                } else if (abc_id == 30) {
                    if (shift == true) {
                        custom_b_button = "U"
                        shift = false
                    } else {
                        custom_b_button = "u"
                    }
                } else if (abc_id == 31) {
                    if (shift == true) {
                        custom_b_button = "V"
                        shift = false
                    } else {
                        custom_b_button = "v"
                    }
                } else if (abc_id == 32) {
                    if (shift == true) {
                        custom_b_button = "Z"
                        shift = false
                    } else {
                        custom_b_button = "z"
                    }
                } else if (abc_id == 33) {
                    if (shift == true) {
                        custom_b_button = "Z"
                        shift = false
                    } else {
                        custom_b_button = "z"
                    }
                } else if (abc_id == 34) {
                    custom_b_button = " "
                } else if (abc_id == 35) {
                    custom_b_button = "."
                } else if (abc_id == 36) {
                    custom_b_button = ","
                } else if (abc_id == 37) {
                    custom_b_button = "!"
                } else if (abc_id == 38) {
                    custom_b_button = "?"
                }
                music.play(music.tonePlayable(523, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                abc_loop = false
            }
            usid_if()
        }
        basic.pause(200)
        basic.clearScreen()
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                keyboard.sendString(custom_a_button)
            }
            if (input.buttonIsPressed(Button.B)) {
                keyboard.sendString(custom_b_button)
            }
            if (input.logoIsPressed()) {
                keyboard.sendString(custom_logo_button)
            }
            basic.pause(150)
        }
    }
    loading_animation()
    bluetooth_keyboard_custom()
} // Custom keyboard input.


function create_strig() {
    basic.clearScreen()
    abc = [
        "NUL",
        "a",
        "A",
        "b",
        "c",
        "C",
        "d",
        "e",
        "E",
        "f",
        "g",
        "G",
        "h",
        "i",
        "I",
        "j",
        "k",
        "K",
        "l",
        "L",
        "m",
        "n",
        "N",
        "o",
        "p",
        "r",
        "s",
        "S",
        "t",
        "u",
        "U",
        "v",
        "z",
        "Z",
        " ",
        ".",
        ",",
        "!",
        "?"]
    abc_loop = true
    basic.pause(500)
    while (abc_loop == true) {
        if (input.buttonIsPressed(Button.A)) {
            if (abc_id == 1) {
                abc_id = 38
            } else {
                abc_id += -1
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            if (abc_id == 38) {
                abc_id = 1
            } else {
                abc_id += 1
            }
        }
        if (input.buttonIsPressed(Button.AB)) {
            abc_loop = false
        }
        if (input.logoIsPressed()) {
            basic.showIcon(IconNames.Yes)
            inputlist.push(abc[abc_id])
            music.play(music.tonePlayable(523, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
            basic.pause(100)
        }
        usid_if()
    }
    text = ">" + inputlist[0] + inputlist[1] + inputlist[2] + inputlist[3] + inputlist[4] + inputlist[5] + inputlist[6] + inputlist[7] + inputlist[8] + inputlist[9] + inputlist[10] + inputlist[11] + inputlist[12] + inputlist[13] + inputlist[14] + inputlist[15] + inputlist[16] + inputlist[17] + inputlist[18] + inputlist[19] + inputlist[20] + inputlist[21] + inputlist[22] + inputlist[23] + inputlist[24] + inputlist[25] + inputlist[26] + inputlist[27] + inputlist[28] + inputlist[29] + inputlist[30] + inputlist[31] + inputlist[32] + inputlist[33] + inputlist[34] + inputlist[35] + inputlist[36] + inputlist[37] + inputlist[38] + inputlist[39] + inputlist[40] + inputlist[41] + inputlist[42] + inputlist[43] + inputlist[44] + inputlist[45] + inputlist[46] + inputlist[47] + inputlist[48] + inputlist[49] + inputlist[50]
    while (true) {
        basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
        if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
            basic.showString(text)
        }
    }
} //Create a temp-saved string
function create_number() {
    basic.clearScreen()
    basic.pause(500)
    let numberlist = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
    ]
    num = 0
    let number_send = 0
    number_loop = true
    while (number_loop == true) {
        if (input.buttonIsPressed(Button.A)) {
            if (num == 0) {
                num = 9
            } else {
                num += -1
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            if (num == 9) {
                num = 0
            } else {
                num += 1
            }
        }
        if (input.logoIsPressed()) {
            basic.showIcon(IconNames.Yes)
            music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
            list.push(numberlist[num])
        }
        if (input.buttonIsPressed(Button.AB)) {
            if (list.length == 1) {
                number_send = list[0]
            } else if (list.length == 2) {
                number_send = list[0] * 10 + list[1]
            } else if (list.length == 3) {
                number_send = list[0] * 100
                number_send += list[1] * 10 + list[2]
            } else if (list.length == 4) {
                number_send = list[0] * 1000
                number_send += list[1] * 100
                number_send += list[2] * 10 + list[3]
            } else if (list.length == 5) {
                number_send = list[0] * 10000
                number_send += list[1] * 1000
                number_send += list[2] * 100
                number_send += list[3] * 10 + list[4]
            } else if (list.length == 6) {
                number_send = list[0] * 100000
                number_send += list[1] * 10000
                number_send += list[2] * 1000
                number_send += list[3] * 100
                number_send += list[4] * 10 + list[5]
            } else if (list.length == 7) {
                number_send = list[0] * 1000000
                number_send += list[1] * 100000
                number_send += list[2] * 10000
                number_send += list[3] * 1000
                number_send += list[4] * 100
                number_send += list[5] * 10 + list[6]
            } else if (list.length == 8) {
                number_send = list[0] * 10000000
                number_send += list[1] * 1000000
                number_send += list[2] * 100000
                number_send += list[3] * 10000
                number_send += list[4] * 1000
                number_send += list[5] * 100
                number_send += list[6] * 10 + list[7]
            } else {
                basic.showIcon(IconNames.No)
            }
            number_loop = false
        }
        unid_if_0_9()
    }
    while (true) {
        basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
        if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
            basic.showNumber(number_send)
        }
    }
} //Create a temp-saved number
function create_image() {
    music.setBuiltInSpeakerEnabled(true)
    let pen_up = false
    let direction = 0
    turtle.setPosition(2, 2)
    turtle.setBrightness(20)
    turtle.pen(TurtlePenMode.Down)
    turtle.home()
    let turtle_drawing_now = true
    let turtle_input: number[] = []
    while (turtle_drawing_now == true) {
        if (input.buttonIsPressed(Button.A)) {
            turtle.turnLeft()
            if (direction == 0) {
                direction = 3
            } else {
                direction += -1
            }
            turtle_input.push(0)
            music.play(music.tonePlayable(220, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
        }
        if (input.buttonIsPressed(Button.B)) {
            turtle.turnRight()
            turtle_input.push(1)
            if (direction == 3) {
                direction = 0
            } else {
                direction += 1
            }
            music.play(music.tonePlayable(220, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
        }
        if (input.buttonIsPressed(Button.AB)) {
            turtle_input.push(2)
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
            turtle_input.push(3)
            turtle.forward(1)
        }
        if (input.isGesture(Gesture.Shake)) {
            turtle_input.push(4)
            turtle.back(1)
        }
        if (input.pinIsPressed(TouchPin.P2)) {
            turtle_drawing_now = false
        }
        basic.pause(200)
    }
    basic.clearScreen()
    turtle.setPosition(2, 2)
    if (direction == 1) {
        turtle.turnLeft()
    } else if (direction == 2) {
        turtle.turnLeft()
        turtle.turnLeft()
    } else if (direction == 3) {
        turtle.turnRight()
    }
    while (true) {
        basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
        if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
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
    }
} //Create a temp-saved image
function music_melody8() {
    music.setBuiltInSpeakerEnabled(true)
    basic.clearScreen()
    basic.pause(300)
    num = 1
    unid_type = 1
    while (true) {
        if (input.buttonIsPressed(Button.A)) {
            if (num == 1) {
                num = 10
            } else {
                num += -1
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            if (num == 10) {
                num = 1
            } else {
                num += 1
            }
        }
        if (input.logoIsPressed()) {
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
        }
        unid_if_1_23()
    }
} //Built in mucic 8
function music_melody() {
    music.setBuiltInSpeakerEnabled(true)
    basic.clearScreen()
    basic.pause(300)
    num = 1
    unid_type = 1
    while (true) {
        if (input.buttonIsPressed(Button.A)) {
            if (num == 1) {
                num = 20
            } else {
                num += -1
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            if (num == 20) {
                num = 1
            } else {
                num += 1
            }
        }
        if (input.logoIsPressed()) {
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
        }
        unid_if_1_23()
    }
} //Built in music
function music_melodyV2() {
    music.setBuiltInSpeakerEnabled(true)
    basic.clearScreen()
    basic.pause(300)
    num = 1
    unid_type = 1
    while (true) {
        if (input.buttonIsPressed(Button.A)) {
            if (num == 1) {
                num = 10
            } else {
                num += -1
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            if (num == 10) {
                num = 1
            } else {
                num += 1
            }
        }
        if (input.logoIsPressed()) {
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
        }
        unid_if_1_23()
    }
} //Built in music V2
function music_sFX() {
    music.setBuiltInSpeakerEnabled(true)
    basic.clearScreen()
    basic.pause(300)
    num = 1
    unid_type = 1
    while (true) {
        if (input.buttonIsPressed(Button.A)) {
            if (num == 1) {
                num = 10
            } else {
                num += -1
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            if (num == 10) {
                num = 1
            } else {
                num += 1
            }
        }
        if (input.logoIsPressed()) {
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
        }
        unid_if_1_23()
    }
} //Built in sFX
function custom_music_selection() {
    selected_create_music = 1
    while (menu_select == true) {
        if (selected_create_music == 1) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(3, 0)
                    images.createImage(`
                    . . . . .
                    . . # # .
                    . . # . #
                    # # # . .
                    # # # . .
                    `).showImage(0)
                    draw_mini_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(3, 0)
                    images.createImage(`
                    . . . . .
                    . . # # .
                    . . # . #
                    # # # . .
                    # # # . .
                    `).scrollImage(1, 45)
                    draw_mini_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . . # # .
                . . # . #
                # # # . .
                # # # . .
                `)
                draw_mini_menu()
            }
            led.plot(1, 0)
        } else if (selected_create_music == 2) {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(1, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    . # # # .
                    # . . . #
                    # . . . #
                    `).showImage(0)
                    draw_mini_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(1, 0)
                    images.createImage(`
                    . . . . .
                    . . . . .
                    . # # # .
                    # . . . #
                    # . . . #
                    `).scrollImage(1, 45)
                    draw_mini_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . . . . .
                . # # # .
                # . . . #
                # . . . #
                `)
                draw_mini_menu()
            }
            led.plot(2, 0)
        } else {
            if (animation_scroll == true) {
                if (abuttonpressed == true) {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . . # .
                    # # # # #
                    . . . # .
                    . . . . .
                    `).showImage(0)
                    draw_mini_menu()
                    abuttonpressed = false
                } else {
                    led.unplot(2, 0)
                    images.createImage(`
                    . . . . .
                    . . . # .
                    # # # # #
                    . . . # .
                    . . . . .
                    `).scrollImage(1, 45)
                    draw_mini_menu()
                }
            } else {
                basic.showLeds(`
                . . . . .
                . . . # .
                # # # # #
                . . . # .
                . . . . .
                `)
                draw_mini_menu()
            }
            led.plot(3, 0)
        }
        waiting_for_input = true
        while (waiting_for_input == true) {
            if (input.buttonIsPressed(Button.A)) {
                abuttonpressed = true
                if (selected_create_music == 1) {
                    selected_create_music = 1
                    waiting_for_input = false
                } else {
                    selected_create_music += -1
                    waiting_for_input = false
                }
            } else if (input.buttonIsPressed(Button.B)) {
                if (selected_create_music == 3) {
                    selected_create_music = 3
                    abuttonpressed = true
                    waiting_for_input = false
                } else {
                    selected_create_music += 1
                    waiting_for_input = false
                }
            } else if (input.logoIsPressed()) {
                waiting_for_input = false
                menu_select = false
            }
        }
    }
    if (selected_create_music == 1) {
        tune()
    } else if (selected_create_music == 2) {
        rest()
    } else {
        melody_play()
    }
} //Custom music selection.
function tune() {
    music.setBuiltInSpeakerEnabled(true)
    basic.clearScreen()
    basic.pause(300)
    custom_music.push(1)
    num = 1
    unid_type = 1
    while (true) {
        if (input.buttonIsPressed(Button.AB)) {
            if (num == 1) {
                music.play(music.tonePlayable(131, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            } else if (num == 2) {
                music.play(music.tonePlayable(147, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            } else if (num == 3) {
                music.play(music.tonePlayable(165, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            } else if (num == 4) {
                music.play(music.tonePlayable(175, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            } else if (num == 5) {
                music.play(music.tonePlayable(196, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            } else if (num == 6) {
                music.play(music.tonePlayable(220, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            } else if (num == 7) {
                music.play(music.tonePlayable(247, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            } else if (num == 8) {
                music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            } else if (num == 9) {
                music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            } else if (num == 10) {
                music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            } else if (num == 11) {
                music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            } else if (num == 12) {
                music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            } else if (num == 13) {
                music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            } else if (num == 14) {
                music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            } else if (num == 15) {
                music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            } else if (num == 16) {
                music.play(music.tonePlayable(587, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            } else if (num == 17) {
                music.play(music.tonePlayable(659, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            } else if (num == 18) {
                music.play(music.tonePlayable(698, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            } else if (num == 19) {
                music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            } else if (num == 20) {
                music.play(music.tonePlayable(880, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            } else if (num == 21) {
                music.play(music.tonePlayable(998, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            }
        }
        if (input.buttonIsPressed(Button.A)) {
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
            if (num == 1) {
                custom_music_tune.push(1)
                tune_music = 131
            } else if (num == 2) {
                custom_music_tune.push(2)
                tune_music = 147
            } else if (num == 3) {
                custom_music_tune.push(3)
                tune_music = 165
            } else if (num == 4) {
                custom_music_tune.push(4)
                tune_music = 175
            } else if (num == 5) {
                custom_music_tune.push(5)
                tune_music = 196
            } else if (num == 6) {
                custom_music_tune.push(6)
                tune_music = 220
            } else if (num == 7) {
                custom_music_tune.push(7)
                tune_music = 247
            } else if (num == 8) {
                custom_music_tune.push(8)
                tune_music = 262
            } else if (num == 9) {
                custom_music_tune.push(9)
                tune_music = 294
            } else if (num == 10) {
                custom_music_tune.push(10)
                tune_music = 330
            } else if (num == 11) {
                custom_music_tune.push(11)
                tune_music = 349
            } else if (num == 12) {
                custom_music_tune.push(12)
                tune_music = 392
            } else if (num == 13) {
                custom_music_tune.push(13)
                tune_music = 440
            } else if (num == 14) {
                custom_music_tune.push(14)
                tune_music = 494
            } else if (num == 15) {
                custom_music_tune.push(15)
                tune_music = 523
            } else if (num == 16) {
                custom_music_tune.push(16)
                tune_music = 587
            } else if (num == 17) {
                custom_music_tune.push(17)
                tune_music = 659
            } else if (num == 18) {
                custom_music_tune.push(18)
                tune_music = 698
            } else if (num == 19) {
                custom_music_tune.push(19)
                tune_music = 784
            } else if (num == 20) {
                custom_music_tune.push(20)
                tune_music = 880
            } else if (num == 21) {
                custom_music_tune.push(21)
                tune_music = 988
            }
            break;
        }
        if (num == 1) {
            basic.showLeds(`
            . . # # #
            . . # . .
            . . # . .
            . . # . .
            # . # # #
            `)
        } else if (num == 2) {
            basic.showLeds(`
            . . # # .
            . . # . #
            . . # . #
            . . # . #
            # . # # .
            `)
        } else if (num == 3) {
            basic.showLeds(`
            . . # # #
            . . # . .
            . . # # #
            . . # . .
            # . # # #
            `)
        } else if (num == 4) {
            basic.showLeds(`
            . . # # #
            . . # . .
            . . # # #
            . . # . .
            # . # . .
            `)
        } else if (num == 5) {
            basic.showLeds(`
            . . # # #
            . . # . .
            . . # # #
            . . # . #
            # . # # #
            `)
        } else if (num == 6) {
            basic.showLeds(`
            . . # # #
            . . # . #
            . . # # #
            . . # . #
            # . # . #
            `)
        } else if (num == 7) {
            basic.showLeds(`
            . . # # #
            . . # . #
            . . # # .
            . . # . #
            # . # # #
            `)
        } else if (num == 8) {
            basic.showLeds(`
            . . # # #
            . . # . .
            . . # . .
            # . # . .
            # . # # #
            `)
        } else if (num == 9) {
            basic.showLeds(`
            . . # # .
            . . # . #
            . . # . #
            # . # . #
            # . # # .
            `)
        } else if (num == 10) {
            basic.showLeds(`
            . . # # #
            . . # . .
            . . # # #
            # . # . .
            # . # # #
            `)
        } else if (num == 11) {
            basic.showLeds(`
            . . # # #
            . . # . .
            . . # # #
            # . # . .
            # . # . .
            `)
        } else if (num == 12) {
            basic.showLeds(`
            . . # # #
            . . # . .
            . . # # #
            # . # . #
            # . # # #
            `)
        } else if (num == 13) {
            basic.showLeds(`
            . . # # #
            . . # . #
            . . # # #
            # . # . #
            # . # . #
            `)
        } else if (num == 14) {
            basic.showLeds(`
            . . # # #
            . . # . #
            . . # # .
            # . # . #
            # . # # #
            `)
        } else if (num == 15) {
            basic.showLeds(`
            . . # # #
            . . # . .
            # . # . .
            # . # . .
            # . # # #
            `)
        } else if (num == 16) {
            basic.showLeds(`
            . . # # .
            . . # . #
            # . # . #
            # . # . #
            # . # # .
            `)
        } else if (num == 17) {
            basic.showLeds(`
            . . # # #
            . . # . .
            # . # # #
            # . # . .
            # . # # #
            `)
        } else if (num == 18) {
            basic.showLeds(`
            . . # # #
            . . # . .
            # . # # #
            # . # . .
            # . # . .
            `)
        } else if (num == 19) {
            basic.showLeds(`
            . . # # #
            . . # . .
            # . # # #
            # . # . #
            # . # # #
            `)
        } else if (num == 20) {
            basic.showLeds(`
            . . # # #
            . . # . #
            # . # # #
            # . # . #
            # . # . #
            `)
        } else if (num == 21) {
            basic.showLeds(`
            . . # # #
            . . # . #
            # . # # .
            # . # . #
            # . # # #
            `)
        }
    }
    beat()
} //Tune selection.
function beat() {
    music.setBuiltInSpeakerEnabled(true)
    basic.clearScreen()
    basic.pause(300)
    num = 1
    unid_type = 1
    while (true) {
        if (input.buttonIsPressed(Button.AB)) {
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
        }
        if (input.buttonIsPressed(Button.A)) {
            if (num == 1) {
                num = 7
            } else {
                num += -1
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            if (num == 7) {
                num = 1
            } else {
                num += 1
            }
        }
        if (input.logoIsPressed()) {
            if (num == 1) {
                custom_music_beat.push(1)
            } else if (num == 2) {
                custom_music_beat.push(2)
            } else if (num == 3) {
                custom_music_beat.push(3)
            } else if (num == 4) {
                custom_music_beat.push(4)
            } else if (num == 5) {
                custom_music_beat.push(5)
            } else if (num == 6) {
                custom_music_beat.push(6)
            } else if (num == 7) {
                custom_music_beat.push(7)
            }
            break;
        }
        if (num == 1) {
            basic.showLeds(`
            . . . # .
            . . # # .
            . . . # .
            . . . # .
            . . . # .
            `)
        } else if (num == 2) {
            basic.showLeds(`
            # . . # #
            # . . . #
            # . . # #
            # . . # .
            # . . # #
            `)
        } else if (num == 3) {
            basic.showLeds(`
            # . # . #
            # . # . #
            # . # # #
            # . . . #
            # . . . #
            `)
        } else if (num == 4) {
            basic.showLeds(`
            # . # # #
            # . # . #
            # . # # #
            # . # . #
            # . # # #
            `)
        } else if (num == 5) {
            basic.showLeds(`
            # . # # #
            # . # . .
            # . # # #
            # . # . #
            # . # # #
            `)
        } else if (num == 6) {
            basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
        } else if (num == 7) {
            basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
        }
    }
    basic.pause(200)
    menu_select = true
    abuttonpressed = true
    custom_music_selection()
} //Break selection.
function rest() {
    music.setBuiltInSpeakerEnabled(true)
    basic.clearScreen()
    custom_music.push(2)
    basic.pause(300)
    num = 1
    unid_type = 1
    while (true) {
        if (input.buttonIsPressed(Button.AB)) {
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
        }
        if (input.buttonIsPressed(Button.A)) {
            if (num == 1) {
                num = 7
            } else {
                num += -1
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            if (num == 7) {
                num = 1
            } else {
                num += 1
            }
        }
        if (input.logoIsPressed()) {
            if (num == 1) {
                custom_beat.push(1)
            } else if (num == 2) {
                custom_beat.push(2)
            } else if (num == 3) {
                custom_beat.push(3)
            } else if (num == 4) {
                custom_beat.push(4)
            } else if (num == 5) {
                custom_beat.push(5)
            } else if (num == 6) {
                custom_beat.push(6)
            } else if (num == 7) {
                custom_beat.push(7)
            }
            break;
        }
        if (num == 1) {
            basic.showLeds(`
            . . . # .
            . . # # .
            . . . # .
            . . . # .
            . . . # .
            `)
        } else if (num == 2) {
            basic.showLeds(`
            # . . # #
            # . . . #
            # . . # #
            # . . # .
            # . . # #
            `)
        } else if (num == 3) {
            basic.showLeds(`
            # . # . #
            # . # . #
            # . # # #
            # . . . #
            # . . . #
            `)
        } else if (num == 4) {
            basic.showLeds(`
            # . # # #
            # . # . #
            # . # # #
            # . # . #
            # . # # #
            `)
        } else if (num == 5) {
            basic.showLeds(`
            # . # # #
            # . # . .
            # . # # #
            # . # . #
            # . # # #
            `)
        } else if (num == 6) {
            basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
        } else if (num == 7) {
            basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
        }
    }
    basic.pause(200)
    menu_select = true
    abuttonpressed = true
    custom_music_selection()
} //Rest selection.
function melody_play() {
    while (true) {
        if (custom_music[0] == 1) {
            if (custom_music_tune[0] == 1) {
                tune_music = 131
                play_tone()
            } else if (custom_music_tune[0] == 2) {
                tune_music = 147
                play_tone()
            } else if (custom_music_tune[0] == 3) {
                tune_music = 165
                play_tone()
            } else if (custom_music_tune[0] == 4) {
                tune_music = 175
                play_tone()
            } else if (custom_music_tune[0] == 5) {
                tune_music = 196
                play_tone()
            } else if (custom_music_tune[0] == 6) {
                tune_music = 220
                play_tone()
            } else if (custom_music_tune[0] == 7) {
                tune_music = 247
                play_tone()
            } else if (custom_music_tune[0] == 8) {
                tune_music = 262
                play_tone()
            } else if (custom_music_tune[0] == 9) {
                tune_music = 294
                play_tone()
            } else if (custom_music_tune[0] == 10) {
                tune_music = 330
                play_tone()
            } else if (custom_music_tune[0] == 11) {
                tune_music = 349
                play_tone()
            } else if (custom_music_tune[0] == 12) {
                tune_music = 392
                play_tone()
            } else if (custom_music_tune[0] == 13) {
                tune_music = 440
                play_tone()
            } else if (custom_music_tune[0] == 14) {
                tune_music = 494
                play_tone()
            } else if (custom_music_tune[0] == 15) {
                tune_music = 523
                play_tone()
            } else if (custom_music_tune[0] == 16) {
                tune_music = 587
                play_tone()
            } else if (custom_music_tune[0] == 17) {
                tune_music = 659
                play_tone()
            } else if (custom_music_tune[0] == 18) {
                tune_music = 698
                play_tone()
            } else if (custom_music_tune[0] == 19) {
                tune_music = 784
                play_tone()
            } else if (custom_music_tune[0] == 20) {
                tune_music = 880
                play_tone()
            } else if (custom_music_tune[0] == 21) {
                tune_music = 998
                play_tone()
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
    }
} //Play the created melody.
function play_tone() {
    if (custom_music_beat[0] == 1) {
        music.play(music.tonePlayable(tune_music, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (custom_music_beat[0] == 2) {
        music.play(music.tonePlayable(tune_music, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    } else if (custom_music_beat[0] == 3) {
        music.play(music.tonePlayable(tune_music, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    } else if (custom_music_beat[0] == 4) {
        music.play(music.tonePlayable(tune_music, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    } else if (custom_music_beat[0] == 5) {
        music.play(music.tonePlayable(tune_music, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
    } else if (custom_music_beat[0] == 6) {
        music.play(music.tonePlayable(tune_music, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    } else if (custom_music_beat[0] == 7) {
        music.play(music.tonePlayable(tune_music, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    }
    custom_music_beat.removeAt(0)
} //Play tone.


basic.forever(function () {
    if (settings_auto_brigthness == true) {
        if (true) {
            vrs = input.lightLevel()
            if (vrs >= 50) {
                led.setBrightness(50)
            }
            if (vrs >= 100) {
                led.setBrightness(100)
            }
            if (vrs >= 150) {
                led.setBrightness(150)
            }
            if (vrs >= 200) {
                led.setBrightness(200)
            }
            if (vrs >= 225) {
                led.setBrightness(255)
            }
        }
    }
}) //Auto-Brightness
function settings_test_input() {
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
    }
} //Test all inputs.
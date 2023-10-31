function loading_animation() {
    led.plot(2, 0)
    basic.pause(50)
    led.unplot(2, 0)
    led.plot(3, 0)
    basic.pause(50)
    led.unplot(3, 0)
    led.plot(4, 1)
    basic.pause(50)
    led.unplot(4, 1)
    led.plot(4, 2)
    basic.pause(50)
    led.unplot(4, 2)
    led.plot(4, 3)
    basic.pause(50)
    led.unplot(4, 3)
    led.plot(3, 4)
    basic.pause(50)
    led.unplot(3, 4)
    led.plot(2, 4)
    basic.pause(50)
    led.unplot(2, 4)
    led.plot(1, 4)
    basic.pause(50)
    led.unplot(1, 4)
    led.plot(0, 3)
    basic.pause(50)
    led.unplot(0, 3)
    led.plot(0, 2)
    basic.pause(50)
    led.unplot(0, 2)
    led.plot(0, 1)
    basic.pause(50)
    led.unplot(0, 1)
    led.plot(1, 0)
    basic.pause(50)
    led.unplot(1, 0)
}
function draw_menu(){
    led.plotBrightness(0, 0, 20)
    led.plotBrightness(1, 0, 20)
    led.plotBrightness(2, 0, 20)
    led.plotBrightness(3, 0, 20)
    led.plotBrightness(4, 0, 20)
}
function menu_select_menu() {
    while (menu_select == true) {
        if (selected_menu == 1) {
            basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        # # # # #
        # . . . #
        `)
        } else if (selected_menu == 2) {
            basic.showLeds(`
        . . . . .
        . # . . .
        # . . . .
        . # . # .
        # . # . .
        `)
        } else if (selected_menu == 3) {
            basic.showLeds(`
            . . . . .
            . . # . .
            # # # # #
            . # # # .
            # . # . #`)
        } else if (selected_menu == 4) {
            basic.showLeds(`
            . . . . .
            . . . . #
            . . . . #
            . . # . #
            # . # . #
            `)
        } else {
            basic.showLeds(`
        . . . . .
        . # . # .
        # . . . .
        . # . # .
        # . # . .
        `)
        }
        draw_menu()
        if (selected_menu == 1){
            led.plot(0,0)
        } else if (selected_menu == 2){
            led.plot(1,0)
        } else if (selected_menu == 3){
            led.plot(2,0)
        } else if (selected_menu == 4){
            led.plot(3,0)
        } else {
            led.plot(4,0)
        }
        waiting_for_input = true
        while (waiting_for_input == true) {
            if (input.buttonIsPressed(Button.A)){
                if (selected_menu == 1) {
                    selected_menu = 5
                    waiting_for_input = false
                } else {
                    selected_menu += -1
                    waiting_for_input = false
                }
            } else if (input.buttonIsPressed(Button.B)) {
                if (selected_menu == 5) {
                    selected_menu = 1
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
    if (selected_menu == 1){
        menu_select = true
        game_select_menu()
    } else if (selected_menu == 2) {
        menu_select = true
        tool_select_menu()
    } else if (selected_menu == 3) {
        turtle_main()
    } else if (selected_menu == 4) {
        radio_main()
    } else {

    }
}
function game_select_menu() {
    while (menu_select == true) {
        if (game_mode == 0) {
            basic.showLeds(`
        . . . . .
        . # . . .
        # # # # #
        . # . . #
        . . . # #
        `)
        } else if (game_mode == 1) {
            basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        . . # . .
        `)
        led.plotBrightness(2, 3, 20)
        } else if (game_mode == 2) {
            basic.showLeds(`
            . . . . .
            . . . # .
            . . . # .
            . . . . .
            . . . # .
            `)
            led.plotBrightness(1, 3, 20)
        } else if (game_mode == 3) {
            basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # # . .
            `)
            led.plotBrightness(3,3,20)
        } else if (game_mode == 4) {
            basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
        } else if (game_mode == 5) {
            basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        # . . . .
        # . . . .
        `)
        } else if (game_mode == 6) {
            basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . # . .
        `)
        } else {
            basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            # . . . .
            `)
            led.plotBrightness(4,4,20)
        }
        draw_menu()
        if (game_mode == 0) {
            led.plot(0, 0)
        } else if (game_mode == 1) {
            led.plot(1, 0)
        } else if (game_mode == 2) {
            led.plot(2, 0)
        } else if (game_mode == 3) {
            led.plot(2, 0)
        } else if (game_mode == 4) {
            led.plot(2, 0)
        } else if (game_mode == 5) {
            led.plot(2, 0)
        } else if (game_mode == 6) {
            led.plot(3, 0)
        } else {
            led.plot(4,0)
        }
        waiting_for_input = true
        while (waiting_for_input == true) {
            if (input.buttonIsPressed(Button.A)) {
                if (game_mode == 0) {
                    game_mode = 7
                    waiting_for_input = false
                } else {
                    game_mode += -1
                    waiting_for_input = false
                }
            } else if (input.buttonIsPressed(Button.B)) {
                if (game_mode == 7) {
                    game_mode = 0
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
        menu_select_menu()
    } else if (game_mode == 1) {

    } else if (game_mode == 2) {

    } else if (game_mode == 3) {

    } else if (game_mode == 4) {

    } else if (game_mode == 5) {

    } else if (game_mode == 6) {

    } else {

    }
}
function tool_select_menu () {
    while (menu_select == true) {
        if (selected_tool == 0) {
            basic.showLeds(`
        . . . . .
        . # . . .
        # # # # #
        . # . . #
        . . . # #
        `)
        } else if (selected_tool == 1) {
            basic.showLeds(`
        . . . . .
        . # # . #
        # . . . .
        # . . . .
        . # # . .
        `)
        } else if (selected_tool == 2) {
            basic.showLeds(`
            . . . . .
            . # # # .
            # . . . #
            . # . # .
            . # # # .
            `)
        } else if (selected_tool == 3) {
            basic.showLeds(`
            . . . . .
            . # . # .
            . # . . .
            # # # . .
            . # . . .
            `)
        } else if (selected_tool == 4) {
            basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        `)
        } else if (selected_tool == 5) {
            basic.showLeds(`
        . . . . .
        . . . . .
        # . # . .
        . # . . .
        # . # . .
        `)
        } else if (selected_tool == 6) {
            basic.showLeds(`
        . . . . .
        # . # . .
        # # # . .
        . # . . .
        # # . . .
        `)
        } else if (selected_tool == 7) {
            basic.showLeds(`
            . . . . .
            # # # . .
            . # . . .
            # . . . .
            # # # . .
            `)
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
        if (selected_tool == 0) {
            led.plot(0, 0)
        } else if (selected_tool == 1) {
            led.plot(1, 0)
        } else if (selected_tool == 2) {
            led.plot(2, 0)
        } else if (selected_tool == 3) {
            led.plot(2, 0)
        } else if (selected_tool == 4) {
            led.plot(2, 0)
        } else if (selected_tool == 5) {
            led.plot(2, 0)
        } else if (selected_tool == 6) {
            led.plot(2, 0)
        } else if (selected_tool == 7) {
            led.plot(3, 0)
        } else {
            led.plot(4, 0)
        }
        waiting_for_input = true
        while (waiting_for_input == true) {
            if (input.buttonIsPressed(Button.A)) {
                if (selected_tool == 0) {
                    selected_tool = 8
                    waiting_for_input = false
                } else {
                    selected_tool += -1
                    waiting_for_input = false
                }
            } else if (input.buttonIsPressed(Button.B)) {
                if (selected_tool == 8) {
                    selected_tool = 0
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
    if (selected_tool == 0) {
        menu_select = true
        menu_select_menu()
    } else if (selected_tool == 1) {

    } else if (selected_tool == 2) {

    } else if (selected_tool == 3) {

    } else if (selected_tool == 4) {

    } else if (selected_tool == 5) {

    } else if (selected_tool == 6) {

    } else if (selected_tool == 7) {

    } else {

    }
}
function turtle_main() {
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
}
function radio_main() {
    let group = 1
    let radio_type = 1
    menu_select = true
    radio.setGroup(1)
    while (menu_select == true) {
        basic.showNumber(group)
        waiting_for_input = true
        while (waiting_for_input == true) {
            if (input.buttonIsPressed(Button.A)) {
                if (group == 1) {
                    group = 255
                    waiting_for_input = false
                } else {
                    group += -1
                    waiting_for_input = false
                }
            }
            if (input.buttonIsPressed(Button.B)) {
                if (group == 255) {
                    group = 1
                    waiting_for_input = false
                } else {
                    group += 1
                    waiting_for_input = false
                }
            }
            if (input.logoIsPressed()) {
                waiting_for_input = false
                menu_select = false
            }
        }
    }
    radio.setGroup(group)
    game.addScore(1)
    basic.pause(350)
    menu_select = true
    while (menu_select == true) {
        if (radio_type == 1) {
            basic.showLeds(`
            . . . . .
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            `)
        } else if (radio_type == 2) {
            basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            # # # # #
            . . . . .
            `)
        } else if (radio_type == 3) {
            basic.showLeds(`
            . . . . .
            . . . # #
            . . . . #
            # . # . #
            # # # . #
            `)
        } else if (radio_type == 4) {
            basic.showLeds(`
            . . . . .
            . . . . #
            # # . . .
            . . # . .
            # . # . .
            `)
        } else {
            basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        }
        draw_menu()
        if (radio_type == 1) {
            led.plot(0, 0)
        } else if (radio_type == 2) {
            led.plot(1, 0)
        } else if (radio_type == 3) {
            led.plot(2, 0)
        } else if (radio_type == 4) {
            led.plot(3, 0)
        } else {
            led.plot(4, 0)
        }
        waiting_for_input = true
        while (waiting_for_input == true) {
            if (input.buttonIsPressed(Button.A)) {
                if (radio_type == 1) {
                    radio_type = 5
                    waiting_for_input = false
                } else {
                    radio_type += -1
                    waiting_for_input = false
                }
            }
            if (input.buttonIsPressed(Button.B)) {
                if (radio_type == 5) {
                    radio_type = 1
                    waiting_for_input = false
                } else {
                    radio_type += 1
                    waiting_for_input = false
                }
            }
        }
    }
    game.addScore(1)
    if (radio_type == 1) {

    }
    if (radio_type == 2) {

    }
    if (radio_type == 3) {

    }
    if (radio_type == 4) {

    }
    if (radio_type == 5) {
        
    }
}

loading_animation()
music.setBuiltInSpeakerEnabled(false)
let selected_menu = 1
let game_mode = 0
let selected_tool = 0
let selected_setting = 0
let settings_brightness = 5
let settings_music = false
let settings_volume = 5
let logged_data = false
let menu_select = true
let waiting_for_input = true
menu_select_menu()

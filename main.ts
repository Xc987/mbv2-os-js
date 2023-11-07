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
function draw_menu(){
    led.plotBrightness(0, 0, 20)
    led.plotBrightness(1, 0, 20)
    led.plotBrightness(2, 0, 20)
    led.plotBrightness(3, 0, 20)
    led.plotBrightness(4, 0, 20)
} //Draw navigation bar at the top.
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
        menu_select = true
        settings_select_menu()
    }
} //Menu selection at the start.
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
        px_1 = 2
        py_1 = 4
        my_1 = 3
        shoot_1 = 0
        speed_1 = 50
        for (let index2 = 0; index2 <= 4; index2++) {
            enemyX_1[index2] = randint(0,4)
            enemyY_1[index2] = index2 * -1
            killed_1[index2] = 0
        }
        basic.clearScreen()
    } else if (game_mode == 2) {
        bird_2 = game.createSprite(0,2)
        bird_2.set(LedSpriteProperty.Blink, 150)
        bird_move_2 = true
        obstacles_2 = []
        let index_2 = 0
        interval_2 = 1200
        game_mode_2()
    } else if (game_mode == 3) {
        game_mode_3()
    } else if (game_mode == 5) {
        player_5 = [game.createSprite(0,3), game.createSprite(0,4)]
        score_5 = 0
        obstacles_5 = []
        is_game_over_5 = false
        player_move_5 = true
    } else if (game_mode == 6) {
        basic.clearScreen()
        game_mode_6()
    } else {
        basic.clearScreen()
        ghost_7 = game.createSprite(0,0)
        pac_man_7 = game.createSprite(2,2)
        food_7 = game.createSprite(4,4)
        ghost_7.set(LedSpriteProperty.Blink,200)
        food_7.set(LedSpriteProperty.Brightness, 20)
        game_mode_7()
    }
} //Game selection.
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
        } else if (selected_tool == 8){
            basic.showLeds(`
        . . . . .
        . . # # .
        . . # . #
        # # # . .
        # # # . .
            `)
        } else {
        basic.showLeds(`
        . . . . .
        . # . . .
        # # # . .
        . # . . .
        . . . # #
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
            led.plot(2, 0)
        } else if (selected_tool == 8) {
            led.plot(3, 0)
        } else {
            led.plot(4, 0)
        }
        waiting_for_input = true
        while (waiting_for_input == true) {
            if (input.buttonIsPressed(Button.A)) {
                if (selected_tool == 0) {
                    selected_tool = 9
                    waiting_for_input = false
                } else {
                    selected_tool += -1
                    waiting_for_input = false
                }
            } else if (input.buttonIsPressed(Button.B)) {
                if (selected_tool == 9) {
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
    basic.clearScreen()
    let tool_type = 1
    if (selected_tool == 0) {
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
        tool_record()
    }  else {
        menu_select = true
        tool_calculator_menu()
    }
} //Tool selection
function tool_calculator_menu() {
    while (menu_select == true) {
        if (selected_math == 1) {
            basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        # # # . .
        . # . . .
        `)
        } else if (selected_math == 2) {
            basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # . .
        . . . . .
        `)
        } else if (selected_math == 3) {
            basic.showLeds(`
        . . . . .
        . . . . .
        # . # . .
        . # . . .
        # . # . .
        `)
        } else if (selected_math == 4) {
            basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # . . .
        # . . . .
            `)
        } else if (selected_math == 5) {
            basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        # . # . .
        `)
        } else if (selected_math == 6) {
            basic.showLeds(`
        . . . . .
        . # # # .
        . # . . .
        # # . . .
        . # . . .
        `)
        } else if (selected_math == 7) {
            basic.showLeds(`
        . . . . .
        . . # # .
        . # . . .
        . . # . .
        # # . . .
        `)
        } else if (selected_math == 8) {
            basic.showLeds(`
        . . . . .
        . # # . .
        # . . . .
        # . . . .
        . # # . .
            `)
        } else if (selected_math == 9) {
            basic.showLeds(`
        . . . . .
        . # . . .
        # # # . .
        . # . . .
        . # . . .
            `)
        } else if (selected_math == 10){
            basic.showLeds(`
        . . . . .
        # # # . #
        # . # . #
        # # # . #
        # . . . #
        `) 
        } else {
            basic.showLeds(`
            . . . . .
            . # # # .
            # . . . #
            . . # # .
            . . # . .
            `)
        }
        draw_menu()
        if (selected_math == 1) {
            led.plot(0, 0)
        } else if (selected_math == 2) {
            led.plot(1, 0)
        } else if (selected_math == 3) {
            led.plot(2, 0)
        } else if (selected_math == 4) {
            led.plot(2, 0)
        } else if (selected_math == 5) {
            led.plot(2, 0)
        } else if (selected_math == 6) {
            led.plot(2, 0)
        } else if (selected_math == 7) {
            led.plot(2, 0)
        } else if (selected_math == 8) {
            led.plot(2, 0)
        } else if (selected_math == 9) {
            led.plot(2, 0)
        } else if (selected_math == 10) {
            led.plot(3, 0)
        } else {
            led.plot(4, 0)
        }
        waiting_for_input = true
        while (waiting_for_input == true) {
            if (input.buttonIsPressed(Button.A)) {
                if (selected_math == 1) {
                    selected_math = 11
                    waiting_for_input = false
                } else {
                    selected_math += -1
                    waiting_for_input = false
                }
            } else if (input.buttonIsPressed(Button.B)) {
                if (selected_math == 11) {
                    selected_math = 1
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
} //Calculator type selection
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
} //Turtle extension.
function radio_main() {
    let group = 1
    radio_type = 1
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
            if (input.logoIsPressed()) {
                menu_select = false
                waiting_for_input = false
            }
        }
    }
    game.addScore(1)
    if (radio_type == 1) {
        number_radio()
    }
    if (radio_type == 2) {
        inputlist = [">"]
        abc_id = 1
        abc_loop = true
        string_radio()
    }
    if (radio_type == 3) {
        string_radio()
    }
    if (radio_type == 4) {

    }
    if (radio_type == 5) {
        
    }
} //Radio send type selection.
function settings_select_menu() {
    while (menu_select == true) {
        if (selected_setting == 0) {
            basic.showLeds(`
        . . . . .
        . # . . .
        # # # # #
        . # . . #
        . . . # #
        `)
        } else if (selected_setting == 1) {
           if (settings_music == false){
            basic.showLeds(`
            . . . . .
            . . # # .
            . . # . #
            # # # . .
            # # # . .
            `)
            led.plotBrightness(0,3,20)
            led.plotBrightness(0,4,20)
            led.plotBrightness(1,3,20)
            led.plotBrightness(1,4,20)
            led.plotBrightness(2,1,20)
            led.plotBrightness(2,2,20)
            led.plotBrightness(2,3,20)
            led.plotBrightness(2,4,20)
            led.plotBrightness(3,1,20)
            led.plotBrightness(4,2,20)
           } else {
            basic.showLeds(`
            . . . . .
            . . # # .
            . . # . #
            # # # . .
            # # # . .
            `)
           }
        } else if (selected_setting == 2) {
            if (settings_volume == 1) {
                basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                . . . . .
                `)
                music.setVolume(50)
                led.plotBrightness(2,1,20)
            } else if (settings_volume == 2) {
                basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                . . . . .
                `)
                music.setVolume(100)
                led.plotBrightness(2,1,20)
                led.plotBrightness(3,2,20)
            } else if (settings_volume == 3) {
                basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                . . . . .
                `)
                music.setVolume(150)
                led.plotBrightness(2,1,20)
                led.plotBrightness(3,2,20)
                led.plotBrightness(3,3,20)
            } else if (settings_volume == 4) {
                basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                . . . . .
                `)
                music.setVolume(200)
                led.plotBrightness(2,1,20)
                led.plotBrightness(3,2,20)
                led.plotBrightness(3,3,20)
                led.plotBrightness(2,4,20)
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
        } else if (selected_setting == 3) {
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
            } else if (settings_brightness == 4 ) {
                led.setBrightness(200)
                basic.showLeds(`
                . . . . .
                . # # # .
                # . . . .
                . # . # .
                . # # # .
                `)
            } else {
                led.setBrightness(255)
                basic.showLeds(`
                . . . . .
                . # # # .
                # . . . #
                . # . # .
                . # # # .
                `)
            }
        } else if (selected_setting == 4) {
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
        } else if (selected_setting == 5) {
            basic.showLeds(`
            . . . . .
            . # # . #
            # . . # .
            # . . # .
            . # # . .
            `)
        } else {
            basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        }
        draw_menu()
        if (selected_setting == 0) {
            led.plot(0, 0)
        } else if (selected_setting == 1) {
            led.plot(1, 0)
        } else if (selected_setting == 2) {
            led.plot(2, 0)
        } else if (selected_setting == 3) {
            led.plot(2, 0)
        } else if (selected_setting == 4) {
            led.plot(2, 0)
        } else if (selected_setting == 5) {
            led.plot(3, 0)
        } else {
            led.plot(4, 0)
        }
        waiting_for_input = true
        while (waiting_for_input == true) {
            if (input.buttonIsPressed(Button.A)) {
                if (selected_setting == 0) {
                    selected_setting = 6
                    waiting_for_input = false
                } else {
                    selected_setting += -1
                    waiting_for_input = false
                }
            } else if (input.buttonIsPressed(Button.B)) {
                if (selected_setting == 6) {
                    selected_setting = 0
                    waiting_for_input = false
                } else {
                    selected_setting += 1
                    waiting_for_input = false
                }
            } else if (input.logoIsPressed()) {
                if (selected_setting == 1) {
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
                    if (settings_volume == 5) {
                        settings_volume = 1
                    } else {
                        settings_volume += 1
                    }
                } else if (selected_setting == 3) {
                    if (settings_brightness == 5) {
                        settings_brightness = 1
                    } else {
                        settings_brightness += 1
                    }
                } else if (selected_setting == 4) {
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
                    input.calibrateCompass()
                } else {
                    menu_select = false
                }
                waiting_for_input = false
            }
        }
    }
    if (selected_setting == 0) {
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
}) //On button B pressed
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
}) //On button AB pressed
input.onPinPressed(TouchPin.P0, function() {
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
}) //On Pin0 pressed
input.onPinPressed(TouchPin.P1, function () {
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
}) //On pin1 pressed
input.onPinPressed(TouchPin.P2, function() {
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
        settings_brightness =1
    }
}) //On pin2 pressed

function string_radio() {
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
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
            if (abc_id == 1) {
                abc_id = 38
            } else {
                abc_id += -1
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
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
            inputlist.push(abc[abc_id])
            music.play(music.tonePlayable(523, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
            basic.pause(100)
        }
        if (abc_id == 1) {
            basic.showLeds(`
                . . . . .
                . # # # .
                # . . # .
                # . . # .
                . # # # #
                `)
        } else if (abc_id == 2) {
            basic.showLeds(`
                . # # # .
                . . . . .
                . # # # .
                # . . # .
                . # # # #
                `)
        } else if (abc_id == 3) {
            basic.showLeds(`
                # . . . .
                # . . . .
                # # # . .
                # . . # .
                # # # . .
                `)
        } else if (abc_id == 4) {
            basic.showLeds(`
                . . . . .
                . # # . .
                # . . . .
                # . . . .
                . # # . .
                `)
        } else if (abc_id == 5) {
            basic.showLeds(`
                . # . . .
                . . . . .
                . # # . .
                # . . . .
                . # # . .
                `)
        } else if (abc_id == 6) {
            basic.showLeds(`
                . . . # .
                . . . # .
                . # # # .
                # . . # .
                . # # # .
                `)
        } else if (abc_id == 7) {
            basic.showLeds(`
                . # # . .
                # . . # .
                # # # . .
                # . . . .
                . # # # .
                `)
        } else if (abc_id == 8) {
            basic.showLeds(`
                # # # . #
                # . . . #
                # # # . #
                # . . . .
                # # # . .
                `)
        } else if (abc_id == 9) {
            basic.showLeds(`
                . . # # .
                . # . . .
                # # # . .
                . # . . .
                . # . . .
                `)
        } else if (abc_id == 10) {
            basic.showLeds(`
                . # # # .
                # . . # .
                . # # # .
                . . . # .
                . # # . .
                `)
        } else if (abc_id == 11) {
            basic.showLeds(`
                # # # . #
                # . . . .
                # . # # .
                # . . # .
                # # # # .
                `)
        } else if (abc_id == 12) {
            basic.showLeds(`
                # . . . .
                # . . . .
                # # # . .
                # . . # .
                # . . # .
                `)
        } else if (abc_id == 13) {
            basic.showLeds(`
                . . # . .
                . . . . .
                . . # . .
                . . # . .
                . . # . .
                `)
        } else if (abc_id == 14) {
            basic.showLeds(`
                . # # # .
                . . . . .
                . . # . .
                . . # . .
                . . # . .
                `)
        } else if (abc_id == 15) {
            basic.showLeds(`
                . . # . .
                . . . . .
                . . # . .
                . . # . .
                # # . . .
                `)
        } else if (abc_id == 16) {
            basic.showLeds(`
                # . . . .
                # . # . .
                # # . . .
                # . # . .
                # . . # .
                `)
        } else if (abc_id == 17) {
            basic.showLeds(`
                # . . . .
                # . # . .
                # # . . #
                # . # . .
                # . . # .
                `)
        } else if (abc_id == 18) {
            basic.showLeds(`
                . # . . .
                . # . . .
                . # . . .
                . # . . .
                . # # # .
                `)
        } else if (abc_id == 19) {
            basic.showLeds(`
                . # . . #
                . # . . .
                . # . . .
                . # . . .
                . # # # .
                `)
        } else if (abc_id == 20) {
            basic.showLeds(`
                . . . . .
                # # . # #
                # . # . #
                # . . . #
                # . . . #
                `)
        } else if (abc_id == 21) {
            basic.showLeds(`
                . . . . .
                # # # . .
                # . . # .
                # . . # .
                # . . # .
                `)
        } else if (abc_id == 22) {
            basic.showLeds(`
                . . . . #
                # # # . .
                # . . # .
                # . . # .
                # . . # .
                `)
        } else if (abc_id == 23) {
            basic.showLeds(`
                . . . . .
                . # # . .
                # . . # .
                # . . # .
                . # # . .
                `)
        } else if (abc_id == 24) {
            basic.showLeds(`
                . . . . .
                # # # . .
                # . . # .
                # # # . .
                # . . . .
                `)
        } else if (abc_id == 25) {
            basic.showLeds(`
                . . . . .
                # . # # .
                # # . . .
                # . . . .
                # . . . .
                `)
        } else if (abc_id == 26) {
            basic.showLeds(`
                . . . . .
                . . # # .
                . # . . .
                . . # . .
                # # . . .
                `)
        } else if (abc_id == 27) {
            basic.showLeds(`
                # . . . .
                . . # # .
                . # . . .
                . . # . .
                # # . . .
                `)
        } else if (abc_id == 28) {
            basic.showLeds(`
                . # . . .
                . # . . .
                . # # # .
                . # . . .
                . . # # .
                `)
        } else if (abc_id == 29) {
            basic.showLeds(`
                . . . . .
                # . . # .
                # . . # .
                # . . # .
                . # # # #
                `)
        } else if (abc_id == 30) {
            basic.showLeds(`
                . # # . .
                . . . . .
                # . . # .
                # . . # .
                . # # # #
                `)
        } else if (abc_id == 31) {
            basic.showLeds(`
                . . . . .
                # . . . #
                # . . . #
                . # . # .
                . . # . .
                `)
        } else if (abc_id == 32) {
            basic.showLeds(`
                . . . . .
                # # # # .
                . . # . .
                . # . . .
                # # # # .
                `)
        } else if (abc_id == 33) {
            basic.showLeds(`
                . . . . #
                # # # # .
                . . # . .
                . # . . .
                # # # # .
                `)
        } else if (abc_id == 34) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . #
                # # # # #
                . . . . .
                `)
        } else if (abc_id == 35) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                `)
        } else if (abc_id == 36) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . # . .
                . # . . .
                `)
        } else if (abc_id == 37) {
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
    }
    text_radio = ">" + inputlist[0] + inputlist[1] + inputlist[2] + inputlist[3] + inputlist[4] + inputlist[5] + inputlist[6] + inputlist[7] + inputlist[8] + inputlist[9] + inputlist[10] + inputlist[11] + inputlist[12] + inputlist[13] + inputlist[14] + inputlist[15] + inputlist[16] + inputlist[17] + inputlist[18] + inputlist[19] + inputlist[20] + inputlist[21] + inputlist[22] + inputlist[23] + inputlist[24] + inputlist[25] + inputlist[26] + inputlist[27] + inputlist[28] + inputlist[29] + inputlist[30] + inputlist[31] + inputlist[32] + inputlist[33] + inputlist[34] + inputlist[35] + inputlist[36] + inputlist[37] + inputlist[38] + inputlist[39] + inputlist[40] + inputlist[41] + inputlist[42] + inputlist[43] + inputlist[44] + inputlist[45] + inputlist[46] + inputlist[47] + inputlist[48] + inputlist[49] + inputlist[50]
    if (radio_type == 2) {
        radio.sendString(text_radio)
    }
    number_radio()
} //Send string using radio.
function number_radio() {
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
    let num = 0
    let number_send = 0
    while (true) {
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
        }
        if (input.buttonIsPressed(Button.AB)) {
            if(list.length == 1) {
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
            if (radio_type == 1) {
                radio.sendNumber(number_send)
            } else if (radio_type == 3) {
                radio.sendValue(text_radio, number_send)
            }
        }
        if (num == 0) {
            basic.showLeds(`
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
        } else if (num == 1) {
            basic.showLeds(`
            . . . # .
            . . # # .
            . . . # .
            . . . # .
            . . . # .
            `)
        } else if (num == 2) {
            basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
        } else if (num == 3) {
            basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
        } else if (num == 4) {
            basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
        } else if (num == 5) {
            basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
        } else if (num == 6) {
            basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
        } else if (num == 7) {
            basic.showLeds(`
            . # # # .
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            `)
        } else if (num == 8) {
            basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            `)
        } else if (num == 9) {
            basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . # # # .
            `)
        }
    }
} //Send number using radio.
function settings_test_input() {
    while (true) {
        if (input.buttonIsPressed(Button.A)) {
            led.plot(0, 2)
        }
        if (input.buttonIsPressed(Button.B)) {
            led.plot(4, 2)
        }
        if (input.logoIsPressed()) {
            led.plot(2,0)
        }
        if (input.buttonIsPressed(Button.AB)) {
            led.plot(0,2)
            led.plot(4,2)
        }
        if (input.pinIsPressed(TouchPin.P0)) {
            led.plot(0,4)
        }
        if (input.pinIsPressed(TouchPin.P1)) {
            led.plot(2, 4)
        }
        if (input.pinIsPressed(TouchPin.P2)) {
            led.plot(4, 4)
        }
        if (input.lightLevel() <= 50) {
            led.plotBrightness(0,0,20)
        } else if (input.lightLevel() <= 100) {
            led.plotBrightness(0,0,100)
        } else if (input.lightLevel() <= 150) {
            led.plotBrightness(0,0,150)
        } else if (input.lightLevel() <= 200) {
            led.plotBrightness(0,0,200)
        } else {
            led.plotBrightness(0,0,255)
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
                led.unplot(1,2)
                led.unplot(1,1)
            } else if (input.acceleration(Dimension.X) <= 600) {
                led.plot(1, 2)
                led.unplot(1,3)
                led.unplot(1,1)
            } else {
                led.plot(1, 1)
                led.unplot(1,3)
                led.unplot(1,2)
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
    led.unplot(2,0)
    led.unplot(0,2)
    led.unplot(4,2)
    led.unplot(0,4)
    led.unplot(2,4)
    led.unplot(4,4)
    }
} // Test all inputs. ButtonAB, Pins0-2, Logo, Brightness, Sound, XYZ 


loading_animation()
music.setBuiltInSpeakerEnabled(false)
let selected_menu = 1
let game_mode = 0
let selected_tool = 0
let selected_setting = 0
let selected_math = 1
let tool_type = 1
let radio_type = 1
let settings_brightness = 5
let settings_music = false
let settings_volume = 5
let logged_data = false
let menu_select = true
let abc_loop = false
let abc_id = 1
let abc: string[] = []
let inputlist: string[] = []
let text_radio = ""
let list: number[] = []
let numberx: number[] = []
let numbery: number[] = []
let mathx = 0
let mathy = 0
let waiting_for_input = true
let number_select = false

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
let h_6 = [4,4,2,1,2]
let x_6 = [2,3,4,4,4,3,2,1,0,0,0,1]
let y_6 = [0,0,1,2,3,4,4,4,3,2,1,0]

let interval_7 = 1000
let ghost_7: game.LedSprite = null
let pac_man_7: game.LedSprite = null
let food_7: game.LedSprite = null

menu_select_menu()

basic.forever(function() {
    if (game_mode == 1) {
        led.plotBrightness(px_1,py_1,255)
        for (let index2 = 0; index2 <= 4; index2++) {
            if (killed_1[index2] == 0) {
                led.unplot(enemyX_1[index2], enemyY_1[index2] -1)
                led.plot(enemyX_1[index2],enemyY_1[index2])
            }
        }
        if (shoot_1 == 1) {
            led.plotBrightness(px_1,my_1,20)
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
            led.unplot(px_1,my_1)
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
            if (killed_1[index5] == 0){
                if  (enemyY_1[index5] > 4) {
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
                enemyX_1[index6] = randint(0,4)
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
    led.plot(ball_x_3,ball_y_3)
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
basic.forever(function() {
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
    basic.pause(randint(0,var_4))
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
basic.forever(function() {
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
basic.forever(function() {
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
basic.forever(function() {
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
basic.forever(function() {
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
            basic.showLeds(`
            . . . . .
            . # . # .
            . # . . .
            # # # . .
            . # . . .
            `)
            led.plot(1,0)
            led.plotBrightness(2,0,20)
            led.plotBrightness(3,0,20)
        } else if (tool_type == 2) {
            basic.showLeds(`
            . . . . .
            . . # # .
            . . # . #
            # # # . .
            # # # . .
            `)
            led.plotBrightness(1,0,20)
            led.plot(2,0)
            led.plotBrightness(3,0,20)
        } else if (tool_type == 3) {
            if (tool_record_volume == 1) {
                basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                . . . . .
                `)
                led.plotBrightness(2,1,20)
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
                led.plotBrightness(3,2,20)
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
            led.plot(3,0)
            led.plotBrightness(2,0,20)
            led.plotBrightness(1,0,20)
        }
        waiting_for_input = true
        while (waiting_for_input == true) {
            if (input.buttonIsPressed(Button.A)) {
                if (tool_type == 1) {
                    tool_type = 3
                    waiting_for_input = false
                } else {
                    tool_type += -1
                    waiting_for_input = false
                }
            }
            if (input.buttonIsPressed(Button.B)) {
                if (tool_type == 3) {
                    tool_type = 1
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
    }
} //Record and play sound files // Selected_tool = 8
function math_xy() {
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
    let num = 0
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
        if (number_select == true) {
            if (num == 0) {
                basic.showLeds(`
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
            } else if (num == 1) {
                basic.showLeds(`
            . . . # .
            . . # # .
            . . . # .
            . . . # .
            . . . # .
            `)
            } else if (num == 2) {
                basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
            } else if (num == 3) {
                basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
            } else if (num == 4) {
                basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
            } else if (num == 5) {
                basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
            } else if (num == 6) {
                basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
            } else if (num == 7) {
                basic.showLeds(`
            . # # # .
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            `)
            } else if (num == 8) {
                basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            `)
            } else if (num == 9) {
                basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . # # # .
            `)
            }
        }
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
        if (number_select == true) {
            if (num == 0) {
                basic.showLeds(`
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
            } else if (num == 1) {
                basic.showLeds(`
            . . . # .
            . . # # .
            . . . # .
            . . . # .
            . . . # .
            `)
            } else if (num == 2) {
                basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
            } else if (num == 3) {
                basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
            } else if (num == 4) {
                basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
            } else if (num == 5) {
                basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
            } else if (num == 6) {
                basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
            } else if (num == 7) {
                basic.showLeds(`
            . # # # .
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            `)
            } else if (num == 8) {
                basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            `)
            } else if (num == 9) {
                basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . # # # .
            `)
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
    let num = 0
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
        if (number_select == true) {
            if (num == 0) {
                basic.showLeds(`
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
            } else if (num == 1) {
                basic.showLeds(`
            . . . # .
            . . # # .
            . . . # .
            . . . # .
            . . . # .
            `)
            } else if (num == 2) {
                basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
            } else if (num == 3) {
                basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
            } else if (num == 4) {
                basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
            } else if (num == 5) {
                basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
            } else if (num == 6) {
                basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
            } else if (num == 7) {
                basic.showLeds(`
            . # # # .
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            `)
            } else if (num == 8) {
                basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            `)
            } else if (num == 9) {
                basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . # # # .
            `)
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
    }
} //Calculator with 1 variable // Selected_tool = 9
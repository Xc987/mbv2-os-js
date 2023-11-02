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

    } else if (game_mode == 4) {

    } else if (game_mode == 5) {

    } else if (game_mode == 6) {

    } else {

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
} //Tool selection
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
        }
        draw_menu()
        if (selected_setting == 0) {
            led.plot(0, 0)
        } else if (selected_setting == 1) {
            led.plot(1, 0)
        } else if (selected_setting == 2) {
            led.plot(2, 0)
        } else if (selected_setting == 3) {
            led.plot(3, 0)
        } else {
            led.plot(4,0)
        }
        waiting_for_input = true
        while (waiting_for_input == true) {
            if (input.buttonIsPressed(Button.A)) {
                if (selected_setting == 0) {
                    selected_setting = 4
                    waiting_for_input = false
                } else {
                    selected_setting += -1
                    waiting_for_input = false
                }
            } else if (input.buttonIsPressed(Button.B)) {
                if (selected_setting == 4) {
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
                } else {
                    waiting_for_input = false
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
}) //Space Invaders game. // Game_Mode = 1

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
} //Flappy Bird game. // Game_mode = 2
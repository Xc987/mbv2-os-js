function loading_animation() { //Draw loading animation.
    led.plotBrightness(2, 0, 5)
    basic.pause(30)
    led.unplot(2, 0)
    led.plotBrightness(3, 0, 10)
    basic.pause(30)
    led.unplot(3, 0)
    led.plotBrightness(4, 1, 15)
    basic.pause(30)
    led.unplot(4, 1)
    led.plotBrightness(4, 2, 20)
    basic.pause(30)
    led.unplot(4, 2)
    led.plotBrightness(4, 3, 30)
    basic.pause(30)
    led.unplot(4, 3)
    led.plotBrightness(3, 4, 60)
    basic.pause(30)
    led.unplot(3, 4)
    led.plotBrightness(2, 4, 100)
    basic.pause(30)
    led.unplot(2, 4)
    led.plotBrightness(1, 4, 140)
    basic.pause(30)
    led.unplot(1, 4)
    led.plotBrightness(0, 3, 180)
    basic.pause(30)
    led.unplot(0, 3)
    led.plotBrightness(0, 2, 210)
    basic.pause(30)
    led.unplot(0, 2)
    led.plotBrightness(0, 1, 230)
    basic.pause(30)
    led.unplot(0, 1)
    led.plotBrightness(1, 0, 255)
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
function decrypt() { //Draw / decrypt an image
    for (let x = 0; x < 5; x++) {
        for (let y2 = 0; y2 < 5; y2++) {
            if (bitmap & 1) {
                led.toggle(x, y2);
            }
            bitmap >>= 1;
        }
    }}
function scrollbit() { //Scroll the decrypted image
    let currimage = led.screenshot()
    currimage.scrollImage(5, 1)
    basic.clearScreen()
    decrypt()
    currimage = led.screenshot()
    currimage.scrollImage(1, scroll_interval)}
function fade() { //Fade in / out effect on max brightness.
    if (settings_brightness == 5) {
        led.fadeOut(fade_int)
        led.fadeIn(fade_int)
    }}
function unid_if_0_9() { //Function to draw numbers from 0 to 9
    unid = num
    bitmap = unid09[unid]
    let currimage = led.screenshot()
    currimage.scrollImage(5, 1)
    basic.clearScreen()
    decrypt()
    currimage = led.screenshot()
    currimage.scrollImage(1, scroll_interval)
    }
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
    bitmap = 0
    if (unid > 23) {
        bitmap = unid123ex[unid / 5 - 5]
    } else {
        bitmap = unid123[unid]
    }
    let currimage = led.screenshot()
    currimage.scrollImage(5, 1)
    basic.clearScreen()
    decrypt()
    currimage = led.screenshot()
    currimage.scrollImage(1, scroll_interval)
    }
function unid_if_1_4() { //Function to draw numbers from 1 to 4
    bitmap = unid14[num - 1]
    let currimage = led.screenshot()
    currimage.scrollImage(5, 1)
    basic.clearScreen()
    decrypt()
    currimage = led.screenshot()
    currimage.scrollImage(1, scroll_interval)
    }
function usid_if() { //Function to draw letters from "a" to "?"
    usid = abc_id
    bitmap = usidaz[usid - 1]
    let currimage = led.screenshot()
    currimage.scrollImage(5, 1)
    basic.clearScreen()
    decrypt()
    currimage = led.screenshot()
    currimage.scrollImage(1, scroll_interval)
    }
function uckb_if() { //Function to map keyboard buttons to input buttons.
    let kblist = ["NUL", "a", "a", "b", "c", "c", "d", "e", "e", "f", "g", "g", "h", "i", "i", "j", "k", "k", "l", "l", "m", "n", "n", "o", "p", "q", "r", "s", "s", "t", "u", "u", "v", "w", "x", "y", "z", "z", " ", ".", ",", "!", "?"]
    let kbshiftlist = ["NUL", "A", "A", "B", "C", "C", "D", "E", "E", "F", "G", "G", "H", "I", "I", "J", "K", "K", "L", "L", "M", "N", "N", "O", "P", "Q", "R", "S", "S", "T", "U", "U", "V", "W", "X", "Y", "Z", "Z"]
    if (shift == true) {
        uckb = kbshiftlist[abc_id]
        shift = false
    } else {
        uckb = kblist[abc_id]
    }}
function uns_loop() { //Number select
    while (true) {
    if (input.pinIsPressed(TouchPin.P2)) {
        break;
    }
    unid_if_0_9()
    if (scroll_interval == 1) {
        basic.pause(300)
    }
    while (true) {
        scroll_interval = 1
        if (input.pinIsPressed(TouchPin.P2)) {
            if (unslist.length == 1) {
                uns = unslist[0]
            } else if (unslist.length == 2) {
                uns = unslist[0] * 10 + unslist[1]
            } else if (unslist.length == 3) {
                uns = unslist[0] * 100 + unslist[1] * 10 + unslist[2]
            } else if (unslist.length == 4) {
                uns = unslist[0] * 1000 + unslist[1] * 100 + unslist[2] * 10 + unslist[3]
            } else if (unslist.length == 5) {
                uns = unslist[0] * 10000 + unslist[1] * 1000 + unslist[2] * 100 + unslist[3] * 10 + unslist[4]
            } else if (unslist.length == 6) {
                uns = unslist[0] * 100000 + unslist[1] * 10000 + unslist[2] * 1000 + unslist[3] * 100 + unslist[4] * 10 + unslist[5]
            } else if (unslist.length == 7) {
                uns = unslist[0] * 1000000 + unslist[1] * 100000 + unslist[2] * 10000 + unslist[3] * 1000 + unslist[4] * 100 + unslist[5] * 10 + unslist[6]
            } else if (unslist.length == 8) {
                uns = unslist[0] * 10000000 + unslist[1] * 1000000 + unslist[2] * 100000 + unslist[3] * 10000 + unslist[4] * 1000 + unslist[5] * 100 + unslist[6] * 10 + unslist[7]
            } else {
                basic.showIcon(IconNames.No)
            }
            break;
            basic.clearScreen()
        } else if (input.buttonIsPressed(Button.A)) {
            fade()
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
            unslist.push(numberlist[num])
            basic.showIcon(IconNames.Yes)
            break;
        }
    }
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
            bitmap = sysimages[0]
            ckeck_hold_a()
        } else if (selected_menu == 2) {
            bitmap = sysimages[1]
        } else if (selected_menu == 3) {
            bitmap = sysimages[2]
        } else if (selected_menu == 4) {
            bitmap = sysimages[3]
        } else if (selected_menu == 5) {
            bitmap = sysimages[4]
        } else if (selected_menu == 6) {
            bitmap = sysimages[55]
        } else if (selected_menu == 7) {
            bitmap = sysimages[6]
        } else if (selected_menu == 8) {
            bitmap = sysimages[7]
        } else if (selected_menu == 9) {
            bitmap = sysimages[61]
        } else if (selected_menu == 10) {
            bitmap = sysimages[8]
            ckeck_hold_b()
        }
        scrollbit()
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        draw_menu()
        if (selected_menu == 1) {
            led.plot(0, 0)
        } else if (selected_menu == 2) {
            led.plot(1, 0)
        } else if (selected_menu == 9) {
            led.plot(3, 0)
        } else if (selected_menu == 10) {
            led.plot(4, 0)
        } else {
            led.plot(2, 0)
        }
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                fade()
                if (selected_menu == 1) {
                    selected_menu = 10
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
                if (selected_menu == 10) {
                    selected_menu = 1
                    scroll_interval = 1
                    fade()
                } else {
                    selected_menu += 1
                }
                break;
            } else if (input.logoIsPressed()) {
                break;
            } else if (input.pinIsPressed(TouchPin.P1)) {
                helpfunction(mainhelp, selected_menu - 1)
                break;
            }
        }
        if (input.logoIsPressed()) {
            break;
        }
    }
    scroll_interval = 1
    fade()
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
        billy_select_menu()
    } else if (selected_menu == 7) {
        selected_serial_if = true
        send_select_menu()
    } else if (selected_menu == 8) {
        selected_uart = true
        send_select_menu()
    } else if (selected_menu == 9) {
        data_logging_freq_menu()
    } else if (selected_menu == 10) {
        settings_select_menu()
    }}
function game_select_menu() { //Game selection.
    while (true) {
        if (game_mode == 0) {
            bitmap = sysimages[9]
            ckeck_hold_a()
            } else if (game_mode == 1) {
            bitmap = sysimages[10]
            } else if (game_mode == 2) {
            bitmap = sysimages[11]
            } else if (game_mode == 3) {
            bitmap = sysimages[12]
            } else if (game_mode == 4) {
            bitmap = sysimages[13]
            } else if (game_mode == 5) {
            bitmap = sysimages[14]
            } else if (game_mode == 6) {
            bitmap = sysimages[15]
            } else if (game_mode == 7) {
            bitmap = sysimages[16]
            } else if (game_mode == 8) {
            bitmap = sysimages[17]
            } else if (game_mode == 9) {
            bitmap = sysimages[18]
            } else if (game_mode == 10) {
            bitmap = sysimages[83]
            ckeck_hold_b()
        }
        scrollbit()
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        draw_menu()
        if (game_mode == 0) {
            led.plot(0, 0)
        } else if (game_mode == 1) {
            led.plot(1, 0)
        } else if (game_mode == 9) {
            led.plot(3, 0)
        } else if (game_mode == 10) {
            led.plot(4, 0)
        } else {
            led.plot(2, 0)
        }
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                fade()
                if (game_mode == 0) {
                    game_mode = 10
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
                if (game_mode == 10) {
                    game_mode = 0
                    scroll_interval = 1
                    fade()
                } else {
                    game_mode += 1
                }
                break;
            } else if (input.logoIsPressed()) {
                break;
            } else if (input.pinIsPressed(TouchPin.P1)) {
                helpfunction(gamehelp, game_mode)
                break;
            }
        }
        if (input.logoIsPressed()) {
            break;
        }
    }
    scroll_interval = 1
    fade()
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
    } else if (game_mode == 10) {
        inits()
        basic.clearScreen()
    }}

function tool_select_menu() { //Tool selection.
    while (true) {
            if (selected_tool == 0) {
                bitmap = sysimages[9]
                ckeck_hold_a()
            } else if (selected_tool == 1) {
                bitmap = sysimages[19]
            } else if (selected_tool == 2) {
                bitmap = sysimages[20]
            } else if (selected_tool == 3) {
                bitmap = sysimages[21]
            } else if (selected_tool == 4) {
                bitmap = sysimages[22]
            } else if (selected_tool == 5) {
                bitmap = sysimages[23]
            } else if (selected_tool == 6) {
                bitmap = sysimages[24]
            } else if (selected_tool == 7) {
                bitmap = sysimages[25]
            } else if (selected_tool == 8) {
                bitmap = sysimages[26]
            } else if (selected_tool == 9) {
                bitmap = sysimages[27]
            } else if (selected_tool == 10) {
                bitmap = sysimages[28]
                ckeck_hold_b()
            }
        scrollbit()
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
                fade()
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
                    fade()
                } else {
                    selected_tool += 1
                }
                break;
            } else if (input.logoIsPressed()) {
                break;
            } else if (input.pinIsPressed(TouchPin.P1)) {
                helpfunction(toolhelp, selected_tool)
                break;
            }
        }
        if (input.logoIsPressed()) {
            break;
        }
    }
    scroll_interval = 1
    fade()
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
                if (input.pinIsPressed(TouchPin.P2)) {
                    if (custom_graph == 12) {
                        custom_graph = 1
                    } else {
                        custom_graph += 1
                    }
                    flashstorage.put("graph", convertToText(custom_graph))
                    basic.pause(150)
                }
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
                if (input.pinIsPressed(TouchPin.P2)) {
                    if (custom_graph == 12) {
                        custom_graph = 1
                    } else {
                        custom_graph += 1
                    }
                    flashstorage.put("graph", convertToText(custom_graph))
                    basic.pause(150)
                }
            }
        }
    }}
function tool_record() { //Record and play sound files // Selected_tool = 8
    let tool_record_volume = 5
    let tool_gain = 1
    record.setMicGain(record.AudioLevels.Low)
    record.setSampleRate(22000)
    while (true) {
        if (tool_type == 1) {
            bitmap = sysimages[9]
            ckeck_hold_a()
        } else if (tool_type == 2) {
            bitmap = sysimages[21]
        } else if (tool_type == 3) {
            bitmap = sysimages[26]
        } else if (tool_type == 4) {
            if (tool_record_volume == 1) {
                bitmap = sysimages[54]
                record.setSampleRate(4400)
            } else if (tool_record_volume == 2) {
                bitmap = sysimages[54]
                record.setSampleRate(8800)
            } else if (tool_record_volume == 3) {
                bitmap = sysimages[54]
                record.setSampleRate(13200)
            } else if (tool_record_volume == 4) {
                bitmap = sysimages[54]
                record.setSampleRate(17600)
            } else {
                bitmap = sysimages[55]
                record.setSampleRate(22000)
            }
        } else if (tool_type == 5) {
            if (tool_gain == 1) {
                bitmap = sysimages[85]
                record.setMicGain(record.AudioLevels.Low)
            } else if (tool_gain == 2) {
                bitmap = sysimages[86]
                record.setMicGain(record.AudioLevels.Medium)
            } else if (tool_gain == 3) {
                bitmap = sysimages[87]
                record.setMicGain(record.AudioLevels.High)
            }
            ckeck_hold_b()
        }
        scrollbit()
        if (tool_type == 4) {
            if (tool_record_volume == 1) {
                led.plotBrightness(2, 1, 20)
            } else if (tool_record_volume == 2) {
                led.plotBrightness(2, 1, 20)
                led.plotBrightness(3, 2, 20)
            } else if (tool_record_volume == 3) {
                led.plotBrightness(2, 1, 20)
                led.plotBrightness(3, 2, 20)
                led.plotBrightness(3, 3, 20)
            } else if (tool_record_volume == 4) {
                led.plotBrightness(2, 1, 20)
                led.plotBrightness(3, 2, 20)
                led.plotBrightness(3, 3, 20)
                led.plotBrightness(2, 4, 20)
            }
        }
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        draw_menu()
        if (tool_type == 1) {
            led.plot(0, 0)
        } else if (tool_type == 2) {
            led.plot(1, 0)
        } else if (tool_type == 4) {
            led.plot(3, 0)
        } else if (tool_type == 5) {
            led.plot(4, 0)
        } else {
            led.plot(2, 0)
        }
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                fade()
                if (tool_type == 1) {
                    tool_type = 5
                } else {
                    tool_type += -1
                }
                scroll_interval = 1
                break;
            } else if (input.buttonIsPressed(Button.B)) {
                if (animation_scroll == 1) {
                    scroll_interval = 45
                } else {
                    scroll_interval = 1
                }
                if (tool_type == 5) {
                    tool_type = 1
                    scroll_interval = 1
                    fade()
                } else {
                    tool_type += 1
                }
                break;
            } else if (input.logoIsPressed()) {
                scroll_interval = 1
                if (tool_type == 1) {
                    break;
                }
                if (tool_type == 2) {
                    record.startRecording(record.BlockingState.Nonblocking)
                    basic.clearScreen()
                    while (record.audioStatus(record.AudioStatus.Recording)) {
                        loading_animation()
                    }
                }
                if (tool_type == 3) {
                    record.playAudio(record.BlockingState.Nonblocking)
                    basic.clearScreen()
                    while (record.audioStatus(record.AudioStatus.Playing)) {
                        loading_animation()
                    }
                }
                if (tool_type == 4) {
                    if (tool_record_volume == 5) {
                        tool_record_volume = 1
                    } else {
                        tool_record_volume += 1
                    }
                }
                if (tool_type == 5) {
                    if (tool_gain == 3) {
                        tool_gain = 1
                    } else {
                        tool_gain += 1
                    }
                }
                break;
            } else if (input.pinIsPressed(TouchPin.P1)) {
                helpfunction(toolaudiohelp, tool_type - 1)
                break;
            }
        }
        if (input.logoIsPressed()) {
            if (tool_type == 1) {
                break;
            }
        }
    }
    scroll_interval = 1
    fade()
    if (tool_type == 1) {
        tool_select_menu()
    }}
function tool_calculator_menu() { //Calculator type selection.
    while (true) {
            if (selected_math == 0) {
            bitmap = sysimages[9]
            ckeck_hold_a()
            } else if (selected_math == 1){
                bitmap = sysimages[29]
            } else if (selected_math == 2) {
                bitmap = sysimages[30]
            } else if (selected_math == 3) {
                bitmap = sysimages[31]
            } else if (selected_math == 4) {
                bitmap = sysimages[32]
            } else if (selected_math == 5) {
                bitmap = sysimages[33]
            } else if (selected_math == 6) {
                bitmap = sysimages[34]
            } else if (selected_math == 7) {
                bitmap = sysimages[35]
            } else if (selected_math == 8) {
                bitmap = sysimages[36]
            } else if (selected_math == 9) {
                bitmap = sysimages[37]
            } else if (selected_math == 10) {
                bitmap = sysimages[38]
            } else if (selected_math == 11) {
                bitmap = sysimages[39]
                ckeck_hold_b()
            }
        scrollbit()
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
                fade()
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
                    fade()
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
    fade()
    scroll_interval = 1
    basic.clearScreen()
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
            bitmap = sysimages[9]
            ckeck_hold_a()
        } else if (selected_clock == 1) {
            bitmap = sysimages[40]
            ckeck_hold_a()
        } else if (selected_clock == 2) {
            bitmap = sysimages[41]
        } else if (selected_clock == 3) {
            bitmap = sysimages[42]
        } else if (selected_clock == 4) {
            bitmap = sysimages[28]
            ckeck_hold_b()
        }
        scrollbit()
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
                fade()
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
                    fade()
                } else {
                    selected_clock += 1
                }
                break;
            } else if (input.logoIsPressed()) {
                break;
            } else if (input.pinIsPressed(TouchPin.P1)) {
                helpfunction(toolclockhelp, selected_clock)
                break;
            }
        }
        if (input.logoIsPressed()) {
            break;
        }
    }
    fade()
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
    basic.clearScreen()
    let pen_up = false
    dot.home()
    dot.penDown()
    while (true) {
        if (input.buttonIsPressed(Button.A)) {
            dot.turnLeft()
            music.play(music.tonePlayable(220, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
        }
        if (input.buttonIsPressed(Button.B)) {
            dot.turnRight()
            music.play(music.tonePlayable(220, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
        }
        if (input.buttonIsPressed(Button.AB)) {
            if (pen_up == false) {
                music.play(music.tonePlayable(880, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                pen_up = true
                dot.penUp()
            } else {
                music.play(music.tonePlayable(880, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                pen_up = false
                dot.penDown()
            }
        }
        if (input.logoIsPressed()) {
        dot.moveForward()
        }
        if (input.pinIsPressed(TouchPin.P2)) {
        dot.moveBackward()
        }
        basic.pause(200)
    }}
function bluetooth_select_menu() { //Bluetooth send type selection.
    while (true) {
        if (bluetooth_type == 0) {
            bitmap = sysimages[9]
            ckeck_hold_a()
            } else if (bluetooth_type == 1) {
            bitmap = sysimages[26]
            } else if (bluetooth_type == 2) {
            bitmap = sysimages[43]
            } else if (bluetooth_type == 3) {
            bitmap = sysimages[44]
            } else if (bluetooth_type == 4) {
            bitmap = sysimages[45]
            ckeck_hold_b()
            }
        scrollbit()
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
                fade()
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
                    fade()
                } else {
                    bluetooth_type += 1
                }
                break;
            }
            if (input.logoIsPressed()) {
                break;
            } else if (input.pinIsPressed(TouchPin.P1)) {
                helpfunction(bluetoothhelp, bluetooth_type)
                break;
            }
        }
        if (input.logoIsPressed()) {
            break;
        }
    }
    scroll_interval = 1
    fade()
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
            bitmap = sysimages[9]
            ckeck_hold_a()
            } else if (bluetooth_keyboard_type == 1) {
            bitmap = sysimages[45]
            } else if (bluetooth_keyboard_type == 2) {
            bitmap = sysimages[46]
            } else if (bluetooth_keyboard_type == 3) {
            bitmap = sysimages[47]
            } else if (bluetooth_keyboard_type == 4) {
            bitmap = sysimages[36]
            ckeck_hold_b()
            }
        scrollbit()
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
                fade()
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
                    fade()
                } else {
                    bluetooth_keyboard_type += 1
                }
                break;
            }
            if (input.logoIsPressed()) {
                break;
            } else if (input.pinIsPressed(TouchPin.P1)) {
                helpfunction(bluetoothkeyboardhelp, bluetooth_keyboard_type)
                break;
            }
        }
        if (input.logoIsPressed()) {
            break;
        }
    }
    fade()
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
            bitmap = sysimages[9]
            ckeck_hold_a()
            } else if (create_type == 1) {
            bitmap = sysimages[48]
            } else if (create_type == 2) {
            bitmap = sysimages[49]
            } else if (create_type == 3) {
            bitmap = sysimages[26]
            } else if (create_type == 4) {
            bitmap = sysimages[50]
            ckeck_hold_b()
            }
        scrollbit()
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
                fade()
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
                    fade()
                } else {
                    create_type += 1
                }
                break;
            } else if (input.logoIsPressed()) {
                break;
            } else if (input.pinIsPressed(TouchPin.P1)) {
                helpfunction(createhelp, create_type)
                break;
            }
        }
        if (input.logoIsPressed()) {
            break;
        }
    }
    scroll_interval = 1
    fade()
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
        if (selected_create_music == 0) {
            bitmap = sysimages[9]
            ckeck_hold_a()
        } else if (selected_create_music == 1) {
            bitmap = sysimages[26]
        } else if (selected_create_music == 2) {
            bitmap = sysimages[65]
        } else if (selected_create_music == 3) {
            bitmap = sysimages[84]
        } else if (selected_create_music == 4) {
            bitmap = sysimages[64]
            ckeck_hold_b()
        }
        scrollbit()
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        draw_menu()
        if (selected_create_music == 0) {
            led.plot(0, 0)
        } else if (selected_create_music == 1) {
            led.plot(1, 0)
        } else if (selected_create_music == 2) {
            led.plot(2, 0)
        } else if (selected_create_music == 3) {
            led.plot(3, 0)
        } else if (selected_create_music == 4) {
            led.plot(4, 0)
        }
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                fade()
                if (selected_create_music == 0) {
                    selected_create_music = 4
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
                if (selected_create_music == 4) {
                    selected_create_music = 0
                    scroll_interval = 1
                    fade()
                } else {
                    selected_create_music += 1
                }
                break;
            } else if (input.logoIsPressed()) {
                if (selected_create_music == 3) {
                        while (true) {
                            if (custom_music[custom_music.length - 1] == 50) {
                                custom_music.pop()
                                break;
                            } else if (custom_music[custom_music.length - 1] == 100) {
                                custom_music.pop()
                                break;
                            } else {
                                custom_music.pop()
                            }
                        }
                }
                break;
            } else if (input.pinIsPressed(TouchPin.P1)) {
                helpfunction(createmusic, selected_create_music)
                break;
            }
        }
        if (input.logoIsPressed()) {
            if (selected_create_music != 3) {
                break;
            }
        }
    }
    scroll_interval = 1
    fade()
    if (selected_create_music == 0) {
        create_music_menu()
    } else if (selected_create_music == 1) {
        tune()
    } else if (selected_create_music == 2) {
        rest()
    } else if (selected_create_music == 4){
        melody_play()
    }}
function create_music_menu() { //Built-in music selection.
    while (true) {
        if (selected_music == 0) {
            bitmap = sysimages[9]
            ckeck_hold_a()
        } else if (selected_music == 1) {
            bitmap = sysimages[51]
            } else if (selected_music == 2) {
            bitmap = sysimages[26]
            } else if (selected_music == 3) {
            bitmap = sysimages[52]
            } else if (selected_music == 4) {
            bitmap = sysimages[53]
            } else if (selected_music == 5) {
            bitmap = sysimages[4]
            ckeck_hold_b()
            }
        scrollbit()
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        draw_menu()
        if (selected_music == 0) {
            led.plot(0, 0)
        } else if (selected_music == 1) {
            led.plot(1, 0)
        } else if (selected_music == 4) {
            led.plot(3, 0)
        } else if (selected_music == 5) {
            led.plot(4, 0)
        } else {
            led.plot(2, 0)
        }
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                fade()
                if (selected_music == 0) {
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
                    selected_music = 0
                    scroll_interval = 1
                    fade()
                } else {
                    selected_music += 1
                }
                break;
            } else if (input.logoIsPressed()) {
                break;
            } else if (input.pinIsPressed(TouchPin.P1)) {
                helpfunction(builtinmusichelp, selected_music)
                break;
            }
        }
        if (input.logoIsPressed()) {
            break;
        }
    }
    fade()
    if (selected_music == 0) {
        create_select_menu()
    } else if (selected_music == 1) {
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
function billy_select_menu() { //Billy TTS selection
    while (true) {
        if (selected_billy == 0) {
            bitmap = sysimages[9]
            ckeck_hold_a()
        } else if (selected_billy == 1) {
            bitmap = sysimages[49]
        } else if (selected_billy == 2) {
            bitmap = sys17[voicepreset]
            if (voicepreset == 0) {
                billy.voicePreset(BillyVoicePreset.Elf)
            } else if (voicepreset == 1) {
                billy.voicePreset(BillyVoicePreset.LittleRobot)
            } else if (voicepreset == 2) {
                billy.voicePreset(BillyVoicePreset.StuffyGuy)
            } else if (voicepreset == 3) {
                billy.voicePreset(BillyVoicePreset.LittleOldLady)
            } else if (voicepreset == 4) {
                billy.voicePreset(BillyVoicePreset.ExtraTerrestrial)
            } else if (voicepreset == 5) {
                billy.voicePreset(BillyVoicePreset.Sam)
            } else if (voicepreset == 6) {
                billy.voicePreset(BillyVoicePreset.Dalek)
            }
            ckeck_hold_b()
        }
        scrollbit()
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        draw_menu()
        if (selected_billy == 0) {
            led.plot(0, 0)
            led.plot(1, 0)
        } else if (selected_billy == 1) {
            led.plot(2, 0)
        } else if (selected_billy == 2) {
            led.plot(3, 0)
            led.plot(4, 0)
        }
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                fade()
                if (selected_billy == 0) {
                    selected_billy = 2
                } else {
                    selected_billy += -1
                }
                scroll_interval = 1
                break;
            } else if (input.buttonIsPressed(Button.B)) {
                if (animation_scroll == 1) {
                    scroll_interval = 45
                } else {
                    scroll_interval = 1
                }
                if (selected_billy == 2) {
                    selected_billy = 0
                    scroll_interval = 1
                    fade()
                } else {
                    selected_billy += 1
                }
                break;
            } else if (input.logoIsPressed()) {
                if (selected_billy == 2) {
                    scroll_interval = 1
                    fade()
                    if (voicepreset == 6) {
                        voicepreset = 0
                    } else {
                        voicepreset += 1
                    }
                } else {
                    break;
                }
                break;
            } else if (input.pinIsPressed(TouchPin.P1)) {
                helpfunction(billyhelp, selected_billy)
                break;
            }
        }
        if (input.logoIsPressed()) {
            if (selected_billy != 2) {
                break;
            }
        }
    }
    fade()
    basic.clearScreen()
    scroll_interval = 1
    if (selected_billy == 0) {
        menu_select_menu()
    } else if (selected_billy == 1) {
        billy_say()
    }}
function send_select_menu() { //Send selection.
    while (true) {
        if (selected_serial == 0) {
            bitmap = sysimages[9]
            ckeck_hold_a()
            } else if (selected_serial == 1) {
            bitmap = sysimages[22]
            } else if (selected_serial == 2) {
            bitmap = sysimages[6]
            ckeck_hold_b()
            }
        scrollbit()
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
                fade()
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
                    fade()
                } else {
                    selected_serial += 1
                }
                break;
            } else if (input.logoIsPressed()) {
                break;
            } else if (input.pinIsPressed(TouchPin.P1)) {
                helpfunction(serialhelp, selected_serial)
                break;
            }
        }
        if (input.logoIsPressed()) {
            break;
        }
    }
    fade()
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
            bitmap = sysimages[9]
            ckeck_hold_a()
            } else if (selected_serial_send == 1) {
            bitmap = sysimages[47]
            } else if (selected_serial_send == 2) {
            bitmap = sysimages[19]
            } else if (selected_serial_send == 3) {
            bitmap = sysimages[20]
            } else if (selected_serial_send == 4) {
            bitmap = sysimages[21]
            } else if (selected_serial_send == 5) {
            bitmap = sysimages[22]
            } else if (selected_serial_send == 6) {
            bitmap = sysimages[23]
            } else if (selected_serial_send == 7) {
            bitmap = sysimages[24]
            } else if (selected_serial_send == 8) {
            bitmap = sysimages[25]
            } else if (selected_serial_send == 9) {
            bitmap = sysimages[48]
            } else if (selected_serial_send == 10) {
            bitmap = sysimages[49]
            ckeck_hold_b()
            }
        scrollbit()
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
                fade()
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
                    fade()
                } else {
                    selected_serial_send += 1
                }
                break;
            } else if (input.logoIsPressed()) {
                break;
            } else if (input.pinIsPressed(TouchPin.P1)) {
                helpfunction(sendtypehelp, selected_serial_send)
                break;
            }
        }
        if (input.logoIsPressed()) {
            break;
        }
    }
    fade()
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
            bitmap = sysimages[9]
            ckeck_hold_a()
        } else if (logging_freq == 1) {
            bitmap = sysimages[66]
        } else if (logging_freq == 2) {
            bitmap = sysimages[67]
        } else if (logging_freq == 3) {
            bitmap = sysimages[68]
        } else if (logging_freq == 4) {
            bitmap = sysimages[69]
            ckeck_hold_b()
        }
        scrollbit()
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
                fade()
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
                    fade()
                } else {
                    logging_freq += 1
                }
                break;
            }
            if (input.logoIsPressed()) {
                break;
            } else if (input.pinIsPressed(TouchPin.P1)) {
                helpfunction(logfreq, logging_freq)
                break;
            }
        }
        if (input.logoIsPressed()) {
            break;
        }
    }
    datalogger.deleteLog(datalogger.DeleteType.Full)
    scroll_interval = 1
    fade()
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
            bitmap = sysimages[9]
            ckeck_hold_a()
        } else if (selected_log_tool == 1) {
            bitmap = sysimages[19]
        } else if (selected_log_tool == 2) {
            bitmap = sysimages[20]
        } else if (selected_log_tool == 3) {
            bitmap = sysimages[21]
        } else if (selected_log_tool == 4) {
            bitmap = sysimages[22]
        } else if (selected_log_tool == 5) {
            bitmap = sysimages[23]
        } else if (selected_log_tool == 6) {
            bitmap = sysimages[24]
        } else if (selected_log_tool == 7) {
            bitmap = sysimages[25]
            ckeck_hold_b()
        }
        scrollbit()
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
                fade()
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
                    fade()
                } else {
                    selected_log_tool += 1
                }
                break;
            } else if (input.logoIsPressed()) {
                break;
            } else if (input.pinIsPressed(TouchPin.P1)) {
                helpfunction(logtoolhelp, selected_log_tool)
                break;
            }
        }
        if (input.logoIsPressed()) {
            break;
        }
    }
    basic.clearScreen()
    fade()
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
                basic.pause(1000)
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
            bitmap = sysimages[9]
            ckeck_hold_a()
        } else if (selected_setting == 1) {
            bitmap = sysimages[26]
        } else if (selected_setting == 2) {
            if (settings_volume == 1) {
                bitmap = sysimages[54]
                music.setVolume(50)
            } else if(settings_volume == 2) {
                bitmap = sysimages[54]
                music.setVolume(100)
            } else if (settings_volume == 3) {
                bitmap = sysimages[54]
                music.setVolume(150)
            } else if (settings_volume == 4) {
                bitmap = sysimages[54]
                music.setVolume(200)
            } else {
                bitmap = sysimages[55]
                music.setVolume(255)
            }
        } else if (selected_setting == 3) {
            if (settings_brightness == 1) {
                led.setBrightness(50)
                bitmap = sysimages[56]
            } else if (settings_brightness == 2) {
                led.setBrightness(100)
                bitmap = sysimages[57]
            } else if (settings_brightness == 3) {
                led.setBrightness(150)
                bitmap = sysimages[58]
            } else if (settings_brightness == 4) {
                led.setBrightness(200)
                bitmap = sysimages[59]
            } else if (settings_brightness == 5) {
                led.setBrightness(250)
                bitmap = sysimages[60]
            }
        } else if (selected_setting == 4) {
            if (logged_data == 0) {
                bitmap = sysimages[61]
            } else {
                bitmap = sysimages[82]
            }
        } else if (selected_setting == 5) {
            bitmap = sysimages[62]
        } else if (selected_setting == 6) {
            bitmap = sysimages[63]
        } else if (selected_setting == 7) {
            bitmap = sysimages[70]
        } else if (selected_setting == 8) {
            bitmap = sysimages[64]
        } else if (selected_setting == 9) {
            if (custom_graph == 1) {
                bitmap = sysimages[71]
            } else if (custom_graph == 2) {
                bitmap = sysimages[72]
            } else if (custom_graph == 3) {
                bitmap = sysimages[4]
            } else if (custom_graph == 4) {
                bitmap = sysimages[73]
            } else if (custom_graph == 5) {
                bitmap = sysimages[80]
            } else if (custom_graph == 6) {
                bitmap = sysimages[77]
            } else if (custom_graph == 7) {
                bitmap = sysimages[75]
            } else if (custom_graph == 8) {
                bitmap = sysimages[74]
            } else if (custom_graph == 9) {
                bitmap = sysimages[78]
            } else if (custom_graph == 10) {
                bitmap = sysimages[3]
            } else if (custom_graph == 11) {
                bitmap = sysimages[81]
            } else if (custom_graph == 12) {
                bitmap = sysimages[79]
            }
        } else if (selected_setting == 10) {
            bitmap = sysimages[6]
            ckeck_hold_b()
        }
        scrollbit()
        if (selected_setting == 2) {
            if (settings_volume == 1) {
                led.plotBrightness(2, 1, 20)
            } else if (settings_volume == 2) {
                led.plotBrightness(2, 1, 20)
                led.plotBrightness(3, 2, 20)
            } else if (settings_volume == 3) {
                led.plotBrightness(2, 1, 20)
                led.plotBrightness(3, 2, 20)
                led.plotBrightness(3, 3, 20)
            } else if (settings_volume == 4) {
                led.plotBrightness(2, 1, 20)
                led.plotBrightness(3, 2, 20)
                led.plotBrightness(3, 3, 20)
                led.plotBrightness(2, 4, 20)
            }
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
                fade()
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
                    fade()
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
                        bitmap = sysimages[82]
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
            } else if (input.pinIsPressed(TouchPin.P1)) {
                helpfunction(settingshelp, selected_setting)
                break;
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
    }
    if (game_mode == 10) {
        if (state == 2) {
            if (direction == 0) {
                direction = 3
            } else if (direction == 1) {
                direction = 0
            } else if (direction == 2) {
                direction = 1
            } else if (direction == 3) {
                direction = 2
            }
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
    }
    if (game_mode == 10) {
        if (state == 2) {
            if (direction == 0) {
                direction = 1
            } else if (direction == 1) {
                direction = 2
            } else if (direction == 2) {
                direction = 3
            } else if (direction == 3) {
                direction = 0
            }
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
    }
    if (game_mode == 10) {
        if (state == 0) {
            snakeX[0] = 0
            snakeY[0] = 0
            led.plot(snakeX[0], snakeY[0])
            basic.clearScreen()
            state = 1
        }
    }})
function helpfunction(menu_text_list: any[], list_value: number) {
    basic.clearScreen()
    basic.showString(menu_text_list[list_value], 75)
}
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
let listo = ["games", "tools", "turtle"]
music.setBuiltInSpeakerEnabled(false)
pins.setAudioPinEnabled(false)
pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
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
let selected_create_music = 0
let selected_billy = 0
let selected_serial = 0
let selected_uart = false
let selected_serial_if = false
let selected_log_tool = 0
let selected_serial_send = 0
let selected_music = 0
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
let abc = ["NUL", "a", "A", "b", "c", "C", "d", "e", "E", "f", "g", "G", "h", "i", "I", "j", "k", "K", "l", "L", "m", "n", "N", "o", "p", "q", "r", "s", "S", "t", "u", "U", "v", "w", "x", "y", "z", "Z", " ", ".", ",", "!", "?"]
let numberlist = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let inputlist: string[] = []
let text = ""
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
let tune_music = 131
let tonelist = [0, 131, 147, 165, 175, 196, 220, 247, 262, 294, 330, 349, 392, 440, 494, 523, 587, 659, 698, 784, 880, 998]
let music_playing = false
let line_sent = false
let uart_send = ""
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
let p2press = parseFloat(flashstorage.getOrDefault("p2p", "1"))
let num_list = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let symb_list = [")", "!", "@", "#", "$", "%", "^", "&", "*", "("]
let fade_int = 100
let inter = 50
let bitmap = 0
let uns = 0
let unslist: number[] = []
let voicepreset = 0
let mainhelp = ["Games", "Tools", "Turtle", "Bluetooth", "Create", "Billy TTS", "Serial", "UART", "Data logger", "Settings"]
let gamehelp = ["Back", "Space invaders", "Flappy bird", "Ping Pong", "Cars game", "Dinosaur game", "Jumping rope", "Pac-Man", "Tetris", "Tic-Tac-Toe", "Snake"]
let toolhelp = ["Back", "Temperature", "Light level", "Sound level", "Compass", "Acceleration X", "Acceleration Y", "Acceleration Z", "Audio recording", "Calculator", "Clock"]
let toolaudiohelp = ["Back", "Record", "Play", "Sample rate", "Sensitivity"]
let toolclockhelp = ["Back", "Timer", "Chronometer", "Timer", "Clock"]
let bluetoothhelp = ["Back", "Media", "Mouse", "Gamepad", "Keyboard"]
let bluetoothkeyboardhelp = ["Back", "Keyboard", "Numbers", "Arrow keys", "Keyboard mapper"]
let createhelp = ["Back", "Numbers", "Text", "Music", "Image"]
let createmusic = ["Back", "Add note", "Add rest", "Delete previous note / rest", "Play"]
let builtinmusichelp = ["Back", "Melody", "music", "music V2", "sFX", "Create music"]
let billyhelp = ["Back", "Text", "Voice preset"]
let serialhelp = ["Back", "Send", "Receive"]
let sendtypehelp = ["Back", "Buttons", "Temperature", "Light level", "Sound level", "Compass", "Acceleration X", "Acceleration Y", "Acceleration Z", "Numbers", "Text"]
let logfreq = ["Back", "Every 100 ms", "Every 1 s", "Every 1 m", "Every 1 h"]
let logtoolhelp = ["Back", "Temperature", "Light level", "Sound level", "Compass", "Acceleration X", "Acceleration Y", "Acceleration Z"]
let settingshelp = ["Back", "Enable / Disable sound", "Volume", "Brightness", "Data logger for games", "Cailbrate compass", "Test input", "Rotate display", "Enable / Disable scroll animation", "Custom bar graph", "Use P2"]
let unid09 = [0xFC7E0, 0xF8800, 0xBD7A0, 0xFD6A0, 0xF90E0, 0xED6E0, 0xED7E0, 0xF8420, 0xFD7E0, 0xFD6E0]
let unid123 = [0xFC7E0, 0xF8800, 0xBD7A0, 0xFD6A0, 0xF90E0, 0xED6E0, 0xED7E0, 0xF8420, 0xFD7E0, 0xFD6E0, 0x1F8FC1F, 0x1F1001F, 0x17AF41F, 0x1FAD41F, 0x1F21C1F, 0x1DADC1F, 0x1DAFC1F, 0x1F0841F, 0x1FAFC1F, 0x1FADC1F, 0x1F8FEFD, 0x1F102FD, 0x17E82FD, 0x1FA82FD]
let unid123ex = [0x1DB82FD, 0x1F8FFF5, 0x1DB83F5, 0x1F8FF87, 0x1DB8387, 0x1F8FFB7, 0x1DB83B7]
let unid14 = [0xF8800, 0x17E801F, 0x1F21C1F, 0x1FAFC1F, 0x1DAFC1F, 0xBD7A0, 0xF90E0]
let usidaz = [0x10F4A4C, 0x10ED6A8, 0x4529F, 0x4A4C, 0x52A8, 0xFD288, 0x956AE, 0x7056BF, 0x97C4, 0x7D6A2, 0x1E563F, 0xC109F, 0x7400, 0xF420, 0x3610, 0x8289F, 0x48289F, 0x843E0, 0x1843E0, 0x1E1105E, 0xE085E, 0x1E085E, 0x64A4C, 0x2295E, 0xF2944, 0x1089E, 0x12A90, 0x12A91, 0xA51E0, 0x10F420E, 0x10E462C, 0x644106, 0x1E8221E, 0x93192, 0x222292, 0x95B52, 0x195B52, 0xC4210C, 0x2000, 0x2200, 0x5C00, 0x22D422]
let tunecb = [0x118FC10, 0xE8FC10, 0x15AFC10, 0x52FC10, 0x1DAFC10, 0x1F2FC10, 0x1BAFC10, 0x118FC18, 0xE8FC18, 0x15AFC18, 0x52FC18, 0x1DAFC18, 0xF97C18, 0x1BAFC18, 0x118FC1C, 0xE8FC1C, 0x15AFC1C, 0x52FC1C, 0x1DAFC1C, 0x1F2FC1C, 0x1BAFC1C]
let sys17 = [0xF1000, 0xB6A40, 0xF6A40, 0xF10C0, 0x96AC0, 0xD4BC0, 0xF0840]
let sysimages = [0x1863998, 0x44154, 0x1467994, 0x1E06010, 0x23880,
    0x1846118, 0x447904, 0x8A7914, 0x14E2394, 0x1CA11C4, 0x4800,
    0xB0100, 0x4200, 0x4000, 0x20018, 0x204000, 0x1010, 0x188031C,
    0x1C01384, 0x204A4C, 0x4D4B44, 0x123C8, 0x827888, 0x5114, 0x1B16,
    0x4ADA, 0x417B18, 0x10811C4, 0xEA5A0E, 0x2388, 0x2108, 0x5114,
    0x1110, 0x4110, 0x610BC8, 0x12A90, 0x4A4C, 0x13C4, 0x1E0395E,
    0x456844, 0x6F53C6, 0x421800, 0x1CA229C, 0xA2A4E, 0x212388,
    0x495244, 0x1E9781E, 0x4711C4, 0x7880, 0xC4210C, 0x1ED4ADE,
    0x481048, 0x1801906, 0x144515E, 0xC, 0x6480C, 0xC4304, 0xC4344,
    0xC4B44, 0xD4B44, 0x4D4B44, 0x1EA7A9E, 0x264A4C, 0x729C0, 0x471084,
    0x1821098, 0x255202, 0x12A90, 0x1E1105E, 0xF13C0, 0x47109C,
    0x4310, 0xA74310, 0x1E95A1E, 0x1300, 0x8639E, 0x1EE6200, 0x1041040,
    0x14E01D0, 0x822110, 0x211000, 0x18C639C, 0x222208, 0x1E13900, 
    0x1C2288A, 0x10023C8, 0x18023C8, 0x1C023C8]
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
let level = 0
let show = 0
let snake_length = 0
let foodY = 0
let foodX = 0
let direction = 0
let score = 0
let state = 0
let snakeY: number[] = []
let snakeX: number[] = []
snakeX = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
snakeY = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
basic.clearScreen()
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
basic.forever(function () { //Snake // game_mode = 10
    if (game_mode == 10) {
        if (state == 1) {
            gen_food()
            state = 2
        } else if (state == 2) {
            led.toggle(foodX, foodY)
            if (show == 0) {
                show = 5 - level
                show_snake()
            } else {
                show += -1
            }
        } else {

        }
        basic.pause(100)
    }})
function finish(num: number) {  //Snake // game_mode = 10
    state = 3
    basic.clearScreen()
    if (num == 0) {
        basic.showString("LOSE")
    } else {
        basic.showString("WIN")
    }
    basic.showString("S:")
    basic.showNumber(score)
    control.reset()
    inits()}
function inits() { //Snake // game_mode = 10
    foodX = -1
    foodY = -1
    direction = 0
    snake_length = 1
    show = 5 - level
    score = 0
    level = 0
    for (let index = 0; index <= 9; index++) {
        snakeX[index] = -1
        snakeY[index] = -1
    }
    state = 0}
function gen_food() { //Snake // game_mode = 10
    while (true) {
        foodX = randint(0, 4)
        foodY = randint(0, 4)
        if (led.point(foodX, foodY) == false) {
            break;
        }
    }}
function show_snake() { //Snake // game_mode = 10
    led.unplot(snakeX[snake_length - 1], snakeY[snake_length - 1])
    if (snake_length > 1) {
        for (let index = 0; index <= snake_length - 2; index++) {
            snakeX[snake_length - 1 - index] = snakeX[snake_length - 2 - index]
            snakeY[snake_length - 1 - index] = snakeY[snake_length - 2 - index]
        }
    }
    if (direction == 0 && snakeX[0] < 4) {
        snakeX[0] = snakeX[0] + 1
    } else if (direction == 1 && snakeY[0] < 4) {
        snakeY[0] = snakeY[0] + 1
    } else if (direction == 2 && snakeX[0] > 0) {
        snakeX[0] = snakeX[0] - 1
    } else if (direction == 3 && snakeY[0] > 0) {
        snakeY[0] = snakeY[0] - 1
    } else {
        finish(0)
    }
    if (state == 2) {
        eat_food()
        led.plot(snakeX[0], snakeY[0])
    }}
function eat_food() { //Snake // game_mode = 10
    if (snakeX[0] == foodX && snakeY[0] == foodY) {
        if (snake_length >= 10) {
            snake_length = 1
            level += 1
            for (let index = 0; index < 3; index++) {
                basic.showLeds(`
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
                basic.pause(200)
                basic.clearScreen()
                basic.pause(200)
            }
            if (level >= 5) {
                finish(1)
            } else {
                for (let index = 0; index <= 9; index++) {
                    snakeX[index] = -1
                    snakeY[index] = -1
                }
                snakeX[0] = 0
                snakeY[0] = 0
                led.plot(snakeX[0], snakeY[0])
                direction = 0
                state = 1
            }
        } else {
            snake_length += 1
            score += 1
            state = 1
        }
    } else {
        if (led.point(snakeX[0], snakeY[0]) == true) {
            finish(0)
        }
    }}
function tool_compass() { //Compass // Selected_tool = 4
    while (true) {
        if (Math.constrain(input.compassHeading(), 0, 45) == input.compassHeading()) {
            basic.showArrow(ArrowNames.North)
        }
        if (Math.constrain(input.compassHeading(), 45, 90) == input.compassHeading()) {
            basic.showArrow(ArrowNames.NorthEast)
        }
        if (Math.constrain(input.compassHeading(), 90, 135) == input.compassHeading()) {
            basic.showArrow(ArrowNames.East)
        }
        if (Math.constrain(input.compassHeading(), 135, 180) == input.compassHeading()) {
            basic.showArrow(ArrowNames.SouthEast)
        }
        if (Math.constrain(input.compassHeading(), 180, 225) == input.compassHeading()) {
            basic.showArrow(ArrowNames.South)
        }
        if (Math.constrain(input.compassHeading(), 225, 270) == input.compassHeading()) {
            basic.showArrow(ArrowNames.SouthWest)
        }
        if (Math.constrain(input.compassHeading(), 270, 315) == input.compassHeading()) {
            basic.showArrow(ArrowNames.West)
        }
        if (Math.constrain(input.compassHeading(), 315, 360) == input.compassHeading()) {
            basic.showArrow(ArrowNames.NorthWest)
        }
    }}


function math_xy() { //Calculator with 2 variables // Selected_tool = 9
    basic.pause(200)
    mathx = 0
    mathy = 0
    num = 0
    uns_loop()
    mathx = uns
    uns = 0
    unslist = []
    game.addScore(1)
    basic.pause(500)
    num = 0
    uns_loop()
    mathy = uns
    game.addScore(1)
    basic.pause(400)
    while (true) {
        basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
        if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B) || input.logoIsPressed()) {
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
            basic.clearScreen()
        }
    }}
function math_x() { //Calculator with 1 variable // Selected_tool = 9
    basic.clearScreen()
    basic.pause(100)
    mathx = 0
    mathy = 0
    num = 0
    uns_loop()
    mathx = uns
    game.addScore(1)
    basic.pause(400)
    while (true) {
        basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
        if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B) || input.logoIsPressed()) {
            if (selected_math == 6) {
                basic.showNumber(Math.sqrt(mathx))
            } else if (selected_math == 7) {
                basic.showNumber(Math.sin(mathx * Math.PI / 180))
            } else if (selected_math == 8) {
                basic.showNumber(Math.cos(mathx * Math.PI / 180))
            } else if (selected_math == 9) {
                basic.showNumber(Math.tan(mathx * Math.PI / 180))
            }
            basic.clearScreen()
        }
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
    signal_hour = 0
    signal_minute = 0
    uns_loop()
    hour = uns
    uns = 0
    unslist = []
    num = 0
    basic.clearScreen()
    basic.pause(200)
    basic.showString("M")
    basic.clearScreen()
    uns_loop()
    minute = uns
    uns = 0
    unslist = []
    num = 0
    basic.clearScreen()
    basic.pause(200)
    basic.showString("SIG-H")
    basic.clearScreen()
    num = 0
    uns_loop()
    signal_hour = uns
    uns = 0
    unslist = []
    num = 0
    basic.clearScreen()
    basic.pause(200)
    basic.showString("SIG-M")
    basic.clearScreen()
    num = 0
    uns_loop()
    signal_minute = uns
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
    uns_loop()
    hour = uns
    uns = 0
    unslist = []
    num = 0
    basic.clearScreen()
    basic.pause(200)
    basic.showString("M")
    basic.clearScreen()
    uns_loop()
    minute = uns
    uns = 0
    unslist = []
    num = 0
    basic.clearScreen()
    basic.pause(200)
    basic.showString("S")
    basic.clearScreen()
    uns_loop()
    second = uns
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
    uns_loop()
    hour = uns
    uns = 0
    unslist = []
    num = 0
    basic.clearScreen()
    basic.pause(200)
    basic.showString("M")
    basic.clearScreen()
    uns_loop()
    minute = uns
    uns = 0
    unslist = []
    num = 0
    basic.clearScreen()
    basic.pause(200)
    basic.showString("S")
    basic.clearScreen()
    uns_loop()
    second = uns
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
                    fade()
                    scroll_interval = 1
                    if (abc_id == 1) {
                        abc_id = 42
                    } else {
                        abc_id += -1
                    }
                    break;
                }
                if (input.buttonIsPressed(Button.B)) {
                    scroll_interval = 45
                    if (abc_id == 42) {
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
                    fade()
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
                    fade()
                    scroll_interval = 1
                    if (abc_id == 1) {
                        abc_id = 42
                    } else {
                        abc_id += -1
                    }
                    break;
                }
                if (input.buttonIsPressed(Button.B)) {
                    scroll_interval = 45
                    if (abc_id == 42) {
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
                    fade()
                    scroll_interval = 1
                    if (abc_id == 1) {
                        abc_id = 42
                    } else {
                        abc_id += -1
                    }
                    break;
                }
                if (input.buttonIsPressed(Button.B)) {
                    scroll_interval = 45
                    if (abc_id == 42) {
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
                    fade()
                    scroll_interval = 1
                    if (abc_id == 1) {
                        abc_id = 42
                    } else {
                        abc_id += -1
                    }
                    break;
                }
                if (input.buttonIsPressed(Button.B)) {
                    scroll_interval = 45
                    if (abc_id == 42) {
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
    basic.pause(300)
    fade_int = 50
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
                fade()
                scroll_interval = 1
                if (abc_id == 1) {
                    abc_id = 42
                } else {
                    abc_id += -1
                }
                break;
            }
            if (input.buttonIsPressed(Button.B)) {
                scroll_interval = 30
                if (abc_id == 42) {
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
function billy_say() { //Say custom text
    basic.clearScreen()
    basic.pause(300)
    fade_int = 50
    while (true) {
        if (input.pinIsPressed(TouchPin.P2)) {
            break;
        }
        usid_if()
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        while (true) {
            if (input.pinIsPressed(TouchPin.P2)) {
                break;
            }
            if (input.buttonIsPressed(Button.A)) {
                fade()
                scroll_interval = 1
                if (abc_id == 1) {
                    abc_id = 42
                } else {
                    abc_id += -1
                }
                break;
            }
            if (input.buttonIsPressed(Button.B)) {
                scroll_interval = 30
                if (abc_id == 42) {
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
            billy.say(text)
        }
    }}
function create_number() { //Create a temp-saved number.
    basic.clearScreen()
    basic.pause(500)
    num = 0
    let number_send = 0
    uns_loop()
    number_send = uns
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
    music.setBuiltInSpeakerEnabled(true)
    basic.clearScreen()
    let pen_up = false
    dot.erase()
    dot.home()
    dot.penDown()
    let turtle_input: number[] = []
    while (true) {
        if (input.buttonIsPressed(Button.AB)) {
            if (pen_up == false) {
                music.play(music.tonePlayable(880, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                pen_up = true
                dot.penUp()
            } else {
                music.play(music.tonePlayable(880, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
                pen_up = false
                dot.penDown()
            }
            turtle_input.push(2)
            if (pen_up == false) {
                music.play(music.tonePlayable(880, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
            } else {
                music.play(music.tonePlayable(880, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
            }
        }
        if (input.buttonIsPressed(Button.A)) {
            turtle_input.push(0)
            dot.turnLeft()
            music.play(music.tonePlayable(220, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
        }
        if (input.buttonIsPressed(Button.B)) {
            turtle_input.push(1)
            dot.turnRight()
            music.play(music.tonePlayable(220, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
        }
        if (input.logoIsPressed()) {
            turtle_input.push(3)
            music.play(music.tonePlayable(220, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
            dot.moveForward()
        }
        if (input.pinIsPressed(TouchPin.P2)) {
            turtle_input.push(4)
            music.play(music.tonePlayable(220, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
            dot.moveBackward()
        }
        if (input.pinIsPressed(TouchPin.P1)) {
            break;
        }
        basic.pause(200)
    }
    basic.clearScreen()
    dot.home()
    dot.erase()
    while (true) {
        basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
        if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B) || input.logoIsPressed()) {
            basic.clearScreen()
            dot.speed(8)
            while (true) {
                if (turtle_input[0] == 0) {
                    dot.turnLeft()
                }
                if (turtle_input[0] == 1) {
                    dot.turnRight()
                }
                if (turtle_input[0] == 2) {
                    if (pen_up == false) {
                        pen_up = true
                        dot.penUp()
                    } else {
                        pen_up = false
                        dot.penDown()
                    }
                }
                if (turtle_input[0] == 3) {
                dot.moveForward()
                }
                if (turtle_input[0] == 4) {
                    dot.moveBackward()
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
                fade()
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
                fade()
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
                fade()
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
                fade()
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
    custom_music.push(50)
    num = 1
    unid_type = 1
    while (true) {
        bitmap = tunecb[num - 1]
        let currimage = led.screenshot()
        currimage.scrollImage(5, 1)
        basic.clearScreen()
        decrypt()
        currimage = led.screenshot()
        currimage.scrollImage(1, scroll_interval)
        while (true) {
            scroll_interval = 1
            if (input.pinIsPressed(TouchPin.P2)) {
                music.play(music.tonePlayable(tonelist[num], music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
                break;
            }
            if (input.buttonIsPressed(Button.A)) {
                fade()
                if (num == 1) {
                    num = 21
                } else {
                    num += -1
                }
                break;
            }
            if (input.buttonIsPressed(Button.B)) {
                scroll_interval = 45
                if (num == 21) {
                    num = 1
                } else {
                    num += 1
                }
                break;
            }
            if (input.logoIsPressed()) {
                custom_music.push(num)
                tune_music = tonelist[num]
                break;
            }
        }
        if (input.logoIsPressed()) {
            break;
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
                fade()
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
                custom_music.push(num)
                break;
            }
        }
    }
    basic.pause(200)
    custom_music_selection()}
function rest() { //Rest selection.
    music.setBuiltInSpeakerEnabled(true)
    basic.clearScreen()
    custom_music.push(100)
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
                fade()
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
                custom_music.push(num)
                break;
            }
        }
    }
    basic.pause(200)
    custom_music_selection()}
function melody_play() { //Play the created melody.
    let bcm = custom_music.slice()
    while (true) {
        if (custom_music[0] == 50) {
            custom_music.removeAt(0)
            if (custom_music[1] == 1) {
                music.play(music.tonePlayable(tonelist[custom_music[0]], music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            } else if (custom_music[1] == 2) {
                music.play(music.tonePlayable(tonelist[custom_music[0]], music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            } else if (custom_music[1] == 3) {
                music.play(music.tonePlayable(tonelist[custom_music[0]], music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            } else if (custom_music[1] == 4) {
                music.play(music.tonePlayable(tonelist[custom_music[0]], music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
            } else if (custom_music[1] == 5) {
                music.play(music.tonePlayable(tonelist[custom_music[0]], music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
            } else if (custom_music[1] == 6) {
                music.play(music.tonePlayable(tonelist[custom_music[0]], music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
            } else if (custom_music[1] == 7) {
                music.play(music.tonePlayable(tonelist[custom_music[0]], music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
            }
            custom_music.removeAt(0)
            custom_music.removeAt(0)
        }
        if (custom_music[0] == 100) {
            custom_music.removeAt(0)
            if (custom_music[0] == 1) {
                music.rest(music.beat(BeatFraction.Whole))
            } else if (custom_music[0] == 2) {
                music.rest(music.beat(BeatFraction.Half))
            } else if (custom_music[0] == 3) {
                music.rest(music.beat(BeatFraction.Quarter))
            } else if (custom_music[0] == 4) {
                music.rest(music.beat(BeatFraction.Eighth))
            } else if (custom_music[0] == 5) {
                music.rest(music.beat(BeatFraction.Sixteenth))
            } else if (custom_music[0] == 6) {
                music.rest(music.beat(BeatFraction.Double))
            } else if (custom_music[0] == 7) {
                music.rest(music.beat(BeatFraction.Breve))
            }
            custom_music.removeAt(0)
        }
        if (custom_music.length == 0) {
            break;
        }
    }
    custom_music = bcm
    custom_music_selection()
    }

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
    fade_int = 50
    basic.clearScreen()
    basic.pause(300)
    while (true) {
        usid_if()
        if (scroll_interval == 1) {
            basic.pause(300)
        }
        while(true){
            if (input.buttonIsPressed(Button.A)) {
                fade()
                scroll_interval = 1
                if (abc_id == 1) {
                    abc_id = 42
                } else {
                    abc_id += -1
                }
                break;
            }
            if (input.buttonIsPressed(Button.B)) {
                scroll_interval = 30
                if (abc_id == 42) {
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
                fade()
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

function settings_test_input() { //Test all inputs.
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
}
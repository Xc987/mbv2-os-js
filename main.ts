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
        let waiting_for_input = true
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

    } else if (selected_menu == 2) {

    } else if (selected_menu == 3) {

    } else if (selected_menu == 4) {

    } else {

    }
}
loading_animation()
music.setBuiltInSpeakerEnabled(false)
let selected_menu = 1
let game_mode = 1
let selected_tool = 1
let selected_setting = 1
let settings_brightness = 5
let settings_music: false
let settings_volume = 5
let logged_data = false
let menu_select = true
menu_select_menu()

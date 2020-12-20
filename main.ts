while (true) {
    console.log("Light Level:" + input.lightLevel())
    if (input.lightLevel() < 6) {
        light.setAll(light.rgb(0, 0, 255))
    } else if (input.lightLevel()) {
        light.setAll(light.rgb(255, 70, 0))
    } else {
        light.clear()
    }
    
}

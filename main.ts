while (true) {
    console.log("Light Level:" + input.lightLevel())
    if (input.lightLevel() <= 5) {
        light.setAll(light.rgb(0, 0, 255))
    } else if (input.lightLevel() > 20) {
        light.setAll(light.rgb(255, 70, 0))
    } else if (input.lightLevel() <= 7) {
        light.setAll(light.rgb(0, 0, 0))
    }
    
}

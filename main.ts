while (true) {
    console.log("Light Level:" + input.lightLevel())
    if (input.lightLevel() > 100) {
        light.clear()
    } else if (input.lightLevel() < 50) {
        light.setAll(light.rgb(50, 50, 100))
    }
    
}

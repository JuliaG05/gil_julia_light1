while True:
    print("Light Level:" + input.light_level())
    if input.light_level() > 100:
        light.clear()
    elif input.light_level() < 50:
        light.set_all(light.rgb(50,50,100))

    gpio.mode(3, gpio.OUTPUT)
    while 1 do
        gpio.write(3, gpio.HIGH)
        tmr.delay(100000)
        gpio.write(3, gpio.LOW)
        tmr.delay(100000)
        gpio.write(3, gpio.HIGH)
    end

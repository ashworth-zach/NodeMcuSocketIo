#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>

#include <SocketIoClient.h>

ESP8266WiFiMulti WiFiMulti;

#define USE_SERIAL Serial

SocketIoClient webSocket;

void setup() {
    USE_SERIAL.begin(9600);
    USE_SERIAL.setDebugOutput(true);
    USE_SERIAL.println();
    USE_SERIAL.println();
    USE_SERIAL.println();
    for(uint8_t t = 4; t > 0; t--) {
        USE_SERIAL.printf("[SETUP] BOOT WAIT %d...\n", t);
        USE_SERIAL.flush();
        delay(1000);
    }
    WiFiMulti.addAP("Mirecki-Wifi", "password");

    while(WiFiMulti.run() != WL_CONNECTED) {
        delay(100);
    }
    webSocket.on("event", event);
    webSocket.begin("my.socket-io.server");
}

void loop() {
  webSocket.loop();
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

void event(const char * payload, size_t length) {
  USE_SERIAL.printf("got message: %s\n", payload);
}

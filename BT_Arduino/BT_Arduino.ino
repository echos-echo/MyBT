// which analog pin to connect
#define THERMISTORPIN A0         
// resistance at 25 degrees C
#define THERMISTORNOMINAL 10000      
// temp. for nominal resistance (almost always 25 C)
#define TEMPERATURENOMINAL 25   
// but is more 'smooth'
// The beta coefficient of the thermistor (usually 3000-4000)
#define BCOEFFICIENT 3950
// the value of the 'other' resistor
#define SERIESRESISTOR 10000    
#include <CurieBLE.h>

float steinhart;
float tempC;
           
BLEPeripheral blePeripheral;  // BLE Peripheral Device (the board you're programming)
BLEService ledService("19B10000-E8F2-537E-4F6C-D104768A1214"); // BLE LED Service

// BLE LED Switch Characteristic - custom 128-bit UUID, read and writable by central
BLEUnsignedCharCharacteristic switchCharacteristic("19B10001-E8F2-537E-4F6C-D104768A1214", BLERead | BLEWrite);

 
void setup() {
  Serial.begin(9600);
  
  // set advertised local name and service UUID:
  blePeripheral.setLocalName("LED");
  blePeripheral.setAdvertisedServiceUuid(ledService.uuid());

  // add service and characteristic:
  blePeripheral.addAttribute(ledService);
  blePeripheral.addAttribute(switchCharacteristic);

  // set the initial value for the characeristic:
  switchCharacteristic.setValue(0);

  // begin advertising BLE service:
  blePeripheral.begin();

  Serial.println("BLE LED Peripheral");
}
 
void loop(void) {

  
    // listen for BLE peripherals to connect:
  BLECentral central = blePeripheral.central();

  // if a central is connected to peripheral:
  if (central) {
    Serial.print("Connected to central: ");
    // print the central's MAC address:
    Serial.println(central.address());

    if (central.connected()) {
      
    // while the central is still connected to peripheral:
    while (central.connected()) {
      // if the remote device wrote to the characteristic,
      // use the value to control the LED:
      if (switchCharacteristic.written()) {
        
        if (switchCharacteristic.value()) {   // any value other than 0
           while (switchCharacteristic.value()){
            
           // calculating the temperature
           float average;
           average = analogRead(THERMISTORPIN);
           average = 1023 / average - 1;
           average = SERIESRESISTOR / average;
           steinhart = average / THERMISTORNOMINAL;     // (R/Ro)
           steinhart = log(steinhart);                  // ln(R/Ro)
           steinhart /= BCOEFFICIENT;                   // 1/B * ln(R/Ro)
           steinhart += 1.0 / (TEMPERATURENOMINAL + 273.15); // + (1/To)
           steinhart = 1.0 / steinhart;                 // Invert
           steinhart -= 273.15;                         // convert to C

           tempC = (((steinhart - 32) * 5) / 9);
           
  
           // printing the temperature
           Serial.println("Temperature:"); 
           Serial.print(steinhart);
           Serial.println(" *F");
           Serial.print(tempC);
           Serial.println(" *C");

           // stan is the standard temperature
           // stanC is stan in *F
           const int stan = 70;
           const int stanC = (((stan - 32) * 5) / 9);
           
           if (steinhart >= stan){
             Serial.print("The temperature is at/above ");
             Serial.print(stan);
             Serial.print("*F (");
             Serial.print(stanC);
             Serial.print("*C)");
             Serial.println();
             Serial.println();
           }

           if (steinhart < stan){
             Serial.print("The temperature is below ");
             Serial.print(stan);
             Serial.print("*F (");
             Serial.print(stanC);
             Serial.print("*C) ");
             Serial.println();
             Serial.println();
           }

         delay(2500);
         //}
         
       }
       }
    }
  } 
}
}
}
  

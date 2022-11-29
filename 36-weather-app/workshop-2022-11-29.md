# Workshop 2022-11-29

## 1. Hantera att en stad inte finns

Hantera att en stad inte går att hitta och visa ett bättre fel på sidan.

## 2. Lägg in en loading-spinner

Visa en loading-spinner medan man väntar på resultat. Loading-spinner bör även visas om man gör en ny sökning (och därmed ska det gamla vädret döljas).

Förslag på spinners: <https://tobiasahlin.com/spinkit/>

## 3. Visa väderförhållanden

Visa väderförhållanden inkl. ikoner i en osorterad lista med klassen `conditions`.

Dokumentation: <https://openweathermap.org/weather-conditions>

## 4. Byt ut card-image mot `day.svg`/`night.svg` beroende på om det är efter solnedgång eller före soluppgång

Kolla på `sys.sunrise` och `sys.sunset` och jämför med nuvarande tid.

## 5. Visa "färskhet"

Visa hur länge sedan det var som väderrapporten uppdaterades. Använd gärna Date-klassen och `.toLocaleString()`!

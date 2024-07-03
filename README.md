Zadanie 1. Zamówienie droidów

Stacja sprzedaży droidów naprawczych jest gotowa do uruchomienia, pozostało napisać oprogramowanie dla działu sprzedaży. Zadeklaruj funkcję makeTransaction(quantity, pricePerDroid, customerCredits), która komponuje i zwraca komunikat o zakupie droidów naprawczych.


Deklaruje ona trzy parametry, których wartości będą ustalane podczas jej wywołania:

quantity — ilość zamówionych droidów
pricePerDroid — cena jednego droida
customerCredits — suma środków na koncie klienta


Uzupełnij funkcję w następujący sposób:

* Zadeklaruj zmienną do przechowywania całkowitej sumy zamówienia (łączna wartość wszystkich zamówionych droidów) i przypisz jej wyrażenie obliczające tę sumę.
* Dodaj sprawdzenie, czy klient może zapłacić za zamówienie:
* jeśli suma do zapłaty przekracza ilość kredytów na koncie klienta, funkcja powinna zwracać ciąg znaków "Insufficient funds!"
* w przeciwnym przypadku funkcja powinna zwracać ciąg znaków "You ordered <quantity> droids worth <totalPrice> credits!", gdzie <quantity> to ilość zamówionych droidów, a <totalPrice> to ich łączna wartość.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Zadanie 2. Formatowanie wiadomości

Zadeklaruj funkcję formatMessage(message, maxLength), która przyjmuje ciąg znaków (parametr message) i sprawdza jego długość w stosunku do określonej maksymalnej długości (parametr maxLength).

Uzupełnij kod funkcji w taki sposób, że:

* Jeśli długość ciągu znaków jest równa lub mniejsza niż maxLength, funkcja zwraca początkowy ciąg znaków bez zmian.
* Jeśli długość przekracza maxLength, funkcja skraca ciąg znaków do maxLength znaków, dodaje trzy kropki "..." na końcu i zwraca skróconą wersję.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Zadanie 3. Sprawdzanie spamu

Funkcja checkForSpam(message) przyjmuje ciąg znaków (parametr message), sprawdza go pod kątem zawartości zabronionych słów spam i sale, i zwraca wynik sprawdzenia. Słowa w ciągu znaków parametru message mogą być w dowolnym przypadku, na przykład SPAM lub sAlE.

Uzupełnij kod funkcji tak, aby:

* Jeśli zostanie znalezione zabronione słowo (spam lub sale), funkcja zwraca wartość logiczną true
* Jeśli w ciągu znaków nie ma zabronionych słów, funkcja zwraca wartość logiczną false

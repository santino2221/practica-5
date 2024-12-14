let nombre = ("juan")
let edad = (25)
let ciudad = ("madrid")
let numero1 =
letnumero2=
letsuma =(numero1+numero2)
let hola =("santino")
let ,nombre,usuario = santino
let ,mensaje,completo = holasantino
console.log = "mensaje completo"

console.log(nombre,edad,ciudad)

console.log =(numero1+numero2)

using System;

class Program
{
    static void Main()
    {
        // 1. Intercambiar valores entre a y b
        int a = 5, b = 10;
        int temp = a;
        a = b;
        b = temp;

        // 2. Cálculo de área del rectángulo
        double baseRect = 5, alturaRect = 8;
        double area = baseRect * alturaRect;

        // 3. Cálculo de propina
        double totalCuenta = 200;
        double propina = totalCuenta * 0.15;
        double totalPagar = totalCuenta + propina;

        // 4. Comparación de dos números
        int num1 = 15, num2 = 10;
        string comparacion = num1 > num2 ? "num1 es mayor" : num2 > num1 ? "num2 es mayor" : "Ambos números son iguales";

        // 5. Verificar si un número es par o impar
        int numero = 7;
        string parOImpar = (numero % 2 == 0) ? "El número es par" : "El número es impar";

        // 6. Determinar calificación (A, B, C, D, F)
        int nota = 85;
        string calificacion = nota >= 90 ? "A" :
                               nota >= 80 ? "B" :
                               nota >= 70 ? "C" :
                               nota >= 60 ? "D" : "F";

        // Imprimir los resultados de todas las operaciones
        Console.WriteLine($"Intercambio: a = {a}, b = {b}");
        Console.WriteLine($"Área del rectángulo: {area}");
        Console.WriteLine($"Propina: {propina}, Total a pagar: {totalPagar}");
        Console.WriteLine(comparacion);
        Console.WriteLine(parOImpar);
        Console.WriteLine($"Calificación: {calificacion}");
    }
}














# Hentet fra https://www.practicepython.org/exercise/2014/02/26/04-divisors.html
# Oppgaven er oversatt av Henrik L. Njølstad under CC-BY-4.0 (https://creativecommons.org/licenses/by/4.0/).

# Oppgave 4.
# Lag et program som spør brukeren om et naturlig tall og som deretter printer en liste med alle faktorene til tallet.

# Løsningsforslag:
def faktorer_til_et_tall():
    nat_tall = int(input("Skriv inn et naturlig tall: \n"))
    print("Alle faktorene til tallet", int(nat_tall), "er")
    for n in range(1, nat_tall+1):
        if nat_tall % n == 0:
            print(n)


faktorer_til_et_tall()

# while nat_tall < 0 or nat_tall.is_integer() != True:
#     print("Tallet du skrev inn er ikke et naturlig tall. Et naturlig tall er et positivt heltall.\n")
#     nat_tall = float(input("Prøv på nytt:\n"))

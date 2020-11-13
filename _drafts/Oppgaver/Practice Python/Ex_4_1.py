# Hentet fra https://www.practicepython.org/exercise/2014/02/26/04-divisors.html
# Oppgaven er oversatt av Henrik L. Njølstad under CC-BY-4.0 (https://creativecommons.org/licenses/by/4.0/).

# Oppgave 4.
# Lag et program som spør brukeren om et naturlig tall og som deretter printer en liste med alle faktorene til tallet.

# Løsningsforslag:
def faktorer_til_et_tall():
    tall = input("Skriv et naturlig tall:")
    faktorer = []
    if er_dette_et_naturlig_tall(tall) == False:
        print("Dette var ikke et naturlig tall. Prøv på nytt:\n")
        faktorer_til_et_tall()
        return
    for n in range(1, int(tall)+1):
        if int(tall) % n == 0:
            faktorer.append(n)
    print(faktorer)


def er_dette_et_naturlig_tall(tall):
    try:
        nat_tall = int(tall)
    except:
        return False
    if tall != str(nat_tall) or nat_tall <= 0:
        return False
    return True


faktorer_til_et_tall()

# while nat_tall < 0 or nat_tall.is_integer() != True:
#     print("Tallet du skrev inn er ikke et naturlig tall. Et naturlig tall er et positivt heltall.\n")
#     nat_tall = float(input("Prøv på nytt:\n"))

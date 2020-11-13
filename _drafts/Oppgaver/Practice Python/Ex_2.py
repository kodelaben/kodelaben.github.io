# Hentet fra https://www.practicepython.org/exercise/2014/02/05/02-odd-or-even.html
# Oppgaven er oversatt av Henrik L. Njølstad CC-BY-4.0 (https://creativecommons.org/licenses/by/4.0/).

# Oppgave 2: Spør brukeren om et tall. Avhengig om tallet er odde eller par, skriv en passende melding til brukeren.
# Hint: Hva skiller et oddetall og et partall når det divideres med 2?

# Løsningsforslag:
def odde_eller_par():
    tall = int(input("Skriv inn et heltall:\n"))
    if tall < 0:  # TODO: Fiks
        print("Tallet du skrev inn var ikke et heltall. Prøv på nytt...\n")
        odde_eller_par()
    else:
        if tall % 2 == 0:
            print(f"{tall} er et partall.")
        else:
            print(f"{tall} er et oddetall.")

# odde_eller_par()

# Ekstraoppgave 1:
# Modifiser funksjonen din slik at hvis tallet er et multiplum av 4, så skrives det en annen melding.

# Løsningsforslag:


def ekstra1():
    tall = int(input("Skriv inn et heltall:\n"))
    if tall < 0:
        print("Tallet du skrev inn var ikke et heltall. Prøv på nytt...\n")
        odde_eller_par()
    else:
        if tall % 4 == 0:
            print(f"{tall} er et multiplum av 4.")
        elif tall % 2 == 0:
            print(f"{tall} er et partall.")
        else:
            print(f"{tall} er et oddetall.")
# ekstra1()


# Ekstraoppgave 2:
# Spør om to tall: Ett tall skal sjekkes (kall det 'tall') og et annet tall skal divideres ('div'). Hvis
# 'div' går opp i 'tall', skriv et passende svar. Hvis ikke, skriv en annen melding som passer.

def ekstra2():
    tall = int(input("Skriv inn et naturlig tall:\n"))
    div = int(input(
        "Jeg kan sjekke om et tall et en faktor i {}. Skriv inn et tall jeg skal sjekke. \n".format(tall)))
    if tall % div == 0:
        print(div, " er en faktor i ", tall)
        return True
    else:
        print(div, " er ikke en faktor i", tall)
        return False
# ekstra2()

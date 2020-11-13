# Hentet fra https://www.practicepython.org/exercise/2014/02/15/03-list-less-than-ten.html
# Oppgaven er oversatt av Henrik L. Njølstad CC-BY-4.0 (https://creativecommons.org/licenses/by/4.0/).

# Oppgave 3.
# Ta en liste, for eksempel denne:
# a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
# og skriv et program som printer alle elementene i lista som er mindre enn 5.

# Løsning.
a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]


def mindre_enn_5(liste):
    for objekt in liste:
        if objekt < 5:
            print(objekt)
# mindre_enn_5(a)


# Ekstraoppgave 1: I stedet for å printe elementene én og én, lag en ny liste med elementene som er mindre enn 5 og print den.
def mindre_enn_5_ekstra1(liste):
    svar = []
    for objekt in liste:
        if objekt < 5:
            svar.append(objekt)
    print(svar)
# mindre_enn_5_ekstra1(a)


# Ekstraoppgave 2: Gjør dette ved hjelp av én kodelinje.
def mindre_enn_5_ekstra2(liste):
    print([obj for obj in a if obj < 5])

# mindre_enn_5_ekstra2(a)

# Ekstraoppgave 3: Spør om et nummer (input) og returner en liste som bare inneholder elementer fra originallista som er mindre enn nummeret som er gitt.


def mindre_enn_X(liste):
    grense = int(input("Hvilket tall skal være grensen?\n"))
    svar = []
    for objekt in liste:
        if objekt < grense:
            svar.append(objekt)
    print(
        f"Alle tallene fra lista {liste} som er mindre enn {grense} er: {svar}")
# mindre_enn_X(a)

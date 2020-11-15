def tilfeldig_liste():
    liste = []
    for i in range(0,random.randrange(4,50)):
        liste.append(random.randrange(-50,50))
        liste.sort(reverse=False)
    return liste
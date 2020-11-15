def finne_felles_elementer(liste1, liste2):
    svarliste = []
    for x in liste1:
        for y in liste2:
            if x == y and x not in svarliste:
                svarliste.append(x)
    return svarliste
const reasons = [
    "...twój uśmiech rozjaśnia moje najszarejsze dni.",
    "...twoje wsparcie dodaje mi sił do pokonywania trudności.",
    "...jesteś moim najlepszym przyjacielem i kochankiem jednocześnie.",
    "...twoja obecność sprawia, że czuję się kompletny(a).",
    "...razem z tobą czuję, że mogę być sobą w stu procentach.",
    "...twój intelekt i rozmowność inspirują mnie do samodoskonalenia się.",
    "...twój entuzjazm i pasja do życia zarażają mnie pozytywną energią.",
    "...nawet w ciszy, bez słów, czuję się zrozumiany(a) przez ciebie.",
    "...twoje ramiona są moim bezpiecznym schronieniem w każdej chwili.",
    "...twoje drobne gesty i troska sprawiają, że czuję się wyjątkowy(a) i ważny(a) dla ciebie.",
]

export default reasons;


export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }


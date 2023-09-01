const reasons = {
    '02-09-2023': '...twój uśmiech rozjaśnia moje najszarejsze dni.',
    '03-09-2023': "...twoje wsparcie dodaje mi sił do pokonywania trudności.",
    '04-09-2023': "...jesteś moim najlepszym przyjacielem i kochankiem jednocześnie.",
    '05-09-2023': "...twoja obecność sprawia, że czuję się kompletny(a).",
    '06-09-2023': "...razem z tobą czuję, że mogę być sobą w stu procentach.",
    '07-09-2023': "...twój intelekt i rozmowność inspirują mnie do samodoskonalenia się.",
    '08-09-2023': "...twój entuzjazm i pasja do życia zarażają mnie pozytywną energią.",
    '09-09-2023': "...nawet w ciszy, bez słów, czuję się zrozumiany(a) przez ciebie.",
    '10-09-2023': "...twoje ramiona są moim bezpiecznym schronieniem w każdej chwili.",
    '11-09-2023': "...twoje drobne gesty i troska sprawiają, że czuję się wyjątkowy(a) i ważny(a) dla ciebie.",
}

export const getTodaysReason = (date) => {
    return reasons[date];
}

export default reasons;


export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }


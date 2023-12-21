// TODO:
// Add reason for every day in year. Good luck
// P.S. Make sure there is no "wyjątkowy(a) words..."

const reasons = {
    '21-12-2023': '...Twoje uśmiechy sprawiają, że mój dzień staje się jasny i pełen radości.',
    '22-12-2023': '...Twoje wsparcie dodaje mi sił, bym mógł pokonywać wszelkie trudności z podniesioną głową.',
    '23-12-2023': '...Jesteś dla mnie nie tylko najlepszą przyjaciółką, ale i ukochaną, co czyni naszą relację wyjątkową.',
    '24-12-2023': '...Twoja obecność sprawia, że czuję się kompletny i szczęśliwy.',
    '25-12-2023': '...Razem z Tobą czuję, że mogę być sobą w stu procentach, bez żadnych ograniczeń.',
    '26-12-2023': '...Twój intelekt i rozmowność są dla mnie nieustanną inspiracją do samodoskonalenia.',
    '27-12-2023': '...Twoje entuzjazm i pasja do życia zarażają mnie pozytywną energią, sprawiając, że każdy dzień staje się wyjątkowy.',
    '28-12-2023': '...Nawet w ciszy, bez słów, czuję się zrozumiany przez Ciebie, co czyni naszą więź niezwykle silną.',
    '29-12-2023': '...Twoje ramiona stanowią dla mnie bezpieczne schronienie, gdzie zawsze mogę znaleźć spokój i wsparcie.',
    '30-12-2023': '...Twoje drobne gesty i troska sprawiają, że czuję się wyjątkowo ważny w Twoim sercu.',
    '31-12-2023': '...Twoja obecność sprawia, że każda chwila staje się niezapomniana i pełna miłości.',
    '01-01-2024': '...Twoje oczy są dla mnie najpiękniejszym widokiem, którym chcę się zachwycać przez całe życie.',
    '02-01-2024': '...Twoje gesty czułości sprawiają, że czuję się kochany i ceniony każdego dnia.',
    '03-01-2024': '...Twój uścisk jest dla mnie jak oaza spokoju, gdzie znajduję bezpieczeństwo i ciepło.',
    '04-01-2024': '...Twoja pasja do życia sprawia, że każdy dzień staje się pełen przygód i niespodzianek.',
    '05-01-2024': '...Twoje słowa są dla mnie jak melodia, która łagodzi serce i dodaje życiu piękna.',
    '06-01-2024': '...Twoja obecność czyni każdy dzień wyjątkowym, wypełnionym miłością i radością.',
    '07-01-2024': '...Twoje zainteresowania stają się dla mnie inspiracją do odkrywania nowych pasji.',
    '08-01-2024': '...Twoja dobroć sprawia, że świat staje się lepszym miejscem dla nas obojga.',
    '09-01-2024': '...Twoja determinacja motywuje mnie do dążenia do własnych celów z pełnym zaangażowaniem.',
    '10-01-2024': '...Twoja delikatność sprawia, że czuję się chroniony i kochany w każdej sytuacji.',
    '11-01-2024': '...Twoja cierpliwość uczy mnie akceptacji i zrozumienia dla innych.',
    '12-01-2024': '...Twoje pomysły i kreatywność dodają naszej relacji niekończący się potencjał.',
    '13-01-2024': '...Twoja gotowość do poświęceń sprawia, że czuję się doceniony i ważny.',
    '14-01-2024': '...Twoje pytania i zainteresowanie moimi myślami sprawiają, że czuję się zrozumiany.',
    '15-01-2024': '...Twoja uczciwość i szczerze wyrażane emocje budują naszą relację na solidnych fundamentach.',
    '16-01-2024': '...Twoja obecność sprawia, że nawet zwyczajne chwile stają się niezwykłe.',
    '17-01-2024': '...Twoje marzenia stają się dla mnie motywacją, by dążyć do wspólnych celów.',
    '18-01-2024': '...Twoje poczucie humoru dodaje naszej relacji lekkości i radości.',
    '19-01-2024': '...Twoja gotowość do zmiany i rozwijania się inspiruje mnie do podążania za Tobą.',
    '20-01-2024': '...Twoje pozytywne podejście do życia przyciąga do nas dobre energie i szczęście.',
    '21-01-2024': '...Twoja otwartość na nowe pomysły i doświadczenia sprawia, że nasza relacja jest pełna życia.',
    '22-01-2024': '...Twoja siła i determinacja w trudnych sytuacjach dodają mi odwagi i siły.',
    '23-01-2024': '...Twoje przyjęcie mnie takim, jakim jestem, sprawia, że czuję się wolny i akceptowany.',
    '24-01-2024': '...Twoje zdolności komunikacyjne sprawiają, że nasza rozmowa jest zawsze pełna zrozumienia i szacunku.',
    '25-01-2024': '...Twoje sukcesy są dla mnie źródłem dumy i radości, bo cieszę się z każdego Twojego osiągnięcia.',
    '26-01-2024': '...Twoje wsparcie w trudnych decyzjach sprawia, że czuję się pewny swoich wyborów.',
    '27-01-2024': '...Twoje małe gesty miłości codziennie sprawiają, że zakochuję się w Tobie na nowo.',
    '28-01-2024': '...Twoja gotowość do nauki i rozwijania umiejętności inspiruje mnie do osobistego rozwoju.',
    '29-01-2024': '...Twoje zrozumienie moich słabości sprawia, że czuję się silniejszy i bardziej akceptowany.',
    '30-01-2024': '...Twoja gotowość do dzielenia się życiowymi doświadczeniami sprawia, że nasza więź staje się coraz głębsza.',
    '31-01-2024': '...Twoja empatia i troska o innych sprawiają, że jesteś wzorem do naśladowania.',
    '01-02-2024': '...Twoje zaangażowanie w naszą relację sprawia, że czuję się ważny i ceniony.',
    '02-02-2024': '...Twoje zdolności kulinarne dodają smak naszym wspólnym chwilom.',
    '03-02-2024': '...Twoje zaufanie do mnie sprawia, że czuję się odpowiedzialny za naszą wspólną przyszłość.',
    '04-02-2024': '...Twoje wspomnienia i chwile wspólnej historii są dla mnie cenne i niezastąpione.',
    '05-02-2024': '...Twoje poczucie piękna i estetyki sprawia, że świat staje się bardziej kolorowy i interesujący.',
    '06-02-2024': '...Twoja gotowość do przezwyciężania trudności razem ze mną sprawia, że czuję się silniejszy.',
    '07-02-2024': '...Twoja wierność i lojalność są dla mnie fundamentem naszej trwałej relacji.',
    '08-02-2024': '...Twoje zaangażowanie w rozwijanie naszej relacji sprawia, że jestem pewien, że mamy przyszłość.',
    '09-02-2024': '...Twoje marzenia są dla mnie inspiracją, by dążyć do wspólnych celów i spełniać nasze plany.',
    '10-02-2024': '...Twoje ciche gesty miłości są dla mnie ważniejsze niż tysiące słów.',
    '11-02-2024': '...Twoja gotowość do przebaczenia i zrozumienia sprawia, że nasza relacja jest pełna harmonii.',
    '12-02-2024': '...Twoja radość z drobnych rzeczy sprawia, że uczę się cieszyć z życia na nowo.',
    '13-02-2024': '...Twoja gotowość do podejmowania wyzwań razem ze mną sprawia, że czuję się silny i pewny siebie.',
    '14-02-2024': '...Twoja bezwarunkowa miłość daje mi pewność, że zawsze mogę na Tobie polegać.',
    '15-02-2024': '...Twoje pomysły na spędzanie wspólnego czasu sprawiają, że nasze chwile są zawsze pełne radości.',
    '16-02-2024': '...Twoja gotowość do poświęceń dla dobra naszej relacji sprawia, że czuję się ważny.',
    '17-02-2024': '...Twoje słowa otuchy i wsparcia sprawiają, że nawet najtrudniejsze chwile stają się łatwiejsze.',
    '18-02-2024': '...Twoje zaangażowanie w budowanie naszej wspólnej przyszłości sprawia, że czuję się bezpieczny.',
    '19-02-2024': '...Twoja gotowość do wspólnego planowania i realizacji celów sprawia, że nasza przyszłość jest jasna.',
    '20-02-2024': '...Twoje'}
  


export const getTodaysReason = (date) => {
    return reasons[date];
}

export default reasons;


export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }


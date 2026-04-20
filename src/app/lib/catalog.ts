export type SupportedLanguage = 'kazakh' | 'english' | 'uyghur'
export type SupportedLevel = 'A1' | 'A2' | 'B1'

export type QuizQuestion = {
    id: string
    question: string
    answers: [string, string, string]
    correctIndex: 0 | 1 | 2
}

export type TopicTask = {
    id: string
    prompt: string
    hint?: string
}

export type Topic = {
    id: string
    title: string
    tasks: TopicTask[]
    quiz: QuizQuestion[]
}

export const CATALOG: Record<SupportedLanguage, Record<SupportedLevel, Topic[]>> = {
    kazakh: {
        B1: [
            {
                id: 'topic-1',
                title: 'Менің түйіндемем (CV)',
                tasks: [
                    {
                        id: 't1',
                        prompt: 'Өзің туралы 5–6 сөйлем жаз: аты-жөнің, жасың, қалаң, оқу/жұмыс, қызығушылық.',
                        hint: 'Мысал: Менің атым ... Мен ... қаласында тұрамын.',
                    },
                    {
                        id: 't2',
                        prompt: 'Білімің туралы 3 сөйлем жаз (мектеп/университет, мамандық, оқу жылы).',
                    },
                    {
                        id: 't3',
                        prompt: 'Дағдылар бөлімін толтыр: кемінде 6 skill (soft + hard).',
                        hint: 'Мысал: командада жұмыс, жауапкершілік, MS Office, ағылшын тілі',
                    },
                    {
                        id: 't4',
                        prompt: 'Жұмыс тәжірибесі жоқ болса: «тәжірибе» бөліміне 2 волонтерлік/жоба жазып шық.',
                    },
                    {
                        id: 't5',
                        prompt: 'Кері байланыс (contacts): телефон, email, Telegram/LinkedIn — 1 жолға дұрыс форматта жаз.',
                    },
                    {
                        id: 't6',
                        prompt: 'Қысқа “мақсат” (objective) жаз: 1–2 сөйлем.',
                        hint: 'Мысал: Junior ... позициясына өтініш беремін. Мақсатым ...',
                    },
                ],
                quiz: [
                    {
                        id: 'q1',
                        question: 'CV неден басталғаны дұрыс?',
                        answers: ['Жеке ақпарат', 'Сүйікті тағамдар', 'Кино тізімі'],
                        correctIndex: 0,
                    },
                    {
                        id: 'q2',
                        question: 'Жұмыс тарихы қай бөлімде беріледі?',
                        answers: ['Тәжірибе', 'Хобби', 'Мақсат'],
                        correctIndex: 0,
                    },
                    {
                        id: 'q3',
                        question: 'CV-де дағдылар (skills) не үшін керек?',
                        answers: ['Қабілеттерді көрсету үшін', 'Фотоларды көрсету үшін', 'Көп парақ болу үшін'],
                        correctIndex: 0,
                    },
                    {
                        id: 'q4',
                        question: 'Контактілер бөлімінде не міндетті?',
                        answers: ['Email немесе телефон', 'Ән плейлисті', 'Ұнататын түс'],
                        correctIndex: 0,
                    },
                    {
                        id: 'q5',
                        question: 'Objective (мақсат) қанша сөйлем болғаны дұрыс?',
                        answers: ['1–2 сөйлем', '10–12 сөйлем', 'Мүлдем жазбайды'],
                        correctIndex: 0,
                    },
                ],
            },
            {
                id: 'topic-2',
                title: 'Өзіңді таныстыру (Self-introduction)',
                tasks: [
                    { id: 't1', prompt: '30 секундтық таныстыру мәтінін жаз (6–8 сөйлем).' },
                    { id: 't2', prompt: '2 күшті жағың және 1 жақсартқың келетін жағыңды сипатта.' },
                    { id: 't3', prompt: 'Өзіңнің күнделікті әдетің туралы 5 сөйлем жаз.' },
                    { id: 't4', prompt: '«Неге осы курс/мамандық?» деген сұраққа 3 сөйлем жауап жаз.' },
                    { id: 't5', prompt: 'Сұхбаттағы 5 жиі сұраққа қысқа жауап дайында (әрқайсысы 1–2 сөйлем).' },
                ],
                quiz: [
                    {
                        id: 'q1',
                        question: 'Таныстыруда ең маңыздысы не?',
                        answers: ['Қысқа әрі нақты айту', 'Көп әзіл айту', 'Өте ұзақ сөйлеу'],
                        correctIndex: 0,
                    },
                    {
                        id: 'q2',
                        question: '«Мен ... қызығамын» деген сөйлем қай бөлімге сай?',
                        answers: ['Қызығушылық', 'Тәжірибе', 'Байланыс'],
                        correctIndex: 0,
                    },
                    {
                        id: 'q3',
                        question: 'Сұхбатта жауап бергенде не дұрыс?',
                        answers: ['Мысал келтіру', 'Тақырыптан ауытқу', 'Өте қысқа: «иә/жоқ»'],
                        correctIndex: 0,
                    },
                    {
                        id: 'q4',
                        question: 'Өзіңнің әлсіз жағыңды айтқанда не маңызды?',
                        answers: ['Қалай түзетіп жатқаныңды айту', 'Жасыру', 'Бәрін кінәлау'],
                        correctIndex: 0,
                    },
                    {
                        id: 'q5',
                        question: 'Таныстыру қанша уақытқа сай болуы керек?',
                        answers: ['30–60 секунд', '5 минут', '15 минут'],
                        correctIndex: 0,
                    },
                ],
            },
            {
                id: 'topic-3',
                title: 'Жұмыс және мамандық (Jobs)',
                tasks: [
                    { id: 't1', prompt: '10 мамандық атауын жаз және әрқайсысына 1 міндет қос.' },
                    { id: 't2', prompt: 'Өзің қалаған жұмысқа байланысты 5 терминді түсіндір.' },
                    { id: 't3', prompt: '«Менің жұмыс күнім» тақырыбында 8 сөйлем жаз.' },
                    { id: 't4', prompt: 'Резюмеге 5 “achievement” (жетістік) ойлап жаз.' },
                    { id: 't5', prompt: 'Жұмыс сұхбатына 5 сұрақ құрастыр (жұмыс берушіге).' },
                ],
                quiz: [
                    {
                        id: 'q1',
                        question: '«Жауапкершілік» сөзі нені білдіреді?',
                        answers: ['Responsibility', 'Hobby', 'Salary'],
                        correctIndex: 0,
                    },
                    {
                        id: 'q2',
                        question: 'Жетістік (achievement) қалай жазылады?',
                        answers: ['Нәтижемен және сандармен', 'Тек эмоциямен', 'Ұзақ әңгіменің ішінде'],
                        correctIndex: 0,
                    },
                    {
                        id: 'q3',
                        question: '«Жалақы» қайсысы?',
                        answers: ['Salary', 'Schedule', 'Skill'],
                        correctIndex: 0,
                    },
                    {
                        id: 'q4',
                        question: 'Жұмыс берушіге сұрақ қою не үшін керек?',
                        answers: ['Қызығушылықты көрсету үшін', 'Уақыт өлтіру үшін', 'Қажет емес'],
                        correctIndex: 0,
                    },
                    {
                        id: 'q5',
                        question: '«Кесте» (жұмыс уақыты) қайсысы?',
                        answers: ['Schedule', 'Skill', 'Summary'],
                        correctIndex: 0,
                    },
                ],
            },
            {
                id: 'topic-4',
                title: 'Саяхат және қала (Travel)',
                tasks: [
                    { id: 't1', prompt: 'Өзің барған/барғың келетін қаланы сипатта (8 сөйлем).' },
                    { id: 't2', prompt: 'Билет сатып алу диалогын жаз (6 реплика).' },
                    { id: 't3', prompt: 'Қонақүй брондау үшін 5 сұрақ жаз.' },
                    { id: 't4', prompt: 'Бағыт сұрау: 5 сөйлем құрастыр.' },
                    { id: 't5', prompt: 'Саяхат кеңестері: 6 bullet-point жаз.' },
                ],
                quiz: [
                    {
                        id: 'q1',
                        question: '«Брондау» не?',
                        answers: ['Reserve/booking', 'Cancel', 'Delay'],
                        correctIndex: 0,
                    },
                    {
                        id: 'q2',
                        question: '«Кідіріс» (ұшақ) қайсысы?',
                        answers: ['Delay', 'Ticket', 'Gate'],
                        correctIndex: 0,
                    },
                    {
                        id: 'q3',
                        question: '«Бағыт» сөзіне жақын мағына?',
                        answers: ['Маршрут', 'Жалақы', 'Тәжірибе'],
                        correctIndex: 0,
                    },
                    {
                        id: 'q4',
                        question: 'Қонақүйде ең негізгі сұрақ?',
                        answers: ['Бөлме бар ма?', 'Сүйікті түсіңіз?', 'Қай кино ұнайды?'],
                        correctIndex: 0,
                    },
                    {
                        id: 'q5',
                        question: 'Саяхатта құжат не үшін керек?',
                        answers: ['Тексеру/кіру үшін', 'Жоқ нәрсе', 'Тек суретке'],
                        correctIndex: 0,
                    },
                ],
            },
            {
                id: 'topic-5',
                title: 'Денсаулық және спорт (Health)',
                tasks: [
                    { id: 't1', prompt: 'Дәрігерге шағым: 6 сөйлем жаз.' },
                    { id: 't2', prompt: 'Дұрыс тамақтану туралы 6 кеңес жаз.' },
                    { id: 't3', prompt: 'Спорт түрлері: 10 атау + 1 сөйлем артықшылық.' },
                    { id: 't4', prompt: 'Күн тәртібіңді жаз (таңертең/түсте/кешке).' },
                    { id: 't5', prompt: 'Стресті азайтуға 5 әдіс жаз.' },
                ],
                quiz: [
                    {
                        id: 'q1',
                        question: '«Дәрі» қайсысы?',
                        answers: ['Medicine', 'Menu', 'Message'],
                        correctIndex: 0,
                    },
                    {
                        id: 'q2',
                        question: 'Дұрыс тамақтануға не кіреді?',
                        answers: ['Көкөніс/су/баланс', 'Тек тәтті', 'Тек фастфуд'],
                        correctIndex: 0,
                    },
                    {
                        id: 'q3',
                        question: '«Жаттығу» сөзі?',
                        answers: ['Exercise', 'Example', 'Extra'],
                        correctIndex: 0,
                    },
                    {
                        id: 'q4',
                        question: 'Стресті азайтуға қайсысы көмектеседі?',
                        answers: ['Ұйқы және демалыс', 'Көп кофе', 'Аз су'],
                        correctIndex: 0,
                    },
                    {
                        id: 'q5',
                        question: '«Ауырсыну» қайсысы?',
                        answers: ['Pain', 'Plan', 'Place'],
                        correctIndex: 0,
                    },
                ],
            },
            {
                id: 'topic-6',
                title: 'Білім және оқу (Education)',
                tasks: [
                    { id: 't1', prompt: 'Өзіңнің оқу мақсаттарыңды жаз (5 сөйлем).' },
                    { id: 't2', prompt: 'Апталық оқу жоспарын жаса (7 күн).' },
                    { id: 't3', prompt: 'Қиындықтар: 3 мәселе + 3 шешім жаз.' },
                    { id: 't4', prompt: 'Топта оқу туралы 6 сөйлем жаз.' },
                    { id: 't5', prompt: 'Сүйікті пәнің туралы 8 сөйлем жаз.' },
                ],
                quiz: [
                    {
                        id: 'q1',
                        question: 'Оқу жоспары не үшін керек?',
                        answers: ['Тұрақтылық үшін', 'Керек емес', 'Тек мұғалімге'],
                        correctIndex: 0,
                    },
                    {
                        id: 'q2',
                        question: 'Мақсат қоюдың пайдасы?',
                        answers: ['Нәтижеге бағыттайды', 'Уақыт алады', 'Тек стресс'],
                        correctIndex: 0,
                    },
                    {
                        id: 'q3',
                        question: '«Тәртіп» (discipline) неге маңызды?',
                        answers: ['Күнделікті оқу үшін', 'Тек емтиханға', 'Маңызды емес'],
                        correctIndex: 0,
                    },
                    {
                        id: 'q4',
                        question: 'Топта оқу артықшылығы?',
                        answers: ['Бір-біріне көмектесу', 'Жалғыз болу', 'Көбірек ұйықтау'],
                        correctIndex: 0,
                    },
                    {
                        id: 'q5',
                        question: 'Қиындықты шешудің дұрыс қадамы?',
                        answers: ['Мәселе + жоспар', 'Елемеу', 'Кінәлау'],
                        correctIndex: 0,
                    },
                ],
            },
        ],
        A1: [],
        A2: [],
    },
    english: {
        A1: [
            {
                id: 'topic-1',
                title: 'My CV',
                tasks: [{ id: 't1', prompt: 'Write 5 sentences about yourself for a CV.' }],
                quiz: [
                    {
                        id: 'q1',
                        question: 'What is the correct way to start a CV?',
                        answers: ['Personal Information', 'My Hobbies', 'Favorite Foods'],
                        correctIndex: 0,
                    },
                ],
            },
        ],
        A2: [],
        B1: [],
    },
    uyghur: {
        A1: [],
        A2: [],
        B1: [],
    },
}

export function normalizeLanguage(lang: string | null | undefined): SupportedLanguage {
    if (lang === 'kazakh' || lang === 'english' || lang === 'uyghur') return lang
    return 'kazakh'
}

export function normalizeLevel(level: string | null | undefined, lang: SupportedLanguage): SupportedLevel {
    const allowed: SupportedLevel[] = ['A1', 'A2', 'B1']
    if (level && allowed.includes(level as SupportedLevel)) return level as SupportedLevel
    return lang === 'kazakh' ? 'B1' : 'A1'
}

export function getTopics(lang: SupportedLanguage, level: SupportedLevel): Topic[] {
    return CATALOG[lang][level] ?? []
}

export function findTopic(
    lang: SupportedLanguage,
    level: SupportedLevel,
    topicId: string,
): { topic?: Topic; effectiveLevel: SupportedLevel } {
    const inLevel = CATALOG[lang][level]?.find((t) => t.id === topicId)
    if (inLevel) return { topic: inLevel, effectiveLevel: level }

    for (const l of ['A1', 'A2', 'B1'] as SupportedLevel[]) {
        const found = CATALOG[lang][l]?.find((t) => t.id === topicId)
        if (found) return { topic: found, effectiveLevel: l }
    }

    return { topic: undefined, effectiveLevel: level }
}

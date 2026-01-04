var selection = document.getElementById("selection");
var audioSelect = audioForm.formSelect;
var selectDownload = downloadForm.selectDownload;

function changeOption() {
    var selectedOption = audioSelect.options[audioSelect.selectedIndex];
    var s = selectedOption.text;
    //added row with audioplayer       
    switch (s) {
        case "Вступление":
            selection.innerHTML = "<p>1. Вступление</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/1. Вступление.mp3\" controls></audio></p>";
            break;
        case "Предисловие":
            selection.innerHTML = "<p>2. Предисловие</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/2. Предисловие.mp3\" controls></audio></p>";
            break;
        case "Глава-1А":
            selection.innerHTML = "<p>Глава 1А-1. Допотопный мир</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1А-1. Допотопный мир.mp3\" controls></audio></p>" +
                "<p>Глава 1А-2 Родословная Ноя</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1А-2 Родословная Ноя.mp3\" controls></audio></p>" +
                "<p>Глава 1А-3 Цивилизация после потопа</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1А-3 Цивилизация после потопа.mp3\" controls></audio></p>" +
                "<p>Глава 1А-4 Переезд семьи Иакова в Египет</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1А-4 Переезд семьи Иакова в Египет.mp3\" controls></audio></p>" +
                "<p>Глава 1А-5 Скитания по пустыне</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1А-5 Скитания по пустыне.mp3\" controls></audio></p>" +
                "<p>Глава 1А-6 Времена судей</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1А-6 Времена судей.mp3\" controls></audio></p>" +
                "<p>Глава 1А-7 Строительство храма Соломона</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1А-7 Строительство храма Соломона.mp3\" controls></audio></p>" +
                "<p>Глава 1А-8 Разделенное царство</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1А-8 Разделенное царство.mp3\" controls></audio></p>" +
                "<p>Глава 1А-9 Израиль-Самария</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1А-9 Израиль-Самария.mp3\" controls></audio></p>" +
                "<p>Глава 1А-10 Иудейское царство</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1А-10 Иудейское царство.mp3\" controls></audio></p>" +
                "<p>Глава 1А-11 Вавилонский плен</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1А-11 Вавилонский плен.mp3\" controls></audio></p>" +
                "<p>Глава 1А-12 Указ Артарксеркса</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1А-12 Указ Артарксеркса.mp3\" controls></audio></p>" +
                "<p>Глава 1А-13 Рождение Иисуса Христа</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1А-13 Рождение Иисуса Христа.mp3\" controls></audio></p>" +
                "<p>Глава 1А-14 Разрушение второго храма</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1А-14 Разрушение второго храма.mp3\" controls></audio></p>" +
                "<p>Глава 1А-15 Воскресный указ</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1А-15 Воскресный указ.mp3\" controls></audio></p>" +
                "<p>Глава 1А-16 Римский папа</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1А-16 Римский папа.mp3\" controls></audio></p>" +
                "<p>Глава 1А-17 Начало следственного суда</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1А-17 Начало следственного суда.mp3\" controls></audio></p>" +
                "<p>Глава 1А-18 500-тие Реформации</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1А-18 500-тие Реформации.mp3\" controls></audio></p>" +
                "<p>Глава 1А-19 Стихотворение Освящение</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1А-19 Стихотворение Освящение.mp3\" controls></audio></p>" +
                "<p>Глава 1А-20 Заключение</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1А-20 Заключение.mp3\" controls></audio></p>";
            break;
        case "Глава-1Б":
            selection.innerHTML = "<p>Глава 1Б-1 Первый день</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1Б-1 Первый день.mp3\" controls></audio></p>" +
                "<p>Глава 1Б-2 Второй день</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1Б-2 Второй день.mp3\" controls></audio></p>" +
                "<p>Глава 1Б-3 Третий день</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1Б-3 Третий день.mp3\" controls></audio></p>" +
                "<p>Глава 1Б-4 Четвертый день</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1Б-4 Четвертый день.mp3\" controls></audio></p>" +
                "<p>Глава 1Б-5 Пятый день</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1Б-5 Пятый день.mp3\" controls></audio></p>" +
                "<p>Глава 1Б-6 Шестой день</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1Б-6 Шестой день.mp3\" controls></audio></p>";
            break;
        case "Глава-2":
            selection.innerHTML = "<p>Глава 2-1 По образу и подобию</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 2-1 По образу и подобию.mp3\" controls></audio></p>" +
                "<p>Глава 2-2 Что такое душа</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 2-2 Что такое душа.mp3\" controls></audio></p>" +
                "<p>Глава 2-3 Стихотворение</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 2-3 Стихотворение.mp3\" controls></audio></p>";
            break;
        case "Глава-3":
            selection.innerHTML = "<p>Глава 3-1 Вавилонская башня</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 3-1 Вавилонская башня.mp3\" controls></audio></p>" +
                "<p>Глава 3-2 Ковчег Ноя</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 3-2 Ковчег Ноя.mp3\" controls></audio></p>" +
                "<p>Глава 3-3 Пророчество Ноя о Ханаане</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 3-3 Пророчество Ноя о Ханаане.mp3\" controls></audio></p>" +
                "<p>Глава 3-4 Строительство города</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 3-4 Строительство города.mp3\" controls></audio></p>" +
                "<p>Глава 3-5 Кто строил башню</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 3-5 Кто строил башню.mp3\" controls></audio></p>" +
                "<p>Глава 3-6 Происхождение народов</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 3-6 Происхождение народов.mp3\" controls></audio></p>" +
                "<p>Глава 3-7 Как сбылись пророчества Ноя</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 3-7 Как сбылись пророчества Ноя.mp3\" controls></audio></p>" +
                "<p>Глава 3-8 Современные строители Вавилонской башни</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 3-8 Современные строители Вавилонской башни.mp3\" controls></audio></p>" +
                "<p>Глава 3-8 Стихотворение</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 3-8 Стихотворение.mp3\" controls></audio></p>";
            break;
        case "Глава-4":
            selection.innerHTML = "<p>Глава 4-1 Авраам, Исаак, Иаков</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 4-1 Авраам, Исаак, Иаков.mp3\" controls></audio></p>" +
                "<p>Глава 4-2 Подсчет периодов 400 и 430 лет</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 4-2 Подсчет периодов 400 и 430 лет.mp3\" controls></audio></p>" +
                "<p>Глава 4-3 Второй вариант - Духовный</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 4-3 Второй вариант - Духовный.mp3\" controls></audio></p>" +
                "<p>Глава 4-4 Выводы</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 4-4 Выводы.mp3\" controls></audio></p>" +
                "<p>Глава 4-5 Стихотворение</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 4-5 Стихотворение.mp3\" controls></audio></p>";
            break;
        case "Глава-5":
            selection.innerHTML = "<p>Глава 5-1 I 40-летнее странствование</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 5-1 I 40-летнее странствование.mp3\" controls></audio></p>" +
                "<p>Глава 5-2 Переход из Египта к горе Синай</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 5-2 Переход из Египта к горе Синай.mp3\" controls></audio></p>" +
                "<p>Глава 5-3 Рамсес</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 5-3 Рамсес.mp3\" controls></audio></p>" +
                "<p>Глава 5-4 Сокхоф</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 5-4 Сокхоф.mp3\" controls></audio></p>" +
                "<p>Глава 5-5 Ефам</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 5-5 Ефам.mp3\" controls></audio></p>" +
                "<p>Глава 5-6 Пи-Гахироф</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 5-6 Пи-Гахироф.mp3\" controls></audio></p>" +
                "<p>Глава 5-7 Мерра</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 5-7 Мерра.mp3\" controls></audio></p>" +
                "<p>Глава 5-8 Елим</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 5-8 Елим.mp3\" controls></audio></p>" +
                "<p>Глава 5-9 У Чермного моря</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 5-9 У Чермного моря.mp3\" controls></audio></p>" +
                "<p>Глава 5-10 В пустыне Син</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 5-10 В пустыне Син.mp3\" controls></audio></p>" +
                "<p>Глава 5-11 Дофка, Алуш</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 5-11 Дофка, Алуш.mp3\" controls></audio></p>" +
                "<p>Глава 5-12 Рефидим</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 5-12 Рефидим.mp3\" controls></audio></p>" +
                "<p>Глава 5-13 В пустыне Синайской</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 5-13 В пустыне Синайской.mp3\" controls></audio></p>" +
                "<p>Глава 5-14 II Духовная параллель</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 5-14 II Духовная параллель.mp3\" controls></audio></p>" +
                "<p>Глава 5-15 III От горы Синай до Рифмы</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 5-15 III От горы Синай до Рифмы.mp3\" controls></audio></p>" +
                "<p>Глава 5-16 Асироф</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 5-16 Асироф.mp3\" controls></audio></p>" +
                "<p>Глава 5-17 Рифма в пустыне Фаран</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 5-17 Рифма в пустыне Фаран.mp3\" controls></audio></p>" +
                "<p>Глава 5-18 IV Молчаливые годы</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 5-18 IV Молчаливые годы.mp3\" controls></audio></p>" +
                "<p>Глава 5-19 V Смерть Мариамь, грех Моисея и Аарона</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 5-19 V Смерть Мариамь, грех Моисея и Аарона.mp3\" controls></audio></p>" +
                "<p>Глава 5-20 VI Смерть Аарона</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 5-20 VI Смерть Аарона.mp3\" controls></audio></p>" +
                "<p>Глава 5-20 VII Вознесение медного змея</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 5-20 VII Вознесение медного змея.mp3\" controls></audio></p>" +
                "<p>Глава 5-21 На горах Аваримских</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 5-21 На горах Аваримских.mp3\" controls></audio></p>" +
                "<p>Глава 5-22 На равнинах Моавитских у Иордана</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 5-22 На равнинах Моавитских у Иордана.mp3\" controls></audio></p>" +
                "<p>Глава 5-23 VIII Последнее обращение Моисея к народу</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 5-23 VIII Последнее обращение Моисея к народу.mp3\" controls></audio></p>" +
                "<p>Глава 5-24 IX Выводы</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 5-24 IX Выводы.mp3\" controls></audio></p>" +
                "<p>Глава 5-25 Стихотворение</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 5-25 Стихотворение.mp3\" controls></audio></p>";
            break;
        case "Глава-6":
            selection.innerHTML = "<p>Глава 6-1 Исчисление народа Израильского</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 6-1 Исчисление народа Израильского.mp3\" controls></audio></p>" +
                "<p>Глава 6-2 Когда родился Вениамин</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 6-2 Когда родился Вениамин.mp3\" controls></audio></p>" +
                "<p>Глава 6-3 Второе исчисление народа Израильского</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 6-3 Второе исчисление народа Израильского.mp3\" controls></audio></p>" +
                "<p>Глава 6-4 Третье исчисление народа Израильского</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 6-4 Третье исчисление народа Израильского.mp3\" controls></audio></p>" +
                "<p>Глава 6-5 Колено Рувима</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 6-5 Колено Рувима.mp3\" controls></audio></p>" +
                "<p>Глава 6-6 Колено Симеона</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 6-6 Колено Симеона.mp3\" controls></audio></p>" +
                "<p>Глава 6-7 Колено Гада</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 6-7 Колено Гада.mp3\" controls></audio></p>" +
                "<p>Глава 6-8 Колено Иуды</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 6-8 Колено Иуды.mp3\" controls></audio></p>" +
                "<p>Глава 6-9 Колено Иссахар</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 6-9 Колено Иссахар.mp3\" controls></audio></p>" +
                "<p>Глава 6-10 Колено Завулона</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 6-10 Колено Завулона.mp3\" controls></audio></p>" +
                "<p>Глава 6-11 Колено Ефрема</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 6-11 Колено Ефрема.mp3\" controls></audio></p>" +
                "<p>Глава 6-12 Колено Манассии</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 6-12 Колено Манассии.mp3\" controls></audio></p>" +
                "<p>Глава 6-13 Колено Вениамина</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 6-13 Колено Вениамина.mp3\" controls></audio></p>" +
                "<p>Глава 6-14 Колено Дана</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 6-14 Колено Дана.mp3\" controls></audio></p>" +
                "<p>Глава 6-15 Колено Ассира</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 6-15 Колено Ассира.mp3\" controls></audio></p>" +
                "<p>Глава 6-16 Колено Неффалима</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 6-16 Колено Неффалима.mp3\" controls></audio></p>" +
                "<p>Глава 6-17 Колено Левия</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 6-17 Колено Левия.mp3\" controls></audio></p>" +
                "<p>Глава 6-18 Выводы</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 6-18 Выводы.mp3\" controls></audio></p>" +
                "<p>Глава 6-19 Стихотворение</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 6-19 Стихотворение.mp3\" controls></audio></p>";
            break;
        case "Глава-7":
            selection.innerHTML = "<p>Глава 7-1 Воинство Господне</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 7-1 Воинство Господне.mp3\" controls></audio></p>" +
                "<p>Глава 7-2 Знамя колен</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 7-2 Знамя колен.mp3\" controls></audio></p>" +
                "<p>Глава 7-3 Схема расположения</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 7-3 Схема расположения.mp3\" controls></audio></p>" +
                "<p>Глава 7-4 Переходы народа Израильского</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 7-4 Переходы народа Израильского.mp3\" controls></audio></p>" +
                "<p>Глава 7-5 Почему Господь так расположил колена</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 7-5 Почему Господь так расположил колена.mp3\" controls></audio></p>" +
                "<p>Глава 7-6 Стихотворение</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 7-6 Стихотворение.mp3\" controls></audio></p>";
            break;
        case "Глава-8":
            selection.innerHTML = "<p>Глава 8-1 Времена судей и трех первых царей</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 8-1 Времена судей и трех первых царей.mp3\" controls></audio></p>" +
                "<p>Глава 8-2 Времена правления царей</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 8-2 Времена правления царей.mp3\" controls></audio></p>" +
                "<p>Глава 8-3 Период судей</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 8-3 Период судей.mp3\" controls></audio></p>" +
                "<p>Глава 8-4 Саул первый царь</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 8-4 Саул первый царь.mp3\" controls></audio></p>" +
                "<p>Глава 8-5 Давид второй царь</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 8-5 Давид второй царь.mp3\" controls></audio></p>" +
                "<p>Глава 8-6 Соломон третий царь</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 8-6 Соломон третий царь.mp3\" controls></audio></p>" +
                "<p>Глава 8-7 Разделение истории</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 8-7 Разделение истории.mp3\" controls></audio></p>" +
                "<p>Глава 8-8 Стихотворение</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 8-8 Стихотворение.mp3\" controls></audio></p>";
            break;
        case "Глава-9":
            selection.innerHTML = "<p>Глава 9-1 Разделенное царство Израиля</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 9-1 Разделенное царство Израиля.mp3\" controls></audio></p>" +
                "<p>Глава 9-2 Цари Иудеи</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 9-2 Цари Иудеи.mp3\" controls></audio></p>" +
                "<p>Глава 9-3 Цари Самарии-Израиля</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 9-3 Цари Самарии-Израиля.mp3\" controls></audio></p>" +
                "<p>Глава 9-4 Иудея</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 9-4 Иудея.mp3\" controls></audio></p>" +
                "<p>Глава 9-5 Пророки</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 9-5 Пророки.mp3\" controls></audio></p>" +
                "<p>Глава 9-6 Стихотворение</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 9-6 Стихотворение.mp3\" controls></audio></p>";
            break;
        case "Глава-10":
            selection.innerHTML = "<p>Глава 10-1 Исцеление слепорождённых</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 10-1 Исцеление слепорождённых.mp3\" controls></audio></p>" +
                "<p>Глава 10-2 Пророчества для зрячих </p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 10-2 Пророчества для зрячих .mp3\" controls></audio></p>" +
                "<p>Глава 10-3 Проверка</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 10-3 Проверка.mp3\" controls></audio></p>" +
                "<p>Глава 10-4 Месяц рождения Христа</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 10-4 Месяц рождения Христа.mp3\" controls></audio></p>" +
                "<p>Глава 10-5 Новое летоисчесление</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 10-5 Новое летоисчесление.mp3\" controls></audio></p>" +
                "<p>Глава 10-5 Стихотворениее</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 10-5 Стихотворение.mp3\" controls></audio></p>";
            break;
        case "Глава-11":
            selection.innerHTML = "<p>Глава 11-1 Иисус и Его Церковь</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 11-1 Иисус и Его Церковь.mp3\" controls></audio></p>" +
                "<p>Глава 11-2 Первый период Церкви Связь периодов с блаженствами</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 11-2 Первый период Церкви Связь периодов с блаженствами.mp3\" controls></audio></p>" +
                "<p>Глава 11-3  Второй период Церкви</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 11-3  Второй период Церкви.mp3\" controls></audio></p>" +
                "<p>Глава 11-4  Третий период Церкви</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 11-4  Третий период Церкви.mp3\" controls></audio></p>" +
                "<p>Глава 11-5  Четвертый период Церкви</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 11-5  Четвертый период Церкви.mp3\" controls></audio></p>" +
                "<p>Глава 11-6  Пятый период Церкви</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 11-6  Пятый период Церкви.mp3\" controls></audio></p>" +
                "<p>Глава 11-7  Шестой период Церкви</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 11-7  Шестой период Церкви.mp3\" controls></audio></p>" +
                "<p>Глава 11-8  Седьмой период Церкви</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 11-8  Седьмой период Церкви.mp3\" controls></audio></p>" +
                "<p>Глава 11-9  Стихотворение</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 11-9  Стихотворение.mp3\" controls></audio></p>"
            break;
        case "Глава-12":
            selection.innerHTML = "<p>Глава 12-1  Закон и Евангелие</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 12-1  Закон и Евангелие.mp3\" controls></audio></p>" +
                "<p>Глава 12-2 Случай первый</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 12-2 Случай первый.mp3\" controls></audio></p>" +
                "<p>Глава 12-3 Случай второй</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 12-3 Случай второй.mp3\" controls></audio></p>" +
                "<p>Глава 12-4 Случай третий</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 12-4 Случай третий.mp3\" controls></audio></p>" +
                "<p>Глава 12-5 Стихотворение</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 12-5 Стихотворение.mp3\" controls></audio></p>";
            break;
    }
}

audioSelect.addEventListener("change", changeOption);

function selectedDownload() {
    var selectedDownloadOption = selectDownload.options[selectDownload.selectedIndex];
    var d = selectedDownloadOption.text;
    console.log('Test', d);
    switch (d) {
        case "PDF":
            selection.innerHTML = "<form method=\"get\" action=\"/book/book.pdf\"><button type=\"submit\"class=\"btn btn-outline-success\">Download in PDF</button></form>";
            break;
        case "EPUB":
            selection.innerHTML = "<form method=\"get\" action=\"/book/book.epub\"><button type=\"submit\"class=\"btn btn-outline-success\">Download in EPUB</button></form>";
            break;
    }
}
selectDownload.addEventListener("change", selectedDownload);
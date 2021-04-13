function PrintForm(e) {
    alert("Недопустимая длина строки");
}

var audioSelect = audioForm.formSelect;


function changeOption() {

    var selection = document.getElementById("selection");
    var selectedOption = audioSelect.options[audioSelect.selectedIndex];
    var s = selectedOption.text;
    //added row with audioplayer and download
    var audioPlayer = "";
    console.log('Test', s);
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

            break;
        case "Глава-3":

            break;
        case "Глава-4":

            break;
        case "Глава-5":

            break;
        case "Глава-6":

            break;
        case "Глава-7":

            break;
        case "Глава-8":

            break;
        case "Глава-9":

            break;
        case "Глава-10":

            break;
        case "Глава-11":

            break;
        case "Глава-12":

            break;
    }


    //selection.innerHTML = "<p style=\"text-align: left;\">" + s + audioPlayer + "</p>";
}

audioSelect.addEventListener("change", changeOption);
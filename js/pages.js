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
                "<p>Глава 1А-2 Родословная Ноя</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1А-2 Родословная Ноя.mp3\" controls></audio></p>" +
                "<p>Глава 1А-2 Родословная Ноя</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1А-2 Родословная Ноя.mp3\" controls></audio></p>" +
                "<p>Глава 1А-2 Родословная Ноя</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1А-2 Родословная Ноя.mp3\" controls></audio></p>" +
                "<p>Глава 1А-2 Родословная Ноя</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1А-2 Родословная Ноя.mp3\" controls></audio></p>" +
                "<p>Глава 1А-2 Родословная Ноя</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1А-2 Родословная Ноя.mp3\" controls></audio></p>" +
                "<p>Глава 1А-2 Родословная Ноя</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1А-2 Родословная Ноя.mp3\" controls></audio></p>" +
                "<p>Глава 1А-2 Родословная Ноя</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1А-2 Родословная Ноя.mp3\" controls></audio></p>" +
                "<p>Глава 1А-2 Родословная Ноя</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1А-2 Родословная Ноя.mp3\" controls></audio></p>" +
                "<p>Глава 1А-2 Родословная Ноя</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1А-2 Родословная Ноя.mp3\" controls></audio></p>" +
                "<p>Глава 1А-2 Родословная Ноя</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1А-2 Родословная Ноя.mp3\" controls></audio></p>" +
                "<p>Глава 1А-2 Родословная Ноя</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1А-2 Родословная Ноя.mp3\" controls></audio></p>" +
                "<p>Глава 1А-2 Родословная Ноя</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1А-2 Родословная Ноя.mp3\" controls></audio></p>" +
                "<p>Глава 1А-2 Родословная Ноя</p>" +
                "<p style=\"text-align: left;\"><audio src=\"/audiobook/Глава 1А-2 Родословная Ноя.mp3\" controls></audio></p>";
            break;
        case "Глава-1Б":

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
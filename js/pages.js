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

    switch (s) {
        case "Вступление":
            audioPlayer = "<audio src=\"/audiobook/1. Вступление.mp3\" controls></audio>";
        case "Предисловие":
            audioPlayer = "<audio src=\"/audiobook/2. Предисловие.mp3\" controls></audio>";
        case "Глава-1А":
            audioPlayer = "<audio src=\"/audiobook/Глава 1А-1. Допотопный мир.mp3\" controls></audio>";
            //audioPlayer = "<audio src=\"/audiobook/Глава 1А-2 Родословная Ноя.mp3\" controls></audio>";
        case "Глава-1Б":
            audioPlayer = "<audio src=\"/audiobook/1. Вступление.mp3\" controls></audio>";
        case "Глава-2":
            audioPlayer = "<audio src=\"/audiobook/1. Вступление.mp3\" controls></audio>";
        case "Глава-3":
            audioPlayer = "<audio src=\"/audiobook/1. Вступление.mp3\" controls></audio>";
        case "Глава-4":
            audioPlayer = "<audio src=\"/audiobook/1. Вступление.mp3\" controls></audio>";
        case "Глава-5":
            audioPlayer = "<audio src=\"/audiobook/1. Вступление.mp3\" controls></audio>";
        case "Глава-6":
            audioPlayer = "<audio src=\"/audiobook/1. Вступление.mp3\" controls></audio>";
        case "Глава-7":
            audioPlayer = "<audio src=\"/audiobook/1. Вступление.mp3\" controls></audio>";
        case "Глава-8":
            audioPlayer = "<audio src=\"/audiobook/1. Вступление.mp3\" controls></audio>";
        case "Глава-9":
            audioPlayer = "<audio src=\"/audiobook/1. Вступление.mp3\" controls></audio>";
        case "Глава-10":
            audioPlayer = "<audio src=\"/audiobook/1. Вступление.mp3\" controls></audio>";
        case "Глава-11":
            audioPlayer = "<audio src=\"/audiobook/1. Вступление.mp3\" controls></audio>";
        case "Глава-12":
            audioPlayer = "<audio src=\"/audiobook/1. Вступление.mp3\" controls></audio>";
    }


    selection.innerHTML = "<p style=\"text-align: center;\">" + s + "</p>" + audioPlayer;
}

audioSelect.addEventListener("change", changeOption);
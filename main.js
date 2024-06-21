var data = "";
        var languages = ["Python", "JavaScript", "Ruby"];

        for (var i = 0; i < languages.length; i++) {
            data += `<li>${languages[i]}</li>`;
        }

        document.querySelector("#languageList").innerHTML = data;
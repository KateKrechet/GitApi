let search = document.getElementById('search_but')
search.onclick = f1

function f1() {
    let user = document.getElementById('user').value
    let req
    if (window.XMLHttpRequest) {
        req = new XMLHttpRequest()
    } else {
        req = new ActiveXObject("Microsoft.XMLHTTP")
    }
    req.open('GET', 'https://api.github.com/users/' + user + '')
    let otvet = document.getElementById('otvet')
    req.onload = function () {
        if (req.status === 200) {
            console.log(req.response)
            spisok = JSON.parse(req.response)
            console.log(spisok)
            photo = spisok.avatar_url
            name = spisok.name
            href = spisok.html_url
            login = spisok.login
            repos = spisok.public_repos
            console.log(photo, login, name, href, repos)
            stroka = '<br><img src="' + photo + '" Width="200" Height="150">' +
                '<p>Логин: ' + login + '</p>' +
                '<p>Имя: ' + name + '</p>' +
                '<p><a href="' + href + '">Ссылка на Github</a></p>' +
                '<p>Количество репозиториев: ' + repos + '</p>'
            otvet.innerHTML = stroka
        } else {
            console.log('neok')
            stroka = '<h3>Такого пользователя нет! Повторите ввод!</h3>'
            otvet.innerHTML = stroka
        }
    }

    req.send()
}


document.querySelector('#myForm').addEventListener('submit', saveBookmark);
function saveBookmark(e) {

  e.preventDefault();
  var siteName = document.querySelector('#contact-name').value;
  var siteEmail = document.querySelector('#contact-email').value;
  var siteMes = document.querySelector('#contact-message').value;

  var info = {
    name: siteName,
    mail: siteEmail,
    mes: siteMes
  }
  if (localStorage.getItem('infos') === null) {
    var infos = [];
    infos.push(info);
    localStorage.setItem('infos', JSON.stringify(infos));
  } else {
    var infos = JSON.parse(localStorage.getItem('infos'));
    infos.push(info);
    localStorage.setItem('infos', JSON.stringify(infos));
  }

  fetchInfos();
}
function deleteBookmark(name,mail) {
  var bookmarks = JSON.parse(localStorage.getItem('infos'));
  for (var i=0; i<bookmarks.length; i++) {
    if (bookmarks[i].name === name && bookmarks[i].mail === mail)  {
      
      bookmarks.splice(i,1);
    }
  }

  localStorage.setItem('infos', JSON.stringify(bookmarks));

  fetchInfos();
}

function fetchInfos() {
  var infos = JSON.parse(localStorage.getItem('infos'));

  var infosResults = document.querySelector('#copyright');

  infosResults.innerHTML = '';

  var str = '<div class="card-deck text-center">';

  for (var i = 0; i < infos.length; i++) {
    var name = infos[i].name;
    var email = infos[i].mail;
    var mes = infos[i].mes;
    str += '<table>'
      + `<tr style="width : 100%">`
      + `<th style="width : 25%">`
      + `<h1>Name</h1>`
      + `</th>`
      + `	<th style="width : 25%">`
      + `<h1>Email</h1>`
      + `</th>`
      + `<th style="width : 50%">`
      + `<h1>Message</h1>`
      + `</th>`
      + `</tr>`
      + `<div id="infosResults">`
      + `<tr style="width : 100%">`
      + `<th style="width : 25%" id="outname">${name}</th>`
      + `<th style="width : 25%" id="outmail">${email}</th>`
      + `<th style="width : 40%" id="outmes">${mes}	</th>`
      + `<th style="width : 10%"><a onclick="deleteBookmark('${name}','${email}')" class="btn btn-danger">Delete</a></th>`
      +`</tr></div>`
  }
  str += '</table>'

  infosResults.innerHTML = str;
}



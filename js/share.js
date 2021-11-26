function shareFunction(shareID) {
  var box = document.getElementById(shareID);
  box.classList.toggle("show");
}

// SHARING DOMAIN
function waDShare(post_title,subdomain) {
  window.location = 'whatsapp://send?text=' + post_title + '%0A' + window.location.protocol + '//' + subdomain + window.location.hostname;
}
function teDShare(subdomain,post_title) {
  window.location = 'tg://msg_url?url=' + window.location.protocol + '//' + subdomain + window.location.hostname + '&text=' + post_title;
}
function twDShare(subdomain,post_title) {
  window.open ('//twitter.com/intent/tweet?text=' + post_title + '%0A' + window.location.protocol + '//' + subdomain + window.location.hostname);
}
function fbDShare(subdomain,post_title) {
  window.open ('//facebook.com/sharer/sharer.php?quote=' + post_title + '&u=' + window.location.protocol + '//' + subdomain + window.location.hostname);
}
function emDShare(subdomain,post_title) {
  window.open ('mailto:?subject=' + post_title + '&body=Check this out: %0A%0A' + window.location.protocol + '//' +  subdomain + window.location.hostname + "%0A%0A" + 'by Zi R. Lem, Screenwriter-Filmmaker');
}
function liDShare(subdomain,post_title) {
  window.open ('//linkedin.com/shareArticle?mini=true&url=' + post_title + '%0A' + window.location.protocol + '//' + subdomain + window.location.hostname);
}
//function mDShare(subdomain,post_title) {
//  window.open ('fb-messenger://share?link=' + post_title + '%0A' + window.location.protocol + '//' + subdomain + window.location.hostname);
//}
//function gDShare(subdomain,post_title) {
//  window.open ('//plus.google.com/share?url=' + post_title + '%0A' + window.location.protocol + '//' + subdomain + window.location.hostname);
//}


// SHARING PAGE
function waHShare(post_title) {
  window.location = 'whatsapp://send?text=' + post_title + '%0A' + location.href.replace(location.hash,"");
}
function teHShare(post_title) {
  window.location = 'tg://msg_url?url=' + location.href.replace(location.hash,"") + '&text=' + post_title;
}
function twHShare(post_title) {
  window.open ('//twitter.com/intent/tweet?text=' + post_title + '%0A' + location.href.replace(location.hash,""));
}
function fbHShare(post_title) {
  window.open ('//facebook.com/sharer/sharer.php?quote=' + post_title + '&u=' + location.href.replace(location.hash,""));
}
function emHShare(post_title) {
  window.open ('mailto:?subject=' + post_title + '&body=Check this out: %0A%0A' + location.href.replace(location.hash,"") + "%0A%0A" + 'by Zi R. Lem, Screenwriter-Filmmaker');
}
function liHShare(post_title) {
  window.open ('//linkedin.com/shareArticle?mini=true&url='+ post_title + '%0A' + location.href.replace(location.hash,""));
}
//function mHShare(post_title) {
//  window.open ('fb-messenger://share?link=' + post_title + '%0A' + location.href.replace(location.hash,""));
//}
//function gHShare(post_title) {
//  window.open ('//plus.google.com/share?url=' + post_title + '%0A' + location.href.replace(location.hash,""));
//}



// SHARING POST
function waShare(post,post_title) {
  var byname = '%0Aby Zi R. Lem, Screenwriter-Filmmaker%0A';
  window.location = 'whatsapp://send?text=' + post_title + '%0A' + location.href.replace(location.hash,"") + '%23' + post;
}
function teShare(post,post_title) {
  var byname = '%0Aby Zi R. Lem, Screenwriter-Filmmaker%0A';
  window.location = 'tg://msg_url?url=' + location.href.replace(location.hash,"")+ '%23' + post + '&text=' + post_title;
}
function twShare(post,post_title) {
  var byname = '%0Aby Zi R. Lem, Screenwriter-Filmmaker%0A';
  window.open ('//twitter.com/intent/tweet?text=' + post_title + '%0A' + location.href.replace(location.hash,"") + '%23' + post);
}
function fbShare(post,post_title) {
  var byname = '%0Aby Zi R. Lem, Screenwriter-Filmmaker%0A';
  window.open ('//facebook.com/sharer/sharer.php?quote=' + post_title + '&u=' + location.href.replace(location.hash,"") + '%23' + post);
}
function emShare(post,post_title) {
  var byname = '%0Aby Zi R. Lem, Screenwriter-Filmmaker%0A';
  window.open ('mailto:?subject=' + post_title + '&body=Check this out: %0A%0A' + location.href.replace(location.hash,"") + "#" + post + "%0A%0A" + document.getElementsByTagName("meta")[5].content + "%0A%0A" + byname);
}
function liShare(post,post_title) {
  var byname = '%0Aby Zi R. Lem, Screenwriter-Filmmaker%0A';
  window.open ('//linkedin.com/shareArticle?mini=true&url=' + post_title + '%0A' + location.href.replace(location.hash,"") + '%23' + post);
}
//function mShare(post,post_title) {
//  var byname = '%0Aby Zi R. Lem, Screenwriter-Filmmaker%0A';
//  window.open ('fb-messenger://share?link=' + post_title + '%0A' + location.href.replace(location.hash,"") + '%23' + post);
//}
//function gShare(post,post_title) {
//  var byname = '%0Aby Zi R. Lem, Screenwriter-Filmmaker%0A';
//  window.open ('//plus.google.com/share?url=' + post_title + '%0A' + location.href.replace(location.hash,"") + '%23' + post);
//}



// SHARING SUBDOMAIN
function wasubShare(subdomain,post_title) {
  window.location = 'whatsapp://send?text=' + post_title + '%0A' + window.location.protocol + '//' + subdomain + "." + window.location.hostname;
}
function tesubShare(subdomain,post_title) {
  window.location = 'tg://msg_url?url=' + window.location.protocol + '//' + subdomain + "." + window.location.hostname + '&text=' + post_title;
}
function twsubShare(subdomain,post_title) {
  window.open ('//twitter.com/intent/tweet?text=' + post_title + '%0A' + window.location.protocol + '//' + subdomain + "." + window.location.hostname);
}
function fbsubShare(subdomain,post_title) {
  window.open ('//facebook.com/sharer/sharer.php?quote=' + post_title + '&u=' + window.location.protocol + '//' + subdomain + "." + window.location.hostname);
}
function emsubShare(subdomain,post_title) {
  window.open ('mailto:?subject=' + post_title + '&body=Check this out: %0A%0A' + window.location.protocol + '//' +  subdomain + "." + window.location.hostname + "%0A%0A" + 'by Zi R. Lem, Screenwriter-Filmmaker');
}
function lisubShare(subdomain,post_title) {
  window.open ('//linkedin.com/shareArticle?mini=true&url=' + post_title + '%0A' + window.location.protocol + '//' + subdomain + "." + window.location.hostname);
}
//function msubShare(subdomain,post_title) {
//  window.open ('fb-messenger://share?link=' + post_title + '%0A' + window.location.protocol + '//' + subdomain + "." + window.location.hostname);
//}
//function gsubShare(subdomain,post_title) {
//  window.open ('//plus.google.com/share?url=' + post_title + '%0A' + window.location.protocol + '//' + subdomain + "." + window.location.hostname);
//}



// SHARING SUBDOMAIN PAGE
function wasubpShare(subdomain,page,post_title) {
  window.location = 'whatsapp://send?text=' + post_title + '%0A' + window.location.protocol + '//' + subdomain + "." + window.location.hostname + "/" + page + ".html";
}
function tesubpShare(subdomain,page,post_title) {
  window.location = 'tg://msg_url?url=' + window.location.protocol + '//' + subdomain + "." + window.location.hostname + "/" + page + ".html%0A&text=" + post_title;
}
function twsubpShare(subdomain,page,post_title) {
  window.open ('//twitter.com/intent/tweet?text=' + post_title + '%0A' + window.location.protocol + '//' + subdomain + "." + window.location.hostname + "/" + page + ".html");
}
function fbsubpShare(subdomain,page,post_title) {
  window.open ('//facebook.com/sharer/sharer.php?quote=' + post_title + '&u=' + window.location.protocol + '//' + subdomain + "." + window.location.hostname + "/" + page + ".html");
}
function emsubpShare(subdomain,page,post_title) {
  window.open ('mailto:?subject=' + post_title + '&body=Check this out: %0A%0A' + window.location.protocol + '//' +  subdomain + "." +window.location.hostname + "/" + page + ".html" + "%0A%0A" + 'by Zi R. Lem, Screenwriter-Filmmaker');
}
function lisubpShare(subdomain,page,post_title) {
  window.open ('//linkedin.com/shareArticle?mini=true&url=' + post_title + '%0A' + window.location.protocol + '//' + subdomain + "." + window.location.hostname + "/" + page + ".html");
}



// REDIRECTING SUBDOMAIN
function locationHashChanged() {
    if (location.hash == "#Spaceman") {
        window.location.assign("https://spaceman.zilem.studio");
    }
}

window.onhashchange = locationHashChanged;

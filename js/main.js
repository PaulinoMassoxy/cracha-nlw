const socialMedia = {
  github: 'paulinomassoxy',
  youtube: 'UC-AafSE0UpJfGGPpro15rMw',
  facebook: 'noliupamassoxi.querido',
  instagram: 'paulinomassoxy',
  twitter: 'paulinomassoxy'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${socialMedia[social]}`
    // alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfo() {
  const url = `https://api.github.com/users/${socialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfo()

window.addEventListener('load', () => {
    if (window.location.pathname !== '/issues/' && window.location.search !== '?filter=10007') {
        return
    }

    let colours = document.querySelectorAll('.customfield_10017')
    const colourMap = [
        yellow: '',
        blue: ''
    ]
    colours.forEach((colour) => {
        let colourCode = typeof colourMap[colour.innerText] === 'string'
            ? colourMap[colour.innerText]
            : colour.innerText;
        colour.innerHTML = '<span style="width: 10px; height: 10px; background: ' + colourCode + '; display: inline-block;"></span>';
    })
    document.querySelector('.headerrow-customfield_10017 span').innerText = 'Status'
});

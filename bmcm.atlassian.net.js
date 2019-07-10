window.addEventListener('load', () => {
    if (window.location.pathname !== '/issues/' && window.location.search !== '?filter=10007') {
        return
    }

    const colours = document.querySelectorAll('.customfield_10017')
    const colourMap = {
        yellow: '#F7B500',
        blue: '#0091FF',
        red: '#E02020',
        green: '#6DD400'
    }
    colours.forEach((colour) => {
        let colourCode = typeof colourMap[colour.innerText] === 'string'
            ? colourMap[colour.innerText]
            : colour.innerText;
        colour.innerHTML = '<span style="width: 24px; height: 24px; background: ' + colourCode + '; border-radius: 12px; display: inline-block;">' +
                '<span style="width: 22px; height: 22px; display: inline-block; border-radius: 12px; border: 1px solid rgba(0, 0, 0, 0.18);"></span>'
            '</span>';
    })
    document.querySelector('.headerrow-customfield_10017 span').innerText = 'Risk'
});

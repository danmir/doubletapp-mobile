module.exports = {
    rootUrl: 'http://127.0.0.1:3000',
    gridUrl: 'http://127.0.0.1:4444/wd/hub',

    browsers: {
        chrome_768x600: {
            windowSize: '786x600',
            compositeImage: true,
            desiredCapabilities: {
                browserName: 'chrome'
            }
        },
        chrome_425x600: {
            windowSize: '425x600',
            compositeImage: true,
            desiredCapabilities: {
                browserName: 'chrome'
            }
        },
        chrome_320x600: {
            windowSize: '320x600',
            compositeImage: true,
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }
    }
};
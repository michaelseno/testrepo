exports.option_shareit = {
    desiredCapabilities: {
        browserName: '',
        'appium-version': '1.7.2',
        platformName: 'Android',
        platformVersion: '8.0',
        deviceName: '8UEDU17C11013195',
        app: '/Users/michaelseno/Documents/firstAndroidTest/apk/SHAREit_4.0.38_ww.apk',
        newCommandTimeout: '600000',
        appActivity: 'com.lenovo.anyshare.ApMainActivity',
        appPackage: 'com.lenovo.anyshare.gps',
    },
    host: 'localhost',
    port: 4723
};

exports.option_wispi = {
    desiredCapabilities: {
        browserName: '',
        'appium-version': '1.7.2',
        platformName: 'Android',
        platformVersion: '8.0',
        deviceName: '8UEDU17C11013195',
        app: '/Users/michaelseno/Documents/firstAndroidTest/apk/wispi-production-debug-release_3.0.3.2-null-sprint-3.0.3.339.apk',
        newCommandTimeout: '600000',
        appWaitActivity: '*.MainActivity,*.SplashScreen',
        appPackage: 'com.mywispi.wispiapp',
    },
    host: 'localhost',
    port: 4723
};
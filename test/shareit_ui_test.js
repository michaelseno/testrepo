var chai = require('chai').assert;
var webdriverio = require('webdriverio');
var options = {
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
var client = webdriverio.remote(options);
var errorMsg = 'ERROR: not in the correct Activity';


describe('ShareIt UI TEST', function() {
    it('Install and Open App', async function() {
        await client.init();
        await client.pause(3000);
        await client.click('#button2');
    }).timeout(50000);

     it('Press Start',async function() {
        var activity = await client.getCurrentDeviceActivity();
        var expectedActivity = 'com.lenovo.anyshare.ApMainActivity';
        chai.equal(activity,expectedActivity,errorMsg); 
        await client.click('#ov');
    }).timeout(50000);

     it('Enter name and Enter ShareIt',async function() {   
        var activity = await client.getCurrentDeviceActivity();
        var expectedActivity = 'com.lenovo.anyshare.account.AccountSettingsActivity';
        chai.equal(activity,expectedActivity,errorMsg);  
        var inputPhn = '#c0';
        await client.setValue(inputPhn, 'michaeljordanseno');
        await client.hideDeviceKeyboard();
        await client.click('#c5');
        await client.back();
        await client.back();        
    }).timeout(50000);

    it('validation if in the correct page', async function() {
        var activity = await client.getCurrentDeviceActivity();
        var expectedActivity = 'com.lenovo.anyshare.main.MainActivity';
        chai.equal(activity,expectedActivity,errorMsg); 
    }).timeout(50000);;

     it('should end the session', async function() {
       await client.pause(6000).end();
    }).timeout(50000);
});
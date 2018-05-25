// var expect = require('chai').expect;
// var SignupPage = require('../Pages/signup.page.js');
var webdriverio = require('webdriverio');
var config = require('./helpers/desiredCapabilities').option_wispi;
var client = webdriverio.remote(config);

   describe('WISPI UI TESTS',   function() {
       it('Install and Open App', async function() {
           await client.init();
           await client.pause(3000);
       }).timeout(50000);
   
        it('Start Chat and Permissions',async function() {
          // await  client.click(SignupPage.startbtn);
           //await SignupPage.startbtn.click();
          // await SignupPage.menunxt.click();
           await client.click('#start_chatting_btn');
           await client.click("//*[@class='android.widget.Button'][2]");
           await client.click("//*[@class='android.widget.Button'][2]");
       }).timeout(50000);
   
        it('User Name and Next',async function() {
           await client.background(1);
           var inputPhn = '#edit_input_name';
           await client.setValue(inputPhn, 'Test Wispi');
           await client.click('#menu_next');
       }).timeout(50000);

       it('should enter phone number and continue',async function() {
           var inputPhn = '#edit_input_phone';
           await client.setValue(inputPhn, '52115457');
           await client.click('#menu_done');
           await client.click("//*[@class='android.widget.Button'][2]");
       }).timeout(50000);

        it('should end the session', async function() {
          await client.pause(6000).end();
       }).timeout(50000);
     
   });
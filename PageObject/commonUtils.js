class commonUtils {
    constructor(client){
        this.client = client;
    }
    async click(element) {
        const errorMsg = UNSUCCESSFULL_MESSAGE + locator;
        await this.executeWithErrorHandling(async () => {
          await this.client.waitForExist(locator, 20000);
          await this.client.click(locator);
        }, errorMsg);   
    }
};
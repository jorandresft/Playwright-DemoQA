import { BasePage } from "./BasePage";
import { DemoQaLocators } from "./locators/DemoQaLocators";
import { UserData } from "./locators/data/UserData";

export class FillFormPage extends BasePage {

    async selectForm () {
        await this.clickOn(DemoQaLocators.formTitle);
    }

    async selecPracticetForm () {
        await this.clickOn(DemoQaLocators.practiceFormSpan);
    }

    async fillForm () {
        await this.fillField(DemoQaLocators.firtsNameInput, UserData.firtsNameInput);
        await this.fillField(DemoQaLocators.lastNameInput, UserData.lastNameInput);
        await this.fillField(DemoQaLocators.emailInput, UserData.emailInput);
        await this.clickOn(DemoQaLocators.genderLabel);
        await this.fillField(DemoQaLocators.mobilNumberInput, UserData.mobilNumberInput);
        await this.clickOn(DemoQaLocators.stateDiv);
        await this.clickOn(DemoQaLocators.state);
        await this.clickOn(DemoQaLocators.cityDiv);
        await this.clickOn(DemoQaLocators.city);
        await this.clickOn(DemoQaLocators.submitButton);
    }

    async confirmationFillForm () {
        await this.expectVisible(DemoQaLocators.finalMessage);
    }
}
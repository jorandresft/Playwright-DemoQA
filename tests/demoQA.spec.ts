import { BasePage } from "../pages/BasePage";
import { FillFormPage } from "../pages/FillFormPage";
import { test, expect } from "@playwright/test";

test.describe('Test suite', async () => {
    
    test('Validate final message when completing the form', async ({ page }) => {
        const base = new BasePage(page);
        const formPage = new FillFormPage(page);

        await test.step('User go to url', async () => {
            await base.loadWeb('https://demoqa.com/');
        });

        await test.step('User select form and practice form', async () => {
            await formPage.selectForm();
            await formPage.selecPracticetForm();
        });

        await test.step('User fill form', async () => {
            await formPage.fillForm();
        });

        await test.step('validated confirmation fill form', async() => {
            await formPage.confirmationFillForm();
        });
    });
});


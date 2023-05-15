describe('My Application', () => {
    it('should have the title on the page', async () => {
        //e2e_username and e2e_password are set by the npmExecuteEndToEndTests step
        const usernameVar=process.env.e2e_username
        const passwordVar=process.env.e2e_password
        await $('#j_username').setValue(usernameVar);
        await $('button[type="submit"]').click();
        const continue_button=await $('#logOnFormSubmit');
        await continue_button.click();
        await $('#j_password').setValue(passwordVar);
        await $('[type="submit"]').click();
        await expect($('body')).toHaveTextContaining('DSAG Technologietage 2023');
    });
});
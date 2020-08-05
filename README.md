# Angular OpenID Connect XSense Integration

## Ensurity Sample Angular Project

- Download the XSense_Angular_OIDC_Sample_App.zip
- Extract zip file contents
- Open the folder contents in any IDE (ex: Visual Studio Code)

## Change OpenID Client Settings

- Modify the values in `src\app\services\auth.service.ts\getClientSettings()` method

- The following values has to be changed as per the hosted web app.

- The **sample** data is as follows

  ` client_id: 'angular_spa',
  client_secret:'fd543361-24ab-469d-ae85-34cb13685547',
  redirect_uri: 'https://xsense-demo-sp.azurewebsites.net/auth-callback',
  post_logout_redirect_uri: 'https://xsense-demo-sp.azurewebsites.net/',`

## Update Routing (if required)

- Navigate to `\src\app\app-routing.module.ts`
- Update `Routes` variable with relevant paths

## Host the Angular Application

Host the application in any cloud or on-prem server

> Make sure the configuration matches to configured OpenID client settings

## Configure XSense IdP

- With SP OpenID client details configure the IdP
- Create users on XSense IdP

## Test the deployment

1. Open the URL
2. Click on “Login with XSense”
3. Browser redirects to “XSense IdP”
4. User performs the authentication with XSense
5. Successful authentication navigates to SP Home page

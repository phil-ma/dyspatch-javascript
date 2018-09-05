# Dyspatch Javascript API Client

## Introduction

The Dyspatch API is based on the REST paradigm, and features resource based URLs with standard 
HTTP response codes to indicate errors. We use standard HTTP authentication and request verbs, 
and all responses are JSON formatted. See our [Implementation Guide](https://docs.dyspatch.io/development/implementing_dyspatch/)
for more details on how to implement Dyspatch. 

This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 2018.08
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

For more information, please visit [https://docs.dyspatch.io](https://docs.dyspatch.io)

## Installation

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install dyspatch-client --save
```

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var DyspatchClient = require('dyspatch-client');

var defaultClient = DyspatchClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = "DYSPATCH_API_KEY"
Bearer.apiKeyPrefix['Authorization'] = "Bearer"

var api = new DyspatchClient.LocalizationsApi()

var localizationId = "loc_12345abcdef"; // {String} A localization ID

var accept = "application/vnd.dyspatch.2018.08+json"; // {String} A version of the API that should be used for the request. For example, to use version \"2018.08\", set the value to \"application/vnd.dyspatch.2018.08+json\"


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.localizationsLocalizationIdGet(localizationId, accept, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.dyspatch.io*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DyspatchClient.LocalizationsApi* | [**localizationsLocalizationIdGet**](docs/LocalizationsApi.md#localizationsLocalizationIdGet) | **GET** /localizations/{localizationId} | Get Localization Object by ID
*DyspatchClient.TemplatesApi* | [**templatesGet**](docs/TemplatesApi.md#templatesGet) | **GET** /templates | List Templates
*DyspatchClient.TemplatesApi* | [**templatesTemplateIdGet**](docs/TemplatesApi.md#templatesTemplateIdGet) | **GET** /templates/{templateId} | Get Template by ID


## Documentation for Models

 - [DyspatchClient.APIError](docs/APIError.md)
 - [DyspatchClient.CompiledRead](docs/CompiledRead.md)
 - [DyspatchClient.CreatedAt](docs/CreatedAt.md)
 - [DyspatchClient.Cursor](docs/Cursor.md)
 - [DyspatchClient.LanguageId](docs/LanguageId.md)
 - [DyspatchClient.LocalizationId](docs/LocalizationId.md)
 - [DyspatchClient.LocalizationMetaRead](docs/LocalizationMetaRead.md)
 - [DyspatchClient.LocalizationName](docs/LocalizationName.md)
 - [DyspatchClient.LocalizationRead](docs/LocalizationRead.md)
 - [DyspatchClient.LocalizationUrl](docs/LocalizationUrl.md)
 - [DyspatchClient.TemplateDescription](docs/TemplateDescription.md)
 - [DyspatchClient.TemplateId](docs/TemplateId.md)
 - [DyspatchClient.TemplateMetaRead](docs/TemplateMetaRead.md)
 - [DyspatchClient.TemplateName](docs/TemplateName.md)
 - [DyspatchClient.TemplateRead](docs/TemplateRead.md)
 - [DyspatchClient.TemplateUrl](docs/TemplateUrl.md)
 - [DyspatchClient.TemplatesRead](docs/TemplatesRead.md)
 - [DyspatchClient.UpdatedAt](docs/UpdatedAt.md)


## Documentation for Authorization

As in the example below, make sure to add 'Bearer' to the Authorization field.

```javascript
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = "DYSPATCH_API_KEY"
Bearer.apiKeyPrefix['Authorization'] = "Bearer"
```

### Bearer

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header


## Author

support@dyspatch.io

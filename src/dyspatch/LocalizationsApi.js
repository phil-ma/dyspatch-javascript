/**
 * Dyspatch API
 * # Introduction  The Dyspatch API is based on the REST paradigm, and features resource based URLs with standard HTTP response codes to indicate errors. We use standard HTTP authentication and request verbs, and all responses are JSON formatted. See our [Implementation Guide](https://docs.dyspatch.io/development/implementing_dyspatch/) for more details on how to implement Dyspatch. 
 *
 * OpenAPI spec version: 2018.08
 * Contact: support@dyspatch.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'dyspatch/APIError', 'dyspatch/LocalizationRead'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../dyspatch/APIError'), require('../dyspatch/LocalizationRead'));
  } else {
    // Browser globals (root is window)
    if (!root.Dyspatch) {
      root.Dyspatch = {};
    }
    root.Dyspatch.LocalizationsApi = factory(root.Dyspatch.ApiClient, root.Dyspatch.APIError, root.Dyspatch.LocalizationRead);
  }
}(this, function(ApiClient, APIError, LocalizationRead) {
  'use strict';

  /**
   * Localizations service.
   * @module dyspatch/LocalizationsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new LocalizationsApi. 
   * @alias module:dyspatch/LocalizationsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the localizationsLocalizationIdGet operation.
     * @callback module:dyspatch/LocalizationsApi~localizationsLocalizationIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:dyspatch/LocalizationRead} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Localization Object by ID
     * Returns a specific localization object with a matching ID
     * @param {String} localizationId A localization ID
     * @param {String} accept A version of the API that should be used for the request. For example, to use version \&quot;2018.08\&quot;, set the value to \&quot;application/vnd.dyspatch.2018.08+json\&quot;
     * @param {module:dyspatch/LocalizationsApi~localizationsLocalizationIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:dyspatch/LocalizationRead}
     */
    this.localizationsLocalizationIdGet = function(localizationId, accept, callback) {
      var postBody = null;

      // verify the required parameter 'localizationId' is set
      if (localizationId === undefined || localizationId === null) {
        throw new Error("Missing the required parameter 'localizationId' when calling localizationsLocalizationIdGet");
      }

      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling localizationsLocalizationIdGet");
      }


      var pathParams = {
        'localizationId': localizationId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Accept': accept
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/vnd.dyspatch.2018.08+json'];
      var returnType = LocalizationRead;

      return this.apiClient.callApi(
        '/localizations/{localizationId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
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
    define(['ApiClient', 'dyspatch/CompiledRead', 'dyspatch/LocalizationMetaRead'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CompiledRead'), require('./LocalizationMetaRead'));
  } else {
    // Browser globals (root is window)
    if (!root.Dyspatch) {
      root.Dyspatch = {};
    }
    root.Dyspatch.TemplateRead = factory(root.Dyspatch.ApiClient, root.Dyspatch.CompiledRead, root.Dyspatch.LocalizationMetaRead);
  }
}(this, function(ApiClient, CompiledRead, LocalizationMetaRead) {
  'use strict';




  /**
   * The TemplateRead model module.
   * @module dyspatch/TemplateRead
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>TemplateRead</code>.
   * @alias module:dyspatch/TemplateRead
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>TemplateRead</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:dyspatch/TemplateRead} obj Optional instance to populate.
   * @return {module:dyspatch/TemplateRead} The populated <code>TemplateRead</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('localizations')) {
        obj['localizations'] = ApiClient.convertToType(data['localizations'], [LocalizationMetaRead]);
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
      if (data.hasOwnProperty('updatedAt')) {
        obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Date');
      }
      if (data.hasOwnProperty('compiled')) {
        obj['compiled'] = CompiledRead.constructFromObject(data['compiled']);
      }
    }
    return obj;
  }

  /**
   * An opaque, unique identifier for a template
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The name of a template
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * A description of the template
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The API url for a specific template
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * A list of the Template's available localizations
   * @member {Array.<module:dyspatch/LocalizationMetaRead>} localizations
   */
  exports.prototype['localizations'] = undefined;
  /**
   * The time of initial creation
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;
  /**
   * The time of last update
   * @member {Date} updatedAt
   */
  exports.prototype['updatedAt'] = undefined;
  /**
   * @member {module:dyspatch/CompiledRead} compiled
   */
  exports.prototype['compiled'] = undefined;



  return exports;
}));


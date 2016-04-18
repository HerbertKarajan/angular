'use strict';"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
/**
 * This is a set of classes and objects that can be used both in the browser and on the server.
 */
var dom_adapter_1 = require('angular2/src/platform/dom/dom_adapter');
exports.DOM = dom_adapter_1.DOM;
exports.setRootDomAdapter = dom_adapter_1.setRootDomAdapter;
exports.DomAdapter = dom_adapter_1.DomAdapter;
var dom_renderer_1 = require('angular2/src/platform/dom/dom_renderer');
exports.DomRenderer = dom_renderer_1.DomRenderer;
var dom_tokens_1 = require('angular2/src/platform/dom/dom_tokens');
exports.DOCUMENT = dom_tokens_1.DOCUMENT;
var shared_styles_host_1 = require('angular2/src/platform/dom/shared_styles_host');
exports.SharedStylesHost = shared_styles_host_1.SharedStylesHost;
exports.DomSharedStylesHost = shared_styles_host_1.DomSharedStylesHost;
var dom_events_1 = require('angular2/src/platform/dom/events/dom_events');
exports.DomEventsPlugin = dom_events_1.DomEventsPlugin;
var event_manager_1 = require('angular2/src/platform/dom/events/event_manager');
exports.EVENT_MANAGER_PLUGINS = event_manager_1.EVENT_MANAGER_PLUGINS;
exports.EventManager = event_manager_1.EventManager;
exports.EventManagerPlugin = event_manager_1.EventManagerPlugin;
__export(require('angular2/src/platform/dom/debug/by'));
__export(require('angular2/src/platform/dom/debug/ng_probe'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uX2RvbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtaFk1RHVtV1IudG1wL2FuZ3VsYXIyL3BsYXRmb3JtL2NvbW1vbl9kb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztHQUVHO0FBQ0gsNEJBQWlELHVDQUF1QyxDQUFDO0FBQWpGLGdDQUFHO0FBQUUsNERBQWlCO0FBQUUsOENBQXlEO0FBQ3pGLDZCQUEwQix3Q0FBd0MsQ0FBQztBQUEzRCxpREFBMkQ7QUFDbkUsMkJBQXVCLHNDQUFzQyxDQUFDO0FBQXRELHlDQUFzRDtBQUM5RCxtQ0FBb0QsOENBQThDLENBQUM7QUFBM0YsaUVBQWdCO0FBQUUsdUVBQXlFO0FBQ25HLDJCQUE4Qiw2Q0FBNkMsQ0FBQztBQUFwRSx1REFBb0U7QUFDNUUsOEJBSU8sZ0RBQWdELENBQUM7QUFIdEQsc0VBQXFCO0FBQ3JCLG9EQUFZO0FBQ1osZ0VBQ3NEO0FBQ3hELGlCQUFjLG9DQUFvQyxDQUFDLEVBQUE7QUFDbkQsaUJBQWMsMENBQTBDLENBQUMsRUFBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBpcyBhIHNldCBvZiBjbGFzc2VzIGFuZCBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWQgYm90aCBpbiB0aGUgYnJvd3NlciBhbmQgb24gdGhlIHNlcnZlci5cbiAqL1xuZXhwb3J0IHtET00sIHNldFJvb3REb21BZGFwdGVyLCBEb21BZGFwdGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2RvbV9hZGFwdGVyJztcbmV4cG9ydCB7RG9tUmVuZGVyZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9kb20vZG9tX3JlbmRlcmVyJztcbmV4cG9ydCB7RE9DVU1FTlR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9kb20vZG9tX3Rva2Vucyc7XG5leHBvcnQge1NoYXJlZFN0eWxlc0hvc3QsIERvbVNoYXJlZFN0eWxlc0hvc3R9IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9kb20vc2hhcmVkX3N0eWxlc19ob3N0JztcbmV4cG9ydCB7RG9tRXZlbnRzUGx1Z2lufSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2V2ZW50cy9kb21fZXZlbnRzJztcbmV4cG9ydCB7XG4gIEVWRU5UX01BTkFHRVJfUExVR0lOUyxcbiAgRXZlbnRNYW5hZ2VyLFxuICBFdmVudE1hbmFnZXJQbHVnaW5cbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9ldmVudHMvZXZlbnRfbWFuYWdlcic7XG5leHBvcnQgKiBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2RlYnVnL2J5JztcbmV4cG9ydCAqIGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9kb20vZGVidWcvbmdfcHJvYmUnO1xuIl19
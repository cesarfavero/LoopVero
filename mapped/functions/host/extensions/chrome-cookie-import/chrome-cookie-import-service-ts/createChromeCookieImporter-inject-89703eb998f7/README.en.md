# `createChromeCookieImporter/inject`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/chrome-cookie-import/chrome-cookie-import-service.ts` · [Module README](../../../../../../modules/host/extensions/chrome-cookie-import/chrome-cookie-import-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:506700-506720](../../../../../../../reference/runtime/host-main.cjs#L506700-L506720) | `ArrowFunctionExpression` | yes | `cookies` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:506700-506720](../../../../../../../reference/runtime/host-main.cjs#L506700-L506720) | 3 | 0 | 3 | 2 | 1 | 0 |

### host:506700

Calls written directly in this body: `.catch`, `JSON.stringify`, `cookies.filter`, `deps.isEnabled`, `deps.log`, `deps.removeBatchFile`, `deps.runImportScript`, `deps.writeBatchFile`, `new ChromeCookieImportGateOffError`, `parseImportOutcome`.

Explicit throw targets: `ChromeCookieImportGateOffError`.

SHA-256 of the source span: `becde4560824b1210b6f4b9207cfc8e6637590727e6e87046fe800f26b02c7ca`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `parseImportOutcome`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/chrome-cookie-import/chrome-cookie-import-service.ts` · [Module README](../../../../../../modules/host/extensions/chrome-cookie-import/chrome-cookie-import-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:506665-506693](../../../../../../../reference/runtime/host-main.cjs#L506665-L506693) | `FunctionDeclaration` | no | `stdout` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:506665-506693](../../../../../../../reference/runtime/host-main.cjs#L506665-L506693) | 8 | 0 | 0 | 1 | 3 | 1 |

### host:506665

Calls written directly in this body: `.at`, `.filter`, `.map`, `JSON.parse`, `asCount`, `new ChromeCookieImportResultError`, `stdout.split`.

Assignment or increment targets: `parsed2`.

Explicit throw targets: `ChromeCookieImportResultError`.

SHA-256 of the source span: `2cd72cf773f97747dbf51201fb2c4c6752e03a77d97eef32689500cc5e86abbc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

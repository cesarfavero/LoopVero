# `documentToolsFor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/documents/document-asset-box-reader.ts` · [Module README](../../../../../../../modules/core/runner/tools/documents/document-asset-box-reader-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776619-776621](../../../../../../../../reference/runtime/host-main.cjs#L776619-L776621) | `FunctionDeclaration` | no | `host, port, view` |
| [evaluation:576270-576272](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576270-L576272) | `FunctionDeclaration` | no | `host, port, view` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776619-776621](../../../../../../../../reference/runtime/host-main.cjs#L776619-L776621) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576270-576272](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576270-L576272) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:776619

Calls written directly in this body: `createDocumentTools`, `documentAssetBoxReader`.

SHA-256 of the source span: `7ef7e121da0ee770a011c1110348a143c12af292ac944b24087ecfa059c30035`.

### evaluation:576270

Calls written directly in this body: `createDocumentTools`, `documentAssetBoxReader`.

SHA-256 of the source span: `7ef7e121da0ee770a011c1110348a143c12af292ac944b24087ecfa059c30035`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

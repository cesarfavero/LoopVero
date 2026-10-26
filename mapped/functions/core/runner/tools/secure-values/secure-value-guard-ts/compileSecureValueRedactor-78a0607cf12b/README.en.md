# `compileSecureValueRedactor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/secure-value-guard.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/secure-value-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767700-767724](../../../../../../../../reference/runtime/host-main.cjs#L767700-L767724) | `FunctionDeclaration` | no | `values` |
| [evaluation:563217-563241](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563217-L563241) | `FunctionDeclaration` | no | `values` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767700-767724](../../../../../../../../reference/runtime/host-main.cjs#L767700-L767724) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:563217-563241](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563217-L563241) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:767700

Calls written directly in this body: `.join`, `.sort`, `inText.map`, `new RegExp`, `redactable.filter`, `values.filter`.

SHA-256 of the source span: `79a3691cd89f82c9423d557e94d0a7cd698848cda490d508cd1d15046e18955c`.

### evaluation:563217

Calls written directly in this body: `.join`, `.sort`, `inText.map`, `new RegExp`, `redactable.filter`, `values.filter`.

SHA-256 of the source span: `79a3691cd89f82c9423d557e94d0a7cd698848cda490d508cd1d15046e18955c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

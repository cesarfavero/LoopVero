# `toModelVisibleMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/model-visible-path-middleware.ts` · [Module README](../../../../../modules/core/runner/model-visible-path-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:586815-586832](../../../../../../reference/runtime/sand-eval-runner.cjs#L586815-L586832) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586815-586832](../../../../../../reference/runtime/sand-eval-runner.cjs#L586815-L586832) | 7 | 0 | 0 | 4 | 0 | 0 |

### evaluation:586815

Calls written directly in this body: `toModelVisibleAssistantMessage`, `toModelVisibleText`, `toModelVisibleToolContent`, `toModelVisibleUserContent`.

SHA-256 of the source span: `1e00fa45d0b4a378a0c37afe656d0789b7c58ba15eefebfeb0694ae420628b3f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

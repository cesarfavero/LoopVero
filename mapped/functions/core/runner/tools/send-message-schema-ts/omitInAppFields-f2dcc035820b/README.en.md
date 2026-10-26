# `omitInAppFields`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-schema.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-schema-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:741997-741999](../../../../../../../reference/runtime/host-main.cjs#L741997-L741999) | `FunctionDeclaration` | no | `schema3, mask` |
| [evaluation:482944-482946](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482944-L482946) | `FunctionDeclaration` | no | `schema3, mask` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741997-741999](../../../../../../../reference/runtime/host-main.cjs#L741997-L741999) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:482944-482946](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482944-L482946) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:741997

Calls written directly in this body: `schema3.omit`.

SHA-256 of the source span: `5139390c1622bdd69a46246fb7d5fd1dbb66f08716622a0f74891b985907ebf2`.

### evaluation:482944

Calls written directly in this body: `schema3.omit`.

SHA-256 of the source span: `5139390c1622bdd69a46246fb7d5fd1dbb66f08716622a0f74891b985907ebf2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

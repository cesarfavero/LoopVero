# `classifyUserFormFailureReason`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727194-727209](../../../../../../../reference/runtime/host-main.cjs#L727194-L727209) | `FunctionDeclaration` | no | `result, outcomes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727194-727209](../../../../../../../reference/runtime/host-main.cjs#L727194-L727209) | 6 | 1 | 0 | 5 | 0 | 0 |

### host:727194

Calls written directly in this body: `Object.values`, `outcomes.some`.

Assignment or increment targets: `mostDiagnostic`.

SHA-256 of the source span: `ed67118d9021aa6960989957f4a71308e0d32a420838e0f1094c125ce968c5f7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `bareEmailAddress`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-connector-results.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732686-732691](../../../../../../../reference/runtime/host-main.cjs#L732686-L732691) | `FunctionDeclaration` | no | `sender` |
| [evaluation:540208-540213](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540208-L540213) | `FunctionDeclaration` | no | `sender` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732686-732691](../../../../../../../reference/runtime/host-main.cjs#L732686-L732691) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:540208-540213](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540208-L540213) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:732686

Calls written directly in this body: `/<([^\s<>]+@[^\s<>]+)>/.exec`, `/^[^\s@<>]+@[^\s@<>]+$/.test`, `sender.trim`.

SHA-256 of the source span: `847d49ed136fd5322731dc86098062d22b743d0f9b06bcf1f5cefd68e11e6659`.

### evaluation:540208

Calls written directly in this body: `/<([^\s<>]+@[^\s<>]+)>/.exec`, `/^[^\s@<>]+@[^\s@<>]+$/.test`, `sender.trim`.

SHA-256 of the source span: `847d49ed136fd5322731dc86098062d22b743d0f9b06bcf1f5cefd68e11e6659`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

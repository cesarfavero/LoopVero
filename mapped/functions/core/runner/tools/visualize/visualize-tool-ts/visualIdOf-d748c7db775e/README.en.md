# `visualIdOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/visualize/visualize-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/visualize/visualize-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768513-768519](../../../../../../../../reference/runtime/host-main.cjs#L768513-L768519) | `FunctionDeclaration` | no | `toolCallId` |
| [evaluation:564028-564034](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564028-L564034) | `FunctionDeclaration` | no | `toolCallId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768513-768519](../../../../../../../../reference/runtime/host-main.cjs#L768513-L768519) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564028-564034](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564028-L564034) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768513

Calls written directly in this body: `.digest`, `.slice`, `.update`, `invariant`, `parseVisualId`.

SHA-256 of the source span: `547c682d644b38813afe52e105e9cef50f3385bf96ee3c05cf90a21ecc02f45d`.

### evaluation:564028

Calls written directly in this body: `.digest`, `.slice`, `.update`, `invariant`, `parseVisualId`.

SHA-256 of the source span: `eec9dc604bc71a335fb0098b2e91e792d1e56dd2f0268cee26ae3103ae8aa67b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

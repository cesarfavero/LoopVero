# `failedToolUse`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-messages-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:778177-778186](../../../../../../../reference/runtime/host-main.cjs#L778177-L778186) | `FunctionDeclaration` | no | `op, error64, durationMs` |
| [evaluation:577912-577921](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577912-L577921) | `FunctionDeclaration` | no | `op, error63, durationMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778177-778186](../../../../../../../reference/runtime/host-main.cjs#L778177-L778186) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:577912-577921](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577912-L577921) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:778177

Calls written directly in this body: `boundErrorClass`, `isMessagesDecline`, `sandMessagesErrorCode`.

SHA-256 of the source span: `306db1f303573ba5d272c503668749ba701dae2475e9e7906b45fbd48d39ef51`.

### evaluation:577912

Calls written directly in this body: `boundErrorClass`, `isMessagesDecline`, `sandMessagesErrorCode`.

SHA-256 of the source span: `b5273386daab14613a2bde1b5b3e25eb737353a63358f62e8f65b77bb9315408`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

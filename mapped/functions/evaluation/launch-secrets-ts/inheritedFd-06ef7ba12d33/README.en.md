# `inheritedFd`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `evaluation/launch-secrets.ts` · [Module README](../../../../modules/evaluation/launch-secrets-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:630652-630658](../../../../../reference/runtime/sand-eval-runner.cjs#L630652-L630658) | `FunctionDeclaration` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630652-630658](../../../../../reference/runtime/sand-eval-runner.cjs#L630652-L630658) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:630652

Calls written directly in this body: `/^\/(?:dev\/fd|proc\/self\/fd)\/(\d+)$/.exec`, `Number`, `Number.isInteger`.

SHA-256 of the source span: `43e69ab0a34443250149cc1d5381f6be947fe4f395ecbe34601a258322d12e8e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

# `agentKindOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/conversation-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/conversation-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769352-769358](../../../../../../../../reference/runtime/host-main.cjs#L769352-L769358) | `FunctionDeclaration` | no | `{ host }` |
| [evaluation:564999-565005](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564999-L565005) | `FunctionDeclaration` | no | `{ host }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769352-769358](../../../../../../../../reference/runtime/host-main.cjs#L769352-L769358) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564999-565005](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564999-L565005) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:769352

Calls written directly in this body: `resolveSandAgentKind`.

SHA-256 of the source span: `387b598637481e686bb1bff7828c0186200dae27ecaa4c76e46c0d50655e2deb`.

### evaluation:564999

Calls written directly in this body: `resolveSandAgentKind`.

SHA-256 of the source span: `387b598637481e686bb1bff7828c0186200dae27ecaa4c76e46c0d50655e2deb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

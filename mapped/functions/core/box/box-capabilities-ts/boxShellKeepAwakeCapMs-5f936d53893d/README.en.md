# `boxShellKeepAwakeCapMs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-capabilities.ts` · [Module README](../../../../../modules/core/box/box-capabilities-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:546686-546688](../../../../../../reference/runtime/host-main.cjs#L546686-L546688) | `FunctionDeclaration` | no | `box` |
| [evaluation:475793-475795](../../../../../../reference/runtime/sand-eval-runner.cjs#L475793-L475795) | `FunctionDeclaration` | no | `box` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546686-546688](../../../../../../reference/runtime/host-main.cjs#L546686-L546688) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475793-475795](../../../../../../reference/runtime/sand-eval-runner.cjs#L475793-L475795) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:546686

Calls written directly in this body: `box.getShellKeepAwakeCapMs`.

SHA-256 of the source span: `a4e6065cc7fdba5f61612ae3c53068519d50dd0604fcf03c0a40ed25d32b39b3`.

### evaluation:475793

Calls written directly in this body: `box.getShellKeepAwakeCapMs`.

SHA-256 of the source span: `a4e6065cc7fdba5f61612ae3c53068519d50dd0604fcf03c0a40ed25d32b39b3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

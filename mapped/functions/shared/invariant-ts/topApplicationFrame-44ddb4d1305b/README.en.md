# `topApplicationFrame`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `shared/invariant.ts` · [Module README](../../../../modules/shared/invariant-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:837-846](../../../../../reference/runtime/host-main.cjs#L837-L846) | `FunctionDeclaration` | no | `violation` |
| [evaluation:474318-474327](../../../../../reference/runtime/sand-eval-runner.cjs#L474318-L474327) | `FunctionDeclaration` | no | `violation` |
| [state-worker:42-51](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L42-L51) | `FunctionDeclaration` | no | `violation` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:837-846](../../../../../reference/runtime/host-main.cjs#L837-L846) | 2 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:474318-474327](../../../../../reference/runtime/sand-eval-runner.cjs#L474318-L474327) | 2 | 1 | 0 | 3 | 0 | 0 |
| [state-worker:42-51](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L42-L51) | 2 | 1 | 0 | 3 | 0 | 0 |

### host:837

Calls written directly in this body: `.split`, `FRAME_LINE.test`, `headerOf`, `raw.trim`, `stack.slice`, `stack.startsWith`.

SHA-256 of the source span: `5812e62274c454dffd5b90e9bb20feb5b2c96778fdd17dafc91da1074d30f88d`.

### evaluation:474318

Calls written directly in this body: `.split`, `FRAME_LINE.test`, `headerOf`, `raw.trim`, `stack.slice`, `stack.startsWith`.

SHA-256 of the source span: `5812e62274c454dffd5b90e9bb20feb5b2c96778fdd17dafc91da1074d30f88d`.

### state-worker:42

Calls written directly in this body: `.split`, `FRAME_LINE.test`, `headerOf`, `raw.trim`, `stack.slice`, `stack.startsWith`.

SHA-256 of the source span: `5812e62274c454dffd5b90e9bb20feb5b2c96778fdd17dafc91da1074d30f88d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

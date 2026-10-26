# `errorLogTag`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/errors/errors.ts` · [Module README](../../../../../modules/shared/errors/errors-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:805-810](../../../../../../reference/runtime/host-main.cjs#L805-L810) | `FunctionDeclaration` | no | `error64` |
| [evaluation:474693-474698](../../../../../../reference/runtime/sand-eval-runner.cjs#L474693-L474698) | `FunctionDeclaration` | no | `error63` |
| [state-worker:660-665](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L660-L665) | `FunctionDeclaration` | no | `error` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:805-810](../../../../../../reference/runtime/host-main.cjs#L805-L810) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:474693-474698](../../../../../../reference/runtime/sand-eval-runner.cjs#L474693-L474698) | 3 | 0 | 0 | 2 | 0 | 0 |
| [state-worker:660-665](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L660-L665) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:805

Calls written directly in this body: `findSystemErrno`.

SHA-256 of the source span: `9a3b6df10075b6d65cf5199e18b1b7dd109facb6bac2f3cb68825a70d39eca44`.

### evaluation:474693

Calls written directly in this body: `findSystemErrno`.

SHA-256 of the source span: `9339bdffc5c52e2c1291ba839fb34192ff103ae3707970c979784c39840bc144`.

### state-worker:660

Calls written directly in this body: `findSystemErrno`.

SHA-256 of the source span: `071a8ca5537c116c3483b89f7f99450d50c18426c91e5a012a9af9ecab2eba41`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

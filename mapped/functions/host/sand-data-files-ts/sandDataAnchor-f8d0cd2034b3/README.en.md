# `sandDataAnchor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:454041-454043](../../../../../reference/runtime/host-main.cjs#L454041-L454043) | `FunctionDeclaration` | no | `(none)` |
| [evaluation:627641-627643](../../../../../reference/runtime/sand-eval-runner.cjs#L627641-L627643) | `FunctionDeclaration` | no | `(none)` |
| [state-worker:642-644](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L642-L644) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454041-454043](../../../../../reference/runtime/host-main.cjs#L454041-L454043) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:627641-627643](../../../../../reference/runtime/sand-eval-runner.cjs#L627641-L627643) | 0 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:642-644](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L642-L644) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:454041

Calls written directly in this body: `getSandRootDir`.

SHA-256 of the source span: `b1ba2ae5ff812b85ee688e2962e5823de22dfff06d720de1fa32ffa90952ffa5`.

### evaluation:627641

Calls written directly in this body: `getSandRootDir`.

SHA-256 of the source span: `efcaed33fac5564131f685e84e228095c87875a8cecfd39daf6201408b508cd5`.

### state-worker:642

Calls written directly in this body: `getSandRootDir`.

SHA-256 of the source span: `26c21d97bd60ce227c649f9bae926541e624df65258f2b8521c8f89d2d95705c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

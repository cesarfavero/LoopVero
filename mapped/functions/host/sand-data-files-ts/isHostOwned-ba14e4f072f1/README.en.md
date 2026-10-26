# `isHostOwned`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:454044-454047](../../../../../reference/runtime/host-main.cjs#L454044-L454047) | `FunctionDeclaration` | no | `uid` |
| [evaluation:627644-627647](../../../../../reference/runtime/sand-eval-runner.cjs#L627644-L627647) | `FunctionDeclaration` | no | `uid` |
| [state-worker:645-648](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L645-L648) | `FunctionDeclaration` | no | `uid` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454044-454047](../../../../../reference/runtime/host-main.cjs#L454044-L454047) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:627644-627647](../../../../../reference/runtime/sand-eval-runner.cjs#L627644-L627647) | 0 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:645-648](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L645-L648) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:454044

Calls written directly in this body: `process.geteuid`.

SHA-256 of the source span: `5b538d79a3cabe3e23c59bc080dc91d98a02be236d972fbb100994f2e844fbff`.

### evaluation:627644

Calls written directly in this body: `process.geteuid`.

SHA-256 of the source span: `5b538d79a3cabe3e23c59bc080dc91d98a02be236d972fbb100994f2e844fbff`.

### state-worker:645

Calls written directly in this body: `process.geteuid`.

SHA-256 of the source span: `5b538d79a3cabe3e23c59bc080dc91d98a02be236d972fbb100994f2e844fbff`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

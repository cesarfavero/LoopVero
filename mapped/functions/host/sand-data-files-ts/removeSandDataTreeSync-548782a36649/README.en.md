# `removeSandDataTreeSync`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453908-453917](../../../../../reference/runtime/host-main.cjs#L453908-L453917) | `FunctionDeclaration` | no | `target` |
| [evaluation:627559-627568](../../../../../reference/runtime/sand-eval-runner.cjs#L627559-L627568) | `FunctionDeclaration` | no | `target` |
| [state-worker:546-555](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L546-L555) | `FunctionDeclaration` | no | `target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453908-453917](../../../../../reference/runtime/host-main.cjs#L453908-L453917) | 1 | 0 | 0 | 0 | 1 | 1 |
| [evaluation:627559-627568](../../../../../reference/runtime/sand-eval-runner.cjs#L627559-L627568) | 1 | 0 | 0 | 0 | 1 | 1 |
| [state-worker:546-555](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L546-L555) | 1 | 0 | 0 | 0 | 1 | 1 |

### host:453908

Calls written directly in this body: `findSystemErrno`, `withParentNoFollowSync`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `173a9948df324af0f4e622159eb1797d0150161501fd14ef410cbeb74a93a427`.

### evaluation:627559

Calls written directly in this body: `findSystemErrno`, `withParentNoFollowSync`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `4795c601f14469a21ff720f109f3edcee2af51ccc12a1d48f6cc5b955782054c`.

### state-worker:546

Calls written directly in this body: `findSystemErrno`, `withParentNoFollowSync`.

Explicit throw targets: `error`.

SHA-256 of the source span: `a53b8996e28654ec9dcfdce32f1772c45f86c52b49e294b8514bf9ff41c19687`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

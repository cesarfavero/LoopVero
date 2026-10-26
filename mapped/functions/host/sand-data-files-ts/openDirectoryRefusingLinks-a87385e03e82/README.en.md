# `openDirectoryRefusingLinks`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:454010-454021](../../../../../reference/runtime/host-main.cjs#L454010-L454021) | `FunctionDeclaration` | no | `entry, shown, options2 = {}` |
| [evaluation:627610-627621](../../../../../reference/runtime/sand-eval-runner.cjs#L627610-L627621) | `FunctionDeclaration` | no | `entry, shown, options2 = {}` |
| [state-worker:611-622](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L611-L622) | `FunctionDeclaration` | no | `entry, shown, options = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454010-454021](../../../../../reference/runtime/host-main.cjs#L454010-L454021) | 2 | 0 | 0 | 1 | 1 | 1 |
| [evaluation:627610-627621](../../../../../reference/runtime/sand-eval-runner.cjs#L627610-L627621) | 2 | 0 | 0 | 1 | 1 | 1 |
| [state-worker:611-622](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L611-L622) | 2 | 0 | 0 | 1 | 1 | 1 |

### host:454010

Calls written directly in this body: `.isSymbolicLink`, `findSystemErrno`, `new NoFollowRefusedError`.

Explicit throw targets: `ConditionalExpression`.

SHA-256 of the source span: `a5b67f05978e1e080f5397ae759ba9b3b19d65b9ea7aeb3b49409766980dd6ce`.

### evaluation:627610

Calls written directly in this body: `.isSymbolicLink`, `findSystemErrno`, `new NoFollowRefusedError`.

Explicit throw targets: `ConditionalExpression`.

SHA-256 of the source span: `17082097b5a40429c94d05fe67e2eabf63757d58e938c31e1460f525478ac1f1`.

### state-worker:611

Calls written directly in this body: `.isSymbolicLink`, `findSystemErrno`, `new NoFollowRefusedError`.

Explicit throw targets: `ConditionalExpression`.

SHA-256 of the source span: `2564e555b863ccaf4627aea7cfae7a80216d55e88aa9867bcd7e57d40af4936c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

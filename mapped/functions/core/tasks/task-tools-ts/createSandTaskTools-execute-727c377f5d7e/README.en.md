# `createSandTaskTools/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tasks/README.en.md).

**Module:** `core/tasks/task-tools.ts` · [Module README](../../../../../modules/core/tasks/task-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:739521-739526](../../../../../../reference/runtime/host-main.cjs#L739521-L739526) | `ArrowFunctionExpression` | yes | `_ctx, args, port` |
| [host:739534-739537](../../../../../../reference/runtime/host-main.cjs#L739534-L739537) | `ArrowFunctionExpression` | yes | `_ctx, args, port` |
| [host:739545-739562](../../../../../../reference/runtime/host-main.cjs#L739545-L739562) | `ArrowFunctionExpression` | yes | `_ctx, args, port` |
| [evaluation:538824-538829](../../../../../../reference/runtime/sand-eval-runner.cjs#L538824-L538829) | `ArrowFunctionExpression` | yes | `_ctx, args, port` |
| [evaluation:538837-538840](../../../../../../reference/runtime/sand-eval-runner.cjs#L538837-L538840) | `ArrowFunctionExpression` | yes | `_ctx, args, port` |
| [evaluation:538848-538865](../../../../../../reference/runtime/sand-eval-runner.cjs#L538848-L538865) | `ArrowFunctionExpression` | yes | `_ctx, args, port` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739521-739526](../../../../../../reference/runtime/host-main.cjs#L739521-L739526) | 0 | 0 | 1 | 1 | 0 | 0 |
| [host:739534-739537](../../../../../../reference/runtime/host-main.cjs#L739534-L739537) | 0 | 0 | 1 | 1 | 0 | 0 |
| [host:739545-739562](../../../../../../reference/runtime/host-main.cjs#L739545-L739562) | 4 | 0 | 3 | 3 | 1 | 0 |
| [evaluation:538824-538829](../../../../../../reference/runtime/sand-eval-runner.cjs#L538824-L538829) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:538837-538840](../../../../../../reference/runtime/sand-eval-runner.cjs#L538837-L538840) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:538848-538865](../../../../../../reference/runtime/sand-eval-runner.cjs#L538848-L538865) | 4 | 0 | 3 | 3 | 1 | 0 |

### host:739521

Calls written directly in this body: `.catch`, `describeRecord`, `port.create`.

SHA-256 of the source span: `aae058f5e268dfcf4a654cd83c84e516e4f4988362b5c587cfc6563f8d8408c0`.

### host:739534

Calls written directly in this body: `.catch`, `describeRecord`, `port.update`, `taskEditOf`.

SHA-256 of the source span: `2a6a46d00856a212933d7e4bb1d53c27c097d3d23c33d63f96b5b5f6fc1b9874`.

### host:739545

Calls written directly in this body: `.join`, `describeRecord`, `listed.map`, `new SandToolInputError`, `port.listOpen`, `port.listRecentlyDone`, `port.read`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `f6eb514900d78861926feb6e63f2ddc1183cd55d151a62593787131a8e7011bc`.

### evaluation:538824

Calls written directly in this body: `.catch`, `describeRecord`, `port.create`.

SHA-256 of the source span: `e87b391063e9109ecc424971e98bfa7e48b5595655af021482e532bf568f185b`.

### evaluation:538837

Calls written directly in this body: `.catch`, `describeRecord`, `port.update`, `taskEditOf`.

SHA-256 of the source span: `2fcd7d36b7d84dad75d364cc956a69cde21bdf8309b470af8240c498f88564a0`.

### evaluation:538848

Calls written directly in this body: `.join`, `describeRecord`, `listed.map`, `new SandToolInputError`, `port.listOpen`, `port.listRecentlyDone`, `port.read`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `b7a2201103a317c60515a29de9aa68d5001ea54aaa0328fcf211cfe2fafc21e5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

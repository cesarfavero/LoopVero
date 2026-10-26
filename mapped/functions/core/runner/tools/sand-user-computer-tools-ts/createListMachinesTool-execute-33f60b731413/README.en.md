# `createListMachinesTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-user-computer-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-user-computer-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:778316-778331](../../../../../../../reference/runtime/host-main.cjs#L778316-L778331) | `ArrowFunctionExpression` | yes | `_ctx, _args, computers` |
| [evaluation:578051-578066](../../../../../../../reference/runtime/sand-eval-runner.cjs#L578051-L578066) | `ArrowFunctionExpression` | yes | `_ctx, _args, computers` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778316-778331](../../../../../../../reference/runtime/host-main.cjs#L778316-L778331) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:578051-578066](../../../../../../../reference/runtime/sand-eval-runner.cjs#L578051-L578066) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:778316

Calls written directly in this body: `JSON.stringify`, `computers.list`, `computers.status`, `machines.map`.

SHA-256 of the source span: `b756029d6bb593c7f0f5ae642b788bf965932822c6fdab14ba502bf1e77b67b3`.

### evaluation:578051

Calls written directly in this body: `JSON.stringify`, `computers.list`, `computers.status`, `machines.map`.

SHA-256 of the source span: `4fd963567eee6ccace6d06874a2f0e90cf0a0b038e2c8a7740a0341851710ad1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

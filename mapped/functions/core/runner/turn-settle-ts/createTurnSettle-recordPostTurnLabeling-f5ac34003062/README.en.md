# `createTurnSettle/recordPostTurnLabeling`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-settle.ts` · [Module README](../../../../../modules/core/runner/turn-settle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590900-591013](../../../../../../reference/runtime/sand-eval-runner.cjs#L590900-L591013) | `ArrowFunctionExpression` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590900-591013](../../../../../../reference/runtime/sand-eval-runner.cjs#L590900-L591013) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:590900

Calls written directly in this body: `.then`, `Promise.resolve`, `emit`, `hasUnresolvedMcpInvocation`, `listedMcpServerHosts`, `skippedToolCallIds`.

SHA-256 of the source span: `989a13b8f871b78d947534560070496b624a409f65c6033046a64014774126d0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

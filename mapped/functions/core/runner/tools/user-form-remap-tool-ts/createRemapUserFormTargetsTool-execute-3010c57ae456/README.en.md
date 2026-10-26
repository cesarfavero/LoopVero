# `createRemapUserFormTargetsTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-remap-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-remap-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:778433-778441](../../../../../../../reference/runtime/host-main.cjs#L778433-L778441) | `ArrowFunctionExpression` | yes | `_ctx, args, d` |
| [evaluation:578167-578175](../../../../../../../reference/runtime/sand-eval-runner.cjs#L578167-L578175) | `ArrowFunctionExpression` | yes | `_ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778433-778441](../../../../../../../reference/runtime/host-main.cjs#L778433-L778441) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:578167-578175](../../../../../../../reference/runtime/sand-eval-runner.cjs#L578167-L578175) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:778433

Calls written directly in this body: `buildUserFormRemapReceipt`, `d.getAgentId`, `d.remapTargets`, `invariant`, `normalizeUserFormRemapArgs`.

SHA-256 of the source span: `1a4275239ce661e2cdc6b4f8ab9834738335d7dc1fec339bb423813c8a0b34e6`.

### evaluation:578167

Calls written directly in this body: `buildUserFormRemapReceipt`, `d.getAgentId`, `d.remapTargets`, `invariant`, `normalizeUserFormRemapArgs`.

SHA-256 of the source span: `1a4275239ce661e2cdc6b4f8ab9834738335d7dc1fec339bb423813c8a0b34e6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

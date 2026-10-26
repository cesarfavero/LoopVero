# `createCreateChannelTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-channel-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-channel-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771261-771265](../../../../../../../reference/runtime/host-main.cjs#L771261-L771265) | `ArrowFunctionExpression` | yes | `_ctx, args, m2` |
| [evaluation:570495-570499](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570495-L570499) | `ArrowFunctionExpression` | yes | `_ctx, args, m2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771261-771265](../../../../../../../reference/runtime/host-main.cjs#L771261-L771265) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:570495-570499](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570495-L570499) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:771261

Calls written directly in this body: `.join`, `m2.create`, `members2.map`.

SHA-256 of the source span: `3048e0c7def6d73977c52d8e25818ba6aee721965ff8ded18a190a86ee656dd3`.

### evaluation:570495

Calls written directly in this body: `.join`, `m2.create`, `members2.map`.

SHA-256 of the source span: `3048e0c7def6d73977c52d8e25818ba6aee721965ff8ded18a190a86ee656dd3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `shardTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/memory-types/memory-type-targets.ts` · [Module README](../../../../../../modules/core/runner/memory-types/memory-type-targets-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771547-771560](../../../../../../../reference/runtime/host-main.cjs#L771547-L771560) | `FunctionDeclaration` | no | `{ memoryType, audience, story }` |
| [evaluation:570780-570793](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570780-L570793) | `FunctionDeclaration` | no | `{ memoryType, audience, story }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771547-771560](../../../../../../../reference/runtime/host-main.cjs#L771547-L771560) | 5 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:570780-570793](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570780-L570793) | 5 | 0 | 0 | 6 | 0 | 0 |

### host:771547

Calls written directly in this body: `refused3`.

SHA-256 of the source span: `8ad31fc3d81cd1971fb1db8ab921b1087df8701e4ff5de27f36136f8077a8083`.

### evaluation:570780

Calls written directly in this body: `refused3`.

SHA-256 of the source span: `8ad31fc3d81cd1971fb1db8ab921b1087df8701e4ff5de27f36136f8077a8083`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

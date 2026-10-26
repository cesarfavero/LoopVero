# `createMemoryVirtualMount/scopesUnder`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/virtual-mounts/memory.ts` · [Module README](../../../../../modules/core/virtual-mounts/memory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769624-769629](../../../../../../reference/runtime/host-main.cjs#L769624-L769629) | `ArrowFunctionExpression` | no | `path33` |
| [evaluation:565293-565298](../../../../../../reference/runtime/sand-eval-runner.cjs#L565293-L565298) | `ArrowFunctionExpression` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769624-769629](../../../../../../reference/runtime/host-main.cjs#L769624-L769629) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:565293-565298](../../../../../../reference/runtime/sand-eval-runner.cjs#L565293-L565298) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:769624

Calls written directly in this body: `available.filter`, `availableScopes`, `scopeOfPath`.

SHA-256 of the source span: `4489f84af1b3dc0eebd7574b43c5349b951267a2a623d55b30e5f18460072867`.

### evaluation:565293

Calls written directly in this body: `available.filter`, `availableScopes`, `scopeOfPath`.

SHA-256 of the source span: `4489f84af1b3dc0eebd7574b43c5349b951267a2a623d55b30e5f18460072867`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

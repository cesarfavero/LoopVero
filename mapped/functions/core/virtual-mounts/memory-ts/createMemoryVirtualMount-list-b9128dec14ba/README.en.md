# `createMemoryVirtualMount/list`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/virtual-mounts/memory.ts` · [Module README](../../../../../modules/core/virtual-mounts/memory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769632-769658](../../../../../../reference/runtime/host-main.cjs#L769632-L769658) | `ArrowFunctionExpression` | yes | `_ctx, _access, path33` |
| [evaluation:565301-565327](../../../../../../reference/runtime/sand-eval-runner.cjs#L565301-L565327) | `ArrowFunctionExpression` | yes | `_ctx, _access, path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769632-769658](../../../../../../reference/runtime/host-main.cjs#L769632-L769658) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:565301-565327](../../../../../../reference/runtime/sand-eval-runner.cjs#L565301-L565327) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:769632

Calls written directly in this body: `.filter`, `candidates.map`, `collectMemoryCandidates`, `isUnder`, `refused2`, `scopes.map`, `scopes.some`, `scopesUnder`.

SHA-256 of the source span: `00aaa37bd35f6b4321991cf94e3eca83d96209b24b69275d140a078b26632b9c`.

### evaluation:565301

Calls written directly in this body: `.filter`, `candidates.map`, `collectMemoryCandidates`, `isUnder`, `refused`, `scopes.map`, `scopes.some`, `scopesUnder`.

SHA-256 of the source span: `288182952e226ae1742f75a6f5b65a4cca8b90765d94151e486dc2518cbd5c07`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

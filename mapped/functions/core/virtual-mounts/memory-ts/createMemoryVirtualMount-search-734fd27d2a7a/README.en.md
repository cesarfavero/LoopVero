# `createMemoryVirtualMount/search`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/virtual-mounts/memory.ts` · [Module README](../../../../../modules/core/virtual-mounts/memory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769678-769682](../../../../../../reference/runtime/host-main.cjs#L769678-L769682) | `ArrowFunctionExpression` | yes | `_ctx, _access, request5` |
| [evaluation:565347-565351](../../../../../../reference/runtime/sand-eval-runner.cjs#L565347-L565351) | `ArrowFunctionExpression` | yes | `_ctx, _access, request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769678-769682](../../../../../../reference/runtime/host-main.cjs#L769678-L769682) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:565347-565351](../../../../../../reference/runtime/sand-eval-runner.cjs#L565347-L565351) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:769678

Calls written directly in this body: `.map`, `collectMemoryCandidates`, `memorySearch`, `scopesUnder`.

SHA-256 of the source span: `ae405f259cbb7061c6e802f34a779981112dd480af3df333b107d4e97c7a4d4d`.

### evaluation:565347

Calls written directly in this body: `.map`, `collectMemoryCandidates`, `memorySearch`, `scopesUnder`.

SHA-256 of the source span: `38a1547c52ed5b1f627a0aad182fd3ac99485b2f7abb9d9587397393574f8f4e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

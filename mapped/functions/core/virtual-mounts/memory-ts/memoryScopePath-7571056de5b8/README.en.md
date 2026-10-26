# `memoryScopePath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/virtual-mounts/memory.ts` · [Module README](../../../../../modules/core/virtual-mounts/memory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769594-769596](../../../../../../reference/runtime/host-main.cjs#L769594-L769596) | `FunctionDeclaration` | no | `scope` |
| [evaluation:565263-565265](../../../../../../reference/runtime/sand-eval-runner.cjs#L565263-L565265) | `FunctionDeclaration` | no | `scope` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769594-769596](../../../../../../reference/runtime/host-main.cjs#L769594-L769596) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:565263-565265](../../../../../../reference/runtime/sand-eval-runner.cjs#L565263-L565265) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:769594

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `49bb066271cc81b5841ba030362c7da95ac29f7e9f83327f26728761089699ff`.

### evaluation:565263

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `49bb066271cc81b5841ba030362c7da95ac29f7e9f83327f26728761089699ff`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

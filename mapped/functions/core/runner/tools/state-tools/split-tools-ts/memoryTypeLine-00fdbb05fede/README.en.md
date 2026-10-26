# `memoryTypeLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/state-tools/split-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771609-771612](../../../../../../../../reference/runtime/host-main.cjs#L771609-L771612) | `FunctionDeclaration` | no | `memoryType` |
| [evaluation:570842-570845](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570842-L570845) | `FunctionDeclaration` | no | `memoryType` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771609-771612](../../../../../../../../reference/runtime/host-main.cjs#L771609-L771612) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:570842-570845](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570842-L570845) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:771609

Calls written directly in this body: `describeMemoryTypeMeta`, `memoryTypeHasMeta`.

SHA-256 of the source span: `7ef8afcaf5ec59591aa74de37de9e12ffee114192e68f2fddd1b70cda0cca6cb`.

### evaluation:570842

Calls written directly in this body: `describeMemoryTypeMeta`, `memoryTypeHasMeta`.

SHA-256 of the source span: `7ef8afcaf5ec59591aa74de37de9e12ffee114192e68f2fddd1b70cda0cca6cb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

# `readCappedSync`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453770-453773](../../../../../reference/runtime/host-main.cjs#L453770-L453773) | `FunctionDeclaration` | no | `fd, path33, maxBytes` |
| [evaluation:627512-627515](../../../../../reference/runtime/sand-eval-runner.cjs#L627512-L627515) | `FunctionDeclaration` | no | `fd, path33, maxBytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453770-453773](../../../../../reference/runtime/host-main.cjs#L453770-L453773) | 1 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:627512-627515](../../../../../reference/runtime/sand-eval-runner.cjs#L627512-L627515) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:453770

Calls written directly in this body: `oversizedSandDataFile`, `readBoundedSync`.

Explicit throw targets: `oversizedSandDataFile`.

SHA-256 of the source span: `55faf445087d16268bef88fdbfe01aa41c50c5a4f4c32d68dc5fcc0be0acd966`.

### evaluation:627512

Calls written directly in this body: `oversizedSandDataFile`, `readBoundedSync`.

Explicit throw targets: `oversizedSandDataFile`.

SHA-256 of the source span: `1b9488a713e1044ac559cdb5af58973bd3bccdcf3e696f24103fff60a1e9ad93`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

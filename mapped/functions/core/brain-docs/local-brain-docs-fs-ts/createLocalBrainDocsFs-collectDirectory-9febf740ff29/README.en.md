# `createLocalBrainDocsFs/collectDirectory`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/local-brain-docs-fs.ts` · [Module README](../../../../../modules/core/brain-docs/local-brain-docs-fs-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784739-784752](../../../../../../reference/runtime/host-main.cjs#L784739-L784752) | `FunctionDeclaration` | yes | `dir, out` |
| [evaluation:630136-630149](../../../../../../reference/runtime/sand-eval-runner.cjs#L630136-L630149) | `FunctionDeclaration` | yes | `dir, out` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784739-784752](../../../../../../reference/runtime/host-main.cjs#L784739-L784752) | 3 | 1 | 3 | 1 | 1 | 1 |
| [evaluation:630136-630149](../../../../../../reference/runtime/sand-eval-runner.cjs#L630136-L630149) | 3 | 1 | 3 | 1 | 1 | 1 |

### host:784739

Calls written directly in this body: `collectDirectory`, `collectFile`, `entry.isDirectory`, `entry.isFile`, `findSystemErrno`, `io2.readdir`, `isMissingPath2`.

Assignment or increment targets: `entries`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `977194757f0264ae14ee275d8ea126d5c0aae33c877e296a65e323a0c2c5c204`.

### evaluation:630136

Calls written directly in this body: `collectDirectory`, `collectFile`, `entry.isDirectory`, `entry.isFile`, `findSystemErrno`, `io2.readdir`, `isMissingPath`.

Assignment or increment targets: `entries`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `f3d45616fe29bab99db33f8ffb8795b82248e41136aaa51363efbbfab23ad881`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

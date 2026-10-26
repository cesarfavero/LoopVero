# `barePathOf2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/store/attachment-sources.ts` · [Module README](../../../../../modules/core/store/attachment-sources-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764185-764189](../../../../../../reference/runtime/host-main.cjs#L764185-L764189) | `FunctionDeclaration` | no | `path33` |
| [evaluation:557553-557557](../../../../../../reference/runtime/sand-eval-runner.cjs#L557553-L557557) | `FunctionDeclaration` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764185-764189](../../../../../../reference/runtime/host-main.cjs#L764185-L764189) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:557553-557557](../../../../../../reference/runtime/sand-eval-runner.cjs#L557553-L557557) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:764185

Calls written directly in this body: `filePathFromFileUrl`, `import_node_path166.posix.isAbsolute`, `path33.includes`, `path33.startsWith`.

SHA-256 of the source span: `6280137ef00fc19292304822c0d0e66d4c9b31e4182102f1911a6a84872e0a21`.

### evaluation:557553

Calls written directly in this body: `filePathFromFileUrl`, `import_node_path35.posix.isAbsolute`, `path33.includes`, `path33.startsWith`.

SHA-256 of the source span: `c6f0cff798cc3ad7596d18a696e20e0695ab6ecb25e2686b7246205f1adc8e24`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

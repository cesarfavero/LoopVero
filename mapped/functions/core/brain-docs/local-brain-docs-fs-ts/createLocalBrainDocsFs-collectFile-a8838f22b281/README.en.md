# `createLocalBrainDocsFs/collectFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/local-brain-docs-fs.ts` · [Module README](../../../../../modules/core/brain-docs/local-brain-docs-fs-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784729-784738](../../../../../../reference/runtime/host-main.cjs#L784729-L784738) | `FunctionDeclaration` | yes | `path33, out` |
| [evaluation:630126-630135](../../../../../../reference/runtime/sand-eval-runner.cjs#L630126-L630135) | `FunctionDeclaration` | yes | `path33, out` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784729-784738](../../../../../../reference/runtime/host-main.cjs#L784729-L784738) | 2 | 0 | 1 | 1 | 1 | 1 |
| [evaluation:630126-630135](../../../../../../reference/runtime/sand-eval-runner.cjs#L630126-L630135) | 2 | 0 | 1 | 1 | 1 | 1 |

### host:784729

Calls written directly in this body: `.toString`, `Buffer.from`, `bytes.includes`, `findSystemErrno`, `io2.readFile`, `isMissingPath2`, `out.set`.

Assignment or increment targets: `bytes`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `ce80d3c11c169e8a77f846b7692f5aaab2331a9341329238e94ea99f7fa95479`.

### evaluation:630126

Calls written directly in this body: `.toString`, `Buffer.from`, `bytes.includes`, `findSystemErrno`, `io2.readFile`, `isMissingPath`, `out.set`.

Assignment or increment targets: `bytes`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `3934928cf0a5c472318a145b0924cbbed4063986ebe4b3c841c66c8a08536870`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

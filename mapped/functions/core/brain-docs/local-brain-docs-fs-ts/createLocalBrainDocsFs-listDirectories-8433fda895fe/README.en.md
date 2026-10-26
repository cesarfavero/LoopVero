# `createLocalBrainDocsFs/listDirectories`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/local-brain-docs-fs.ts` · [Module README](../../../../../modules/core/brain-docs/local-brain-docs-fs-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784781-784788](../../../../../../reference/runtime/host-main.cjs#L784781-L784788) | `FunctionExpression` | yes | `path33` |
| [evaluation:630178-630185](../../../../../../reference/runtime/sand-eval-runner.cjs#L630178-L630185) | `FunctionExpression` | yes | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784781-784788](../../../../../../reference/runtime/host-main.cjs#L784781-L784788) | 1 | 0 | 1 | 2 | 1 | 1 |
| [evaluation:630178-630185](../../../../../../reference/runtime/sand-eval-runner.cjs#L630178-L630185) | 1 | 0 | 1 | 2 | 1 | 1 |

### host:784781

Calls written directly in this body: `.filter`, `.map`, `.sort`, `findSystemErrno`, `io2.readdir`, `isMissingPath2`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `14dbd338ac8efc52f22a9ed5252be9c5cab57bcdf2d9337224a2b0e1c6bd4ffe`.

### evaluation:630178

Calls written directly in this body: `.filter`, `.map`, `.sort`, `findSystemErrno`, `io2.readdir`, `isMissingPath`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `40c38be29a0048606bafd4753b3ea5aaf546c1bc11bfb03d909d4650c71c5223`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

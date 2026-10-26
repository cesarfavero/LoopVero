# `createLocalBrainDocsFs/collect`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/local-brain-docs-fs.ts` · [Module README](../../../../../modules/core/brain-docs/local-brain-docs-fs-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784753-784758](../../../../../../reference/runtime/host-main.cjs#L784753-L784758) | `FunctionDeclaration` | yes | `root, out` |
| [evaluation:630150-630155](../../../../../../reference/runtime/sand-eval-runner.cjs#L630150-L630155) | `FunctionDeclaration` | yes | `root, out` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784753-784758](../../../../../../reference/runtime/host-main.cjs#L784753-L784758) | 3 | 0 | 3 | 1 | 0 | 0 |
| [evaluation:630150-630155](../../../../../../reference/runtime/sand-eval-runner.cjs#L630150-L630155) | 3 | 0 | 3 | 1 | 0 | 0 |

### host:784753

Calls written directly in this body: `collectDirectory`, `collectFile`, `info2.isDirectory`, `info2.isFile`, `statIfPresent`.

SHA-256 of the source span: `1f2845c74e677b40749ba60673d61ac58623dfc9e2ea3ebeba0aeb6b6782a25e`.

### evaluation:630150

Calls written directly in this body: `collectDirectory`, `collectFile`, `info2.isDirectory`, `info2.isFile`, `statIfPresent`.

SHA-256 of the source span: `1f2845c74e677b40749ba60673d61ac58623dfc9e2ea3ebeba0aeb6b6782a25e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

# `WatchedDirectory.readDirectoryEntry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/watched-directory.ts` · [Module README](../../../../modules/host/watched-directory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684440-684452](../../../../../reference/runtime/host-main.cjs#L684440-L684452) | `method` | no | `path33` |
| [evaluation:627764-627776](../../../../../reference/runtime/sand-eval-runner.cjs#L627764-L627776) | `method` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684440-684452](../../../../../reference/runtime/host-main.cjs#L684440-L684452) | 1 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:627764-627776](../../../../../reference/runtime/sand-eval-runner.cjs#L627764-L627776) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:684440

Calls written directly in this body: `reportFallbackUnlessAbsent`, `stats.isDirectory`, `this.lstat`.

SHA-256 of the source span: `8a0f407bc129d14d70a44b9c846785745f880a25f966b1fdfe2ef32180dc7d6a`.

### evaluation:627764

Calls written directly in this body: `reportFallbackUnlessAbsent`, `stats.isDirectory`, `this.lstat`.

SHA-256 of the source span: `28ab947b98c8262369a9975e399a7967107ec568c327a2149610a1bf725ef48e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

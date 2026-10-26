# `tallyFileOutcome`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-transfer.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-transfer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:479351-479365](../../../../../../../reference/runtime/host-main.cjs#L479351-L479365) | `FunctionDeclaration` | no | `summary, outcome, size` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:479351-479365](../../../../../../../reference/runtime/host-main.cjs#L479351-L479365) | 5 | 0 | 0 | 0 | 0 | 0 |

### host:479351

Calls written directly in this body: `tallySkippedInaccessible`.

Assignment or increment targets: `summary.bytesUploaded`, `summary.failures`, `summary.filesUploaded`, `summary.metadataFailures`, `summary.oversize`, `summary.skippedUnchanged`.

SHA-256 of the source span: `a6b12fb2716fffe14b8c996c798912778e99ab5770f52424b4ef885ba0859075`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

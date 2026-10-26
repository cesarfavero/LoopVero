# `scanSpoken`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/virtual-mounts/transcripts.ts` · [Module README](../../../../../modules/core/virtual-mounts/transcripts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766140-766165](../../../../../../reference/runtime/host-main.cjs#L766140-L766165) | `FunctionDeclaration` | yes | `source` |
| [evaluation:559504-559529](../../../../../../reference/runtime/sand-eval-runner.cjs#L559504-L559529) | `FunctionDeclaration` | yes | `source` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766140-766165](../../../../../../reference/runtime/host-main.cjs#L766140-L766165) | 3 | 1 | 1 | 2 | 0 | 0 |
| [evaluation:559504-559529](../../../../../../reference/runtime/sand-eval-runner.cjs#L559504-L559529) | 3 | 1 | 1 | 2 | 0 | 0 |

### host:766140

Calls written directly in this body: `entries.push`, `source.readMessages`.

Assignment or increment targets: `before`.

SHA-256 of the source span: `53aa9d324c95af3d4f0abc26e1233a6a8525fa5e68f7f07379cf9115eab51472`.

### evaluation:559504

Calls written directly in this body: `entries.push`, `source.readMessages`.

Assignment or increment targets: `before`.

SHA-256 of the source span: `53aa9d324c95af3d4f0abc26e1233a6a8525fa5e68f7f07379cf9115eab51472`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

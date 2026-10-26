# `readBoxVideoAttachment`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/video-attachments/read.ts` · [Module README](../../../../../../modules/core/runner/video-attachments/read-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:533615-533636](../../../../../../../reference/runtime/sand-eval-runner.cjs#L533615-L533636) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533615-533636](../../../../../../../reference/runtime/sand-eval-runner.cjs#L533615-L533636) | 6 | 0 | 1 | 7 | 1 | 1 |

### evaluation:533615

Calls written directly in this body: `args.box.downloadFile`, `boxPath.startsWith`, `bytesLookLikeVideoContainer`, `describeNonVideoBytes`, `import_node_path27.posix.normalize`.

Assignment or increment targets: `bytes`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `6eff5d9d8808f0a50f536c5f22edfa937acfa4488fbb00fa53f00d766a70e53f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `renderAttachment`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-messages-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777942-777956](../../../../../../../reference/runtime/host-main.cjs#L777942-L777956) | `FunctionDeclaration` | no | `output2, inflightImages` |
| [evaluation:577677-577691](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577677-L577691) | `FunctionDeclaration` | no | `output2, inflightImages` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777942-777956](../../../../../../../reference/runtime/host-main.cjs#L777942-L777956) | 4 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:577677-577691](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577677-L577691) | 4 | 0 | 0 | 5 | 0 | 0 |

### host:777942

Calls written directly in this body: `createImageResult`, `createStringResult`, `decodeAttachmentEnvelope`, `inflightImages.delete`, `inflightImages.get`, `process.stderr.write`.

SHA-256 of the source span: `ee62bb6187b5a4fd099a1717d68266a92a642a509baa1e1a480a9b718b5976a3`.

### evaluation:577677

Calls written directly in this body: `createImageResult`, `createStringResult`, `decodeAttachmentEnvelope`, `inflightImages.delete`, `inflightImages.get`, `process.stderr.write`.

SHA-256 of the source span: `ee62bb6187b5a4fd099a1717d68266a92a642a509baa1e1a480a9b718b5976a3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

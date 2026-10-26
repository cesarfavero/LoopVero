# `fetchAttachment`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-messages-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777983-778005](../../../../../../../reference/runtime/host-main.cjs#L777983-L778005) | `FunctionDeclaration` | yes | `ctx, args, deps, inflightImages` |
| [evaluation:577718-577740](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577718-L577740) | `FunctionDeclaration` | yes | `ctx, args, deps, inflightImages` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777983-778005](../../../../../../../reference/runtime/host-main.cjs#L777983-L778005) | 1 | 0 | 3 | 2 | 0 | 0 |
| [evaluation:577718-577740](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577718-L577740) | 1 | 0 | 3 | 2 | 0 | 0 |

### host:777983

Calls written directly in this body: `INLINE_IMAGE_MIMES.has`, `JSON.stringify`, `boxFileName`, `deps.agentBox.uploadFile`, `deps.getBoxId`, `deps.messages.run`, `import_node_buffer8.Buffer.from`, `import_node_path170.posix.join`, `inflightImages.set`, `shrinkImageForModel`.

SHA-256 of the source span: `7192e5e54536bc4a4b26e2a2b10b5b8d835ccbcb89f6f251ad627208df9f20b6`.

### evaluation:577718

Calls written directly in this body: `INLINE_IMAGE_MIMES.has`, `JSON.stringify`, `boxFileName`, `deps.agentBox.uploadFile`, `deps.getBoxId`, `deps.messages.run`, `import_node_buffer12.Buffer.from`, `import_node_path41.posix.join`, `inflightImages.set`, `shrinkImageForModel`.

SHA-256 of the source span: `4951b96ab6030c5ab482f40e54db82e604459b37339afbbd69cfded62c162043`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

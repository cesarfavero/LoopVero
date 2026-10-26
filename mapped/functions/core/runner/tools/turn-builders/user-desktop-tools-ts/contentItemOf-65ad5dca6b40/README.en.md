# `contentItemOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/user-desktop-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/user-desktop-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781773-781786](../../../../../../../../reference/runtime/host-main.cjs#L781773-L781786) | `FunctionDeclaration` | no | `raw` |
| [evaluation:582118-582131](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582118-L582131) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781773-781786](../../../../../../../../reference/runtime/host-main.cjs#L781773-L781786) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:582118-582131](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582118-L582131) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:781773

Calls written directly in this body: `Buffer.from`, `contentItem.safeParse`, `new McpImageContent`, `new McpToolResultContentItem`, `new Uint8Array`, `textItem`, `unexpectedOutputText`.

SHA-256 of the source span: `3b34b7f5ed62813fbc2ae1390952906f8d5f30acf7ed00d3cbc38325fd278749`.

### evaluation:582118

Calls written directly in this body: `Buffer.from`, `contentItem.safeParse`, `new McpImageContent`, `new McpToolResultContentItem`, `new Uint8Array`, `textItem`, `unexpectedOutputText`.

SHA-256 of the source span: `3b34b7f5ed62813fbc2ae1390952906f8d5f30acf7ed00d3cbc38325fd278749`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

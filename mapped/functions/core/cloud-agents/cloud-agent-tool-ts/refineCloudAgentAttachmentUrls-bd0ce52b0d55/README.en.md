# `refineCloudAgentAttachmentUrls`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-tool.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:770174-770186](../../../../../../reference/runtime/host-main.cjs#L770174-L770186) | `FunctionDeclaration` | no | `value, ctx` |
| [evaluation:567770-567782](../../../../../../reference/runtime/sand-eval-runner.cjs#L567770-L567782) | `FunctionDeclaration` | no | `value, ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770174-770186](../../../../../../reference/runtime/host-main.cjs#L770174-L770186) | 1 | 2 | 0 | 0 | 0 | 0 |
| [evaluation:567770-567782](../../../../../../reference/runtime/sand-eval-runner.cjs#L567770-L567782) | 1 | 2 | 0 | 0 | 0 | 0 |

### host:770174

Calls written directly in this body: `.entries`, `ctx.addIssue`, `posixPathFromFileUrl`.

SHA-256 of the source span: `c0cbd3f6d81122bb35e64220a4bf0726d4c64317933fa7dff776c4bf3300cc3c`.

### evaluation:567770

Calls written directly in this body: `.entries`, `ctx.addIssue`, `posixPathFromFileUrl`.

SHA-256 of the source span: `fb6762fb7c2090722f443c3747a1a252c216e32f97fb1e93838ae1c9a3b013e5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

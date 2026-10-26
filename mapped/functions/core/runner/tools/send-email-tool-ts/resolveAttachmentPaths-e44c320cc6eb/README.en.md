# `resolveAttachmentPaths`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-email-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-email-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764334-764350](../../../../../../../reference/runtime/host-main.cjs#L764334-L764350) | `FunctionDeclaration` | no | `attachments, agentDir` |
| [evaluation:557702-557718](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557702-L557718) | `FunctionDeclaration` | no | `attachments, agentDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764334-764350](../../../../../../../reference/runtime/host-main.cjs#L764334-L764350) | 4 | 1 | 0 | 2 | 2 | 0 |
| [evaluation:557702-557718](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557702-L557718) | 4 | 1 | 0 | 2 | 2 | 0 |

### host:764334

Calls written directly in this body: `JSON.stringify`, `new SandToolInputError`, `resolveSandEmailAttachmentPath`, `resolved.includes`, `resolved.push`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `1caef00c14a339bc1ab1c3b78598e63e2c3c1c4f46282af8d58eee0ea4d3b5fa`.

### evaluation:557702

Calls written directly in this body: `JSON.stringify`, `new SandToolInputError`, `resolveSandEmailAttachmentPath`, `resolved.includes`, `resolved.push`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `1caef00c14a339bc1ab1c3b78598e63e2c3c1c4f46282af8d58eee0ea4d3b5fa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

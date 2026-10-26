# `attachmentPaths`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/email/agent-inbox-drafts.ts` · [Module README](../../../../../modules/core/email/agent-inbox-drafts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:734905-734923](../../../../../../reference/runtime/host-main.cjs#L734905-L734923) | `FunctionDeclaration` | no | `raw, agentDir` |
| [evaluation:539329-539347](../../../../../../reference/runtime/sand-eval-runner.cjs#L539329-L539347) | `FunctionDeclaration` | no | `raw, agentDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734905-734923](../../../../../../reference/runtime/host-main.cjs#L734905-L734923) | 5 | 1 | 0 | 5 | 0 | 0 |
| [evaluation:539329-539347](../../../../../../reference/runtime/sand-eval-runner.cjs#L539329-L539347) | 5 | 1 | 0 | 5 | 0 | 0 |

### host:734905

Calls written directly in this body: `paths.includes`, `paths.push`, `resolveSandEmailAttachmentPath`.

SHA-256 of the source span: `975d2b94157ed1910cb0452a978270ca3be411ce430b0b68a0244a7c9d8324d6`.

### evaluation:539329

Calls written directly in this body: `paths.includes`, `paths.push`, `resolveSandEmailAttachmentPath`.

SHA-256 of the source span: `975d2b94157ed1910cb0452a978270ca3be411ce430b0b68a0244a7c9d8324d6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

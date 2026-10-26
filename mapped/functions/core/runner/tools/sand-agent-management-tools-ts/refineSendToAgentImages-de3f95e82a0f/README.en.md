# `refineSendToAgentImages`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-agent-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-agent-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:757323-757333](../../../../../../../reference/runtime/host-main.cjs#L757323-L757333) | `FunctionDeclaration` | no | `value, ctx` |
| [evaluation:543346-543356](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543346-L543356) | `FunctionDeclaration` | no | `value, ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:757323-757333](../../../../../../../reference/runtime/host-main.cjs#L757323-L757333) | 1 | 1 | 0 | 0 | 0 | 0 |
| [evaluation:543346-543356](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543346-L543356) | 1 | 1 | 0 | 0 | 0 | 0 |

### host:757323

Calls written directly in this body: `.entries`, `ctx.addIssue`, `isValidAttachmentUrl`.

SHA-256 of the source span: `4e7b0b5824702b8e07055f5ebedf8773dcd69bda4cbea3d85b1482d8328e9e44`.

### evaluation:543346

Calls written directly in this body: `.entries`, `ctx.addIssue`, `isValidAttachmentUrl`.

SHA-256 of the source span: `54af9031b568fe17af79ec1e3f2670ff3eef4e0837f6ca7b2a8897cd483b46ed`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

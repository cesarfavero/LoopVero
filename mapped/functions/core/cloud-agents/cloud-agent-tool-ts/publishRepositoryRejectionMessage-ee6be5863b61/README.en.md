# `publishRepositoryRejectionMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-tool.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:567998-568017](../../../../../../reference/runtime/sand-eval-runner.cjs#L567998-L568017) | `FunctionDeclaration` | no | `error63, repoName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:567998-568017](../../../../../../reference/runtime/sand-eval-runner.cjs#L567998-L568017) | 11 | 0 | 0 | 7 | 0 | 0 |

### evaluation:567998

Calls written directly in this body: `[computed].details.detail.trim`, `detail.includes`, `error63.findDetails`, `error63.rawMessage.includes`.

SHA-256 of the source span: `07d8b0a755dbf410ef6cb16e0932495ca2433a3ecf468237f3920f8bac3ea503`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

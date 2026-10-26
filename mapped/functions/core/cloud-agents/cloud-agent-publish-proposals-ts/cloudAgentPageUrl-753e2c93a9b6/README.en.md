# `cloudAgentPageUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-publish-proposals.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-publish-proposals-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:490315-490321](../../../../../../reference/runtime/sand-eval-runner.cjs#L490315-L490321) | `FunctionDeclaration` | no | `bcId, readPortalBaseUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490315-490321](../../../../../../reference/runtime/sand-eval-runner.cjs#L490315-L490321) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:490315

Calls written directly in this body: `encodeURIComponent`, `resolvePortalBaseUrl`.

SHA-256 of the source span: `e93f8b9f2cbbb7f823438df747221fc0eec30ce8733b3ccbdd47feef5d2c6fad`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

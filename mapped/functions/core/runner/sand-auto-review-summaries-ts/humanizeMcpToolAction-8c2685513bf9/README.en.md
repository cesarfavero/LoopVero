# `humanizeMcpToolAction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-auto-review-summaries.ts` · [Module README](../../../../../modules/core/runner/sand-auto-review-summaries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:491137-491147](../../../../../../reference/runtime/sand-eval-runner.cjs#L491137-L491147) | `FunctionDeclaration` | no | `toolName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:491137-491147](../../../../../../reference/runtime/sand-eval-runner.cjs#L491137-L491147) | 3 | 0 | 0 | 3 | 0 | 0 |

### evaluation:491137

Calls written directly in this body: `/^(send|create|update|delete|post|write|read|add|remove|open|close|list|search|fetch|get|set|upload|download|invite|share)$/.test`, `/^[aeiou]/i.test`, `/s$/i.test`, `mcpNameWords`, `words.join`.

SHA-256 of the source span: `35926642f0278d3c3c91ff90b9c6f8381592a987f5ec9a212976f3149b4d8880`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

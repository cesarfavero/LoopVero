# `safeMcpDestinationHint`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-auto-review-summaries.ts` · [Module README](../../../../../modules/core/runner/sand-auto-review-summaries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:491153-491168](../../../../../../reference/runtime/sand-eval-runner.cjs#L491153-L491168) | `FunctionDeclaration` | no | `mcpArguments` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:491153-491168](../../../../../../reference/runtime/sand-eval-runner.cjs#L491153-L491168) | 4 | 1 | 0 | 3 | 0 | 0 |

### evaluation:491153

Calls written directly in this body: `.replace`, `.toLowerCase`, `.trim`, `MCP_DESTINATION_KEYS.has`, `Object.entries`, `SAND_AUTO_REVIEW_SECRET_KEY_PATTERN.test`, `SAND_AUTO_REVIEW_SECRET_VALUE_PATTERN.test`, `compact`, `rawKey.replace`, `redactSandAutoReviewInlineSecrets`.

SHA-256 of the source span: `2f18502ce5c0fc64ebe89a674449a14db7d2d7ba4ada3c288cd7d20aabc2f719`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

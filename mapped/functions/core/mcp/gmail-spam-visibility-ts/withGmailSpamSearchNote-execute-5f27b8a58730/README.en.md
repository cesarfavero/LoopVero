# `withGmailSpamSearchNote/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/gmail-spam-visibility.ts` · [Module README](../../../../../modules/core/mcp/gmail-spam-visibility-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584223-584232](../../../../../../reference/runtime/sand-eval-runner.cjs#L584223-L584232) | `FunctionExpression` | yes | `ctx, args, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584223-584232](../../../../../../reference/runtime/sand-eval-runner.cjs#L584223-L584232) | 3 | 0 | 1 | 4 | 0 | 0 |

### evaluation:584223

Calls written directly in this body: `executor.execute`, `isSpamBlindGmailSearch`, `noted.increment`, `searchesGmailSpam`, `withNote`.

SHA-256 of the source span: `1fbd07a8ab2d964c8ba32383177bb821035e28a53ad2bcb9c463a11f35514206`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

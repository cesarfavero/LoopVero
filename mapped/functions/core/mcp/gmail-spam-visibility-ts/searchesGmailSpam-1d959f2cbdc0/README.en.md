# `searchesGmailSpam`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/gmail-spam-visibility.ts` · [Module README](../../../../../modules/core/mcp/gmail-spam-visibility-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584203-584205](../../../../../../reference/runtime/sand-eval-runner.cjs#L584203-L584205) | `FunctionDeclaration` | no | `query2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584203-584205](../../../../../../reference/runtime/sand-eval-runner.cjs#L584203-L584205) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:584203

Calls written directly in this body: `SPAM_SCOPE.test`.

SHA-256 of the source span: `cbdde527d6a106381b65cb375e25006635cd99770086ae0c1d6efec97aa7d4f0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

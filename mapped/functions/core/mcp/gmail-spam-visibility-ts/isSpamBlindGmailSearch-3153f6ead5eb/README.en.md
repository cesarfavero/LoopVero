# `isSpamBlindGmailSearch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/gmail-spam-visibility.ts` · [Module README](../../../../../modules/core/mcp/gmail-spam-visibility-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584199-584202](../../../../../../reference/runtime/sand-eval-runner.cjs#L584199-L584202) | `FunctionDeclaration` | no | `args, resolveServerHost` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584199-584202](../../../../../../reference/runtime/sand-eval-runner.cjs#L584199-L584202) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:584199

Calls written directly in this body: `.toLowerCase`, `isGrokGmailSearch`, `isSearchThreads`, `resolveServerHost`.

SHA-256 of the source span: `43b94a9b1cb8fe82bd26f872f94577e04392a9d344d9d98432b04051524331f9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

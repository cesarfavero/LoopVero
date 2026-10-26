# `isGrokServedServer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/mcp-tool-call-telemetry.ts` · [Module README](../../../../../modules/core/mcp/mcp-tool-call-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:693317-693319](../../../../../../reference/runtime/host-main.cjs#L693317-L693319) | `FunctionDeclaration` | no | `providerIdentifier, server` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693317-693319](../../../../../../reference/runtime/host-main.cjs#L693317-L693319) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:693317

Calls written directly in this body: `GROK_MINTED_SERVER_IDENTIFIER.test`, `providerIdentifier.replace`.

SHA-256 of the source span: `6b7fd1c37ff9809f1091fdf9034a0f5d5c99beecaf2c21d031d09c6ed571939e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

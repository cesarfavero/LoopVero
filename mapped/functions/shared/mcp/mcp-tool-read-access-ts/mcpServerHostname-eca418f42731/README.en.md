# `mcpServerHostname`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp-tool-read-access.ts` · [Module README](../../../../../modules/shared/mcp/mcp-tool-read-access-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686986-686988](../../../../../../reference/runtime/host-main.cjs#L686986-L686988) | `FunctionDeclaration` | no | `serverHost` |
| [evaluation:579121-579123](../../../../../../reference/runtime/sand-eval-runner.cjs#L579121-L579123) | `FunctionDeclaration` | no | `serverHost` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686986-686988](../../../../../../reference/runtime/host-main.cjs#L686986-L686988) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:579121-579123](../../../../../../reference/runtime/sand-eval-runner.cjs#L579121-L579123) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:686986

Calls written directly in this body: `.split`, `serverHost.toLowerCase`.

SHA-256 of the source span: `e25041c4111bb3f5e3e854d390d2e5cd1fa8b71821ad835434bf72ef55643ee3`.

### evaluation:579121

Calls written directly in this body: `.split`, `serverHost.toLowerCase`.

SHA-256 of the source span: `e25041c4111bb3f5e3e854d390d2e5cd1fa8b71821ad835434bf72ef55643ee3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

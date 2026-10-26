# `resolveMcpAppResourceUri`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp-app.ts` · [Module README](../../../../../modules/shared/mcp/mcp-app-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:495081-495086](../../../../../../reference/runtime/sand-eval-runner.cjs#L495081-L495086) | `FunctionDeclaration` | no | `meta3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:495081-495086](../../../../../../reference/runtime/sand-eval-runner.cjs#L495081-L495086) | 4 | 0 | 0 | 2 | 0 | 0 |

### evaluation:495081

Calls written directly in this body: `isUnknownRecord2`, `uri.startsWith`.

SHA-256 of the source span: `7dbec4372a3336ba914328a3a0eb3dd670fd74d89b5cbbc9d68229c33bf2b74c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

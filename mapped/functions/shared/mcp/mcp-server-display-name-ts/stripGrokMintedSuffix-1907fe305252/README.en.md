# `stripGrokMintedSuffix`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp-server-display-name.ts` · [Module README](../../../../../modules/shared/mcp/mcp-server-display-name-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:577219-577221](../../../../../../reference/runtime/sand-eval-runner.cjs#L577219-L577221) | `FunctionDeclaration` | no | `name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:577219-577221](../../../../../../reference/runtime/sand-eval-runner.cjs#L577219-L577221) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:577219

Calls written directly in this body: `name18.endsWith`, `name18.slice`.

SHA-256 of the source span: `1a3d7e042d36df2e75f0f770a506872f271db1b7077778b4ed170628bd5f12fc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

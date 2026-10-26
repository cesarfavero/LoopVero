# `capitalizeLowercaseWord`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp-server-display-name.ts` · [Module README](../../../../../modules/shared/mcp/mcp-server-display-name-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:577236-577240](../../../../../../reference/runtime/sand-eval-runner.cjs#L577236-L577240) | `FunctionDeclaration` | no | `word` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:577236-577240](../../../../../../reference/runtime/sand-eval-runner.cjs#L577236-L577240) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:577236

Calls written directly in this body: `.toLocaleUpperCase`, `word.charAt`, `word.slice`, `word.toLocaleLowerCase`.

SHA-256 of the source span: `958ad80ea1df21036a36712da20623cd487815b053a34a500df9d7bfc6ce26e9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

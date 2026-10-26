# `stripAccountSuffix`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp-server-display-name.ts` · [Module README](../../../../../modules/shared/mcp/mcp-server-display-name-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:577215-577218](../../../../../../reference/runtime/sand-eval-runner.cjs#L577215-L577218) | `FunctionDeclaration` | no | `serverIdentifier` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:577215-577218](../../../../../../reference/runtime/sand-eval-runner.cjs#L577215-L577218) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:577215

Calls written directly in this body: `serverIdentifier.lastIndexOf`, `serverIdentifier.slice`.

SHA-256 of the source span: `39ef15df954033a14432c45bb6ee074879e390b2348b8d83e0a507d8bce73454`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

# `countMcpArgumentFix`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/mcp-argument-fix-telemetry.ts` · [Module README](../../../../../modules/core/mcp/mcp-argument-fix-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:579105-579110](../../../../../../reference/runtime/sand-eval-runner.cjs#L579105-L579110) | `FunctionDeclaration` | no | `ctx, kind, serverIdentifier` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:579105-579110](../../../../../../reference/runtime/sand-eval-runner.cjs#L579105-L579110) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:579105

Calls written directly in this body: `automaticArgumentFixes.increment`, `boundedConnectorTag`.

SHA-256 of the source span: `eb232d48a9b001bdf804eb1fd7e564ae97ab47ac2cc22193928a0a27699d18d4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

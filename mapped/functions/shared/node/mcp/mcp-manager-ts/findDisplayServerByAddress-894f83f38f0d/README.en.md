# `findDisplayServerByAddress`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689091-689093](../../../../../../../reference/runtime/host-main.cjs#L689091-L689093) | `FunctionDeclaration` | no | `servers, address` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689091-689093](../../../../../../../reference/runtime/host-main.cjs#L689091-L689093) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:689091

Calls written directly in this body: `servers.find`.

SHA-256 of the source span: `a79010e685b37f73e26b21c46f960d04c44ef72970b242766e45c742701d6dc7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

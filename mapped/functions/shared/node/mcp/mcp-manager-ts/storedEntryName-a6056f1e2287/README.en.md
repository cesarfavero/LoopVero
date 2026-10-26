# `storedEntryName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689094-689096](../../../../../../../reference/runtime/host-main.cjs#L689094-L689096) | `FunctionDeclaration` | no | `stored, name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689094-689096](../../../../../../../reference/runtime/host-main.cjs#L689094-L689096) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:689094

Calls written directly in this body: `.find`, `Object.hasOwn`, `Object.keys`.

SHA-256 of the source span: `069d3b39ae5235e87cebd862d932fef19ae277a8291352cd2de0dd79023e78b7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

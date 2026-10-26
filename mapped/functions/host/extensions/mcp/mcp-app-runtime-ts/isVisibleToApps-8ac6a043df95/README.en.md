# `isVisibleToApps`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `host/extensions/mcp/mcp-app-runtime.ts` · [Module README](../../../../../../modules/host/extensions/mcp/mcp-app-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701434-701438](../../../../../../../reference/runtime/host-main.cjs#L701434-L701438) | `FunctionDeclaration` | no | `tool` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701434-701438](../../../../../../../reference/runtime/host-main.cjs#L701434-L701438) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:701434

Calls written directly in this body: `Array.isArray`, `isUnknownRecord2`, `visibility.includes`.

SHA-256 of the source span: `a696fca18a773092a32e1b06f800933fe86d5162903045bf25fd58387f37aa15`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `toCategoryLabel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-marketplace.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-marketplace-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:404587-404591](../../../../../../../reference/runtime/host-main.cjs#L404587-L404591) | `FunctionDeclaration` | no | `key` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:404587-404591](../../../../../../../reference/runtime/host-main.cjs#L404587-L404591) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:404587

Calls written directly in this body: `.join`, `.map`, `.split`, `key.toLowerCase`.

SHA-256 of the source span: `719eac83edf6fe3f92b9ba05b66fdf04da88eb82b6adb99131f9b718d41a11e9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

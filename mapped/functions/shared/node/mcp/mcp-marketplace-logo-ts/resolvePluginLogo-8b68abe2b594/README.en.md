# `resolvePluginLogo`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-marketplace-logo.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-marketplace-logo-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:404492-404525](../../../../../../../reference/runtime/host-main.cjs#L404492-L404525) | `FunctionDeclaration` | yes | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:404492-404525](../../../../../../../reference/runtime/host-main.cjs#L404492-L404525) | 3 | 0 | 1 | 6 | 0 | 2 |

### host:404492

Calls written directly in this body: `Date.now`, `isKnownPluginLogoUrl`, `logoCache.get`, `logoCache.set`, `new URL`, `withLogoFetchSlot`.

Assignment or increment targets: `parsed2`.

SHA-256 of the source span: `95d4920eeb8877bb125df14bb0ca752b7a21546c47cf99643ee8d533c14bc4cf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `policyOfRaw`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp-tool-permissions.ts` · [Module README](../../../../../modules/shared/mcp/mcp-tool-permissions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686907-686921](../../../../../../reference/runtime/host-main.cjs#L686907-L686921) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686907-686921](../../../../../../reference/runtime/host-main.cjs#L686907-L686921) | 5 | 0 | 0 | 2 | 0 | 0 |

### host:686907

Calls written directly in this body: `.map`, `Object.entries`, `Object.fromEntries`, `isUnknownRecord2`, `toolPermissionOfRaw`.

SHA-256 of the source span: `f14fa0dbd547e4bd72adb42b2eeedb8b5686db69185818e32025110ec0e32b3c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

# `rawPolicyWith`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp-tool-permissions.ts` · [Module README](../../../../../modules/shared/mcp/mcp-tool-permissions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686933-686949](../../../../../../reference/runtime/host-main.cjs#L686933-L686949) | `FunctionDeclaration` | no | `raw, policy` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686933-686949](../../../../../../reference/runtime/host-main.cjs#L686933-L686949) | 5 | 0 | 0 | 2 | 0 | 0 |

### host:686933

Calls written directly in this body: `.map`, `Object.entries`, `Object.fromEntries`, `areJsonValuesEqual`, `isUnknownRecord2`, `policyOfRaw`, `rawPermissionWith`.

SHA-256 of the source span: `0685d2534504b2813f2123856ac4440565d770d8ea229a2e612a92733d42c991`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

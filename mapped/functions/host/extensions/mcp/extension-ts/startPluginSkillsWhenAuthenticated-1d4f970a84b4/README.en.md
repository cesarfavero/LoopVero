# `startPluginSkillsWhenAuthenticated`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `host/extensions/mcp/extension.ts` · [Module README](../../../../../../modules/host/extensions/mcp/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702388-702423](../../../../../../../reference/runtime/host-main.cjs#L702388-L702423) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702388-702423](../../../../../../../reference/runtime/host-main.cjs#L702388-L702423) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:702388

Calls written directly in this body: `options2.auth.peekAccessToken`, `options2.auth.subscribeToRenewal`, `start`.

SHA-256 of the source span: `3d016b44b4c8fa74c7cf39fdbd41275d41354dfa0feaf991afe29852529e2400`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

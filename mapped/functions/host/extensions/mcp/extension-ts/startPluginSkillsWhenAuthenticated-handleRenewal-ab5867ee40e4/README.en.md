# `startPluginSkillsWhenAuthenticated/handleRenewal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `host/extensions/mcp/extension.ts` · [Module README](../../../../../../modules/host/extensions/mcp/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702407-702414](../../../../../../../reference/runtime/host-main.cjs#L702407-L702414) | `ArrowFunctionExpression` | no | `event` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702407-702414](../../../../../../../reference/runtime/host-main.cjs#L702407-L702414) | 4 | 0 | 0 | 2 | 0 | 0 |

### host:702407

Calls written directly in this body: `options2.auth.peekAccessToken`, `options2.service.handleAuthChange`, `start`.

SHA-256 of the source span: `3d7cd96ff9a7d5fe857c84f3deaa6ae22a894fa872aca041a276b3e8c70ad1f1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

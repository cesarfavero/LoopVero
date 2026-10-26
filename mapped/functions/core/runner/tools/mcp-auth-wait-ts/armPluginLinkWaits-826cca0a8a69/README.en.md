# `armPluginLinkWaits`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/mcp-auth-wait.ts` · [Module README](../../../../../../modules/core/runner/tools/mcp-auth-wait-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765340-765346](../../../../../../../reference/runtime/host-main.cjs#L765340-L765346) | `FunctionDeclaration` | no | `register, message, deliverTo` |
| [evaluation:558707-558713](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558707-L558713) | `FunctionDeclaration` | no | `register, message, deliverTo` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765340-765346](../../../../../../../reference/runtime/host-main.cjs#L765340-L765346) | 2 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:558707-558713](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558707-L558713) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:765340

Calls written directly in this body: `armMcpAuthWait`, `pluginLinkIdsIn`.

SHA-256 of the source span: `1ea6422c40d65167efaea956337e921e728f2177179002f3c657f98382e4a125`.

### evaluation:558707

Calls written directly in this body: `armMcpAuthWait`, `pluginLinkIdsIn`.

SHA-256 of the source span: `1ea6422c40d65167efaea956337e921e728f2177179002f3c657f98382e4a125`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

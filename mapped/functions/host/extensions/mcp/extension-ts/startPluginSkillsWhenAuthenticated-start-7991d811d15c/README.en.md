# `startPluginSkillsWhenAuthenticated/start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `host/extensions/mcp/extension.ts` · [Module README](../../../../../../modules/host/extensions/mcp/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702392-702406](../../../../../../../reference/runtime/host-main.cjs#L702392-L702406) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702392-702406](../../../../../../../reference/runtime/host-main.cjs#L702392-L702406) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:702392

Calls written directly in this body: `options2.polling.start`.

Assignment or increment targets: `pollingHandle`, `started2`.

SHA-256 of the source span: `11ae17c5623054ff32d18a0fd9bf67863c9991a71c1cc70b62c85fae5525c45f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

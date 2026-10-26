# `start/reportSync`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `host/extensions/mcp/extension.ts` · [Module README](../../../../../../modules/host/extensions/mcp/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702457-702457](../../../../../../../reference/runtime/host-main.cjs#L702457-L702457) | `ArrowFunctionExpression` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702457-702457](../../../../../../../reference/runtime/host-main.cjs#L702457-L702457) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:702457 uses an implicit arrow-function return.

### host:702457

Calls written directly in this body: `context2.deps.telemetry.logs.reportPluginSkillsSync`.

SHA-256 of the source span: `ba660759cf673604f7af2103da8b043c710efb14b13f502300e9d612e8433b53`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

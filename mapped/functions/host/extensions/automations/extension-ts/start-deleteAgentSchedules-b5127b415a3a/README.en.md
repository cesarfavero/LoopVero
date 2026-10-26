# `start/deleteAgentSchedules`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/automations/extension.ts` · [Module README](../../../../../../modules/host/extensions/automations/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:506001-506001](../../../../../../../reference/runtime/host-main.cjs#L506001-L506001) | `ArrowFunctionExpression` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:506001-506001](../../../../../../../reference/runtime/host-main.cjs#L506001-L506001) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:506001 uses an implicit arrow-function return.

### host:506001

Calls written directly in this body: `cloudSync.deleteAgent`.

SHA-256 of the source span: `602f573e4cd689805ff86dc3fa7b22fd6cb3c887591a2234ca7b90adefb2012e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

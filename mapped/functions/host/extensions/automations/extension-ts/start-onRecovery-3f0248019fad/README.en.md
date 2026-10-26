# `start/onRecovery`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/automations/extension.ts` · [Module README](../../../../../../modules/host/extensions/automations/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505955-505960](../../../../../../../reference/runtime/host-main.cjs#L505955-L505960) | `ArrowFunctionExpression` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505955-505960](../../../../../../../reference/runtime/host-main.cjs#L505955-L505960) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:505955

Calls written directly in this body: `automationSyncFailureTrayIds.delete`, `automationSyncFailureTrayIds.get`, `context2.deps.trays.dismiss`.

SHA-256 of the source span: `2f048be6af82df94f76ef47583ccccef9dc00cccccd16f5c4adf934151c42f03`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

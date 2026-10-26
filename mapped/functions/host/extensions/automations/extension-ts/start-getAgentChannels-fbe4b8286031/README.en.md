# `start/getAgentChannels`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/automations/extension.ts` · [Module README](../../../../../../modules/host/extensions/automations/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:506021-506021](../../../../../../../reference/runtime/host-main.cjs#L506021-L506021) | `ArrowFunctionExpression` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:506021-506021](../../../../../../../reference/runtime/host-main.cjs#L506021-L506021) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:506021 uses an implicit arrow-function return.

### host:506021

Calls written directly in this body: `listenerReads.getAgentChannels`.

SHA-256 of the source span: `cb78ce7d10fd8bcb1b823c3ff03cfb99f9d4cb56f01d1b83ea11888f3e71816e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `createListenerIntegrationReads/readPlatformConnection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/automations/listener-integrations.ts` · [Module README](../../../../../../modules/host/extensions/automations/listener-integrations-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505385-505400](../../../../../../../reference/runtime/host-main.cjs#L505385-L505400) | `ArrowFunctionExpression` | yes | `platform2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505385-505400](../../../../../../../reference/runtime/host-main.cjs#L505385-L505400) | 4 | 0 | 2 | 3 | 0 | 0 |

### host:505385

Calls written directly in this body: `Number`, `client.getScmConnectionStatus`, `client.getSlackUserSettings`, `dashboard`, `new GetScmConnectionStatusRequest`, `new GetSlackUserSettingsRequest`.

SHA-256 of the source span: `566662fc0a06d4910828b2798c23ec4d63a60a46596376899d112d919d5ba83d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

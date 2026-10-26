# `createListenerIntegrationReads/readScmConnections`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/automations/listener-integrations.ts` · [Module README](../../../../../../modules/host/extensions/automations/listener-integrations-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505424-505453](../../../../../../../reference/runtime/host-main.cjs#L505424-L505453) | `ArrowFunctionExpression` | yes | `providers` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505424-505453](../../../../../../../reference/runtime/host-main.cjs#L505424-L505453) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:505424

Calls written directly in this body: `.getScmConnectionStatuses`, `dashboard`, `new GetScmConnectionStatusesRequest`, `new Map`, `new Set`, `providers.map`, `response.statuses.map`.

SHA-256 of the source span: `5f165073b2ae9578586104dba9a40bca8c691bc0ff826336c610c9e9ff329e81`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

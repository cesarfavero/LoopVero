# `start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/automations/extension.ts` · [Module README](../../../../../../modules/host/extensions/automations/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505919-506023](../../../../../../../reference/runtime/host-main.cjs#L505919-L506023) | `ArrowFunctionExpression` | no | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505919-506023](../../../../../../../reference/runtime/host-main.cjs#L505919-L506023) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:505919

Calls written directly in this body: `context2.onStop`, `createListenerIntegrationReads`, `createPollingPolicy2`, `createSandCursorBackendClient`, `new Map`, `new SandAutomationCloudSync`, `new SandWebhookCredentialService`, `reconcileWhenAuthenticated`, `startCloudSyncPoll`.

SHA-256 of the source span: `9dc50c644891cf492d5928583a799bb770d2ca37dd7858c315f242ea889ea2e5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

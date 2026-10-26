# `createListenerIntegrationReads/getIntegrations`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/automations/listener-integrations.ts` · [Module README](../../../../../../modules/host/extensions/automations/listener-integrations-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505455-505495](../../../../../../../reference/runtime/host-main.cjs#L505455-L505495) | `FunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505455-505495](../../../../../../../reference/runtime/host-main.cjs#L505455-L505495) | 1 | 0 | 3 | 1 | 0 | 0 |

### host:505455

Calls written directly in this body: `.catch`, `.map`, `LISTENER_INTEGRATIONS.map`, `Promise.all`, `SCM_CONNECT_CARD_INTEGRATIONS.map`, `cardPlatforms.filter`, `cardPlatforms.map`, `countListenerPlatforms`, `deps.isDesktopScmConnectEnabled`, `deps.transcript.listAllAutomationDefinitions`, `readScmConnections`.

SHA-256 of the source span: `55f8516abddf12c53e095dd55066f80f62b0e6a0be88ffe4020f642f15647860`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

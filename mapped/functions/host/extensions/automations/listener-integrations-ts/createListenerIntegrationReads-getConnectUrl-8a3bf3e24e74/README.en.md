# `createListenerIntegrationReads/getConnectUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/automations/listener-integrations.ts` · [Module README](../../../../../../modules/host/extensions/automations/listener-integrations-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505496-505519](../../../../../../../reference/runtime/host-main.cjs#L505496-L505519) | `FunctionExpression` | yes | `platform2, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505496-505519](../../../../../../../reference/runtime/host-main.cjs#L505496-L505519) | 4 | 0 | 3 | 5 | 0 | 1 |

### host:505496

Calls written directly in this body: `.getSlackInstallUrl`, `dashboard`, `dashboardIntegrationsUrl`, `mintScmConnectFlow`, `new GetSlackInstallUrlRequest`.

SHA-256 of the source span: `ea1f2d5fb878984c411b7e204390fb59ea3f7c92f568ed2110a20910fd11e93f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

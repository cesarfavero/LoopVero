# `toUrlSurface`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/cards/card-surfacing.ts` · [Module README](../../../../../../modules/core/runner/cards/card-surfacing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763846-763864](../../../../../../../reference/runtime/host-main.cjs#L763846-L763864) | `ArrowFunctionExpression` | yes | `card, context2` |
| [host:763872-763883](../../../../../../../reference/runtime/host-main.cjs#L763872-L763883) | `ArrowFunctionExpression` | no | `card, context2` |
| [evaluation:557189-557207](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557189-L557207) | `ArrowFunctionExpression` | yes | `card, context2` |
| [evaluation:557215-557226](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557215-L557226) | `ArrowFunctionExpression` | no | `card, context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763846-763864](../../../../../../../reference/runtime/host-main.cjs#L763846-L763864) | 4 | 0 | 1 | 5 | 0 | 0 |
| [host:763872-763883](../../../../../../../reference/runtime/host-main.cjs#L763872-L763883) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:557189-557207](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557189-L557207) | 4 | 0 | 1 | 5 | 0 | 0 |
| [evaluation:557215-557226](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557215-L557226) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:763846

Calls written directly in this body: `TAILNET_HOLD_SURFACES[computed]`, `TAILSCALE_CONNECT_SERVERS.has`, `card.serverId.toLowerCase`, `connectorSignInPluginId`, `context2.resolvePluginId`, `cursorSharePointSignInUrl`, `mcpTailnetPostureHoldOfDetail`.

SHA-256 of the source span: `40ae49189ecd4dc2ae57083f55da468cc5dbbd1b0d3222bcb4844076a1b07c5c`.

### host:763872

Calls written directly in this body: `cursorDashboardIntegrationsUrl`, `scmProviderPhrase`.

SHA-256 of the source span: `66b406bc455387881fa364b3861191bf5cacf0d0390a36abe78bffad54521c4f`.

### evaluation:557189

Calls written directly in this body: `TAILNET_HOLD_SURFACES[computed]`, `TAILSCALE_CONNECT_SERVERS.has`, `card.serverId.toLowerCase`, `connectorSignInPluginId`, `context2.resolvePluginId`, `cursorSharePointSignInUrl`, `mcpTailnetPostureHoldOfDetail`.

SHA-256 of the source span: `40ae49189ecd4dc2ae57083f55da468cc5dbbd1b0d3222bcb4844076a1b07c5c`.

### evaluation:557215

Calls written directly in this body: `cursorDashboardIntegrationsUrl`, `scmProviderPhrase`.

SHA-256 of the source span: `66b406bc455387881fa364b3861191bf5cacf0d0390a36abe78bffad54521c4f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

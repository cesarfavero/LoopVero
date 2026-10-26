# `legacyInAppLinksGuidance`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-ui-map/legacy-guidance.ts` · [Module README](../../../../../../modules/core/runner/sand-ui-map/legacy-guidance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:555266-555277](../../../../../../../reference/runtime/host-main.cjs#L555266-L555277) | `FunctionDeclaration` | no | `visibility = {}, options2 = {}` |
| [evaluation:544198-544209](../../../../../../../reference/runtime/sand-eval-runner.cjs#L544198-L544209) | `FunctionDeclaration` | no | `visibility = {}, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:555266-555277](../../../../../../../reference/runtime/host-main.cjs#L555266-L555277) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:544198-544209](../../../../../../../reference/runtime/sand-eval-runner.cjs#L544198-L544209) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:555266

Calls written directly in this body: `.filter`, `.join`, `LEADING_ROUTES.map`, `TRAILING_ROUTES.map`, `conciseRouteGuidance`, `legacyTaughtSettingsAnchorIds`, `routeGuidance`, `taughtOverviewTabIds`.

SHA-256 of the source span: `98e6319d3d895ca937d50df7aecb7d05acba1e2fbc91dfad0dfb8e9ead84a87b`.

### evaluation:544198

Calls written directly in this body: `.filter`, `.join`, `LEADING_ROUTES.map`, `TRAILING_ROUTES.map`, `conciseRouteGuidance`, `legacyTaughtSettingsAnchorIds`, `routeGuidance`, `taughtOverviewTabIds`.

SHA-256 of the source span: `eb6c1285f95ffd421bc65cbd0abd9891a491c39544155da304f8a0b74f2d2d9b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

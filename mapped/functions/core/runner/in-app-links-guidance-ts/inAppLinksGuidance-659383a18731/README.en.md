# `inAppLinksGuidance`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/in-app-links-guidance.ts` · [Module README](../../../../../modules/core/runner/in-app-links-guidance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557769-557784](../../../../../../reference/runtime/host-main.cjs#L557769-L557784) | `FunctionDeclaration` | no | `visibility = {}, options2 = {}` |
| [evaluation:546205-546220](../../../../../../reference/runtime/sand-eval-runner.cjs#L546205-L546220) | `FunctionDeclaration` | no | `visibility = {}, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557769-557784](../../../../../../reference/runtime/host-main.cjs#L557769-L557784) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:546205-546220](../../../../../../reference/runtime/sand-eval-runner.cjs#L546205-L546220) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:557769

Calls written directly in this body: `.filter`, `.join`, `LEADING_ROUTES2.map`, `TRAILING_ROUTES2.map`, `conciseRouteGuidance2`, `routeGuidance2`, `sandUiFactsForToolDescription`, `taughtOverviewTabIds2`, `taughtSettingsAnchorIds`.

SHA-256 of the source span: `6216d9e9b7abf31f0346382875239cb6351bc11dd9061b6537f346531c67d0cd`.

### evaluation:546205

Calls written directly in this body: `.filter`, `.join`, `LEADING_ROUTES2.map`, `TRAILING_ROUTES2.map`, `conciseRouteGuidance2`, `routeGuidance2`, `sandUiFactsForToolDescription`, `taughtOverviewTabIds2`, `taughtSettingsAnchorIds`.

SHA-256 of the source span: `18a351c3c0f51045e2de0c5d571be8cda2a957b8946e6204c12710345dbdcc0a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

# `conciseRouteGuidance`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-ui-map/legacy-guidance.ts` · [Module README](../../../../../../modules/core/runner/sand-ui-map/legacy-guidance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:555245-555254](../../../../../../../reference/runtime/host-main.cjs#L555245-L555254) | `FunctionDeclaration` | no | `taught, tabs` |
| [evaluation:544177-544186](../../../../../../../reference/runtime/sand-eval-runner.cjs#L544177-L544186) | `FunctionDeclaration` | no | `taught, tabs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:555245-555254](../../../../../../../reference/runtime/host-main.cjs#L555245-L555254) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:544177-544186](../../../../../../../reference/runtime/sand-eval-runner.cjs#L544177-L544186) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:555245

Calls written directly in this body: `routeTemplate`, `tabs.join`, `taught.join`.

SHA-256 of the source span: `c2d67cca13f3a246854672fc1a95831f0f2aa487e4c04ceb77913e0d14509b60`.

### evaluation:544177

Calls written directly in this body: `routeTemplate`, `tabs.join`, `taught.join`.

SHA-256 of the source span: `c2d67cca13f3a246854672fc1a95831f0f2aa487e4c04ceb77913e0d14509b60`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

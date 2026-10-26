# `routeGuidance`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-ui-map/legacy-guidance.ts` · [Module README](../../../../../../modules/core/runner/sand-ui-map/legacy-guidance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:555233-555242](../../../../../../../reference/runtime/host-main.cjs#L555233-L555242) | `FunctionDeclaration` | no | `taught, tabs` |
| [evaluation:544165-544174](../../../../../../../reference/runtime/sand-eval-runner.cjs#L544165-L544174) | `FunctionDeclaration` | no | `taught, tabs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:555233-555242](../../../../../../../reference/runtime/host-main.cjs#L555233-L555242) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:544165-544174](../../../../../../../reference/runtime/sand-eval-runner.cjs#L544165-L544174) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:555233

Calls written directly in this body: `routeTemplate`, `tabs.join`, `taught.join`.

SHA-256 of the source span: `4852007221247289109ba9fa153b815ef23127edb70cf32697c61b8d6c1db8c7`.

### evaluation:544165

Calls written directly in this body: `routeTemplate`, `tabs.join`, `taught.join`.

SHA-256 of the source span: `4852007221247289109ba9fa153b815ef23127edb70cf32697c61b8d6c1db8c7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

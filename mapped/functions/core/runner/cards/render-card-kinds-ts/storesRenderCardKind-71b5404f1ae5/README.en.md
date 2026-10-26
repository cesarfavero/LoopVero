# `storesRenderCardKind`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/cards/render-card-kinds.ts` · [Module README](../../../../../../modules/core/runner/cards/render-card-kinds-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768667-768669](../../../../../../../reference/runtime/host-main.cjs#L768667-L768669) | `FunctionDeclaration` | no | `gates, kind` |
| [evaluation:564181-564183](../../../../../../../reference/runtime/sand-eval-runner.cjs#L564181-L564183) | `FunctionDeclaration` | no | `gates, kind` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768667-768669](../../../../../../../reference/runtime/host-main.cjs#L768667-L768669) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564181-564183](../../../../../../../reference/runtime/sand-eval-runner.cjs#L564181-L564183) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768667

Calls written directly in this body: `RENDER_CARD_KIND_GATES[computed]`, `gates.widgetV0`.

SHA-256 of the source span: `e9f29f3b897417e56333924d1ed03e098b3ae1c03a7cdf3049e6b99d81ca76e5`.

### evaluation:564181

Calls written directly in this body: `RENDER_CARD_KIND_GATES[computed]`, `gates.widgetV0`.

SHA-256 of the source span: `e9f29f3b897417e56333924d1ed03e098b3ae1c03a7cdf3049e6b99d81ca76e5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

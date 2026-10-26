# `normalizeShipTo`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/virtual-card-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/virtual-card-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775333-775338](../../../../../../../reference/runtime/host-main.cjs#L775333-L775338) | `FunctionDeclaration` | no | `shipTo` |
| [evaluation:574978-574983](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574978-L574983) | `FunctionDeclaration` | no | `shipTo` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775333-775338](../../../../../../../reference/runtime/host-main.cjs#L775333-L775338) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:574978-574983](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574978-L574983) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:775333

Calls written directly in this body: `clampLine`.

SHA-256 of the source span: `0a7d84da4307f3b9dbb4fce6c3e27f50ebf3ef4fab0c0ee97a0491c42b2cf357`.

### evaluation:574978

Calls written directly in this body: `clampLine`.

SHA-256 of the source span: `0a7d84da4307f3b9dbb4fce6c3e27f50ebf3ef4fab0c0ee97a0491c42b2cf357`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

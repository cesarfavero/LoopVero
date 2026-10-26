# `reportMessagesToolUse`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-messages-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:778187-778193](../../../../../../../reference/runtime/host-main.cjs#L778187-L778193) | `FunctionDeclaration` | no | `ctx, report, makeUse` |
| [evaluation:577922-577928](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577922-L577928) | `FunctionDeclaration` | no | `ctx, report, makeUse` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778187-778193](../../../../../../../reference/runtime/host-main.cjs#L778187-L778193) | 0 | 0 | 0 | 0 | 0 | 1 |
| [evaluation:577922-577928](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577922-L577928) | 0 | 0 | 0 | 0 | 0 | 1 |

### host:778187

Calls written directly in this body: `errorLogTag`, `logger124.warn`, `makeUse`, `report`.

SHA-256 of the source span: `d282259cfccc4a2610ed5b3d3f3c2e87ccfb855e3dbc190d95fc0f6a4fb93f52`.

### evaluation:577922

Calls written directly in this body: `errorLogTag`, `logger97.warn`, `makeUse`, `report`.

SHA-256 of the source span: `797fd14f47b7752b9587075a8c02793ffc66118f5defd63119e8a84a2cddd90a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `webHostOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-takeover.ts` · [Module README](../../../../../modules/core/box/box-takeover-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775927-775936](../../../../../../reference/runtime/host-main.cjs#L775927-L775936) | `FunctionDeclaration` | no | `raw` |
| [evaluation:575584-575593](../../../../../../reference/runtime/sand-eval-runner.cjs#L575584-L575593) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775927-775936](../../../../../../reference/runtime/host-main.cjs#L775927-L775936) | 1 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:575584-575593](../../../../../../reference/runtime/sand-eval-runner.cjs#L575584-L575593) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:775927

Calls written directly in this body: `new URL`.

Assignment or increment targets: `url2`.

SHA-256 of the source span: `87efca2f81e68dce4933e14f82bf9557c78c02eee3d690345b23be22f6a71932`.

### evaluation:575584

Calls written directly in this body: `new URL`.

Assignment or increment targets: `url2`.

SHA-256 of the source span: `87efca2f81e68dce4933e14f82bf9557c78c02eee3d690345b23be22f6a71932`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

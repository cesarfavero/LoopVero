# `taughtOverviewTabIds2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/in-app-links-guidance.ts` · [Module README](../../../../../modules/core/runner/in-app-links-guidance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557719-557723](../../../../../../reference/runtime/host-main.cjs#L557719-L557723) | `FunctionDeclaration` | no | `facts` |
| [evaluation:546155-546159](../../../../../../reference/runtime/sand-eval-runner.cjs#L546155-L546159) | `FunctionDeclaration` | no | `facts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557719-557723](../../../../../../reference/runtime/host-main.cjs#L557719-L557723) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:546155-546159](../../../../../../reference/runtime/sand-eval-runner.cjs#L546155-L546159) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:557719

Calls written directly in this body: `SAND_UI_MAP.infoPane.tabIds.filter`.

SHA-256 of the source span: `7fd21503cf9b9d9f6037533f4814aef2e1475da6f034905a7f591daaf281dbc6`.

### evaluation:546155

Calls written directly in this body: `SAND_UI_MAP.infoPane.tabIds.filter`.

SHA-256 of the source span: `7fd21503cf9b9d9f6037533f4814aef2e1475da6f034905a7f591daaf281dbc6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

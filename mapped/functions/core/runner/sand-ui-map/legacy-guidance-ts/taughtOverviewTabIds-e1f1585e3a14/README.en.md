# `taughtOverviewTabIds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-ui-map/legacy-guidance.ts` · [Module README](../../../../../../modules/core/runner/sand-ui-map/legacy-guidance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:555230-555232](../../../../../../../reference/runtime/host-main.cjs#L555230-L555232) | `FunctionDeclaration` | no | `visibility` |
| [evaluation:544162-544164](../../../../../../../reference/runtime/sand-eval-runner.cjs#L544162-L544164) | `FunctionDeclaration` | no | `visibility` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:555230-555232](../../../../../../../reference/runtime/host-main.cjs#L555230-L555232) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:544162-544164](../../../../../../../reference/runtime/sand-eval-runner.cjs#L544162-L544164) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:555230

Calls written directly in this body: `OVERVIEW_TAB_IDS.filter`.

SHA-256 of the source span: `b38e42168b9f25bda7ba4bcd82c92ace18c80d55fd67d39be168bcd65e518b20`.

### evaluation:544162

Calls written directly in this body: `OVERVIEW_TAB_IDS.filter`.

SHA-256 of the source span: `b38e42168b9f25bda7ba4bcd82c92ace18c80d55fd67d39be168bcd65e518b20`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

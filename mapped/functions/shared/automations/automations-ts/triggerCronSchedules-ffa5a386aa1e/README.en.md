# `triggerCronSchedules`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automations.ts` · [Module README](../../../../../modules/shared/automations/automations-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485497-485501](../../../../../../reference/runtime/host-main.cjs#L485497-L485501) | `FunctionDeclaration` | no | `trigger2` |
| [evaluation:475227-475231](../../../../../../reference/runtime/sand-eval-runner.cjs#L475227-L475231) | `FunctionDeclaration` | no | `trigger` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485497-485501](../../../../../../reference/runtime/host-main.cjs#L485497-L485501) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475227-475231](../../../../../../reference/runtime/sand-eval-runner.cjs#L475227-L475231) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485497

Calls written directly in this body: `.flatMap`, `triggerList`.

SHA-256 of the source span: `18eea57724c252c82aa9f2b53ac55fcc3ad68deaf441a4263c53abf72459f040`.

### evaluation:475227

Calls written directly in this body: `.flatMap`, `triggerList`.

SHA-256 of the source span: `c9d0fd1bf184f2257d39d17af49e7feb57700d53ad9541750a276816f1861363`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

# `parseCron`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682332-682354](../../../../../../reference/runtime/host-main.cjs#L682332-L682354) | `FunctionDeclaration` | no | `expression` |
| [evaluation:526546-526568](../../../../../../reference/runtime/sand-eval-runner.cjs#L526546-L526568) | `FunctionDeclaration` | no | `expression` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682332-682354](../../../../../../reference/runtime/host-main.cjs#L682332-L682354) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:526546-526568](../../../../../../reference/runtime/sand-eval-runner.cjs#L526546-L526568) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:682332

Calls written directly in this body: `.map`, `expression.split`, `new Set`, `parseCronField`.

SHA-256 of the source span: `8ee1a540b7b48efff8054dc74ce3f19e7a3fed95cf6022e0cf6344b66c181ae5`.

### evaluation:526546

Calls written directly in this body: `.map`, `expression.split`, `new Set`, `parseCronField`.

SHA-256 of the source span: `8ee1a540b7b48efff8054dc74ce3f19e7a3fed95cf6022e0cf6344b66c181ae5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

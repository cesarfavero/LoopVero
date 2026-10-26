# `setsEqual`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682665-682667](../../../../../../reference/runtime/host-main.cjs#L682665-L682667) | `FunctionDeclaration` | no | `a, b2` |
| [evaluation:526889-526891](../../../../../../reference/runtime/sand-eval-runner.cjs#L526889-L526891) | `FunctionDeclaration` | no | `a, b2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682665-682667](../../../../../../reference/runtime/host-main.cjs#L682665-L682667) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:526889-526891](../../../../../../reference/runtime/sand-eval-runner.cjs#L526889-L526891) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:682665

Calls written directly in this body: `.every`.

SHA-256 of the source span: `f76ba11374b386c4c2c364821e25a91134c277b546345a9f01cf100131407671`.

### evaluation:526889

Calls written directly in this body: `.every`.

SHA-256 of the source span: `f76ba11374b386c4c2c364821e25a91134c277b546345a9f01cf100131407671`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

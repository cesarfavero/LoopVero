# `withCronMembers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/automations/README.en.md).

**Module:** `core/runner/tools/state-tools/automation-timing.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/automation-timing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761954-761960](../../../../../../../../reference/runtime/host-main.cjs#L761954-L761960) | `FunctionDeclaration` | no | `trigger2, choose` |
| [evaluation:554532-554538](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554532-L554538) | `FunctionDeclaration` | no | `trigger, choose` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761954-761960](../../../../../../../../reference/runtime/host-main.cjs#L761954-L761960) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:554532-554538](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554532-L554538) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:761954

Calls written directly in this body: `.map`, `triggerFromList`, `triggerList`.

SHA-256 of the source span: `7a862cba240c13c1a94dc2bd1eff1aaa5e67e56d1c9adf86c82464babd479357`.

### evaluation:554532

Calls written directly in this body: `.map`, `triggerFromList`, `triggerList`.

SHA-256 of the source span: `fd3743883d4adfc7461ed47e8850aec0dcf2bf942286eee318669057519dfb99`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

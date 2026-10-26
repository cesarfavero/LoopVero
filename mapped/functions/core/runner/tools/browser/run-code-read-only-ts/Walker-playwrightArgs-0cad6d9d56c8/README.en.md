# `Walker.playwrightArgs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750099-750112](../../../../../../../../reference/runtime/host-main.cjs#L750099-L750112) | `method` | no | `args, scope, paramKinds` |
| [evaluation:522950-522963](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522950-L522963) | `method` | no | `args, scope, paramKinds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750099-750112](../../../../../../../../reference/runtime/host-main.cjs#L750099-L750112) | 3 | 1 | 0 | 0 | 0 | 0 |
| [evaluation:522950-522963](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522950-L522963) | 3 | 1 | 0 | 0 | 0 | 0 |

### host:750099

Calls written directly in this body: `fail2`, `isInlineFunction`, `this.callback`, `this.playwrightOptions`, `this.playwrightValue`.

SHA-256 of the source span: `04a4138588c8812cb25625d5a3c4a4b4008cc0a14a356546d08f32a492fac0f5`.

### evaluation:522950

Calls written directly in this body: `fail`, `isInlineFunction`, `this.callback`, `this.playwrightOptions`, `this.playwrightValue`.

SHA-256 of the source span: `d0d8f3803892b959919c80b8eafe00722559e5bdc9d8a57d05428cf4d87803cb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

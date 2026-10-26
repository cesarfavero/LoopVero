# `Walker.callbackSlot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750080-750086](../../../../../../../../reference/runtime/host-main.cjs#L750080-L750086) | `method` | no | `arg, scope, paramKinds` |
| [evaluation:522931-522937](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522931-L522937) | `method` | no | `arg, scope, paramKinds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750080-750086](../../../../../../../../reference/runtime/host-main.cjs#L750080-L750086) | 4 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:522931-522937](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522931-L522937) | 4 | 0 | 0 | 5 | 0 | 0 |

### host:750080

Calls written directly in this body: `fail2`, `isInlineFunction`, `this.callback`, `this.expr`, `this.isGlobalFunction`.

SHA-256 of the source span: `ef5c20a29e211488d3afbffe5b2f56ee12d319ac60e10f89351d23380089a0c3`.

### evaluation:522931

Calls written directly in this body: `fail`, `isInlineFunction`, `this.callback`, `this.expr`, `this.isGlobalFunction`.

SHA-256 of the source span: `635f6e98061992aa0e6fb3a0b8bce89c75caeb0ea1aaefe30e736e2202a91966`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

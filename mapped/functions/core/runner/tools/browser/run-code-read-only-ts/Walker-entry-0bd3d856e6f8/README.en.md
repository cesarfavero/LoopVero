# `Walker.entry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:749723-749732](../../../../../../../../reference/runtime/host-main.cjs#L749723-L749732) | `method` | no | `fn` |
| [evaluation:522574-522583](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522574-L522583) | `method` | no | `fn` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:749723-749732](../../../../../../../../reference/runtime/host-main.cjs#L749723-L749732) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:522574-522583](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522574-L522583) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:749723

Calls written directly in this body: `fail2`, `fn.params.forEach`, `new Scope3`, `this.functionBody`.

SHA-256 of the source span: `63686fd3609353dde44eb20a81d47a084c7bc25573098c82a332823170e19532`.

### evaluation:522574

Calls written directly in this body: `fail`, `fn.params.forEach`, `new Scope3`, `this.functionBody`.

SHA-256 of the source span: `b07a9dfb9ae3c4470e29b67aff39dbcb163a76736fc92f0b4090404ee6464c1c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

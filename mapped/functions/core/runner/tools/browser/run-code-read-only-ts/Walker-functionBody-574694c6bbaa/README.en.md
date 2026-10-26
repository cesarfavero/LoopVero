# `Walker.functionBody`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:749733-749745](../../../../../../../../reference/runtime/host-main.cjs#L749733-L749745) | `method` | no | `fn, scope` |
| [evaluation:522584-522596](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522584-L522596) | `method` | no | `fn, scope` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:749733-749745](../../../../../../../../reference/runtime/host-main.cjs#L749733-L749745) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:522584-522596](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522584-L522596) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:749733

Calls written directly in this body: `fail2`, `returns.reduce`, `this.block`, `this.expr`.

Assignment or increment targets: `this.returns`.

SHA-256 of the source span: `5516efdb1d71684c7314dd339c89c63b9a72397fad6119698de20cbfa006e39d`.

### evaluation:522584

Calls written directly in this body: `fail`, `returns.reduce`, `this.block`, `this.expr`.

Assignment or increment targets: `this.returns`.

SHA-256 of the source span: `85ee837df2738c71dc953155323e718cf4279ae7639773cd157f74691635da37`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

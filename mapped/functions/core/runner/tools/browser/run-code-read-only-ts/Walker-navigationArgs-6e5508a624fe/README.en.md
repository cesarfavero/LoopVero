# `Walker.navigationArgs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750250-750275](../../../../../../../../reference/runtime/host-main.cjs#L750250-L750275) | `method` | no | `name18, args, scope` |
| [evaluation:523101-523126](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L523101-L523126) | `method` | no | `name18, args, scope` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750250-750275](../../../../../../../../reference/runtime/host-main.cjs#L750250-L750275) | 10 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:523101-523126](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L523101-L523126) | 10 | 1 | 0 | 1 | 0 | 0 |

### host:750250

Calls written directly in this body: `fail2`, `isInlineFunction`, `this.dataOnly`, `this.expr`.

SHA-256 of the source span: `138d007d117f3b78740ddd213ff41affcd163b31d0b37248073ebfcd81f61cbc`.

### evaluation:523101

Calls written directly in this body: `fail`, `isInlineFunction`, `this.dataOnly`, `this.expr`.

SHA-256 of the source span: `8146ee1a2f90a1df6a9295c27069b4b3917c9f24904d61b6ac028438e1ffc5ef`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

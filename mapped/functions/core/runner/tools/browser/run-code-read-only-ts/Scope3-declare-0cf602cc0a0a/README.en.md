# `Scope3.declare`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:749621-749623](../../../../../../../../reference/runtime/host-main.cjs#L749621-L749623) | `method` | no | `name18, binding` |
| [evaluation:522472-522474](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522472-L522474) | `method` | no | `name18, binding` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:749621-749623](../../../../../../../../reference/runtime/host-main.cjs#L749621-L749623) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:522472-522474](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522472-L522474) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:749621

Calls written directly in this body: `this.vars.set`.

SHA-256 of the source span: `abd57965b8e6f386e9152a22803d538c65e9127f7c0facb0b50f61147923bb9a`.

### evaluation:522472

Calls written directly in this body: `this.vars.set`.

SHA-256 of the source span: `abd57965b8e6f386e9152a22803d538c65e9127f7c0facb0b50f61147923bb9a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

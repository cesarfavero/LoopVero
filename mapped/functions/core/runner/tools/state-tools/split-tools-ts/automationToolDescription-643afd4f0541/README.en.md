# `automationToolDescription`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/state-tools/split-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771743-771753](../../../../../../../../reference/runtime/host-main.cjs#L771743-L771753) | `FunctionDeclaration` | no | `options2` |
| [evaluation:570976-570986](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570976-L570986) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771743-771753](../../../../../../../../reference/runtime/host-main.cjs#L771743-L771753) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:570976-570986](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570976-L570986) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:771743

Calls written directly in this body: `.join`.

SHA-256 of the source span: `38f8e3ab67510f4779ea8b880cbf2b3b71ac02db3f775553c607ba744d942d5c`.

### evaluation:570976

Calls written directly in this body: `.join`.

SHA-256 of the source span: `38f8e3ab67510f4779ea8b880cbf2b3b71ac02db3f775553c607ba744d942d5c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

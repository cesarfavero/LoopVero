# `playwrightRunCodeAdmission`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/playwright-run-code-admission.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/playwright-run-code-admission-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776134-776138](../../../../../../../../reference/runtime/host-main.cjs#L776134-L776138) | `FunctionDeclaration` | no | `turn` |
| [evaluation:575790-575794](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575790-L575794) | `FunctionDeclaration` | no | `turn` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776134-776138](../../../../../../../../reference/runtime/host-main.cjs#L776134-L776138) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:575790-575794](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575790-L575794) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:776134

Calls written directly in this body: `turnRefusal`.

SHA-256 of the source span: `0490a460a8a903c686d16abbedde74c8e60377dc204dcfa1474ebd0ab6be91c7`.

### evaluation:575790

Calls written directly in this body: `turnRefusal`.

SHA-256 of the source span: `0490a460a8a903c686d16abbedde74c8e60377dc204dcfa1474ebd0ab6be91c7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

# `sandSecureFillTargetKind`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727512-727516](../../../../../../../reference/runtime/host-main.cjs#L727512-L727516) | `FunctionDeclaration` | no | `target` |
| [evaluation:561967-561971](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561967-L561971) | `FunctionDeclaration` | no | `target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727512-727516](../../../../../../../reference/runtime/host-main.cjs#L727512-L727516) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:561967-561971](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561967-L561971) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:727512

Calls written directly in this body: `ID_CLASS_ATTRIBUTE_OR_PSEUDO_PATTERN.test`, `PLAYWRIGHT_REF_TARGET_PATTERN.test`, `target.trim`.

SHA-256 of the source span: `e36d4457d480eb89ef276a46cc3b5c07174afdd31e96e51a7acc100ab69e5f1a`.

### evaluation:561967

Calls written directly in this body: `ID_CLASS_ATTRIBUTE_OR_PSEUDO_PATTERN.test`, `PLAYWRIGHT_REF_TARGET_PATTERN.test`, `target.trim`.

SHA-256 of the source span: `e36d4457d480eb89ef276a46cc3b5c07174afdd31e96e51a7acc100ab69e5f1a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

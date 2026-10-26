# `advertisedAutomationParameters`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/state-tools/split-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771884-771887](../../../../../../../../reference/runtime/host-main.cjs#L771884-L771887) | `FunctionDeclaration` | no | `options2` |
| [evaluation:571117-571120](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571117-L571120) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771884-771887](../../../../../../../../reference/runtime/host-main.cjs#L771884-L771887) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:571117-571120](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571117-L571120) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:771884

Calls written directly in this body: `advertised.extend`, `advertisedAutomationParametersWithoutGuidance`.

SHA-256 of the source span: `05a3a9e19b1fe9edb72835d50c92f91b07e5fccb2f5f8c88dd432d913efbb245`.

### evaluation:571117

Calls written directly in this body: `advertised.extend`, `advertisedAutomationParametersWithoutGuidance`.

SHA-256 of the source span: `05a3a9e19b1fe9edb72835d50c92f91b07e5fccb2f5f8c88dd432d913efbb245`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

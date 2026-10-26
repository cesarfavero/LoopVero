# `draftToolAvailableForTurn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-tool-registration.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:756011-756013](../../../../../../../reference/runtime/host-main.cjs#L756011-L756013) | `FunctionDeclaration` | no | `host, decisions` |
| [evaluation:541886-541888](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541886-L541888) | `FunctionDeclaration` | no | `host, decisions` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756011-756013](../../../../../../../reference/runtime/host-main.cjs#L756011-L756013) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541886-541888](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541886-L541888) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:756011

Calls written directly in this body: `decisions.offers`, `host.gates.draftExternalMessage`.

SHA-256 of the source span: `07999290631fbbd2f1f8d8e671f2abec5be732cf1341b2ef83db47d5338246bf`.

### evaluation:541886

Calls written directly in this body: `decisions.offers`, `host.gates.draftExternalMessage`.

SHA-256 of the source span: `07999290631fbbd2f1f8d8e671f2abec5be732cf1341b2ef83db47d5338246bf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

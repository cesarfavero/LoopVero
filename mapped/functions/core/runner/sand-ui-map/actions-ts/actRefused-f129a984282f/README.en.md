# `actRefused`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-ui-map/actions.ts` · [Module README](../../../../../../modules/core/runner/sand-ui-map/actions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557912-557916](../../../../../../../reference/runtime/host-main.cjs#L557912-L557916) | `FunctionDeclaration` | no | `reason` |
| [evaluation:550720-550724](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550720-L550724) | `FunctionDeclaration` | no | `reason` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557912-557916](../../../../../../../reference/runtime/host-main.cjs#L557912-L557916) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:550720-550724](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550720-L550724) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:557912

Calls written directly in this body: `new SandToolInputError`.

SHA-256 of the source span: `6ae12f33917dab1b83c394b4cb380b5563c88a7ead4d19c2570a348f726fba16`.

### evaluation:550720

Calls written directly in this body: `new SandToolInputError`.

SHA-256 of the source span: `6ae12f33917dab1b83c394b4cb380b5563c88a7ead4d19c2570a348f726fba16`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `scrubThenClampSoACutCanNeverSplitAValueBackIntoView`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727423-727428](../../../../../../../reference/runtime/host-main.cjs#L727423-L727428) | `FunctionDeclaration` | no | `data2, submittedValues` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727423-727428](../../../../../../../reference/runtime/host-main.cjs#L727423-L727428) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:727423

Calls written directly in this body: `clampBlock`, `scrubSubmittedUserFormValues`.

SHA-256 of the source span: `263af85ba7fa933ec8c8d38a26312445b26e1603487dd5c46531e3d9ec2cdea3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

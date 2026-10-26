# `isAuthedSpeaker`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-route-verification.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:735181-735184](../../../../../../../reference/runtime/host-main.cjs#L735181-L735184) | `FunctionDeclaration` | no | `person, selfEmail, selfNames` |
| [evaluation:540755-540758](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540755-L540758) | `FunctionDeclaration` | no | `person, selfEmail, selfNames` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735181-735184](../../../../../../../reference/runtime/host-main.cjs#L735181-L735184) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:540755-540758](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540755-L540758) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:735181

Calls written directly in this body: `person.email.toLowerCase`, `person.name.toLowerCase`, `selfNames.includes`.

SHA-256 of the source span: `a6fda74db5f98003d50c6b018bba6731be4cf21b57a20bf5357a7a9e884c2e51`.

### evaluation:540755

Calls written directly in this body: `person.email.toLowerCase`, `person.name.toLowerCase`, `selfNames.includes`.

SHA-256 of the source span: `a6fda74db5f98003d50c6b018bba6731be4cf21b57a20bf5357a7a9e884c2e51`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

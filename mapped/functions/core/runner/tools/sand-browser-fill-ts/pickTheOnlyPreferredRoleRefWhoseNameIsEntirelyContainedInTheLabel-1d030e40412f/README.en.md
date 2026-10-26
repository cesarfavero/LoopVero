# `pickTheOnlyPreferredRoleRefWhoseNameIsEntirelyContainedInTheLabel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727020-727036](../../../../../../../reference/runtime/host-main.cjs#L727020-L727036) | `FunctionDeclaration` | no | `lines2, needle, preferredRole` |
| [evaluation:561631-561647](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561631-L561647) | `FunctionDeclaration` | no | `lines2, needle, preferredRole` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727020-727036](../../../../../../../reference/runtime/host-main.cjs#L727020-L727036) | 5 | 1 | 0 | 4 | 0 | 0 |
| [evaluation:561631-561647](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561631-L561647) | 5 | 1 | 0 | 4 | 0 | 0 |

### host:727020

Calls written directly in this body: `SNAPSHOT_LINE_NAME_PATTERN.exec`, `SNAPSHOT_LINE_ROLE_PATTERN.exec`, `SNAPSHOT_REF_PATTERN.exec`, `nameWords.every`, `new Set`, `wordsOfLabelAfterCollapsingEmailAddressAndPhoneNumber`.

Assignment or increment targets: `only`.

SHA-256 of the source span: `4759b19cf76f4af72b787406ea1501d01c1bea8ca770388564141cf737c12a8a`.

### evaluation:561631

Calls written directly in this body: `SNAPSHOT_LINE_NAME_PATTERN.exec`, `SNAPSHOT_LINE_ROLE_PATTERN.exec`, `SNAPSHOT_REF_PATTERN.exec`, `nameWords.every`, `new Set`, `wordsOfLabelAfterCollapsingEmailAddressAndPhoneNumber`.

Assignment or increment targets: `only`.

SHA-256 of the source span: `4759b19cf76f4af72b787406ea1501d01c1bea8ca770388564141cf737c12a8a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `pickTheOnlyPreferredRoleRefWhoseNameCarriesEveryWordOfTheLabelInAnyOrder`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727005-727019](../../../../../../../reference/runtime/host-main.cjs#L727005-L727019) | `FunctionDeclaration` | no | `lines2, needle, preferredRole` |
| [evaluation:561616-561630](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561616-L561630) | `FunctionDeclaration` | no | `lines2, needle, preferredRole` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727005-727019](../../../../../../../reference/runtime/host-main.cjs#L727005-L727019) | 5 | 1 | 0 | 4 | 0 | 0 |
| [evaluation:561616-561630](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561616-L561630) | 5 | 1 | 0 | 4 | 0 | 0 |

### host:727005

Calls written directly in this body: `SNAPSHOT_LINE_NAME_PATTERN.exec`, `SNAPSHOT_LINE_ROLE_PATTERN.exec`, `SNAPSHOT_REF_PATTERN.exec`, `labelWords.every`, `new Set`, `wordsOf2`, `wordsOfLabelAfterCollapsingEmailAddressAndPhoneNumber`.

Assignment or increment targets: `only`.

SHA-256 of the source span: `79982cd334fbdc753511bf63c626903f741b961a7239da358dd33e3ce21015aa`.

### evaluation:561616

Calls written directly in this body: `SNAPSHOT_LINE_NAME_PATTERN.exec`, `SNAPSHOT_LINE_ROLE_PATTERN.exec`, `SNAPSHOT_REF_PATTERN.exec`, `labelWords.every`, `new Set`, `wordsOf3`, `wordsOfLabelAfterCollapsingEmailAddressAndPhoneNumber`.

Assignment or increment targets: `only`.

SHA-256 of the source span: `1b71c2bfa033ff25295d287fcde20d3299ac40f60a7f4bc584d7f608b1da6a95`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

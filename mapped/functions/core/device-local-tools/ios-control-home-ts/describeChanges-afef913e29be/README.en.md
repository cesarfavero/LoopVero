# `describeChanges`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/ios-control-home.ts` · [Module README](../../../../../modules/core/device-local-tools/ios-control-home-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:758767-758791](../../../../../../reference/runtime/host-main.cjs#L758767-L758791) | `FunctionDeclaration` | no | `changes` |
| [evaluation:548927-548951](../../../../../../reference/runtime/sand-eval-runner.cjs#L548927-L548951) | `FunctionDeclaration` | no | `changes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758767-758791](../../../../../../reference/runtime/host-main.cjs#L758767-L758791) | 4 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:548927-548951](../../../../../../reference/runtime/sand-eval-runner.cjs#L548927-L548951) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:758767

Calls written directly in this body: `.join`, `.map`, `changes.filter`, `changes.map`, `countedGroups.map`, `details.join`, `details.some`, `groupsOf`, `homesOf`, `sentenceOf`.

SHA-256 of the source span: `d6ef83dceb101d02f5e7482f215267201780e3bfa0ad704a46ffb7b667f9a992`.

### evaluation:548927

Calls written directly in this body: `.join`, `.map`, `changes.filter`, `changes.map`, `countedGroups.map`, `details.join`, `details.some`, `groupsOf`, `homesOf`, `sentenceOf`.

SHA-256 of the source span: `95d175a196650ca14d10a0117af3cd3b02b039482b3c642658996660a71ce433`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

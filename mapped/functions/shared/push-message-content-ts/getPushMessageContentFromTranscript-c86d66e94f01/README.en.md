# `getPushMessageContentFromTranscript`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `shared/push-message-content.ts` · [Module README](../../../../modules/shared/push-message-content-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722300-722322](../../../../../reference/runtime/host-main.cjs#L722300-L722322) | `FunctionDeclaration` | no | `entries` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722300-722322](../../../../../reference/runtime/host-main.cjs#L722300-L722322) | 3 | 1 | 0 | 2 | 0 | 0 |

### host:722300

Calls written directly in this body: `getMainTranscriptEntries`, `toPushMessageEntry`.

Assignment or increment targets: `i`, `last`, `predecessorId`.

SHA-256 of the source span: `50c022d1054e701680a60033cddab5724177da82171671ce37475f8a575fc47d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

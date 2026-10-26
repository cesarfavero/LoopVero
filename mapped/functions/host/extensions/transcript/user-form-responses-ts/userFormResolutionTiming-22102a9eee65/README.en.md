# `userFormResolutionTiming`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/user-form-responses.ts` · [Module README](../../../../../../modules/host/extensions/transcript/user-form-responses-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740831-740835](../../../../../../../reference/runtime/host-main.cjs#L740831-L740835) | `FunctionDeclaration` | no | `entryTimestampMs, resolvedAtMs = Date.now()` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740831-740835](../../../../../../../reference/runtime/host-main.cjs#L740831-L740835) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:740831

Calls written directly in this body: `Number.isFinite`.

SHA-256 of the source span: `cfefc2930ebc85f65ff4cf5d92681cc6e58d4ed20810f03e6d9ee253e907967b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `UserFormResponses.finishUserForm`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/user-form-responses.ts` · [Module README](../../../../../../modules/host/extensions/transcript/user-form-responses-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740771-740819](../../../../../../../reference/runtime/host-main.cjs#L740771-L740819) | `method` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740771-740819](../../../../../../../reference/runtime/host-main.cjs#L740771-L740819) | 16 | 0 | 0 | 0 | 0 | 0 |

### host:740771

Calls written directly in this body: `args.form.fields.filter`, `brandedHost`, `brandedId`, `classifyUserFormFailureReason`, `fill.outcomes.filter`, `this.tm.productAnalytics.trackEvent`, `this.userForms.recordResolution`, `userFormResolutionTiming`.

SHA-256 of the source span: `5f064b5c8b12f191a75da8d86a250041fbe708dd0535461e7faceb96da4cacb2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

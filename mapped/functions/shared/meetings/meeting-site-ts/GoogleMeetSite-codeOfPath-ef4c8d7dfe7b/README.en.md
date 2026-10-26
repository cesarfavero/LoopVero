# `_GoogleMeetSite.codeOfPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/meetings/meeting-site.ts` · [Module README](../../../../../modules/shared/meetings/meeting-site-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772267-772275](../../../../../../reference/runtime/host-main.cjs#L772267-L772275) | `method` | no | `pathname` |
| [evaluation:571496-571504](../../../../../../reference/runtime/sand-eval-runner.cjs#L571496-L571504) | `method` | no | `pathname` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772267-772275](../../../../../../reference/runtime/host-main.cjs#L772267-L772275) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:571496-571504](../../../../../../reference/runtime/sand-eval-runner.cjs#L571496-L571504) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:772267

Calls written directly in this body: `.filter`, `_GoogleMeetSite.lookupCode.test`, `_GoogleMeetSite.meetingCode.test`, `head.toLowerCase`, `pathname.split`.

SHA-256 of the source span: `30139b9ecc108feac6980d584dd5766b10401de4743c805fcd6d7961f9f50ba3`.

### evaluation:571496

Calls written directly in this body: `.filter`, `_GoogleMeetSite.lookupCode.test`, `_GoogleMeetSite.meetingCode.test`, `head.toLowerCase`, `pathname.split`.

SHA-256 of the source span: `30139b9ecc108feac6980d584dd5766b10401de4743c805fcd6d7961f9f50ba3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

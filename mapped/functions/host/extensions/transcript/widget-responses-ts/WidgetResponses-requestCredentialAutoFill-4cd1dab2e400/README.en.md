# `WidgetResponses.requestCredentialAutoFill`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/widget-responses.ts` · [Module README](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:782937-782963](../../../../../../../reference/runtime/host-main.cjs#L782937-L782963) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782937-782963](../../../../../../../reference/runtime/host-main.cjs#L782937-L782963) | 3 | 0 | 2 | 2 | 0 | 1 |

### host:782937

Calls written directly in this body: `errorLogTag`, `reportHostDiagnostic`, `session.db.updateTranscriptEntry`, `this.tm.requestCredentialAutoFill`, `this.tm.roster.emit`, `this.tm.sessions.ensureActionTarget`, `updateEntry`.

Assignment or increment targets: `outcome`.

SHA-256 of the source span: `dcd36e69ecf4bec2975cc4dd01f19ad11aae22dc61f42fc039837a3818ccdf4f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

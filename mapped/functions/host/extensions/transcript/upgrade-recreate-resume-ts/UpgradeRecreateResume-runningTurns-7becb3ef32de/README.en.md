# `UpgradeRecreateResume.runningTurns`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/upgrade-recreate-resume.ts` · [Module README](../../../../../../modules/host/extensions/transcript/upgrade-recreate-resume-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740504-740506](../../../../../../../reference/runtime/host-main.cjs#L740504-L740506) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740504-740506](../../../../../../../reference/runtime/host-main.cjs#L740504-L740506) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:740504

Calls written directly in this body: `this.tm.runLifecycle.runningAgentIds`.

SHA-256 of the source span: `1ede710df61a62531871992e61f63b5aa2bae53e19b0048c48b8c2b52577545d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

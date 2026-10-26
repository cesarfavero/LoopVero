# `start/report`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript-publish/extension.ts` · [Module README](../../../../../../modules/host/extensions/transcript-publish/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784340-784340](../../../../../../../reference/runtime/host-main.cjs#L784340-L784340) | `ArrowFunctionExpression` | no | `level, metadata2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784340-784340](../../../../../../../reference/runtime/host-main.cjs#L784340-L784340) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:784340 uses an implicit arrow-function return.

### host:784340

Calls written directly in this body: `context2.deps.telemetry.logs.reportTranscriptPublish`.

SHA-256 of the source span: `aedd741e4ddb9db8bb09632214ce87b83413674f7d870641203bc2f5e0ae3ced`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

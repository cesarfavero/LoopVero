# `TranscriptEntryPublisher.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript-publish/transcript-entry-publisher.ts` · [Module README](../../../../../../modules/host/extensions/transcript-publish/transcript-entry-publisher-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:783865-783879](../../../../../../../reference/runtime/host-main.cjs#L783865-L783879) | `method` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783865-783879](../../../../../../../reference/runtime/host-main.cjs#L783865-L783879) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:783865

Calls written directly in this body: `createTaskBoundaryPolicy`.

Assignment or increment targets: `this.clock`, `this.deps`, `this.readBoundary`, `this.report`.

SHA-256 of the source span: `98f36c0a395d312dc7c2d40adb97931540aaa26e52c476c9e477149b0fcd1771`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

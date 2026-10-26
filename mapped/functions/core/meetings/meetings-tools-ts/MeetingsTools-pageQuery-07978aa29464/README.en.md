# `_MeetingsTools.pageQuery`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773438-773447](../../../../../../reference/runtime/host-main.cjs#L773438-L773447) | `method` | no | `args` |
| [evaluation:572664-572673](../../../../../../reference/runtime/sand-eval-runner.cjs#L572664-L572673) | `method` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773438-773447](../../../../../../reference/runtime/host-main.cjs#L773438-L773447) | 5 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:572664-572673](../../../../../../reference/runtime/sand-eval-runner.cjs#L572664-L572673) | 5 | 0 | 0 | 1 | 0 | 0 |

### host:773438

Calls written directly in this body: `Date.parse`, `MeetingPageCursor.decode`.

SHA-256 of the source span: `04a7813298c4a6f00f45112943d8099997a1bb49123f96fcbcee38a747fd96e0`.

### evaluation:572664

Calls written directly in this body: `Date.parse`, `MeetingPageCursor.decode`.

SHA-256 of the source span: `04a7813298c4a6f00f45112943d8099997a1bb49123f96fcbcee38a747fd96e0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

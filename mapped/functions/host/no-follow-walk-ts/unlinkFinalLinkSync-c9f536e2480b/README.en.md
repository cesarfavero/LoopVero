# `unlinkFinalLinkSync`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/no-follow-walk.ts` · [Module README](../../../../modules/host/no-follow-walk-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453597-453624](../../../../../reference/runtime/host-main.cjs#L453597-L453624) | `FunctionDeclaration` | no | `path33, root` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453597-453624](../../../../../reference/runtime/host-main.cjs#L453597-L453624) | 1 | 1 | 0 | 1 | 0 | 2 |

### host:453597

Calls written directly in this body: `.isSymbolicLink`, `ignoreMissing`, `openSyncRefusingLinks`, `segmentsBelow`, `syncEntryOf`.

Assignment or increment targets: `child`, `current2`, `fd`.

SHA-256 of the source span: `df9e34951416b1319bae228589c4b95a303e89b6c10d5178bed46865699cbd1a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

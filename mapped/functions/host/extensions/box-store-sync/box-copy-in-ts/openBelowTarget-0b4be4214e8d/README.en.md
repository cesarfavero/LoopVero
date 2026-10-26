# `openBelowTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-copy-in.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:482965-482968](../../../../../../../reference/runtime/host-main.cjs#L482965-L482968) | `FunctionDeclaration` | yes | `targetDir, segments` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:482965-482968](../../../../../../../reference/runtime/host-main.cjs#L482965-L482968) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:482965

Calls written directly in this body: `noFollowRootFor`, `openBelow`, `segmentsBelow`.

SHA-256 of the source span: `6cccff07982016c5e20d552c9c5d7ba74ed6d2de6a68539c5b785cf988d62284`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

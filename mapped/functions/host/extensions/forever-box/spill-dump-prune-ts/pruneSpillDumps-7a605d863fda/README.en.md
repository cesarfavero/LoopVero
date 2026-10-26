# `pruneSpillDumps`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/spill-dump-prune.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/spill-dump-prune-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:680873-680903](../../../../../../../reference/runtime/host-main.cjs#L680873-L680903) | `FunctionDeclaration` | yes | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680873-680903](../../../../../../../reference/runtime/host-main.cjs#L680873-L680903) | 3 | 2 | 3 | 1 | 0 | 2 |

### host:680873

Calls written directly in this body: `errorLogTag`, `info2.isFile`, `isMissingPathError`, `options2.log`.

Assignment or increment targets: `freedBytes`, `names3`, `removed`.

SHA-256 of the source span: `00bb1ac82949e5d790e09b412317a168085d493fc1d94b5dfa21a946dd595a40`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

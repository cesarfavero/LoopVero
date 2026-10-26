# `isFirehoseKind`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/repo-wide-listener-refusal.ts` · [Module README](../../../../../modules/core/automations/repo-wide-listener-refusal-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762005-762007](../../../../../../reference/runtime/host-main.cjs#L762005-L762007) | `FunctionDeclaration` | no | `kind` |
| [evaluation:554583-554585](../../../../../../reference/runtime/sand-eval-runner.cjs#L554583-L554585) | `FunctionDeclaration` | no | `kind` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762005-762007](../../../../../../reference/runtime/host-main.cjs#L762005-L762007) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:554583-554585](../../../../../../reference/runtime/sand-eval-runner.cjs#L554583-L554585) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:762005

Calls written directly in this body: `FIREHOSE_EVENT_KIND_SET.has`.

SHA-256 of the source span: `ad70ae519dce6fce6f7966795525b84c0dc443b7b2859086f5b177e846139971`.

### evaluation:554583

Calls written directly in this body: `FIREHOSE_EVENT_KIND_SET.has`.

SHA-256 of the source span: `ad70ae519dce6fce6f7966795525b84c0dc443b7b2859086f5b177e846139971`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

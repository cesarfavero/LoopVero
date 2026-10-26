# `pickRefLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726969-726981](../../../../../../../reference/runtime/host-main.cjs#L726969-L726981) | `FunctionDeclaration` | no | `lines2, preferredRole, matches` |
| [evaluation:561580-561592](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561580-L561592) | `FunctionDeclaration` | no | `lines2, preferredRole, matches` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726969-726981](../../../../../../../reference/runtime/host-main.cjs#L726969-L726981) | 4 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:561580-561592](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561580-L561592) | 4 | 1 | 0 | 2 | 0 | 0 |

### host:726969

Calls written directly in this body: `SNAPSHOT_LINE_ROLE_PATTERN.exec`, `SNAPSHOT_REF_PATTERN.exec`, `matches`.

Assignment or increment targets: `any2`.

SHA-256 of the source span: `8e5ee8be2cf640957c5100effd01fd109d7e60fa0962ecd1aa2b991a196ab87f`.

### evaluation:561580

Calls written directly in this body: `SNAPSHOT_LINE_ROLE_PATTERN.exec`, `SNAPSHOT_REF_PATTERN.exec`, `matches`.

Assignment or increment targets: `any2`.

SHA-256 of the source span: `8e5ee8be2cf640957c5100effd01fd109d7e60fa0962ecd1aa2b991a196ab87f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

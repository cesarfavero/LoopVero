# `WatchedDirectory.setOnChange`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/watched-directory.ts` · [Module README](../../../../modules/host/watched-directory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684373-684381](../../../../../reference/runtime/host-main.cjs#L684373-L684381) | `method` | no | `onChange` |
| [evaluation:627697-627705](../../../../../reference/runtime/sand-eval-runner.cjs#L627697-L627705) | `method` | no | `onChange` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684373-684381](../../../../../reference/runtime/host-main.cjs#L684373-L684381) | 2 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:627697-627705](../../../../../reference/runtime/sand-eval-runner.cjs#L627697-L627705) | 2 | 0 | 0 | 0 | 0 | 0 |

### host:684373

Calls written directly in this body: `this.debounce.wrap`, `this.notify.dispose`, `this.startWatching`, `this.stopWatching`.

Assignment or increment targets: `this.notify`.

SHA-256 of the source span: `4514ef11c8a10869622e31b408acc81e0e1e3acf45b07fa53dfbc046847bc538`.

### evaluation:627697

Calls written directly in this body: `this.debounce.wrap`, `this.notify.dispose`, `this.startWatching`, `this.stopWatching`.

Assignment or increment targets: `this.notify`.

SHA-256 of the source span: `4514ef11c8a10869622e31b408acc81e0e1e3acf45b07fa53dfbc046847bc538`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

# `WatchedDirectory.scheduleNotify`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/watched-directory.ts` · [Module README](../../../../modules/host/watched-directory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684496-684498](../../../../../reference/runtime/host-main.cjs#L684496-L684498) | `method` | no | `(none)` |
| [evaluation:627820-627822](../../../../../reference/runtime/sand-eval-runner.cjs#L627820-L627822) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684496-684498](../../../../../reference/runtime/host-main.cjs#L684496-L684498) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:627820-627822](../../../../../reference/runtime/sand-eval-runner.cjs#L627820-L627822) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:684496

Calls written directly in this body: `this.notify`.

SHA-256 of the source span: `b43368620ff73c1f919e8e72c89f7e7f8f24778d19ba0e6fad8ba774716f9786`.

### evaluation:627820

Calls written directly in this body: `this.notify`.

SHA-256 of the source span: `b43368620ff73c1f919e8e72c89f7e7f8f24778d19ba0e6fad8ba774716f9786`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

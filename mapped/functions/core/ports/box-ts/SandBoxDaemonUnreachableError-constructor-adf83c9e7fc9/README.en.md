# `SandBoxDaemonUnreachableError.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/ports/box.ts` · [Module README](../../../../../modules/core/ports/box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:489498-489503](../../../../../../reference/runtime/host-main.cjs#L489498-L489503) | `method` | no | `outcome, message, options2` |
| [evaluation:475682-475687](../../../../../../reference/runtime/sand-eval-runner.cjs#L475682-L475687) | `method` | no | `outcome, message, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:489498-489503](../../../../../../reference/runtime/host-main.cjs#L489498-L489503) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:475682-475687](../../../../../../reference/runtime/sand-eval-runner.cjs#L475682-L475687) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:489498

Calls written directly in this body: `super`.

Assignment or increment targets: `this.detail`, `this.name`, `this.outcome`.

SHA-256 of the source span: `d7c7ac28f1bd0e71a6a22db93eac384613ff809c4ad64c35418bbee60b361f34`.

### evaluation:475682

Calls written directly in this body: `super`.

Assignment or increment targets: `this.detail`, `this.name`, `this.outcome`.

SHA-256 of the source span: `d7c7ac28f1bd0e71a6a22db93eac384613ff809c4ad64c35418bbee60b361f34`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

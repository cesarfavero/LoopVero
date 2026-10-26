# `FirstTokenStallError.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/transient-stream-error.ts` · [Module README](../../../../../modules/core/runner/transient-stream-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736389-736392](../../../../../../reference/runtime/host-main.cjs#L736389-L736392) | `method` | no | `deadlineMs` |
| [evaluation:590027-590030](../../../../../../reference/runtime/sand-eval-runner.cjs#L590027-L590030) | `method` | no | `deadlineMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736389-736392](../../../../../../reference/runtime/host-main.cjs#L736389-L736392) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:590027-590030](../../../../../../reference/runtime/sand-eval-runner.cjs#L590027-L590030) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:736389

Calls written directly in this body: `Math.round`, `super`.

Assignment or increment targets: `this.name`.

SHA-256 of the source span: `f538ce2cca20826260c076151f49437d687cda70ecc53bea4519c9a27fd93fe1`.

### evaluation:590027

Calls written directly in this body: `Math.round`, `super`.

Assignment or increment targets: `this.name`.

SHA-256 of the source span: `f538ce2cca20826260c076151f49437d687cda70ecc53bea4519c9a27fd93fe1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

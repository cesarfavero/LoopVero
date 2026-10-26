# `FixtureUserMachine.read`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/evals/user-machine-fixtures.ts` · [Module README](../../../../../modules/core/evals/user-machine-fixtures-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:596412-596435](../../../../../../reference/runtime/sand-eval-runner.cjs#L596412-L596435) | `method` | no | `path33, range2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596412-596435](../../../../../../reference/runtime/sand-eval-runner.cjs#L596412-L596435) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:596412

Calls written directly in this body: `.decode`, `BigInt`, `contentLines`, `new ReadFileNotFound`, `new ReadResult`, `new ReadSuccess`, `new TextDecoder`, `sliceReadRange`, `this.assertReachable`, `this.files.get`, `this.normalizePath`.

SHA-256 of the source span: `aacadd8315896327a94df44c34099a0bd64813ba49458e90f0d9900cebf0617b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

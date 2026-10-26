# `FixtureUserMachine.replay`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/evals/user-machine-fixtures.ts` · [Module README](../../../../../modules/core/evals/user-machine-fixtures-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:596362-596379](../../../../../../reference/runtime/sand-eval-runner.cjs#L596362-L596379) | `method` | yes | `outcome, workingDirectory` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596362-596379](../../../../../../reference/runtime/sand-eval-runner.cjs#L596362-L596379) | 2 | 0 | 0 | 0 | 0 | 0 |

### evaluation:596362

Calls written directly in this body: `new ShellStream`, `new ShellStreamExit`, `new ShellStreamStderr`, `new ShellStreamStdout`, `this.cwd`.

SHA-256 of the source span: `c71225aaf8286a00fd7116f15e15b1348626c88966523c9b26eb0bd326f278a1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

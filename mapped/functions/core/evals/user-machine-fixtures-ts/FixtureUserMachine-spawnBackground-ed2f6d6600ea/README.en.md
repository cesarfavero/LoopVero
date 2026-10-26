# `FixtureUserMachine.spawnBackground`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/evals/user-machine-fixtures.ts` · [Module README](../../../../../modules/core/evals/user-machine-fixtures-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:596380-596411](../../../../../../reference/runtime/sand-eval-runner.cjs#L596380-L596411) | `method` | no | `command, workingDirectory` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596380-596411](../../../../../../reference/runtime/sand-eval-runner.cjs#L596380-L596411) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:596380

Calls written directly in this body: `.encode`, `.toISOString`, `import_node_path43.posix.join`, `new BackgroundShellSpawnError`, `new BackgroundShellSpawnResult`, `new BackgroundShellSpawnSuccess`, `new Date`, `new TextEncoder`, `terminalFileContent`, `this.cwd`, `this.files.set`, `this.normalizePath`, `this.shellOutcome`, `unresponsiveMessage`.

Assignment or increment targets: `this.nextShellId`.

SHA-256 of the source span: `0223fd62ac67034081f84e254c88348619fd0bc510b3dd6f986faf74ab076c6e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

# `FixtureUserMachine.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/evals/user-machine-fixtures.ts` · [Module README](../../../../../modules/core/evals/user-machine-fixtures-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:596328-596343](../../../../../../reference/runtime/sand-eval-runner.cjs#L596328-L596343) | `method` | no | `fixture` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596328-596343](../../../../../../reference/runtime/sand-eval-runner.cjs#L596328-L596343) | 1 | 1 | 0 | 0 | 0 | 0 |

### evaluation:596328

Calls written directly in this body: `encoder2.encode`, `fixture.shell.map`, `import_node_path43.posix.join`, `new Map`, `new TextEncoder`, `offlineMessage`, `this.files.set`, `this.normalizePath`, `writeRefusalMessage`.

Assignment or increment targets: `this.homeDir`, `this.id`, `this.label`, `this.offlineMessage`, `this.shellRules`, `this.terminalsFolder`, `this.unmatchedShell`, `this.writeRefusal`.

SHA-256 of the source span: `dac53a4bd62a8521f30b3894dad21753825eb066711a3a3a43c8a6349be0e44c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

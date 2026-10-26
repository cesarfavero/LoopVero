# `FixtureUserMachine.shellOutcome`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/evals/user-machine-fixtures.ts` · [Module README](../../../../../modules/core/evals/user-machine-fixtures-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:596347-596349](../../../../../../reference/runtime/sand-eval-runner.cjs#L596347-L596349) | `method` | no | `command` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596347-596349](../../../../../../reference/runtime/sand-eval-runner.cjs#L596347-L596349) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:596347

Calls written directly in this body: `normalizeFixtureCommand`, `this.shellRules.get`.

SHA-256 of the source span: `eeeb51227d77e85b794e3b0d7545d814bdec3210d6f74814ceb330c839471635`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

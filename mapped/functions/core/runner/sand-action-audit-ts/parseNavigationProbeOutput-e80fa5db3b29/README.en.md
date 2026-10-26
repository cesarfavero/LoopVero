# `parseNavigationProbeOutput`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-action-audit.ts` · [Module README](../../../../../modules/core/runner/sand-action-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699077-699125](../../../../../../reference/runtime/host-main.cjs#L699077-L699125) | `FunctionDeclaration` | no | `stdout` |
| [evaluation:512436-512484](../../../../../../reference/runtime/sand-eval-runner.cjs#L512436-L512484) | `FunctionDeclaration` | no | `stdout` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699077-699125](../../../../../../reference/runtime/host-main.cjs#L699077-L699125) | 12 | 2 | 0 | 1 | 0 | 1 |
| [evaluation:512436-512484](../../../../../../reference/runtime/sand-eval-runner.cjs#L512436-L512484) | 12 | 2 | 0 | 1 | 0 | 1 |

### host:699077

Calls written directly in this body: `Array.isArray`, `JSON.parse`, `errorLogTag`, `process.stderr.write`, `stdout.slice`, `targets.push`.

Assignment or increment targets: `depth`, `escaped`, `i`, `inString`, `start`.

SHA-256 of the source span: `9a9b9590388b16fd75ee612db592d9701605b6e75d459e2c1b3cd845d836dd95`.

### evaluation:512436

Calls written directly in this body: `Array.isArray`, `JSON.parse`, `errorLogTag`, `process.stderr.write`, `stdout.slice`, `targets.push`.

Assignment or increment targets: `depth`, `escaped`, `i`, `inString`, `start`.

SHA-256 of the source span: `f3244cbcbb1ad0462e455f845a04ad307f4c8a97ceef28f46ba6ed79e114a04d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

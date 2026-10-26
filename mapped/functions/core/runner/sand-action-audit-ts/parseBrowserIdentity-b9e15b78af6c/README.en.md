# `parseBrowserIdentity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-action-audit.ts` · [Module README](../../../../../modules/core/runner/sand-action-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:512387-512392](../../../../../../reference/runtime/sand-eval-runner.cjs#L512387-L512392) | `FunctionDeclaration` | no | `stdout` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512387-512392](../../../../../../reference/runtime/sand-eval-runner.cjs#L512387-L512392) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:512387

Calls written directly in this body: `BROWSER_VERSION_RE.exec`, `LAUNCHER_LINE_RE.exec`, `boundedInt`.

SHA-256 of the source span: `af71c6e9dc9ec260e977bd4b400a3a82ef89a6889ff9fff520a33f3c091a3efa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

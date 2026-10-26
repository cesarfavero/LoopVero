# `isSandProfileNamedBy`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/agents/agents.ts` · [Module README](../../../../../modules/shared/agents/agents-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485328-485330](../../../../../../reference/runtime/host-main.cjs#L485328-L485330) | `FunctionDeclaration` | no | `value` |
| [evaluation:629005-629007](../../../../../../reference/runtime/sand-eval-runner.cjs#L629005-L629007) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485328-485330](../../../../../../reference/runtime/host-main.cjs#L485328-L485330) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:629005-629007](../../../../../../reference/runtime/sand-eval-runner.cjs#L629005-L629007) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485328

Calls written directly in this body: `SAND_PROFILE_NAMED_BY.some`.

SHA-256 of the source span: `8e1153daa1914116f035543b216a082d9a4a95db907043999cbaa96afd24baa7`.

### evaluation:629005

Calls written directly in this body: `SAND_PROFILE_NAMED_BY.some`.

SHA-256 of the source span: `8e1153daa1914116f035543b216a082d9a4a95db907043999cbaa96afd24baa7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

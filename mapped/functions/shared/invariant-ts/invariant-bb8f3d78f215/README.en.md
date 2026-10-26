# `invariant`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `shared/invariant.ts` · [Module README](../../../../modules/shared/invariant-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:850-853](../../../../../reference/runtime/host-main.cjs#L850-L853) | `FunctionDeclaration` | no | `condition, message` |
| [evaluation:474331-474334](../../../../../reference/runtime/sand-eval-runner.cjs#L474331-L474334) | `FunctionDeclaration` | no | `condition, message` |
| [state-worker:55-58](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L55-L58) | `FunctionDeclaration` | no | `condition, message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:850-853](../../../../../reference/runtime/host-main.cjs#L850-L853) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:474331-474334](../../../../../reference/runtime/sand-eval-runner.cjs#L474331-L474334) | 1 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:55-58](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L55-L58) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:850

Calls written directly in this body: `failInvariant`.

SHA-256 of the source span: `bf05d9dedc2467f0475b1851f16b4acf9464da66e910f9fa5abf5d95cb264046`.

### evaluation:474331

Calls written directly in this body: `failInvariant`.

SHA-256 of the source span: `bf05d9dedc2467f0475b1851f16b4acf9464da66e910f9fa5abf5d95cb264046`.

### state-worker:55

Calls written directly in this body: `failInvariant`.

SHA-256 of the source span: `bf05d9dedc2467f0475b1851f16b4acf9464da66e910f9fa5abf5d95cb264046`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

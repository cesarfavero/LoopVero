# `normalizeUserFormRequest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726354-726421](../../../../../../../reference/runtime/host-main.cjs#L726354-L726421) | `FunctionDeclaration` | no | `args` |
| [evaluation:560969-561036](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560969-L561036) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726354-726421](../../../../../../../reference/runtime/host-main.cjs#L726354-L726421) | 7 | 0 | 0 | 1 | 3 | 0 |
| [evaluation:560969-561036](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560969-L561036) | 7 | 0 | 0 | 1 | 3 | 0 |

### host:726354

Calls written directly in this body: `args.fields.map`, `clampBlock`, `fields3.filter`, `fields3.find`, `new SandToolInputError`, `new Set`, `normalizeUserFormDomain`, `normalizeUserFormTitle`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `5e8e8e016ed291334ddd7e5bb10e1aa6ff41f429fb096458ec83bd3f9d84bf44`.

### evaluation:560969

Calls written directly in this body: `args.fields.map`, `clampBlock`, `fields3.filter`, `fields3.find`, `new SandToolInputError`, `new Set`, `normalizeUserFormDomain`, `normalizeUserFormTitle`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `5e8e8e016ed291334ddd7e5bb10e1aa6ff41f429fb096458ec83bd3f9d84bf44`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

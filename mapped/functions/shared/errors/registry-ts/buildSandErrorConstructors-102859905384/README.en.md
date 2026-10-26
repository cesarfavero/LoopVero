# `buildSandErrorConstructors`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/errors/registry.ts` · [Module README](../../../../../modules/shared/errors/registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:452596-452602](../../../../../../reference/runtime/host-main.cjs#L452596-L452602) | `FunctionDeclaration` | no | `(none)` |
| [evaluation:476786-476792](../../../../../../reference/runtime/sand-eval-runner.cjs#L476786-L476792) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:452596-452602](../../../../../../reference/runtime/host-main.cjs#L452596-L452602) | 0 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:476786-476792](../../../../../../reference/runtime/sand-eval-runner.cjs#L476786-L476792) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:452596

Calls written directly in this body: `Object.entries`.

Assignment or increment targets: `constructors[computed]`.

SHA-256 of the source span: `e1e71511045f549956fba8fac30221e5861637df8617986fbfa1fba3f63cd41a`.

### evaluation:476786

Calls written directly in this body: `Object.entries`.

Assignment or increment targets: `constructors[computed]`.

SHA-256 of the source span: `e1e71511045f549956fba8fac30221e5861637df8617986fbfa1fba3f63cd41a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

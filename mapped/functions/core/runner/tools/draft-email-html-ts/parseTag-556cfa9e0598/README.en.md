# `parseTag`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-email-html.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-email-html-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732473-732483](../../../../../../../reference/runtime/host-main.cjs#L732473-L732483) | `FunctionDeclaration` | no | `tag` |
| [evaluation:539485-539495](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539485-L539495) | `FunctionDeclaration` | no | `tag` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732473-732483](../../../../../../../reference/runtime/host-main.cjs#L732473-L732483) | 2 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:539485-539495](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539485-L539495) | 2 | 1 | 0 | 3 | 0 | 0 |

### host:732473

Calls written directly in this body: `TAG_PARTS.exec`, `attributes.has`, `attributes.set`, `name18.toLowerCase`, `new Map`, `parts[computed].matchAll`, `parts[computed].toLowerCase`.

SHA-256 of the source span: `3e54ed07c059e6217f54b7a703adb36b3bb79a6293ec58811bdacefcf42a4027`.

### evaluation:539485

Calls written directly in this body: `TAG_PARTS.exec`, `attributes.has`, `attributes.set`, `name18.toLowerCase`, `new Map`, `parts[computed].matchAll`, `parts[computed].toLowerCase`.

SHA-256 of the source span: `3e54ed07c059e6217f54b7a703adb36b3bb79a6293ec58811bdacefcf42a4027`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

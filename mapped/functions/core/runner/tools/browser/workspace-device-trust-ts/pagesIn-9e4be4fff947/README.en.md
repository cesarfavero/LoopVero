# `pagesIn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/workspace-device-trust.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/workspace-device-trust-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:743324-743328](../../../../../../../../reference/runtime/host-main.cjs#L743324-L743328) | `FunctionDeclaration` | no | `text3` |
| [evaluation:516175-516179](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516175-L516179) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743324-743328](../../../../../../../../reference/runtime/host-main.cjs#L743324-L743328) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:516175-516179](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516175-L516179) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:743324

Calls written directly in this body: `.map`, `text3.matchAll`, `urls.map`.

SHA-256 of the source span: `a4b3b682a02a848b2bf7d7666d618c3d726bddc95666dd1782e3e683c7c6090d`.

### evaluation:516175

Calls written directly in this body: `.map`, `text3.matchAll`, `urls.map`.

SHA-256 of the source span: `a4b3b682a02a848b2bf7d7666d618c3d726bddc95666dd1782e3e683c7c6090d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

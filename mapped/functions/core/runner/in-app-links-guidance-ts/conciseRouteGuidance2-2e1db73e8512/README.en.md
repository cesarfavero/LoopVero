# `conciseRouteGuidance2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/in-app-links-guidance.ts` · [Module README](../../../../../modules/core/runner/in-app-links-guidance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557737-557746](../../../../../../reference/runtime/host-main.cjs#L557737-L557746) | `FunctionDeclaration` | no | `taught, tabs, vault` |
| [evaluation:546173-546182](../../../../../../reference/runtime/sand-eval-runner.cjs#L546173-L546182) | `FunctionDeclaration` | no | `taught, tabs, vault` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557737-557746](../../../../../../reference/runtime/host-main.cjs#L557737-L557746) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:546173-546182](../../../../../../reference/runtime/sand-eval-runner.cjs#L546173-L546182) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:557737

Calls written directly in this body: `routeTemplate2`, `tabs.join`, `taught.join`.

SHA-256 of the source span: `2f9a90bb5afe699e169bdafa1ccf9e5c0124e1aaf3e656b301509b2f65f61790`.

### evaluation:546173

Calls written directly in this body: `routeTemplate2`, `tabs.join`, `taught.join`.

SHA-256 of the source span: `2f9a90bb5afe699e169bdafa1ccf9e5c0124e1aaf3e656b301509b2f65f61790`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

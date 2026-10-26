# `connectorServiceKey`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/connector-files/connection-name.ts` · [Module README](../../../../../../modules/core/runner/connector-files/connection-name-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773699-773701](../../../../../../../reference/runtime/host-main.cjs#L773699-L773701) | `FunctionDeclaration` | no | `name18` |
| [evaluation:572920-572922](../../../../../../../reference/runtime/sand-eval-runner.cjs#L572920-L572922) | `FunctionDeclaration` | no | `name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773699-773701](../../../../../../../reference/runtime/host-main.cjs#L773699-L773701) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:572920-572922](../../../../../../../reference/runtime/sand-eval-runner.cjs#L572920-L572922) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:773699

Calls written directly in this body: `.replaceAll`, `.toLowerCase`, `name18.trim`.

SHA-256 of the source span: `1eaeb6972f38f75fe507755f114ad577c5dd509df13aa3b6e68c376c3436faf5`.

### evaluation:572920

Calls written directly in this body: `.replaceAll`, `.toLowerCase`, `name18.trim`.

SHA-256 of the source span: `1eaeb6972f38f75fe507755f114ad577c5dd509df13aa3b6e68c376c3436faf5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

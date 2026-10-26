# `renderUnboundedRepoListenerRefusal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/repo-wide-listener-refusal.ts` · [Module README](../../../../../modules/core/automations/repo-wide-listener-refusal-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762023-762028](../../../../../../reference/runtime/host-main.cjs#L762023-L762028) | `FunctionDeclaration` | no | `{   listener,   firehoseKinds }` |
| [evaluation:554601-554606](../../../../../../reference/runtime/sand-eval-runner.cjs#L554601-L554606) | `FunctionDeclaration` | no | `{   listener,   firehoseKinds }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762023-762028](../../../../../../reference/runtime/host-main.cjs#L762023-L762028) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:554601-554606](../../../../../../reference/runtime/sand-eval-runner.cjs#L554601-L554606) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:762023

Calls written directly in this body: `firehoseKinds.join`.

SHA-256 of the source span: `8b948dc880163a7fe66c2903bff88d6a635ef659b14c3d10f2aed1eab2ad1614`.

### evaluation:554601

Calls written directly in this body: `firehoseKinds.join`.

SHA-256 of the source span: `8b948dc880163a7fe66c2903bff88d6a635ef659b14c3d10f2aed1eab2ad1614`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

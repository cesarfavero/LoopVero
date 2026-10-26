# `resolveSandBackendRequestHeaders`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/inference/README.md).

**Módulo:** `shared/node/cursor-backend/cursor-inference.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/cursor-inference-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225041-225078](../../../../../../../reference/runtime/host-main.cjs#L225041-L225078) | `FunctionDeclaration` | sim | `options2, isPrivacyModeLookup` |
| [evaluation:512104-512141](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512104-L512141) | `FunctionDeclaration` | sim | `options2, isPrivacyModeLookup` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225041-225078](../../../../../../../reference/runtime/host-main.cjs#L225041-L225078) | 6 | 1 | 2 | 1 | 0 | 0 |
| [evaluation:512104-512141](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512104-L512141) | 6 | 1 | 2 | 1 | 0 | 0 |

### host:225041

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `Object.entries`, `Object.keys`, `Promise.all`, `String`, `applyLocalCliModeHeader`, `applySandInferenceRequestContext`, `buildSandRequestLineageHeaders`, `createCursorChecksum`, `getSandBackendClientHeaders`, `headers.set`, `new Headers`, `options2.getMachineId`, `resolveGhostModeHeader`, `resolveSandBackendAuth`.

SHA-256 do trecho: `c71dea7660a62bed77d1b36515aff379c19d37b45c88c11b2e7c6444fa44fea7`.

### evaluation:512104

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `Object.entries`, `Object.keys`, `Promise.all`, `String`, `applyLocalCliModeHeader`, `applySandInferenceRequestContext`, `buildSandRequestLineageHeaders`, `createCursorChecksum`, `getSandBackendClientHeaders`, `headers.set`, `new Headers`, `options2.getMachineId`, `resolveGhostModeHeader`, `resolveSandBackendAuth`.

SHA-256 do trecho: `c71dea7660a62bed77d1b36515aff379c19d37b45c88c11b2e7c6444fa44fea7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

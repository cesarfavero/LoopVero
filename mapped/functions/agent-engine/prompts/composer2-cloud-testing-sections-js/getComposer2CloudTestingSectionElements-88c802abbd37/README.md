# `getComposer2CloudTestingSectionElements`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/composer2-cloud-testing-sections.js` · [README do módulo](../../../../../modules/agent-engine/prompts/composer2-cloud-testing-sections-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:638577-638602](../../../../../../reference/runtime/host-main.cjs#L638577-L638602) | `FunctionDeclaration` | não | `props, options2` |
| [evaluation:429170-429195](../../../../../../reference/runtime/sand-eval-runner.cjs#L429170-L429195) | `FunctionDeclaration` | não | `props, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:638577-638602](../../../../../../reference/runtime/host-main.cjs#L638577-L638602) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:429170-429195](../../../../../../reference/runtime/sand-eval-runner.cjs#L429170-L429195) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:638577

Chamadas escritas diretamente neste corpo: `GitOrNoRepositoryInstructions`, `context2.browserTools.find`, `getBrowserMcpProviderName`, `getComposer2CloudSectionContext`, `isSlackV1_5ThreadBoundSession`, `jsx`, `jsxs`, `ownerAllowsAgentMergeInPrompt`.

SHA-256 do trecho: `bda09567917af8f0747a636594f92777d256402f50bd993ef898e5965ff458c1`.

### evaluation:429170

Chamadas escritas diretamente neste corpo: `GitOrNoRepositoryInstructions`, `context2.browserTools.find`, `getBrowserMcpProviderName`, `getComposer2CloudSectionContext`, `isSlackV1_5ThreadBoundSession`, `jsx`, `jsxs`, `ownerAllowsAgentMergeInPrompt`.

SHA-256 do trecho: `bda09567917af8f0747a636594f92777d256402f50bd993ef898e5965ff458c1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

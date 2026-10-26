# `ownerAllowsAgentMergeInPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/cloud-agent.js` · [README do módulo](../../../../../modules/agent-engine/prompts/cloud-agent-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:636221-636223](../../../../../../reference/runtime/host-main.cjs#L636221-L636223) | `FunctionDeclaration` | não | `{ featureFlags, backgroundAgentSource }` |
| [evaluation:424277-424279](../../../../../../reference/runtime/sand-eval-runner.cjs#L424277-L424279) | `FunctionDeclaration` | não | `{ featureFlags, backgroundAgentSource }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636221-636223](../../../../../../reference/runtime/host-main.cjs#L636221-L636223) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:424277-424279](../../../../../../reference/runtime/sand-eval-runner.cjs#L424277-L424279) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:636221

Chamadas escritas diretamente neste corpo: `isEnvironmentSetupBackgroundComposerSource`.

SHA-256 do trecho: `3a8eec492b5068c67a0d3a63b6adce1498a5d78a725a383b4f7df63fdf54ea41`.

### evaluation:424277

Chamadas escritas diretamente neste corpo: `isEnvironmentSetupBackgroundComposerSource`.

SHA-256 do trecho: `3a8eec492b5068c67a0d3a63b6adce1498a5d78a725a383b4f7df63fdf54ea41`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

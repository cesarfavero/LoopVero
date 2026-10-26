# `GitInstructions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/cloud-agent.js` · [README do módulo](../../../../../modules/agent-engine/prompts/cloud-agent-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:636224-636236](../../../../../../reference/runtime/host-main.cjs#L636224-L636236) | `FunctionDeclaration` | não | `{ toolInfo, shouldShowTestingInstructions, suppressCreatedPrMention = false, startedAsNewProject = false, isSelfHostedMachine = false, ownerAllowsAgentMerge = false }` |
| [evaluation:424280-424292](../../../../../../reference/runtime/sand-eval-runner.cjs#L424280-L424292) | `FunctionDeclaration` | não | `{ toolInfo, shouldShowTestingInstructions, suppressCreatedPrMention = false, startedAsNewProject = false, isSelfHostedMachine = false, ownerAllowsAgentMerge = false }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636224-636236](../../../../../../reference/runtime/host-main.cjs#L636224-L636236) | 6 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:424280-424292](../../../../../../reference/runtime/sand-eval-runner.cjs#L424280-L424292) | 6 | 0 | 0 | 1 | 0 | 0 |

### host:636224

Chamadas escritas diretamente neste corpo: `jsx`, `jsxs`.

SHA-256 do trecho: `d1ce3321ea40a3c2bdc7185a41d4a1cd9a211034802af5af0ff80dddf8661cda`.

### evaluation:424280

Chamadas escritas diretamente neste corpo: `jsx`, `jsxs`.

SHA-256 do trecho: `d1ce3321ea40a3c2bdc7185a41d4a1cd9a211034802af5af0ff80dddf8661cda`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

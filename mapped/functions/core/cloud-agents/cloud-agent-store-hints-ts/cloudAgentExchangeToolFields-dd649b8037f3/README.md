# `cloudAgentExchangeToolFields`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/isolation/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-store-hints.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-store-hints-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:538088-538093](../../../../../../reference/runtime/host-main.cjs#L538088-L538093) | `FunctionDeclaration` | não | `host` |
| [evaluation:490197-490202](../../../../../../reference/runtime/sand-eval-runner.cjs#L490197-L490202) | `FunctionDeclaration` | não | `host` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538088-538093](../../../../../../reference/runtime/host-main.cjs#L538088-L538093) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:490197-490202](../../../../../../reference/runtime/sand-eval-runner.cjs#L490197-L490202) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:538088

Chamadas escritas diretamente neste corpo: `cloudAgentBotStoreMounted`, `host.gates.cloudAgentExchange`, `host.requestContext.resolve`.

SHA-256 do trecho: `b294e3f535bdfc68b39030f23907f00cbb78110220ff301942a2c28a12f557c0`.

### evaluation:490197

Chamadas escritas diretamente neste corpo: `cloudAgentBotStoreMounted`, `host.gates.cloudAgentExchange`, `host.requestContext.resolve`.

SHA-256 do trecho: `b294e3f535bdfc68b39030f23907f00cbb78110220ff301942a2c28a12f557c0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

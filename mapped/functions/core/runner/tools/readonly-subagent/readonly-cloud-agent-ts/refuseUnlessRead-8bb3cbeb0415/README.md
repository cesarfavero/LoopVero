# `refuseUnlessRead`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/readonly-subagent/readonly-cloud-agent.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/readonly-subagent/readonly-cloud-agent-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777791-777797](../../../../../../../../reference/runtime/host-main.cjs#L777791-L777797) | `FunctionDeclaration` | não | `action` |
| [evaluation:577486-577492](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L577486-L577492) | `FunctionDeclaration` | não | `action` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777791-777797](../../../../../../../../reference/runtime/host-main.cjs#L777791-L777797) | 2 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:577486-577492](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L577486-L577492) | 2 | 0 | 0 | 1 | 1 | 0 |

### host:777791

Chamadas escritas diretamente neste corpo: `CLOUD_AGENT_READ_ACTIONS.join`, `CLOUD_AGENT_READ_ACTIONS.some`, `new ToolCallUnexpectedEnvironmentError`.

Alvos de lançamento explícito: `ToolCallUnexpectedEnvironmentError`.

SHA-256 do trecho: `964e8fea5b868fed9696c4b2f68f3b0a763635c8efb2edab0ac6def206a09d3f`.

### evaluation:577486

Chamadas escritas diretamente neste corpo: `CLOUD_AGENT_READ_ACTIONS.join`, `CLOUD_AGENT_READ_ACTIONS.some`, `new ToolCallUnexpectedEnvironmentError`.

Alvos de lançamento explícito: `ToolCallUnexpectedEnvironmentError`.

SHA-256 do trecho: `964e8fea5b868fed9696c4b2f68f3b0a763635c8efb2edab0ac6def206a09d3f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).

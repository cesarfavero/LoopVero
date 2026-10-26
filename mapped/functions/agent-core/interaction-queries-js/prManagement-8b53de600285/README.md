# `prManagement`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-queries.js` · [README do módulo](../../../../modules/agent-core/interaction-queries-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475704-475712](../../../../../reference/runtime/host-main.cjs#L475704-L475712) | `FunctionExpression` | não | `queryId, result` |
| [evaluation:254928-254936](../../../../../reference/runtime/sand-eval-runner.cjs#L254928-L254936) | `FunctionExpression` | não | `queryId, result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475704-475712](../../../../../reference/runtime/host-main.cjs#L475704-L475712) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254928-254936](../../../../../reference/runtime/sand-eval-runner.cjs#L254928-L254936) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475704

Chamadas escritas diretamente neste corpo: `new InteractionResponse`.

SHA-256 do trecho: `6b1928ac4ae7d64b345dea4bb8d05590f8ee8d59985281d8e0b3b29e68ce81b8`.

### evaluation:254928

Chamadas escritas diretamente neste corpo: `new InteractionResponse`.

SHA-256 do trecho: `6b1928ac4ae7d64b345dea4bb8d05590f8ee8d59985281d8e0b3b29e68ce81b8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).

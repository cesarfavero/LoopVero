# `stepCompleted`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/redacted-interaction-updates.js` · [README do módulo](../../../../modules/agent-core/redacted-interaction-updates-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:615803-615815](../../../../../reference/runtime/host-main.cjs#L615803-L615815) | `FunctionExpression` | não | `privacyMode, stepId, stepDurationMs` |
| [evaluation:284523-284535](../../../../../reference/runtime/sand-eval-runner.cjs#L284523-L284535) | `FunctionExpression` | não | `privacyMode, stepId, stepDurationMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615803-615815](../../../../../reference/runtime/host-main.cjs#L615803-L615815) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284523-284535](../../../../../reference/runtime/sand-eval-runner.cjs#L284523-L284535) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:615803

Chamadas escritas diretamente neste corpo: `BigInt`.

SHA-256 do trecho: `e941e06bf60323048984f6a27c7d59f8fe712f4d593da1645b9c2a3130aac8dd`.

### evaluation:284523

Chamadas escritas diretamente neste corpo: `BigInt`.

SHA-256 do trecho: `e941e06bf60323048984f6a27c7d59f8fe712f4d593da1645b9c2a3130aac8dd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).

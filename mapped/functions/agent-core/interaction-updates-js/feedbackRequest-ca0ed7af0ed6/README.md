# `feedbackRequest`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-updates.js` · [README do módulo](../../../../modules/agent-core/interaction-updates-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476047-476062](../../../../../reference/runtime/host-main.cjs#L476047-L476062) | `FunctionExpression` | não | `requestId2, canonicalModelName, categories, categoryGroups = [], copy = {}` |
| [evaluation:255357-255372](../../../../../reference/runtime/sand-eval-runner.cjs#L255357-L255372) | `FunctionExpression` | não | `requestId, canonicalModelName, categories, categoryGroups = [], copy = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476047-476062](../../../../../reference/runtime/host-main.cjs#L476047-L476062) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255357-255372](../../../../../reference/runtime/sand-eval-runner.cjs#L255357-L255372) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:476047

Chamadas escritas diretamente neste corpo: `new FeedbackRequestUpdate`, `new InteractionUpdate`.

SHA-256 do trecho: `4537078d0c60e03ff19d70043a9a9f2e37e749e0b8fc84e4fcbc995db7396c7c`.

### evaluation:255357

Chamadas escritas diretamente neste corpo: `new FeedbackRequestUpdate`, `new InteractionUpdate`.

SHA-256 do trecho: `9d1227e0485f3fe69c506ac1ca5db058aa6e1d6bfa97e5daaf905f3c216c992f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).

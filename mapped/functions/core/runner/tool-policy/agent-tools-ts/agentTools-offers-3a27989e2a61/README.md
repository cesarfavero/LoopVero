# `agentTools/offers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tool-policy/agent-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tool-policy/agent-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:756582-756582](../../../../../../../reference/runtime/host-main.cjs#L756582-L756582) | `ArrowFunctionExpression` | não | `tool` |
| [evaluation:542502-542502](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542502-L542502) | `ArrowFunctionExpression` | não | `tool` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756582-756582](../../../../../../../reference/runtime/host-main.cjs#L756582-L756582) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:756582 usa retorno implícito de arrow function.
| [evaluation:542502-542502](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542502-L542502) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:542502 usa retorno implícito de arrow function.

### host:756582

Chamadas escritas diretamente neste corpo: `offered.has`.

SHA-256 do trecho: `cde097a489df2486253af0a17eebae57abbd5e5160a025785c32002448f04e4a`.

### evaluation:542502

Chamadas escritas diretamente neste corpo: `offered.has`.

SHA-256 do trecho: `cde097a489df2486253af0a17eebae57abbd5e5160a025785c32002448f04e4a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

# `gateMessagesOnGrants/probe`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/messages-grants-gate.ts` · [README do módulo](../../../../../../modules/core/runner/tools/messages-grants-gate-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777852-777852](../../../../../../../reference/runtime/host-main.cjs#L777852-L777852) | `ArrowFunctionExpression` | sim | `ctx, needed` |
| [evaluation:577587-577587](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577587-L577587) | `ArrowFunctionExpression` | sim | `ctx, needed` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777852-777852](../../../../../../../reference/runtime/host-main.cjs#L777852-L777852) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em host:777852 usa retorno implícito de arrow function.
| [evaluation:577587-577587](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577587-L577587) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em evaluation:577587 usa retorno implícito de arrow function.

### host:777852

Chamadas escritas diretamente neste corpo: `messages2.run`, `missingMessagesGrants`.

SHA-256 do trecho: `fe3e804ebff4b85d602a8a273dc43fbdad95b660680a8c5ea19c65951112a4f6`.

### evaluation:577587

Chamadas escritas diretamente neste corpo: `messages.run`, `missingMessagesGrants`.

SHA-256 do trecho: `df7ffe6a3804043d6c7968c8b7dc1f1d4c2e3931ac0a9fdcc303660a1f733bf6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

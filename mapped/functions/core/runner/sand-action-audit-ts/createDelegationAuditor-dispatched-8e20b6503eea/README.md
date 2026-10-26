# `createDelegationAuditor/dispatched`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-action-audit.ts` · [README do módulo](../../../../../modules/core/runner/sand-action-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:512289-512298](../../../../../../reference/runtime/sand-eval-runner.cjs#L512289-L512298) | `FunctionExpression` | não | `ctx, { toolCallId, ...dispatch }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512289-512298](../../../../../../reference/runtime/sand-eval-runner.cjs#L512289-L512298) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:512289

Chamadas escritas diretamente neste corpo: `auditor.record`, `delegationRecord`, `stopped.delete`.

SHA-256 do trecho: `3ef680f4f013e51867ed16fc48117d864f061ea8dbc478bb7944fb3c26b0b2d2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

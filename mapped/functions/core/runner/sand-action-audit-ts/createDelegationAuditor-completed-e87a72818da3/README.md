# `createDelegationAuditor/completed`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-action-audit.ts` · [README do módulo](../../../../../modules/core/runner/sand-action-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:512299-512311](../../../../../../reference/runtime/sand-eval-runner.cjs#L512299-L512311) | `FunctionExpression` | não | `ctx, { toolCallId, ...settled }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512299-512311](../../../../../../reference/runtime/sand-eval-runner.cjs#L512299-L512311) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:512299

Chamadas escritas diretamente neste corpo: `auditor.record`, `delegationRecord`, `stopped.add`, `stopped.has`.

SHA-256 do trecho: `cc2c12c87849748e29f839e125869788749d4bb31cbe90985b0c20b5f0cffd62`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

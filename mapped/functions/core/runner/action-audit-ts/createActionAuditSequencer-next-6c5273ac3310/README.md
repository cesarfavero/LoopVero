# `createActionAuditSequencer/next`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/action-audit.ts` · [README do módulo](../../../../../modules/core/runner/action-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:484742-484753](../../../../../../reference/runtime/sand-eval-runner.cjs#L484742-L484753) | `FunctionExpression` | não | `turnId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:484742-484753](../../../../../../reference/runtime/sand-eval-runner.cjs#L484742-L484753) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:484742

Chamadas escritas diretamente neste corpo: `.next`, `Math.max`, `nextByTurn.delete`, `nextByTurn.get`, `nextByTurn.keys`, `nextByTurn.set`.

Alvos de atribuição ou incremento: `highWater`.

SHA-256 do trecho: `5ec26ec8fc77a4bdeb12285162d626a82a0c2738af76ee48eb45645a0a354cd6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

# `createBackgroundWatches/watchBackgroundShell/cancel`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/background-work.ts` · [README do módulo](../../../../../modules/core/runner/background-work-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:490651-490655](../../../../../../reference/runtime/sand-eval-runner.cjs#L490651-L490655) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490651-490655](../../../../../../reference/runtime/sand-eval-runner.cjs#L490651-L490655) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:490651

Chamadas escritas diretamente neste corpo: `notifyShellWorkChanged`, `shellRewatches.delete`.

Alvos de atribuição ou incremento: `cancelled`.

SHA-256 do trecho: `ae8eba0e30e81ef398dd8599115009f8ff851575d14da3bd98ce5252544313d8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

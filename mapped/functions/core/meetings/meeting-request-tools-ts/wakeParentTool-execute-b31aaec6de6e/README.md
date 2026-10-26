# `wakeParentTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/meetings/meeting-request-tools.ts` · [README do módulo](../../../../../modules/core/meetings/meeting-request-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763444-763447](../../../../../../reference/runtime/host-main.cjs#L763444-L763447) | `ArrowFunctionExpression` | sim | `_ctx, args, d` |
| [evaluation:556409-556412](../../../../../../reference/runtime/sand-eval-runner.cjs#L556409-L556412) | `ArrowFunctionExpression` | sim | `_ctx, args, d` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763444-763447](../../../../../../reference/runtime/host-main.cjs#L763444-L763447) | 1 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:556409-556412](../../../../../../reference/runtime/sand-eval-runner.cjs#L556409-L556412) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:763444

Chamadas escritas diretamente neste corpo: `d.request.wakeParent`.

SHA-256 do trecho: `9bc783da54875c2da78b186174fdcffd2bde123c51e8c4fa104541e64b9533a7`.

### evaluation:556409

Chamadas escritas diretamente neste corpo: `d.request.wakeParent`.

SHA-256 do trecho: `9bc783da54875c2da78b186174fdcffd2bde123c51e8c4fa104541e64b9533a7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

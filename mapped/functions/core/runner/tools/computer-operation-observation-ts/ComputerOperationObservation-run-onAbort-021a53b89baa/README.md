# `ComputerOperationObservation.run/onAbort`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/computer-operation-observation.ts` · [README do módulo](../../../../../../modules/core/runner/tools/computer-operation-observation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:776317-776320](../../../../../../../reference/runtime/host-main.cjs#L776317-L776320) | `ArrowFunctionExpression` | não | `(nenhum)` |
| [evaluation:575971-575974](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575971-L575974) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776317-776320](../../../../../../../reference/runtime/host-main.cjs#L776317-L776320) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:575971-575974](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575971-L575974) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:776317

Chamadas escritas diretamente neste corpo: `isTimeout`, `this.fail`, `this.finish`.

SHA-256 do trecho: `180274bd6997c8a607c5fbdebca8b558356a3d7beb6651d28e57e11a7181f803`.

### evaluation:575971

Chamadas escritas diretamente neste corpo: `isTimeout`, `this.fail`, `this.finish`.

SHA-256 do trecho: `180274bd6997c8a607c5fbdebca8b558356a3d7beb6651d28e57e11a7181f803`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

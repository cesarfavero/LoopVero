# `ComputerOperationObservation.fail`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/computer-operation-observation.ts` · [README do módulo](../../../../../../modules/core/runner/tools/computer-operation-observation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:776235-776238](../../../../../../../reference/runtime/host-main.cjs#L776235-L776238) | `method` | não | `code` |
| [evaluation:575889-575892](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575889-L575892) | `method` | não | `code` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776235-776238](../../../../../../../reference/runtime/host-main.cjs#L776235-L776238) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:575889-575892](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575889-L575892) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:776235

Chamadas escritas diretamente neste corpo: `computerOperationOutcomeOf`.

Alvos de atribuição ou incremento: `this.code`, `this.outcome`.

SHA-256 do trecho: `3ffd66a102137d96f447f58d35d8d44b137f000a5aa014c10af3740d0bf727dc`.

### evaluation:575889

Chamadas escritas diretamente neste corpo: `computerOperationOutcomeOf`.

Alvos de atribuição ou incremento: `this.code`, `this.outcome`.

SHA-256 do trecho: `3ffd66a102137d96f447f58d35d8d44b137f000a5aa014c10af3740d0bf727dc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

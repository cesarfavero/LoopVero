# `ComputerOperationObservation.executorResult`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/computer-operation-observation.ts` · [README do módulo](../../../../../../modules/core/runner/tools/computer-operation-observation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:776239-776249](../../../../../../../reference/runtime/host-main.cjs#L776239-L776249) | `method` | não | `result` |
| [evaluation:575893-575903](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575893-L575903) | `method` | não | `result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776239-776249](../../../../../../../reference/runtime/host-main.cjs#L776239-L776249) | 3 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:575893-575903](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575893-L575903) | 3 | 0 | 0 | 0 | 0 | 0 |

### host:776239

Chamadas escritas diretamente neste corpo: `this.fail`.

Alvos de atribuição ou incremento: `this.stage`.

SHA-256 do trecho: `acd938b6a1ff348398388cccc9d865a8e9dfc4ea5d6642c14f625a7e37938357`.

### evaluation:575893

Chamadas escritas diretamente neste corpo: `this.fail`.

Alvos de atribuição ou incremento: `this.stage`.

SHA-256 do trecho: `acd938b6a1ff348398388cccc9d865a8e9dfc4ea5d6642c14f625a7e37938357`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

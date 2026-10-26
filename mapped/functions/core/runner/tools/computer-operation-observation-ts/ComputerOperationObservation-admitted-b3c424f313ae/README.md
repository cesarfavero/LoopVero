# `ComputerOperationObservation.admitted`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/computer-operation-observation.ts` · [README do módulo](../../../../../../modules/core/runner/tools/computer-operation-observation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:776224-776234](../../../../../../../reference/runtime/host-main.cjs#L776224-L776234) | `method` | não | `actions2` |
| [evaluation:575878-575888](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575878-L575888) | `method` | não | `actions2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776224-776234](../../../../../../../reference/runtime/host-main.cjs#L776224-L776234) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:575878-575888](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575878-L575888) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:776224

Chamadas escritas diretamente neste corpo: `actions2.reduce`, `this.options.span.setAttributes`.

Alvos de atribuição ou incremento: `this.action`, `this.actionMask`, `this.batchLength`, `this.stage`.

SHA-256 do trecho: `09d55889228b24b967fa30cd2a83aed3d2452c2b51dda68f3d22bd2a42e90b15`.

### evaluation:575878

Chamadas escritas diretamente neste corpo: `actions2.reduce`, `this.options.span.setAttributes`.

Alvos de atribuição ou incremento: `this.action`, `this.actionMask`, `this.batchLength`, `this.stage`.

SHA-256 do trecho: `09d55889228b24b967fa30cd2a83aed3d2452c2b51dda68f3d22bd2a42e90b15`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

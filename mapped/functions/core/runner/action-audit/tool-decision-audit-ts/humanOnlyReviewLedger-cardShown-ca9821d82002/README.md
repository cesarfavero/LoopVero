# `humanOnlyReviewLedger/cardShown`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/action-audit/tool-decision-audit.ts` · [README do módulo](../../../../../../modules/core/runner/action-audit/tool-decision-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699208-699209](../../../../../../../reference/runtime/host-main.cjs#L699208-L699209) | `ArrowFunctionExpression` | não | `(nenhum)` |
| [host:699216-699219](../../../../../../../reference/runtime/host-main.cjs#L699216-L699219) | `ArrowFunctionExpression` | não | `(nenhum)` |
| [evaluation:489940-489941](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489940-L489941) | `ArrowFunctionExpression` | não | `(nenhum)` |
| [evaluation:489948-489951](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489948-L489951) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699208-699209](../../../../../../../reference/runtime/host-main.cjs#L699208-L699209) | 0 | 0 | 0 | 0 | 0 | 0 |
| [host:699216-699219](../../../../../../../reference/runtime/host-main.cjs#L699216-L699219) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:489940-489941](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489940-L489941) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:489948-489951](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489948-L489951) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:699208

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `d8c7ff76b38a6ba1f0dfd0cae507faf3b110de37901ad7d18c725ff3358b6176`.

### host:699216

Chamadas escritas diretamente neste corpo: `audit.askAPerson`.

Alvos de atribuição ou incremento: `askedAPerson`.

SHA-256 do trecho: `1412d1d11324b997991693104f46b9077bac67d640db22c06f4b2727003e819a`.

### evaluation:489940

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `d8c7ff76b38a6ba1f0dfd0cae507faf3b110de37901ad7d18c725ff3358b6176`.

### evaluation:489948

Chamadas escritas diretamente neste corpo: `audit.askAPerson`.

Alvos de atribuição ou incremento: `askedAPerson`.

SHA-256 do trecho: `1412d1d11324b997991693104f46b9077bac67d640db22c06f4b2727003e819a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

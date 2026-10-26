# `sandBrowserDriverBoxPath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-driver-source.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-driver-source-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:698987-698990](../../../../../../../reference/runtime/host-main.cjs#L698987-L698990) | `FunctionDeclaration` | não | `source` |
| [evaluation:489548-489551](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489548-L489551) | `FunctionDeclaration` | não | `source` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:698987-698990](../../../../../../../reference/runtime/host-main.cjs#L698987-L698990) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:489548-489551](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489548-L489551) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:698987

Chamadas escritas diretamente neste corpo: `.digest`, `.slice`, `.update`.

SHA-256 do trecho: `dcd64efa1bb7a3367e77e9b9c777a953996a171a7c1f08ebfcce20886178ba51`.

### evaluation:489548

Chamadas escritas diretamente neste corpo: `.digest`, `.slice`, `.update`.

SHA-256 do trecho: `4004fdc10a792a96da30d367526ea5dc6ebdd16f5b574a0d14d63763b8684208`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

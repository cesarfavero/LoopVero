# `sourceSchema`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-connected-activity-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-connected-activity-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763685-763691](../../../../../../../reference/runtime/host-main.cjs#L763685-L763691) | `FunctionDeclaration` | não | `sources` |
| [evaluation:556733-556739](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556733-L556739) | `FunctionDeclaration` | não | `sources` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763685-763691](../../../../../../../reference/runtime/host-main.cjs#L763685-L763691) | 1 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:556733-556739](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556733-L556739) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:763685

Chamadas escritas diretamente neste corpo: `external_exports2.enum`, `new Error`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `a740af041741372ecf00ab4411658a51091eceaa9f05fb7a6988a42a110bab7a`.

### evaluation:556733

Chamadas escritas diretamente neste corpo: `external_exports3.enum`, `new Error`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `de515ae469a08cf1b3166f6fd81249f411c97df4fffff59afbaf214932154433`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

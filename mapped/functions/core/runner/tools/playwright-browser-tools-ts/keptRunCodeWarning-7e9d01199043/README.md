# `keptRunCodeWarning`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/playwright-browser-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750886-750892](../../../../../../../reference/runtime/host-main.cjs#L750886-L750892) | `FunctionDeclaration` | não | `before` |
| [evaluation:523737-523743](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523737-L523743) | `FunctionDeclaration` | não | `before` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750886-750892](../../../../../../../reference/runtime/host-main.cjs#L750886-L750892) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:523737-523743](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523737-L523743) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:750886

Chamadas escritas diretamente neste corpo: `successOf`, `text3.includes`, `textOf`.

SHA-256 do trecho: `5e2736f932c34fe37ce3507d8c58f2966950627b0c5ffea7bcb763ad72b4d1ad`.

### evaluation:523737

Chamadas escritas diretamente neste corpo: `successOf`, `text3.includes`, `textOf2`.

SHA-256 do trecho: `5d40fe599aafb9dfae9117a2aad0cdebecad8c8b165cb865a8d394beff0cc881`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

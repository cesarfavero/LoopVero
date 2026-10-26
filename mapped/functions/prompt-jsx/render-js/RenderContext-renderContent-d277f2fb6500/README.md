# `RenderContext.renderContent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/prompts/README.md).

**Módulo:** `prompt-jsx/render.js` · [README do módulo](../../../../modules/prompt-jsx/render-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:629095-629106](../../../../../reference/runtime/host-main.cjs#L629095-L629106) | `method` | não | `children` |
| [evaluation:318112-318123](../../../../../reference/runtime/sand-eval-runner.cjs#L318112-L318123) | `method` | não | `children` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:629095-629106](../../../../../reference/runtime/host-main.cjs#L629095-L629106) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:318112-318123](../../../../../reference/runtime/sand-eval-runner.cjs#L318112-L318123) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:629095

Chamadas escritas diretamente neste corpo: `Array.isArray`, `String`, `this.renderContentNode`, `this.renderParagraphAwareContent`.

SHA-256 do trecho: `e41a3e1baf05cdad6090858af8bc6e70223224add4479a60c684c57bbe0bfba0`.

### evaluation:318112

Chamadas escritas diretamente neste corpo: `Array.isArray`, `String`, `this.renderContentNode`, `this.renderParagraphAwareContent`.

SHA-256 do trecho: `e41a3e1baf05cdad6090858af8bc6e70223224add4479a60c684c57bbe0bfba0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).

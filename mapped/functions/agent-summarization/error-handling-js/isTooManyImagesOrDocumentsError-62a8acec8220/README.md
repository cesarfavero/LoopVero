# `isTooManyImagesOrDocumentsError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/error-handling.js` · [README do módulo](../../../../modules/agent-summarization/error-handling-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620198-620200](../../../../../reference/runtime/host-main.cjs#L620198-L620200) | `FunctionDeclaration` | não | `error64` |
| [evaluation:304552-304554](../../../../../reference/runtime/sand-eval-runner.cjs#L304552-L304554) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620198-620200](../../../../../reference/runtime/host-main.cjs#L620198-L620200) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304552-304554](../../../../../reference/runtime/sand-eval-runner.cjs#L304552-L304554) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:620198

Chamadas escritas diretamente neste corpo: `TOO_MANY_IMAGES_OR_DOCUMENTS_MESSAGE_MARKERS.some`.

SHA-256 do trecho: `402b194f4a77fe26214bab14bbf6e25fea4519c53aa812e25544fbc33ae02dd5`.

### evaluation:304552

Chamadas escritas diretamente neste corpo: `TOO_MANY_IMAGES_OR_DOCUMENTS_MESSAGE_MARKERS.some`.

SHA-256 do trecho: `c654a52202e7c8d15b8689df49939dcb436c1dfd9e91a3aaf62ca33736272b56`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).

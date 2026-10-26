# `renderTranscript`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/durable-blocks.js` · [README do módulo](../../../../modules/agent-summarization/durable-blocks-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:619957-619971](../../../../../reference/runtime/host-main.cjs#L619957-L619971) | `FunctionDeclaration` | não | `enrichments, context2, useXml` |
| [evaluation:304311-304325](../../../../../reference/runtime/sand-eval-runner.cjs#L304311-L304325) | `FunctionDeclaration` | não | `enrichments, context2, useXml` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:619957-619971](../../../../../reference/runtime/host-main.cjs#L619957-L619971) | 5 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:304311-304325](../../../../../reference/runtime/sand-eval-runner.cjs#L304311-L304325) | 5 | 0 | 0 | 3 | 0 | 0 |

### host:619957

Chamadas escritas diretamente neste corpo: `formatCloudTranscriptFetch`, `formatTranscriptLocation`, `section.slice`, `section.startsWith`.

SHA-256 do trecho: `5ae00b8d912152c99d62a5999f3b93087a769ac9f665beba19f2d4175382201b`.

### evaluation:304311

Chamadas escritas diretamente neste corpo: `formatCloudTranscriptFetch`, `formatTranscriptLocation`, `section.slice`, `section.startsWith`.

SHA-256 do trecho: `5ae00b8d912152c99d62a5999f3b93087a769ac9f665beba19f2d4175382201b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).

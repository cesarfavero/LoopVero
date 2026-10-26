# `formatTranscriptLocation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/transcripts/README.md).

**Módulo:** `agent-summarization/transcript-location.js` · [README do módulo](../../../../modules/agent-summarization/transcript-location-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:619822-619824](../../../../../reference/runtime/host-main.cjs#L619822-L619824) | `FunctionDeclaration` | não | `agentTranscriptsFolder, options2` |
| [evaluation:304176-304178](../../../../../reference/runtime/sand-eval-runner.cjs#L304176-L304178) | `FunctionDeclaration` | não | `agentTranscriptsFolder, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:619822-619824](../../../../../reference/runtime/host-main.cjs#L619822-L619824) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304176-304178](../../../../../reference/runtime/sand-eval-runner.cjs#L304176-L304178) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:619822

Chamadas escritas diretamente neste corpo: `formatTranscriptLocationMarkdownSection`, `ownTranscriptRelativePath`, `wrapTranscriptSection`.

SHA-256 do trecho: `fd9fa340a9482d08a5f82f92cb68917f2a0fe2e57db427162689e362fbc92df1`.

### evaluation:304176

Chamadas escritas diretamente neste corpo: `formatTranscriptLocationMarkdownSection`, `ownTranscriptRelativePath`, `wrapTranscriptSection`.

SHA-256 do trecho: `fd9fa340a9482d08a5f82f92cb68917f2a0fe2e57db427162689e362fbc92df1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).

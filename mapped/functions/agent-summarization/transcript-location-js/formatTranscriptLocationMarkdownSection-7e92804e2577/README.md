# `formatTranscriptLocationMarkdownSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/transcripts/README.md).

**Módulo:** `agent-summarization/transcript-location.js` · [README do módulo](../../../../modules/agent-summarization/transcript-location-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:619871-619893](../../../../../reference/runtime/host-main.cjs#L619871-L619893) | `FunctionDeclaration` | não | `agentTranscriptsFolder, transcriptRelativePath` |
| [evaluation:304225-304247](../../../../../reference/runtime/sand-eval-runner.cjs#L304225-L304247) | `FunctionDeclaration` | não | `agentTranscriptsFolder, transcriptRelativePath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:619871-619893](../../../../../reference/runtime/host-main.cjs#L619871-L619893) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:304225-304247](../../../../../reference/runtime/sand-eval-runner.cjs#L304225-L304247) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:619871

Chamadas escritas diretamente neste corpo: `stripTranscriptsDirPrefix`.

SHA-256 do trecho: `b03b04af194534b95d109ccd5a7cd5c8a7759aa22f760dbaad18844e03625b2a`.

### evaluation:304225

Chamadas escritas diretamente neste corpo: `stripTranscriptsDirPrefix`.

SHA-256 do trecho: `ab435c23acb0803db6a73491abca38824f12f0f81c6376d3a7369ab0c4ab2056`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).

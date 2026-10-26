# `wrapTranscriptSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/transcripts/README.md).

**Módulo:** `agent-summarization/transcript-location.js` · [README do módulo](../../../../modules/agent-summarization/transcript-location-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:619840-619850](../../../../../reference/runtime/host-main.cjs#L619840-L619850) | `FunctionDeclaration` | não | `markdownSection, useXml` |
| [evaluation:304194-304204](../../../../../reference/runtime/sand-eval-runner.cjs#L304194-L304204) | `FunctionDeclaration` | não | `markdownSection, useXml` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:619840-619850](../../../../../reference/runtime/host-main.cjs#L619840-L619850) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:304194-304204](../../../../../reference/runtime/sand-eval-runner.cjs#L304194-L304204) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:619840

Chamadas escritas diretamente neste corpo: `.replace`, `.trimEnd`, `markdownSection.replace`.

SHA-256 do trecho: `6448e23464fc26f3d8422e04b41d5b7ddab2c377acd74e711af26b07c128a2cf`.

### evaluation:304194

Chamadas escritas diretamente neste corpo: `.replace`, `.trimEnd`, `markdownSection.replace`.

SHA-256 do trecho: `6448e23464fc26f3d8422e04b41d5b7ddab2c377acd74e711af26b07c128a2cf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).

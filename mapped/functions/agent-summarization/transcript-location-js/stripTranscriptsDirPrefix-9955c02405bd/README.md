# `stripTranscriptsDirPrefix`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/transcripts/README.md).

**Módulo:** `agent-summarization/transcript-location.js` · [README do módulo](../../../../modules/agent-summarization/transcript-location-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:619894-619897](../../../../../reference/runtime/host-main.cjs#L619894-L619897) | `FunctionDeclaration` | não | `relativePath` |
| [evaluation:304248-304251](../../../../../reference/runtime/sand-eval-runner.cjs#L304248-L304251) | `FunctionDeclaration` | não | `relativePath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:619894-619897](../../../../../reference/runtime/host-main.cjs#L619894-L619897) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304248-304251](../../../../../reference/runtime/sand-eval-runner.cjs#L304248-L304251) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:619894

Chamadas escritas diretamente neste corpo: `relativePath.slice`, `relativePath.startsWith`.

SHA-256 do trecho: `15d04b536a94dd4b0aa731570bff847a436f9ad88249d438408a08836a8c7d77`.

### evaluation:304248

Chamadas escritas diretamente neste corpo: `relativePath.slice`, `relativePath.startsWith`.

SHA-256 do trecho: `15d04b536a94dd4b0aa731570bff847a436f9ad88249d438408a08836a8c7d77`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).

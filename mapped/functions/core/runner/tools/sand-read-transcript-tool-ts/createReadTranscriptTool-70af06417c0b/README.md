# `createReadTranscriptTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/runner/tools/sand-read-transcript-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-read-transcript-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:766425-766458](../../../../../../../reference/runtime/host-main.cjs#L766425-L766458) | `FunctionDeclaration` | não | `deps` |
| [evaluation:559789-559822](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559789-L559822) | `FunctionDeclaration` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766425-766458](../../../../../../../reference/runtime/host-main.cjs#L766425-L766458) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:559789-559822](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559789-L559822) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:766425

Chamadas escritas diretamente neste corpo: `defineZod4CommunicateTool`, `offersTranscriptSearch`, `readParameters2.extend`, `readTranscriptDescription`, `readTranscriptParameters`.

SHA-256 do trecho: `539457bfc7d9f404534b131487d56cb1e332f93aa8681520431b32d11889202d`.

### evaluation:559789

Chamadas escritas diretamente neste corpo: `defineZod4CommunicateTool`, `offersTranscriptSearch`, `readParameters2.extend`, `readTranscriptDescription`, `readTranscriptParameters`.

SHA-256 do trecho: `539457bfc7d9f404534b131487d56cb1e332f93aa8681520431b32d11889202d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

# `renderAroundRead`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/runner/tools/sand-read-transcript-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-read-transcript-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:766372-766384](../../../../../../../reference/runtime/host-main.cjs#L766372-L766384) | `FunctionDeclaration` | não | `read2, window2` |
| [evaluation:559736-559748](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559736-L559748) | `FunctionDeclaration` | não | `read2, window2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766372-766384](../../../../../../../reference/runtime/host-main.cjs#L766372-L766384) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:559736-559748](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559736-L559748) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:766372

Chamadas escritas diretamente neste corpo: `.join`, `transcriptAroundEndingBefore`.

SHA-256 do trecho: `e7825818e39082f3ee1cca17c9e1b999ce7e59ceb939aaa24e8c70d3a1b891a5`.

### evaluation:559736

Chamadas escritas diretamente neste corpo: `.join`, `transcriptAroundEndingBefore`.

SHA-256 do trecho: `e7825818e39082f3ee1cca17c9e1b999ce7e59ceb939aaa24e8c70d3a1b891a5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

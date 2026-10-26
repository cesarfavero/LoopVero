# `searchTranscripts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/runner/tools/transcript-search/transcript-search-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/transcript-search/transcript-search-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:771377-771390](../../../../../../../../reference/runtime/host-main.cjs#L771377-L771390) | `FunctionDeclaration` | sim | `ctx, search, args` |
| [evaluation:570611-570624](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570611-L570624) | `FunctionDeclaration` | sim | `ctx, search, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771377-771390](../../../../../../../../reference/runtime/host-main.cjs#L771377-L771390) | 1 | 0 | 2 | 2 | 0 | 0 |
| [evaluation:570611-570624](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570611-L570624) | 1 | 0 | 2 | 2 | 0 | 0 |

### host:771377

Chamadas escritas diretamente neste corpo: `Math.min`, `args.query.trim`, `loaded.search`, `renderTranscriptSearch`, `search.load`.

SHA-256 do trecho: `82618a0c8cfc88a6b484f40c9551d3950d4b72df30ae00f39eeb18c174a0a3a7`.

### evaluation:570611

Chamadas escritas diretamente neste corpo: `Math.min`, `args.query.trim`, `loaded.search`, `renderTranscriptSearch`, `search.load`.

SHA-256 do trecho: `82618a0c8cfc88a6b484f40c9551d3950d4b72df30ae00f39eeb18c174a0a3a7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).

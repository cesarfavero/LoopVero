# `createTranscriptsVirtualMount/searchReadable`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/virtual-mounts/transcripts.ts` · [README do módulo](../../../../../modules/core/virtual-mounts/transcripts-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:766193-766211](../../../../../../reference/runtime/host-main.cjs#L766193-L766211) | `FunctionDeclaration` | sim | `ctx, request5` |
| [evaluation:559557-559575](../../../../../../reference/runtime/sand-eval-runner.cjs#L559557-L559575) | `FunctionDeclaration` | sim | `ctx, request3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766193-766211](../../../../../../reference/runtime/host-main.cjs#L766193-L766211) | 2 | 0 | 1 | 3 | 0 | 0 |
| [evaluation:559557-559575](../../../../../../reference/runtime/sand-eval-runner.cjs#L559557-L559575) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:766193

Chamadas escritas diretamente neste corpo: `outcome.hits.map`, `reader.searchReadableTranscripts`, `refused2`.

SHA-256 do trecho: `e383ebc24f52bb976c24988b10cf38e4f9625a5169dd8df396831796556cbd3d`.

### evaluation:559557

Chamadas escritas diretamente neste corpo: `outcome.hits.map`, `reader.searchReadableTranscripts`, `refused`.

SHA-256 do trecho: `1ae4f7f710b1bb948ee17766dce9bb4dfde1d26b1212a34e8933aa100cf3aecf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

# `createLocalBrainDocsFs/statIfPresent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/brain-docs/local-brain-docs-fs.ts` · [README do módulo](../../../../../modules/core/brain-docs/local-brain-docs-fs-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:784721-784728](../../../../../../reference/runtime/host-main.cjs#L784721-L784728) | `FunctionDeclaration` | sim | `path33` |
| [evaluation:630118-630125](../../../../../../reference/runtime/sand-eval-runner.cjs#L630118-L630125) | `FunctionDeclaration` | sim | `path33` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784721-784728](../../../../../../reference/runtime/host-main.cjs#L784721-L784728) | 1 | 0 | 1 | 2 | 1 | 1 |
| [evaluation:630118-630125](../../../../../../reference/runtime/sand-eval-runner.cjs#L630118-L630125) | 1 | 0 | 1 | 2 | 1 | 1 |

### host:784721

Chamadas escritas diretamente neste corpo: `findSystemErrno`, `io2.stat`, `isMissingPath2`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `a91af046cffd0354f0bb9d283189995594d5754141c9e2c6c7485c3d20baded8`.

### evaluation:630118

Chamadas escritas diretamente neste corpo: `findSystemErrno`, `io2.stat`, `isMissingPath`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `a25890edf7859b40372472b5d4c17d5a79737bd9104e28a785a201fd9298f125`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

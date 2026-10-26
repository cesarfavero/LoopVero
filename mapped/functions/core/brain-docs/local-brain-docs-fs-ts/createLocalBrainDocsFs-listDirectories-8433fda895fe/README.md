# `createLocalBrainDocsFs/listDirectories`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/brain-docs/local-brain-docs-fs.ts` · [README do módulo](../../../../../modules/core/brain-docs/local-brain-docs-fs-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:784781-784788](../../../../../../reference/runtime/host-main.cjs#L784781-L784788) | `FunctionExpression` | sim | `path33` |
| [evaluation:630178-630185](../../../../../../reference/runtime/sand-eval-runner.cjs#L630178-L630185) | `FunctionExpression` | sim | `path33` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784781-784788](../../../../../../reference/runtime/host-main.cjs#L784781-L784788) | 1 | 0 | 1 | 2 | 1 | 1 |
| [evaluation:630178-630185](../../../../../../reference/runtime/sand-eval-runner.cjs#L630178-L630185) | 1 | 0 | 1 | 2 | 1 | 1 |

### host:784781

Chamadas escritas diretamente neste corpo: `.filter`, `.map`, `.sort`, `findSystemErrno`, `io2.readdir`, `isMissingPath2`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `14dbd338ac8efc52f22a9ed5252be9c5cab57bcdf2d9337224a2b0e1c6bd4ffe`.

### evaluation:630178

Chamadas escritas diretamente neste corpo: `.filter`, `.map`, `.sort`, `findSystemErrno`, `io2.readdir`, `isMissingPath`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `40c38be29a0048606bafd4753b3ea5aaf546c1bc11bfb03d909d4650c71c5223`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

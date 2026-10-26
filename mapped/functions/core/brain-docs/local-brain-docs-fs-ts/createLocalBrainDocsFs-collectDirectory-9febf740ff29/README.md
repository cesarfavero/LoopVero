# `createLocalBrainDocsFs/collectDirectory`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/brain-docs/local-brain-docs-fs.ts` · [README do módulo](../../../../../modules/core/brain-docs/local-brain-docs-fs-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:784739-784752](../../../../../../reference/runtime/host-main.cjs#L784739-L784752) | `FunctionDeclaration` | sim | `dir, out` |
| [evaluation:630136-630149](../../../../../../reference/runtime/sand-eval-runner.cjs#L630136-L630149) | `FunctionDeclaration` | sim | `dir, out` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784739-784752](../../../../../../reference/runtime/host-main.cjs#L784739-L784752) | 3 | 1 | 3 | 1 | 1 | 1 |
| [evaluation:630136-630149](../../../../../../reference/runtime/sand-eval-runner.cjs#L630136-L630149) | 3 | 1 | 3 | 1 | 1 | 1 |

### host:784739

Chamadas escritas diretamente neste corpo: `collectDirectory`, `collectFile`, `entry.isDirectory`, `entry.isFile`, `findSystemErrno`, `io2.readdir`, `isMissingPath2`.

Alvos de atribuição ou incremento: `entries`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `977194757f0264ae14ee275d8ea126d5c0aae33c877e296a65e323a0c2c5c204`.

### evaluation:630136

Chamadas escritas diretamente neste corpo: `collectDirectory`, `collectFile`, `entry.isDirectory`, `entry.isFile`, `findSystemErrno`, `io2.readdir`, `isMissingPath`.

Alvos de atribuição ou incremento: `entries`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `f3d45616fe29bab99db33f8ffb8795b82248e41136aaa51363efbbfab23ad881`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

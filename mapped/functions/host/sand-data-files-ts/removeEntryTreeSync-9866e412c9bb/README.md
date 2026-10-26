# `removeEntryTreeSync`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-data-files.ts` · [README do módulo](../../../../modules/host/sand-data-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453985-454009](../../../../../reference/runtime/host-main.cjs#L453985-L454009) | `FunctionDeclaration` | não | `parentFd, logicalPath, name18` |
| [evaluation:627585-627609](../../../../../reference/runtime/sand-eval-runner.cjs#L627585-L627609) | `FunctionDeclaration` | não | `parentFd, logicalPath, name18` |
| [state-worker:586-610](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L586-L610) | `FunctionDeclaration` | não | `parentFd, logicalPath, name` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453985-454009](../../../../../reference/runtime/host-main.cjs#L453985-L454009) | 3 | 1 | 0 | 2 | 2 | 2 |
| [evaluation:627585-627609](../../../../../reference/runtime/sand-eval-runner.cjs#L627585-L627609) | 3 | 1 | 0 | 2 | 2 | 2 |
| [state-worker:586-610](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L586-L610) | 3 | 1 | 0 | 2 | 2 | 2 |

### host:453985

Chamadas escritas diretamente neste corpo: `descriptorDirOf`, `entryOf2`, `findSystemErrno`, `removeEntryTreeSync`, `unlinkIgnoringMissing`.

Alvos de atribuição ou incremento: `fd`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `84e79c565ad753d2cc9fd81997289fef839df0c2674041d539d19287bc8d708b`.

### evaluation:627585

Chamadas escritas diretamente neste corpo: `descriptorDirOf`, `entryOf`, `findSystemErrno`, `removeEntryTreeSync`, `unlinkIgnoringMissing`.

Alvos de atribuição ou incremento: `fd`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `c0b4904148627c4e16f57b34206cee02e72f01b73a3eeca6ff234c57f5953c3f`.

### state-worker:586

Chamadas escritas diretamente neste corpo: `descriptorDirOf`, `entryOf`, `findSystemErrno`, `removeEntryTreeSync`, `unlinkIgnoringMissing`.

Alvos de atribuição ou incremento: `fd`.

Alvos de lançamento explícito: `error`.

SHA-256 do trecho: `0c22f83d881415c9ff95793c5ba5295dc8afb4770c5f97a02ec0694a5dffc612`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).

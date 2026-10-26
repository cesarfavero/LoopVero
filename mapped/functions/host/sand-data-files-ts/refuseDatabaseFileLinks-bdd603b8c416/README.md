# `refuseDatabaseFileLinks`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-data-files.ts` · [README do módulo](../../../../modules/host/sand-data-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453864-453872](../../../../../reference/runtime/host-main.cjs#L453864-L453872) | `FunctionDeclaration` | não | `parentFd, path33` |
| [state-worker:517-525](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L517-L525) | `FunctionDeclaration` | não | `parentFd, path` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453864-453872](../../../../../reference/runtime/host-main.cjs#L453864-L453872) | 1 | 1 | 0 | 0 | 1 | 0 |
| [state-worker:517-525](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L517-L525) | 1 | 1 | 0 | 0 | 1 | 0 |

### host:453864

Chamadas escritas diretamente neste corpo: `.isSymbolicLink`, `entryOf2`, `new NoFollowRefusedError`.

Alvos de lançamento explícito: `NoFollowRefusedError`.

SHA-256 do trecho: `2d7adecf133cf7215ec007c671e4cce882e2cf993eb8d21bf9991b0f0aa693ed`.

### state-worker:517

Chamadas escritas diretamente neste corpo: `.isSymbolicLink`, `entryOf`, `new NoFollowRefusedError`.

Alvos de lançamento explícito: `NoFollowRefusedError`.

SHA-256 do trecho: `135ecf4bf2028e61a5c7759ba89c2565729ccb819817ba9a63224664e65e5acd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).

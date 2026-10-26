# `keptModeOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-data-files.ts` · [README do módulo](../../../../modules/host/sand-data-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:454057-454059](../../../../../reference/runtime/host-main.cjs#L454057-L454059) | `FunctionDeclaration` | não | `info2` |
| [evaluation:627649-627651](../../../../../reference/runtime/sand-eval-runner.cjs#L627649-L627651) | `FunctionDeclaration` | não | `info2` |
| [state-worker:650-652](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L650-L652) | `FunctionDeclaration` | não | `info` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454057-454059](../../../../../reference/runtime/host-main.cjs#L454057-L454059) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:627649-627651](../../../../../reference/runtime/sand-eval-runner.cjs#L627649-L627651) | 1 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:650-652](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L650-L652) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:454057

Chamadas escritas diretamente neste corpo: `info2.isFile`, `isHostOwned`, `process.umask`.

SHA-256 do trecho: `8081d379a28e781a37ed803436dbafa1f720fa8bc46a5240ba88440dd389e42c`.

### evaluation:627649

Chamadas escritas diretamente neste corpo: `info2.isFile`, `isHostOwned`, `process.umask`.

SHA-256 do trecho: `8081d379a28e781a37ed803436dbafa1f720fa8bc46a5240ba88440dd389e42c`.

### state-worker:650

Chamadas escritas diretamente neste corpo: `info.isFile`, `isHostOwned`, `process.umask`.

SHA-256 do trecho: `8aae794ac97b43fd70cd5f8b7f5c39ba6bee362e5d9e6e6776eb2d3be6d0396c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).

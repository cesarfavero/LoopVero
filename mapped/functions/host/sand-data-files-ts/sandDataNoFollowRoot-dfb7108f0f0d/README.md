# `sandDataNoFollowRoot`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-data-files.ts` · [README do módulo](../../../../modules/host/sand-data-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:454035-454037](../../../../../reference/runtime/host-main.cjs#L454035-L454037) | `FunctionDeclaration` | não | `path33` |
| [evaluation:627635-627637](../../../../../reference/runtime/sand-eval-runner.cjs#L627635-L627637) | `FunctionDeclaration` | não | `path33` |
| [state-worker:636-638](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L636-L638) | `FunctionDeclaration` | não | `path` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454035-454037](../../../../../reference/runtime/host-main.cjs#L454035-L454037) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:627635-627637](../../../../../reference/runtime/sand-eval-runner.cjs#L627635-L627637) | 1 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:636-638](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L636-L638) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:454035

Chamadas escritas diretamente neste corpo: `hostNoFollowRoot`, `isSandDataPath`, `sandDataAnchor`.

SHA-256 do trecho: `d6eb86670b650973c5b0c764258e6d5906e5df0313d62a7902c95b91360f694d`.

### evaluation:627635

Chamadas escritas diretamente neste corpo: `hostNoFollowRoot`, `isSandDataPath`, `sandDataAnchor`.

SHA-256 do trecho: `2fecda2057e7569eae4b6ac174074735dbea8af32d7de47a6a212bf9027cd0f6`.

### state-worker:636

Chamadas escritas diretamente neste corpo: `hostNoFollowRoot`, `isSandDataPath`, `sandDataAnchor`.

SHA-256 do trecho: `8731c56a631bc1e8c6ec6d9946308e5ce225ea833af23b7dbd7f410fd9f4c12f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).

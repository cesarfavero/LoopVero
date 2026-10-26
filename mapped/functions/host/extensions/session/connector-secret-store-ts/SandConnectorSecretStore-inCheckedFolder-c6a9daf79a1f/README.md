# `SandConnectorSecretStore.inCheckedFolder`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/connector-secret-store.ts` · [README do módulo](../../../../../../modules/host/extensions/session/connector-secret-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:719171-719204](../../../../../../../reference/runtime/host-main.cjs#L719171-L719204) | `method` | não | `path33, act` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719171-719204](../../../../../../../reference/runtime/host-main.cjs#L719171-L719204) | 4 | 2 | 0 | 3 | 2 | 1 |

### host:719171

Chamadas escritas diretamente neste corpo: `.filter`, `.isSymbolicLink`, `.split`, `act`, `isMissingPathError`, `new NoFollowRefusedError`, `openFolderNoFollow`.

Alvos de atribuição ou incremento: `fd`, `folder`, `shown`.

Alvos de lançamento explícito: `NoFollowRefusedError`, `error64`.

SHA-256 do trecho: `e15bb3c788b13e57812d5cb3c96bb1ca5bf1a150fb8b40a58bef78cc7199142a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

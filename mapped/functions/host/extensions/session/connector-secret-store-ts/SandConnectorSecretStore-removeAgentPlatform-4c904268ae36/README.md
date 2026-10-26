# `SandConnectorSecretStore.removeAgentPlatform`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/connector-secret-store.ts` · [README do módulo](../../../../../../modules/host/extensions/session/connector-secret-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:719128-719142](../../../../../../../reference/runtime/host-main.cjs#L719128-L719142) | `method` | não | `agentId, platform2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719128-719142](../../../../../../../reference/runtime/host-main.cjs#L719128-L719142) | 1 | 0 | 0 | 1 | 1 | 1 |

### host:719128

Chamadas escritas diretamente neste corpo: `isSafeFolderId`, `new SandConnectorTokenRemovalRefusedError`, `this.filePath`, `this.inCheckedFolder`, `this.open`, `this.owner.onWriteFailed`, `this.read`, `this.reportFailure`.

Alvos de lançamento explícito: `SandConnectorTokenRemovalRefusedError`.

SHA-256 do trecho: `5dd2fae53bb9cba3b7730ec220bd888948a181505cb9593483a56ca03b72c007`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

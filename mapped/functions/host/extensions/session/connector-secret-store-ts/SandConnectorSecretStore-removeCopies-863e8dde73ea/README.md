# `SandConnectorSecretStore.removeCopies`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/connector-secret-store.ts` · [README do módulo](../../../../../../modules/host/extensions/session/connector-secret-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:719143-719158](../../../../../../../reference/runtime/host-main.cjs#L719143-L719158) | `method` | não | `agentId, path33, folder` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719143-719158](../../../../../../../reference/runtime/host-main.cjs#L719143-L719158) | 0 | 1 | 0 | 1 | 0 | 2 |

### host:719143

Chamadas escritas diretamente neste corpo: `.filter`, `this.removeCopy`, `this.reportFailure`.

Alvos de atribuição ou incremento: `copies`.

SHA-256 do trecho: `1ebb7a515b61032268814d4fd32be10f4b36656dc3ce3bb8a913a7e988a03205`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

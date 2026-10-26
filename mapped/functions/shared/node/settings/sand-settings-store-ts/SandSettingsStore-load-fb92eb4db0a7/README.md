# `_SandSettingsStore.load`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/settings/sand-settings-store.ts` · [README do módulo](../../../../../../modules/shared/node/settings/sand-settings-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:687780-687861](../../../../../../../reference/runtime/host-main.cjs#L687780-L687861) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687780-687861](../../../../../../../reference/runtime/host-main.cjs#L687780-L687861) | 22 | 0 | 0 | 4 | 0 | 1 |

### host:687780

Chamadas escritas diretamente neste corpo: `JSON.parse`, `_SandSettingsStore.storable`, `accountScopedSettingsOf`, `emptySettings`, `new Set`, `normalizeMcpCustomInstructions`, `normalizeMcpCustomInstructionsByServerId`, `normalizeMcpDisabledToolsByServerId`, `persistedSettingsSchema.safeParse`, `this.readText`, `this.refusalsLogged.clear`, `this.reportUnreadable`.

Alvos de atribuição ou incremento: `cause`, `json3`, `this.readRefused`, `this.unreadable`.

SHA-256 do trecho: `757983dd3a6f1b334e34028069e5ce171a11aa23a38c07d11cb37a322d49ff02`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

# `StoreDbBundleCapture.agentDbBundleIdentity`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/store-db-bundle-capture.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/store-db-bundle-capture-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:480072-480092](../../../../../../../reference/runtime/host-main.cjs#L480072-L480092) | `method` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480072-480092](../../../../../../../reference/runtime/host-main.cjs#L480072-L480092) | 5 | 1 | 2 | 4 | 0 | 1 |

### host:480072

Chamadas escritas diretamente neste corpo: `args.manifest.has`, `args.targets.map`, `findSystemErrno`, `identities.join`, `identities.push`, `new Set`, `targetPaths.has`, `this.agentHasPendingDbRecovery`.

Alvos de atribuição ou incremento: `fileStat`.

SHA-256 do trecho: `12f008d8b241bcaee24f300138120feb3728a168b45d184f2128c5fc2554d2a0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

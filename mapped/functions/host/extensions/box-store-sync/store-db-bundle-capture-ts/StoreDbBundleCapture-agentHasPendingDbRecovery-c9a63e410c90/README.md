# `StoreDbBundleCapture.agentHasPendingDbRecovery`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/store-db-bundle-capture.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/store-db-bundle-capture-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:480093-480112](../../../../../../../reference/runtime/host-main.cjs#L480093-L480112) | `method` | sim | `agentDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480093-480112](../../../../../../../reference/runtime/host-main.cjs#L480093-L480112) | 2 | 1 | 1 | 3 | 0 | 1 |

### host:480093

Chamadas escritas diretamente neste corpo: `errorLogTag`, `isMissingPathError`, `name18.endsWith`, `name18.startsWith`, `reportBoxStoreDiagnostic`.

Alvos de atribuição ou incremento: `names3`.

SHA-256 do trecho: `b34851e309750ab178a1605a3c95fded3558604dc2b59aee04fdab9f52a6b0b7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

# `_SandSettingsStore.setLocalToolPermissionsForMachines`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/settings/sand-settings-store.ts` · [README do módulo](../../../../../../modules/shared/node/settings/sand-settings-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:688370-688386](../../../../../../../reference/runtime/host-main.cjs#L688370-L688386) | `method` | não | `permissions` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688370-688386](../../../../../../../reference/runtime/host-main.cjs#L688370-L688386) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:688370

Chamadas escritas diretamente neste corpo: `.filter`, `Object.entries`, `entries.every`, `this.overwritingUnreadable`.

SHA-256 do trecho: `5558bc235161b2a7f591721e005873444810fe76cdd12757e1b6cd98f140708a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

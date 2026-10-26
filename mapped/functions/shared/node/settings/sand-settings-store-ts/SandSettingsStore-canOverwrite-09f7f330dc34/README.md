# `_SandSettingsStore.canOverwrite`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/settings/sand-settings-store.ts` · [README do módulo](../../../../../../modules/shared/node/settings/sand-settings-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:687903-687906](../../../../../../../reference/runtime/host-main.cjs#L687903-L687906) | `method` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687903-687906](../../../../../../../reference/runtime/host-main.cjs#L687903-L687906) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:687903

Chamadas escritas diretamente neste corpo: `parseJsonOrUndefined`, `persistedSettingsSchema.safeParse`.

SHA-256 do trecho: `3f62a25f1fbc2f8227cf428800b68f0e697b9acb9deb0cff78d49ded0a52cad0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

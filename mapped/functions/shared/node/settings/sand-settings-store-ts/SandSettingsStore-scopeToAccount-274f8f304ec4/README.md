# `_SandSettingsStore.scopeToAccount`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/settings/sand-settings-store.ts` · [README do módulo](../../../../../../modules/shared/node/settings/sand-settings-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:688082-688111](../../../../../../../reference/runtime/host-main.cjs#L688082-L688111) | `method` | não | `accountScope` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688082-688111](../../../../../../../reference/runtime/host-main.cjs#L688082-L688111) | 4 | 0 | 0 | 2 | 0 | 0 |

### host:688082

Chamadas escritas diretamente neste corpo: `accountScopedSettingsOf`, `accountScopedSettingsSchema.parse`, `scopeSeenRecord`, `this.loadForWrite`, `this.persist`, `withoutAccountScopedSettings`, `withoutSeenRecord`.

SHA-256 do trecho: `439835b79aab58a0f15e2004224b282f066b22c623eedfea0cf28321df042742`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

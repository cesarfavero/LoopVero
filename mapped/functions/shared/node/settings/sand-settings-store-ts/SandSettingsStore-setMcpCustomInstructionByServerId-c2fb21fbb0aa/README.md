# `_SandSettingsStore.setMcpCustomInstructionByServerId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/settings/sand-settings-store.ts` · [README do módulo](../../../../../../modules/shared/node/settings/sand-settings-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:688192-688213](../../../../../../../reference/runtime/host-main.cjs#L688192-L688213) | `method` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688192-688213](../../../../../../../reference/runtime/host-main.cjs#L688192-L688213) | 2 | 0 | 0 | 0 | 0 | 0 |

### host:688192

Chamadas escritas diretamente neste corpo: `clampMcpCustomInstruction`, `clamped.trim`, `getDefaultMcpCustomInstruction`, `this.loadForWrite`, `this.persist`.

Alvos de atribuição ou incremento: `byServerId[computed]`, `legacy[computed]`.

SHA-256 do trecho: `5bdcfc5ff0cccbe30a53728ad74af05a9c366fce8f6b33940bd53a620c898d9b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

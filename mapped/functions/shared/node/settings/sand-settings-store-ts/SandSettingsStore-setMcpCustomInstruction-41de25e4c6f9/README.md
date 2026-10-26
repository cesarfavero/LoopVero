# `_SandSettingsStore.setMcpCustomInstruction`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/settings/sand-settings-store.ts` · [README do módulo](../../../../../../modules/shared/node/settings/sand-settings-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:688243-688257](../../../../../../../reference/runtime/host-main.cjs#L688243-L688257) | `method` | não | `name18, value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688243-688257](../../../../../../../reference/runtime/host-main.cjs#L688243-L688257) | 2 | 0 | 0 | 0 | 0 | 0 |

### host:688243

Chamadas escritas diretamente neste corpo: `clampMcpCustomInstruction`, `clamped.trim`, `getDefaultMcpCustomInstruction`, `this.loadForWrite`, `this.persist`.

Alvos de atribuição ou incremento: `next[computed]`.

SHA-256 do trecho: `a1de4530356b8a35dc185acf22646e8473742028fc6a3d79574ef745c3527aa6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

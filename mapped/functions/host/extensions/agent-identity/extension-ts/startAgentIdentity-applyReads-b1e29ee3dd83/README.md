# `startAgentIdentity/applyReads`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:496589-496599](../../../../../../../reference/runtime/host-main.cjs#L496589-L496599) | `ArrowFunctionExpression` | não | `isOn` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496589-496599](../../../../../../../reference/runtime/host-main.cjs#L496589-L496599) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:496589

Chamadas escritas diretamente neste corpo: `service.reconcileNow`, `startFirstReadReconcile`.

Alvos de atribuição ou incremento: `hasEnabledReads`, `readsEnabled`.

SHA-256 do trecho: `6ad7c4bdeb06b55d005bffa5ebe04115b1e331d60f4447ef45e2b9c45261094b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

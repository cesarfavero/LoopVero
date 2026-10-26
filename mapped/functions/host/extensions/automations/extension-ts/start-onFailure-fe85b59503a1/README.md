# `start/onFailure`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/automations/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/automations/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:505945-505954](../../../../../../../reference/runtime/host-main.cjs#L505945-L505954) | `ArrowFunctionExpression` | não | `failure3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505945-505954](../../../../../../../reference/runtime/host-main.cjs#L505945-L505954) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:505945

Chamadas escritas diretamente neste corpo: `automationSyncFailureTrayIds.has`, `automationSyncFailureTrayIds.set`, `context2.deps.trays.pushError`, `hostTrayTitle`.

SHA-256 do trecho: `8744c66b9c7d9b6dd89bc28ff1389494433a68d81fbb92a404677a6443f5cfbd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

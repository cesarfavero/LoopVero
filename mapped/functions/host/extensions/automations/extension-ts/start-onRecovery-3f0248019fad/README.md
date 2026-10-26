# `start/onRecovery`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/automations/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/automations/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:505955-505960](../../../../../../../reference/runtime/host-main.cjs#L505955-L505960) | `ArrowFunctionExpression` | não | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505955-505960](../../../../../../../reference/runtime/host-main.cjs#L505955-L505960) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:505955

Chamadas escritas diretamente neste corpo: `automationSyncFailureTrayIds.delete`, `automationSyncFailureTrayIds.get`, `context2.deps.trays.dismiss`.

SHA-256 do trecho: `2f048be6af82df94f76ef47583ccccef9dc00cccccd16f5c4adf934151c42f03`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

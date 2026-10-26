# `startWorkingStateExport/exportAgent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/working-state-export/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/working-state-export/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:786158-786166](../../../../../../../reference/runtime/host-main.cjs#L786158-L786166) | `ArrowFunctionExpression` | sim | `agentId, limits` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786158-786166](../../../../../../../reference/runtime/host-main.cjs#L786158-L786166) | 2 | 0 | 2 | 1 | 0 | 0 |

### host:786158

Chamadas escritas diretamente neste corpo: `agentHarness`, `agentIdentity.adoptServerAgentById`, `exporter.exportAgent`, `getSandProfilePath`, `readSandProfileFile`, `readSandProfileServerId`, `sessionStore.getAgentDir`.

SHA-256 do trecho: `4d1d1d279a3b99cd1231e65cb1ec6cca94705ee5d692e99c02ab818a5b4b4c8e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

# `startWorkingStateExport/readServerId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/working-state-export/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/working-state-export/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:786073-786073](../../../../../../../reference/runtime/host-main.cjs#L786073-L786073) | `ArrowFunctionExpression` | não | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786073-786073](../../../../../../../reference/runtime/host-main.cjs#L786073-L786073) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:786073 usa retorno implícito de arrow function.

### host:786073

Chamadas escritas diretamente neste corpo: `getSandProfilePath`, `readSandProfileServerId`, `sessionStore.getAgentDir`.

SHA-256 do trecho: `e67a1060cdc713833e2cde0f12c55b7449f2297eb96d1827dea0c092da29ba96`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

# `SandMcpInstructionsAndToggles.getMcpCustomInstructions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-instructions-and-toggles.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-instructions-and-toggles-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:688565-688582](../../../../../../../reference/runtime/host-main.cjs#L688565-L688582) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688565-688582](../../../../../../../reference/runtime/host-main.cjs#L688565-L688582) | 2 | 2 | 0 | 1 | 0 | 0 |

### host:688565

Chamadas escritas diretamente neste corpo: `.getMcpCustomInstructions`, `.getMcpCustomInstructionsByServerId`, `Object.entries`, `new Map`, `resolveMcpCustomInstruction`, `result.set`, `this.deps.lastAccountDisplayConfig`, `this.deps.settingsStore`.

SHA-256 do trecho: `77e652d7f64fa60e092a966c92b14ac0a330d1b75e513ccb117d873221be643c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

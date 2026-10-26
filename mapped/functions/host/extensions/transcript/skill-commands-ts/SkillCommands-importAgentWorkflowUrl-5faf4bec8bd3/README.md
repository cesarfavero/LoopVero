# `SkillCommands.importAgentWorkflowUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/skill-commands.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/skill-commands-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:740351-740353](../../../../../../../reference/runtime/host-main.cjs#L740351-L740353) | `method` | sim | `agentId, url2, name18` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740351-740353](../../../../../../../reference/runtime/host-main.cjs#L740351-L740353) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:740351

Chamadas escritas diretamente neste corpo: `deriveSkillNameFromUrl`, `this.tm.importAgentSkillSource`.

SHA-256 do trecho: `a48ebab1ee38e762f4f02615839614b46152d457de25b5e3b7a627f59378e929`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

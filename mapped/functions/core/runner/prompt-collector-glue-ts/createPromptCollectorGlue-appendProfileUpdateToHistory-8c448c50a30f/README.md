# `createPromptCollectorGlue/appendProfileUpdateToHistory`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-collector-glue.ts` · [README do módulo](../../../../../modules/core/runner/prompt-collector-glue-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:533767-533788](../../../../../../reference/runtime/sand-eval-runner.cjs#L533767-L533788) | `FunctionDeclaration` | não | `messages, snapshot, onAppended` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533767-533788](../../../../../../reference/runtime/sand-eval-runner.cjs#L533767-L533788) | 3 | 0 | 0 | 4 | 0 | 0 |

### evaluation:533767

Chamadas escritas diretamente neste corpo: `agentProfileIdentitiesEqual`, `getLatestAgentProfileUpdate`, `host.agentProfileProvider`, `host.gates.agentDescription`, `host.gates.renamedPromptMarkers`, `messages.some`, `onAppended`, `promptedAgentProfileIdentity`, `renderAgentProfileUpdate`.

SHA-256 do trecho: `f1af7207c5f5912007b27a8a1e8306539a58ab4c782675c0a0cd9e8e629efb32`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

# `cloudAgentActionDescription`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-tool-descriptions.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-tool-descriptions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:770123-770134](../../../../../../reference/runtime/host-main.cjs#L770123-L770134) | `FunctionDeclaration` | não | `{   durableWatch,   replyModes,   publishRepository = false,   agentScope = "launched" }` |
| [evaluation:567494-567505](../../../../../../reference/runtime/sand-eval-runner.cjs#L567494-L567505) | `FunctionDeclaration` | não | `{   durableWatch,   replyModes,   publishRepository = false,   agentScope = "launched" }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770123-770134](../../../../../../reference/runtime/host-main.cjs#L770123-L770134) | 5 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:567494-567505](../../../../../../reference/runtime/sand-eval-runner.cjs#L567494-L567505) | 5 | 0 | 0 | 1 | 0 | 0 |

### host:770123

Chamadas escritas diretamente neste corpo: `cloudAgentReplyActionClause`.

SHA-256 do trecho: `f9d492f381ae42795b0ea9a7af95c64fb142f28a04491306c0ce46143a002af2`.

### evaluation:567494

Chamadas escritas diretamente neste corpo: `cloudAgentReplyActionClause`.

SHA-256 do trecho: `f9d492f381ae42795b0ea9a7af95c64fb142f28a04491306c0ce46143a002af2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

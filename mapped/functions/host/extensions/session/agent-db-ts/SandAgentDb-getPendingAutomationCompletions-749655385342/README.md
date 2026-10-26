# `SandAgentDb.getPendingAutomationCompletions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-db.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-db-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:718714-718731](../../../../../../../reference/runtime/host-main.cjs#L718714-L718731) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718714-718731](../../../../../../../reference/runtime/host-main.cjs#L718714-L718731) | 3 | 1 | 0 | 2 | 0 | 0 |

### host:718714

Chamadas escritas diretamente neste corpo: `boundSandAutomationCompletion`, `completions.push`, `this.statements.listPendingAutomationCompletions.all`.

SHA-256 do trecho: `bd218ddc007aaae12a39b453c83dd36fd53d8ee3fc46dccec22ec3b4b58807cf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

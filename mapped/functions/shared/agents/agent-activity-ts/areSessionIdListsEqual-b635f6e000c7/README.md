# `areSessionIdListsEqual`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/agents/agent-activity.ts` · [README do módulo](../../../../../modules/shared/agents/agent-activity-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:490215-490219](../../../../../../reference/runtime/host-main.cjs#L490215-L490219) | `FunctionDeclaration` | não | `left, right` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490215-490219](../../../../../../reference/runtime/host-main.cjs#L490215-L490219) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:490215

Chamadas escritas diretamente neste corpo: `left.every`.

SHA-256 do trecho: `00dd293ba41ed96a1db0ba778658dd39f6b52475d9c4c5cf219c630e4ec83999`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

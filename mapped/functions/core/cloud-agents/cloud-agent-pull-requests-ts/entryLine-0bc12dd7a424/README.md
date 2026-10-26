# `entryLine`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-pull-requests.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-pull-requests-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:566638-566641](../../../../../../reference/runtime/sand-eval-runner.cjs#L566638-L566641) | `FunctionDeclaration` | não | `entry, byId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566638-566641](../../../../../../reference/runtime/sand-eval-runner.cjs#L566638-L566641) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:566638

Chamadas escritas diretamente neste corpo: `.join`, `entry.owners.map`, `others.map`.

SHA-256 do trecho: `ca0c60271ed15a325cd5da77a6219283b2e1367952e708398e56046635e684b5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

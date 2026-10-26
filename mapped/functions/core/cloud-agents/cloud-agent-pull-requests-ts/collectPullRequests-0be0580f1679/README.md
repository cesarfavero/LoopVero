# `collectPullRequests`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-pull-requests.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-pull-requests-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:566594-566610](../../../../../../reference/runtime/sand-eval-runner.cjs#L566594-L566610) | `FunctionDeclaration` | não | `agents` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566594-566610](../../../../../../reference/runtime/sand-eval-runner.cjs#L566594-L566610) | 3 | 2 | 0 | 1 | 0 | 0 |

### evaluation:566594

Chamadas escritas diretamente neste corpo: `byUrl.get`, `byUrl.set`, `entries.push`, `new Map`, `ownPullRequests`, `shared.owners.push`.

SHA-256 do trecho: `d32ef0ad6db3a926261521c44b82dcdd2ffa02726827b79727a0c8a93ad44154`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

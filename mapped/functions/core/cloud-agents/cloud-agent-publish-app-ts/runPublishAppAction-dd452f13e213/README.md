# `runPublishAppAction`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-publish-app.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-publish-app-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:566922-566944](../../../../../../reference/runtime/sand-eval-runner.cjs#L566922-L566944) | `FunctionDeclaration` | sim | `deps, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566922-566944](../../../../../../reference/runtime/sand-eval-runner.cjs#L566922-L566944) | 4 | 0 | 2 | 4 | 1 | 1 |

### evaluation:566922

Chamadas escritas diretamente neste corpo: `args.agent_id.trim`, `args.project_dir.trim`, `deps.api.publishApp`, `describePublishAppResult`, `publishAppRejectionMessage`, `raiseCard`.

Alvos de atribuição ou incremento: `result`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `beec14689a4729ad624897b4ae016569f3c38e578101644ee78c1e2150b6002a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

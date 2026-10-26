# `SandRequestContextExecutor.execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/agent-adapters.ts` · [README do módulo](../../../../../modules/core/runner/agent-adapters-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:582900-582927](../../../../../../reference/runtime/sand-eval-runner.cjs#L582900-L582927) | `method` | sim | `_ctx, _args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582900-582927](../../../../../../reference/runtime/sand-eval-runner.cjs#L582900-L582927) | 3 | 0 | 1 | 1 | 0 | 0 |

### evaluation:582900

Chamadas escritas diretamente neste corpo: `Timestamp.fromDate`, `cloudAgentBotStoreMounted`, `new McpMetaToolOptions`, `new RequestContext`, `new RequestContextEnv`, `new RequestContextResult`, `new RequestContextSuccess`, `this.requestContext.resolve`, `this.requestContext.resolveRules`, `this.resolveAgentSkills`.

Alvos de atribuição ou incremento: `this.rulesPromise`.

SHA-256 do trecho: `47aa4a8910b29fa213bfa923c5c1d444c7f447a74ea5563f59b95e00c80e160e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).

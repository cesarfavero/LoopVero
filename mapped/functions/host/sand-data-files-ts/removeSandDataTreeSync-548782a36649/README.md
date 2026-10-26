# `removeSandDataTreeSync`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-data-files.ts` · [README do módulo](../../../../modules/host/sand-data-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453908-453917](../../../../../reference/runtime/host-main.cjs#L453908-L453917) | `FunctionDeclaration` | não | `target` |
| [evaluation:627559-627568](../../../../../reference/runtime/sand-eval-runner.cjs#L627559-L627568) | `FunctionDeclaration` | não | `target` |
| [state-worker:546-555](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L546-L555) | `FunctionDeclaration` | não | `target` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453908-453917](../../../../../reference/runtime/host-main.cjs#L453908-L453917) | 1 | 0 | 0 | 0 | 1 | 1 |
| [evaluation:627559-627568](../../../../../reference/runtime/sand-eval-runner.cjs#L627559-L627568) | 1 | 0 | 0 | 0 | 1 | 1 |
| [state-worker:546-555](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L546-L555) | 1 | 0 | 0 | 0 | 1 | 1 |

### host:453908

Chamadas escritas diretamente neste corpo: `findSystemErrno`, `withParentNoFollowSync`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `173a9948df324af0f4e622159eb1797d0150161501fd14ef410cbeb74a93a427`.

### evaluation:627559

Chamadas escritas diretamente neste corpo: `findSystemErrno`, `withParentNoFollowSync`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `4795c601f14469a21ff720f109f3edcee2af51ccc12a1d48f6cc5b955782054c`.

### state-worker:546

Chamadas escritas diretamente neste corpo: `findSystemErrno`, `withParentNoFollowSync`.

Alvos de lançamento explícito: `error`.

SHA-256 do trecho: `a53b8996e28654ec9dcfdce32f1772c45f86c52b49e294b8514bf9ff41c19687`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).

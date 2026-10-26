# `resolveTrigger`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-state-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:762668-762688](../../../../../../../reference/runtime/host-main.cjs#L762668-L762688) | `FunctionDeclaration` | não | `args, need, fallback3` |
| [evaluation:555278-555298](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555278-L555298) | `FunctionDeclaration` | não | `args, need, fallback2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762668-762688](../../../../../../../reference/runtime/host-main.cjs#L762668-L762688) | 6 | 0 | 0 | 4 | 3 | 0 |
| [evaluation:555278-555298](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555278-L555298) | 6 | 0 | 0 | 4 | 3 | 0 |

### host:762668

Chamadas escritas diretamente neste corpo: `cronTrigger`, `findUnboundedRepoListener`, `isTriggerParseFailure`, `need`, `new SandToolInputError`, `parseStoredTrigger`, `renderTriggerParseFailure`, `renderUnboundedRepoListenerRefusal`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `1de1cb9e4ab3c944c03db0692829ebd3c7f95ff76e7fc51a91b200fdc4ca4ba9`.

### evaluation:555278

Chamadas escritas diretamente neste corpo: `cronTrigger`, `findUnboundedRepoListener`, `isTriggerParseFailure`, `need`, `new SandToolInputError`, `parseStoredTrigger`, `renderTriggerParseFailure`, `renderUnboundedRepoListenerRefusal`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `3a9772b19127b05b4a698e82e757508689bfc69c0578e7f3931f85bb063b505a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).

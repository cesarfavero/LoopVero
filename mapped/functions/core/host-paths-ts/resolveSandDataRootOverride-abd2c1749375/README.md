# `resolveSandDataRootOverride`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `core/host-paths.ts` · [README do módulo](../../../../modules/core/host-paths-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:430902-430905](../../../../../reference/runtime/host-main.cjs#L430902-L430905) | `FunctionDeclaration` | não | `env = process.env` |
| [evaluation:530494-530497](../../../../../reference/runtime/sand-eval-runner.cjs#L530494-L530497) | `FunctionDeclaration` | não | `env = process.env` |
| [state-worker:413-416](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L413-L416) | `FunctionDeclaration` | não | `env = process.env` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430902-430905](../../../../../reference/runtime/host-main.cjs#L430902-L430905) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:530494-530497](../../../../../reference/runtime/sand-eval-runner.cjs#L530494-L530497) | 1 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:413-416](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L413-L416) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:430902

Chamadas escritas diretamente neste corpo: `env[computed].trim`.

SHA-256 do trecho: `f6831a46f8faaffe67286dceafd7f6ea0a6a678be166093898c97d39e6674ffe`.

### evaluation:530494

Chamadas escritas diretamente neste corpo: `env[computed].trim`.

SHA-256 do trecho: `a48bc204a2b46b166b043d0cd59f6f57f7d01fd6943ca0f75c730c928f98e579`.

### state-worker:413

Chamadas escritas diretamente neste corpo: `env[computed].trim`.

SHA-256 do trecho: `5d0f1cbc143c87a5bddbdf4c1089c9f9d4050569b2fbff891215f65bb86dbb21`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).

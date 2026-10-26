# `topApplicationFrame`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `shared/invariant.ts` · [README do módulo](../../../../modules/shared/invariant-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:837-846](../../../../../reference/runtime/host-main.cjs#L837-L846) | `FunctionDeclaration` | não | `violation` |
| [evaluation:474318-474327](../../../../../reference/runtime/sand-eval-runner.cjs#L474318-L474327) | `FunctionDeclaration` | não | `violation` |
| [state-worker:42-51](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L42-L51) | `FunctionDeclaration` | não | `violation` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:837-846](../../../../../reference/runtime/host-main.cjs#L837-L846) | 2 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:474318-474327](../../../../../reference/runtime/sand-eval-runner.cjs#L474318-L474327) | 2 | 1 | 0 | 3 | 0 | 0 |
| [state-worker:42-51](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L42-L51) | 2 | 1 | 0 | 3 | 0 | 0 |

### host:837

Chamadas escritas diretamente neste corpo: `.split`, `FRAME_LINE.test`, `headerOf`, `raw.trim`, `stack.slice`, `stack.startsWith`.

SHA-256 do trecho: `5812e62274c454dffd5b90e9bb20feb5b2c96778fdd17dafc91da1074d30f88d`.

### evaluation:474318

Chamadas escritas diretamente neste corpo: `.split`, `FRAME_LINE.test`, `headerOf`, `raw.trim`, `stack.slice`, `stack.startsWith`.

SHA-256 do trecho: `5812e62274c454dffd5b90e9bb20feb5b2c96778fdd17dafc91da1074d30f88d`.

### state-worker:42

Chamadas escritas diretamente neste corpo: `.split`, `FRAME_LINE.test`, `headerOf`, `raw.trim`, `stack.slice`, `stack.startsWith`.

SHA-256 do trecho: `5812e62274c454dffd5b90e9bb20feb5b2c96778fdd17dafc91da1074d30f88d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
